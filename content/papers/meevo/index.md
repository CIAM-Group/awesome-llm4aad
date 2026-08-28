---
id: meevo
short_title: "MeEvo"
title: "MeEvo: Metacognitive Evolution Combined with Natural Evolution for Automatic Heuristic Design"
authors:
  - "Zishang Qiu"
  - "Xinan Chen"
  - "Rong Qu"
  - "Ruibin Bai"
year: 2026
date: 2026-06-12
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2606.14202
code_url: https://github.com/Qzs1335/MeEvo
institutions:
  - nottingham-ningbo
  - nottingham
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "MeEvo couples population-based program evolution with metacognitive reflection over the reasoning behind candidate heuristics."
---

## Why it matters

Natural evolution retains strong code but often loses the design reasoning behind it. Reflection preserves verbal lessons but can narrow the search around one trajectory. MeEvo combines population diversity with an explicit metacognitive process that critiques how candidates were conceived and tested.

## Core method

The natural-evolution cycle generates and selects executable heuristic programs. Alongside code and fitness, the system records rationales, errors, and outcomes in shared history. A metacognitive cycle periodically reads that history, diagnoses recurring design failures, extracts higher-level lessons, and turns those lessons into new candidates or guidance for the population.

Combinatorial-optimization experiments compare natural-only, reflection-only, and coupled variants, with ablations aimed at the interaction between the two cycles.

## Contributions

- A dual-cycle architecture linking population evolution and metacognitive reflection.
- Shared history that preserves both program outcomes and design rationale.
- Empirical separation of the two mechanisms and their combined effect.

## Strengths and limitations

The architecture preserves multiple executable alternatives while making accumulated reasoning reusable. Reflections can be verbose, unfaithful, or anchored to accidental correlations in fitness. Extra metacognitive calls also need to justify their cost against simply evaluating more programs.

## What to improve

Ground every lesson in cited candidates and counterexamples, compress history by behavioral evidence, and test whether learned design principles transfer to unseen tasks.

## Connections

MeEvo extends the reflective line represented by ReEvo but explicitly couples reflection with natural population evolution. Knowledge-first goes further by making the abstract knowledge itself the primary search object.
