export default function Home() {
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
              {[
                {
                  title: "Open Source Education Grants",
                  status: "Voting",
                  budget: "$180k",
                  lead: "Lead: Aisha P.",
                },
                {
                  title: "Neighborhood Network Upgrades",
                  status: "Refining",
                  budget: "$95k",
                  lead: "Lead: Mateo C.",
                },
                {
                  title: "Community Studio Residency",
                  status: "Drafting",
                  budget: "$42k",
                  lead: "Lead: Yara K.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-[#e6d9c8] bg-white/80 p-6 shadow-[0_20px_50px_rgba(31,27,22,0.08)]"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#8a7d71]">
                    <span>{card.status}</span>
                    <span>{card.budget}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#1f1b16] font-[var(--font-display)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#6a5f55]">
                    {card.lead}
                  </p>
                  <button className="mt-6 rounded-full border border-[#1f1b16] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1b16] hover:text-[#f7f2e9]">
                    Review proposal
                  </button>
                </div>
              ))}
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
