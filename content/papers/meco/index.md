---
id: meco
short_title: "MECo"
title: "Multi-Task Evolution for Zero-Shot Cross-Problem Generalization using LLMs"
authors:
  - "Zhuoliang Xie"
  - "Changliang Zhou"
  - "Genghui Li"
  - "Zhenkun Wang"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.03316
institutions:
  - sustech
  - shenzhen-university
primary_dimension: scope
dimensions:
  - scope
  - search
  - design-object
problems:
  - "Zero-shot cross-problem transfer"
  - "Vehicle routing"
  - "Flexible job-shop scheduling"
featured: false
summary: "Combines task-conditioned populations using measured transfer gaps and selects a complementary heuristic set solely from source-task feedback."
---

## Why it matters

Related constraints can create many unseen problem variants, making separate heuristic search for every combination impractical. MECo tests whether source-only evolution can supply useful heuristics for new combinations without target-side redesign.

## Core method

Source tasks each activate one constraint attribute and provide an initial population. Task-level search pairs populations that contribute different attributes, prioritizing unexplored unions and low symmetric transfer gaps measured by cross-evaluating populations on their constituent source datasets. The LLM receives the combined specification and parent heuristics, then composes compatible mechanisms, resolves conflicting rules, explores under-covered source dimensions, or mutates for transfer. Combined-task candidates are still evaluated only on available source datasets, not instances of the combined target problem. Nondominated source-score fronts, crowding, and decision-behavior differences preserve complementary candidates. After evolution, greedy marginal coverage over combinations of source scores selects four frozen heuristics. Common feasibility masks allow their decision rules to operate across variants.

## Contributions

- Separates task-combination search from within-task heuristic evolution.
- Evaluates 32 routing and scheduling variants, using only single-constraint variants for design feedback.
- Tests native EoH, ReEvo, and HSEvo engines inside the multi-task framework, with additional ten-run scheduling comparisons.

## Strengths and limitations

The shared decision interface and feasibility masks provide substantial domain structure. Reported Best4 is the lowest whole-target-dataset mean among four heuristics, not a learned selector fixed before seeing target results. Proposal matching does not equal evaluation cost, and the main experiments cover two compositional families with three runs. No own-method code link is supplied; listed GitHub repositories are baselines or task resources.

## What to improve

Learn source-only deployment selection, include the cost of cross-task evaluations, and test task families with incompatible decision interfaces and genuinely new constraints.

## Connections

Both select complementary heuristic sets, but define coverage differently. [EoH-S](../eoh-s/index.md) covers instances within one problem distribution. MECo combines task-conditioned populations and selects using source-task combinations before applying the frozen set to unseen constraint combinations.

MECo's EoH-MECo variant retains [EoH](../eoh/index.md)'s native generation and population updates inside each task population. MECo adds task pairing, parent transfer and source-only set selection for zero-shot evaluation on unseen constraint combinations.

The ReEvo-MECo variant runs [ReEvo](../reevo/index.md)'s original search rules within MECo's task populations. Task-level pairing and heuristic transfer broaden the local engine to source-only multi-task search and zero-shot heuristic-set deployment.

The HSEvo-MECo variant uses [HSEvo](../hsevo/index.md) as the local heuristic engine while MECo manages task populations, transfers and final set selection. This broadens the engine to unseen constraint combinations, with initialization compatibility rules documented in the appendix.
