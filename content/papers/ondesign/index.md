---
id: ondesign
short_title: OnDesign
title: Online Automated Algorithm Design with Large Language Models
authors:
  - Zhiyao Zhang
  - Yichen Li
  - Xingyu Wu
  - Liang Feng
  - Kay Chen Tan
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.25325
institutions:
  - polyu
  - chongqing-university
primary_dimension: scope
dimensions:
  - scope
  - feedback
  - design-object
problems:
  - Bayesian Optimization
  - Continuous Optimization
  - Mixed-Variable Optimization
featured: false
summary: Synthesizes optimization algorithms during the target run, jointly adapting executable search logic and the guideline used to interpret runtime state.
---

## Why it matters

Offline algorithm discovery returns a program before deployment. OnDesign instead asks whether the algorithm should change as the same optimization run encounters new information or stalls.

## Core method

A state analyst summarizes runtime observations using an editable State Analysis Guideline (SAG). Several proposers receive that report and an archive of previous algorithms and gains; each offers a design direction, supporting rationale, and implementation advice. An arbiter reconciles these proposals into executable search logic.

Executing that program produces new candidate solutions and objective feedback. The resulting gain is recorded both with the algorithm and with the SAG that informed it. Periodically, a refiner updates the guideline using its archived scores. Thus the system changes both what algorithm is run and what evidence the next design decision emphasizes, without a separate offline pretraining stage.

Experiments instantiate this loop for Bayesian, continuous evolutionary, and mixed-variable optimization. The accompanying bound decomposes errors under stated representation and synthesis assumptions; it does not guarantee that LLM edits always help.

## Contributions

- Couples state-conditioned program synthesis with optimization inside a single run.
- Separates algorithm history from an evolving state-interpretation guideline.

## Strengths and limitations

Module ablations support the combined design on the tested benchmarks. SAG scores are heuristic credit signals, not isolated causal effects. Evaluation is mainly single-objective and at most 30-dimensional; online model latency and token cost can matter even when objective-call budgets match.

## What to improve

Report full wall-clock budgets and investigate noisy, constrained, and larger-scale problems with rollback safeguards for harmful online edits.

## Connections

[LLaMEA-BO](../llamea-bo/index.md) evolves complete Bayesian optimization algorithms offline. OnDesign explores a different deployment boundary: repeated state-dependent synthesis during the optimization run, trading continued model overhead for online adaptability.
