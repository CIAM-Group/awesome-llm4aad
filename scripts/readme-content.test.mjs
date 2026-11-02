import { describe, expect, it } from 'vitest'
import { renderPaperDirectory, updateReadme } from './readme-content.mjs'

const makePaper = (id, date, overrides = {}) => ({
  id,
  date,
  year: Number(date.slice(0, 4)),
  short_title: id,
  title: `${id}: A complete paper title`,
  venue: 'arXiv',
  paper_url: `https://arxiv.org/pdf/${id}`,
  problems: ['A problem that must not appear'],
  ...overrides,
})

describe('README paper directory', () => {
  const papers = [
    makePaper('older', '2025-11-01'),
    makePaper('zeta', '2026-10-01'),
    makePaper('earlier-month', '2026-09-01'),
    makePaper('alpha', '2026-10-01', { code_url: 'https://github.com/example/alpha' }),
  ]

  it('groups every paper once by descending year and month', () => {
    const output = renderPaperDirectory(papers)
    expect(output.indexOf('### 2026')).toBeLessThan(output.indexOf('### 2025'))
    expect(output.indexOf('2026.10 · 2 papers')).toBeLessThan(output.indexOf('2026.09 · 1 paper'))
    expect(output.indexOf('alpha:')).toBeLessThan(output.indexOf('zeta:'))
    expect(output.match(/<details open>/g)).toHaveLength(1)
    for (const paper of papers) expect(output.split(`content/papers/${paper.id}/index.md`)).toHaveLength(2)
    expect(output).toContain('[2026](#2026) · [2025](#2025)')
  })

  it('contains only the requested columns and explicit resource links', () => {
    const output = renderPaperDirectory(papers)
    expect(output).toContain('| Paper | Publication | Links |')
    expect(output).not.toContain('Problems')
    expect(output).not.toContain('A problem that must not appear')
    expect(output).not.toContain('Focus')
    expect(output.match(/\[Paper PDF\]/g)).toHaveLength(papers.length)
    expect(output.match(/\[Code\]/g)).toHaveLength(1)
    expect(output).toContain('[Code](https://github.com/example/alpha)')
    expect(output).not.toMatch(/[;；—–]/u)
  })

  it('does not duplicate paper acronyms or publication years', () => {
    const output = renderPaperDirectory([makePaper('EoH', '2024-07-01', { venue: 'ICML 2024' })])
    expect(output.match(/EoH: A complete paper title/g)).toHaveLength(1)
    expect(output).not.toContain('2024 2024')
    expect(output).not.toContain('**EoH**')
  })

  it('escapes table and HTML characters without changing metadata', () => {
    const paper = makePaper('safe', '2026-10-01', { title: 'A <script> & B | C\nnext' })
    const output = renderPaperDirectory([paper])
    expect(output).toContain('A &lt;script&gt; &amp; B &#124; C next')
    expect(output).not.toContain('<script>')
    expect(paper.title).toBe('A <script> & B | C\nnext')
  })

  it('handles an empty collection', () => {
    expect(renderPaperDirectory([])).toBe('No papers have been added yet.')
  })

  it('updates only the marked region and is idempotent', () => {
    const before = 'Custom heading\n<!-- PAPER_TABLE:START -->\nold rows\n<!-- PAPER_TABLE:END -->\nCustom footer\n'
    const once = updateReadme(before, papers)
    expect(once).toMatch(/^Custom heading\n/)
    expect(once).toMatch(/Custom footer\n$/)
    expect(once).not.toContain('old rows')
    expect(updateReadme(once, papers)).toBe(once)
  })

  it('rejects missing, duplicated or reversed markers', () => {
    expect(() => updateReadme('No markers', papers)).toThrow(/markers/)
    expect(() => updateReadme('<!-- PAPER_TABLE:END --><!-- PAPER_TABLE:START -->', papers)).toThrow(/markers/)
    expect(() => updateReadme('<!-- PAPER_TABLE:START --><!-- PAPER_TABLE:START --><!-- PAPER_TABLE:END -->', papers)).toThrow(/markers/)
  })
})
