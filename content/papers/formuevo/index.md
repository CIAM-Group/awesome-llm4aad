---
id: formuevo
short_title: FormuEvo
title: "FormuEvo: LLM-Guided Evolution for Discovering Solver-Efficient Mixed-Integer Programming Formulations"
authors:
  - Haofeng Yuan
  - Jianing Peng
  - Jieyi Bi
  - Ni Zhang
  - Shiji Song
  - Zhiguang Cao
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.23353
code_url: https://github.com/Xyz-yuanhf/formuevo
institutions:
  - tsinghua
  - ntu
  - smu
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - search
problems:
  - Mixed-Integer Programming Formulation
  - Solver Efficiency
  - Neural Network Verification
featured: false
summary: Evolves executable MIP formulations using solver-internal diagnostics and reusable modeling memories, targeting faster solution without changing the intended problem.
---

## Why it matters

Equivalent-looking formulations can have very different relaxation strength, symmetry, presolve cost, and branch-and-bound behavior.

## Core method

A generator initializes and evolves a population of solver-modeling programs from a problem description and template. Execution checks include comparison of solved objectives with known values; failed candidates receive bounded repair. Valid candidates are ranked by shifted geometric mean runtime across development instances.

Before crossover or mutation, a diagnostic agent inspects presolve information, relaxation quality, and search-tree statistics to propose structural changes. A reflector records condition–strategy–effect memories from parent/child outcomes, including failures. A distiller removes instance-specific details for transfer to other problems. Final formulations are tested on larger held-out instances, while the commercial solver itself stays fixed.


## Contributions

Moves algorithm discovery into the symbolic formulation layer and uses white-box solver behavior to guide edits beyond scalar runtime.

## Strengths and limitations

Tests include several MILP/MINLP families and less standard verification/mathematical tasks. Matching objectives on finite instances does not prove global equivalence; the method targets static formulations, not complete dynamic decomposition algorithms.

## What to improve

Add independent semantic-equivalence checks and robust timing protocols, and test whether transferred memory remains valid under different solvers and formulation families.

## Connections

[Constraint Reform.](../constraint-reformulation/index.md) also searches solver-facing model code. FormuEvo emphasizes solver-internal diagnosis and transfer memory, whereas that study emphasizes runtime-profile diversity and solution-level validity for satisfaction models.
