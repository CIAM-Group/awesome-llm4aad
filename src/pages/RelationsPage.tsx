import { GitBranch, MousePointer2, X } from 'lucide-react'
import { useMemo, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FilterBar } from '../components/FilterBar'
import { RelationGraph } from '../components/RelationGraph'
import { atlas, getPaper } from '../lib/data'
import { relationVisuals } from '../lib/relationStyles'

function RelationLineSample({ type }: { type: string }) {
  const visual = relationVisuals[type]
  const dash = visual?.dash.join(' ')
  return (
    <svg className="relation-legend__sample" viewBox="0 0 44 12" aria-hidden="true" focusable="false">
      <path
        d="M 1 6 C 13 2, 31 10, 43 6"
        fill="none"
        stroke={visual?.color ?? '#5a7770'}
        strokeWidth={visual?.width ?? 1.6}
        strokeDasharray={dash || undefined}
        strokeLinecap="round"
      />
    </svg>
  )
}

export function RelationsPage() {
  const [query, setQuery] = useState('')
  const [dimension, setDimension] = useState('all')
  const [relationType, setRelationType] = useState('all')
  const [selectedPaperId, setSelectedPaperId] = useState('')

  const filteredRelations = useMemo(() => atlas.relations.filter((relation) => {
    const matchesDimension = dimension === 'all' || relation.dimension === dimension
    const matchesType = relationType === 'all' || relation.type === relationType
    const searchable = [relation.description, getPaper(relation.from)?.title, getPaper(relation.to)?.title].join(' ').toLowerCase()
    return matchesDimension && matchesType && (!query.trim() || searchable.includes(query.trim().toLowerCase()))
  }), [dimension, query, relationType])

  const filterPaperIds = useMemo(() => new Set(filteredRelations.flatMap((relation) => [relation.from, relation.to])), [filteredRelations])
  const focusPapers = useMemo(() => atlas.papers.filter((paper) => filterPaperIds.has(paper.id)), [filterPaperIds])
  const effectiveSelectedPaperId = filterPaperIds.has(selectedPaperId) ? selectedPaperId : ''
  const graphRelations = useMemo(() => effectiveSelectedPaperId
    ? filteredRelations.filter((relation) => relation.from === effectiveSelectedPaperId || relation.to === effectiveSelectedPaperId)
    : filteredRelations, [effectiveSelectedPaperId, filteredRelations])
  const visiblePaperIds = useMemo(() => new Set(graphRelations.flatMap((relation) => [relation.from, relation.to])), [graphRelations])
  const visiblePapers = useMemo(() => atlas.papers.filter((paper) => visiblePaperIds.has(paper.id)), [visiblePaperIds])
  const selectedPaper = getPaper(effectiveSelectedPaperId)

  const dimensionOptions = [{ value: 'all', label: 'All dimensions' }, ...Object.entries(atlas.taxonomy.dimensions).map(([value, item]) => ({ value, label: item.label }))]
  const typeOptions = [{ value: 'all', label: 'All relation types' }, ...Object.entries(atlas.taxonomy.relation_types).map(([value, item]) => ({ value, label: item.label }))]

  return (
    <div className="relations-page page-shell">
      <header className="page-heading">
        <p className="eyebrow">Curated connections</p>
        <h1>Research relations</h1>
        <p>Explore curated links between methods and research ideas.</p>
      </header>

      <FilterBar
        query={query}
        onQueryChange={setQuery}
        placeholder="Search relation descriptions…"
        firstLabel="Dimension"
        firstValue={dimension}
        firstOptions={dimensionOptions}
        onFirstChange={setDimension}
        secondLabel="Type"
        secondValue={relationType}
        secondOptions={typeOptions}
        onSecondChange={setRelationType}
        resultCount={filteredRelations.length}
      />

      {filteredRelations.length > 0 ? (
        <>
          <div className="graph-toolbar">
            <label>
              <MousePointer2 size={15} aria-hidden="true" />
              <span>Focus paper</span>
              <select value={effectiveSelectedPaperId} onChange={(event) => setSelectedPaperId(event.target.value)}>
                <option value="">Choose a paper</option>
                {focusPapers.map((paper) => <option value={paper.id} key={paper.id}>{paper.short_title} — {paper.title}</option>)}
              </select>
            </label>
            {selectedPaper && (
              <div className="graph-toolbar__focus-actions">
                <span>{graphRelations.length} direct relation{graphRelations.length === 1 ? '' : 's'}</span>
                <Link to={`/papers/${selectedPaper.id}`}>Read {selectedPaper.short_title}</Link>
                <button type="button" onClick={() => setSelectedPaperId('')} aria-label="Clear paper focus" title="Clear paper focus">
                  <X size={15} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
          <RelationGraph papers={visiblePapers} relations={graphRelations} selectedPaperId={effectiveSelectedPaperId} />
          <div className="relation-legend" aria-label="Relation line legend">
            {Object.entries(atlas.taxonomy.relation_types).map(([type, relationType]) => (
              <span key={type}>
                <RelationLineSample type={type} />
                {relationType.label}
              </span>
            ))}
          </div>
          <section className="relation-register" aria-labelledby="relation-register-title">
            <h2 id="relation-register-title"><GitBranch size={19} aria-hidden="true" />Relation register</h2>
            {graphRelations.map((relation, index) => {
              const from = getPaper(relation.from)
              const to = getPaper(relation.to)
              return (
                <article key={`${relation.from}-${relation.to}-${index}`}>
                  <span className={`relation-register__type relation-type--${relation.type}`} style={{ '--relation-color': relationVisuals[relation.type]?.color } as CSSProperties}>{atlas.taxonomy.relation_types[relation.type]?.label}</span>
                  <h3><Link to={`/papers/${relation.from}`}>{from?.short_title}</Link><span aria-hidden="true"> · </span><Link to={`/papers/${relation.to}`}>{to?.short_title}</Link></h3>
                  <p>{relation.description}</p>
                </article>
              )
            })}
          </section>
        </>
      ) : (
        <div className="empty-state"><strong>No relations match this view.</strong><p>Try a broader relation type or research dimension.</p></div>
      )}
    </div>
  )
}
