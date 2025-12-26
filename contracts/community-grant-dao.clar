(define-constant ERR_TITLE_TOO_LONG (err u100))
(define-constant ERR_INVALID_WINDOW (err u101))
(define-constant ERR_NOT_FOUND (err u102))
(define-constant ERR_VOTING_CLOSED (err u103))
(define-constant ERR_ALREADY_VOTED (err u104))
(define-constant ERR_NOT_ENDED (err u105))
(define-constant ERR_ALREADY_EXECUTED (err u106))
(define-constant ERR_NOT_PASSED (err u107))
(define-constant ERR_INSUFFICIENT_AMOUNT (err u108))

(define-constant MAX_TITLE_LEN u64)

(define-data-var proposal-count uint u0)
(define-data-var governance-token (optional principal) none)

(define-map proposals
  {id: uint}
  {
    title: (string-ascii 64),
    recipient: principal,
    amount: uint,
    start-block: uint,
    end-block: uint,
    yes-votes: uint,
    no-votes: uint,
    executed: bool
  }
)

(define-map votes
  {proposal-id: uint, voter: principal}
  {supported: bool}
)

(define-private (get-proposal (proposal-id uint))
  (map-get? proposals {id: proposal-id})
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
    (let ((next-id (+ (var-get proposal-count) u1)))
      (var-set proposal-count next-id)
      (map-set proposals
        {id: next-id}
        {
          title: title,
          recipient: recipient,
          amount: amount,
          start-block: start-block,
          end-block: end-block,
          yes-votes: u0,
          no-votes: u0,
          executed: false
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
        (asserts! (>= block-height (get start-block current)) ERR_VOTING_CLOSED)
        (asserts! (<= block-height (get end-block current)) ERR_VOTING_CLOSED)
        (asserts! (is-none (map-get? votes {proposal-id: proposal-id, voter: tx-sender})) ERR_ALREADY_VOTED)
        (map-set votes {proposal-id: proposal-id, voter: tx-sender} {supported: support})
        (if support
          (map-set proposals
            {id: proposal-id}
            (merge current {yes-votes: (+ (get yes-votes current) u1)})
          )
          (map-set proposals
            {id: proposal-id}
            (merge current {no-votes: (+ (get no-votes current) u1)})
          )
        )
        (ok true)
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
