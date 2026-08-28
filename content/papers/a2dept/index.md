---
id: a2dept
short_title: A2DEPT
title: 'A2DEPT: Large Language Model–Driven Automated Algorithm Design via Evolutionary Program Trees'
authors:
  - Bin Chen
  - Shouliang Zhu
  - Beidan Liu
  - Yong Zhao
  - Tianle Pu
  - Huichun Li
  - Zhengqiu Zhu
year: 2026
date: 2026-04-27
venue: arXiv
paper_url: https://arxiv.org/pdf/2604.24043
institutions:
  - uestc
  - nudt
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
  - Job Shop Scheduling Problem
  - Knapsack Problem
  - Online Bin Packing
  - Orienteering Problem
featured: false
summary: A2DEPT treats LLMs as system-level algorithm architects, evolving complete solver programs over a tree-structured program space with a feedback-driven maintenance loop for executability.
---

## Why it matters

Most LLM-based Automated Heuristic Design (AHD) fixes an algorithmic template and only tunes a small set of heuristic components, which hides a costly design decision—the solver backbone—and caps performance even when the heuristic component is well optimized. A2DEPT argues that this template-bound bottleneck motivates a transition from component tuning to open-ended Automated Algorithm Design (AAD), where the search target expands from a scoring heuristic to a complete executable solver.

## Core method

A2DEPT casts AAD as an evolutionary search over a discrete program space. Rather than a population, it maintains a global search tree of executable programs, where each node stores the program, its score, parent/operator history, and local operator weights. The loop has two phases: an LLM-based initialization seeds diverse root programs, then an iterative loop selects parent nodes, applies adaptively scheduled hierarchical operators, repairs broken dependencies, evaluates feasible programs, and writes scores back into the tree.

Three mechanisms make long-horizon open-ended evolution practical:

- **Hybrid selection** combines SA-style parent–child acceptance with Boltzmann supplementary sampling to preserve diverse trajectories under a fixed budget.
- **Hierarchical operators** (micro-tuning, macro-mutation, semantic crossover) with adaptive scheduling enable localized edits and better credit assignment.
- **Program-maintenance loop** repairs missing dependencies via a dependency graph and prunes unreachable code to enforce executability.

## Contributions

- Problem framing: AAD as program-space search over complete executable solvers, beyond template-bound AHD.
- The A2DEPT framework with tree-structured evolutionary search, hybrid selection, and hierarchical operators.
- Concrete mechanisms for reliable long-horizon evolution (repair loop, hybrid selection, hierarchical operators).
- Empirical validation on a diverse suite of NP-hard COP benchmarks (standard and high-constraint), reducing the mean normalized optimality gap by 9.8% relative to the strongest competing AHD baseline.

## Strengths and limitations

A2DEPT enables system-level redesign rather than component-level tuning and enforces executability through feedback-driven repair, preserving search diversity via the tree and hybrid acceptance. Its limitations are that the repair loop consumes part of the LLM budget, and gains are problem-dependent—the paper notes that on Flexible Job Shop Scheduling an expert-designed Guided Local Search still outperforms all AAD methods, suggesting the advantage is contingent on the absence of strong domain-specific structures.

## What to improve

Future work should equalize token/query budgets against baselines, scale the population and add domain-specific operators, and broaden the benchmark coverage beyond the studied COP families.

## Connections

A2DEPT builds on FunSearch, EoH, ReEvo, and MCTS-AHD, which it characterizes as template-bound component synthesis, and is developed concurrently with ATLAS on the move toward full-algorithm synthesis.
