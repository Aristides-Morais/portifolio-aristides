"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const body = [
      `Nome: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject || `Contacto de ${name}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  const inputClass =
    "w-full h-11 px-4 rounded-lg bg-bg-surface border border-border text-text placeholder:text-text-subtle focus:border-accent focus:outline-none transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text mb-2"
          >
            Nome
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="O seu nome"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="o.seu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-text mb-2"
        >
          Assunto
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Projeto, oportunidade, dúvida..."
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text mb-2"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Descreva o que tem em mente..."
          className={`${inputClass} h-auto py-3 resize-y`}
        />
      </div>

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <Send size={16} />
          Enviar mensagem
        </Button>
      </div>

      {sent && (
        <p className="text-sm text-accent">
          ✓ O seu cliente de email deve ter aberto com a mensagem pronta a
          enviar. Se não abriu, escreva diretamente para{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="underline underline-offset-2"
          >
            {site.contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}