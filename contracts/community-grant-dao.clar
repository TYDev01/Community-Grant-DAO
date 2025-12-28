(define-constant ERR_TITLE_TOO_LONG (err u100))
(define-constant ERR_INVALID_WINDOW (err u101))
(define-constant ERR_NOT_FOUND (err u102))
(define-constant ERR_VOTING_CLOSED (err u103))
(define-constant ERR_ALREADY_VOTED (err u104))
(define-constant ERR_NOT_ENDED (err u105))
(define-constant ERR_ALREADY_EXECUTED (err u106))
(define-constant ERR_NOT_PASSED (err u107))
(define-constant ERR_INSUFFICIENT_AMOUNT (err u108))
(define-constant ERR_NOT_CREATOR (err u109))
(define-constant ERR_ALREADY_CANCELED (err u110))
(define-constant ERR_VOTING_STARTED (err u111))
(define-constant ERR_WINDOW_TOO_LONG (err u112))
(define-constant ERR_WITHDRAW_DISABLED (err u113))

(define-constant MAX_TITLE_LEN u64)
(define-constant MAX_WINDOW_LEN u1440)

(define-data-var proposal-count uint u0)

(define-map proposals
  {id: uint}
  {
    title: (string-ascii 64),
    creator: principal,
    recipient: principal,
    amount: uint,
    start-block: uint,
    end-block: uint,
    yes-votes: uint,
    no-votes: uint,
    executed: bool,
    canceled: bool
  }
)

(define-map votes
  {proposal-id: uint, voter: principal}
  {supported: bool}
)

(define-private (get-proposal (proposal-id uint))
  (map-get? proposals {id: proposal-id})
)

(define-read-only (get-proposal-data (proposal-id uint))
  (get-proposal proposal-id)
)

(define-read-only (get-proposal-count)
  (var-get proposal-count)
)

(define-read-only (has-voted (proposal-id uint) (voter principal))
  (is-some (map-get? votes {proposal-id: proposal-id, voter: voter}))
)

(define-public (deposit (amount uint))
  (begin
    (asserts! (> amount u0) ERR_INSUFFICIENT_AMOUNT)
    (stx-transfer? amount tx-sender (as-contract tx-sender))
  )
)

(define-read-only (get-treasury-balance)
  (stx-get-balance (as-contract tx-sender))
)

(define-read-only (get-vote (proposal-id uint) (voter principal))
  (map-get? votes {proposal-id: proposal-id, voter: voter})
)

(define-read-only (can-execute (proposal-id uint))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (and
        (> block-height (get end-block current))
        (not (get executed current))
        (not (get canceled current))
        (> (get yes-votes current) (get no-votes current))
      )
      false
    )
  )
)

(define-read-only (is-voting-open (proposal-id uint))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (and
        (not (get canceled current))
        (>= block-height (get start-block current))
        (<= block-height (get end-block current))
      )
      false
    )
  )
)

(define-read-only (get-proposal-status (proposal-id uint))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (if (get canceled current)
        (ok u5)
        (if (get executed current)
          (ok u3)
          (if (> block-height (get end-block current))
            (if (> (get yes-votes current) (get no-votes current))
              (ok u2)
              (ok u1)
            )
            (if (>= block-height (get start-block current))
              (ok u0)
              (ok u4)
            )
          )
        )
      )
      ERR_NOT_FOUND
    )
  )
)
(define-private (get-vote-weight (voter principal))
  u1
)

(define-read-only (get-vote-weight-readonly (voter principal))
  (get-vote-weight voter)
)

(define-read-only (get-max-title-length)
  MAX_TITLE_LEN
)

(define-read-only (get-proposal-votes (proposal-id uint))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (ok {yes: (get yes-votes current), no: (get no-votes current)})
      ERR_NOT_FOUND
    )
  )
)

(define-read-only (get-proposal-window (proposal-id uint))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (ok {start: (get start-block current), end: (get end-block current)})
      ERR_NOT_FOUND
    )
  )
)

(define-read-only (get-proposal-summary (proposal-id uint))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (ok {
        title: (get title current),
        creator: (get creator current),
        recipient: (get recipient current),
        amount: (get amount current),
        executed: (get executed current),
        canceled: (get canceled current)
      })
      ERR_NOT_FOUND
    )
  )
)

(define-read-only (is-canceled (proposal-id uint))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (get canceled current)
      false
    )
  )
)


(define-public (create-proposal
  (title (string-ascii 64))
  (recipient principal)
  (amount uint)
  (start-block uint)
  (end-block uint)
)
  (begin
    (asserts! (<= (len title) MAX_TITLE_LEN) ERR_TITLE_TOO_LONG)
    (asserts! (> amount u0) ERR_INSUFFICIENT_AMOUNT)
    (asserts! (< start-block end-block) ERR_INVALID_WINDOW)
    (asserts! (>= start-block block-height) ERR_INVALID_WINDOW)
    (asserts! (<= (- end-block start-block) MAX_WINDOW_LEN) ERR_WINDOW_TOO_LONG)
    (let ((next-id (+ (var-get proposal-count) u1)))
      (var-set proposal-count next-id)
      (map-set proposals
        {id: next-id}
        {
          title: title,
          creator: tx-sender,
          recipient: recipient,
          amount: amount,
          start-block: start-block,
          end-block: end-block,
          yes-votes: u0,
          no-votes: u0,
          executed: false,
          canceled: false
        }
      )
      (ok next-id)
    )
  )
)

(define-public (vote (proposal-id uint) (support bool))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (begin
        (asserts! (not (get canceled current)) ERR_ALREADY_CANCELED)
        (asserts! (>= block-height (get start-block current)) ERR_VOTING_CLOSED)
        (asserts! (<= block-height (get end-block current)) ERR_VOTING_CLOSED)
        (asserts! (is-none (map-get? votes {proposal-id: proposal-id, voter: tx-sender})) ERR_ALREADY_VOTED)
        (let ((weight (get-vote-weight tx-sender)))
          (map-set votes {proposal-id: proposal-id, voter: tx-sender} {supported: support})
          (if support
            (map-set proposals
              {id: proposal-id}
              (merge current {yes-votes: (+ (get yes-votes current) weight)})
            )
            (map-set proposals
              {id: proposal-id}
              (merge current {no-votes: (+ (get no-votes current) weight)})
            )
          )
          (ok true)
        )
      )
      ERR_NOT_FOUND
    )
  )
)

(define-public (execute (proposal-id uint))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (begin
        (asserts! (> block-height (get end-block current)) ERR_NOT_ENDED)
        (asserts! (not (get executed current)) ERR_ALREADY_EXECUTED)
        (asserts! (not (get canceled current)) ERR_ALREADY_CANCELED)
        (asserts! (> (get yes-votes current) (get no-votes current)) ERR_NOT_PASSED)
        (let ((transfer (as-contract (stx-transfer? (get amount current) tx-sender (get recipient current)))))
          (match transfer
            ok-result
            (begin
              (map-set proposals {id: proposal-id} (merge current {executed: true}))
              (ok ok-result)
            )
            err-code
            (err err-code)
          )
        )
      )
      ERR_NOT_FOUND
    )
  )
)

(define-public (cancel-proposal (proposal-id uint))
  (let ((proposal (get-proposal proposal-id)))
    (match proposal current
      (begin
        (asserts! (is-eq (get creator current) tx-sender) ERR_NOT_CREATOR)
        (asserts! (not (get canceled current)) ERR_ALREADY_CANCELED)
        (asserts! (< block-height (get start-block current)) ERR_VOTING_STARTED)
        (map-set proposals {id: proposal-id} (merge current {canceled: true}))
        (ok true)
      )
      ERR_NOT_FOUND
    )
  )
)

(define-public (withdraw (proposal-id uint) (amount uint))
  (err ERR_WITHDRAW_DISABLED)
)
