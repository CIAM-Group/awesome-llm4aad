import { describe, expect, it } from 'vitest'
import { resolvePaperNoteLinks } from './paperLinks'

const papers = new Set(['eoh-s', 'heuragenix'])

describe('paper note links', () => {
  it('maps a sibling note to its route under root hosting', () => {
    expect(resolvePaperNoteLinks('<a href="../eoh-s/index.md">EoH-S</a>', papers, '/'))
      .toBe('<a href="/papers/eoh-s">EoH-S</a>')
  })

  it('preserves a project base path', () => {
    expect(resolvePaperNoteLinks('<a href="../eoh-s/index.md">EoH-S</a>', papers, '/collection/'))
      .toBe('<a href="/collection/papers/eoh-s">EoH-S</a>')
  })

  it('accepts a base path without a trailing slash', () => {
    expect(resolvePaperNoteLinks('<a href="../eoh-s/index.md">EoH-S</a>', papers, '/collection'))
      .toBe('<a href="/collection/papers/eoh-s">EoH-S</a>')
  })

  it('retains fragments and rewrites multiple links', () => {
    const html = '<a href="../eoh-s/index.md#core-method">A</a><a href="../heuragenix/index.md">B</a>'
    expect(resolvePaperNoteLinks(html, papers, '/collection/'))
      .toBe('<a href="/collection/papers/eoh-s#core-method">A</a><a href="/collection/papers/heuragenix">B</a>')
  })

  it('does not rewrite missing paper IDs', () => {
    const html = '<a href="../unknown/index.md">Unknown</a>'
    expect(resolvePaperNoteLinks(html, papers, '/collection/')).toBe(html)
  })

  it('preserves external links, images and unrelated documents', () => {
    const html = '<a href="https://example.org/eoh-s/index.md">External</a><img src="../eoh-s/index.md"><a href="../eoh-s/appendix.md">Appendix</a><a href="#method">Anchor</a>'
    expect(resolvePaperNoteLinks(html, papers, '/collection/')).toBe(html)
  })
})
