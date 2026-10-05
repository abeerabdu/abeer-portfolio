"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import SystemVisualization from "@/components/SystemVisualization";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
                <span className="text-accent">/</span>
                <span>Senior Full-Stack Software Engineer</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display font-bold tracking-[-0.03em] leading-[0.95] text-balance text-[clamp(2.5rem,7vw,5rem)]">
                I build software systems that solve{" "}
                <span className="text-accent">real problems.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
                {profile.positioning}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/work">
                    Explore my work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">About me</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span>{profile.location}</span>
                <span className="mx-2 text-border">·</span>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  {profile.availability}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="order-first lg:order-last">
            <SystemVisualization />
          </Reveal>
        </div>
      </div>
    </section>
  );
}