export type Locale = "en" | "ar";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "ar"];

export const localeNames: Record<Locale, string> = {
    "en": "English",
    "ar": "العربية (Arabic)",
};