export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer (Independente)",
    company: "Trabalho independente",
    period: "2024 — Presente",
    location: "Luanda, Angola",
    description:
      "Desenvolvimento de aplicações web completas, da compreensão do problema ao deploy em produção. Foco em software funcional para contextos reais de negócio.",
    highlights: [
      "Desenvolvimento do MinhaLojaPOS — sistema de gestão de vendas completo com licenciamento offline",
      "Construção deste portfólio profissional em Next.js + TypeScript",
      "[ADICIONAR OUTRO PROJETO / RESULTADO REAL]",
    ],
  },
  {
    role: "Aprendizagem e Projetos Pessoais",
    company: "Autodidata",
    period: "2023 — 2024",
    location: "Luanda, Angola",
    description:
      "Formação contínua em desenvolvimento web full-stack — fundamentos, projetos práticos e evolução técnica constante através da construção de software real.",
    highlights: [
      "[ADICIONAR TECNOLOGIA/ÁREA ESTUDADA]",
      "[ADICIONAR PROJETO PRÁTICO]",
    ],
  },
];