export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens",
    items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Backend",
    items: ["Flask", "Jinja2", "Werkzeug", "APIs REST"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Base de Dados",
    items: ["SQLite"],
  },
  {
    title: "Segurança",
    items: ["HMAC-SHA256", "Hashing de senhas", "Licenciamento offline"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "PyInstaller", "PowerShell"],
  },
];