---
id: prs
short_title: "PRS"
title: "Directing to Diversify: Multi-Directional Search for Automatic Heuristic Design"
authors:
  - "Jianghan Zhu"
  - "Jianan Zhou"
  - "Fei Liu"
  - "Ni Zhang"
  - "Yaoxin Wu"
  - "Zhuoyi Lin"
  - "Zhiguang Cao"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.31048
institutions:
  - smu
  - ntu
  - uzh
  - eth-zurich
  - eindhoven-university-technology
  - astar
primary_dimension: search
dimensions:
  - search
  - design-object
problems:
  - "Combinatorial optimization"
  - "Heuristic design"
featured: false
summary: "PRS separates directional changes to heuristic ideas from code rewriting, using expansion, compression, and steering in a bounded breadth-first search."
---

## Why it matters

Diversity measures applied after generation cannot ensure that new candidates explore different structural regimes. PRS specifies the intended direction of change before producing executable code.

## Core method

A parent consists of an idea and its implementation. An LLM first perturbs the idea by expanding its decision mechanisms, compressing redundant or specialized structure, or steering a small refinement. A separate rewrite step produces multiple executable realizations. The search expands a bounded breadth-first frontier, preserves its best candidate, and samples additional survivors by score. Completed trees replenish a small heuristic pool while retaining its elite. Sliding-window UCB chooses among the three directions from relative parent–offspring improvements. When global progress stalls, the pool resets around its best program and operator statistics are reheated to encourage renewed exploration.

## Contributions

- Makes simpler, richer, and locally refined heuristics explicit generation-level alternatives.
- Evaluates generated components in construction, ant-colony optimization, and guided local search across routing, packing, knapsack, and scheduling tasks.

## Strengths and limitations

Three-run experiments and operator ablations support the combined mechanism, including improved larger-instance performance. However, frontier width, depth, restart thresholds, and exploration schedules remain manually specified. Every proposed idea is implemented and evaluated, so expensive rewrite and testing costs remain even for weak ideas.

## What to improve

Learn the controller settings, test under equal token and execution budgets, and assess whether cheap screening can reject poor ideas without suppressing useful simplifications.

## Connections

[EoH](../eoh/index.md) couples natural-language heuristic ideas with executable code and evolutionary operators. PRS retains an idea/code separation but replaces recombination-centered variation with explicit expansion, compression, and steering, organized by breadth-first search.
