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
    slug: "zenda",
    name: "Zenda",
    category: "SaaS / Full-Stack",
    summary:
      "Plataforma SaaS multi-tenant para gestão de pequenos negócios (vendas, stock e despesas) com dashboard em tempo real.",
    problem:
      "Pequenos negócios em Angola (mercearias, salões, restaurantes) gerem stock, vendas e despesas em cadernos de papel, perdendo dinheiro por falta de controlo e cálculo errado de lucro.",
    goal:
      "Criar um SaaS acessível e completo que permitisse a qualquer pequeno negócio modernizar a sua gestão e ter visibilidade real do seu lucro.",
    solution:
      "Desenvolvi uma aplicação full-stack com arquitetura multi-tenant, autenticação segura (JWT + httpOnly cookies) e dashboard dinâmico. O sistema isola os dados por empresa (row-level security) e utiliza transações SQL para garantir a integridade do stock durante as vendas.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Argon2",
      "Recharts",
    ],
    features: [
      "Arquitetura Multi-tenant com isolamento total de dados por empresa",
      "Autenticação segura com Access Tokens em memória e Refresh Tokens em cookies httpOnly",
      "Gestão de vendas com transações SQL (rollback automático se o stock for insuficiente)",
      "Paywall SaaS com limites no plano FREE (máx. 50 produtos) e ilimitado no PRO",
      "Dashboard dinâmico com KPIs em tempo real e gráficos de evolução (Recharts)",
    ],
    challenges: [
      "Garantir o isolamento total de dados entre empresas (row-level security) em todas as queries do Prisma.",
      "Manter a integridade do stock durante vendas concorrentes utilizando transações do Prisma ($transaction).",
      "Configurar CORS e cookies cross-domain (SameSite=None) entre o frontend na Vercel e o backend na Render.",
    ],
    decisions: [
      "Uso de Prisma ORM com extensões para garantir filtros obrigatórios por businessId.",
      "Implementação de JWT com Refresh Tokens em cookies httpOnly (SameSite=None) para mitigar XSS e CSRF.",
      "React + Vite no frontend para uma SPA rápida, com Recharts para visualização de dados.",
      "Base de dados PostgreSQL serverless alojada na Neon.",
    ],
    result:
      "Uma plataforma SaaS totalmente funcional e em produção, capaz de gerir múltiplos negócios de forma segura e com performance otimizada.",
    lessons:
      "A complexidade de um SaaS real vai muito além do frontend. Resolver problemas de infraestrutura, CORS, cookies e consistência de dados (transações) foi o que realmente me preparou para desafios de nível profissional.",
    screenshots: [
      "/projects/zenda/dashboard.png",
      "/projects/zenda/dashboard2.png",
      "/projects/zenda/produtos.png",
      "/projects/zenda/vendas.png",
      "/projects/zenda/clientes.png",
      "/projects/zenda/despesas.png",
      "/projects/zenda/faturacao.png",
    ],
    liveDemo: "https://zenda-83pw.vercel.app",
    github: "https://github.com/Aristides-Morais/zenda",
    year: "2026",
    featured: true,
  },
  {
    slug: "minhalojapos",
    name: "MinhaLojaPOS",
    category: "Sistema de Gestão / POS",
    summary:
      "Sistema completo de gestão de vendas que corre localmente, acessível pelo navegador, sem depender de internet nem de servidores externos.",
    problem:
      "Soluções POS acessíveis, robustas e autónomas são escassas para comerciantes que não podem depender de infraestrutura de rede ou de serviços cloud pagos.",
    goal:
      "Construir um sistema de ponto de venda completo que funcionasse offline, fosse fácil de instalar num único ficheiro e protegesse comercialmente o software.",
    solution:
      "Desenvolvi o MinhaLojaPOS — uma aplicação Flask empacotada num único executável Windows. O sistema inclui ponto de venda, gestão de stock, emissão de facturas, relatórios e autenticação, com licenciamento offline baseado em HMAC-SHA256.",
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
    ],
    challenges: [
      "Criar um mecanismo de licenciamento funcional sem qualquer ligação à internet",
      "Garantir que a chave secreta de geração de licenças fosse única por instalação",
      "Empacotar toda a aplicação (Flask + templates + base de dados + assets) num único ficheiro .exe",
    ],
    decisions: [
      "Flask em vez de Django por ser mais leve e suficiente para uma aplicação local desktop-like",
      "SQLite em vez de PostgreSQL/MySQL por ser embutido, sem servidor e ideal para operação offline",
      "PyInstaller com --onefile --windowed para simplificar a distribuição ao cliente final",
    ],
    result:
      "Software funcional, distribuído num único executável, capaz de operar autonomamente sem internet em ambiente real de loja.",
    lessons:
      "Trabalhar offline-first força decisões de arquitetura mais rigorosas — cada dependência externa é um risco.",
    screenshots: [
      "/projects/minhalojapos/carrinho.png",
      "/projects/minhalojapos/factura.png",
      "/projects/minhalojapos/relatorio.png",
      "/projects/minhalojapos/admin.png",
      "/projects/minhalojapos/admin2.png",
      "/projects/minhalojapos/ativacao.png",
    ],
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
      "Precisava de uma presença profissional que demonstrasse, na prática, a minha capacidade de construir produtos web.",
    goal:
      "Criar um portfólio que funcionasse ele próprio como prova técnica: arquitetura limpa, performance, SEO, acessibilidade e design cuidado.",
    solution:
      "Construí uma aplicação Next.js 16 com TypeScript e Tailwind v4, design system próprio em dark mode, componentes reutilizáveis, SEO estruturado e deploy em produção.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Design system com dark/light mode",
      "Componentes reutilizáveis",
      "SEO completo com metadata por página",
      "Acessibilidade e performance otimizadas",
    ],
    challenges: ["Manter identidade visual consistente sem duplicar código"],
    decisions: ["Next.js App Router pela SEO nativa e simplicidade de rotas"],
    result: "Portfólio publicado, rápido e preparado para crescer.",
    lessons: "Construir o próprio portfólio ensina mais sobre produto do que qualquer tutorial.",
    screenshots: [],
    liveDemo: undefined,
    github: "https://github.com/Aristides-Morais",
    year: "2026",
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}