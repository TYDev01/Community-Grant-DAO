# Community-Grant-DAO

Community Grant DAO on Stacks. Proposals send STX from a contract-held treasury and are voted on by token weight.

Current governance mode: Option A (1 wallet = 1 vote).

## Contract

- `create-proposal`: create a proposal with a title, recipient, amount, and voting window.
- `vote`: vote yes/no once per proposal within the voting window.
- `execute`: after voting ends, transfers STX to the recipient if yes > no.
- Read-only helpers: `get-proposal-data`, `get-proposal-count`, `has-voted`.

### Proposal status codes

`get-proposal-status` returns these codes (also exposed via `get-proposal-status-codes`):

- `u0` active (voting open)
- `u1` failed (voting closed, not passed)
- `u2` passed (voting closed, passed, not executed)
- `u3` executed
- `u4` pending (voting not started)
- `u5` canceled

## Setup

Requires Clarinet 4.

## Commands

```bash
clarinet check
clarinet test
```

## Notes

- Fund the contract address before executing proposals.
- SIP-010 weighting is not implemented in this Clarinet setup.

## Deployment and usage

### Fund the treasury

Send STX to the contract address (from a wallet or using a test transaction) before calling `execute`.

### Sample flow

1) Create a proposal with a start/end block window.
2) Wait until the start block, then vote yes/no.
3) After the end block, call `execute` if the proposal passed.

### Governance token (optional)

If a SIP-010 token is configured, voting weight uses `get-balance` at vote time. Otherwise, each wallet has weight 1.
