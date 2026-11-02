---
id: automip
short_title: AutoMIP
title: Autoresearch in Mixed-Integer Linear and Nonlinear Programming
authors: [Yuwei Gu, Yaoxin Wu, Tong Guo, Wen Song, Zhiguang Cao]
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.39360
institutions: [chengdu-information-technology, eindhoven-university-technology, ntu, shandong-university, smu]
primary_dimension: search
dimensions: [search, feedback, scope]
problems: [Mixed-Integer Linear Programming, Mixed-Integer Nonlinear Programming]
featured: false
summary: Organizes long-horizon optimization research with a persistent pool of distinct hypotheses and a tree of restorable executable experiment states.
---

## Why it matters

A long research run can lose unused ideas or restart a promising direction from an incompatible code state. Deciding what to try and deciding which artifacts to resume are different search decisions.

## Core method

A task skill specifies candidate interfaces, evaluator, budget, and stopping rules. A review layer creates five to ten distinct research directions with evidence, requirements, risks, and lifecycle status; parameter changes remain local refinements rather than new ideas.

The algorithm tree stores code, configurations, generated models, intermediate artifacts, and measured outcomes. Local edges refine the active direction. Stagnation or a refuted assumption triggers a direction switch: an unused idea is selected and a compatible historical state is restored before execution. Repeated switching favors earlier reusable states. The verification layer measures feasibility, objective, runtime, and acceptance criteria, then updates the idea pool, tree, frontier, and best verified solution.

## Contributions

MIPLIB and MINLPLib cohorts compare target attainment, final objectives, time, and tokens. The paper reports new best solutions for 31 of 60 open MILP instances and 52 of 60 MINLP instances. Ablations remove idea pooling or tree-state management to test their complementary roles.

## Strengths and limitations

Explicit restoration makes long experiments auditable and preserves alternative hypotheses. Outcomes depend on task-specific skills, evaluator contracts, and substantial per-instance research budgets. Better benchmark solutions are not proofs of optimality or evidence of one transferable universal solver; broader-domain claims remain untested.

## What to improve

Audit all claimed records against independently checked feasibility, compare full research cost, and test transfer of discovered procedures to instances excluded from research.

## Connections

[MCTS-AHD](../mcts-ahd/index.md) searches a tree of heuristic candidates. AutoMIP separates an unused-idea pool from restorable experimental states and distinguishes local refinements from direction switches. [FormuEvo](../formuevo/index.md) restricts improvement to solver-facing formulations; AutoMIP's task skill permits broader executable research directions, including decomposition and neighborhood search.
