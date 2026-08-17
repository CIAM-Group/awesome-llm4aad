---
id: laf-mcts
short_title: "LaF-MCTS"
title: "Automated Large-scale CVRP Solver Design via LLM-assisted Flexible MCTS"
authors:
  - "Tong Guo"
  - "Caishun Chen"
  - "Yew Soon Ong"
year: 2026
date: 2026-05-05
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

Large-scale CVRP with hundreds or thousands of nodes is difficult even for strong solvers. Divide-and-conquer helps, but its decomposition rule and sub-solver configuration are tightly coupled and labor-intensive to design. A single thought-to-code mutation is too coarse for this solver architecture.

## Core method

LaF-MCTS uses a three-tier decision hierarchy to build the solver incrementally: high-level framework choices, decomposition-policy logic, and sub-solver configuration. LLM proposals populate tree branches and executable CVRP evaluation supplies rewards. Semantic pruning removes structurally or meaningfully redundant programs, while branch regrowth replaces unproductive regions and restores diversity.

CVRPLib experiments show automatically composed decomposition-enhanced solvers outperforming several state-of-the-art CVRP solvers in the reported large-scale settings.

## Contributions

- A hierarchical search space matching the structure of divide-and-conquer routing solvers.
- Flexible MCTS with semantic pruning and branch regrowth.
- Joint automation of decomposition policy and sub-solver configuration.

## Strengths and limitations

The hierarchy makes complex solver synthesis manageable and branch regrowth addresses early MCTS mistakes. The tiers encode substantial CVRP expertise, semantic pruning can remove superficially similar but behaviorally distinct code, and evaluation of large instances is expensive.

## What to improve

Use execution-based similarity for pruning, transfer decomposers across scale distributions, and compare with automated configuration baselines under equal wall-clock budgets.

## Connections

LaF-MCTS specializes tree-structured AHD for large-scale CVRP. Relative to MCTS-AHD, its tree is a three-tier solver-design hierarchy with explicit pruning and regrowth.
