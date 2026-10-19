import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de desenvolvimento web e software — case studies com problema, abordagem, decisões técnicas e resultado.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Portfólio"
            title="Projetos"
            description="Cada projeto é apresentado como um case study — problema, abordagem, decisões técnicas e resultado."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="mt-14 text-center text-text-muted">
            Em breve — novos projetos a caminho.
          </p>
        )}
      </Container>
    </section>
  );
}