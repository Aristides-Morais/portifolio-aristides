import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Processo"
            title="Como eu trabalho"
            description="Um método claro, do primeiro contacto até à melhoria contínua depois do lançamento."
          />
        </Reveal>

        <div className="mt-14 grid gap-px bg-border rounded-xl overflow-hidden border border-border">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05}>
                <div className="bg-bg-surface p-6 md:p-8 h-full">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}