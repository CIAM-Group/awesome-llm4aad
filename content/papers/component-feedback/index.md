---
id: component-feedback
short_title: Component Feedback
title: "Component-Aware Feedback for Self-Evolving Programs"
authors:
  - "Ethan Lin"
  - "Jinming Nian"
  - "Yi Fang"
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.38639
institutions:
  - santa-clara-university
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - Retrieval Pipeline Design
  - LLM Reranking
  - Signal Processing
featured: false
summary: "Records changed functions and constants alongside metric differences, exposing parent-relative and seed-relative feedback to program mutations."
---

## Why it matters

A full program and scalar score make the mutator reconstruct what changed and which metrics moved. Multi-stage retrieval pipelines also hide quality–cost trade-offs behind one aggregate score.

## Core method

After each evaluation, an observe step compares named functions and module-level constants between parent and child. It stores the changed-component set with the complete evaluator-metric difference vector. This is association with an edit set, not isolated causal credit for each component.

Local records compare parent and child and supply the ten latest edits to mutation prompts. Global records compare lineages with the original seed and are constructed for stagnation-driven strategy proposals. Memories are maintained per database and merged during migration. The study inserts this feedback into AdaEvolve without changing its controller and evolves complete retrieval/reranking code under quality-only or quality–token objectives.

## Contributions

- Builds feedback directly from code differences and existing measurements, without LLM-written edit summaries or extra evaluations.
- Separates decomposed metrics from attribution in ablations on the BRIGHT benchmark.

## Strengths and limitations

Twelve datasets, three runs, and held-out queries support the retrieval study. Quality-only improvement increases token use; lower cost requires an explicit cost-aware objective. Gains are not uniform across datasets, token count is not latency, and multi-component edits remain confounded. Circle-packing gains are negligible.

## What to improve

Use controlled component interventions to test attribution, and measure actual serving latency alongside token counts.

## Connections

[ReEvo](../reevo/index.md) asks an LLM to reflect on candidate differences; this method exposes mechanically extracted edit sets and metric deltas. [ConflictGuide](../conflictguide/index.md) addresses feedback from another direction by designing and qualifying probes of competing behaviors.
