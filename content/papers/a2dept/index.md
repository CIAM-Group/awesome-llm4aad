---
id: a2dept
short_title: "A2DEPT"
title: "A2DEPT: Large Language Model-Driven Automated Algorithm Design via Evolutionary Program Trees"
authors:
  - "Bin Chen"
  - "Shouliang Zhu"
  - "Beidan Liu"
  - "Yong Zhao"
  - "Tianle Pu"
  - "Huichun Li"
  - "Zhengqiu Zhu"
year: 2026
date: 2026-04-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2604.24043
institutions:
  - affiliation-pending
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Automatic Algorithm Design"
featured: false
summary: "A2DEPT represents candidate algorithms as evolutionary program trees for controllable hierarchical reuse and variation."
---

## Why it matters

A2DEPT represents candidate algorithms as evolutionary program trees for controllable hierarchical reuse and variation.

## Core method

LLMs generate code at node and subtree level, while evolutionary tree operators perform structured crossover and mutation instead of repeatedly rewriting a flat program.

## Contributions

- Introduces the design described above for Automatic Algorithm Design.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
