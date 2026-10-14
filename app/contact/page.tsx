import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Entre em contacto com Aristides Morais — Full-Stack Developer. Disponível para novos projetos e oportunidades.",
};

export default function ContactPage() {
  const waLink = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contacto"
            title="Tem um projeto em mente?"
            description="Estou disponível para novos projetos e oportunidades. Responda em menos de 24 horas pelos canais diretos."
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <aside className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-border bg-bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">
                  Canais diretos
                </p>

                <ul className="space-y-5">
                  <li>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="group flex items-start gap-3 text-sm"
                    >
                      <Mail
                        size={16}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-text-subtle text-xs mb-1">
                          Email
                        </p>
                        <p className="text-text group-hover:text-accent transition-colors break-all">
                          {site.contact.email}
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 text-sm"
                    >
                      <MessageCircle
                        size={16}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-text-subtle text-xs mb-1">
                          WhatsApp
                        </p>
                        <p className="text-text group-hover:text-accent transition-colors">
                          {site.contact.whatsappDisplay}
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={site.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 text-sm"
                    >
                      <LinkedInIcon
                        size={16}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-text-subtle text-xs mb-1">
                          LinkedIn
                        </p>
                        <p className="text-text group-hover:text-accent transition-colors">
                          /aristides-morais
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin
                        size={16}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-text-subtle text-xs mb-1">
                          Localização
                        </p>
                        <p className="text-text">{site.location}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-xl border border-border bg-bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                  Estado
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <p className="text-sm text-text">
                    {site.availability.label}
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </section>
  );
}