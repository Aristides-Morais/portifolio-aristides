import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "accent" | "dot";
  className?: string;
}) {
  if (variant === "dot") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-surface border border-border text-xs text-text-muted",
          className
        )}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        {children}
      </span>
    );
  }

  if (variant === "accent") {
    return (
      <span
        className={cn(
          "inline-flex items-center px-2.5 py-1 rounded-md bg-accent-soft text-accent text-xs font-mono",
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md bg-bg-surface border border-border text-xs font-mono text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}