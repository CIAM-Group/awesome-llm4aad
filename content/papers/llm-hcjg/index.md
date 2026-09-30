---
id: llm-hcjg
short_title: LLM-HCJG
title: LLM-Driven Joint Evolution of Coupled Heuristics Components for Routing Optimization
authors:
  - Juntao Wei
  - Yangming Zhou
  - Zhibin Jiang
  - Shan Jiang
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.02353
institutions:
  - sjtu
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
featured: false
summary: Jointly evolves routing initialization and GLS penalty functions under a shared blueprint, evaluating their compatibility as a complete pair.
---

## Why it matters

An initialization rule determines the search states seen by a penalty rule, so independently strong components can be incompatible when combined.

## Core method

Each individual contains a shared design blueprint and two executable functions: solution initialization and edge-distance/penalty construction. Crossover and mutation operate on complete records, producing a child blueprint and both components together. Rank-based selection and population truncation use the pair's measured routing performance.

The generated functions run inside an enhanced GLS scaffold. Influential-edge targeting, local perturbation, further improvement, and periodic restoration of the incumbent are fixed framework mechanisms, not LLM inventions. The paper transfers the coupled interfaces from TSP to CVRP and tests intact versus swapped component pairs. Its blueprint-consistency argument assumes semantic faithfulness; a parser can check fields but cannot prove that assumption.


## Contributions

Makes cross-component compatibility an explicit search object and tests it by replacing individual modules under the same solver scaffold.

## Strengths and limitations

Pair-swapping experiments provide more informative evidence than a single end-to-end ranking. Gains must still be separated from fixed GLS enhancements, and the study covers two related routing problems rather than arbitrary component systems.

## What to improve

Add independently co-evolved components under identical budgets and test whether blueprint consistency can be checked behaviorally rather than only structurally.

## Connections

[EoH](../eoh/index.md) evolves thought/code heuristics. LLM-HCJG broadens the individual to a blueprint plus coupled initialization/penalty functions; the meaningful link is coordinated component design, not simply its baseline comparison.
