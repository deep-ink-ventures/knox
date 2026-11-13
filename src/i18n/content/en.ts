import type { SiteContent } from './types.ts';

/* British English (theatre, privatised, enquiry). Song titles stay in German – they are the
   real titles of the German-language production and of the YouTube videos. */
const en: SiteContent = {
  meta: {
    title: 'KNOX – The Space Musical',
    description:
      'Funny and heartfelt: KNOX, the space musical by Eva Strasser (book & lyrics) and Stephen Sundberg (music). Materials for producers available on request.',
  },
  ui: {
    skipLink: 'Skip to content',
    languageNav: 'Language',
    footerNav: 'Footer',
    legalNotice: 'Legal notice',
    privacy: 'Privacy',
    backToTop: 'Back to top ↑',
  },
  hero: {
    tagline: 'The Musical',
    credits:
      'Funny, heartfelt, galactic – by <strong>Eva Strasser</strong> (book &amp; lyrics) and <strong>Stephen Sundberg</strong> (music).',
    navLabel: 'Page sections',
    nav: { videos: 'Videos', synopsis: 'Synopsis', vita: 'Creators', fotos: 'Photos' },
    scrollCue: 'Scroll to the videos',
  },
  videos: {
    eyebrow: 'The videos',
    heading: 'Songs full of punch, heart and sparkle',
    titleQuote: { open: '“', close: '”' },
    watchHint: '– watch the video on YouTube (opens in a new tab)',
    quote: '“Turbulence? That’s just the beat dropping.”',
    note: 'All videos open on YouTube in a new tab. The songs are sung in German. Demo recordings and sheet music are available <a href="#kontakt">on request</a>.',
  },
  story: {
    eyebrow: 'Synopsis',
    headingLead: 'The Galaxy has a new planet:',
    headingAccent: 'The Earth.',
    paragraphs: [
      'In the not-too-distant future, Dr.&nbsp;Schnaizer – narcissistic tech guru and the richest man among the stars – has built his very own privatised Galaxy: glittering space stations, artificial worlds, all up for sale. Only the crowning glory is still missing: <em>THE&nbsp;EARTH</em>, a brand-new planet made entirely to his taste. Granted, there already is something along those lines – Earth, that is. But in his eyes it is a <em>failed planet</em> whose best days are behind it.',
      'The only snag: people live on this <em>failed planet</em>. Knox, for one – an unlikely hero with a head that’s too big and an even bigger heart. When he gets wind of Schnaizer’s plans, he has to rise above himself: together with his rebellious sister Sophie, the party pilot Hollis and the AI Vox, who has a hopeless crush on him, he takes up the fight for the real Earth.',
      'Amid disco balls and space stations, superstar Ava – Schnaizer’s dazzling wife – is in the mix too. Earth? A write-off, as far as she’s concerned – though she is pursuing plans of her very own&nbsp;…',
      'KNOX is a funny and heartfelt musical about family, courage and whether “this shitty planet” might be worth saving after all. Spoiler: it is.',
    ],
    quotes: {
      schnaizer: '“Earth? A <em>failed planet</em>.”',
      knox: '“We found the best place in space a long time ago”',
      vox: '“It’s so much <em>better</em> here than on Earth!”',
    },
    origin: {
      title: 'How it all began',
      text: 'Once upon a time, during the pandemic, there was a screenwriter and a musician who spent a lot of time at home – and eventually decided to write a musical together. An award-winning dystopian short story became KNOX.',
    },
  },
  characters: {
    eyebrow: 'The characters',
    heading: 'An unlikely team against the end of the world',
    figures: {
      knox: {
        role: 'The hero',
        text: 'A head that’s too big, a big heart – and suddenly responsible for an entire planet.',
      },
      sophie: {
        role: 'The rebellious sister',
        text: 'Has little time for rules and a lot of time for her brother – not that she would ever admit it.',
      },
      schnaizer: {
        role: 'The tech guru',
        text: 'Narcissistic, worth billions, owner of a privatised Galaxy. His latest product: THE EARTH.',
      },
      ava: {
        role: 'The superstar',
        text: 'Schnaizer’s wife, celebrated among the stars. Earth? Written off. Her own plans? Top secret.',
      },
      hollis: {
        role: 'The party pilot',
        text: 'Flies anything with thrust – and never misses a party between here and the Galaxy.',
      },
      vox: {
        role: 'The AI',
        text: 'Omnipresent, highly intelligent – and hopelessly in love with Knox.',
      },
    },
    quotes: {
      ava: '“Evolution gives me a migraine”',
      norma: '“The others … they’re all mad!”',
    },
    footnote:
      'And that’s not even the whole universe – the full cast of the workshop presentation is listed <a href="#workshop">further down</a>.',
  },
  workshop: {
    eyebrow: 'Proven on stage',
    heading: 'The workshop presentation',
    lead: 'On 24 January 2026, a wonderful cast brought the world of KNOX to the stage for the first time at the eti in Berlin-Mitte – in front of an audience, accompanied live by piano, bass and drums.',
    quote: '“We’re not giving up! No matter what!”',
    facts: [
      { label: 'Date', value: '24 January 2026, 7 pm' },
      { label: 'Venue', value: 'eti – Europäisches Theaterinstitut' },
      { label: 'Address', value: 'Rungestraße 20, 10179 Berlin-Mitte' },
    ],
    castTitle: 'The cast',
    bandLabel: 'Live band',
    instruments: { piano: 'Piano', bass: 'Bass', drums: 'Drums' },
    castNote: 'Impressions, photos and a recording of the presentation are available on request.',
  },
  team: {
    eyebrow: 'Creators',
    heading: 'Two minds, one universe',
    members: {
      eva: {
        role: 'Book & lyrics',
        text: 'For years she has been a regular on Berlin’s live-literature stages. She studied philosophy, theatre, film and media studies in Vienna and Berlin, and screenwriting at the dffb, the German Film and Television Academy Berlin. She writes screenplays, horror audio dramas, short stories and prose; her novel “Wildhof” was published by Verlag Klaus Wagenbach in 2025. At the workshop presentation she gave her voice to the AI Vox. “Knox” is her first musical.',
      },
      stephen: {
        role: 'Music',
        text: 'A drummer, bassist and pianist by trade, he has played drums in countless rock bands since his school days. He is the singer, lyricist, composer and bassist of the chamber-pop project “fool”, with which he produced the album “Sentimental Stuff”, and the live drummer of the electro-pop outfit “KY”. For around 30 years he has also been one half of the award-winning comedy duo “Edd und Lefou”, appearing in the renowned dinner show “Palazzo” and at international festivals – including in France, Korea and Singapore. “Knox” is his first musical.',
      },
    },
  },
  fotos: {
    eyebrow: 'Photos',
    heading: 'From the world of KNOX',
    lead: 'Impressions from the workshop presentation on 24 January 2026 at the eti Berlin – from rehearsal to the stage to backstage.',
    alts: {
      'live-band': 'The live band with guitar and keyboard at the workshop presentation',
      'ensemble-buehne': 'The ensemble on stage at the workshop presentation',
      kostuemprobe: 'Costume fitting: trying on the headpiece',
      'ensemble-lesung': 'The ensemble at the music stands during the staged reading',
      'team-selfie': 'Group selfie of the KNOX team after the presentation',
      'backstage-schlagzeug': 'Backstage with the script and the drum kit',
      'ensemble-gruppe': 'Group photo of the ensemble on stage',
      'kuenstler-backstage': 'Two performers with coffee cups after the presentation',
      textbuch: 'The script of “Knox – Ein neues Musical”, Berlin, January 2026',
    },
    credit: 'Photos: 101united and the KNOX team.',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Bring KNOX to the stage.',
    copy: 'Have you received material from us – or would you like to get to know KNOX? We look forward to hearing from producers, theatres and venues.',
    offersLabel: 'Available on request:',
    offers: ['Script & sample pages', 'Demo recordings', 'Pitch materials', 'Workshop recording'],
    cta: 'Send an email',
    mailSubject: 'KNOX – Enquiry',
    or: 'or write directly to',
    signoffLead: 'We say',
    signoffAccent: 'Tschitschibu Hurra!',
  },
};

export default en;
