import { test } from 'node:test';
import assert from 'node:assert/strict';
import de from '../../src/i18n/content/de.ts';
import en from '../../src/i18n/content/en.ts';

type Leaf = { path: string; value: string };

function collectLeaves(node: unknown, path = ''): Leaf[] {
  if (typeof node === 'string') return [{ path, value: node }];
  if (Array.isArray(node)) return node.flatMap((item, index) => collectLeaves(item, `${path}[${index}]`));
  if (node && typeof node === 'object') {
    return Object.entries(node).flatMap(([key, value]) => collectLeaves(value, path ? `${path}.${key}` : key));
  }
  throw new TypeError(`Unerwarteter Wert unter "${path}": ${String(node)}`);
}

const OPENING_TAG = /<(em|strong|a)\b[^>]*>/g;
const closingTag = (name: string) => new RegExp(`</${name}>`, 'g');

test('Englisch und Deutsch haben exakt dieselbe Struktur', () => {
  const dePaths = collectLeaves(de).map((leaf) => leaf.path);
  const enPaths = collectLeaves(en).map((leaf) => leaf.path);
  assert.deepEqual(enPaths, dePaths);
});

test('kein Text ist leer', () => {
  for (const { path, value } of [...collectLeaves(de), ...collectLeaves(en)]) {
    assert.ok(value.trim().length > 0, `leerer Text unter "${path}"`);
  }
});

test('Markup in den Texten ist ausbalanciert', () => {
  for (const { path, value } of [...collectLeaves(de), ...collectLeaves(en)]) {
    const opened = [...value.matchAll(OPENING_TAG)].map((match) => match[1]);
    for (const name of new Set(opened)) {
      const openCount = opened.filter((tag) => tag === name).length;
      const closeCount = value.match(closingTag(name))?.length ?? 0;
      assert.equal(closeCount, openCount, `<${name}> nicht geschlossen unter "${path}"`);
    }
  }
});

test('Anker-Links zeigen auf Sektionen, die es auf der Startseite gibt', () => {
  const sectionIds = new Set(['videos', 'synopsis', 'figuren', 'workshop', 'vita', 'fotos', 'kontakt']);
  for (const { path, value } of [...collectLeaves(de), ...collectLeaves(en)]) {
    for (const [, id] of value.matchAll(/href="#([^"]+)"/g)) {
      assert.ok(sectionIds.has(id), `unbekannter Anker #${id} unter "${path}"`);
    }
  }
});

test('die englische Fassung ist tatsächlich übersetzt', () => {
  const deLeaves = collectLeaves(de);
  const identical = collectLeaves(en).filter((leaf, index) => leaf.value === deLeaves[index].value);
  // Eigennamen & Begriffe, die in beiden Sprachen gleich lauten:
  const allowed = new Set([
    'hero.nav.videos',
    'hero.nav.synopsis',
    'story.eyebrow',
    'story.headingAccent',
    'workshop.facts[1].value',
    'workshop.facts[2].value',
    'workshop.instruments.bass',
    'contact.signoffAccent',
  ]);
  assert.deepEqual(
    identical.map((leaf) => leaf.path).filter((path) => !allowed.has(path)),
    [],
  );
});
