---
id: ahd-survey
short_title: 'Survey-AHD'
title: A Systematic Survey on Large Language Models for Algorithm Design
authors:
- Fei Liu
- Yiming Yao
- Ping Guo
- Zhiyuan Yang
- Xi Lin
- Zhe Zhao
- Xialiang Tong
- Kun Mao
- Zhichao Lu
- Zhenkun Wang
- Mingxuan Yuan
- Qingfu Zhang
year: 2026
date: 2026-02-01
venue: ACM Computing Surveys
paper_url: https://arxiv.org/pdf/2410.14716
institutions:
- cityu-hk
- huawei-noahs-ark
- sustech
- xjtu
- huawei
primary_dimension: design-object
dimensions:
- design-object
- scope
problems:
- Automatic algorithm design
featured: false
summary: A taxonomy and review of how large language models participate in automatic algorithm design.
---
## Why it matters

The survey distinguishes generating solutions with an LLM from using one to design reusable algorithms. It also considers support roles that do not themselves produce algorithm code.

## Core method

The authors screen literature and organize it by four LLM roles. Optimizers directly propose solutions. Predictors estimate useful properties or performance. Extractors recover features and knowledge. Designers create algorithms or their components.

A second view follows ideation, implementation and evaluation. Application sections cover optimization, machine learning and scientific computing. The article synthesizes existing evidence rather than running a new unified benchmark.

## Contributions

- A role-based taxonomy separating direct solving from algorithm generation.
- A development-stage view that includes evaluation and interpretation.
- Research questions about efficiency, generalization and reproducible benchmarking.

## Strengths and limitations

Its broad coverage is useful background, but not every surveyed application belongs to this collection's narrower executable-algorithm scope. The taxonomy is not evidence that methods have been compared under equal budgets.

## What to improve

Maintain version-aware coverage and separate direct solution generation, learned solver policies and reusable code discovery in future comparisons.

## Connections

Section 3.4 discusses [EoH](../eoh/index.md) as algorithm design through coupled ideas and code. This is a literature synthesis link, not a method extension.
