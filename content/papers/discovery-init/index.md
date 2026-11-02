---
id: discovery-init
short_title: Discovery Init.
title: "Initialization Improves LLM-Driven Discovery"
authors:
  - "Mansi Sakarvadia"
  - "Marco Ciccone"
  - "Colin Raffel"
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.00707
code_url: https://github.com/msakarvadia/llm_optimizer
institutions:
  - university-chicago
  - vector-institute
  - university-toronto
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Program Optimization
  - Cloud Scheduling
  - Circle Packing
  - Traveling Salesman Problem
featured: false
summary: "Allocates part of the discovery budget to independent proposals, then warm-starts sequential refinement with strong, lightly deduplicated candidates."
---

## Why it matters

A diversity mechanism cannot reliably rescue a search that starts in an unproductive region. This study separates the quality of initial candidates from how a harness manages later exploration.

## Core method

The authors construct twelve OPRO-derived harnesses by crossing four mutation strategies with three parent-selection strategies. They compare sequential refinement with independent proposals under matched token budgets and measure code/text embedding diversity along trajectories.

The intervention first spends part of the same budget generating independent mutations of the initial seed. It greedily selects high-performing candidates with a near-duplicate filter, then starts sequential search. Modular harnesses receive a population; the tested existing harnesses receive the best seed. A convergence analysis of parallel proposals suggests when to switch phases, rather than treating initialization as free extra compute.

## Contributions

- Separates initialization, population diversity, and sequential search in a controlled harness family.
- Tests the warm-start intervention across five tasks and existing discovery systems.

## Strengths and limitations

Initialization improves the reported settings, whereas stronger diversity filtering sometimes hurts. Early-score correlations vary considerably by task; they are not a universal predictor. The convergence criterion is analyzed on ordered parallel samples, so prospective online stopping deserves separate validation. The task collection also includes prompt optimization and fixed-instance TSP, not only transferable algorithm synthesis.

## What to improve

Test prospectively fixed stopping rules, behavioral rather than embedding diversity, and amortized wall-clock/evaluator cost.

## Connections

The paper directly warm-starts [ShinkaEvolve](../shinkaevolve/index.md) while retaining its search machinery. [HoliDivEvolve](../holidivevolve/index.md) instead prioritizes separated island seeds and continuing migration. Their differing initialization objectives reveal a quality–diversity trade-off, not an established inheritance relationship.
