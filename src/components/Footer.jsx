import Link from "next/link";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { profile, social, navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-mono text-sm font-semibold tracking-[0.3em] text-foreground">
              {profile.logo}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {profile.signature}
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {profile.location}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${social.email}`}
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </li>
              <li>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
          >
            Back to top <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}