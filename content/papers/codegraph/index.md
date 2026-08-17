---
id: codegraph
short_title: "Code Graph"
title: "Budget-Efficient Automatic Algorithm Design via Code Graph"
authors:
  - "Maxime Bouscary"
  - "Manxi Wu"
  - "Saurabh Amin"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.10598
institutions:
  - mit
  - uc-berkeley
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Automatic Algorithm Design Benchmarking"
featured: false
summary: "A code-graph representation stores algorithms as reusable substructures so useful code can survive even when its containing candidate performs poorly."
---

## Why it matters

A code-graph representation stores algorithms as reusable substructures so useful code can survive even when its containing candidate performs poorly.

## Core method

A directed acyclic graph stores recurring algorithmic features and supports local recombination and inheritance, targeting higher realized fitness under a fixed evaluation budget.

## Contributions

- Introduces the design described above for Automatic Algorithm Design Benchmarking.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
