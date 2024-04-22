import { Inter } from "next/font/google";
import { Locale, i18n } from "@/i18n.config";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang ?? i18n.defaultLocale} className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}