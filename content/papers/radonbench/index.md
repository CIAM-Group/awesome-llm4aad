---
id: radonbench
short_title: "RadonBench"
title: "RadonBench: A Benchmark of Classical and Learning-Guided Search Techniques for Problems in Combinatorial Geometry"
authors:
  - "Xiaoan Xu"
  - "Ethan X. Fang"
  - "Jesus A. De Loera"
  - "Junwei Lu"
  - "Luze Xu"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.33259
institutions:
  - duke
  - uc-davis
  - harvard
  - hkust
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
  - search
problems:
  - "Combinatorial Geometry"
  - "Mathematical Construction Search"
featured: false
summary: "Compares classical and learning-guided Radon-free lattice search using one verifier while separating valid smaller constructions from target-sized near misses."
---

## Why it matters

Different construction spaces and stopping rules can make unsuccessful mathematical searches appear incomparable—or make a near miss sound like a discovery.

## Core method

RadonBench seeks eleven-point configurations in integer three-space and twenty-one-point configurations in integer four-space. A shared evaluator checks convex position, enumerates lattice points, and uses feasibility tests to count integral Radon points. Success requires the exact target cardinality and zero such points.

The benchmark compares fixed-seed exhaustive extension, greedy point moves, PatternBoost, AlphaZero-style construction, and OpenEvolve-based program evolution. In the latter, an LLM edits four constructor functions; a protected wrapper supplies sixteen reference configurations and caps verifier calls and returned candidates. An island archive retains programs using fitness and behavioral features. Returned coordinates are independently replayed.

## Contributions

The reporting contract distinguishes the largest verified Radon-free construction from the best target-sized violation count and documents each method's reachable domain.

## Strengths and limitations

No audited run reaches either open target. PatternBoost and AlphaZero reach valid sizes ten and twenty; local search and program evolution reach target-sized configurations with one Radon point. These are near misses, not improved mathematical bounds. Domains and compute are unmatched, and exhaustive coverage applies only to declared fixed-seed boxes.

## What to improve

Match verifier and token budgets, repeat program-evolution runs, and release independently checkable witnesses and audit traces.

## Connections

The program-evolution track adapts [AlphaEvolve](../alphaevolve/index.md) to lattice constructors. The benchmark's contribution is shared verification and honest output semantics, not evidence that evolutionary search dominates the alternatives.
