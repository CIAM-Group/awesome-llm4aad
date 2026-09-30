---
id: relayevolve
short_title: RelayEvolve
title: "Relay, Don't Route: Adaptive Population Handoff for Cost-Efficient LLM-Driven Evolution"
authors:
  - Sichun Luo
  - Yi Huang
  - Guanzhi Deng
  - Haibo Wang
  - Haochen Luo
  - Lei Li
  - Zefa Hu
  - Junlan Feng
  - Qi Liu
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.05651
institutions:
  - hku
  - china-mobile-jiutian
  - cityu-hk
  - carnegie-mellon
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Program Discovery
  - Geometric Optimization
  - Transaction Scheduling
  - Systems Optimization
featured: false
summary: Uses cheap-model search to build a quality-diverse seed bank, then hands one curated population to a stronger model for refinement.
---

## Why it matters

Model calls modify a shared search state, so selecting the cheapest model independently for each call can ignore the value of the population being built.

## Core method

A cheap model explores several trajectories in short blocks. A Grow–Deepen bandit decides whether to start a new trajectory or extend an existing one, using the marginal improvement of a bounded relay bank as reward. The bank objective combines strong candidates with embedding-based coverage of promising regions.

Persistently low relative relay gain, or the cheap-stage budget, triggers handoff. The complete cheap-stage candidate pool is curated again using greedy selection and local swaps. The selected seeds initialize one shared strong-model population, not independent strong-model runs. All phases count against inference spending and a generation cap; the remaining budget funds refinement.


## Contributions

Coordinates trajectory allocation, stopping, and seed transfer through one population-level objective.

## Strengths and limitations

Matched-backend experiments on four tasks distinguish the handoff policy from mutation machinery. The submodular guarantee concerns selecting a seed set for a fixed surrogate objective, not the final program quality; results depend on model prices and evaluator costs.

## What to improve

Test more model pairs and include expensive evaluator time in the budget. Audit whether embedding diversity predicts useful downstream complementary mutations.

## Connections

[ShinkaEvolve](../shinkaevolve/index.md) is the shared evolutionary backend used in the experiments. RelayEvolve adds population-level cheap-to-strong search scheduling rather than replacing the underlying program evaluator.
