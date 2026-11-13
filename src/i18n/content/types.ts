/**
 * Redaktionell verfasstes, vertrauenswürdiges Markup (nur <em>, <strong>, <a>), das per
 * `set:html` gerendert wird. Niemals Nutzereingaben hier hineinreichen.
 */
export type Html = string;

export type FigureId = 'knox' | 'sophie' | 'schnaizer' | 'ava' | 'hollis' | 'vox';
export type MemberId = 'eva' | 'stephen';
export type Instrument = 'piano' | 'bass' | 'drums';
export type FotoSlug =
  | 'live-band'
  | 'ensemble-buehne'
  | 'kostuemprobe'
  | 'ensemble-lesung'
  | 'team-selfie'
  | 'backstage-schlagzeug'
  | 'ensemble-gruppe'
  | 'kuenstler-backstage'
  | 'textbuch';

interface RoleText {
  role: string;
  text: string;
}

interface Labeled {
  label: string;
  value: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  ui: {
    skipLink: string;
    languageNav: string;
    footerNav: string;
    legalNotice: string;
    privacy: string;
    backToTop: string;
  };
  hero: {
    tagline: string;
    credits: Html;
    navLabel: string;
    nav: { videos: string; synopsis: string; vita: string; fotos: string };
    scrollCue: string;
  };
  videos: {
    eyebrow: string;
    heading: string;
    /** Song-Titel bleiben im Original; nur die Anführungszeichen folgen der Seitensprache. */
    titleQuote: { open: string; close: string };
    watchHint: string;
    quote: Html;
    note: Html;
  };
  story: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    paragraphs: Html[];
    quotes: { schnaizer: Html; knox: Html; vox: Html };
    origin: { title: string; text: string };
  };
  characters: {
    eyebrow: string;
    heading: string;
    figures: Record<FigureId, RoleText>;
    quotes: { ava: Html; norma: Html };
    footnote: Html;
  };
  workshop: {
    eyebrow: string;
    heading: string;
    lead: string;
    quote: Html;
    facts: Labeled[];
    castTitle: string;
    bandLabel: string;
    instruments: Record<Instrument, string>;
    castNote: string;
  };
  team: {
    eyebrow: string;
    heading: string;
    members: Record<MemberId, RoleText>;
  };
  fotos: {
    eyebrow: string;
    heading: string;
    lead: string;
    alts: Record<FotoSlug, string>;
    credit: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    copy: string;
    offersLabel: string;
    offers: string[];
    cta: string;
    mailSubject: string;
    or: string;
    signoffLead: string;
    signoffAccent: string;
  };
}
