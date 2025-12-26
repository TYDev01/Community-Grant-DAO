import { Clarinet, Tx, Chain, Account, types } from "@hirosystems/clarinet-sdk";

const CONTRACT = "community-grant-dao";

function contractPrincipal(account: Account): string {
  return `${account.address}.${CONTRACT}`;
}

function mockTokenPrincipal(account: Account): string {
  return `${account.address}.mock-sip010`;
}

Clarinet.test({
  name: "proposal creation stores data",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!;
    const recipient = accounts.get("wallet_1")!;

    const block = chain.mineBlock([
      Tx.contractCall(
        CONTRACT,
        "create-proposal",
        [
          types.ascii("Community grant 1"),
          types.principal(recipient.address),
          types.uint(1000),
          types.uint(1),
          types.uint(5),
        ],
        deployer.address
      ),
    ]);

    block.receipts[0].result.expectOk().expectUint(1);

    const read = chain.callReadOnlyFn(
      CONTRACT,
      "get-proposal-data",
      [types.uint(1)],
      deployer.address
    );
    read.result.expectSome();
  },
});

Clarinet.test({
  name: "voting window enforced",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!;
    const voter = accounts.get("wallet_2")!;

    const create = chain.mineBlock([
      Tx.contractCall(
        CONTRACT,
        "create-proposal",
        [
          types.ascii("Window test"),
          types.principal(voter.address),
          types.uint(1000),
          types.uint(5),
          types.uint(7),
        ],
        deployer.address
      ),
    ]);
    create.receipts[0].result.expectOk().expectUint(1);

    const earlyVote = chain.mineBlock([
      Tx.contractCall(
        CONTRACT,
        "vote",
        [types.uint(1), types.bool(true)],
        voter.address
      ),
    ]);
    earlyVote.receipts[0].result.expectErr().expectUint(103);
  },
});

Clarinet.test({
  name: "no double voting",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!;
    const voter = accounts.get("wallet_1")!;

    const create = chain.mineBlock([
      Tx.contractCall(
        CONTRACT,
        "create-proposal",
        [
          types.ascii("Double vote"),
          types.principal(voter.address),
          types.uint(1000),
          types.uint(1),
          types.uint(10),
        ],
        deployer.address
      ),
    ]);
    create.receipts[0].result.expectOk().expectUint(1);

    const firstVote = chain.mineBlock([
      Tx.contractCall(
        CONTRACT,
        "vote",
        [types.uint(1), types.bool(true)],
        voter.address
      ),
    ]);
    firstVote.receipts[0].result.expectOk().expectBool(true);

    const secondVote = chain.mineBlock([
      Tx.contractCall(
        CONTRACT,
        "vote",
        [types.uint(1), types.bool(false)],
        voter.address
      ),
    ]);
    secondVote.receipts[0].result.expectErr().expectUint(104);
  },
});

Clarinet.test({
  name: "execute only after end and passing",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!;
    const recipient = accounts.get("wallet_3")!;
    const voter = accounts.get("wallet_4")!;

    const setup = chain.mineBlock([
      Tx.transferSTX(5000, deployer.address, contractPrincipal(deployer)),
      Tx.contractCall(
        CONTRACT,
        "create-proposal",
        [
          types.ascii("Execute test"),
          types.principal(recipient.address),
          types.uint(1000),
          types.uint(1),
          types.uint(2),
        ],
        deployer.address
      ),
    ]);
    setup.receipts[1].result.expectOk().expectUint(1);

    const voteBlock = chain.mineBlock([
      Tx.contractCall(
        CONTRACT,
        "vote",
        [types.uint(1), types.bool(true)],
        voter.address
      ),
    ]);
    voteBlock.receipts[0].result.expectOk().expectBool(true);

    const earlyExec = chain.mineBlock([
      Tx.contractCall(CONTRACT, "execute", [types.uint(1)], deployer.address),
    ]);
    earlyExec.receipts[0].result.expectErr().expectUint(105);

    chain.mineBlock([]);

    const exec = chain.mineBlock([
      Tx.contractCall(CONTRACT, "execute", [types.uint(1)], deployer.address),
    ]);
    exec.receipts[0].result.expectOk();

    const read = chain.callReadOnlyFn(
      CONTRACT,
      "get-proposal-data",
      [types.uint(1)],
      deployer.address
    );
    read.result.expectSome();
  },
});

Clarinet.test({
  name: "sip-010 vote weight used when token set",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!;
    const voter = accounts.get("wallet_1")!;

    const setup = chain.mineBlock([
      Tx.contractCall(
        CONTRACT,
        "set-governance-token",
        [types.principal(mockTokenPrincipal(deployer))],
        deployer.address
      ),
      Tx.contractCall(
        "mock-sip010",
        "set-balance",
        [types.principal(voter.address), types.uint(3)],
        deployer.address
      ),
      Tx.contractCall(
        CONTRACT,
        "create-proposal",
        [
          types.ascii("Weighted vote"),
          types.principal(voter.address),
          types.uint(1000),
          types.uint(1),
          types.uint(10),
        ],
        deployer.address
      ),
    ]);
    setup.receipts[2].result.expectOk().expectUint(1);

    const vote = chain.mineBlock([
      Tx.contractCall(
        CONTRACT,
        "vote",
        [types.uint(1), types.bool(true)],
        voter.address
      ),
    ]);
    vote.receipts[0].result.expectOk().expectBool(true);

    const read = chain.callReadOnlyFn(
      CONTRACT,
      "get-proposal-data",
      [types.uint(1)],
      deployer.address
    );
    const proposal = read.result.expectSome().expectTuple();
    proposal["yes-votes"].expectUint(3);
  },
});
