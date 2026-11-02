---
id: epoch-coverage
short_title: "EPOCH-Coverage"
title: "EPOCH: Coverage-Aware Evolution with Experiential Preference Optimization for LLM-based Automated Heuristic Design"
authors:
  - "Oguzhan Gungordu"
  - "Ayse Tursucular"
  - "Siheng Xiong"
  - "Faramarz Fekri"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.17379
institutions:
  - gatech
primary_dimension: search
dimensions:
  - search
  - feedback
  - design-object
problems:
  - "Heuristic portfolios"
  - "Traveling salesman problem"
  - "Online bin packing"
  - "Knapsack"
featured: false
summary: "EPOCH uses per-instance coverage to control heuristic evolution and trains its generator with preference pairs plus distillation of teacher-guided improvements."
---

## Why it matters

Average fitness obscures specialist heuristics that solve different instances well, while prompt-only reflection is lost when the generator receives no hint. This EPOCH addresses both gaps in one online search.

## Core method

Each heuristic has a per-instance optimality-gap vector. The pool's coverage objective averages the best available gap on each instance; expert counts and vector differences guide parent choice, complementary crossover, operator rewards, and stagnation recovery. A persistent expert archive survives pool resets. The generator produces unhinted candidates, a fixed teacher critiques their successes or failures, and the generator produces a second hinted batch. Evaluations create within-batch preference pairs and cross-round pairs where hinted candidates actually improve. Periodic LoRA updates combine DPO with a negative-log-likelihood reflective self-distillation term on those improvements, conditioned on the original unhinted prompt. The result is a complementary set of executable heuristics, not solely one average-best rule.

## Contributions

- Extends coverage from survivor selection into parent selection, operator allocation, and recovery.
- Transfers verified reflective improvements into generator weights and evaluates both single rules and best-of-set portfolios across three constructive optimization domains.

## Strengths and limitations

Portfolio scores take the best result over multiple executed heuristics; they are not evidence of a free perfect selector. The teacher remains fixed, and experiments cover step-by-step construction rather than local-search or ant-colony controllers. Training compute, teacher calls, and portfolio deployment cost all affect practical efficiency.

## What to improve

Learn inexpensive instance routing, jointly optimize teacher feedback, and compare under complete search-plus-deployment resource budgets.

## Connections

Both search for complementary heuristic sets using instance-level performance. [EoH-S](../eoh-s/index.md) uses complementarity in reproduction and survival with a frozen LLM. EPOCH also uses coverage to reward operators and trigger recovery, while training the generator on verified preference pairs and reflective improvements.

This is distinct from [EPOCH-Evidence](../epoch-evidence/index.md), which governs research claims rather than training heuristic generators.
