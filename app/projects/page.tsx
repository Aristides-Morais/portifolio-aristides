import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projects, getProjectBySlug } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="py-16 md:py-24">
      <Container>
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Voltar aos projetos
          </Link>
        </Reveal>

        <Reveal>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="accent">{project.category}</Badge>
              <span className="text-xs font-mono text-text-subtle">
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
              {project.name}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-text-muted text-pretty leading-relaxed">
              {project.summary}
            </p>

            {(project.liveDemo || project.github) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveDemo && (
                  <Button href={project.liveDemo} external size="md">
                    Ver demo
                    <ExternalLink size={16} />
                  </Button>
                )}
                {project.github && (
                  <Button
                    href={project.github}
                    external
                    variant="secondary"
                    size="md"
                  >
                    <Code2 size={16} />
                    Código
                  </Button>
                )}
              </div>
            )}

            {/* CAIXA DE CREDENCIAIS PARA O ZENDA */}
            {project.slug === "zenda" && (
              <div className="mt-6 rounded-lg border border-border bg-bg-surface p-4 inline-block text-sm">
                <p className="font-semibold text-text mb-2">🔐 Credenciais da Demo:</p>
                <p className="text-text-muted font-mono">Email: dono@zenda.app</p>
                <p className="text-text-muted font-mono">Password: password123</p>
              </div>
            )}
          </div>
        </Reveal>

        {project.screenshots.length > 0 && (
          <Reveal>
            <div className="mt-14 rounded-xl border border-border overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.screenshots[0]}
                alt={`Screenshot de ${project.name}`}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        )}

        {project.screenshots.length === 0 && (
          <Reveal>
            <div className="mt-14 rounded-xl border border-dashed border-border-strong bg-bg-surface/50 p-16 text-center">
              <p className="text-sm font-mono text-text-subtle">
                [ SCREENSHOTS A ADICIONAR EM /public/projects/{project.slug}/ ]
              </p>
            </div>
          </Reveal>
        )}

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_280px]">
          <div className="space-y-12">
            <Reveal>
              <Section title="O problema" body={project.problem} />
            </Reveal>

            <Reveal>
              <Section title="O objetivo" body={project.goal} />
            </Reveal>

            <Reveal>
              <Section title="A minha abordagem" body={project.solution} />
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">
                  Principais funcionalidades
                </h2>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-text-muted leading-relaxed"
                    >
                      <span className="text-accent font-mono text-sm shrink-0 pt-0.5">
                        →
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">
                  Desafios técnicos
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((c, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-text-muted leading-relaxed"
                    >
                      <span className="text-accent font-mono text-sm shrink-0 pt-0.5">
                        →
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">
                  Decisões técnicas
                </h2>
                <ul className="space-y-3">
                  {project.decisions.map((d, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-text-muted leading-relaxed"
                    >
                      <span className="text-accent font-mono text-sm shrink-0 pt-0.5">
                        →
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <Section title="Resultado" body={project.result} />
            </Reveal>

            <Reveal>
              <div className="rounded-xl border border-border bg-bg-surface p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                  O que aprendi
                </p>
                <p className="text-text text-pretty leading-relaxed">
                  {project.lessons}
                </p>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-8">
            <Reveal>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-subtle mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-text-muted px-2.5 py-1.5 rounded border border-border bg-bg-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-subtle mb-3">
                  Categoria
                </p>
                <p className="text-sm text-text-muted">{project.category}</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-subtle mb-3">
                  Ano
                </p>
                <p className="text-sm text-text-muted">{project.year}</p>
              </div>
            </Reveal>
          </aside>
        </div>

        {(prev || next) && (
          <div className="mt-20 pt-10 border-t border-border grid gap-6 md:grid-cols-2">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group block p-6 rounded-xl border border-border bg-bg-surface hover:bg-bg-elevated hover:border-border-strong transition-all"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-text-subtle mb-2 flex items-center gap-2">
                  <ArrowLeft size={12} />
                  Projeto anterior
                </p>
                <p className="font-semibold group-hover:text-accent transition-colors">
                  {prev.name}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="group block p-6 rounded-xl border border-border bg-bg-surface hover:bg-bg-elevated hover:border-border-strong transition-all md:text-right"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-text-subtle mb-2 flex items-center gap-2 md:justify-end">
                  Próximo projeto
                  <ArrowRight size={12} />
                </p>
                <p className="font-semibold group-hover:text-accent transition-colors">
                  {next.name}
                </p>
              </Link>
            )}
          </div>
        )}
      </Container>
    </article>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight mb-4">{title}</h2>
      <p className="text-text-muted leading-relaxed text-pretty">{body}</p>
    </div>
  );
}