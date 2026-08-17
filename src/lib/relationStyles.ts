export type RelationMarker = 'diamond' | 'square' | 'circle' | 'cross' | 'triangle' | 'double-ring'

export interface RelationVisual {
  color: string
  dash: number[]
  marker: RelationMarker
}

export const relationVisuals: Record<string, RelationVisual> = {
  extends: { color: '#2f6f5e', dash: [], marker: 'diamond' },
  generalizes: { color: '#8a6424', dash: [], marker: 'square' },
  adapts: { color: '#416b8a', dash: [7, 4], marker: 'circle' },
  contrasts: { color: '#a34d3d', dash: [9, 3, 2, 3], marker: 'cross' },
  'evaluated-by': { color: '#705a83', dash: [2, 4], marker: 'triangle' },
  'concurrent-work': { color: '#66716c', dash: [5, 5], marker: 'double-ring' },
}

export const defaultRelationVisual: RelationVisual = { color: '#64736b', dash: [], marker: 'circle' }

export function relationVisual(type: string): RelationVisual {
  return relationVisuals[type] ?? defaultRelationVisual
}
