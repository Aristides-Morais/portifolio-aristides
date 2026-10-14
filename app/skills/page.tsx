import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Tecnologias e ferramentas que uso para construir aplicações web funcionais.",
};

export default function SkillsPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Tecnologias"
            title="Skills"
            description="Ferramentas que uso no dia-a-dia para construir software. Escolhidas pela adequação ao contexto — não por moda."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-bg-surface p-6 h-full">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">
                  {cat.title}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-text-muted flex items-center gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}