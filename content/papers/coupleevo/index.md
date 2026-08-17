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
code_url: https://github.com/tb-git-kit-research/CoupleEvo
institutions:
  - kit
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

Many practical problems cannot be optimized by one heuristic in isolation: decisions in one subproblem alter the state and objective faced by another. Evolving each part independently ignores coupling, while evolving everything together creates a much larger search space.

## Core method

Sequential evolution optimizes one subproblem and freezes it before moving to the next. Iterative evolution alternates between subproblems so later changes can respond to earlier ones. Integrated evolution generates all heuristics jointly. In every scheme, candidate sets are scored by the end-to-end coupled objective rather than isolated subproblem fitness.

Two coupled optimization problems compare convergence and final quality. Decomposition-based sequential and iterative strategies are more stable, while integrated search exhibits higher variance and complexity.

## Contributions

- Formalizes coordination choices for multi-heuristic LLM evolution.
- Directly compares sequential, alternating, and joint design.
- Releases prompts, implementations, and best heuristics for the coupled tasks.

## Strengths and limitations

The comparison exposes a decision that single-component AHD avoids. Freezing components can lock in early mistakes, while iterative and integrated schemes multiply evaluation cost. Two examples are insufficient to prescribe one strategy for every coupling structure.

## What to improve

Use dependency graphs to schedule updates, attribute global reward to individual heuristics, and test asymmetric settings where one subproblem dominates cost or uncertainty.

## Connections

CoupleEvo broadens EoH from one heuristic to several interacting ones. E2OC studies coordination inside multi-objective algorithms, while Stable targets more general multicomponent structure.
