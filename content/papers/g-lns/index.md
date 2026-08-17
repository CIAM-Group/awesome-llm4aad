---
id: g-lns
short_title: "G-LNS"
title: "G-LNS: Generative Large Neighborhood Search for LLM-Based Automatic Heuristic Design"
authors:
  - "Baoyun Zhao"
  - "He Wang"
  - "Liang Zeng"
year: 2026
date: 2026-02-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2602.08253
institutions:
  - northeastern-cn
  - ucas
  - tsinghua
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Traveling Salesman Problem"
  - "Capacitated Vehicle Routing Problem"
featured: false
summary: "G-LNS expands the design object from priority rules to complementary destroy-and-repair operators for large neighborhood search."
---

## Why it matters

G-LNS expands the design object from priority rules to complementary destroy-and-repair operators for large neighborhood search.

## Core method

The framework co-evolves paired destroy and repair operators and evaluates them cooperatively, allowing structural reconstruction at a larger scale than fixed-form constructive heuristics.

## Contributions

- Introduces the design described above for Traveling Salesman Problem, Capacitated Vehicle Routing Problem.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
