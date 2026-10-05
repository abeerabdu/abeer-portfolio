import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { social } from "@/data/portfolio";

export default function ContactPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 07" label="CONTACT" />
          <h2 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight text-balance">
            Let's build something meaningful.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
            Whether you're looking for an experienced engineer, have an interesting product idea,
            or simply want to talk about technology, I'd love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <a
              href={`mailto:${social.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" /> {social.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex items-center gap-6">
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href={social.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}