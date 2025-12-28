# Improvements and missing features

## Product and UX
- Frontend UI: create proposal form, proposal list with status, vote buttons, execute button.
- Proposal list filters: active, pending, passed, failed, executed, canceled.
- Wallet connect flow and transaction feedback (pending/success/error).

## Contract features
- SIP-010 token-weighted voting (Option B) with a governance token address + balance lookup.
- Prevent voting on canceled proposals (currently voting only checks block window).
- Enforce sane windows: require `start-block` >= current block and cap max window length.
- Treasury safety: restrict or remove `withdraw` (currently any proposal creator can drain funds).
- Add minimum quorum or approval threshold (optional governance hardening).
- Add event logs/prints for create/vote/execute/cancel to improve indexing.

## Read-only helpers
- Add a read-only to return proposal status enum mapping (or constants) for client UX.
- Add a read-only to list proposals by range (pagination over `proposal-count`).

## Tests
- Cover cancel flow (creator-only, before start, no voting after cancel).
- Cover `deposit` and treasury balance updates.
- Cover execute failures when treasury is underfunded.
- Cover vote-weight behavior once SIP-010 weighting is implemented.

## Docs and setup
- Document proposal status codes and UX mapping in README.
- Add deployment/usage instructions (funding treasury, sample flows).
