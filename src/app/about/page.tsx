import { Image } from "@/components/ui/image";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { profile, aboutSections, social } from "@/data/portfolio";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const sections = [
  { label: "WHO_I_AM", body: aboutSections.who },
  { label: "WHERE_I_COME_FROM", body: aboutSections.yemen },
  { label: "HOW_I_BECAME_AN_ENGINEER", body: aboutSections.journey },
  { label: "WHAT_IVE_LEARNED", body: aboutSections.learned },
  { label: "WHAT_MOTIVATES_ME", body: aboutSections.motivates },
  { label: "WHAT_IM_WORKING_TOWARD", body: aboutSections.toward },
  { label: "BEYOND_THE_JOB", body: aboutSections.beyond },
];

export default function About() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 01" label="ABOUT" />
          <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight text-balance">
            More than an engineer
          </h1>
        </Reveal>

        {/* Portrait + intro */}
        <div className="mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] max-w-sm border border-border overflow-hidden bg-secondary">
              <Image
                src={profile.portrait}
                alt="Illustration portrait of Abeer Al-Shaibah"
                className="h-full w-full"
                fittingType="fill"
              />
              <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 bg-background/70 px-2 py-1">
                PORTRAIT
              </div>
            </div>
            <div className="mt-6 space-y-2 font-mono text-xs text-muted-foreground">
              <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-accent" /> {profile.location}</p>
              <a href={`mailto:${social.email}`} className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="h-3.5 w-3.5" /> {social.email}</a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a>
              <a href={social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Github className="h-3.5 w-3.5" /> GitHub</a>
            </div>
          </Reveal>

          <div className="space-y-12">
            {sections.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.04}>
                <div>
                  <SectionLabel index={`// ${String(i + 2).padStart(2, "0")}`} label={s.label} />
                  <p className="mt-4 text-lg leading-relaxed text-pretty">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Yemen section highlight */}
        <Reveal>
          <div className="mt-20 border-l-2 border-accent pl-6 sm:pl-8">
            <SectionLabel index="// 09" label="BUILDING_TECHNOLOGY_FROM_YEMEN" />
            <p className="mt-4 text-xl sm:text-2xl font-display leading-relaxed text-pretty max-w-3xl">
              {aboutSections.yemen}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}