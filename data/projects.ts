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
    slug: "kanda",
    name: "Kanda",
    category: "E-commerce / Full-Stack",
    summary:
      "Plataforma de e-commerce completa desenhada como a montra online dos negócios geridos pelo Zenda, com sincronização de stock em tempo real.",
    problem:
      "Os negócios que usam o Zenda precisavam de uma presença online para vender, mas criar uma loja separada causaria problemas de stock duplicado (vender online algo que já saiu no balcão físico) e exigiria gerir dois sistemas diferentes.",
    goal:
      "Criar uma loja online (Kanda) que partilhasse a mesma base de dados e API do Zenda, permitindo que o cliente final comprasse online e o dono da loja gerisse os pedidos no mesmo painel que já usava.",
    solution:
      "Desenvolvi o Kanda e o Zenda numa arquitetura Monorepo. A loja online foi construída em React, consumindo a mesma API do Zenda. No checkout, utilizei transações ACID ($transaction do Prisma) para garantir que a encomenda é criada e o stock é reduzido de forma atómica, evitando vendas duplicadas.",
    stack: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express",
      "Zod",
      "PostgreSQL (Neon)",
      "Prisma ORM",
      "Docker",
      "pnpm (Monorepo)",
    ],
    features: [
      "Catálogo de produtos responsivo com imagens e stock em tempo real",
      "Carrinho de compras com cálculo automático de totais",
      "Checkout seguro com validação de dados no backend via Zod",
      "Ecrã de 'Pedido Confirmado' animado e focado na experiência do utilizador",
      "Painel de gestão de pedidos e catálogo (integrado no Zenda)",
      "Baixa automática de stock via transações SQL ACID após a compra",
    ],
    challenges: [
      "Sincronizar o stock entre duas aplicações diferentes (loja online e balcão físico) sem race conditions.",
      "Gerir a autenticação e isolamento de dados multi-tenant para que a loja mostre apenas os produtos do respetivo negócio.",
      "Configurar CORS avançado para permitir pedidos seguros de dois domínios distintos (Kanda e Zenda).",
    ],
    decisions: [
      "Arquitetura Monorepo com pnpm para partilhar código de backend e tipos TypeScript entre Zenda e Kanda.",
      "Uso de $transaction do Prisma no checkout para garantir integridade referencial e consistência do stock (rollback em caso de erro).",
      "Separação dos deploys frontend na Vercel, mas mantendo um único backend centralizado na Render.",
    ],
    result:
      "Uma plataforma de e-commerce totalmente funcional e integrada ao ecossistema Zenda, permitindo aos comerciantes vender online sem dores de cabeça operacionais.",
    lessons:
      "Trabalhar com Monorepos e transações ACID exige um rigor técnico elevado. A consistência de dados é o pilar de qualquer sistema de e-commerce e, resolvê-la na base de dados, evita inúmeros bugs no frontend.",
    screenshots: [], // Vazio porque não vais colocar fotos
    liveDemo: "https://kanda-web-cyan.vercel.app",
    github: "https://github.com/Aristides-Morais/zenda",
    year: "2026",
    featured: true,
  },
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
    featured: false,
  },
  {
    slug: "portfolio-maria-graca",
    name: "Portfólio Maria Graça",
    category: "Website para Cliente",
    summary:
      "Website profissional personalizado para Maria Graça Gamboa Simão, profissional de cabeleireiro e beleza com mais de 20 anos de experiência.",
    problem:
      "A cliente precisava de uma presença online profissional para apresentar os seus serviços e organizar os seus conteúdos de forma elegante.",
    goal:
      "Criar uma identidade visual digital adaptada à atividade e uma estrutura de páginas profissional e responsiva.",
    solution:
      "Desenvolvi um website personalizado utilizando Python e Flask no backend, com templates Jinja2, HTML e CSS no frontend. O foco foi a organização de conteúdos e a apresentação dos serviços de forma profissional.",
    stack: ["Python", "Flask", "HTML", "CSS", "Jinja2"],
    features: [
      "Website profissional personalizado",
      "Apresentação de serviços de beleza",
      "Organização e estruturação de conteúdos",
      "Identidade visual adaptada à atividade",
    ],
    challenges: [
      "Adaptar a identidade visual à área de estética e beleza."
    ],
    decisions: [
      "Uso de Flask e Jinja2 pela simplicidade de deploy e gestão de templates."
    ],
    result: "Website entregue e funcional para a cliente.",
    lessons: "Trabalhar diretamente com o cliente exige comunicação clara e foco nas necessidades reais do negócio.",
    screenshots: [
      "/projects/portfolio-maria-graca/pagina.png",
      "/projects/portfolio-maria-graca/contato.png",
      "/projects/portfolio-maria-graca/contato2.png",
    ],
    liveDemo: undefined,
    github: undefined,
    year: "2026",
    featured: false, 
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