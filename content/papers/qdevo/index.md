---
id: qdevo
short_title: QDEvo
title: "QDEvo: A Multi-Objective Quality-Diversity Framework for Automated Heuristic Design"
authors:
  - Nam Do Khanh
  - Nhat Nguyen Tran Minh
  - Dat Pham Vu Tuan
  - Long Doan
  - Binh Huynh Thi Thanh
year: 2026
date: 2026-07-01
venue: GECCO Companion
paper_url: https://arxiv.org/pdf/2607.11916
code_url: https://github.com/datphamvn/QDEvo
institutions:
  - hanoi-university-science-technology
  - george-mason
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Multi-Objective Heuristic Design
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
  - Online Bin Packing
  - Airline Crew Pairing
featured: false
summary: Maintains semantically distinct heuristic niches, using local Pareto competition and hierarchical reflective feedback to preserve quality/runtime alternatives.
---

## Why it matters

A globally competitive population can converge to nearly identical code even when its objective values still cover a trade-off front.

## Core method

Individuals contain a thought/code pair, a code embedding, and quality/runtime scores. LLM crossover and mutation use three feedback layers: immediate comparisons, multi-generation guidance, and error-derived repair/avoidance rules. One mutation mode specifically targets runtime through implementation changes such as caching or vectorization.

Code is canonicalized and embedded. A new individual joins a semantic cluster only when its similarity exceeds the threshold for every member; otherwise it starts a new cluster. Pareto competition occurs within clusters, preserving different niches rather than globally deleting every dominated-but-distinct program. The archive can grow as new niches appear. Evaluation includes quality/runtime formulations and multi-objective combinatorial tasks.


## Contributions

Separates diversity in program space from diversity along an objective front, with reflection feeding both successful mechanisms and failure lessons into variation.

## Strengths and limitations

Embedding-versus-structural-descriptor ablations probe the niche mechanism. Embedding similarity does not prove behavioral similarity, unbounded archives can become costly, and runtime objectives require stable measurement conditions.

## What to improve

Audit clustering errors, vary similarity thresholds, and report archive growth, timing noise, and total cost alongside hypervolume and IGD.

## Connections

[ReEvo](../reevo/index.md) motivates verbal reflective guidance, which QDEvo explicitly expands into immediate, accumulated, and error-focused memory. [MOSAIC](../mosaic/index.md) instead indexes diversity by instance regions, contrasting two meanings of a specialist niche.
