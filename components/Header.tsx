import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Header(props: {
    lang: Locale
}) {
    const dictionary = await getDictionary(props.lang);

    return (
        <div className="flex flex-col gap-y-4 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-row md:flex-row">
            <div className="flex flex-col w-auto justify-center border border-gray-200 from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:flex-row lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:bg-gradient-to-b lg:p-4 lg:dark:bg-zinc-800/30 md:flex-row md:bg-transparent md:bg-gray-200 md:p-4 md:rounded-xl md:border md:dark:bg-zinc-800/30">
                {dictionary.header.title}&nbsp;
                <code className="font-mono font-bold text-center">{dictionary.header.subtitle}</code>
            </div>
            <header className="flex flex-row gap-x-3 border border-gray-200 from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:flex-row lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:bg-gradient-to-b lg:p-4 lg:dark:bg-zinc-800/30 md:flex-row md:bg-transparent md:bg-gray-200 md:p-4 md:rounded-xl md:border md:dark:bg-zinc-800/30">
                <LocaleSwitcher lang={props.lang}/>
            </header>
        </div>
    )
}