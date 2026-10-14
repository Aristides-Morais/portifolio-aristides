import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Full-Stack Developer em Luanda. Construo aplicações web funcionais — da compreensão do problema ao deploy.",
};

export default function AboutPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <Badge variant="dot">{site.availability.label}</Badge>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
                Sobre mim
              </h1>
            </Reveal>

            <div className="mt-10 space-y-6 text-text-muted text-pretty leading-relaxed text-base md:text-lg max-w-2xl">
              <Reveal>
                <p>
                  Sou <strong className="text-text">Aristides Morais</strong>,
                  Full-Stack Developer em Luanda, Angola. Construo aplicações
                  web — do backend ao frontend, da base de dados à interface.
                </p>
              </Reveal>

              <Reveal>
                <p>
                  A minha abordagem parte sempre de uma pergunta simples:{" "}
                  <em>qual é o problema real que estou a resolver?</em> Antes
                  de escrever código, procuro compreender quem usa, como usa e
                  que restrições existem. Só depois desenho a solução.
                </p>
              </Reveal>

              <Reveal>
                <p>
                  Trabalho com Python e Flask no backend, SQLite em contextos
                  que exigem operação offline, e Next.js com React no frontend
                  para produtos que precisam de presença web moderna. Escolho
                  ferramentas pela adequação ao contexto — não por moda.
                </p>
              </Reveal>

              <Reveal>
                <p>
                  Um dos meus projetos mais representativos é o{" "}
                  <strong className="text-text">MinhaLojaPOS</strong> — um
                  sistema completo de gestão de vendas que corre localmente,
                  sem depender de internet ou de servidores externos. Foi um
                  projeto que me obrigou a resolver problemas de arquitetura,
                  segurança e licenciamento offline — e que me ensinou mais do
                  que qualquer tutorial.
                </p>
              </Reveal>

              <Reveal>
                <p>
                  Valorizo software que funciona em condições reais. Código
                  limpo, decisões técnicas justificadas e atenção ao detalhe
                  não são opcionais — são parte do trabalho.
                </p>
              </Reveal>

              <Reveal>
                <p>
                  Estou disponível para novos projetos e oportunidades onde
                  possa contribuir com código sólido e continuar a crescer como
                  developer.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <div className="mt-12 pt-10 border-t border-border">
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                  Contacto
                </p>
                <div className="space-y-2 text-sm text-text-muted">
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="text-text hover:text-accent transition-colors"
                    >
                      {site.contact.email}
                    </a>
                  </p>
                  <p>
                    WhatsApp:{" "}
                    <a
                      href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text hover:text-accent transition-colors"
                    >
                      {site.contact.whatsappDisplay}
                    </a>
                  </p>
                </div>
                <SocialLinks className="mt-5" />
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <Reveal>
              <div className="rounded-xl border border-border overflow-hidden bg-bg-surface">
                <div className="aspect-square relative bg-bg-elevated">
                  <Image
                    src="/images/aristides-morais-800.webp"
                    alt="Aristides Morais"
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold">{site.name}</p>
                  <p className="text-sm text-text-muted">{site.role}</p>
                  <p className="text-sm text-text-subtle mt-1">
                    {site.location}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-xl border border-border bg-bg-surface p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-text-subtle mb-3">
                  Idiomas
                </p>
                <ul className="space-y-2 text-sm">
                  {site.languages.map((l) => (
                    <li
                      key={l.name}
                      className="flex justify-between text-text-muted"
                    >
                      <span>{l.name}</span>
                      <span className="text-text-subtle">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </section>
  );
}