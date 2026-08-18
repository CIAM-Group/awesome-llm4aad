import { useEffect, useMemo, useRef, useState } from 'react'
import ForceGraph2D from 'react-force-graph-2d'
import { useNavigate } from 'react-router-dom'
import { atlas, paperYear } from '../lib/data'
import { relationVisual, type RelationMarker } from '../lib/relationStyles'
import type { Paper, Relation } from '../types'

interface GraphNode {
  id: string
  shortTitle: string
  title: string
  year: number
  x?: number
  y?: number
  degree: number
}

interface GraphLink {
  source: string | GraphNode
  target: string | GraphNode
  type: string
  dimension: string
  description: string
  curvature: number
}

interface ForceGraphHandle {
  zoomToFit: (duration?: number, padding?: number) => void
  d3Force: (name: string) => { strength?: (value: number) => void; distance?: (value: number) => void } | undefined
}

interface RelationGraphProps {
  papers: Paper[]
  relations: Relation[]
  selectedPaperId: string
}

function nodePosition(endpoint: string | GraphNode): GraphNode | undefined {
  return typeof endpoint === 'object' ? endpoint : undefined
}

function drawRelationMarker(
  link: GraphLink,
  context: CanvasRenderingContext2D,
  globalScale: number,
) {
  const source = nodePosition(link.source)
  const target = nodePosition(link.target)
  if (!source || !target || source.x === undefined || source.y === undefined || target.x === undefined || target.y === undefined) return

  const { color, marker } = relationVisual(link.type)
  const x = (source.x + target.x) / 2
  const y = (source.y + target.y) / 2
  const size = 4.5 / globalScale
  const lineWidth = 1.8 / globalScale

  context.save()
  context.translate(x, y)
  context.fillStyle = '#edf1ee'
  context.strokeStyle = color
  context.lineWidth = lineWidth
  context.setLineDash([])

  const pathMarker = (shape: RelationMarker) => {
    context.beginPath()
    if (shape === 'diamond') {
      context.moveTo(0, -size)
      context.lineTo(size, 0)
      context.lineTo(0, size)
      context.lineTo(-size, 0)
      context.closePath()
    } else if (shape === 'square') {
      context.rect(-size * 0.82, -size * 0.82, size * 1.64, size * 1.64)
    } else if (shape === 'triangle') {
      context.moveTo(0, -size)
      context.lineTo(size, size * 0.8)
      context.lineTo(-size, size * 0.8)
      context.closePath()
    } else {
      context.arc(0, 0, size * 0.82, 0, Math.PI * 2)
    }
    context.fill()
    context.stroke()
  }

  if (marker === 'cross') {
    context.fillRect(-size, -size, size * 2, size * 2)
    context.beginPath()
    context.moveTo(-size * 0.78, -size * 0.78)
    context.lineTo(size * 0.78, size * 0.78)
    context.moveTo(size * 0.78, -size * 0.78)
    context.lineTo(-size * 0.78, size * 0.78)
    context.stroke()
  } else if (marker === 'double-ring') {
    pathMarker('circle')
    context.beginPath()
    context.arc(0, 0, size * 0.42, 0, Math.PI * 2)
    context.stroke()
  } else {
    pathMarker(marker)
  }
  context.restore()
}

export function RelationGraph({ papers, relations, selectedPaperId }: RelationGraphProps) {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<ForceGraphHandle>(null)
  const [size, setSize] = useState({ width: 960, height: 760 })

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver(([entry]) => {
      setSize({ width: Math.max(320, entry.contentRect.width), height: Math.max(680, Math.min(820, window.innerHeight - 150)) })
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const graphData = useMemo(() => {
    const degree = new Map(papers.map((paper) => [paper.id, 0]))
    relations.forEach((relation) => {
      degree.set(relation.from, (degree.get(relation.from) ?? 0) + 1)
      degree.set(relation.to, (degree.get(relation.to) ?? 0) + 1)
    })
    const nodes: GraphNode[] = papers.map((paper, index) => {
      const angle = (index / Math.max(papers.length, 1)) * Math.PI * 2 - Math.PI / 2
      const radius = 140 + (index % 3) * 34
      return {
        id: paper.id,
        shortTitle: paper.short_title,
        title: paper.title,
        year: paperYear(paper),
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        degree: degree.get(paper.id) ?? 0,
      }
    })
    const links: GraphLink[] = relations.map((relation, index) => ({
      ...relation,
      source: relation.from,
      target: relation.to,
      curvature: ((index % 5) - 2) * 0.12,
    }))
    return { nodes, links }
  }, [papers, relations])

  useEffect(() => {
    const charge = graphRef.current?.d3Force('charge')
    charge?.strength?.(-360)
    const link = graphRef.current?.d3Force('link')
    link?.distance?.(145)
  }, [graphData])

  return (
    <div className="relation-graph" ref={containerRef} aria-label="Interactive paper relation graph">
      <ForceGraph2D
        ref={graphRef}
        width={size.width}
        height={size.height}
        graphData={graphData}
        backgroundColor="#edf1ee"
        nodeLabel={(node: unknown) => {
          const graphNode = node as GraphNode
          return `${graphNode.shortTitle} — ${graphNode.title}`
        }}
        nodeCanvasObject={(node: unknown, context: CanvasRenderingContext2D, globalScale: number) => {
          const graphNode = node as GraphNode
          const selected = graphNode.id === selectedPaperId
          const radius = selected ? 7 : 5
          context.beginPath()
          context.arc(graphNode.x ?? 0, graphNode.y ?? 0, radius, 0, Math.PI * 2)
          context.fillStyle = selected ? '#b34d38' : '#315f58'
          context.fill()
          context.lineWidth = selected ? 2.5 : 1.2
          context.strokeStyle = selected ? '#111814' : '#edf1ee'
          context.stroke()

          const showLabel = selected || globalScale > 0.78 || (globalScale > 0.52 && graphNode.degree >= 5)
          if (!showLabel) return
          const fontSize = Math.max(9 / globalScale, 2.8)
          context.font = `${selected ? 700 : 600} ${fontSize}px Newsreader, Georgia, serif`
          context.textAlign = 'left'
          context.textBaseline = 'middle'
          const labelX = (graphNode.x ?? 0) + radius + 3 / globalScale
          const labelY = graphNode.y ?? 0
          const labelWidth = context.measureText(graphNode.shortTitle).width
          context.fillStyle = 'rgba(237, 241, 238, 0.92)'
          context.fillRect(labelX - 1 / globalScale, labelY - fontSize * 0.7, labelWidth + 2 / globalScale, fontSize * 1.4)
          context.fillStyle = selected ? '#111814' : '#29342f'
          context.fillText(graphNode.shortTitle, labelX, labelY)
        }}
        nodePointerAreaPaint={(node: unknown, color: string, context: CanvasRenderingContext2D) => {
          const graphNode = node as GraphNode
          context.beginPath()
          context.arc(graphNode.x ?? 0, graphNode.y ?? 0, 10, 0, Math.PI * 2)
          context.fillStyle = color
          context.fill()
        }}
        linkColor={(link: unknown) => relationVisual((link as GraphLink).type).color}
        linkWidth={(link: unknown) => (link as GraphLink).type === 'concurrent-work' ? 2 : 1.8}
        linkCurvature={(link: unknown) => (link as GraphLink).curvature}
        linkDirectionalArrowLength={0}
        linkLineDash={(link: unknown) => relationVisual((link as GraphLink).type).dash}
        linkCanvasObjectMode={() => 'after'}
        linkCanvasObject={(link: unknown, context: CanvasRenderingContext2D, globalScale: number) => {
          drawRelationMarker(link as GraphLink, context, globalScale)
        }}
        linkLabel={(link: unknown) => {
          const graphLink = link as GraphLink
          return `${atlas.taxonomy.relation_types[graphLink.type]?.label}: ${graphLink.description}`
        }}
        cooldownTicks={180}
        d3AlphaDecay={0.06}
        d3VelocityDecay={0.4}
        onEngineStop={() => graphRef.current?.zoomToFit(800, 110)}
        onNodeClick={(node: unknown) => navigate(`/papers/${(node as GraphNode).id}`)}
      />
      <p className="relation-graph__instruction">Drag nodes · scroll to zoom · click to read</p>
    </div>
  )
}
