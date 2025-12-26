# Community-Grant-DAO

Community Grant DAO on Stacks. Proposals send STX from a contract-held treasury and are voted on by token weight.

Current governance mode: Option A (1 wallet = 1 vote).

## Contract

- `create-proposal`: create a proposal with a title, recipient, amount, and voting window.
- `vote`: vote yes/no once per proposal within the voting window.
- `execute`: after voting ends, transfers STX to the recipient if yes > no.
- Read-only helpers: `get-proposal-data`, `get-proposal-count`, `has-voted`.

## Setup

Requires Clarinet 4.

## Commands

```bash
clarinet check
clarinet test
```

## Notes

- Fund the contract address before executing proposals.
- SIP-010 weighting is not yet implemented.
