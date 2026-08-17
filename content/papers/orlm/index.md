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
code_url: https://github.com/Cardinal-Operations/ORLM
institutions:
  - sufe
  - cuhk-shenzhen
  - sribd
  - sjtu
  - cardinal-operations
  - columbia
  - duke
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

Prompting a closed general model is difficult to customize, audit, or deploy for proprietary OR tasks. ORLM builds an open training pipeline so optimization-modeling ability can be adapted rather than treated as a fixed emergent skill.

## Core method

OR-Instruct semi-automatically synthesizes diverse natural-language problems, mathematical formulations, and solver-oriented answers for instruction tuning. The framework trains 7B-scale OR-specialized models and supports customization with domain data. IndustryOR adds realistic industrial cases beyond template-heavy academic sets, while NL4OPT and MAMO provide established comparisons.

Evaluation measures formulation accuracy across these benchmarks and compares specialized open models with general open and closed LLMs.

## Contributions

- OR-Instruct, a scalable data-generation and instruction-tuning pipeline.
- IndustryOR, an evaluation set aimed at realistic modeling requirements.
- Open 7B-scale models and code for customizable optimization modeling.

## Strengths and limitations

Open weights and data construction make the work reusable for domain adaptation. Synthetic instruction quality bounds the model, and formulation metrics may under-credit mathematically equivalent answers. Industrial breadth is still limited compared with actual enterprise modeling workflows.

## What to improve

Integrate solver execution and equivalence verification, support clarification dialogue, and evaluate secure adaptation on private schemas without leaking business data.

## Connections

ORLM is the trainable-model branch of automatic optimization modeling. OptiBench provides a broader end-to-end test, while EquivaMap can verify semantically equivalent formulations.
