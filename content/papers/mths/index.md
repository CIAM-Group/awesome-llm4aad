---
id: mths
short_title: "MTHS"
title: "Hierarchical Representations for Cross-task Automated Heuristic Design using LLMs"
authors:
  - "Fei Liu"
  - "Rui Zhang"
  - "Shunyu Yao"
  - "Qinglong Hu"
  - "Kefeng Zheng"
  - "Zhichao Lu"
  - "Qingfu Zhang"
year: 2026
date: 2026-07-01
venue: "ICML"
paper_url: https://openreview.net/pdf/5723a21bffbe74a1f5c2b88d97cee90b29e16b4d.pdf
institutions:
  - cityu-hk
  - zhejiang
  - stanford
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - "Cross-Task Automated Heuristic Design"
featured: false
summary: "MTHS separates task-independent metaheuristics from task-specific programs and evolves both levels across multiple tasks."
---

## Why it matters

MTHS separates task-independent metaheuristics from task-specific programs and evolves both levels across multiple tasks.

## Core method

A hierarchical representation and two-level evolution transfer elite program knowledge between tasks while preserving task-specific implementations, targeting reusable algorithmic structure rather than isolated code fragments.

## Contributions

- Introduces the design described above for Cross-Task Automated Heuristic Design.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
