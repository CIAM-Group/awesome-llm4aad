---
id: llamea-mobo
short_title: LLaMEA-MOBO
title: LLM-Driven Evolutionary Generation of Multi-Objective Bayesian Optimization Algorithms
authors:
  - Georgios Laskaris
  - Reuben Brasher
  - Niki van Stein
  - Elena Raponi
  - Thomas Bäck
  - Florian Neukart
year: 2026
date: 2026-07-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2607.08791
code_url: https://github.com/glatq/LLaMEA-MOO/tree/publication_llamea_moo_unconstrained
institutions:
  - terra-quantum
  - leiden-university
primary_dimension: scope
dimensions:
  - scope
  - design-object
  - search
problems:
  - Multi-Objective Bayesian Optimization
  - Algorithm Generation
featured: false
summary: Extends LLaMEA-style code evolution and hyperparameter optimization to complete multi-objective Bayesian optimization algorithms.
---

## Why it matters

Surrogates, acquisitions, decomposition strategies, and numerical tuning interact, so a promising MOBO structure can look weak with a poor configuration.

## Core method

Mutation or crossover prompts produce a complete Python optimizer, rationale, and a bounded configuration space containing three to seven tunable parameters. Duplicate detection and reduced-budget execution screen candidates before SMAC tuning. The tuned implementation is evaluated across benchmark problems using mean normalized hypervolume, with runtime and errors returned as feedback.

The study compares elitist single-parent and population strategies with a non-elitist population strategy. Approximately 900 generated algorithms from nine runs are assessed on synthetic problems and then unseen engineering tasks. Generated algorithms optimize multiple objectives, but outer evolutionary ranking uses a scalar aggregate hypervolume rather than a Pareto population of discovery objectives.


## Contributions

Searches complete surrogate-assisted optimizer structures while delegating numeric configuration to a separate optimizer.

## Strengths and limitations

Reports downstream quality and wall-clock trade-offs, including engineering transfer. The authors disclose fixed-seed behavior corrected by reruns and a mechanical indexing correction; results therefore should not be described as completely intervention-free.

## What to improve

Enforce seed handling and dimensionality checks before selection, widen constrained/noisy testing, and charge nested SMAC and benchmark evaluation to the total discovery budget.

## Connections

[LLaMEA-HPO](../llamea-hpo/index.md) provides the explicit code-generation plus configuration-optimization methodology. LLaMEA-MOBO adapts it to complete multi-objective Bayesian optimizers and a hypervolume-based evaluation contract.
