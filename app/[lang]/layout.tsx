import { Inter } from "next/font/google";
import { Locale, i18n } from "@/i18n.config";
import "../globals.css";
import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params
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

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const translation = await getDictionary(params.lang);

  return {
    title: translation.title,
    description: translation.description,
    metadataBase: new URL("https://salvatorericcardi.github.io"),
    alternates: {
      canonical: '/',
      languages: {
        'it': '/it',
        'en': '/en',
      },
    },
    openGraph: {
      images: {
        url: "/castello-baronale_fondi.jpg",
        width: 1200,
        height: 900,
        alt: "castello baronale di fondi"
      },
      locale: params.lang,
      alternateLocale: i18n.locales.filter(locale => locale !== params.lang),
    }
  }
}