// @ts-check
import { defineConfig } from 'astro/config';
import { DEFAULT_LOCALE, LOCALES } from './src/i18n/config.ts';

// https://astro.build/config
export default defineConfig({
  // Deutsch unter „/“, Englisch unter „/en/“ – liefert Astro.currentLocale in allen Komponenten.
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: { prefixDefaultLocale: false },
  },
});
