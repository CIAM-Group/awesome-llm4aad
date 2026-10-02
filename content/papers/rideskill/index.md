---
id: rideskill
short_title: RideSkill
title: "RideSkill: A Hierarchical Algorithm for Generalized Ride Sharing with LLM-Driven Automatic Evolution"
authors:
  - Zijian Zhao
  - Sen Li
  - Xialiang Tong
  - Mingxuan Yuan
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.02250
institutions:
  - hkust
  - huawei-noahs-ark
  - hkust-guangzhou
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - Ride Sharing
  - Order Dispatch
  - Vehicle Repositioning
featured: false
summary: Evolves executable dispatch skills, a context-dependent skill combiner, and an idle-vehicle repositioner for ride-sharing deployment without runtime LLM calls.
---

## Why it matters

Sharing multiple orders expands dispatch decisions, while policies trained for one fleet or reward definition may not transfer to another.

## Core method

First, LLM-assisted evolution builds atomic order-scoring skills with explicit contracts. A combiner is then evolved on top of the frozen skill repository. It probes a supplied reward function using basic events, combines standardized skill scores, and adapts weights to vehicle and environmental context. A third phase evolves a repositioner, processing idle vehicles sequentially while updating effective regional demand to avoid sending everyone to the same hotspot.

Mutation and crossover propose code; compilation, field checks, and simulation determine validity and fitness. Randomized environments and generated objectives diversify training. Repositioner fitness measures improvement over matched reposition-off runs. These are staged design phases, not a claim that all components are co-evolved simultaneously. Final execution uses the resulting programs without LLM calls.


## Contributions

Separates reusable dispatch primitives, objective-aware combination, and supply repositioning, with transfer experiments in a Manhattan ride-sharing simulator.

## Strengths and limitations

Executable deployment avoids repeated model latency. Simulator and reward-design assumptions limit external validity; optional income rescaling is a heuristic, not a fairness guarantee.

## What to improve

Test new cities and arrival processes, and isolate the value of reward probes from the skill library under matched discovery budgets.

## Connections

[LLM-HCJG](../llm-hcjg/index.md) keeps interacting routing functions together in each evolutionary individual. RideSkill instead freezes lower-level skills before evolving their combiner and repositioner, exposing a joint-versus-staged component-design trade-off rather than direct inheritance.
