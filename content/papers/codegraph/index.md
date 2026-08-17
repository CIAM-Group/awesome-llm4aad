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

Whole-program evolution repeatedly regenerates common scaffolding and discards every part of a weak candidate, even when one fragment is valuable. Under a tight evaluation budget, that is an expensive loss of partial progress. Code Graph introduces a representation intended to retain and recombine such fragments.

## Core method

The graph stores algorithms as source-to-sink paths; edges carry code and complete paths reconstruct executable candidates. When a new program is evaluated, reusable differences can be merged into the graph instead of surviving only inside one monolithic individual. Search samples graph-supported combinations and uses evaluation evidence to choose expansion regions.

Experiments emphasize performance as a function of expensive evaluator calls, directly testing the claimed budget advantage against whole-program baselines.

## Contributions

- A persistent graph representation for partial code inheritance.
- Candidate construction through recombination of evaluated structures.
- Evaluation framed around limited algorithm-design budgets.

## Strengths and limitations

The graph makes lineage and reuse explicit and can rescue useful components from weak programs. Decomposing arbitrary code is difficult: fragments can have hidden dependencies, and graph growth may accumulate incompatible paths.

## What to improve

Add typed interfaces and dependency checks, prune by uncertainty rather than raw fitness alone, and measure whether fragments transfer between tasks instead of only within one run.

## Connections

Code Graph changes the unit of inheritance relative to population-based EoH. It complements A2DEPT: one stores a cross-candidate graph, while the other represents each solver as a program tree.
