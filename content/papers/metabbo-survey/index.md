---
id: metabbo-survey
short_title: MetaBBO Survey
title: 'Toward Automated Algorithm Design: A Survey and Practical Guide to Meta-Black-Box-Optimization'
authors:
  - Zeyuan Ma
  - Hongshu Guo
  - Yue-Jiao Gong
  - Jun Zhang
  - Kay Chen Tan
year: 2025
date: 2025-05-01
venue: IEEE TEVC
paper_url: https://yuejiaogong.github.io/papers/MetaBBOsurvey.pdf
institutions:
  - south-china-university-technology
  - nankai
  - hanyang-university
  - polyu
primary_dimension: scope
dimensions:
  - scope
  - design-object
  - feedback
problems:
  - Black-box optimization
featured: false
summary: This survey separates algorithm selection, configuration, solution manipulation and algorithm generation within a common meta-learning framework, including but not limited to LLM methods.
---

## Why it matters

Learning to choose an existing optimizer, learning to output solutions and generating optimizer code are different tasks. This survey places them in a shared framework without treating all learning-based optimization as LLM-driven algorithm discovery.

## Core method

The framework separates a meta-level policy from a lower-level optimization process. The policy observes problem or search-state information and selects a design decision. Running the resulting optimizer supplies the performance feedback used to improve the policy across a distribution of problems.

The first taxonomy describes the decision being learned. Algorithm selection chooses from an existing pool. Configuration changes parameters or components. Solution manipulation makes the learned policy act as the optimizer. Algorithm generation instead outputs a reusable optimizer representation, such as a workflow, symbolic rule or program.

A second taxonomy distinguishes reinforcement learning, supervised learning, neuroevolution and LLM in-context learning. Sections III-D and IV-D discuss program evolution through AEL, EoH and LLaMEA. The practical evaluation uses MetaBox to compare ten representative meta-optimization methods and three conventional optimizers, considering final quality, evaluation count, runtime and transfer. It is not a head-to-head benchmark of current LLM code-evolution systems.

## Contributions

- Separates the design artifact from the learning mechanism used to obtain it.
- Connects optimization quality with computational overhead and generalization tests.
- Discusses state features, neural architectures, training distributions and meta-objectives as distinct design choices.

## Strengths and limitations

The common formulation helps identify what a proposed system actually automates. Its scope is deliberately broader than this collection's core LLM literature. The empirical comparison covers selected continuous optimization settings and cannot establish a universal ranking of learning paradigms. In particular, results for OPRO's direct solution generation should not be read as results for EoH-style program search.

## What to improve

Extend matched-budget comparisons to executable program discovery, heterogeneous problems and expensive real-world evaluations. Report the amortization point at which meta-training or code search becomes preferable to using an existing optimizer.

## Connections

The survey explicitly uses [EoH](../eoh/index.md) to explain algorithm generation through descriptions and executable programs. This is a documented taxonomy link, not an implementation extension or a new EoH benchmark.
