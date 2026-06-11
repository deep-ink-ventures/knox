# KNOX – Das Weltraum-Musical · Pitch-Website

Deutschsprachiger One-Pager für Produzent:innen, Theater und Bühnen, die Material zum Musical
**KNOX** (Buch & Lyrics: Eva Strasser · Musik: Stephen Sundberg) erhalten haben. Die Seite rahmt
die Workshop-Präsentation vom 24.01.2026 (eti, Berlin) als Beleg und führt zur Kontaktaufnahme.

Design-Spezifikation: [`docs/superpowers/specs/2026-06-11-knox-pitch-site-design.md`](docs/superpowers/specs/2026-06-11-knox-pitch-site-design.md)

## Befehle

| Befehl            | Aktion                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Abhängigkeiten installieren                  |
| `npm run dev`     | Dev-Server auf `localhost:4321`              |
| `npm run build`   | Produktions-Build nach `./dist/`             |
| `npm run preview` | Build lokal ansehen                          |

Deploy z. B. mit `vercel` (statisches Astro-Projekt, keine Server-Funktionen nötig).

## Stand der Inhalte

Erledigt: Kontakt-E-Mail (`eva.strasser@gmail.com`), Impressum & Datenschutzerklärung, Domain
(`https://knox-das-musical.de` als `SITE_URL` in `Base.astro`), `noindex` entfernt.

Noch offen / Entwürfe:

- [ ] **Synopsis** (`Story.astro`) und **Viten** (`Team.astro`) sind redaktionelle Entwürfe —
      gern durch finale Texte des Teams ersetzen (z. B. Synopsis aus Drive)
- [ ] **Fotos** (`Fotos.astro`): zeigt vorerst Artwork-Kacheln; echte Bühnenfotos einpflegen
- [ ] **DNS**: `knox-das-musical.de` registrieren/aufschalten und mit dem Hosting verbinden
- [ ] Hosting-Abschnitt der Datenschutzerklärung prüfen, falls nicht bei Vercel gehostet wird

## Struktur

```text
src/
├── components/
│   ├── hero/Hero.astro          # KI-Artwork als Hintergrund, Logotype, Bereichs-Buttons
│   ├── sections/                # Videos, Story (Synopsis), Characters, Workshop, Team (Vita), Fotos, Contact
│   ├── ui/SectionHeading.astro
│   ├── Starfield.astro          # Canvas-Sternenfeld (~2 kb, reduced-motion-aware)
│   └── Footer.astro
├── layouts/Base.astro           # Fonts (selbst gehostet, DSGVO), Meta/OG, Scroll-Reveals
├── pages/                       # index + impressum + datenschutz
└── styles/                      # tokens.css (Design-Tokens), global.css
```

Die Song-Videos sind eine Galerie aus **selbst gehosteten Vorschaubildern**
(`public/assets/img/videos/`, beim Build von YouTube geladen und konvertiert), die als
**reine Links** zu YouTube führen (kein Embed): dadurch fließen beim Seitenaufruf keine Daten an
Google und es ist kein Cookie-Banner nötig. Sollen Videos eingebettet werden, braucht es eine
Zwei-Klick-Lösung plus erweiterte Datenschutzerklärung.

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
