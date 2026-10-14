"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: "$", text: "quem sou eu", delay: 0 },
  { prompt: ">", text: "aristides-morais", delay: 400 },
  { prompt: "$", text: "ler perfil.json", delay: 900 },
  { prompt: ">", text: '{ "função": "Full-Stack Developer" }', delay: 1300 },
  { prompt: ">", text: '{ "localização": "Luanda, Angola" }', delay: 1700 },
  { prompt: ">", text: '{ "stack": ["Next.js", "TypeScript", "Tailwind"] }', delay: 2100 },
  { prompt: "$", text: "estado", delay: 2700 },
  { prompt: ">", text: "disponível para oportunidades ✓", delay: 3100 },
];

export function TerminalHero() {
  const [visible, setVisible] = useState<number>(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setVisible(lines.length);
      return;
    }
    const timers = lines.map((l, i) =>
      setTimeout(() => setVisible(i + 1), l.delay + 300)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="rounded-xl border border-border bg-bg-surface/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated/50">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs font-mono text-text-subtle">
          aristides@dev — terminal
        </span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[320px]">
        {lines.slice(0, visible).map((l, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-accent select-none shrink-0">{l.prompt}</span>
            <span
              className={l.prompt === ">" ? "text-text-muted" : "text-text"}
            >
              {l.text}
            </span>
          </div>
        ))}
        {visible < lines.length && (
          <span className="inline-block w-2 h-4 bg-accent align-middle animate-pulse" />
        )}
      </div>
    </div>
  );
}