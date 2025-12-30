export default function Home() {
  const statusStyles: Record<string, string> = {
    Voting: "bg-[#1f1b16] text-[#f7f2e9]",
    Review: "bg-[#f7d8a3] text-[#5f3c06]",
    Draft: "bg-[#d8edf0] text-[#20545d]",
    Passed: "bg-[#d6f2d9] text-[#246337]",
    Failed: "bg-[#f7c7bf] text-[#7f1e18]",
    Executed: "bg-[#e3ddfb] text-[#3f2f7a]",
    Success: "bg-[#d6f2d9] text-[#246337]",
    Pending: "bg-[#f7d8a3] text-[#5f3c06]",
    Error: "bg-[#f7c7bf] text-[#7f1e18]",
  };
  const proposals = [
    {
      title: "Open Source Education Grants",
      status: "Voting",
      budget: "$180k",
      lead: "Lead: Aisha P.",
      yes: 62,
      no: 18,
      ends: "Ends in 2d 4h",
    },
    {
      title: "Neighborhood Network Upgrades",
      status: "Review",
      budget: "$95k",
      lead: "Lead: Mateo C.",
      yes: 44,
      no: 9,
      ends: "Voting opens in 6h",
    },
    {
      title: "Community Studio Residency",
      status: "Draft",
      budget: "$42k",
      lead: "Lead: Yara K.",
      yes: 0,
      no: 0,
      ends: "Draft closes in 3d",
    },
  ];
  return (
    <div className="min-h-screen bg-[#f7f2e9] text-[#1f1b16] font-sans">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,transparent_60%)] opacity-80" />
        <div className="absolute -top-32 -right-16 h-80 w-80 rounded-full bg-[#f6c77a]/60 blur-3xl float-slow" />
        <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-[#9ad0c7]/50 blur-3xl float-slower" />
        <div className="absolute top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#f79b7f]/30 blur-3xl" />

        <header className="relative z-10">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-[#1f1b16] text-[#f7f2e9] grid place-items-center text-sm font-semibold">
                CD
              </span>
              <div className="leading-tight">
                <p className="text-sm uppercase tracking-[0.2em] text-[#6a5f55]">
                  Community DAO
                </p>
                <p className="text-xs text-[#8a7d71]">Collective treasury</p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-[#5a5148] md:flex">
              <a className="transition hover:text-[#1f1b16]" href="#flow">
                Flow
              </a>
              <a className="transition hover:text-[#1f1b16]" href="#proposals">
                Proposals
              </a>
              <a className="transition hover:text-[#1f1b16]" href="#treasury">
                Treasury
              </a>
              <a className="transition hover:text-[#1f1b16]" href="#membership">
                Membership
              </a>
            </nav>
            <button className="rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
              Launch App
            </button>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32">
            <div className="fade-up" style={{ animationDelay: "80ms" }}>
              <p className="text-sm uppercase tracking-[0.25em] text-[#7f7267]">
                On-chain coordination
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#1f1b16] sm:text-6xl sm:leading-tight font-[var(--font-display)]">
                Build proposals that move real budgets, not just opinions.
              </h1>
              <p className="mt-6 text-lg text-[#5a5148] sm:text-xl">
                Community DAO makes funding decisions feel tangible: clear
                proposal stages, visible treasury health, and voting that
                protects your momentum.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#1f1b16] px-6 py-3 text-sm font-medium text-[#f7f2e9] transition hover:bg-[#3a332c]">
                  Start a proposal
                </button>
                <button className="rounded-full border border-[#1f1b16] px-6 py-3 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                  View live governance
                </button>
              </div>
              <div className="mt-10 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-[#7b6f65]">
                <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                  1,248 members
                </span>
                <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                  38 active grants
                </span>
                <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                  12 city pods
                </span>
              </div>
            </div>

            <div
              className="fade-up"
              style={{ animationDelay: "180ms" }}
            >
              <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-6 shadow-[0_30px_80px_rgba(31,27,22,0.12)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                    Treasury pulse
                  </p>
                  <span className="rounded-full bg-[#e8f2e9] px-3 py-1 text-xs font-semibold text-[#2f6c4a]">
                    +18% this quarter
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                  $2.8M
                </h2>
                <p className="text-sm text-[#6a5f55]">
                  Available for community initiatives, research, and local
                  events.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8a7d71]">
                      Runway
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#1f1b16]">
                      14 months
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8a7d71]">
                      Next payout
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#1f1b16]">
                      9 days
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-[#e6d9c8] bg-white/70 p-4">
                  <div className="flex items-center justify-between text-sm text-[#6a5f55]">
                    <span>Operations</span>
                    <span>38%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-[#f0e6d8]">
                    <div className="h-2 w-[38%] rounded-full bg-[#1f1b16]" />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-[#6a5f55]">
                    <span>Grants & bounties</span>
                    <span>46%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-[#f0e6d8]">
                    <div className="h-2 w-[46%] rounded-full bg-[#f79b7f]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-6 pb-20">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Wallet status",
                  value: "Connected",
                  detail: "Last sync: 12s ago",
                },
                {
                  title: "Voting power",
                  value: "18,420",
                  detail: "Token-weighted balance",
                },
                {
                  title: "Pending actions",
                  value: "2",
                  detail: "Votes to cast today",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-6 shadow-[0_18px_45px_rgba(31,27,22,0.07)]"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-[#6a5f55]">{item.detail}</p>
                  <button className="mt-5 rounded-full border border-[#1f1b16] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                    Manage
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section
            id="flow"
            className="mx-auto w-full max-w-6xl px-6 pb-20"
          >
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#7f7267]">
                  Proposal flow
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                  From idea to funded delivery in four moves.
                </h2>
              </div>
              <button className="hidden rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9] md:inline-flex">
                Download playbook
              </button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Draft",
                  copy: "Sketch the impact, budget, and requested support.",
                },
                {
                  step: "02",
                  title: "Refine",
                  copy: "Get feedback in public threads and update milestones.",
                },
                {
                  step: "03",
                  title: "Vote",
                  copy: "Council and members approve with transparent thresholds.",
                },
                {
                  step: "04",
                  title: "Fund",
                  copy: "Funds release in tranches as updates are delivered.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-[#e6d9c8] bg-white/70 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6a5f55]">{item.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="proposals"
            className="mx-auto w-full max-w-6xl px-6 pb-20"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#7f7267]">
                  Active proposals
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                  Decisions happening now.
                </h2>
              </div>
              <div className="flex gap-3 text-xs uppercase tracking-[0.2em] text-[#7b6f65]">
                <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                  7 in review
                </span>
                <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                  4 voting
                </span>
              </div>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {proposals.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-6 shadow-[0_20px_50px_rgba(31,27,22,0.08)]"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#8a7d71]">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
                        statusStyles[card.status] ??
                        "bg-[#f0e6d8] text-[#6a5f55]"
                      }`}
                    >
                      {card.status}
                    </span>
                    <span>{card.budget}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#6a5f55]">{card.lead}</p>
                  <div className="mt-5 rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      <span>Support</span>
                      <span>{card.ends}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-[#ede2d4]">
                      <div
                        className="h-2 rounded-full bg-[#1f1b16]"
                        style={{ width: `${card.yes}%` }}
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-[#6a5f55]">
                      <span>{card.yes}% yes</span>
                      <span>{card.no}% no</span>
                    </div>
                  </div>
                  <button className="mt-6 rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                    Review proposal
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-6 pb-20">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#7f7267]">
                  Governance workspace
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                  Draft, vote, and execute in one place.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[#7b6f65]">
                {[
                  "All",
                  "Active",
                  "Pending",
                  "Passed",
                  "Failed",
                  "Executed",
                  "Canceled",
                ].map((filter) => (
                  <button
                    key={filter}
                    className="rounded-full border border-[#d6c7b7] px-3 py-2 transition hover:border-[#1f1b16] hover:text-[#1f1b16]"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-8 shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                      Create proposal
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                      Fund a new initiative
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#f0e6d8] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#6a5f55]">
                    Draft mode
                  </span>
                </div>
                <div className="mt-6 grid gap-4">
                  {[
                    { label: "Proposal title", placeholder: "Ex: Civic data toolkit" },
                    { label: "Budget request", placeholder: "$75,000" },
                  ].map((field) => (
                    <label key={field.label} className="grid gap-2 text-sm text-[#6a5f55]">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                        {field.label}
                      </span>
                      <div className="rounded-2xl border border-[#e6d9c8] bg-[#fdfaf5] px-4 py-3 text-[#a29589]">
                        {field.placeholder}
                      </div>
                    </label>
                  ))}
                  <label className="grid gap-2 text-sm text-[#6a5f55]">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      Category + Milestones
                    </span>
                    <div className="grid gap-3 rounded-2xl border border-[#e6d9c8] bg-[#fdfaf5] p-4 text-xs text-[#6a5f55]">
                      {[
                        "Local infrastructure",
                        "Open source tools",
                        "Education + training",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-xl border border-[#e9dfd1] bg-white/80 px-3 py-2"
                        >
                          <span>{item}</span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a7d71]">
                            3 milestones
                          </span>
                        </div>
                      ))}
                    </div>
                  </label>
                  <label className="grid gap-2 text-sm text-[#6a5f55]">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      Voting window
                    </span>
                    <div className="grid gap-3 rounded-2xl border border-[#e6d9c8] bg-[#fdfaf5] p-4 text-xs text-[#6a5f55] sm:grid-cols-2">
                      {["Start block", "End block"].map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-[#e9dfd1] bg-white/80 px-3 py-2 text-[#a29589]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </label>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button className="rounded-full bg-[#1f1b16] px-6 py-3 text-sm font-medium text-[#f7f2e9] transition hover:bg-[#3a332c]">
                    Save draft
                  </button>
                  <button className="rounded-full border border-[#1f1b16] px-6 py-3 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                    Submit to review
                  </button>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                    Transaction: ready
                  </span>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-3xl border border-[#1f1b16] bg-[#1f1b16] p-6 text-[#f7f2e9]">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d9cbbb]">
                    Live queue
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold font-[var(--font-display)]">
                    Decisions awaiting action
                  </h3>
                  <div className="mt-6 grid gap-4">
                    {[
                      {
                        title: "City Commons Microgrants",
                        status: "Voting",
                        budget: "$32k",
                        support: "58% yes",
                        action: "Cast vote",
                      },
                      {
                        title: "Open Data Residency",
                        status: "Passed",
                        budget: "$120k",
                        support: "76% yes",
                        action: "Execute",
                      },
                      {
                        title: "Community Hardware Lab",
                        status: "Failed",
                        budget: "$68k",
                        support: "42% yes",
                        action: "Archive",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-4"
                      >
                        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-[#d9cbbb]">
                          <span className="rounded-full bg-[#f7f2e9] px-3 py-1 text-[10px] font-semibold text-[#1f1b16]">
                            {item.status}
                          </span>
                          <span>{item.budget}</span>
                        </div>
                        <p className="mt-3 text-base font-semibold">
                          {item.title}
                        </p>
                        <div className="mt-2 flex items-center justify-between text-xs text-[#d9cbbb]">
                          <span>{item.support}</span>
                          <button className="rounded-full border border-[#f7f2e9] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#f7f2e9] transition hover:bg-[#f7f2e9] hover:text-[#1f1b16]">
                            {item.action}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8a7d71]">
                    Transaction feed
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                    Latest on-chain activity
                  </h3>
                  <div className="mt-4 grid gap-3 text-sm text-[#6a5f55]">
                    {[
                      {
                        label: "Vote recorded",
                        detail: "Open Source Education Grants",
                        status: "Success",
                      },
                      {
                        label: "Proposal created",
                        detail: "Neighborhood Network Upgrades",
                        status: "Pending",
                      },
                      {
                        label: "Execution failed",
                        detail: "Community Studio Residency",
                        status: "Error",
                      },
                    ].map((item) => (
                      <div
                        key={item.detail}
                        className="flex items-center justify-between rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] px-4 py-3"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#1f1b16]">
                            {item.label}
                          </p>
                          <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                            {item.detail}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                            statusStyles[item.status] ?? "bg-[#f0e6d8] text-[#6a5f55]"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="treasury"
            className="mx-auto w-full max-w-6xl px-6 pb-24"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl border border-[#1f1b16] bg-[#1f1b16] p-8 text-[#f7f2e9]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#e6d9c8]">
                  Treasury rituals
                </p>
                <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                  Match capital to delivery, not hype.
                </h2>
                <p className="mt-4 text-sm text-[#d9cbbb]">
                  Every proposal has a clear payout schedule. Funds unlock after
                  updates, keeping teams accountable while giving them room to
                  deliver.
                </p>
                <div className="mt-8 grid gap-4">
                  {[
                    "Milestone-based streaming",
                    "Public quarterly audits",
                    "Multi-sig emergency pause",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                  Impact ledger
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                  Track every funded outcome at a glance.
                </h3>
                <div className="mt-6 grid gap-4">
                  {[
                    {
                      title: "Public good pilots",
                      value: "21 shipped",
                      trend: "+6 since June",
                    },
                    {
                      title: "Member-owned tools",
                      value: "14 launched",
                      trend: "95% satisfaction",
                    },
                    {
                      title: "Local partnerships",
                      value: "9 activated",
                      trend: "Across 4 regions",
                    },
                  ].map((row) => (
                    <div
                      key={row.title}
                      className="flex items-center justify-between rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] px-5 py-4 text-sm text-[#6a5f55]"
                    >
                      <span>{row.title}</span>
                      <div className="text-right">
                        <p className="text-base font-semibold text-[#1f1b16]">
                          {row.value}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                          {row.trend}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-6 pb-24">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-8 shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                      Proposal detail
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                      Open Source Education Grants
                    </h3>
                  </div>
                  <span
                    className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.2em] ${
                      statusStyles.Voting
                    }`}
                  >
                    Voting
                  </span>
                </div>
                <p className="mt-4 text-sm text-[#6a5f55]">
                  Fund curriculum, mentor stipends, and tooling for community
                  educators across three regions. Proposal includes milestone
                  checkpoints every four weeks.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Requested", value: "$180k" },
                    { label: "Quorum", value: "4,200 tokens" },
                    { label: "Ends", value: "2d 4h" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] px-4 py-3 text-sm text-[#6a5f55]"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#1f1b16]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                    <span>Voting sentiment</span>
                    <span>2,930 votes cast</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-[#ede2d4]">
                    <div className="h-2 w-[62%] rounded-full bg-[#1f1b16]" />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-[#6a5f55]">
                    <span>62% yes</span>
                    <span>18% no</span>
                    <span>20% abstain</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#1f1b16] px-6 py-3 text-sm font-medium text-[#f7f2e9] transition hover:bg-[#3a332c]">
                    Vote yes
                  </button>
                  <button className="rounded-full border border-[#1f1b16] px-6 py-3 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                    Vote no
                  </button>
                  <button className="rounded-full border border-[#d6c7b7] px-6 py-3 text-sm font-medium text-[#6a5f55] transition hover:border-[#1f1b16] hover:text-[#1f1b16]">
                    Abstain
                  </button>
                  <button className="rounded-full border border-[#1f1b16] px-6 py-3 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                    Execute
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-[#1f1b16] bg-[#1f1b16] p-8 text-[#f7f2e9]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9cbbb]">
                  Execution checklist
                </p>
                <h3 className="mt-3 text-2xl font-semibold font-[var(--font-display)]">
                  Ready to release funds?
                </h3>
                <div className="mt-6 grid gap-3 text-sm text-[#d9cbbb]">
                  {[
                    "Voting window closed",
                    "Quorum reached",
                    "Treasury funded",
                    "Milestone schedule confirmed",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3"
                    >
                      <span>{item}</span>
                      <span className="rounded-full bg-[#f7f2e9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f1b16]">
                        Done
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-[#2b2621] bg-[#241f1a] p-4 text-xs uppercase tracking-[0.2em] text-[#d9cbbb]">
                  Next execution window opens in 14h 12m
                </div>
                <button className="mt-6 w-full rounded-full bg-[#f7f2e9] px-4 py-3 text-sm font-semibold text-[#1f1b16] transition hover:bg-white">
                  Queue execution
                </button>
              </div>
            </div>
          </section>

          <section
            id="membership"
            className="mx-auto w-full max-w-6xl px-6 pb-24"
          >
            <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#7f7267]">
                    Membership
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                    Build with the collective. Earn with the collective.
                  </h2>
                  <p className="mt-4 text-sm text-[#6a5f55]">
                    Members propose, vote, and deliver. Contributors can join a
                    pod, take on bounties, or sponsor new initiatives.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[#7b6f65]">
                    <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                      Weekly standups
                    </span>
                    <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                      Builder grants
                    </span>
                    <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                      City chapters
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#1f1b16] bg-[#1f1b16] p-6 text-[#f7f2e9]">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d9cbbb]">
                    Join the next cycle
                  </p>
                  <p className="mt-4 text-2xl font-semibold font-[var(--font-display)]">
                    Cohort 19 opens in 6 days.
                  </p>
                  <p className="mt-3 text-sm text-[#d9cbbb]">
                    Nominate contributors or request a pod allocation.
                  </p>
                  <button className="mt-6 w-full rounded-full bg-[#f7f2e9] px-4 py-3 text-sm font-semibold text-[#1f1b16] transition hover:bg-white">
                    Request invite
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="relative z-10 border-t border-[#e6d9c8]">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-[#6a5f55]">
            <p>Community DAO. Built for shared ownership.</p>
            <div className="flex gap-6 uppercase tracking-[0.2em] text-xs">
              <a className="hover:text-[#1f1b16]" href="#">
                Status
              </a>
              <a className="hover:text-[#1f1b16]" href="#">
                Docs
              </a>
              <a className="hover:text-[#1f1b16]" href="#">
                Discord
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
