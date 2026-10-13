import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { nowContent } from "@/data/portfolio";

const blocks = [
  { label: "BUILDING", body: nowContent.building },
  { label: "LEARNING", body: nowContent.learning },
  { label: "THINKING_ABOUT", body: nowContent.thinking },
  { label: "LOOKING_FOR", body: nowContent.looking },
];

export default function Now() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 01" label="NOW" />
          <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight text-balance">
            What I'm doing now
          </h1>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Last updated: {nowContent.updated}
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-12">
            {blocks.map((b, i) => (
              <Reveal key={b.label} delay={i * 0.05}>
                <div>
                  <SectionLabel index={`// ${String(i + 2).padStart(2, "0")}`} label={b.label} />
                  <p className="mt-4 text-lg leading-relaxed text-pretty">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div>
              <SectionLabel index="// 06" label="RECENTLY_LEARNED" />
              <ul className="mt-6 space-y-3">
                {nowContent.recently.map((r, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 max-w-8 bg-border" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-20 font-mono text-xs text-muted-foreground border-t border-border pt-6">
            This page changes every few months — it's a living snapshot, not a permanent record.
          </p>
        </Reveal>
      </div>
    </section>
  );
}