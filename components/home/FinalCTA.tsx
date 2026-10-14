import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function FinalCTA() {
  const waLink = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="py-20 md:py-32 border-t border-border">
      <Container>
        <Reveal>
          <div className="relative rounded-2xl border border-border bg-bg-surface overflow-hidden p-10 md:p-16 text-center">
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/[0.10] blur-[120px] rounded-full pointer-events-none"
            />

            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                Vamos construir algo útil
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance max-w-3xl mx-auto">
                Tens um projeto ou oportunidade em mente?
              </h2>
              <p className="mt-5 text-text-muted max-w-xl mx-auto text-pretty">
                Estou disponível para novos projetos e oportunidades. Resposta em
                menos de 24 horas.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contact" size="lg">
                  Iniciar conversa
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href={waLink}
                  external
                  variant="secondary"
                  size="lg"
                >
                  <MessageCircle size={18} />
                  WhatsApp direto
                </Button>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3 text-sm text-text-muted">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-text transition-colors"
                >
                  <Mail size={14} className="text-accent" />
                  {site.contact.email}
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-text transition-colors"
                >
                  <MessageCircle size={14} className="text-accent" />
                  {site.contact.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}