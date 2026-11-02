---
id: evoalloc
short_title: "EvoAlloc"
title: "EvoAlloc: A Self-Evolving Resource Allocation Agent for Efficient Program Evolution"
authors:
  - "Yanning Dai"
  - "Yuhui Wang"
  - "Nanbo Li"
  - "Wenyi Wang"
  - "Jürgen Schmidhuber"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.12086
institutions:
  - kaust
  - sakana-ai
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - "Evaluation allocation"
  - "Program evolution"
  - "Reasoning harnesses"
  - "Circle packing"
featured: false
summary: "EvoAlloc evolves an explicit evaluation-allocation strategy from observed decisions and audits randomly chosen rejected programs to expose false-pruning feedback."
---

## Why it matters

An allocator learns only from programs it evaluates, so an overly conservative policy can hide its own mistakes. The paper makes evaluation allocation an evolving, auditable component of program search.

## Core method

A fixed LLM reads the candidate, parent and sibling evidence, budget, an explicit strategy, and accumulated experiences. It selects full evaluation, discard, or—where available—a partial test followed by continuation or stopping. Periodic consolidation records supporting and contradicting cases with tentative, active, or stale status. A challenger strategy is compared with the incumbent on future disagreements; the union of requested evaluations is executed so neither policy censors the other's evidence. Adoption first minimizes missed new bests, then full and partial evaluation cost. Independently, a fixed probability sends rejected candidates to full evaluation, and those counterexamples inform later strategy updates and can re-enter the program archive.

## Contributions

- Separates an evolving allocation policy from the unchanged program generator and evaluator.
- Implements the mechanism inside ShinkaEvolve and reports five-seed comparisons on AIME reasoning-harness optimization and circle-packing programs.

## Strengths and limitations

The two tasks provide contrasting partial-evaluation access but limited domain breadth. Allocation experience is confined to one run, and the challenger check stops after only two fully observed disagreements. Efficiency is reported in full evaluations and LLM tokens rather than a universal hardware-cost measure. The initial strategy summarizes 50 cases from five baseline runs, whose acquisition cost is excluded from reported search costs. Code is promised upon acceptance.

## What to improve

Calibrate the rejected-candidate audit rate, use stronger uncertainty estimates for strategy adoption, and test cross-run experience transfer and heterogeneous evaluator costs.

## Connections

[ShinkaEvolve](../shinkaevolve/index.md) supplies the underlying archive and evolutionary pipeline. EvoAlloc extends its evaluation stage with strategy revision and counterfactual checks, while keeping generation and the task evaluator fixed.
