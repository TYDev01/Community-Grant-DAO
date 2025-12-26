(define-map balances {owner: principal} {balance: uint})

(define-read-only (get-balance (owner principal))
  (ok (default-to u0 (get balance (map-get? balances {owner: owner}))))
)

(define-public (set-balance (owner principal) (amount uint))
  (begin
    (map-set balances {owner: owner} {balance: amount})
    (ok true)
  )
)
