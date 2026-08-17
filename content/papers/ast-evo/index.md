---
id: ast-evo
short_title: "AST Operator"
title: "Breaking Validity-Induced Boundaries to Expand Algorithm Search Space: A Two-Stage AST-Based Operator for LLM-Driven Automated Heuristic Evolution"
authors:
  - "Shengmin Sun"
  - "Jialong Shi"
year: 2026
date: 2026-07-13
venue: "GECCO"
paper_url: https://arxiv.org/pdf/2604.16420
institutions:
  - xjtu
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "The two-stage AST operator deliberately permits structural disruption before repairing candidates into executable heuristics."
---

## Why it matters

Requiring every intermediate program to execute makes variation safe but conservative. Potentially useful structural changes may need to pass through an invalid intermediate form, a region that normal LLM mutation immediately rejects. This paper treats validity as a search boundary rather than only an engineering constraint.

## Core method

In stage one, parent heuristics are parsed into abstract syntax trees and subjected to structural crossover and mutation. These operations intentionally allow invalid intermediate code, called I-Code. In stage two, the LLM receives the disrupted structure and is asked only to repair it into an executable heuristic. The separation prevents pretrained semantic habits from suppressing structural exploration at the mutation step.

The operator is inserted into EoH-S and evaluated on TSP and online bin packing. Results and ablations compare convergence, final performance, and the effect of the two stages.

## Contributions

- A two-stage variation operator separating structural perturbation from semantic repair.
- I-Code as an explicit mechanism for crossing validity-induced boundaries.
- Evidence that the operator improves an existing LLM-AHD framework on two tasks.

## Strengths and limitations

AST edits are language-aware and more controllable than arbitrary text corruption. Their effectiveness depends on repair success, so additional LLM calls and discarded candidates may offset search gains. Two scoring-function tasks do not yet show that the method scales to multi-file or typed programs.

## What to improve

Use typed AST constraints to control destructive edits, report repair cost and invalidity rates, and test whether the operator reaches behaviorally novel regions rather than merely syntactically different code.

## Connections

The work modifies the variation operator inside EoH-S. It complements BehaveSim: AST mutation expands structural diversity, while behavioral similarity can test whether that structural diversity produces genuinely different algorithms.
