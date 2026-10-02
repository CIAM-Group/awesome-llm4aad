---
id: evopinn
short_title: EvoPINN
title: "EvoPINN: Agentic Discovery of Executable Algorithms for Physics-Informed Neural Networks"
authors:
  - Peng Yin
  - Kai Li
  - Yifan Zhang
  - Jian Cheng
year: 2026
date: 2026-07-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2607.26490
institutions:
  - university-chinese-academy-sciences
  - casia
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Physics-Informed Neural Networks
  - PDE Solver Design
featured: false
summary: Evolves PINN representation and training programs one module at a time, using diagnostics and constrained execution tests to evaluate structural changes.
---

## Why it matters

Changing neural representation and training logic together makes useful mechanisms hard to identify and can conceal gains from simply spending more compute.

## Core method

An individual contains a representation module and a training-program module. A UCB-style scheduler chooses which one to edit, leaving the other fixed. Training diagnostics, successful motifs, failed proposal families, and diverse search focuses condition parallel LLM proposals.

Candidates must differ under both ordinary and normalized syntax trees, excluding formatting, renaming, and constant-only changes. Small-instance execution tests check compatibility and differentiability, with bounded repairs. Full evaluations share training-step and sampling budgets. Selected designs are frozen and retrained on independent seeds, with final error measured on a disjoint reporting set. The discovered SLRC-PINN receives additional parameter-matched analysis rather than being judged only by search fitness.


## Contributions

Combines module-level credit assignment, structural-change checks, and budget-matched numerical evaluation for executable PINN discovery.

## Strengths and limitations

The verification pipeline filters trivial or invalid changes, and four PDE regimes test more than one equation. Syntax difference does not establish mathematical novelty or correctness; nearby-parameter transfer is narrower than arbitrary PDE generalization.

## What to improve

Add stronger numerical invariants and broader PDE shifts, and isolate scheduler, memory, representation, and training-program contributions under total compute accounting.

## Connections

[ADSL-PDE](../adsl-pde/index.md) tackles the same implementation-validity bottleneck with a typed solver language. EvoPINN retains executable module edits and checks them after generation; this is a representation/verification contrast, not an asserted lineage.
