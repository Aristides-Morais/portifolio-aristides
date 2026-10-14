import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full rounded-xl border border-border bg-bg-surface hover:bg-bg-elevated hover:border-border-strong transition-all p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <Badge variant="accent">{project.category}</Badge>
        <span className="text-xs font-mono text-text-subtle">
          {project.year}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">
        {project.name}
      </h3>

      <p className="mt-3 text-sm text-text-muted text-pretty leading-relaxed">
        {project.summary}
      </p>

      {project.stack.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-text-subtle px-2 py-1 rounded border border-border"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="text-xs font-mono text-text-subtle px-2 py-1">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-sm text-accent">
        <span>Ver case study</span>
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}