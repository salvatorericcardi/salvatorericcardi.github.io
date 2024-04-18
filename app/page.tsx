'use client';
import { i18n } from "@/i18n.config";

export default function Home(): void {
  window.location.href = `/${i18n.defaultLocale}`
}