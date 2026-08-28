---
id: refineevo
short_title: RefineEvo
title: 'RefineEvo: Planning-Guided Heuristic Evolution with Bidirectional Experience'
authors:
  - Yang Wu
  - Junran Pan
  - Yifan Zhang
  - Ning Xu
  - Fanshuo Zeng
  - Jian Cheng
year: 2026
date: 2026-07-13
venue: ICML
paper_url: https://arxiv.org/pdf/2607.11358
institutions:
  - casia
  - ucas
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - design-object
problems:
  - Traveling Salesman Problem
  - Bin Packing Problem
  - Knapsack Problem
  - Capacitated Vehicle Routing Problem
featured: false
summary: RefineEvo transforms AHD into a planning-guided, experience-driven system with a state-aware Planner that schedules and refines evolutionary operators and a Reflector that distills trajectory-aware bidirectional experience.
---

## Why it matters

LLM-based AHD typically relies on a fixed library of prompt-based evolutionary operators applied uniformly across generations, and accumulates experience through outcome-based summarization that contrasts superior and inferior candidates. This ignores the parent-to-offspring trajectory and the situation-specific applicability of an insight, so guidance can be misleading when applied to incompatible search states. As evolution advances, finding valid improvements becomes harder, motivating continuous adaptation of the operators themselves.

## Core method

RefineEvo replaces random trials with a closed planning–experience loop:

- A **Planner** perceives the global search state (population convergence/diversity and recent per-operator utility) and selects an Exploration or Exploitation mode; when an operator consistently fails or yields high invalidity, it triggers a **Dynamic Operator Refinement** that rewrites the operator's natural-language prompt.
- A two-level operator selection first chooses the mode and then prioritizes operators by historical utility within that mode.
- A **Reflector** evaluates parent-to-offspring trajectories and distills structured experiences—both positive insights and negative pitfalls—into a **Bidirectional Experience Pool (BEP)**, binding each lesson to its applicable precondition rather than treating experience as universally valid.
- The population evolves via an elitist greedy protocol over heuristic tuples of natural-language description and executable code.

## Contributions

- A state-aware Planner for operator selection and dynamic refinement that adapts search tools to evolving problem complexity.
- A Bidirectional Experience Pool capturing both positive and negative insights with trajectory grounding and applicability conditions.
- Extensive experiments across classic COPs showing state-of-the-art performance while improving token efficiency.

## Strengths and limitations

RefineEvo adapts its tool use to the search phase, grounds experience in trajectories and preconditions, and improves token efficiency. The Planner and Reflector add LLM calls, the two-level selection requires tuning, and experiments focus on classic combinatorial optimization benchmarks.

## What to improve

Promising directions include generalization to non-COP tasks, theoretical grounding of the mode-switching rule, and explicit compute accounting so planning overhead does not hide search cost.

## Connections

RefineEvo builds on ReEvo's reflection with explicit planning and a bidirectional (including negative) experience pool, and contrasts with MCTS-AHD (which selects which heuristic node to expand) and LLM-LNS (which evolves prompt strategies at a coarser level).
