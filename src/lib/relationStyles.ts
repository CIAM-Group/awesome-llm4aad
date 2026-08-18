export type RelationMarker = 'diamond' | 'square' | 'circle' | 'cross' | 'triangle' | 'double-ring'

export interface RelationVisual {
  color: string
  dash: number[]
  marker: RelationMarker
}

export const relationVisuals: Record<string, RelationVisual> = {
  extends: { color: '#16815f', dash: [], marker: 'diamond' },
  generalizes: { color: '#bd7a13', dash: [], marker: 'square' },
  adapts: { color: '#2677a8', dash: [7, 4], marker: 'circle' },
  contrasts: { color: '#c64f3b', dash: [9, 3, 2, 3], marker: 'cross' },
  'concurrent-work': { color: '#526e67', dash: [5, 5], marker: 'double-ring' },
}

export const defaultRelationVisual: RelationVisual = { color: '#526e67', dash: [], marker: 'circle' }

export function relationVisual(type: string): RelationVisual {
  return relationVisuals[type] ?? defaultRelationVisual
}
