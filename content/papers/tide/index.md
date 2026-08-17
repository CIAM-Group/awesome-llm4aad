---
id: tide
short_title: "TIDE"
title: "TIDE: Tuning-Integrated Dynamic Evolution for LLM-Based Automated Heuristic Design"
authors:
  - "Chentong Chen"
  - "Mengyuan Zhong"
  - "Ye Fan"
  - "Jialong Shi"
  - "Jianyong Sun"
year: 2026
date: 2026-01-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2601.21239
institutions:
  - affiliation-pending
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "TIDE jointly evolves heuristic structures and tunes numerical parameters through a nested, diversity-aware search process."
---

## Why it matters

TIDE jointly evolves heuristic structures and tunes numerical parameters through a nested, diversity-aware search process.

## Core method

An outer island model uses Tree Similarity Edit Distance to preserve structural diversity, while an inner loop combines LLM-generated logic with differential mutation for parameter tuning. A UCB scheduler allocates queries among prompt strategies.

## Contributions

- Introduces the design described above for Combinatorial Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
