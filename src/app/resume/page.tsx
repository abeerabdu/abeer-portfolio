import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { resume, social } from "@/data/portfolio";
import { Download, Linkedin } from "lucide-react";

function SkillGroup({ label, items }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <span key={t} className="text-sm px-2.5 py-1 bg-secondary text-foreground rounded-sm">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 01" label="RESUME" />
          <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight text-balance">
            Resume
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">{resume.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild className="group">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </a>
            </Button>
            <Button asChild variant="outline" className="group">
              <a href={social.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> View LinkedIn
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Experience */}
        <Reveal>
          <div className="mt-20">
            <SectionLabel index="// 02" label="EXPERIENCE" />
            <div className="mt-8 space-y-8">
              {resume.experience.map((e, i) => (
                <div key={i} className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 pb-8 border-b border-border last:border-0">
                  <p className="font-mono text-sm text-accent">{e.period}</p>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{e.role}</h3>
                    <p className="font-mono text-xs text-muted-foreground mt-1">{e.org}</p>
                    <p className="mt-2 text-muted-foreground text-pretty">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects */}
        <Reveal>
          <div className="mt-16">
            <SectionLabel index="// 03" label="PROJECTS" />
            <ul className="mt-6 space-y-2">
              {resume.projects.map((p, i) => (
                <li key={i} className="flex gap-3 text-foreground">
                  <span className="font-mono text-accent text-sm pt-1">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal>
          <div className="mt-16">
            <SectionLabel index="// 04" label="SKILLS" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillGroup label="Backend" items={resume.skills.backend} />
              <SkillGroup label="Frontend" items={resume.skills.frontend} />
              <SkillGroup label="Data" items={resume.skills.data} />
              <SkillGroup label="Architecture" items={resume.skills.architecture} />
              <SkillGroup label="Cloud & DevOps" items={resume.skills.cloud} />
              <SkillGroup label="Integration" items={resume.skills.integration} />
            </div>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal>
          <div className="mt-16">
            <SectionLabel index="// 05" label="EDUCATION" />
            <div className="mt-8 space-y-4">
              {resume.education.map((e, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <h3 className="font-medium">{e.name}</h3>
                  {e.org && <span className="font-mono text-xs text-muted-foreground">{e.org}</span>}
                  {e.period && <span className="font-mono text-xs text-accent">{e.period}</span>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal>
          <div className="mt-16">
            <SectionLabel index="// 06" label="CERTIFICATIONS" />
            <ul className="mt-6 space-y-2">
              {resume.certifications.map((c, i) => (
                <li key={i} className="flex gap-3 text-foreground">
                  <span className="font-mono text-accent text-sm pt-1">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}