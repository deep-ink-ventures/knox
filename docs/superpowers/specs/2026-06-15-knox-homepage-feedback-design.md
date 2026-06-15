# KNOX-Homepage – Kundenfeedback-Runde (15.06.2026)

Konkrete Inhalts- und UI-Anpassungen aus Evas/Steffens Rückmeldung zur Homepage.
Reine Redaktions- und Detailarbeit an bestehenden Sektionen – keine neue Architektur.

> **Status (15.06.2026):** A–F umgesetzt und bei 1440 px / 375 px sichtgeprüft, Build grün.
> Galerie weiterhin offen – die nachgereichten Fotos lagen nur als ~500-Byte-Thumbnails
> vor (nicht web-tauglich); wartet auf brauchbare Originale.

## Entscheidungen (aus Rückfragen geklärt)

1. **Videos-Überschrift** „Songs voll Wumms, Herz und Funkeln" → **bleibt unverändert**
   (die Tagline-Streichung gilt nur für die ausdrücklich genannten Stellen).
2. **Fünf neue Figuren-Zitate** → **am Rand über mehrere Sektionen verteilt**, nicht als
   Stapel in einer Spalte.
3. **Kontakt** → **beides** klarstellen: die vier Pillen labeln *und* die E-Mail-Aktion
   vereindeutigen.
4. **Eva-Vita & Vox** → **neue Vita übernehmen + ein korrigierter Vox-Satz** ergänzt
   (sie lieh Vox ihre Stimme, stand nicht als Vox auf der Bühne).

## Aufgeschoben (nicht in dieser Runde)

- **Galerie / `./changes`-Ordner** (Fotos-Sektion, `Fotos.astro`): ähnlich aussehende
  Bilder ausdünnen, Workshop-Fotos aus `./changes` web-optimieren und einbinden, Ordner
  danach löschen. → **Wartet auf ein Update vom Kunden**, daher hier ausgeklammert.
  `changes/` und `public/assets/img/videos/` bleiben vorerst unangetastet.

---

## Änderungen im Detail

### A. Vita / „Köpfe dahinter" — `src/components/sections/Team.astro`

Beide Entwurfs-Viten (Zeilen 5–16) durch die finalen Texte ersetzen. Damit entfällt auch
das „voll Wumms, Herz und Funkeln" aus Steffens altem Text (Zeile 14) automatisch.

**Eva Strasser — Buch & Lyrics** (neu, inkl. korrigiertem Vox-Satz):

> Ist seit Jahren auf diversen Berliner Lesebühnen unterwegs. Studierte Philosophie,
> Theater-, Film- und Medienwissenschaften in Wien und Berlin und Drehbuch an der dffb
> Berlin. Schreibt Drehbücher, Grusel-Hörspiele, Kurzgeschichten und Prosa. 2025 erschien
> ihr Roman „Wildhof" im Verlag Klaus Wagenbach. Bei der Workshop-Präsentation lieh sie
> der KI Vox ihre Stimme. „Knox" ist ihr erstes Musical.

**Stephen Sundberg — Musik** (neu):

> Von Haus aus Schlagzeuger, Bassist und Pianist. Seit der Schulzeit Schlagzeuger in
> unzähligen Rockbands. Sänger, Texter, Komponist und Bassist des Kammerpop-Projekts
> „fool", mit dem er das Album „Sentimental Stuff" produzierte. Live-Drummer der
> Electro-Pop-Formation „KY". Außerdem ist er seit rund 30 Jahren als Comedian Teil des
> preisgekrönten Duos „Edd und Lefou" und war in der renommierten Dinnershow „Palazzo"
> sowie auf internationalen Festivals — u. a. in Frankreich, Korea und Singapur — auf der
> Bühne zu sehen. „Knox" ist sein erstes Musical.

Hinweise:
- Anzeigename bleibt **„Stephen Sundberg"** (im Feedback „Steffen" genannt – das ist
  derselbe; öffentlicher Name auf der Seite bleibt konsistent zu Hero & Besetzung).
- Interpunktion leicht normalisiert (Komma-Reihung „Theater-, Film- und …", „u. a.",
  Bindestriche „Electro-Pop-Formation"). Bei Wunsch 1:1 übernehmen.

### B. Synopsis — `src/components/sections/Story.astro`

1. **„dieser beschissene Planet" in Anführungszeichen** (Zeile 36–37). Markiert es als
   Schnaizers Sicht (ironische Distanz):
   > … über Familie, Mut und die Frage, ob „dieser beschissene Planet" es nicht doch wert
   > ist, gerettet zu werden. Spoiler: Ist er.
2. **„Wie alles begann" – Motto entfernen** (Zeile 56):
   `<p class="origin-motto">Voll Wumms, Herz und Funkeln.</p>` löschen.
   Verwaistes CSS `.origin-motto` (Zeilen 133–139) gleich mit entfernen.

### C. Workshop — `src/components/sections/Workshop.astro`

1. **Lead: Tagline entfernen** (Zeile 47–50). Da die Besetzung jetzt eine 3-köpfige
   Live-Band ausweist, „mit Klavier" entsprechend mitziehen:
   > Am 24. Januar 2026 brachte ein großartiger Cast die Welt von KNOX zum ersten Mal auf
   > die Bühne des eti in Berlin-Mitte – vor Publikum, live begleitet von Klavier, Bass und
   > Schlagzeug.
2. **Besetzung → Live-Band** (Array `crew`, Zeilen 16–20). „Buch & Lyrics" und „Musik"
   nicht erneut nennen (stehen bereits in Hero & Vita). Stattdessen die Musiker:
   ```
   const band = [
     ['Klavier', 'Justin Lehmann-Friese'],
     ['Bass', 'Abel Lovac'],
     ['Schlagzeug', 'Stephen Sundberg'],
   ];
   ```
   (Variable/Klasse `crew` → `band` umbenennen.) Kleines Label **„Live-Band"** über die
   Liste setzen, damit der Sprung von Rollen/Darsteller:innen zu Instrumenten klar ist.
3. **Cast-Liste** bleibt unverändert, inkl. „Vox — Eva Strasser" (Vox-Korrektur passiert
   laut Entscheidung in der Vita, nicht hier).

### D. Figuren — `src/components/sections/Characters.astro`

Karten sehen klickbar aus, sind es aber nicht. Falsche Affordance entfernen
(Zeilen 115–119): den Hover-„Lift" (`transform: translateY(-5px)`) und den klick-typischen
`box-shadow` streichen. Karten bleiben statische Info-Kacheln.

- Die statische Hervorhebung der Haupt-Karte (`.figure-card.main`, Glow) bleibt – das ist
  kein Hover-Signal.
- Optional eine sehr dezente, nicht-klickbare Reaktion behalten (z. B. leichter
  Rahmen-Tint ohne Bewegung/Schatten), damit es nicht „tot" wirkt.

### E. Kontakt — `src/components/sections/Contact.astro`

1. **Pillen labeln** (Liste `offers`, Zeilen 31–33): kurze Einleitung davor, z. B.
   **„Auf Anfrage erhalten Sie:"**, und die Pillen klar als nicht-klickbare Aufzählung
   gestalten (button-/filter-artige Optik abschwächen – etwa Hintergrund raus oder
   Häkchen/Punkt-Marker davor), damit sie nicht wie anklickbare Buttons wirken.
2. **E-Mail-Aktion vereindeutigen** (Zeilen 35–40): Button „E-Mail schreiben" bleibt die
   eine klare Aktion; die blanke Adresse darunter bekommt einen Vorspann, der sie als
   Alternative ausweist statt als Dublette, z. B.:
   > **E-Mail schreiben** · oder direkt an: kontakt@knox-das-musical.de

   So ist erkennbar: Button öffnet das Mailprogramm, die Adresse ist zum Kopieren/Direkt­
   anschreiben.

### F. Fünf neue Figuren-Zitate „am Rand" — neue Komponente + Verteilung

**Neue UI-Komponente** `src/components/ui/SideQuote.astro` (wiederverwendbar):
- Props: `quote`, `attribution`, `accent` (Farb-Token), `align` (`left` | `right`).
- Stil aus dem bestehenden `.pull-quote` in `Story.astro` ableiten (Display-Font,
  farbiger Seitenrand, Label-Caption in Versalien) und das dortige Schnaizer-Zitat auf die
  Komponente umstellen (DRY).
- **Ausrichtung & Responsiveness:** sitzt innerhalb des Section-Containers, zu einer Kante
  hin versetzt; wechselt zeilenweise links/rechts für Rhythmus. Auf schmalen Viewports
  klappt es in ein normales, volle-Breite-Blockzitat (kein Overflow, kein Layout-Shift).
- Bestehende Scroll-Reveal-Animation (`data-reveal`) nutzen – „sichtbare, verspielte
  Bewegung", aligned, kein Schnickschnack.

**Verteilung (Vorschlag, anpassbar)** – ein Zitat je Sektion, Akzentfarbe = Figurenfarbe
aus `Characters.astro`:

| Sektion | Zitat | Figur | Akzent |
|---|---|---|---|
| Videos | „Turbulenzen spürt man nicht beim Dancen" | Hollis | mint |
| Synopsis (Story-Aside) | „Wir haben den besten place in space schon längst gefunden" | Knox | cyan |
| Figuren | „Von Evolution krieg ich Migräne" | Ava | amber |
| Figuren | „Die anderen … sind alle verrückt!" | Norma | steel* |
| Workshop | „Wir geben nicht auf! Egal was passiert!" | Sophie | magenta |

\* Norma hat noch keine eigene Akzentfarbe (keine Figuren-Karte) – `steel` oder ein
violetter Ton; im Review festlegbar. Team-/Fotos-Sektion bewusst ausgespart (dort geht es
um die Macher bzw. Galerie, nicht um die Spielfiguren).

---

## Bewusst unverändert / Hinweise

- **Videos-Überschrift** „Songs voll Wumms, Herz und Funkeln" bleibt (Entscheidung 1).
- **„herzergreifend"** in Hero (`Hero.astro:6`), Meta-Description (`Base.astro:21`) und
  Synopsis (`Story.astro:36`) ist ein anderes Wort als die Tagline und wurde **nicht**
  angefasst. Falls es auch weg soll: kurz Bescheid geben.
- **Code-Kommentare** mit „Funkeln"/„Herz" (`tokens.css:13`, `Starfield.astro:59`) sind
  nicht sichtbar und bleiben.

## Umsetzungsreihenfolge

1. Reine Textänderungen: Team (A), Story (B), Workshop-Lead + Besetzung (C).
2. UI-Detail: Figuren-Hover (D), Kontakt (E).
3. Neue Komponente + Verteilung: SideQuote (F) – zuletzt, da am meisten Design/Testing.
4. Build prüfen (`npm run build`), Sichtprüfung bei 375 / 768 / 1440, Reduced-Motion checken.
