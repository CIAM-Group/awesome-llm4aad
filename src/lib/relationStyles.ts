export interface RelationVisual {
  color: string
  dash: number[]
  curvature: number
  width: number
}

export const relationVisuals: Record<string, RelationVisual> = {
  extends: { color: '#0b8f68', dash: [], curvature: 0.1, width: 1.8 },
  generalizes: { color: '#d18417', dash: [], curvature: -0.1, width: 1.8 },
  adapts: { color: '#247db3', dash: [8, 5], curvature: 0.12, width: 1.7 },
  contrasts: { color: '#cf4b3d', dash: [10, 4, 2, 4], curvature: -0.12, width: 1.7 },
  'concurrent-work': { color: '#5a7770', dash: [6, 5], curvature: 0.08, width: 1.6 },
  contextualizes: { color: '#7b8790', dash: [3, 6], curvature: -0.08, width: 1.5 },
}

export const defaultRelationVisual: RelationVisual = { color: '#5a7770', dash: [], curvature: 0.08, width: 1.6 }

export function relationVisual(type: string): RelationVisual {
  return relationVisuals[type] ?? defaultRelationVisual
}
