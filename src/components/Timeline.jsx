import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/portfolio";

export default function Timeline() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 05" label="EXPERIENCE_TIMELINE" />
          <h2 className="mt-6 font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
            A journey through software
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={`relative grid sm:grid-cols-2 gap-4 sm:gap-12 ${
                    i % 2 === 0 ? "" : "sm:[direction:rtl]"
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-0 sm:left-1/2 top-1.5 -translate-x-1/2 z-10">
                    <span className="block h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                  </div>

                  <div
                    className={`pl-8 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12 sm:[direction:ltr]"}`}
                  >
                    <span className="font-mono text-sm text-accent">{item.year}</span>
                  </div>
                  <div
                    className={`pl-8 sm:pl-0 ${i % 2 === 0 ? "sm:pl-12" : "sm:pr-12 sm:text-right sm:[direction:ltr]"}`}
                  >
                    <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground mt-1">{item.org}</p>
                    <p className="text-sm text-muted-foreground mt-2 text-pretty">{item.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 pl-8 sm:pl-0 sm:text-center">
              <p className="font-display text-xl sm:text-2xl font-semibold text-accent">
                And I'm still building.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}