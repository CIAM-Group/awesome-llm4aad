---
id: hemo
short_title: HEMO
title: 'HEMO: Harness Self-Evolution for Multi-Objective Combinatorial Optimization'
authors:
  - Jianghan Zhu
  - Cong Zhang
  - Ni Zhang
  - Yifan Yang
  - Yew Soon Ong
  - Zhiguang Cao
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.40023
institutions:
  - smu
  - ntu
  - independent-researcher
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Multi-Objective Combinatorial Optimization
  - Traveling Salesman Problem
  - Knapsack Problem
  - Vehicle Routing Problem
  - Flexible Job Shop Scheduling Problem
featured: false
summary: Evolves the operator-design controller through local module replacements, using downstream quality–runtime trade-offs and persistent search records.
---

## Why it matters

A search procedure can keep generating new operators while its own retrieval, parent selection, and generation policy remain fixed. HEMO makes these controller decisions editable without allowing edits to the evaluator.

## Core method

An outer scheduler selects one of four modules: experience retrieval, target selection, parent selection, or candidate evolution. A proposer writes its replacement blueprint, a realizer implements it, and an executor runs the resulting harness from a common seed pool. Evaluator interfaces, archive rules, diagnostic tools, and record writing remain fixed.

The harness score averages negative hypervolume and runtime over its final operator archive. A child replaces the current harness unless its parent dominates it; normalized improvement updates discounted UCB credit for the edited module. All evaluation records persist, even for rejected children. Periodic summaries and stagnation reports support later retrieval. A selected harness is subsequently frozen for inference and related-task transfer.

## Contributions

- Separates editable search decisions from a protected execution and evaluation scaffold.
- Tests harness evolution on eight multi-objective tasks with SEMO and NSGA-II backbones.

## Strengths and limitations

Experiments include four-run comparisons and memory/scheduler ablations. Transfer concerns the harness, not accumulated task-specific memory. Nested evaluation and proprietary proposer models add substantial cost; advantages are task-dependent, with the neural comparator stronger on bi-objective CVRP.

## What to improve

Measure amortized harness-training cost across repeated tasks and test memory transfer with safeguards against incompatible task assumptions.

## Connections

[E2OC](../e2oc/index.md) co-evolves operator design thoughts and implementations through prescribed MCTS and rotation rules. HEMO also makes the design harness's retrieval, targeting, parent-selection and generation roles editable, while keeping evaluation and archive interfaces fixed.
