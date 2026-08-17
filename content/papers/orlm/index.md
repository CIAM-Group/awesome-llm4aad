---
id: orlm
short_title: "ORLM"
title: "ORLM: A Customizable Framework in Training Large Models for Automated Optimization Modeling"
authors:
  - "Chenyu Huang"
  - "Zhengyang Tang"
  - "Shixi Hu"
  - "Ruoqing Jiang"
  - "Xin Zheng"
  - "Dongdong Ge"
  - "Benyou Wang"
  - "Zizhuo Wang"
year: 2025
date: 2024-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2405.17743
institutions:
  - affiliation-pending
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - "Optimization Modeling"
featured: false
summary: "ORLM provides an open, customizable path for training language models to formulate optimization problems and generate solver code."
---

## Why it matters

ORLM provides an open, customizable path for training language models to formulate optimization problems and generate solver code.

## Core method

OR-Instruct synthesizes modeling data for instruction tuning, while IndustryOR evaluates models on realistic optimization formulations beyond prompt-only closed-model workflows.

## Contributions

- Introduces the design described above for Optimization Modeling.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
