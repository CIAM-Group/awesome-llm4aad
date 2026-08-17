---
id: e2oc
short_title: "E2OC"
title: "Evolving Interdependent Operators with Large Language Models for Multi-Objective Combinatorial Optimization"
authors:
  - "Junhao Qiu"
  - "Xin Chen"
  - "Liang Ge"
  - "Liyong Lin"
  - "Zhichao Lu"
  - "Qingfu Zhang"
year: 2026
date: 2026-01-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2601.17899
institutions:
  - cityu-hk
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Multi-Objective Combinatorial Optimization"
featured: false
summary: "E2OC co-designs interdependent neighborhood operators instead of optimizing each operator in isolation."
---

## Why it matters

E2OC co-designs interdependent neighborhood operators instead of optimizing each operator in isolation.

## Core method

The framework formulates operator-combination design as an MDP, uses Monte Carlo tree search over design strategies, and rotates operators to identify effective configurations while evolving executable code.

## Contributions

- Introduces the design described above for Multi-Objective Combinatorial Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
