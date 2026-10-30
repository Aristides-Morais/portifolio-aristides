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
    role: "Programador Full Stack (Independente)",
    company: "Trabalho independente",
    period: "2023 — Presente",
    location: "Luanda, Angola",
    description:
      "Desenvolvimento de aplicações web completas, sistemas de gestão e soluções tecnológicas orientadas a problemas reais. Experiência prática em Frontend, Backend, bases de dados e integração de sistemas.",
    highlights: [
      "Desenvolvimento do Zenda — plataforma SaaS multi-tenant para gestão de pequenos negócios.",
      "Desenvolvimento do MinhaLojaPOS — sistema de ponto de venda offline com gestão de stock e dívidas.",
      "Desenvolvimento do Portfólio Profissional para Maria Graça (Cabeleireira) — website personalizado com Flask e Jinja2.",
      "Construção deste portfólio profissional em Next.js 16 + TypeScript + Tailwind.",
    ],
  },
  {
    role: "Formação e Projectos Pessoais",
    company: "Autodidata",
    period: "2022 — 2023",
    location: "Luanda, Angola",
    description:
      "Formação contínua em desenvolvimento web full-stack, fundamentos de programação e evolução técnica através da construção de software real.",
    highlights: [
      "Estudo aprofundado de Python, React, Node.js, Express e PostgreSQL.",
      "Aprendizagem autónoma de Python através de aulas online (Prof. Gustavo Guanabara).",
      "Desenvolvimento de projetos práticos para consolidação de conhecimentos.",
    ],
  },
];