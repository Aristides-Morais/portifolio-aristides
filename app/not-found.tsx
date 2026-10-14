import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-32 md:py-40">
      <Container>
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
            404 — Página não encontrada
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
            Esta rota não existe.
          </h1>

          <p className="mt-6 text-lg text-text-muted text-pretty leading-relaxed">
            O endereço que tentaste abrir não corresponde a nenhuma página
            deste site. Pode ter havido um erro de escrita ou o link pode ter
            mudado.
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar à página inicial
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-border grid sm:grid-cols-3 gap-6">
            <Link
              href="/projects"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              → Ver projetos
            </Link>
            <Link
              href="/about"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              → Sobre mim
            </Link>
            <Link
              href="/contact"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              → Contacto
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}