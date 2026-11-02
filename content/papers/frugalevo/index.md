---
id: frugalevo
short_title: "FrugalEvo"
title: "FrugalEvo: Towards Cost-Aware LLM-Guided Program Evolution"
authors:
  - "Hui Chen"
  - "Xuan Qi"
  - "James Xu Zhao"
  - "Zhaopeng Feng"
  - "Shilong Liu"
  - "Kuang Xu"
  - "Pang Wei Koh"
  - "Bryan Hooi"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.03675
code_url: https://github.com/chchenhui/frugalevo
institutions:
  - nus
  - university-washington
  - princeton
  - stanford
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - "Cost-aware program evolution"
  - "Mathematical optimization"
  - "Systems optimization"
  - "Heuristic programming"
featured: false
summary: "Assigns strategy exploration to an expensive model and repeated implementation to a cheaper one, with prompt-prefix reuse and cost-budgeted evaluation."
---

## Why it matters

A search that produces better programs per iteration may still be less useful per dollar. FrugalEvo assigns model capability by role and measures the entire best-so-far quality curve over model spend.

## Core method

A cheap model first improves the starter until progress stops, establishing the incumbent. A strong model analyzes the task/evaluator and proposes several concrete modification strategies in one call. The cheap generator implements one trial per strategy, ranks them by execution scores, and refines strategies in that order. During a refinement round, the strategy and parent stay fixed while failed attempts contribute feedback; an improvement updates the incumbent and starts another round on the same strategy, whereas an unsuccessful round advances to the next strategy. Island-based MAP-Elites stores code, scores, strategies, and failures. Prompts place invariant task content first, slower-changing elite context next, and new feedback last to increase cacheable prefix overlap. Search stops at the model-spend allowance; BA-AUC integrates best-so-far quality over that budget.

## Contributions

- Combines explicit ideation/implementation roles with cheap cold start and sequential repair.
- Reports final quality and cost-curve area on 20 mathematical, systems, and algorithmic tasks.
- Ablates model-role pairing, cold start, and sequential feedback under fixed model-cost budgets.

## Strengths and limitations

The budget measures model charges, not evaluator or other execution compute. Savings depend on provider prices, cache behavior, and the suitability of the cheaper implementation model. Experiments use small budgets and hand-crafted strategy instructions. Circle-packing scores include radius adjustments within evaluator tolerance, so tiny numerical improvements need stricter independent validation.

## What to improve

Report uncached and full-compute costs, evaluate longer budgets, and validate near-record numerical artifacts with tighter independent feasibility checks.

## Connections

[SpecEvo](../specevo/index.md) also combines cheap and expensive models but assigns them differently: cheap speculators explore code while a stronger navigator periodically synthesizes or redirects search. FrugalEvo instead pays for strong strategy proposals and delegates repeated implementation to the cheaper model.
