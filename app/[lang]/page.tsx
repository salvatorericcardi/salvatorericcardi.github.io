import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const translation = await getDictionary(lang);

  return (
    <main id="main" className="flex min-h-screen flex-col items-center p-24 gap-y-6">
      <Header lang={lang} />
      <div className="flex flex-col items-center text-center my-6">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h2 className="mb-3 text-2xl font-semibold">{translation.projects}</h2>
        </div>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://salvatorericcardi.github.io/alpaca-generator"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {translation.project1.title}&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &rarr;
              </span>
            </h2>
            <div className="flex flex-row justify-center gap-x-2 mb-3 text-xs text-center opacity-50 lg:justify-start lg:text-left">
              <span className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                {translation.project1.stack.html}
              </span>
              <span className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                {translation.project1.stack.css}
              </span>
              <span className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                {translation.project1.stack.javascript}
              </span>
            </div>
            <p className="my-0 mx-auto max-w-[30ch] text-sm opacity-50">
              {translation.project1.description}
            </p>
          </a>
        </div>
      </div>
      <Footer lang={lang} />
    </main>
  );
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const translation = await getDictionary(lang);

  return {
    title: translation.title,
    description: translation.description
  }
}