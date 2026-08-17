---
id: lhs
short_title: "LHS"
title: "Latent Heuristic Search: Continuous Optimization for Automated Algorithm Design"
authors:
  - "C. Ahmed"
  - "Mahdi Mostajabdaveh"
  - "Zirui Zhou"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.17137
institutions:
  - affiliation-pending
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Traveling Salesman Problem"
  - "Capacitated Vehicle Routing Problem"
  - "Knapsack Problem"
  - "Online Bin Packing"
featured: false
summary: "Latent Heuristic Search moves automated algorithm design from discrete program mutations to gradient-based optimization on a learned continuous manifold."
---

## Why it matters

Latent Heuristic Search moves automated algorithm design from discrete program mutations to gradient-based optimization on a learned continuous manifold.

## Core method

Programs are encoded as latent vectors, scored by a differentiable surrogate, regularized through a normalizing flow, and optimized by gradient ascent. Optimized vectors become soft prompts for a frozen LLM that emits executable heuristics.

## Contributions

- Introduces the design described above for Traveling Salesman Problem, Capacitated Vehicle Routing Problem, Knapsack Problem, Online Bin Packing.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
