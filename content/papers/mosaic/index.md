---
id: mosaic
short_title: MOSAIC
title: "MOSAIC: Adversarial Co-evolution of Specialist Heuristics and Problem Instances for LLM-based Automated Heuristic Design"
authors:
  - Oguzhan Gungordu
  - Siheng Xiong
  - Faramarz Fekri
year: 2026
date: 2026-07-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.07544
institutions:
  - gatech
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - scope
problems:
  - Traveling Salesman Problem
  - Knapsack Problem
  - Capacitated Vehicle Routing Problem
  - Algorithm Portfolios
featured: false
summary: Co-evolves discriminative problem instances and region-specialist heuristics in a structural-feature quality-diversity archive.
---

## Why it matters

Scalar better/worse feedback hides where a heuristic wins and can discard specialists that are valuable only on particular instance structures.

## Core method

Archive cells store a specialist, representative instances, and persistent insights. For heuristics from distant regions, an LLM writes a generate-and-transform operator; an inner evolutionary loop searches for instances that favor each parent over the other. A shallow decision tree explains the winner regions and helps validate where instances and insights enter the grid.

Reflection produces two specialization directions and one hybridization direction. Crossover and region-aware mutation use these insights, with offspring competing locally rather than against an average over unrelated regions. Insight memory survives replacement of a cell's specialist. After search, greedy selection extracts a compact complementary test-time portfolio.


## Contributions

Grounds reflective guidance in discriminative instances and preserves region-specific knowledge through a quality-diversity archive.

## Strengths and limitations

Experiments vary instance structure and size across constructive routing and packing tasks. Handcrafted structural features define the archive; finite adversarial search cannot prove global dominance, and generating instances has nontrivial cost.

## What to improve

Measure robustness to feature choices and adversarial-search failures, and account for portfolio deployment and instance-evolution costs alongside generated-heuristic counts.

## Connections

[ReEvo](../reevo/index.md) supplies the broader reflective-search idea; MOSAIC contrasts with scalar pairwise reflection by conditioning advice on discriminative instance regions. [DyCA](../dyca/index.md) learns regions from algorithm responses instead of a predefined structural grid.
