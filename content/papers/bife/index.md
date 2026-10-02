---
id: bife
short_title: BiFE
title: "BiFE: Search-Efficient Discovery of CPU-Only Branching Policies via LLM-based Bi-Fidelity Evolution"
authors:
  - Ce Zhang
  - Bin Zhang
  - Zhiwei Xu
  - Hao Chen
  - Xinyue Lu
  - Shanwei Fan
  - Yingxuan Teng
  - Guoliang Fan
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.36735
institutions:
  - casia
  - university-chinese-academy-sciences
  - shandong-university
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - Mixed-Integer Linear Programming
  - Combinatorial Auctions
  - Set Covering Problem
  - Maximum Independent Set
  - Capacitated Facility Location
featured: false
summary: Bi-fidelity evolution discovers CPU branching programs by screening with strong-branching imitation and reserving solver runs for selected elites.
---

## Why it matters

A branching rule that imitates an expert well can still solve MILPs slowly: its own search visits different states, and CPU inference overhead matters. Evaluating every generated rule with full solver runs is expensive.

## Core method

The LLM generates, crosses, and mutates executable scoring functions over 72 candidate-variable features. A low-fidelity score measures agreement with strong-branching choices in an offline dataset. A high-fidelity score measures actual solving performance on separate MILP instances.

Initially, only the best imitation-ranked fraction receives solver evaluation. Later, a candidate is admitted to expensive evaluation if its imitation score reaches the threshold associated with the weakest solver-evaluated elite. Parent selection ranks these elites by true solver performance before the remaining imitation-ranked population; survival selection likewise prioritizes elites. Thus imitation filters proposals but cannot alone determine the returned rule.

Evaluation replaces branching inside SCIP, with root-only cuts and restarts disabled. Four standard distributions and three application benchmarks distinguish same-scale tests, larger instances, solving time, node counts, and primal-dual progress.

## Contributions

- Couples a cheap expert-imitation screen with measured solver feedback in population selection.
- Separates search cost, per-node inference cost, and final solving quality in CPU deployment.

## Strengths and limitations

The discovered rules are fastest among the reported CPU methods on all four same-scale benchmarks, but not universally on larger instances: default branching remains stronger on transferred set covering. The cheap screen can still reject novel rules that imitate poorly. Results depend on a specific solver configuration and feature interface.

## What to improve

Occasionally evaluate rejected candidates to measure screening false negatives, and test the rules with unrestricted solver cuts/restarts and broader distribution shifts.

## Connections

[Janus](../janus/index.md) also reserves expensive evaluation for selected candidates. The distinction is concrete: Janus evolves executable ranking proxies alongside programs, whereas BiFE uses a fixed expert-imitation surrogate with an elite admission threshold. Neither paper is being labeled as the other's implementation.
