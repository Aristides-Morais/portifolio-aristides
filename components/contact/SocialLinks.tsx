import { GitBranch, Link, Mail, MessageCircle } from "lucide-react";
import { social } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = {
  github: GitBranch,
  linkedin: Link,
  mail: Mail,
  "message-circle": MessageCircle,
} as const;

export function SocialLinks({
  className,
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {social.map((s) => {
        const Icon = icons[s.icon as keyof typeof icons];
        const isExternal = s.href.startsWith("http");
        return (
          <a
            key={s.name}
            href={s.href}
            aria-label={s.name}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-border bg-bg-surface text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}