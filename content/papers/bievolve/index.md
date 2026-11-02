---
id: bievolve
short_title: "BIEvolve"
title: "God Does Not Play Dice: Enforcing Batch Invariance in Agentic Kernel Generation"
authors:
  - "Youwei Bao"
  - "Chengpeng Wang"
  - "Simin Chen"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.36623
institutions:
  - gmu
  - nus
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "GPU Kernel Generation"
  - "Batch-Invariant Computation"
featured: false
summary: "Adds contract-based static analysis and cross-batch bitwise tests to kernel agents before speed measurements can reward a candidate."
---

## Why it matters

Ordinary correctness tests may accept a kernel whose output for one request changes when other requests join its batch. Serving reproducibility therefore requires a separate property.

## Core method

BIEvolve is a plug-in evaluator rather than a new search algorithm. A task contract identifies batch-varying inputs and protects sample-local reductions, indexing, and randomness. Static dependency analysis screens suspicious dataflow; native correctness tests and dynamic checks then compare an unchanged sample across batch contexts at bitwise precision.

Only passing candidates reach timing. Rejection diagnostics return to the host agent's existing repair loop. Integrations retain the original KSearch, Iterative, and Evolve search mechanisms.

## Contributions

The artifact audit confirms violations in 19 of 83 batch-applicable released kernels. Across three frameworks on H100 serving workloads, BI-aware generation raises the reported batch-invariance pass rate from 67.6% to 91.9%, retaining 91.8% of baseline geometric-mean speedup.

## Strengths and limitations

The study distinguishes numerical tolerance from bitwise invariance and measures both missed violations and false rejections. Static support is limited to particular source patterns, and finite dynamic contexts do not prove invariance. The contract must correctly identify independent sample semantics; some operations intentionally couple examples.

## What to improve

Expand language and cross-file coverage, independently validate contracts, and test unseen batch sizes and production batching policies.

## Connections

Both check that changing unrelated batch members does not change a preserved result. [Kernaut](../kernaut/index.md) uses purity-constrained covariance components and consistency tests within a numerical tolerance under permutation, subsetting, extension and duplication. BIEvolve checks dependencies from batch variables into protected GPU mechanisms and requires bitwise output agreement across matched batch contexts. This contrasts interface-based purity checks with targeted dependency and bitwise checks.
