---
id: cogmcts
short_title: CogMCTS
title: 'CogMCTS: A Novel Cognitive-Guided Monte Carlo Tree Search Framework for Iterative Heuristic Evolution with Large Language Models'
authors:
  - Hui Wang
  - Yang Liu
  - Xiaoyu Zhang
  - Chaoxu Mu
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
problems:
  - Orienteering Problem
  - Capacitated Vehicle Routing Problem
  - Multiple Knapsack Problem
  - Traveling Salesman Problem
  - Knapsack Problem
featured: false
summary: CogMCTS integrates multi-round cognitive feedback, elite-aware candidate context, and dual-track expansion into MCTS for iterative LLM-based heuristic evolution.
---

## Why it matters

Population-based LLM-AHD methods can discard weak heuristics that might produce useful descendants. MCTS preserves the tree, but does not by itself explain how historical experience, failures, and elite candidates should shape expansion. CogMCTS connects cognitive feedback directly to this loop.

## Core method

The framework uses a virtual root; other nodes store executable Python heuristics and descriptions. UCT with exploration decay selects a node, while an elite set supplies additional candidates. Together they form a Cognitive Candidate Set (CCS). Rapid cognition compares this context, and complex cognition combines the result with positive and negative memories, $K^+$ and $K^-$. Subsequent outcomes update these memories.

The selected node is expanded through two tracks: `em1` and `em2` use cognitive guidance for local combination and global-best reinforcement, while `m1` and `m2` perform structural and parameter mutation. Task-specific solvers evaluate the new heuristics, then node statistics and the global best are updated by backpropagation. The framework is tested with ACO, Guided Local Search, and step-by-step construction.

## Contributions

- Multi-round cognitive guidance using node context, historical experience, and negative outcomes.
- CCS and dual-track expansion combining elite-aware exploitation with structural and parameter exploration.
- An implementation across three solver frameworks and five problem settings.

## Strengths and limitations

CogMCTS makes feedback part of tree expansion and separates structural from parameter mutation. However, its three-run averages lack confidence intervals and significance tests; the common budget counts heuristic evaluations, not LLM queries, tokens, API cost, or wall-clock time. Global-best changes are only a proxy for useful experience and may mislabel delayed or noisy effects. Specialized solvers remain stronger in some settings, including DeepACO on parts of OP/CVRP and OR-Tools on KP.

## What to improve

Component ablations should isolate CCS construction, rapid and complex cognition, knowledge validation, elite sampling, and each action. Cost-normalized comparisons could measure quality per token or unit time. A stronger memory controller could attach confidence and delayed credit to $K^+$ and $K^-$, followed by cross-task transfer tests.

## Connections

CogMCTS extends the lineage-preserving MCTS-AHD direction with cognitive guidance and failed-search experience; this is recorded in `data/relations.yml`. It draws on ReEvo's reflection, but places cognition inside expansion and adds elite-aware context. Relative to PoH, it primarily changes feedback context and node expansion rather than action semantics or simulation depth.
