---
id: quantumevo
short_title: QuantumEvo
title: LLM-Driven Algorithm Design for Quantum Circuit Synthesis based on Binary Decision Diagrams
authors:
  - Yoonju Sim
  - Federico Berto
  - Chuanbo Hua
  - Jinkyoo Park
  - Changhyun Kwon
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.05327
code_url: https://github.com/syj5268/Quantumevo
institutions:
  - kaist
  - radical-numerics
  - omelet
primary_dimension: scope
dimensions:
  - scope
  - feedback
problems:
  - BDD Variable Ordering
  - Reversible Circuit Synthesis
featured: false
summary: Adapts reflective program evolution to CUDD variable-ordering heuristics, scoring the quantum cost of synthesized circuits rather than BDD size.
---

## Why it matters

A smaller binary decision diagram need not yield the cheapest reversible circuit. Optimizing an intermediate representation can therefore miss the downstream objective.

## Core method

QuantumEvo explicitly builds on ReEvo's reflective evolutionary search. Each candidate is a compiled C function using the CUDD library to reorder a BDD. The population starts from sifting, genetic-algorithm, and simulated-annealing heuristics, giving the LLM several algorithmic families to recombine.

Candidate orderings pass through a fixed reversible-synthesis procedure. Fitness averages relative quantum circuit cost against the best classical baseline for each search instance; stochastic candidates receive repeated evaluation. A separate validation set selects among evolutionary runs before a final benchmark of 148 functions. The selected HGA-QE heuristic combines genetic search and local refinement, rather than generating a bespoke quantum circuit directly for each input.

## Contributions

- Connects generated ordering code to the final circuit-cost objective.
- Tests initialization diversity, LLM guidance, and the choice of downstream versus proxy fitness separately.

## Strengths and limitations

Search, validation, and final benchmark functions are separated. Non-LLM evolution remains competitive, so the added inference cost is not automatically justified. Only variable ordering is evolved; the fixed synthesis procedure still controls other resource trade-offs, including ancilla use.

## What to improve

Study selective LLM invocation and joint circuit-resource objectives, with complete discovery-cost accounting and alternative synthesis backends.

## Connections

[ReEvo](../reevo/index.md) is a documented methodological source. QuantumEvo adapts its reflective search to compiled BDD ordering and changes feedback to downstream circuit cost.
