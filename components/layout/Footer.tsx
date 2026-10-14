import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/contact/SocialLinks";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Projetos", href: "/projects" },
  { label: "Experiência", href: "/experience" },
  { label: "Contacto", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <Container>
        <div className="py-12 md:py-16 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 text-sm text-text-muted">{site.role}</p>
            <p className="mt-1 text-sm text-text-subtle">{site.location}</p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <p className="text-xs font-mono uppercase tracking-widest text-text-subtle mb-3">
              Navegação
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-text-muted hover:text-text transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:justify-self-end">
            <p className="text-xs font-mono uppercase tracking-widest text-text-subtle mb-3">
              Contacto
            </p>
            <a
              href={`mailto:${site.contact.email}`}
              className="block text-sm text-text-muted hover:text-text transition-colors"
            >
              {site.contact.email}
            </a>
            <a
              href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 text-sm text-text-muted hover:text-text transition-colors"
            >
              {site.contact.whatsappDisplay}
            </a>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-subtle">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-text-subtle font-mono">
            Construído com Next.js & Tailwind
          </p>
        </div>
      </Container>
    </footer>
  );
}