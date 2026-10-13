import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { writingCategories, plannedArticles } from "@/data/portfolio";

export default function Writing() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 01" label="WRITING" />
          <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight text-balance">
            Writing as thinking
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
            The writing here is an extension of how I think about software — not a blog because
            portfolios "need a blog." I won't publish an article until I have something genuine to say.
          </p>
        </Reveal>

        {/* Categories */}
        <Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {writingCategories.map((c) => (
              <div key={c.key} className="bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{c.label}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Planned articles */}
        <Reveal>
          <div className="mt-20">
            <SectionLabel index="// 02" label="IN_THE_QUEUE" />
            <h2 className="mt-6 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
              Articles I'm shaping
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Working titles. Each one comes from real systems I've built, not borrowed opinions.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {plannedArticles.map((a, i) => {
            const cat = writingCategories.find((c) => c.key === a.category);
            return (
              <Reveal key={i} delay={i * 0.03}>
                <div className="group flex items-center justify-between gap-4 py-5">
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="font-mono text-xs text-accent shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-medium tracking-tight text-pretty truncate">
                      {a.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground shrink-0 hidden sm:block">
                    {cat?.label} · Draft
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 font-mono text-xs text-muted-foreground">
            The first article goes live when the thinking behind it is finished — not before.
          </p>
        </Reveal>
      </div>
    </section>
  );
}