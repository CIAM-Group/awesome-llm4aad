---
id: clade-ahd
short_title: Clade-AHD
title: 'Beyond the Node: Clade-level Selection for MCTS in Automatic Heuristic Design'
authors:
  - Kezhao Lai
  - Yutao Lai
  - Hai-Lin Liu
year: 2026
date: 2026-01-31
venue: arXiv
paper_url: https://arxiv.org/pdf/2602.00549
code_url: https://github.com/Mriya0306/Clade-AHD
institutions:
  - guangdong-university-technology
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Traveling Salesman Problem
  - Knapsack Problem
  - Capacitated Vehicle Routing Problem
  - Multiple Knapsack Problem
  - Online Bin Packing
  - Bin Packing Problem
featured: false
summary: Clade-AHD replaces node-level MCTS estimates with clade-level Bayesian beliefs and Thompson sampling to allocate sparse heuristic-evaluation budgets across evolutionary branches.
---

## Why it matters

LLM-based heuristic design is a sparse-evaluation regime: generating and running each candidate is expensive, so node-level estimates can be unreliable. A mediocre intermediate heuristic may still be a stepping stone to strong descendants. Clade-AHD therefore evaluates an evolutionary branch rather than treating each node as an independent bandit.

## Core method

A clade is a node and all its descendants. Clade-AHD represents its potential with a Beta belief, converts normalized evaluations into success/failure-style evidence, and propagates that evidence upward with depth decay. This aggregates descendant productivity while reducing the influence of remote generations.

Selection stabilizes sparse beliefs with pseudo-evaluations, anneals posterior temperature as the budget is consumed, and samples one value from each eligible child clade. The largest Thompson sample determines the LLM mutation or crossover branch. After evaluation, evidence is updated bottom-up and dynamic freezing stops branches with enough visits but low aggregated potential. Experiments use constructive and ACO frameworks across TSP, KP, CVRP, MKP, and online/offline bin packing with a 1,000-evaluation budget.

## Contributions

- A clade-level Bayesian abstraction that makes an evolutionary lineage the unit of selection.
- Depth-attenuated belief updates and Clade-Level Thompson Sampling for sparse-evaluation exploration.
- Budget-aware annealing and dynamic freezing to reduce evaluations spent on weak branches.

## Strengths and limitations

The method exposes how a noisy node score can hide descendant productivity, and its selector, credit assignment, and freezing rule are modular. The advantage is not universal: construction TSP50 is slightly worse than MCTS-AHD, while some ACO settings favor DeepACO or MCTS-AHD. Depth decay is only a proxy for semantic relatedness, and irreversible freezing may remove delayed-reward stepping stones. Results align heuristic evaluations rather than full generation cost and use limited repeated-run statistics.

## What to improve

Future work should compare equal-cost Bayesian selectors and measure posterior calibration directly. Reversible freezing could protect delayed-reward branches. Depth, code, and behavioral similarity should be compared as credit signals, with tokens, API calls, wall-clock time, and failure costs reported alongside heuristic counts.

## Connections

Clade-AHD extends MCTS-AHD by retaining its heuristic tree and LLM expansion while replacing node-level UCT estimates with clade-level Bayesian beliefs and Thompson sampling; the directed relation is recorded in `data/relations.yml`. Its change is in selection and credit assignment, whereas PoH changes tree-action semantics and CogMCTS changes expansion context. The three methods are complementary directions, not strict successors.
