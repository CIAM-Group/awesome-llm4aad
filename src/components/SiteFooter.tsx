import { atlas } from '../lib/data'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p><strong>AHD Papers</strong> · A collection of research on automatic algorithm design.</p>
      <p>{atlas.papers.length} papers · {atlas.relations.length} relations · Apache-2.0</p>
    </footer>
  )
}
