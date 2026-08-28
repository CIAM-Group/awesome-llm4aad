---
id: cogmcts
short_title: "CogMCTS"
title: "CogMCTS: A Novel Cognitive-Guided Monte Carlo Tree Search Framework for Iterative Heuristic Evolution with Large Language Models"
authors:
  - "Hui Wang"
  - "Yang Liu"
  - "Xiaoyu Zhang"
  - "Chaoxu Mu"
year: 2025
date: 2025-12-09
venue: arXiv
paper_url: https://arxiv.org/pdf/2512.08609
institutions:
  - anhui-university
  - pengcheng-lab
primary_dimension: search
dimensions:
  - search
  - feedback
  - design-object
problems:
  - "Combinatorial Optimization"
featured: false
summary: "CogMCTS combines LLM cognitive feedback, dual-track node expansion, and elite management for iterative heuristic evolution."
---

## Why it matters

Population search can converge early, while plain MCTS often ignores accumulated reasoning. CogMCTS uses historical experience and negative outcomes as explicit guidance for tree expansion.

## Core method

The framework performs multi-round cognitive feedback over node histories, failed attempts, and elite heuristics. Dual-track expansion balances exploratory proposals with exploitation of promising branches.

## Contributions

- Cognitive feedback integrated directly into MCTS.
- Dual-track expansion for exploration and exploitation.
- Explicit management of elite heuristic lineages.

## Limitations and extensions

Repeated cognitive calls increase cost and may amplify correlated errors. A budget-aware controller should decide when another reflection is more valuable than another rollout.
