export default function Home() {
  const statusStyles: Record<string, string> = {
    Voting: "bg-[#1f1b16] text-[#f7f2e9]",
    Review: "bg-[#f7d8a3] text-[#5f3c06]",
    Draft: "bg-[#d8edf0] text-[#20545d]",
    Passed: "bg-[#d6f2d9] text-[#246337]",
    Failed: "bg-[#f7c7bf] text-[#7f1e18]",
    Executed: "bg-[#e3ddfb] text-[#3f2f7a]",
    Canceled: "bg-[#ede2d4] text-[#6a5f55]",
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
    {
      title: "Community Transit Data Hub",
      status: "Passed",
      budget: "$210k",
      lead: "Lead: Priya S.",
      yes: 74,
      no: 12,
      ends: "Ready to execute",
    },
    {
      title: "Neighborhood Civic Labs",
      status: "Failed",
      budget: "$58k",
      lead: "Lead: Omar L.",
      yes: 38,
      no: 52,
      ends: "Closed 1d ago",
    },
    {
      title: "Open Climate Data Commons",
      status: "Executed",
      budget: "$140k",
      lead: "Lead: Sarai M.",
      yes: 81,
      no: 9,
      ends: "Executed 3d ago",
    },
    {
      title: "Regional Health Equity Pilot",
      status: "Canceled",
      budget: "$88k",
      lead: "Lead: Theo N.",
      yes: 12,
      no: 4,
      ends: "Canceled 5h ago",
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
              <a className="transition hover:text-[#1f1b16]" href="#wallet">
                Wallet
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
                <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em]">
                  {[
                    "Voting",
                    "Review",
                    "Draft",
                    "Passed",
                    "Failed",
                    "Executed",
                    "Canceled",
                  ].map((label) => (
                    <span
                      key={label}
                      className={`rounded-full px-3 py-1 font-semibold ${
                        statusStyles[label] ??
                        "bg-[#f0e6d8] text-[#6a5f55]"
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
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
                  <div className="mt-6 flex flex-wrap gap-3">
                    {card.status === "Voting" ? (
                      <>
                        <button className="rounded-full bg-[#1f1b16] px-4 py-2 text-sm font-medium text-[#f7f2e9] transition hover:bg-[#3a332c]">
                          Vote yes
                        </button>
                        <button className="rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                          Vote no
                        </button>
                      </>
                    ) : card.status === "Passed" ? (
                      <button className="rounded-full bg-[#1f1b16] px-4 py-2 text-sm font-medium text-[#f7f2e9] transition hover:bg-[#3a332c]">
                        Execute
                      </button>
                    ) : card.status === "Draft" ? (
                      <button className="rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                        Continue draft
                      </button>
                    ) : card.status === "Failed" ? (
                      <button className="rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                        View report
                      </button>
                    ) : card.status === "Executed" ? (
                      <button className="rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                        View payout
                      </button>
                    ) : card.status === "Canceled" ? (
                      <button className="rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                        Archive
                      </button>
                    ) : (
                      <button className="rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                        Review proposal
                      </button>
                    )}
                  </div>
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
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#7b6f65]">
                <div className="rounded-full border border-[#d6c7b7] px-4 py-2 text-[10px] text-[#a29589]">
                  Search proposals
                </div>
                {[
                  { label: "All", active: false },
                  { label: "Active", active: true },
                  { label: "Pending", active: false },
                  { label: "Passed", active: false },
                  { label: "Failed", active: false },
                  { label: "Executed", active: false },
                  { label: "Canceled", active: false },
                ].map((filter) => (
                  <button
                    key={filter.label}
                    className={`rounded-full px-3 py-2 transition ${
                      filter.active
                        ? "bg-[#1f1b16] text-[#f7f2e9]"
                        : "border border-[#d6c7b7] hover:border-[#1f1b16] hover:text-[#1f1b16]"
                    }`}
                  >
                    {filter.label}
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
                  <div className="grid gap-2 text-sm text-[#6a5f55]">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      Proposal summary
                    </span>
                    <div className="rounded-2xl border border-[#e6d9c8] bg-[#fdfaf5] px-4 py-4 text-sm text-[#a29589]">
                      Outline scope, impact, and requested support.
                    </div>
                  </div>
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
                <div className="mt-6 grid gap-3 rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4 text-xs text-[#6a5f55]">
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-[0.2em] text-[#8a7d71]">
                      Checklist
                    </span>
                    <span>2/4 complete</span>
                  </div>
                  {[
                    "Treasury balance verified",
                    "Milestone schedule added",
                    "Governance category selected",
                    "Voting window set",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-[#e9dfd1] bg-white/80 px-3 py-2"
                    >
                      <span>{item}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a7d71]">
                        Ready
                      </span>
                    </div>
                  ))}
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
            id="wallet"
            className="mx-auto w-full max-w-6xl px-6 pb-24"
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-8 shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                  Wallet connect
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                  Start voting in under a minute.
                </h3>
                <p className="mt-3 text-sm text-[#6a5f55]">
                  Link your Stacks wallet, confirm your balance, and sign when
                  you want to vote. All proposal actions are confirmed on-chain.
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4 text-sm">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      <span>Step 1</span>
                      <span className="rounded-full bg-[#d6f2d9] px-3 py-1 text-[10px] font-semibold text-[#246337]">
                        Complete
                      </span>
                    </div>
                    <p className="mt-3 font-semibold text-[#1f1b16]">
                      Connect wallet
                    </p>
                    <p className="mt-2 text-xs text-[#6a5f55]">
                      Hiro or Xverse supported.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4 text-sm">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      <span>Step 2</span>
                      <span className="rounded-full bg-[#f7d8a3] px-3 py-1 text-[10px] font-semibold text-[#5f3c06]">
                        Pending
                      </span>
                    </div>
                    <p className="mt-3 font-semibold text-[#1f1b16]">
                      Verify balance
                    </p>
                    <p className="mt-2 text-xs text-[#6a5f55]">
                      Sync governance token holdings.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4 text-sm">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      <span>Step 3</span>
                      <span className="rounded-full bg-[#ede2d4] px-3 py-1 text-[10px] font-semibold text-[#6a5f55]">
                        Ready
                      </span>
                    </div>
                    <p className="mt-3 font-semibold text-[#1f1b16]">
                      Sign transactions
                    </p>
                    <p className="mt-2 text-xs text-[#6a5f55]">
                      Confirm votes and proposal execution.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#1f1b16] px-6 py-3 text-sm font-medium text-[#f7f2e9] transition hover:bg-[#3a332c]">
                    Connect wallet
                  </button>
                  <button className="rounded-full border border-[#1f1b16] px-6 py-3 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                    View activity
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-[#1f1b16] bg-[#1f1b16] p-8 text-[#f7f2e9]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9cbbb]">
                  Transaction feedback
                </p>
                <h3 className="mt-3 text-2xl font-semibold font-[var(--font-display)]">
                  See what your vote is doing.
                </h3>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-[#2b2621] bg-[#241f1a] p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#d9cbbb]">
                      <span>Broadcasting</span>
                      <span className="rounded-full bg-[#f7d8a3] px-3 py-1 text-[10px] font-semibold text-[#5f3c06]">
                        Pending
                      </span>
                    </div>
                    <p className="mt-3 text-base font-semibold">
                      Vote on Open Source Education Grants
                    </p>
                    <p className="mt-2 text-xs text-[#d9cbbb]">
                      Confirmed by 2 of 6 stacks nodes.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#2b2621] bg-[#241f1a] p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#d9cbbb]">
                      <span>Finalized</span>
                      <span className="rounded-full bg-[#d6f2d9] px-3 py-1 text-[10px] font-semibold text-[#246337]">
                        Success
                      </span>
                    </div>
                    <p className="mt-3 text-base font-semibold">
                      Draft created: Neighborhood Network Upgrades
                    </p>
                    <p className="mt-2 text-xs text-[#d9cbbb]">
                      Contract call confirmed 3 mins ago.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#2b2621] bg-[#241f1a] p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#d9cbbb]">
                      <span>Needs attention</span>
                      <span className="rounded-full bg-[#f7c7bf] px-3 py-1 text-[10px] font-semibold text-[#7f1e18]">
                        Error
                      </span>
                    </div>
                    <p className="mt-3 text-base font-semibold">
                      Execute Community Studio Residency
                    </p>
                    <p className="mt-2 text-xs text-[#d9cbbb]">
                      Treasury balance below requested amount.
                    </p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-full border border-[#f7f2e9] px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f7f2e9] transition hover:bg-[#f7f2e9] hover:text-[#1f1b16]">
                  Open transaction log
                </button>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-6 pb-24">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-8 shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                  Governance policy
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                  Clear rules keep funding fair.
                </h3>
                <p className="mt-3 text-sm text-[#6a5f55]">
                  Proposal windows, quorum targets, and treasury safeguards are
                  visible to every member before they vote.
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      Proposal windows
                    </p>
                    <p className="mt-3 text-sm text-[#6a5f55]">
                      Voting starts no earlier than the next block and runs for
                      up to 2,400 blocks.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      Quorum requirements
                    </p>
                    <p className="mt-3 text-sm text-[#6a5f55]">
                      At least 4,200 weighted votes needed before execution.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      Treasury safeguards
                    </p>
                    <p className="mt-3 text-sm text-[#6a5f55]">
                      Withdrawals require a passed proposal and multi-sig
                      confirmation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[#1f1b16] bg-[#1f1b16] p-8 text-[#f7f2e9]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9cbbb]">
                  Status mapping
                </p>
                <h3 className="mt-3 text-2xl font-semibold font-[var(--font-display)]">
                  Proposal codes made human.
                </h3>
                <div className="mt-6 grid gap-3 text-xs uppercase tracking-[0.2em] text-[#d9cbbb]">
                  <div className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3">
                    <span>Pending</span>
                    <span className="rounded-full bg-[#f7d8a3] px-3 py-1 text-[10px] font-semibold text-[#5f3c06]">
                      Review
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3">
                    <span>Active</span>
                    <span className="rounded-full bg-[#f7f2e9] px-3 py-1 text-[10px] font-semibold text-[#1f1b16]">
                      Voting
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3">
                    <span>Passed</span>
                    <span className="rounded-full bg-[#d6f2d9] px-3 py-1 text-[10px] font-semibold text-[#246337]">
                      Execute
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3">
                    <span>Failed</span>
                    <span className="rounded-full bg-[#f7c7bf] px-3 py-1 text-[10px] font-semibold text-[#7f1e18]">
                      Closed
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3">
                    <span>Executed</span>
                    <span className="rounded-full bg-[#e3ddfb] px-3 py-1 text-[10px] font-semibold text-[#3f2f7a]">
                      Complete
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3">
                    <span>Canceled</span>
                    <span className="rounded-full bg-[#ede2d4] px-3 py-1 text-[10px] font-semibold text-[#6a5f55]">
                      Archived
                    </span>
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
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-6 shadow-[0_20px_60px_rgba(31,27,22,0.06)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                  Treasury activity
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                  Recent inflows and payouts.
                </h3>
                <div className="mt-5 grid gap-3 text-sm text-[#6a5f55]">
                  {[
                    {
                      label: "Membership dues",
                      value: "+$42k",
                      time: "Today",
                    },
                    {
                      label: "Grant payout: Education Grants",
                      value: "-$60k",
                      time: "Yesterday",
                    },
                    {
                      label: "Partner matching fund",
                      value: "+$120k",
                      time: "2 days ago",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#1f1b16]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                          {item.time}
                        </p>
                      </div>
                      <span className="text-base font-semibold text-[#1f1b16]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#1f1b16] bg-[#1f1b16] p-6 text-[#f7f2e9]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9cbbb]">
                  Funding calendar
                </p>
                <h3 className="mt-3 text-2xl font-semibold font-[var(--font-display)]">
                  Next treasury commitments.
                </h3>
                <div className="mt-5 grid gap-3 text-sm text-[#d9cbbb]">
                  {[
                    {
                      label: "Grant tranche release",
                      detail: "Oct 12 · $45k",
                    },
                    {
                      label: "Operations payroll",
                      detail: "Oct 16 · $18k",
                    },
                    {
                      label: "Community pod budgets",
                      detail: "Oct 20 · $32k",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3"
                    >
                      <span>{item.label}</span>
                      <span className="rounded-full bg-[#f7f2e9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f1b16]">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-full border border-[#f7f2e9] px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f7f2e9] transition hover:bg-[#f7f2e9] hover:text-[#1f1b16]">
                  View treasury forecast
                </button>
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
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      Milestone timeline
                    </p>
                    <div className="mt-4 grid gap-3 text-sm text-[#6a5f55]">
                      {[
                        "Week 1: Curriculum outline + mentor roster",
                        "Week 4: Pilot cohort launch + feedback survey",
                        "Week 8: Tooling kit + public report",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-xl border border-[#e9dfd1] bg-white/80 px-3 py-2"
                        >
                          <span>{item}</span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a7d71]">
                            Scheduled
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                      Funding releases
                    </p>
                    <div className="mt-4 grid gap-3 text-sm text-[#6a5f55]">
                      {[
                        { label: "Initial tranche", value: "$60k" },
                        { label: "Midpoint release", value: "$70k" },
                        { label: "Final delivery", value: "$50k" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between rounded-xl border border-[#e9dfd1] bg-white/80 px-3 py-2"
                        >
                          <span>{item.label}</span>
                          <span className="font-semibold text-[#1f1b16]">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
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

          <section className="mx-auto w-full max-w-6xl px-6 pb-24">
            <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-10 shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#7f7267]">
                    Proposal history
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                    Follow each step from idea to payout.
                  </h2>
                </div>
                <button className="rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                  Export activity
                </button>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl border border-[#f0e6d8] bg-[#fdfaf5] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                    Latest updates
                  </p>
                  <div className="mt-5 grid gap-4 text-sm text-[#6a5f55]">
                    {[
                      {
                        title: "Budget revised",
                        detail: "Open Source Education Grants",
                        time: "2h ago",
                      },
                      {
                        title: "Milestone report submitted",
                        detail: "Neighborhood Network Upgrades",
                        time: "Yesterday",
                      },
                      {
                        title: "Execution queued",
                        detail: "City Commons Microgrants",
                        time: "2 days ago",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-[#e9dfd1] bg-white/80 px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-[#1f1b16]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                          {item.detail}
                        </p>
                        <p className="mt-2 text-xs text-[#6a5f55]">
                          {item.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-[#1f1b16] bg-[#1f1b16] p-6 text-[#f7f2e9]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d9cbbb]">
                    Timeline
                  </p>
                  <div className="mt-6 grid gap-4 text-sm text-[#d9cbbb]">
                    {[
                      {
                        label: "Draft submitted",
                        detail: "Oct 2 · 10:12 UTC",
                        status: "Complete",
                      },
                      {
                        label: "Review approved",
                        detail: "Oct 4 · 18:50 UTC",
                        status: "Complete",
                      },
                      {
                        label: "Voting live",
                        detail: "Oct 5 · 09:00 UTC",
                        status: "Active",
                      },
                      {
                        label: "Execution queued",
                        detail: "Oct 8 · 15:20 UTC",
                        status: "Upcoming",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#f7f2e9]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#d9cbbb]">
                            {item.detail}
                          </p>
                        </div>
                        <span className="rounded-full bg-[#f7f2e9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f1b16]">
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

          <section className="mx-auto w-full max-w-6xl px-6 pb-24">
            <div className="rounded-3xl border border-[#e6d9c8] bg-[#fdfaf5] p-10">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#7f7267]">
                    Community updates
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                    Keep stakeholders aligned between votes.
                  </h2>
                  <p className="mt-4 text-sm text-[#6a5f55]">
                    Share progress, publish milestones, and flag blockers so
                    members can follow each initiative in real time.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[#7b6f65]">
                    <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                      Weekly brief
                    </span>
                    <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                      Milestone alerts
                    </span>
                    <span className="rounded-full border border-[#d6c7b7] px-3 py-2">
                      Treasury notes
                    </span>
                  </div>
                </div>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Q4 grants review published",
                      detail: "7 proposals moved to voting",
                      time: "6 hours ago",
                    },
                    {
                      title: "Treasury topped up by partner fund",
                      detail: "Funding runway extended to 16 months",
                      time: "Yesterday",
                    },
                    {
                      title: "Community studio residency kickoff",
                      detail: "First cohort orientation complete",
                      time: "2 days ago",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#e6d9c8] bg-white px-5 py-4 text-sm text-[#6a5f55]"
                    >
                      <p className="text-sm font-semibold text-[#1f1b16]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                        {item.detail}
                      </p>
                      <p className="mt-2 text-xs text-[#6a5f55]">
                        {item.time}
                      </p>
                    </div>
                  ))}
                  <button className="rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                    View all updates
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-6 pb-24">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-[#1f1b16] bg-[#1f1b16] p-8 text-[#f7f2e9]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9cbbb]">
                  Help desk
                </p>
                <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                  Answers for every governance role.
                </h2>
                <p className="mt-3 text-sm text-[#d9cbbb]">
                  Find quick guidance on proposal windows, voting rules, and
                  treasury releases without leaving the workspace.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-[#d9cbbb]">
                  {[
                    "How to open a proposal window",
                    "What happens when quorum is missed",
                    "When the treasury can execute payouts",
                    "How to cancel or revise a draft",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-[#2b2621] bg-[#241f1a] px-4 py-3"
                    >
                      <span>{item}</span>
                      <span className="rounded-full bg-[#f7f2e9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f1b16]">
                        Read
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-8 shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d71]">
                  Governance digest
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                  Weekly updates for members.
                </h3>
                <p className="mt-3 text-sm text-[#6a5f55]">
                  Get proposal highlights, treasury movements, and voting
                  reminders in one email.
                </p>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-[#e6d9c8] bg-[#fdfaf5] px-4 py-3 text-sm text-[#a29589]">
                    your@email.com
                  </div>
                  <button className="rounded-full bg-[#1f1b16] px-6 py-3 text-sm font-medium text-[#f7f2e9] transition hover:bg-[#3a332c]">
                    Subscribe
                  </button>
                  <p className="text-xs text-[#8a7d71]">
                    1,420 members already receive the digest.
                  </p>
                </div>
                <div className="mt-6 rounded-2xl border border-[#f0e6d8] bg-[#fdfaf5] p-4 text-xs uppercase tracking-[0.2em] text-[#8a7d71]">
                  Next release: Monday 9:00 AM UTC
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-6 pb-24">
            <div className="rounded-3xl border border-[#1f1b16] bg-[#1f1b16] px-10 py-12 text-[#f7f2e9]">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d9cbbb]">
                    Launch governance
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                    Move from idea to funded execution in one cycle.
                  </h2>
                  <p className="mt-4 text-sm text-[#d9cbbb]">
                    Connect your wallet, draft a proposal, and run the vote with
                    transparent rules that keep everyone aligned.
                  </p>
                </div>
                <div className="grid gap-4 rounded-2xl border border-[#2b2621] bg-[#241f1a] p-6 text-sm text-[#d9cbbb]">
                  <div className="flex items-center justify-between">
                    <span>Setup time</span>
                    <span className="text-base font-semibold text-[#f7f2e9]">
                      5 minutes
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Contracts deployed</span>
                    <span className="text-base font-semibold text-[#f7f2e9]">
                      2
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Members onboarded</span>
                    <span className="text-base font-semibold text-[#f7f2e9]">
                      1,248
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button className="rounded-full bg-[#f7f2e9] px-6 py-3 text-sm font-semibold text-[#1f1b16] transition hover:bg-white">
                      Launch app
                    </button>
                    <button className="rounded-full border border-[#f7f2e9] px-6 py-3 text-sm font-semibold text-[#f7f2e9] transition hover:bg-[#f7f2e9] hover:text-[#1f1b16]">
                      Read docs
                    </button>
                  </div>
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
