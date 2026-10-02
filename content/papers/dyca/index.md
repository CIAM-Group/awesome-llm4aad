---
id: dyca
short_title: DyCA
title: "Beyond Average Performance: Dynamic Instance Clustering and Specialized Algorithm Design in LLM-Assisted Evolutionary Search"
authors:
  - Qinglong Hu
  - Qingfu Zhang
  - Fei Liu
  - Xialiang Tong
  - Kun Mao
  - Mingxuan Yuan
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.03129
institutions:
  - cityu-hk
  - huawei-noahs-ark
primary_dimension: search
dimensions:
  - search
  - feedback
  - scope
problems:
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
  - Online Bin Packing
  - Algorithm Portfolios
featured: false
summary: Re-clusters instances using their responses to evolved algorithms and allocates search between complementary and specialist heuristic pools.
---

## Why it matters

Optimizing an average can repeatedly favor abundant instance groups while neglecting smaller groups on which every current heuristic is weak.

## Core method

Accumulated algorithm–instance scores represent each instance behaviorally. A compact, periodically updated set of anchor algorithms reduces dimensionality before re-clustering; no handcrafted instance features are required. The clusters are revised as new algorithms expose previously unseen distinctions.

DyCA extends EoH-S complementary population management with inverse-cluster-size weights, preventing large clusters from dominating marginal contributions. Separate specialist pools optimize cluster-specific objectives. Search initially favors broad complementary coverage, then shifts toward specialists as clustering stabilizes. Candidates are evaluated on all training instances and shared across pools, including cross-pool reuse when a specialist stagnates.


## Contributions

Couples instance-structure discovery to portfolio search rather than freezing a partition before evolution.

## Strengths and limitations

The response representation can transfer across problem types, but it depends on stable measurements and informative probe algorithms. Noisy runtimes can distort clusters, and deploying multiple portfolio members increases solve-time cost.

## What to improve

Quantify sensitivity to response noise and cluster instability, and compare tail robustness under matched deployment budgets rather than only equal search budgets.

## Connections

[EoH-S](../eoh-s/index.md) supplies complementary population management, which DyCA explicitly modifies with cluster-balanced weights. [MOSAIC](../mosaic/index.md) provides a different specialization substrate: a structural-feature grid with adversarially generated instances rather than response-based dynamic clusters.
