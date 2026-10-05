"use client";

import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { social } from "@/data/portfolio";
import { Github, Mail, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Opens the user's email client pre-filled — no backend in v1.
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Portfolio contact from ${name || email}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="// 01" label="CONTACT" />
          <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight text-balance">
            Let's build something meaningful.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
            Whether you're looking for an experienced engineer, have an interesting product idea,
            or simply want to talk about technology, I'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          {/* Direct channels */}
          <Reveal>
            <div className="space-y-6">
              <a
                href={`mailto:${social.email}`}
                className="group flex items-center gap-4 p-5 border border-border hover:border-foreground/40 transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-secondary text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</span>
                  <span className="text-foreground group-hover:text-accent transition-colors">{social.email}</span>
                </span>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-5 border border-border hover:border-foreground/40 transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-secondary text-accent">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">LinkedIn</span>
                  <span className="text-foreground group-hover:text-accent transition-colors">Connect on LinkedIn</span>
                </span>
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-5 border border-border hover:border-foreground/40 transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-secondary text-accent">
                  <Github className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">GitHub</span>
                  <span className="text-foreground group-hover:text-accent transition-colors">See the code</span>
                </span>
              </a>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What would you like to build, discuss, or explore?"
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto group">
                Send message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {sent && (
                <p className="font-mono text-xs text-accent">
                  Opening your email client… if nothing happened, email {social.email} directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}