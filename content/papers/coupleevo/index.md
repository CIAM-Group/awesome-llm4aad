---
id: coupleevo
short_title: "CoupleEvo"
title: "CoupleEvo: Evolving Heuristics for Coupled Optimization Problems Using Large Language Models"
authors:
  - "Thomas Bomer"
  - "Bastian Amberg"
  - "Max Disselnmeyer"
  - "Anne Meyer"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.06341
institutions:
  - affiliation-pending
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - "Coupled Optimization"
featured: false
summary: "CoupleEvo extends LLM-based heuristic evolution to problems composed of tightly coupled subproblems."
---

## Why it matters

CoupleEvo extends LLM-based heuristic evolution to problems composed of tightly coupled subproblems.

## Core method

The framework compares sequential, iterative, and integrated coordination strategies for evolving subproblem heuristics, exposing the trade-off between explicit coupling and search complexity.

## Contributions

- Introduces the design described above for Coupled Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
