"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Projetos", href: "/projects" },
  { label: "Experiência", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "CV", href: "/resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-semibold tracking-tight text-text hover:text-accent transition-colors"
          >
            {site.name}
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    active ? "text-text" : "text-text-muted hover:text-text"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center h-10 px-5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              Vamos falar
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-lg border border-border bg-bg-surface text-text"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-xl">
          <Container>
            <nav className="flex flex-col py-4" aria-label="Mobile">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="py-3 text-sm text-text-muted hover:text-text transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center h-10 px-5 rounded-lg bg-accent text-white text-sm font-medium"
              >
                Vamos falar
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}