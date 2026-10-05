export default function SectionLabel({ index, label, className = "" }) {
    return (
      <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground ${className}`}>
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-border" />
        <span>{label}</span>
      </div>
    );
  }