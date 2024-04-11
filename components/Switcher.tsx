'use client';
import { Locale, i18n } from "@/i18n.config"
import Link from "next/link";

export default function Switcher(props: {
    lang: Locale
}) {
    const animation = props.lang == "en" ? "slide-in" : "slide-out"

    return (
        <div className="flex flex-row p-4 gap-x-1 items-center">
            <Link
            className="pointer-events-auto"
            href="/en"
            lang="en"
            >
                <span className="fi fi-gb" style={{ display: "block", width: "32px", height: "16px" }}></span>
            </Link>
            <div className="bg-black w-8 h-4 rounded">
                <button className={`bg-white w-1/2 h-full rounded-full ${props.lang} ${animation}`} disabled></button>
            </div>
            <Link
            className="pointer-events-auto"
            href="/it"
            lang="it"
            >
                <span className="fi fi-it" style={{ display: "block", width: "32px", height: "16px" }}></span>
            </Link>
        </div>
    )
  }