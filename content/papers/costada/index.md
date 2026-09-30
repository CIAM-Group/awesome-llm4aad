---
id: costada
short_title: CostAda
title: Budget-Aware LLM Discovery via Cost-Calibrated Frontier Utility
authors:
  - Yansen Zhang
  - Yilu Liu
  - Tianyu Liu
  - Jiamin Chen
  - Xiaokun Zhang
  - Kai Xie
  - Qingfu Zhang
  - Xue Liu
  - Yiyan Qi
  - Chen Ma
year: 2026
date: 2026-07-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2607.26828
institutions:
  - idea
  - cityu-hk
  - mbzuai
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Budgeted Program Discovery
  - Geometric Optimization
  - Systems Optimization
featured: false
summary: Allocates program-search effort using measured gain, realized model cost, and remaining budget rather than score improvement alone.
---

## Why it matters

Equal numbers of search steps can consume very different budgets when prompts, retries, and guidance calls have unequal costs.

## Core method

Each frontier maintains a local archive. After a candidate is evaluated, CostAda records improvement over both the previous local best and the global best, together with actual search-side cost. A remaining-budget-dependent utility combines these gains and divides by a logarithmically scaled cost penalty; credit increasingly emphasizes global improvement as spending accumulates.

Smoothed utility controls local exploration, while cost-calibrated global progress guides UCB-style frontier allocation. Tactic generation is triggered by stagnation or low-yield spending only when enough budget remains to generate and test advice. Successful guidance receives a consolidation window; unsuccessful guidance delays the next intervention. These decisions use past observations, not advance knowledge of the next action's cost.


## Contributions

Integrates cost into search decisions and credit assignment instead of using it solely as a final stopping condition.

## Strengths and limitations

Eight benchmarks and two backbones test equal-budget quality and budget-to-target. The worst-case argument shows a limitation of cost-blind control, not a universal optimality guarantee for this particular controller.

## What to improve

Include evaluator wall time and hardware costs, test changing prices and inaccurate affordability estimates, and compare controllers under identical implementation overhead.

## Connections

[RelayEvolve](../relayevolve/index.md) also controls inference spending, but does so through staged population handoff between two models. CostAda continuously prices progress across search frontiers and tactic interventions; the two mechanisms address different allocation units.
