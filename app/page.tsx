'use client';
import { i18n } from "@/i18n.config";
import { useEffect } from "react";

export default function Home(): void {
  useEffect(() => {
    window.location.href = `/${i18n.defaultLocale}`
  }, [])
}