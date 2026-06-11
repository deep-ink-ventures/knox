# KNOX Pitch-Site — Design Spec

**Datum:** 2026-06-11 · **Status:** Autonom umgesetzt, zur Review durch den Nutzer

## Ziel & Publikum

Eine deutschsprachige One-Page-Website für das Musical **KNOX** (Buch & Lyrics: Eva Strasser, Musik: Stephen Sundberg). Zielgruppe: Produzent:innen, Theater, Intendanzen und Dramaturgien, die bereits Material (Demos, Skript) erhalten haben. Die Seite ist der zentrale, professionelle Anlaufpunkt: Sie macht das Projekt greifbar, belegt mit der Workshop-Präsentation vom 24.01.2026 (eti Berlin) die Bühnentauglichkeit und führt zur Kontaktaufnahme.

Die Veranstaltung liegt in der Vergangenheit — die Seite ist **kein Event-Flyer**, sondern ein **digitales Pressekit / Pitch-Deck**: Vergangenheitsform beim Workshop ("erfolgreich präsentiert"), Zukunftsform beim Ziel ("Bringen Sie KNOX auf die Bühne").

## Erwogene Ansätze

1. **Statischer One-Pager (Astro)** — gewählt. Null JS-Overhead, Microsite-Budget (<80 kb JS) trivial einhaltbar, Vercel-Deploy in Sekunden, Inhalte leicht erweiterbar (Fotos, Audio, EN-Version).
2. Next.js App Router — überdimensioniert für eine Inhaltsseite ohne Interaktivität; Basis-JS sprengt das Microsite-Budget.
3. Passwortgeschützter Material-Bereich — verworfen (YAGNI). Material bleibt "auf Anfrage"; die Seite bleibt öffentlich zeigbar. Kann später ergänzt werden.

## Gestaltungsrichtung: „Cosmic Playbill"

Vom Flyer abgeleitet: schwarze Sternenbühne, eisblau glühender KNOX-Schriftzug, Comic-Artwork (Figuren-Lineup, vier Planeten/Stationen). Dramaturgie der Farben = Dramaturgie des Stücks:

- **Cyan** (`#7fdcf2`) — Schnaizers synthetische Galaxy, Technologie, Marke
- **Bernstein** (`#f4b860`) — das große Herz, Theaterscheinwerfer, primäre CTAs
- Tiefes Blauschwarz (`#04070f`) als Bühne, Magenta sparsam als Nebel-Akzent

**Typografie:** Unbounded (Display, 700/800) — rund-futuristisch, passend zum Logo; Sora (Fließtext, 400/600); Michroma (Eyebrow-Labels, gesperrt) als direktes Echo der Techno-Schrift des Flyers. Alle selbst gehostet (`@fontsource`) — DSGVO-Pflicht für deutsches Publikum.

**Motion:** Canvas-Sternenfeld (Drift + Funkeln, < 2 kb JS), gestaffelte Hero-Reveals, IntersectionObserver-Scroll-Reveals, schwebende Planeten. Alles compositor-freundlich (transform/opacity), vollständige `prefers-reduced-motion`-Unterstützung, Inhalte ohne JS sichtbar.

## Seitenarchitektur (eine Seite + Impressum)

| Sektion | Inhalt | Planet-Motiv |
|---|---|---|
| Hero | KNOX-Logotype, Tagline, Autoren, Workshop-Badge, CTAs, Ensemble-Artwork | Hex-Sphäre + Ringstation |
| Die Geschichte | Pitch-Synopsis (aus Flyer adaptiert), Pull-Quote Dr. Schnaizer, Entstehung (Corona, preisgekrönte Kurzgeschichte) | Hex-Sphäre |
| Die Figuren | 6 Karten: Knox, Sophie, Dr. Schnaizer, Ava, Hollis, Vox — Figurentexte aus Flyer-Fakten | — |
| Die Musik | Hits: „Galaxy", „Er gehört in eine Einrichtung", „Dieser beschissene Planet" + Hinweis Demos auf Anfrage | Ringstation |
| Workshop-Präsentation | Beleg: 24.01.2026, eti Berlin, vollständige Besetzungsliste (Playbill-Stil) | Spiralstation |
| Team | Eva Strasser, Stephen Sundberg (nur belegte Fakten, Bios = TODO) | — |
| Kontakt | „Bringen Sie KNOX auf die Bühne" — Materialliste, Mail-CTA, „Tschitschibu Hurra" | Erde („die echte Erde") |

Bewusst NICHT zugeordnet: Figurenkarten ↔ Artwork-Ausschnitte (Zuordnung der gezeichneten Figuren zu Rollen ist nicht belegt; Fehlzuordnung wäre peinlich gegenüber Produzent:innen). Das Lineup erscheint als Gesamtbild im Hero.

## Technik

- **Stack:** Astro 6, statisch, kein Framework-JS; Struktur nach Feature (`components/hero`, `components/sections`, `styles/tokens.css`)
- **Performance:** Hero-Bild = LCP (preload, eager, fetchpriority), Planeten lazy, WebP, explizite Dimensionen, Ziel LCP < 2,5 s / CLS < 0,1, JS gesamt < 10 kb
- **A11y:** semantische Landmarken, ein H1, sichtbare Fokus-Stile, Kontraste ≥ AA, `lang="de"`
- **SEO:** OG-Image aus Flyer, deutsche Meta-Texte; vorerst `noindex` bis Impressum & Domain final sind

## Offene Punkte (TODO für Nutzer)

1. **Kontakt-E-Mail** — Platzhalter `kontakt@knox-musical.de` ersetzen
2. Impressum-Pflichtangaben ausfüllen (`/impressum`)
3. Team-Bios erweitern, Figuren-Kurztexte redigieren
4. Optional: Fotos/Mitschnitt der Präsentation, Demo-Audio, Domain + Vercel-Deploy

## Revision 1 — 11.06.2026, nach Feedback des Teams

Brief von Eva ("Landing page mit dem KI-Bild als Hintergrund, einfach, kein Schnickschnack")
und Nutzer-Feedback umgesetzt:

- **Hero:** Ensemble-Vordergrundbild entfernt (wirkte hochskaliert unsauber); stattdessen das
  KI-Flyer-Artwork (ohne eingebackenes Logo, Zuschnitt ab y=450) als stark abgedunkeltes
  Hintergrundbild mit radialem Scrim. Überschrift „KNOX / Das Musical". Bereichs-Buttons:
  Videos · Synopsis · Vita · Fotos.
- **Videos statt Songliste:** 10 Song-Videos als reine YouTube-Links (DSGVO: kein Embed,
  kein Cookie-Banner nötig), zweispaltige Trackliste.
- **Umbenennungen:** Die Geschichte → Synopsis (#synopsis), Das Team → Vita (#vita, „Viten
  folgen"), neue Platzhalter-Sektion Fotos (#fotos).
- **Figuren-Raster:** versetzter Rhythmus entfernt → sauber ausgerichtet (Feedback).
- **Planeten:** deutlich sichtbarere Schwebe-Animation (±13 px, ±3,5°, 6,5–8,5 s,
  ease-in-out, je Planet eigene Dauer/Phase).
- **Recht:** Impressum mit echten Angaben (Christian Peters, Wollankstraße 108, 13187 Berlin,
  E-Mail offen), neue DSGVO-Datenschutzerklärung unter `/datenschutz`.
- Synopsis-Langtext und Viten folgen vom Team („folgt"); Drive-Suche scheiterte an
  nicht verfügbarer OAuth-Anmeldung in dieser Session.
