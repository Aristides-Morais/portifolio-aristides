import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "CV",
  description: "Currículo de Aristides Morais — Full-Stack Developer.",
};

export default function ResumePage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="CV"
              title="Currículo"
              description="Resumo do meu percurso. Para detalhes completos, descarrega o PDF."
            />
            <Button
              href={site.resumeUrl}
              external
              size="lg"
              className="shrink-0"
            >
              <Download size={18} />
              Descarregar PDF
            </Button>
          </div>
        </Reveal>

        <div className="max-w-3xl space-y-12">
          <Reveal>
            <header className="pb-8 border-b border-border">
              <h2 className="text-2xl font-semibold tracking-tight">
                {site.name}
              </h2>
              <p className="text-text-muted mt-1">{site.role}</p>
              <p className="text-sm text-text-subtle mt-1">{site.location}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  {site.contact.email}
                </a>
                <a
                  href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  {site.contact.whatsappDisplay}
                </a>
                <a
                  href={site.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={site.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </div>
            </header>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">
                Perfil
              </h3>
              <p className="text-text-muted leading-relaxed text-pretty">
                Full-Stack Developer com foco em construir aplicações web
                funcionais para contextos reais. Experiência prática em Python
                e Flask no backend, SQLite em cenários offline-first, e
                Next.js/React no frontend. Interesse particular em arquitetura
                limpa, segurança e software que funciona sem depender de
                infraestrutura externa.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">
                Experiência
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <p className="font-semibold">{exp.role}</p>
                      <p className="text-sm font-mono text-text-subtle">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-sm text-text-muted mt-1">
                      {exp.company} — {exp.location}
                    </p>
                    <p className="text-sm text-text-muted mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">
                Competências
              </h3>
              <div className="space-y-4">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <p className="text-sm font-medium text-text mb-1">
                      {cat.title}
                    </p>
                    <p className="text-sm text-text-muted">
                      {cat.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">
                Idiomas
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {site.languages.map((l) => (
                  <li key={l.name} className="flex gap-3">
                    <span className="text-text min-w-24">{l.name}</span>
                    <span>{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-text-muted">
                Para o currículo completo em PDF,{" "}
                <a
                  href={site.resumeUrl}
                  className="text-accent hover:text-accent-hover underline underline-offset-4"
                >
                  descarrega aqui
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}