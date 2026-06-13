import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Yuma Fujita | Data Engineer",
  description:
    "Data Engineer specializing in Snowflake, AI/LLM integration, and data platform architecture. Based in Japan.",
  openGraph: {
    title: "Yuma Fujita | Data Engineer",
    description:
      "Snowflake × AI でスケールするデータ基盤を設計・構築するエンジニア。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`h-full ${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
