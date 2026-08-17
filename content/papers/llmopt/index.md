---
id: llmopt
short_title: "LLMOPT"
title: "LLMOPT: Learning to Define and Solve General Optimization Problems from Scratch"
authors:
  - "Caigao Jiang"
  - "Xiang Shu"
  - "Hong Qian"
  - "Xingyu Lu"
  - "Jun Zhou"
  - "Aimin Zhou"
  - "Yang Yu"
year: 2025
date: 2024-10-01
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2410.13213
institutions:
  - affiliation-pending
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - "General Optimization Modeling"
featured: false
summary: "LLMOPT learns a shared representation for defining optimization problems and producing solver code from natural-language descriptions."
---

## Why it matters

LLMOPT learns a shared representation for defining optimization problems and producing solver code from natural-language descriptions.

## Core method

A five-element formulation normalizes different optimization types, and multi-instruction tuning jointly improves formalization, code generation, and generalization while adding checks against hallucinated solutions.

## Contributions

- Introduces the design described above for General Optimization Modeling.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
