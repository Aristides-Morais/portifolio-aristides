export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  goal: string;
  solution: string;
  stack: string[];
  features: string[];
  challenges: string[];
  decisions: string[];
  result: string;
  lessons: string;
  screenshots: string[];
  liveDemo?: string;
  github?: string;
  year: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "minhalojapos",
    name: "MinhaLojaPOS",
    category: "Sistema de Gestão / POS",
    summary:
      "Sistema completo de gestão de vendas que corre localmente, acessível pelo navegador, sem depender de internet nem de servidores externos.",
    problem:
      "Soluções POS acessíveis, robustas e autónomas são escassas para comerciantes que não podem depender de infraestrutura de rede ou de serviços cloud pagos. Muitas lojas locais operam sem internet estável mas precisam de registar vendas, controlar stock e emitir facturas de forma fiável.",
    goal:
      "Construir um sistema de ponto de venda completo que funcionasse offline, fosse fácil de instalar num único ficheiro e protegesse comercialmente o software sem exigir validação online.",
    solution:
      "Desenvolvi o MinhaLojaPOS — uma aplicação Flask empacotada num único executável Windows. O sistema inclui ponto de venda, gestão de stock, emissão de facturas, relatórios e autenticação. Para a proteção comercial, implementei um sistema de licenciamento offline baseado em HMAC-SHA256 com ID único de máquina — sem necessitar de qualquer servidor ou ligação à internet.",
    stack: [
      "Python 3",
      "Flask",
      "SQLite",
      "Jinja2",
      "Werkzeug",
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "PyInstaller",
      "HMAC-SHA256",
    ],
    features: [
      "Ponto de venda com carrinho e controlo de quantidades em tempo real",
      "Gestão de stock com atualização automática e alertas de stock baixo",
      "Emissão de facturas com número sequencial e opção de impressão",
      "Relatórios por forma de pagamento, produtos mais vendidos e totais diários",
      "Autenticação com senhas encriptadas (hashing) e alteração de senha",
      "Licenciamento offline por ID único de máquina, sem internet",
      "Design responsivo para desktop, tablet e telemóvel",
    ],
    challenges: [
      "Criar um mecanismo de licenciamento funcional sem qualquer ligação à internet",
      "Garantir que a chave secreta de geração de licenças fosse única por instalação e não pudesse ser extraída do executável",
      "Empacotar toda a aplicação (Flask + templates + base de dados + assets) num único ficheiro .exe",
    ],
    decisions: [
      "Flask em vez de Django por ser mais leve e suficiente para uma aplicação local desktop-like",
      "SQLite em vez de PostgreSQL/MySQL por ser embutido, sem servidor e ideal para operação offline",
      "PyInstaller com --onefile --windowed para simplificar a distribuição ao cliente final",
      "HMAC-SHA256 para licenciamento por ser criptograficamente robusto e não exigir servidor de validação",
    ],
    result:
      "Software funcional, distribuído num único executável, capaz de operar autonomamente sem internet em ambiente real de loja. Proteção comercial implementada sem depender de servidores externos.",
    lessons:
      "Trabalhar offline-first força decisões de arquitetura mais rigorosas — cada dependência externa é um risco. Este projeto consolidou-me a importância de escolher ferramentas simples que resolvem problemas complexos.",
    screenshots: [],
    liveDemo: undefined,
    github: undefined,
    year: "2025",
    featured: true,
  },
  {
    slug: "portifolio-pessoal",
    name: "Portfólio Pessoal",
    category: "Website / Case Study",
    summary:
      "Este próprio portfólio — construído com Next.js, TypeScript e Tailwind. Ele próprio serve como prova técnica das minhas capacidades.",
    problem:
      "Precisava de uma presença profissional que demonstrasse, na prática, a minha capacidade de construir produtos web — não apenas descrevesse.",
    goal:
      "Criar um portfólio que funcionasse ele próprio como prova técnica: arquitetura limpa, performance, SEO, acessibilidade e design cuidado.",
    solution:
      "Construí uma aplicação Next.js 16 com TypeScript e Tailwind v4, design system próprio em dark mode, componentes reutilizáveis, animações respeitando prefers-reduced-motion, SEO estruturado e deploy em produção.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Design system com dark/light mode",
      "Componentes reutilizáveis (Button, SectionHeading, Reveal)",
      "SEO completo com metadata por página",
      "Acessibilidade (focus visível, semantic HTML, reduced motion)",
      "Performance otimizada",
    ],
    challenges: [
      "Manter identidade visual consistente em todas as páginas sem duplicar código",
      "Garantir contraste e legibilidade simultaneamente em dark e light mode",
    ],
    decisions: [
      "Next.js App Router pela SEO nativa e simplicidade de rotas",
      "Tailwind v4 pelo design system estar centralizado em CSS variables",
      "Sem UI kits externos — tudo construído à medida para manter identidade",
    ],
    result:
      "Portfólio publicado, rápido, acessível e preparado para crescer com novos projetos.",
    lessons:
      "Construir o próprio portfólio ensina mais sobre produto do que qualquer tutorial.",
    screenshots: [],
    liveDemo: undefined,
    github: "https://github.com/Aristides-Morais",
    year: "2026",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}