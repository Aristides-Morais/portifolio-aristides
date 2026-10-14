import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "Percurso profissional como Full-Stack Developer — projetos, funções e evolução técnica.",
};

export default function ExperiencePage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Percurso"
            title="Experiência"
            description="O caminho que percorri até aqui — projetos, funções e o que aprendi em cada etapa."
          />
        </Reveal>

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="absolute left-0 md:left-[140px] top-2 bottom-2 w-px bg-border"
          />

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-10">
                  <div className="md:text-right">
                    <p className="font-mono text-sm text-accent">
                      {exp.period}
                    </p>
                    <p className="text-xs text-text-subtle mt-1">
                      {exp.location}
                    </p>
                  </div>

                  <div className="relative md:pl-10">
                    <span
                      aria-hidden
                      className="hidden md:block absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg"
                    />

                    <h3 className="text-xl font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-text-muted mt-1">
                      {exp.company}
                    </p>

                    <p className="mt-4 text-text-muted text-pretty leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.highlights.length > 0 && (
                      <ul className="mt-5 space-y-2">
                        {exp.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-sm text-text-muted leading-relaxed"
                          >
                            <span className="text-accent font-mono shrink-0 pt-0.5">
                              →
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {experiences.length === 0 && (
          <p className="mt-16 text-center text-text-muted">
            Ainda sem experiência registada.
          </p>
        )}
      </Container>
    </section>
  );
}