import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aristidesmorais.dev"),
  title: {
    default: "Aristides Morais — Full-Stack Developer",
    template: "%s | Aristides Morais",
  },
  description:
    "Full-Stack Developer em Luanda, Angola. Construo aplicações web funcionais — da arquitetura ao deploy — com foco em código limpo, performance e experiência do utilizador.",
  keywords: [
    "Aristides Morais",
    "Full-Stack Developer",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Angola",
    "Luanda",
  ],
  authors: [{ name: "Aristides Morais" }],
  creator: "Aristides Morais",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-text antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}