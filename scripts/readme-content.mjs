export const startMarker = '<!-- PAPER_TABLE:START -->'
export const endMarker = '<!-- PAPER_TABLE:END -->'

function escapeCell(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll('|', '&#124;')
    .replaceAll('\n', ' ')
}

function publication(paper) {
  const venue = escapeCell(paper.venue)
  return venue.includes(String(paper.year)) ? venue : `${venue} ${paper.year}`
}

function groupByDate(papers, length) {
  const groups = new Map()
  for (const paper of papers) {
    const key = paper.date.slice(0, length)
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(paper)
  }
  return [...groups]
}

export function renderPaperDirectory(papers) {
  if (papers.length === 0) return 'No papers have been added yet.'
  const sorted = [...papers].sort((a, b) => b.date.slice(0, 7).localeCompare(a.date.slice(0, 7)) || a.short_title.localeCompare(b.short_title, 'en') || a.id.localeCompare(b.id))
  const years = groupByDate(sorted, 4)
  const latestMonth = sorted[0].date.slice(0, 7)
  const yearLinks = years.map(([year]) => `[${year}](#${year})`).join(' · ')
  const sections = years.map(([year, entries]) => {
    const months = groupByDate(entries, 7).map(([month, monthlyPapers]) => {
      const rows = monthlyPapers.map(paper => {
        const paperTitle = `<a href="${escapeCell(paper.paper_url)}">${escapeCell(paper.title)}</a>`
        const links = [
          `[Paper PDF](${paper.paper_url})`,
          `[Note](content/papers/${paper.id}/index.md)`,
        ]
        if (paper.code_url) links.push(`[Code](${paper.code_url})`)
        return `| ${paperTitle} | ${publication(paper)} | ${links.join(' · ')} |`
      })
      return [
        `<details${month === latestMonth ? ' open' : ''}>`,
        `<summary><strong>${month.replace('-', '.')} · ${monthlyPapers.length} ${monthlyPapers.length === 1 ? 'paper' : 'papers'}</strong></summary>`,
        '',
        '| Paper | Publication | Links |',
        '| :--- | :--- | :--- |',
        ...rows,
        '',
        '</details>',
      ].join('\n')
    })
    return `### ${year}\n\n${months.join('\n\n')}`
  })
  return [yearLinks, 'Open a month to browse. The latest month is expanded.', ...sections].join('\n\n')
}

export function updateReadme(readme, papers) {
  const start = readme.indexOf(startMarker)
  const end = readme.indexOf(endMarker)
  if (start < 0 || end < start || readme.split(startMarker).length !== 2 || readme.split(endMarker).length !== 2) {
    throw new Error('README paper-table markers are missing, duplicated or out of order')
  }
  return `${readme.slice(0, start)}${startMarker}\n${renderPaperDirectory(papers)}\n${endMarker}${readme.slice(end + endMarker.length)}`
}
