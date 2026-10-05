import Hero from "@/components/Hero";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import Philosophy from "@/components/Philosophy";
import TechAreas from "@/components/TechAreas";
import Timeline from "@/components/Timeline";
import AboutPreview from "@/components/AboutPreview";
import ContactPreview from "@/components/ContactPreview";
import { projects } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Selected Work */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel index="// 01" label="SYSTEM_REGISTRY" />
            <h2 className="mt-6 font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Things I've built
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl text-pretty">
              A selection of systems and products I've worked on across enterprise software, SaaS,
              NGO operations, education, evaluation, and e-commerce.
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

          <Reveal>
            <Link
              href="/work"
              className="mt-10 inline-flex items-center gap-2 font-mono text-sm text-accent hover:gap-3 transition-all"
            >
              View all work <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Philosophy />
      <TechAreas />
      <Timeline />
      <AboutPreview />
      <ContactPreview />
    </>
  );
}