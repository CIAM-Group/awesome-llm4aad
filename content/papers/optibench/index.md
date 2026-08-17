---
id: optibench
short_title: "OptiBench"
title: "OptiBench Meets ReSocratic: Measure and Improve LLMs for Optimization Modeling"
authors:
  - "Zhicheng Yang"
  - "Yiwei Wang"
  - "Yinya Huang"
  - "Zhijiang Guo"
  - "Wei Shi"
  - "Xiongwei Han"
  - "Liang Feng"
  - "Linqi Song"
  - "Xiaodan Liang"
  - "Jing Tang"
year: 2025
date: 2024-07-01
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2407.09887
institutions:
  - hkust-guangzhou
  - hkust
  - uc-merced
  - eth-zurich
  - cityu-hk
  - huawei-noahs-ark
  - sun-yat-sen
  - mbzuai
  - chongqing-university
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Optimization Modeling"
featured: false
summary: "OptiBench evaluates end-to-end optimization modeling, while ReSocratic synthesizes structured demonstrations to improve smaller models."
---

## Why it matters

OptiBench evaluates end-to-end optimization modeling, while ReSocratic synthesizes structured demonstrations to improve smaller models.

## Core method

The benchmark covers linear and nonlinear problems with human-readable inputs and solver-checked outputs. ReSocratic constructs formulations step by step before deriving questions and answers.

## Contributions

- Introduces the design described above for Optimization Modeling.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
