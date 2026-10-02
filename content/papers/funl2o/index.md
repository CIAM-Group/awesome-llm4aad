---
id: funl2o
short_title: FunL2O
title: "FunL2O: LLM-Guided Feature Function Design for Learning to Optimize"
authors:
  - Bingheng Li
  - Junyang Cai
  - Yupeng Zhang
  - Bistra Dilkina
  - Jayant Kalagnanam
  - Dzung T. Phan
year: 2026
date: 2026-07-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2607.27389
institutions:
  - michigan-state
  - southern-california
  - uw-madison
  - ibm-research
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - scope
problems:
  - Learning to Optimize
  - Linear Programming
  - Quadratic Programming
  - Mixed-Integer Linear Programming
featured: false
summary: Evolves executable feature functions for learning-to-optimize pipelines, retraining the fixed host model to measure each representation's downstream value.
---

## Why it matters

A learned solver cannot easily exploit relationships that its fixed input features fail to expose.

## Core method

The search changes only the feature function. Each host pipeline supplies a semantic contract defining accessible inputs, tensor interfaces, required original channels, and executable validity checks. Generated features may combine deployment-available quantities but cannot access reference solutions, labels, files, networks, or external solvers.

A valid function is inserted into a fresh host pipeline and the learner is retrained. Input width can change mechanically, but hidden architecture, training procedure, data, and downstream solver remain fixed. Native validation outcomes form a lexicographic ranking that prioritizes feasibility before objective quality or solver work. Elite feature code and measured outcomes condition later proposals; deployed preprocessing needs no LLM.


## Contributions

Makes representation code, rather than a solver heuristic or neural architecture, the algorithm-design object across multiple continuous and mixed-integer pipelines.

## Strengths and limitations

Retraining avoids unfairly testing new features with an old representation's weights. It is also expensive, and one pipeline's metric cannot be directly equated with another's; some prediction tasks trade objective gains against feasibility.

## What to improve

Report amortized feature-search cost and test transfer to unseen distributions with frozen features. Audit contracts for subtle information leakage and budget-match alternative feature search.

## Connections

[FunSearch](../funsearch/index.md) motivates the program-evolution loop. FunL2O adapts that idea to feature functions whose fitness is measured only after retraining a separate learner, rather than directly executing the generated function as the complete solver.
