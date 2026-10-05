// import Image from "next/image";
import Hero from "@/components/Hero";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import Philosophy from "@/components/Philosophy";
import TechAreas from "@/components/TechAreas";
import Timeline from "@/components/Timeline";
import AboutPreview from "@/components/AboutPreview";
import ContactPreview from "@/components/ContactPreview";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen">
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
            {/* @ts-expect-error 'projects', 'Link', and 'ArrowRight' are not defined in this file. Add the appropriate imports at the top. */}
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

    {/* <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24">
      <div className="max-w-4xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Senior Full-Stack Software Engineer
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
          I build software systems
          <br />
          that solve real problems.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
          I design and build scalable web applications, SaaS platforms,
          and business systems from idea to production.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section> */}
  </main>
  );
}
