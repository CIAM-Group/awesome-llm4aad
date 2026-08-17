---
id: beam
short_title: "BEAM"
title: "BEAM: Bi-level Memory-adaptive Algorithmic Evolution for LLM-Powered Heuristic Design"
authors:
  - "Chuyang Xiang"
  - "Yichen Wei"
  - "Jiale Ma"
  - "Handing Wang"
  - "Junchi Yan"
year: 2026
date: 2026-04-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2604.12898
institutions:
  - affiliation-pending
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "BEAM combines high-level algorithm modeling with lower-level code evolution through an adaptive two-level memory."
---

## Why it matters

BEAM combines high-level algorithm modeling with lower-level code evolution through an adaptive two-level memory.

## Core method

The outer level maintains algorithmic plans and reusable knowledge, while the inner level refines executable implementations. Memory adaptation links evidence from evaluated programs back to later modeling decisions.

## Contributions

- Introduces the design described above for Combinatorial Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
