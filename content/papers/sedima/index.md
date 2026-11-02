---
id: sedima
short_title: "SEDIMA"
title: "SEDIMA: Cross-Run Hierarchical Insight Memory for Evolutionary Search Agents"
authors:
  - "Amirhossein Abaskohi"
  - "Mahdi Mostajabdaveh"
  - "Zirui Zhou"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.02361
code_url: https://github.com/AmirAbaskohi/SEDIMA
institutions:
  - university-british-columbia
  - huawei-canada
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Cross-run memory"
  - "Program optimization"
  - "Heuristic programming"
featured: false
summary: "Distills evaluated mutation traces into hierarchically clustered insights and retrieves evidence-linked advice across runs without changing search operators."
---

## Why it matters

Repeated searches can rediscover both useful edits and known failures. SEDIMA tests a small external memory interface that preserves transferable lessons while retaining the host's population and mutation machinery.

## Core method

A write hook after evaluation records the parent/child scores, delta, event source, and raw report. An LLM distills each event into an insight linked to that trace, describing either the initial bottleneck or a change and its observed effect. Embedded insights join similarity-based clusters whose non-parametric attention-weighted centroids emphasize semantically prototypical members. Before mutation, a query about the current program retrieves relevant clusters and then insights, optionally including linked traces. A synthesizer converts the bounded evidence into three recommendations inserted into the host prompt. If nothing passes the relevance threshold, the original prompt is used. The store persists across runs; warm-start evaluation memory is populated from disjoint problems, and the same two hooks support OpenEvolve and ShinkaEvolve.

## Contributions

- Separates raw evidence, distilled lessons, and cluster-level retrieval in a persistent memory hierarchy.
- Tests two search harnesses and five backbones using private benchmark evaluations.
- Distinguishes cold online memory from same-benchmark and cross-benchmark warm starts.

## Strengths and limitations

Main-table cells are single runs, although transfer and ablation analyses use three seeds. Matching 100 evaluated candidates excludes additional distillation, embeddings, and synthesis calls, so fewer iterations are not equivalent to lower total cost. Memory grows without consolidation or forgetting; erroneous insights can persist and propagate. The experiments do not directly compare alternative memory-based evolution systems.

## What to improve

Measure amortized costs over repeated searches, benchmark against other persistent memories, and add evidence-sensitive correction, consolidation, and forgetting.

## Connections

[EvoMem](../evomem/index.md) consolidates promising mutation events after a run with exemplars and provenance. SEDIMA writes evidence-linked insights after each evaluation and retrieves synthesized advice through a persistent semantic hierarchy across disjoint problems.

SEDIMA augments [ShinkaEvolve](../shinkaevolve/index.md) with persistent cross-run insight memory through a write after evaluation and a read before mutation. The integrated version keeps the underlying selection, population and mutation logic unchanged.
