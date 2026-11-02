---
id: specevo
short_title: "SpecEvo"
title: "SpecEvo: Speculative Evolution with Large Language Models for Cost-Efficient Scientific Discovery"
authors:
  - "Ha Minh Hieu"
  - "Tongyao Zhu"
  - "Do Xuan Long"
  - "Min-Yen Kan"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.28706
code_url: https://github.com/langkhachhoha/SpecEvo
institutions:
  - hanoi-university-science-technology
  - nus
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - "Scientific discovery"
  - "Combinatorial optimization"
  - "Symbolic regression"
  - "Systems optimization"
featured: false
summary: "SpecEvo combines continuous cheap-model program search with rolling evidence consolidation and sparse frontier-model interventions whose scope follows search stagnation."
---

## Why it matters

Uniformly using a powerful model is costly, but cheap mutations can repeat failures or exhaust one strategy. The paper coordinates model roles using the evolving search trajectory.

## Core method

Frontier-generated seeds are diversified by cheap models and stored in a bounded niche archive described by AST statistics and strategy-description embeddings. Cheap asynchronous Speculators mutate or cross over parents; stagnation flattens rank-based sampling to expose more archive regions. At checkpoints a frontier Navigator synthesizes complementary mechanisms, performs targeted repair, or reframes the strategy according to stagnation. Each valid intervention seeds cheap local variants. A cheap Advisor periodically consolidates successful, failed, and saturated attempts into a short guidance note. That note is injected probabilistically to avoid forcing all workers toward one interpretation. Every candidate still passes an executable evaluator.

## Contributions

- Coordinates generation, strategic intervention, and evidence consolidation at different costs and cadences.
- Tests 176 tasks spanning mathematics, systems, combinatorial optimization, and equation discovery under complementary wall-clock, API-cost, and evaluation budgets.

## Strengths and limitations

The reported savings concern API expenditure, not total compute. Four-worker parallelism affects wall-clock comparisons, and the evaluators are mostly lightweight CPU tasks. Archive descriptors depend partly on generated descriptions whose fidelity is not systematically tested; misleading descriptions can distort niches and strategic context.

## What to improve

Include accelerator and evaluation costs, adapt intervention frequency to evaluator expense, and validate semantic descriptions against code or execution behavior.

## Connections

[RelayEvolve](../relayevolve/index.md) makes a one-time handoff from cheap exploration to strong refinement. SpecEvo keeps cheap exploration active and repeatedly coordinates frontier interventions and guidance using trajectory evidence.
