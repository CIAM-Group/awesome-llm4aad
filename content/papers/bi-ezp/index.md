---
id: bi-ezp
short_title: Bi-EZP
title: "Bi-EZP: LLM-Guided Bilevel Program Evolution for Ensemble Zero-Cost Proxy Discovery"
authors:
  - Yutao Lai
  - Kezhao Lai
  - Hai-Lin Liu
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.21927
code_url: https://anonymous.4open.science/r/Bi-EZP-318D
institutions:
  - guangdong-university-technology
primary_dimension: search
dimensions:
  - search
  - design-object
problems:
  - Zero-Cost Neural Architecture Ranking
featured: false
summary: Separates LLM search over zero-cost-proxy aggregation programs from CMA-ES calibration of their numerical parameters.
---

## Why it matters

An aggregation formula can look weak simply because its coefficients are poorly calibrated. Structural and numerical search should not be judged as if they were the same decision.

## Core method

The upper level proposes Python programs combining four precomputed NAS signals, together with finite parameter bounds. An AST/interface gate checks outputs; limited repair attempts precede a fixed fallback if generation remains invalid. For each accepted structure, a fresh CMA-ES run fits coefficients using rank correlation on inner-training architectures.

Disjoint inner-validation architectures determine the calibrated program's evolutionary fitness. Tournament selection, crossover/mutation, and elitist survival then choose structures. Parameters are not blindly inherited between incompatible programs. Numeric fitness influences which parents are shown, while stored rationales are not reused as semantic memory. Evaluation uses architecture-ranking benchmarks and subsequent NAS tests; the product is an evaluator program, not a neural architecture itself.


## Contributions

Couples open-ended aggregation-code search with a clearly separated numerical calibration and validation loop.

## Strengths and limitations

The split avoids using validation rank correlation directly as the inner optimizer's objective. However, the outer loop repeatedly selects on that validation set, and the four base proxies remain a fixed feature vocabulary.

## What to improve

Quantify validation overfitting and total inner-optimization cost, and test transfer to new proxy sets and architecture families.

## Connections

[LLaMEA-HPO](../llamea-hpo/index.md) also separates LLM structural proposals from numerical optimization. Bi-EZP applies this division to proxy programs with explicit inner-training and outer-validation ranking objectives; this is a mechanism comparison, not an asserted implementation lineage.
