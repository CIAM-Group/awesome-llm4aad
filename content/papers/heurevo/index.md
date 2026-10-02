---
id: heurevo
short_title: HeurEvo
title: "HeurEvo: Agentic Evolution of Hybrid Solver-Augmented Heuristics for Time-Critical Mathematical Optimization"
authors:
  - Feijie Wu
  - Hugo Barbalho
  - Konstantina Mellou
  - Marco Molinaro
  - Jing Gao
  - Ishai Menache
  - Xinzhi Zhang
  - Sirui Li
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.36303
institutions:
  - purdue
  - microsoft
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Mixed-Integer Linear Programming
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
  - Scheduling
  - Geometric Packing
featured: false
summary: Co-evolves hybrid solver plans, executable implementations, and a shared component library to allocate a strict per-instance runtime budget.
---

## Why it matters

Under a short deadline, a solver call is only one possible stage of a useful algorithm. Choosing when to construct, repair, invoke a mathematical solver, and stop can matter as much as improving any individual heuristic.

## Core method

A plan specifies ordered components, subgoals, and runtime allocation. Each island holds one plan and several implementations; all islands share a reusable component library and program archive. A coder refines implementation details without changing the plan's ordered structure. An interpreter compares parent and child using feasibility, objective quality, runtime, and step-level traces.

A UCB controller selects islands. When code-level progress stalls, a planner can replace or reorder stages and start a new active code population; old programs remain available as inspiration. Separately, a component evolver revises, adds, or removes reusable building blocks using evidence accumulated across islands. Library updates do not silently rewrite current plans.

Experiments use 200 generated programs and two minutes per instance, covering eleven synthetic tasks, six MIPLIB-derived problems, and nonlinear geometry. The reported geometry records additionally use subsequent AdaEvolve refinement, not HeurEvo alone.

## Contributions

- Makes algorithm composition and runtime allocation explicit evolutionary objects.
- Separates local code improvement, stalled-plan revision, and cross-island component learning.

## Strengths and limitations

Synthetic experiments include held-out instances and strong performance relative to long-running Gurobi incumbents. Those incumbents are not proven optima. MIPLIB results are training-only, and geometric search is instance-specific; neither demonstrates the same generalization as the synthetic tests. Discovery cost must also be separated from the two-minute deployment budget.

## What to improve

Evaluate unseen MIPLIB instances and report amortized discovery cost. Isolate how much benefit comes from time allocation, component evolution, and the external solver itself.

## Connections

[ATLAS](../atlas/index.md) permits whole-program evolution. HeurEvo explicitly separates composition plans and reusable components from implementation, exposing a structured-versus-implicit search-space trade-off discussed in its related work.
