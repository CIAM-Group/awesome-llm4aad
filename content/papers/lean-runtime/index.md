---
id: lean-runtime
short_title: "Lean Runtime"
title: "Agentic Algorithm Design: LLMs that Propose, Formalise, and Prove Runtime Bounds for Evolutionary Algorithms in Lean"
authors:
  - "Per Kristian Lehre"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.35595
institutions:
  - university-birmingham
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - "Black-box optimization"
  - "Evolutionary algorithm design"
  - "Formal runtime analysis"
featured: false
summary: "A staged LLM pipeline designs black-box optimizers and potential functions, then uses Lean-checked drift certificates to establish expected query-runtime bounds without empirical fitness comparisons."
---

## Why it matters

Empirical success on benchmark instances does not establish that a generated optimizer is efficient for an entire problem class. This work couples algorithm invention with machine-checked expected-runtime analysis.

## Core method

Starting from a formal problem card and a random-search baseline, the agent first proposes informal algorithm alternatives, then formalizes state, initialization, query, and transition functions in Lean. Proof guards enforce properties including measurability, reachability, use of randomness, and dependence on oracle fitness; failed formal stages trigger repair or backtracking. The agent next invents a normalized potential function and certifies that its zero set corresponds to optima. It defines improvement, worsening, and direct-hit events and proves their probability bounds. A pre-proved additive-drift result combines those certificates into an expected-runtime bound. The completed algorithm and bound can seed another generation; numerical benchmark scores never select designs.

## Contributions

- Demonstrates a single pipeline producing both algorithm definitions and checked stochastic runtime guarantees.
- Reports completion in 12 of 15 frontier-model runs across eight problem classes, including an O(n²) CycleUncover design and integer-valued submodular minimization.

## Strengths and limitations

The proofs certify the stated black-box query model, not unrestricted wall-clock efficiency: two successful designs use uncharged offline exact solving. Nine completed runs give polynomial bounds without that loophole. Simplified additive drift yields loose bounds, searches are restricted to bitstrings, open-weight models failed, and costly runs prevent a strong statistical study.

## What to improve

Charge internal computation explicitly, provide richer drift theorems, audit specifications for unintended witnesses, and repeat designs across seeds and models.

## Connections

Both make Lean proof obligations constrain generated search algorithms, but organize synthesis differently. [LeanPlan](../leanplan/index.md) lets a coding agent revise a domain heuristic and admissibility proof, then independently rebuilds and tests the final candidate. Lean Runtime uses a prescribed sequence of algorithm definitions, structural guards, potential construction and drift certificates. This contrasts an open revision loop with staged proof-guided construction, without treating optimality and runtime guarantees as interchangeable.
