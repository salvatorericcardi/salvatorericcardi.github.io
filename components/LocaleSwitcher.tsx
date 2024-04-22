'use client';
import { Locale, i18n } from "@/i18n.config"
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

export default function LocaleSwitcher(props: {
    lang: Locale
}) {
    const router = useRouter()
    const [animation, setAnimation] = useState("")
    const [locale, setLocale] = useState(props.lang)

    const toggle = (e: MouseEvent<HTMLDivElement>) => {
        const container = e.target as HTMLDivElement
        const changeLocale = i18n.locales.filter(locale => locale !== props.lang)[0]
        
        setLocale(changeLocale)
        setAnimation(props.lang === i18n.defaultLocale ? "slide-out" : "slide-in")

        container.onanimationend = () => {
            router.replace(`/${changeLocale}`)
        }
    }

    return (
        <div className="flex flex-row gap-x-1 items-center">
            <span className="fi fi-gb" style={{ display: "block", width: "32px", height: "16px" }}></span>
            <div className="cursor-pointer bg-black w-8 h-4 rounded" onClick={(e) => toggle(e)}>
                <div id="switcher" className={`bg-white w-1/2 h-full rounded-full ${locale} ${animation}`}></div>
            </div>
            <span className="fi fi-it" style={{ display: "block", width: "32px", height: "16px" }}></span>
        </div>
    )
  }