import { getDictionary } from "@/lib/dictionary";
import { Locale, i18n } from "@/i18n.config";

export default async function Footer(props: {
    lang: Locale
}) {
    const dictionary = await getDictionary(props.lang);
    const locales = i18n.locales.filter(locale => locale !== props.lang)

    return (
        <div id="contacts" className="flex flex-col gap-y-3 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="w-auto lg:hidden md:hidden">
                <a
                className="pointer-events-auto"
                href="https://www.linkedin.com/in/salvatore-riccardi/"
                target="_blank"
                >
                    <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                </a>
            </div>
            <div className="text-center lg:p-4 lg:text-start md:text-start">
                {dictionary.footer.base.text} <strong>{dictionary.footer.base.city}</strong>
            </div>
        </div>
    )
}