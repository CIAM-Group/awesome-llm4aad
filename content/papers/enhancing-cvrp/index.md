---
id: enhancing-cvrp
short_title: "AILS-AHD"
title: "Enhancing CVRP Solver through LLM-driven Automatic Heuristic Design"
authors:
  - "Zhuoliang Xie"
  - "Fei Liu"
  - "Zhenkun Wang"
  - "Qingfu Zhang"
year: 2026
date: 2026-02-26
venue: arXiv
paper_url: https://arxiv.org/pdf/2602.23092
institutions:
  - sustech
  - cityu-hk
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - "Capacitated Vehicle Routing Problem"
featured: false
summary: "AILS-AHD evolves ruin heuristics inside adaptive iterated local search and adds an LLM-based acceleration mechanism for CVRP."
---

## Why it matters

CVRP solvers depend on carefully tuned destroy and repair behavior. This paper turns that component-level engineering into an executable LLM-guided search problem while keeping the surrounding AILS solver intact.

## Core method

An evolutionary loop proposes and evaluates ruin heuristics for AILS. A separate language-model acceleration mechanism reduces the cost of testing and refining candidates. The resulting solver is compared with AILS-II, HGS, and other CVRP baselines on moderate and large instances.

## Contributions

- Automatic generation of ruin heuristics for an AILS backbone.
- An acceleration path for expensive candidate evaluation.
- Competitive results across CVRP scales and solver baselines.

## Limitations and extensions

The design remains tied to CVRP and the AILS interface. A useful extension would test whether the learned ruin operators transfer to other routing backbones without re-evolution.
