import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { TerminalHero } from "@/components/home/TerminalHero";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.08] blur-[120px] rounded-full pointer-events-none"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Badge variant="dot">{site.availability.label}</Badge>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05]">
              Construo aplicações web que{" "}
              <span className="text-accent">resolvem problemas reais</span>.
            </h1>

            <p className="mt-6 text-lg text-text-muted max-w-xl text-pretty">
              Full-Stack Developer em Luanda. Desenho, desenvolvo e coloco em
              produção software — da compreensão do problema ao deploy final.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/projects" size="lg">
                Ver o meu trabalho
                <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Vamos conversar
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={16} className="text-accent" />
                {site.location}
              </div>
              <SocialLinks />
            </div>
          </div>

          <div className="relative">
            <TerminalHero />
          </div>
        </div>
      </Container>
    </section>
  );
}