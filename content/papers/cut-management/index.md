---
id: cut-management
short_title: Cut Management
title: LLM-guided Cutting-plane Management for Mixed-integer Linear Programming
authors:
  - Zetao Zheng
  - Zhe Wang
  - Jie Shao
year: 2026
date: 2026-08-01
venue: IJCAI AI4Tech
paper_url: https://ijcai.org/proceedings/2026/0736.pdf
code_url: https://github.com/BeeeeenWANG/LLM-guided-cutting-plane-management
institutions:
  - uestc
  - sichuan-ai-institute
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Mixed-integer Linear Programming
featured: false
summary: The framework combines instance-specific separator configuration with LLM-generated cut-selection heuristics selected according to the evolving solver state.
---

## Why it matters

Cutting-plane management involves two distinct decisions. A solver must decide which separators to run and which generated cuts to retain. A configuration that helps one instance or search stage can add unnecessary work elsewhere.

## Core method

Before solving, an LLM receives the instance type and structural statistics, including integrality, sparsity and coefficient information. It chooses active separators and sets parameters controlling their frequency, rounds, cut limits and search depth. This configuration is fixed during that solve.

The second stage works with the changing branch-and-bound state. Node depth, gap, LP effort and recent cut performance describe the current situation. Prompts ask the LLM to reason about appropriate selection criteria and express them as executable heuristics. To reduce repeated generation overhead, an offline repository stores heuristic descriptions and implementations. Runtime reasoning can then match the current state to a stored rule instead of synthesizing a new function at every decision.

Experiments integrate the two stages into SCIP and compare against default settings, hand-designed policies and learned cut-selection methods on five MILP problem classes.

## Contributions

- Separation of static separator configuration from stage-dependent cut selection.
- A combination of executable policy generation and description-based policy retrieval.
- Experiments and ablations examining solver performance, separator choices and LLM overhead.

## Strengths and limitations

The method can use solver structure without training a task-specific neural policy. Nevertheless, the results do not support uniform superiority on every task and scale. Some ablations without cut selection are competitive or better on individual settings. Initial configuration latency is excluded from reported solving times, and runtime LLM reasoning remains a substantial cost.

## What to improve

Report end-to-end latency including initial configuration, evaluate cheaper rule selectors, and test whether repository reuse remains effective on unfamiliar MILP structures.

## Connections

DyACE also adapts algorithmic components using search-state evidence. It compares regenerated evolutionary operators through rollouts from the same population state. This work instead combines a fixed separator configuration with state-conditioned retrieval of cut-selection rules. The contrast concerns how adaptation is evaluated and how frequently expensive generation is invoked, not simply the difference between optimization domains.
