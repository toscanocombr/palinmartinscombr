import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Grupo Palin & Martins | Assessoria Juridica, Contabilidade e Consultoria",
  description: "Solucoes completas em assessoria juridica, contabilidade e consultoria empresarial. Experiencia e excelencia para impulsionar o seu negocio.",
  keywords: "assessoria juridica, contabilidade, consultoria empresarial, advogados, contador, gestao empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
