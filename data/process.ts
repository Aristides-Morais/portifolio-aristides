export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Compreender",
    description:
      "Antes de escrever código, compreendo o problema real. Que dor resolve? Quem usa? Que restrições existem?",
  },
  {
    number: "02",
    title: "Planear",
    description:
      "Defino arquitetura, modelo de dados e fluxos. Decido com intenção — não por hábito.",
  },
  {
    number: "03",
    title: "Construir",
    description:
      "Desenvolvo em pequenas iterações verificáveis. Código limpo, componentes reutilizáveis, nomes claros.",
  },
  {
    number: "04",
    title: "Testar",
    description:
      "Testo fluxos reais, casos-limite e dispositivos diferentes. Bugs encontrados cedo custam menos.",
  },
  {
    number: "05",
    title: "Refinar",
    description:
      "Melhoro performance, acessibilidade, UX e consistência visual. Detalhes fazem a diferença.",
  },
  {
    number: "06",
    title: "Publicar",
    description:
      "Coloco em produção, valido em ambiente real e monitorizo.",
  },
  {
    number: "07",
    title: "Iterar",
    description:
      "Com base em uso e feedback, melhoro continuamente. Software nunca está 'terminado'.",
  },
];