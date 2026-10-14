export const site = {
  name: "Aristides Morais",
  role: "Full-Stack Developer",
  location: "Luanda, Angola",
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Conversação" },
  ],
  contact: {
    whatsapp: "+244927051064",
    whatsappDisplay: "+244 927 051 064",
    email: "aristidesmorais64@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/aristides-morais-892530353",
    github: "https://github.com/Aristides-Morais",
  },
  availability: {
    open: true,
    label: "Disponível para oportunidades",
  },
  resumeUrl: "/cv-aristides-morais.pdf", // [ADICIONAR PDF — Bloco 6]
} as const;

export const social = [
  {
    name: "GitHub",
    href: site.contact.github,
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: site.contact.linkedin,
    icon: "linkedin",
  },
  {
    name: "Email",
    href: `mailto:${site.contact.email}`,
    icon: "mail",
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`,
    icon: "message-circle",
  },
] as const;