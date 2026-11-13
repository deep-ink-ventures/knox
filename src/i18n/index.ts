import { toLocale, type Locale } from './config.ts';
import de from './content/de.ts';
import en from './content/en.ts';
import type { SiteContent } from './content/types.ts';

export * from './config.ts';
export type * from './content/types.ts';

const CONTENT: Record<Locale, SiteContent> = { de, en };

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale];
}

/** Kurzform für Komponenten: `const t = contentFor(Astro.currentLocale)`. */
export function contentFor(currentLocale: string | undefined): SiteContent {
  return getContent(toLocale(currentLocale));
}
