---
id: laf-mcts
short_title: "LaF-MCTS"
title: "Automated Large-scale CVRP Solver Design via LLM-assisted Flexible MCTS"
authors:
  - "Tong Guo"
  - "Caishun Chen"
  - "Yew Soon Ong"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.03339
institutions:
  - ntu
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - "Large-Scale Capacitated Vehicle Routing Problem"
featured: false
summary: "LaF-MCTS incrementally designs decomposition policies and sub-solvers for large-scale CVRP instances."
---

## Why it matters

LaF-MCTS incrementally designs decomposition policies and sub-solvers for large-scale CVRP instances.

## Core method

A three-tier flexible MCTS builds the solver from coarse framework choices to decomposition logic and sub-solver configuration, with semantic pruning to avoid redundant code branches.

## Contributions

- Introduces the design described above for Large-Scale Capacitated Vehicle Routing Problem.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
