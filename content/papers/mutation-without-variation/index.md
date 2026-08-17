---
id: mutation-without-variation
short_title: "Mutation Dynamics"
title: "Mutation Without Variation: Convergence Dynamics in LLM-Driven Program Evolution"
authors:
  - "Can Gurkan"
  - "Forrest Stonedahl"
  - "Uri Wilensky"
year: 2026
date: 2026-07-13
venue: "GECCO Workshop"
paper_url: https://arxiv.org/pdf/2606.05408
code_url: https://github.com/can-gurkan/lmca
institutions:
  - northwestern
  - augustana
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - design-object
problems:
  - "Program Evolution Dynamics"
featured: false
summary: "Mutation Without Variation measures how repeated LLM program mutations converge toward attractor regions without selection pressure."
---

## Why it matters

LLM evolution can appear exploratory while repeatedly returning to the same structures. This study isolates mutation dynamics so that future AHD systems can distinguish genuine diversity from surface-level edits.

## Core method

The authors run repeated mutation chains in a domain-specific language, varying prompts, models, and stochastic replicas. Structural recurrence, cycles, and self-loops are compared with a classical GP subtree-mutation baseline.

## Contributions

- A controlled study of LLM mutation without selection.
- Evidence that structural convergence can be much stronger than textual variation.
- A useful diagnostic for diversity mechanisms in program evolution.

## Limitations and extensions

The experiments use a controlled program language rather than full optimization solvers. Future work should connect convergence statistics to downstream heuristic quality and archive design.
