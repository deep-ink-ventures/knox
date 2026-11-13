import { test, expect, type Page } from '@playwright/test';

const SITE_URL = 'https://www.knox-das-musical.de';

/** Öffnet eine Seite und wartet, bis eine mögliche Sprach-Weiterleitung abgeschlossen ist. */
async function open(page: Page, path: string): Promise<void> {
  await page.goto(path, { waitUntil: 'commit' });
  await page.waitForLoadState('networkidle');
}

async function overrideBrowserLanguages(page: Page, languages: string[]): Promise<void> {
  await page.addInitScript((langs) => {
    Object.defineProperty(Navigator.prototype, 'languages', { get: () => langs });
    Object.defineProperty(Navigator.prototype, 'language', { get: () => langs[0] });
  }, languages);
}

async function expectGermanHome(page: Page): Promise<void> {
  await expect(page).toHaveURL((url) => url.pathname === '/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  await expect(page.locator('.hero-sub')).toHaveText('Das Musical');
}

async function expectEnglishHome(page: Page): Promise<void> {
  await expect(page).toHaveURL((url) => url.pathname === '/en/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('.hero-sub')).toHaveText('The Musical');
}

test.describe('Spracherkennung beim Erstbesuch von /', () => {
  test.describe('deutscher Browser', () => {
    test.use({ locale: 'de-DE' });

    test('bleibt auf Deutsch', async ({ page }) => {
      await open(page, '/');
      await expectGermanHome(page);
    });

    test('ein direkt aufgerufenes /en/ bleibt Englisch', async ({ page }) => {
      await open(page, '/en/');
      await expectEnglishHome(page);
    });
  });

  test.describe('englischer Browser', () => {
    test.use({ locale: 'en-US' });

    test('landet auf der englischen Startseite', async ({ page }) => {
      await open(page, '/');
      await expectEnglishHome(page);
    });

    test('Query und Anker bleiben bei der Weiterleitung erhalten', async ({ page }) => {
      await open(page, '/?ref=flyer#kontakt');
      await expect(page).toHaveURL(/\/en\/\?ref=flyer#kontakt$/);
    });
  });

  test.describe('weder Deutsch noch Englisch', () => {
    test.use({ locale: 'fr-FR' });

    test('bekommt die internationale, englische Fassung', async ({ page }) => {
      await overrideBrowserLanguages(page, ['fr-FR', 'fr']);
      await open(page, '/');
      await expectEnglishHome(page);
    });

    test('Deutsch als Zweitsprache vor Englisch gewinnt', async ({ page }) => {
      await overrideBrowserLanguages(page, ['fr-FR', 'de-CH', 'en']);
      await open(page, '/');
      await expectGermanHome(page);
    });
  });

  test.describe('Englisch vor Deutsch', () => {
    test('gewinnt Englisch', async ({ page }) => {
      await overrideBrowserLanguages(page, ['en-GB', 'de-DE']);
      await open(page, '/');
      await expectEnglishHome(page);
    });
  });

  test.describe('Suchmaschinen-Crawler', () => {
    test.use({
      locale: 'en-US',
      userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    });

    test('werden nie umgeleitet', async ({ page }) => {
      await open(page, '/');
      await expectGermanHome(page);
    });
  });
});

test.describe('Sprachumschalter', () => {
  test.describe('englischer Browser', () => {
    test.use({ locale: 'en-US' });

    test('bewusste Wahl „Deutsch“ gilt auch beim nächsten Besuch', async ({ page }) => {
      await open(page, '/');
      await expectEnglishHome(page);

      await page.getByRole('navigation', { name: 'Language' }).getByRole('link', { name: 'Deutsch' }).click();
      await page.waitForLoadState('networkidle');
      await expectGermanHome(page);

      await open(page, '/');
      await expectGermanHome(page);
    });

    test('ohne verfügbaren Speicher hält die Navigation innerhalb der Seite die Wahl', async ({ page }) => {
      await page.addInitScript(() => {
        Object.defineProperty(window, 'localStorage', {
          get() {
            throw new DOMException('Speicher blockiert', 'SecurityError');
          },
        });
      });
      await open(page, '/');
      await expectEnglishHome(page);

      await page.getByRole('navigation', { name: 'Language' }).getByRole('link', { name: 'Deutsch' }).click();
      await page.waitForLoadState('networkidle');
      await expectGermanHome(page);
    });
  });

  test.describe('deutscher Browser', () => {
    test.use({ locale: 'de-DE' });

    test('bewusste Wahl „English“ gilt auch beim nächsten Besuch', async ({ page }) => {
      await open(page, '/');
      await page.getByRole('navigation', { name: 'Sprache' }).getByRole('link', { name: 'English' }).click();
      await page.waitForLoadState('networkidle');
      await expectEnglishHome(page);

      await open(page, '/');
      await expectEnglishHome(page);
    });

    test('Umschalten behält die aktuelle Sektion bei', async ({ page }) => {
      await open(page, '/#workshop');
      await page.getByRole('navigation', { name: 'Sprache' }).getByRole('link', { name: 'English' }).click();
      await expect(page).toHaveURL(/\/en\/#workshop$/);
    });

    test('der Sprachlink in der Fußzeile wechselt ebenfalls', async ({ page }) => {
      await open(page, '/');
      await page.getByRole('contentinfo').getByRole('link', { name: 'English' }).click();
      await page.waitForLoadState('networkidle');
      await expectEnglishHome(page);
    });

    test('die aktuelle Sprache ist markiert', async ({ page }) => {
      await open(page, '/');
      const nav = page.getByRole('navigation', { name: 'Sprache' });
      await expect(nav.getByRole('link', { name: 'Deutsch' })).toHaveAttribute('aria-current', 'page');
      await expect(nav.getByRole('link', { name: 'English' })).not.toHaveAttribute('aria-current', /.*/);
    });
  });
});

const PAGES = [
  { de: '/', en: '/en/', titles: { de: 'KNOX – Das Weltraum-Musical', en: 'KNOX – The Space Musical' } },
  { de: '/impressum/', en: '/en/legal-notice/', titles: { de: 'Impressum – KNOX', en: 'Legal notice – KNOX' } },
  {
    de: '/datenschutz/',
    en: '/en/privacy/',
    titles: { de: 'Datenschutzerklärung – KNOX', en: 'Privacy policy – KNOX' },
  },
] as const;

test.describe('Sprachversionen jeder Seite', () => {
  test.use({ locale: 'de-DE' });

  for (const route of PAGES) {
    for (const lang of ['de', 'en'] as const) {
      const other = lang === 'de' ? 'en' : 'de';

      test(`${route[lang]}: lang, Titel, canonical, hreflang und Umschalter`, async ({ page }) => {
        await open(page, route[lang]);
        await expect(page).toHaveURL((url) => url.pathname === route[lang]);
        await expect(page.locator('html')).toHaveAttribute('lang', lang);
        await expect(page).toHaveTitle(route.titles[lang]);

        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', SITE_URL + route[lang]);
        await expect(page.locator('link[rel="alternate"][hreflang="de"]')).toHaveAttribute('href', SITE_URL + route.de);
        await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', SITE_URL + route.en);
        await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
          'href',
          SITE_URL + route.de,
        );

        await expect(page.locator(`nav.lang-switch a[hreflang="${other}"]`)).toHaveAttribute('href', route[other]);
      });
    }
  }
});

test.describe('Spracherkennung nur auf der Startseite', () => {
  test.use({ locale: 'en-US' });

  test('deutsche Rechtsseiten werden nicht umgeleitet', async ({ page }) => {
    await open(page, '/impressum/');
    await expect(page).toHaveURL((url) => url.pathname === '/impressum/');
  });
});
