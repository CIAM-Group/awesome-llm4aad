---
id: meevo
short_title: "MeEvo"
title: "MeEvo: Metacognitive Evolution Combined with Natural Evolution for Automatic Heuristic Design"
authors:
  - "Zishang Qiu"
  - "Xinan Chen"
  - "Rong Qu"
  - "Ruibin Bai"
year: 2026
date: 2026-06-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2606.14202
institutions:
  - affiliation-pending
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "MeEvo couples population-based program evolution with metacognitive reflection over the reasoning behind candidate heuristics."
---

## Why it matters

MeEvo couples population-based program evolution with metacognitive reflection over the reasoning behind candidate heuristics.

## Core method

Natural evolution explores executable programs and records reasoning, fitness, and errors in shared history. A metacognitive layer reflects on that history and returns improved designs to the evolutionary parent pool.

## Contributions

- Introduces the design described above for Combinatorial Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
