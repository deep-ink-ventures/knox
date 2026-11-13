# KNOX – Das Weltraum-Musical · Pitch-Website

Zweisprachiger One-Pager (Deutsch unter `/`, Englisch unter `/en/`) für Produzent:innen, Theater
und Bühnen, die Material zum Musical **KNOX** (Buch & Lyrics: Eva Strasser · Musik: Stephen
Sundberg) erhalten haben. Die Seite rahmt
die Workshop-Präsentation vom 24.01.2026 (eti, Berlin) als Beleg und führt zur Kontaktaufnahme.

Design-Spezifikation: [`docs/superpowers/specs/2026-06-11-knox-pitch-site-design.md`](docs/superpowers/specs/2026-06-11-knox-pitch-site-design.md)

## Befehle

| Befehl            | Aktion                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Abhängigkeiten installieren                  |
| `npm run dev`     | Dev-Server auf `localhost:4321`              |
| `npm run build`   | Produktions-Build nach `./dist/`             |
| `npm run preview` | Build lokal ansehen                          |
| `npm test`        | Unit-Tests (DE/EN-Texte vollständig & gleich strukturiert) |
| `npm run test:e2e`| Playwright-Tests: Spracherkennung, Umschalter, hreflang (Chromium, Firefox, WebKit) |

Deploy z. B. mit `vercel` (statisches Astro-Projekt, keine Server-Funktionen nötig).

## Stand der Inhalte

Erledigt: Kontakt-E-Mail (`kontakt@knox-das-musical.de`, ImprovMX-Weiterleitung), Impressum &
Datenschutzerklärung, Domain (`https://www.knox-das-musical.de` als `SITE_URL` in `Base.astro`,
www ist die primäre Domain bei Vercel), `noindex` entfernt.

Noch offen / Entwürfe:

- [ ] **Synopsis** (`Story.astro`) und **Viten** (`Team.astro`) sind redaktionelle Entwürfe —
      gern durch finale Texte des Teams ersetzen (z. B. Synopsis aus Drive)
- [ ] **Fotos** (`Fotos.astro`): zeigt Video-Standbilder; gern durch echte Bühnenfotos ergänzen
- [ ] **DNS**: `knox-das-musical.de` registrieren/aufschalten und mit dem Hosting verbinden
- [ ] Hosting-Abschnitt der Datenschutzerklärung prüfen, falls nicht bei Vercel gehostet wird

## Zweisprachigkeit

- **Texte** stehen ausschließlich in `src/i18n/content/de.ts` und `en.ts` (Typ: `types.ts`).
  Neue Texte immer in beiden Dateien ergänzen – `npm test` schlägt sonst fehl. Song-Titel bleiben
  in beiden Sprachen im Original.
- **Seiten-Gegenstücke** (`/impressum/` ↔ `/en/legal-notice/` usw.) sind in `src/i18n/config.ts`
  unter `ROUTES` hinterlegt; daraus entstehen canonical, `hreflang` und der Sprachumschalter.
- **Spracherkennung**: Nur beim Einstieg über `/` entscheidet ein kleines Inline-Skript
  (`src/components/i18n/LanguageRedirect.astro`) anhand der Browsersprache; ohne Deutsch landet man
  auf `/en/`. Crawler werden nie umgeleitet, Klicks innerhalb der Seite ebenfalls nicht. Eine
  bewusste Wahl über den Umschalter wird im `localStorage` gemerkt (in der Datenschutzerklärung,
  Abschnitt 6, beschrieben).
- Die englischen Rechtsseiten sind als unverbindliche Übersetzung gekennzeichnet; maßgeblich ist
  die deutsche Fassung.

## Struktur

```text
src/
├── components/
│   ├── hero/Hero.astro          # KI-Artwork als Hintergrund, Logotype, Bereichs-Buttons
│   ├── i18n/                    # Sprachumschalter + Browser-Spracherkennung
│   ├── HomePage.astro           # Startseite, von / und /en/ gemeinsam genutzt
│   ├── sections/                # Videos, Story (Synopsis), Characters, Workshop, Team (Vita), Fotos, Contact
│   ├── ui/SectionHeading.astro
│   ├── Starfield.astro          # Canvas-Sternenfeld (~2 kb, reduced-motion-aware)
│   └── Footer.astro
├── i18n/                        # Sprachkonfiguration, Routen, Texte (content/de.ts, content/en.ts)
├── layouts/Base.astro           # Fonts (selbst gehostet, DSGVO), Meta/OG/hreflang, Footer, Scroll-Reveals
├── pages/                       # index + impressum + datenschutz, englisch unter pages/en/
└── styles/                      # tokens.css (Design-Tokens), global.css
```

Die Song-Videos sind bewusst **reine YouTube-Links** in einer Trackliste (kein Embed): dadurch
fließen beim Seitenaufruf keine Daten an Google und es ist kein Cookie-Banner nötig. Sollen
Videos eingebettet werden, braucht es eine Zwei-Klick-Lösung plus erweiterte
Datenschutzerklärung. Die **Fotos-Sektion** zeigt Standbilder aus den Videos — selbst gehostete
Vorschaubilder unter `public/assets/img/videos/` (beim Build von YouTube geladen und
konvertiert).

## Assets

- `assets/source/` — Original-Flyer-Seiten (aus der PDF gerendert)
- `assets/processed/` — Zuschnitte (vier Planeten, Ensemble-Reserve)
- `public/assets/img/` — Web-Versionen: `hero-bg*.webp` (Flyer-Artwork ohne eingebackenes Logo,
  als Hero-Hintergrund), Planeten, OG-Bild; Neuzuschnitt per ImageMagick aus
  `assets/source/flyer-1.png`
- `qa/` — Screenshots der Abnahme (320/375/768/1440)

## Qualität (Stand 11.06.2026, Lighthouse mobil)

Performance 98 · Accessibility 100 · Best Practices 100 — LCP 2,3 s · CLS 0 · TBT 0 ms.
Kein Framework-JavaScript; Fonts (Unbounded, Sora, Michroma) werden selbst gehostet.
