---
id: lhns
short_title: LHNS
title: LLM-Driven Neighborhood Search for Efficient Heuristic Design
authors:
  - Zhuoliang Xie
  - Fei Liu
  - Zhenkun Wang
  - Qingfu Zhang
year: 2025
date: 2025-06-01
venue: IEEE CEC
paper_url: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11043025
code_url: https://github.com/Acquent0/LHNS
institutions:
  - sustech
  - cityu-hk
primary_dimension: search
dimensions:
  - search
  - design-object
problems:
  - Online Bin Packing
  - Traveling Salesman Problem
  - Admissible Set Construction
featured: false
summary: LHNS searches around an incumbent heuristic by deleting part of its code and asking an LLM to reconstruct a measured replacement.
---

## Why it matters

LHNS asks whether structured neighborhood search can improve heuristics without maintaining an evolutionary population.

## Core method

A candidate contains an algorithm description and executable code. The search removes a fraction of functional code lines and asks an LLM to reconstruct the missing logic. Execution on problem instances supplies its score.

The variable-neighborhood variant enlarges the deleted fraction after unsuccessful moves. The iterated-search variant adds perturbations after stagnation. The memory-based variant supplies useful code features from previous candidates. Simulated-annealing acceptance can retain worsening moves.

## Contributions

- Partial-code reconstruction as a controllable heuristic neighborhood.
- Three neighborhood-search variants evaluated on packing, routing and admissible-set construction.

## Strengths and limitations

Different variants lead on different tasks, and EoH remains stronger in some settings. Three repeated runs and evaluation-count comparisons do not establish universal wall-clock or monetary efficiency.

## What to improve

Adapt which code regions are removed, report total execution cost, and test stronger backends under matched budgets.

## Connections

EoH evolves a population of paired descriptions and programs. LHNS retains that representation but searches a single incumbent through partial-code reconstruction. This isolates a concrete population-search versus neighborhood-search choice.
