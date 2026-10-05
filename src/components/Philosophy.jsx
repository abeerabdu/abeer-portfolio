import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { philosophy } from "@/data/portfolio";

export default function Philosophy() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 03" label="ENGINEERING_PHILOSOPHY" />
          <h2 className="mt-6 font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
            How I think about software
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {philosophy.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.05}>
              <div className="group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_2fr] gap-6 sm:gap-12 py-8 transition-colors hover:bg-secondary/30">
                <span className="font-mono text-sm text-accent pt-1">{item.n}</span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty col-span-2 sm:col-span-1">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}