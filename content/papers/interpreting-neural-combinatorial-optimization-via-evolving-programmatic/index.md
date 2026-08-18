---
id: interpreting-neural-combinatorial-optimization-via-evolving-programmatic
short_title: 'Interpreting Neural'
title: 'Interpreting Neural Combinatorial Optimization via Evolving Programmatic Bottlenecks'
authors:
  - 'Haocheng Duan'
  - 'Yuxin Guo'
  - 'Jieyi Bi'
  - 'Anqi Xie'
  - 'Sirui Li'
  - 'Yining Ma'
  - 'Cathy Wu'
year: 2026
date: 2026-06-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2606.19741
institutions:
  - carnegie-mellon
  - microsoft
  - ntu
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - Automatic algorithm design
featured: false
summary: 'Neural Combinatorial Optimization (NCO) achieves strong performance, yet its black-box nature remains a key roadblock to deployment and scientific diagnosis. Standard interpretability tools, such as Concept Bottleneck Models (CBMs), are ill-equipped for NCO, whose decisions are dynamic, state-dependent, and lack proper concept vocabulary definition.'
---

## Why it matters

Neural Combinatorial Optimization (NCO) achieves strong performance, yet its black-box nature remains a key roadblock to deployment and scientific diagnosis. Standard interpretability tools, such as Concept Bottleneck Models (CBMs), are ill-equipped for NCO, whose decisions are dynamic, state-dependent, and lack proper concept vocabulary definition.

## Core method

The paper's abstract describes the following design loop:

> Neural Combinatorial Optimization (NCO) achieves strong performance, yet its black-box nature remains a key roadblock to deployment and scientific diagnosis. Standard interpretability tools, such as Concept Bottleneck Models (CBMs), are ill-equipped for NCO, whose decisions are dynamic, state-dependent, and lack proper concept vocabulary definition. To close this gap, we introduce Evolving Programmatic Bottlenecks (EPB), to our knowledge, the first framework for interpreting NCO policies by distilling black-box NCO models into human-readable program portfolios. EPB employs an LLM to autonomously evolve a bank of programs, where each program's per-step action distribution serves as the bottleneck. EPB works through an iterative framework: Block I fixes program bank capacity and introduces a hybrid textual-numerical gradient descent scheme that couples numerical gradients for student router updates and textual gradients for LLM-based program revision; Block II dynamically adapts bank capacity via fault-targeted expansion and redundancy pruning. Extensive experiments demonstrate EPB's effectiveness and broad applicability, where the distilled program portfolios largely match original performance. EPB also reveals that NCO behavior shifts across optimization stages and can be approximated as a composition of classic heuristic variants. Our work advances interpretable NCO and establishes EPB as a promising tool for interpreting sequential decision-making models.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (bibliography_only). Evidence: ∗ Equal contribution. † Work done outside the author’s employment. ‡ Corresponding author: Yining Ma (yiningma@mit.edu). Preprint. correction [6] and improved generalization [7]. The core principle is to ground the model behavior i

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
