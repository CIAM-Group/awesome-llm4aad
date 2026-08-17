---
id: cdeoh
short_title: "CDEoH"
title: "CDEoH: Category-Driven Automatic Algorithm Design With Large Language Models"
authors:
  - "Yu-Nian Wang"
  - "Shen-Huan Lyu"
  - "Ning Chen"
  - "Jia-Le Xu"
  - "Bowen Ye"
  - "Qingfu Zhang"
year: 2026
date: 2026-03-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2603.19284
institutions:
  - cityu-hk
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "CDEoH injects problem-category knowledge into evolutionary algorithm design to improve stability and preserve useful diversity."
---

## Why it matters

CDEoH injects problem-category knowledge into evolutionary algorithm design to improve stability and preserve useful diversity.

## Core method

Category-aware prompts and search decisions guide the joint evolution of algorithmic thoughts and code, reducing blind exploration across structurally different problem classes.

## Contributions

- Introduces the design described above for Combinatorial Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
