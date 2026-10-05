import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import DecorativeBlobs from "@/components/DecorativeBlobs";
import { profile, aboutSections } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <DecorativeBlobs className="absolute -right-24 -top-16 h-[34rem] w-auto opacity-50 dark:opacity-25" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 06" label="ABOUT_PREVIEW" />
          <h2 className="mt-6 font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
            More than code
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          <Reveal className="order-last lg:order-first">
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
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              <p>{aboutSections.who}</p>
              <p>
                What interests me most is understanding complicated problems and turning them into
                systems that people can actually use.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="group">
                <Link href="/about">
                  Read my story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}