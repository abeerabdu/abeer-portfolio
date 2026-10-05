import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, featured = false }) {
  return (
    <Link
      href={`/work/${project.id}`}
      className={cn(
        "group relative block border border-border bg-card transition-all duration-300 hover:border-foreground/40",
        featured ? "p-6 sm:p-8" : "p-5 sm:p-6"
      )}
    >
      {/* folder tab index */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-accent">{project.index}</span>
          <span className="h-px w-6 bg-border" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {project.category}
          </span>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:rotate-45" />
      </div>

      <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
        {project.name}
      </h3>

      <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2 py-1 border border-border text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      {/* hover scan line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}