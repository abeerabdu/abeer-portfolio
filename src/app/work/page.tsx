import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Work() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 01" label="SYSTEM_REGISTRY" />
          <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight text-balance">
            Things I've built
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
            A selection of systems and products I've worked on across enterprise software, SaaS,
            NGO operations, education, evaluation, and e-commerce. Each one opens into a full case
            study — the problem, the thinking, the architecture, and the lessons.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border border border-border">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <div className="h-full">
                <ProjectCard project={p} featured />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}