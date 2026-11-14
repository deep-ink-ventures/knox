import type { SiteContent } from './types.ts';

const de: SiteContent = {
  meta: {
    title: 'KNOX – Das Weltraum-Musical',
    description:
      'Humorvoll und herzergreifend: KNOX, das Weltraum-Musical von Eva Strasser (Buch & Lyrics) und Stephen Sundberg (Musik). Material für Produzent:innen auf Anfrage.',
  },
  ui: {
    skipLink: 'Zum Inhalt springen',
    languageNav: 'Sprache',
    footerNav: 'Fußzeile',
    legalNotice: 'Impressum',
    privacy: 'Datenschutz',
    backToTop: 'Nach oben ↑',
  },
  hero: {
    tagline: 'Das Musical',
    credits:
      'Humorvoll, herzergreifend, galaktisch – von <strong>Eva Strasser</strong> (Buch &amp; Lyrics) und <strong>Stephen Sundberg</strong> (Musik).',
    navLabel: 'Bereiche der Seite',
    nav: { videos: 'Videos', synopsis: 'Synopsis', vita: 'Vita', fotos: 'Fotos' },
    scrollCue: 'Zu den Videos scrollen',
  },
  videos: {
    eyebrow: 'Die Videos',
    heading: 'Songs voll Wumms, Herz und Funkeln',
    titleQuote: { open: '„', close: '“' },
    watchHint: '– Video bei YouTube ansehen (öffnet in neuem Tab)',
    quote: '»Turbulenzen spürt man nicht beim Dancen«',
    note: 'Alle Videos öffnen bei YouTube in einem neuen Tab. Demoaufnahmen und Noten gern <a href="#kontakt">auf Anfrage</a>.',
  },
  story: {
    eyebrow: 'Synopsis',
    headingLead: 'Die Galaxy hat einen neuen Planeten:',
    headingAccent: 'The Earth.',
    paragraphs: [
      'In einer nicht allzu fernen Zukunft hat Dr.&nbsp;Schnaizer – selbstverliebter Tech-Guru und reichster Mann zwischen den Sternen – seine eigene privatisierte Galaxy aufgebaut: glitzernde Raumstationen, künstliche Welten, alles im Angebot. Jetzt fehlt nur noch das Krönungsstück: <em>THE&nbsp;EARTH</em>, ein brandneuer Planet ganz nach seinem Geschmack. Gut, es gibt da schon etwas in der Richtung – die Erde nämlich. Aber die ist in seinen Augen ein <em>failed planet</em> und hat ihre besten Zeiten hinter sich.',
      'Dumm nur: Auf diesem <em>failed planet</em> leben Menschen. Zum Beispiel Knox – ein ungewöhnlicher Held mit einem zu großen Kopf und einem noch größeren Herzen. Als er hinter Schnaizers Pläne kommt, muss er über sich hinauswachsen: Zusammen mit seiner rebellischen Schwester Sophie, dem Partypiloten Hollis und der KI Vox, die hoffnungslos in ihn verknallt ist, nimmt er den Kampf um die echte Erde auf.',
      'Zwischen Discokugeln und Raumstationen mischt auch Superstar Ava mit, Schnaizers schillernde Frau. Die Erde? Abgeschrieben, findet sie – verfolgt dabei allerdings noch ganz eigene Pläne&nbsp;…',
      'KNOX ist ein humorvolles und herzergreifendes Musical über Familie, Mut und die Frage, ob „dieser beschissene Planet“ es nicht doch wert ist, gerettet zu werden. Spoiler: Ist er.',
    ],
    quotes: {
      schnaizer: '»Die Erde? Ein <em>failed planet</em>.«',
      knox: '»Wir haben den besten place in space schon längst gefunden«',
      vox: '»Hier ist es so viel <em>besser</em> als auf der Erde!«',
    },
    origin: {
      title: 'Wie alles begann',
      text: 'Es waren einmal während Corona eine Drehbuchautorin und ein Musiker, die viel zu Hause saßen – und schließlich beschlossen, gemeinsam ein Musical zu schreiben. Aus einer dystopischen, preisgekrönten Kurzgeschichte wurde KNOX.',
    },
  },
  characters: {
    eyebrow: 'Die Figuren',
    heading: 'Ein ungleiches Team gegen das Ende der Welt',
    figures: {
      knox: {
        role: 'Der Held',
        text: 'Ein zu großer Kopf, ein großes Herz – und plötzlich die Verantwortung für einen ganzen Planeten.',
      },
      sophie: {
        role: 'Die rebellische Schwester',
        text: 'Hält wenig von Regeln und viel von ihrem Bruder – auch wenn sie das niemals zugeben würde.',
      },
      schnaizer: {
        role: 'Der Tech-Guru',
        text: 'Selbstverliebt, milliardenschwer, Besitzer einer privatisierten Galaxy. Sein neuestes Produkt: THE EARTH.',
      },
      ava: {
        role: 'Der Superstar',
        text: 'Schnaizers Frau, gefeiert zwischen den Sternen. Die Erde? Abgeschrieben. Ihre eigenen Pläne? Streng geheim.',
      },
      hollis: {
        role: 'Der Partypilot',
        text: 'Fliegt alles, was Schub hat – und verpasst keine Party zwischen hier und der Galaxy.',
      },
      vox: {
        role: 'Die KI',
        text: 'Allgegenwärtig, hochintelligent – und hoffnungslos in Knox verknallt.',
      },
    },
    quotes: {
      ava: '»Von Evolution krieg ich Migräne«',
      norma: '»Die anderen … sind alle verrückt!«',
    },
    footnote:
      'Und das ist längst nicht das ganze Universum – die vollständige Besetzung der Workshop-Präsentation steht <a href="#workshop">weiter unten</a>.',
  },
  workshop: {
    eyebrow: 'Der Beweis auf der Bühne',
    heading: 'Die Workshop-Präsentation',
    lead: 'Am 24. Januar 2026 brachte ein großartiger Cast die Welt von KNOX zum ersten Mal auf die Bühne des eti in Berlin-Mitte – vor Publikum, live begleitet von Klavier, Bass und Schlagzeug.',
    quote: '»Wir geben nicht auf! Egal was passiert!«',
    facts: [
      { label: 'Datum', value: '24. Januar 2026, 19 Uhr' },
      { label: 'Bühne', value: 'eti – Europäisches Theaterinstitut' },
      { label: 'Ort', value: 'Rungestraße 20, 10179 Berlin-Mitte' },
    ],
    castTitle: 'Die Besetzung',
    bandLabel: 'Live-Band',
    instruments: { piano: 'Klavier', bass: 'Bass', drums: 'Schlagzeug' },
    castNote: 'Eindrücke, Fotos und Mitschnitt der Präsentation gern auf Anfrage.',
  },
  team: {
    eyebrow: 'Vita',
    heading: 'Zwei Köpfe, ein Universum',
    members: {
      eva: {
        role: 'Buch & Lyrics',
        text: 'Ist seit Jahren auf diversen Berliner Lesebühnen unterwegs. Studierte Philosophie, Theater-, Film- und Medienwissenschaften in Wien und Berlin und Drehbuch an der dffb Berlin. Schreibt Drehbücher, Grusel-Hörspiele, Kurzgeschichten und Prosa. 2025 erschien ihr Roman „Wildhof“ im Verlag Klaus Wagenbach. Bei der Workshop-Präsentation lieh sie der KI Vox ihre Stimme.',
      },
      stephen: {
        role: 'Musik',
        text: 'Von Haus aus Schlagzeuger, Bassist und Pianist. Seit der Schulzeit Schlagzeuger in unzähligen Rockbands. Sänger, Texter, Komponist und Bassist des Kammerpop-Projekts „fool“, mit dem er das Album „Sentimental Stuff“ produzierte. Live-Drummer der Electro-Pop-Formation „KY“. Außerdem ist er seit rund 30 Jahren als Comedian Teil des preisgekrönten Duos „Edd und Lefou“ und war in der renommierten Dinnershow „Palazzo“ sowie auf internationalen Festivals – u. a. in Frankreich, Korea und Singapur – auf der Bühne zu sehen.',
      },
    },
  },
  fotos: {
    eyebrow: 'Fotos',
    heading: 'Aus der Welt von KNOX',
    lead: 'Eindrücke von der Workshop-Präsentation am 24. Januar 2026 im eti Berlin – von der Probe über die Bühne bis backstage.',
    alts: {
      'live-band': 'Die Live-Band mit Gitarre und Keyboard bei der Workshop-Präsentation',
      'ensemble-buehne': 'Das Ensemble auf der Bühne bei der Workshop-Präsentation',
      kostuemprobe: 'Kostümprobe: Anprobe des Kopfschmucks',
      'ensemble-lesung': 'Das Ensemble bei der szenischen Lesung an den Notenständern',
      'team-selfie': 'Gruppenselfie des KNOX-Teams nach der Präsentation',
      'backstage-schlagzeug': 'Backstage an Textbuch und Schlagzeug',
      'ensemble-gruppe': 'Gruppenfoto des Ensembles auf der Bühne',
      'kuenstler-backstage': 'Zwei Mitwirkende mit Kaffeebechern nach der Präsentation',
      textbuch: 'Das Textbuch von „Knox – Ein neues Musical“, Berlin Januar 2026',
    },
    credit: 'Fotos: 101united und das KNOX-Team.',
  },
  contact: {
    eyebrow: 'Kontakt',
    heading: 'Bringen Sie KNOX auf die Bühne.',
    copy: 'Sie haben Material von uns erhalten – oder möchten KNOX kennenlernen? Wir freuen uns auf das Gespräch mit Produzent:innen, Theatern und Bühnen.',
    offersLabel: 'Auf Anfrage erhalten Sie:',
    offers: ['Skript & Leseprobe', 'Demoaufnahmen', 'Pitch-Material', 'Workshop-Mitschnitt'],
    cta: 'E-Mail schreiben',
    mailSubject: 'KNOX – Anfrage',
    or: 'oder direkt an',
    signoffLead: 'Wir sagen',
    signoffAccent: 'Tschitschibu Hurra!',
  },
};

export default de;
