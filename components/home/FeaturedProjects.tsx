import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Projetos"
              title="Trabalho em destaque"
              description="Alguns exemplos concretos do que construo — SaaS, sistemas offline e o próprio portfólio."
            />
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors shrink-0"
            >
              Ver todos os projetos
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block h-full rounded-xl border border-border bg-bg-surface hover:bg-bg-elevated hover:border-border-strong transition-all p-6 md:p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="accent">{p.category}</Badge>
                  <span className="text-xs font-mono text-text-subtle">
                    {p.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                  {p.name}
                </h3>

                <p className="mt-3 text-sm text-text-muted text-pretty leading-relaxed">
                  {p.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-text-subtle px-2 py-1 rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {p.stack.length > 5 && (
                    <span className="text-xs font-mono text-text-subtle px-2 py-1">
                      +{p.stack.length - 5}
                    </span>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-sm text-accent">
                  <span>Ver case study</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}