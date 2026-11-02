---
id: principle-collapse
short_title: "Principle Collapse"
title: "An important Bottleneck in LLM Optimizers: Principle-Level Local Optima"
authors:
  - "Nian Ran"
  - "Tianhe Jia"
  - "Zhengyang Mu"
  - "Yue Wang"
  - "Sebastian Brulin"
  - "Markus Olhofer"
  - "Mauricio A. Alvarez"
  - "Yang Liu"
  - "Richard Allmendinger"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.24291
code_url: https://github.com/HuskyNian/LLM-Principle-Collapse
institutions:
  - manchester
  - university-chinese-academy-sciences
  - zhongguancun-academy
  - nvidia
  - honda-research-europe
  - xinzhuai
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Search Diversity Diagnosis"
  - "GPU Kernel Optimization"
  - "Molecular Optimization"
featured: false
summary: "Diagnoses stalled LLM optimization through retained design principles, attainable reference gaps, and remaining-budget plateaus rather than code variation alone."
---

## Why it matters

Many different candidate programs can express the same exhausted design principle. Surface diversity is therefore insufficient evidence of continued exploration.

## Core method

The diagnostic protocol combines three conditions: a substantial gap to an attainable reference, concentration of retained principles, and a prolonged performance plateau. All three give strong support for collapse; incomplete combinations yield limited or unestablished evidence.

Task-specific descriptors track molecular scaffolds, node incidence in selected sentinel sets, and executed GPU-kernel routes. These are observable proxies, not direct measurements of latent reasoning. Archives of high-performing candidates are inspected across evolutionary, reflective, and principle-space Bayesian optimizers. Interventions vary sampling diversity or provide reference-derived principles without supplying finished solutions.

## Contributions

The benchmark separates candidate variation from principle concentration and tests whether broader sampling or explicit hints prevent or relieve stagnation.

## Strengths and limitations

Among 161 assessable runs, 78.3% support collapse and 55.3% strongly support it. Kernel source diversity can remain high while one route dominates. Hints help some runs but worsen others. Labels depend on domain-specific descriptors and thresholds; most references are attainable baselines, not global optima, and route-investment correlations are not causal evidence.

## What to improve

Validate online detectors prospectively, audit route annotations, and preserve promising principles long enough to improve initially weak implementations.

## Connections

[Mutation Without Variation](../mutation-without-variation/index.md) diagnoses structural contraction through neutral mutation chains, accepting every valid proposal and tracking repeated program skeletons. Principle Collapse studies selected optimization trajectories and requires retained-principle concentration, a prolonged plateau and a gap to an attainable reference before diagnosing harmful locking. The contrast separates operator-level contraction from evidence that narrowed search has become ineffective.
