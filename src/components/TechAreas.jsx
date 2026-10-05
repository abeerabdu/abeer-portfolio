import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { techAreas } from "@/data/portfolio";

export default function TechAreas() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 04" label="TECHNICAL_AREAS" />
          <h2 className="mt-6 font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
            What I work with
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-pretty">
            The distinction between my strongest areas and what I'm exploring is visible —
            not everything is presented as equal expertise.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {techAreas.map((area, i) => (
            <Reveal key={area.category} delay={i * 0.05}>
              <div className="h-full bg-card p-6 sm:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-5">
                  {area.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {area.strong.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-2.5 py-1 bg-secondary text-foreground rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                  {area.exploring.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-2.5 py-1 border border-dashed border-border text-muted-foreground rounded-sm"
                      title="Exploring"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            <span className="inline-block w-3 h-3 align-middle mr-2 bg-secondary border border-border" />
            solid &nbsp;·&nbsp;
            <span className="inline-block w-3 h-3 align-middle mr-2 border border-dashed border-border" />
            exploring
          </p>
        </Reveal>
      </div>
    </section>
  );
}