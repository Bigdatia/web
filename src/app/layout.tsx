import type { Metadata } from "next";
import { Inter, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BigDatIA | Agencia Estratégica",
  description: "Transformamos la complejidad técnica en ejecución de mercado. Estrategia, tecnología y marketing impulsados por inteligencia real.",
};

import { BottomNav } from "@/components/layout/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} ${spaceGrotesk.variable} dark`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-on-surface selection:bg-brand-lemon selection:text-on-primary">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
