/* Sprachkonfiguration: Deutsch ist die Standardsprache unter „/“, Englisch liegt unter „/en/“. */

export const LOCALES = ['de', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'de';

/** localStorage-Schlüssel für eine bewusst über den Umschalter getroffene Sprachwahl. */
export const LANG_STORAGE_KEY = 'knox-lang';

export const LOCALE_META: Record<Locale, { short: string; name: string; ogLocale: string }> = {
  de: { short: 'DE', name: 'Deutsch', ogLocale: 'de_DE' },
  en: { short: 'EN', name: 'English', ogLocale: 'en_GB' },
};

/** Jede Seite existiert in beiden Sprachen; der Schlüssel verbindet die Gegenstücke. */
export const ROUTES = {
  home: { de: '/', en: '/en/' },
  legalNotice: { de: '/impressum/', en: '/en/legal-notice/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/** Astro.currentLocale ist `string | undefined` – auf eine bekannte Sprache abbilden. */
export function toLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
