---
id: tcsalgbench
short_title: TCSAlgBench
title: "TCSAlgBench: Benchmarking Automated Proving for Research-Level Theoretical Computer Science"
authors:
  - Chutong Yang
  - Xiyuan Zhang
  - Yu Huang
  - Boran Han
  - Soonho Kong
  - Shuai Zhang
  - Vihang Prakash Patil
  - Zhen Han
  - Michael Bohlke-Schneider
  - Bernie Wang
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.35606
institutions:
  - ut-austin
  - amazon
  - university-pennsylvania
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - Theoretical Algorithm Design
  - Natural-Language Proof Discovery
featured: false
summary: Evaluates research-level algorithmic proof discovery using versioned theorem challenges with necessary context but withheld target constructions and proofs.
---

## Why it matters

An algorithmic improvement requires a valid argument about correctness and complexity, not only favorable empirical results.

## Core method

A source-processing pipeline extracts theorem dependencies from STOC/COLT papers and constructs self-contained challenges. Definitions and assumptions are restored without supplying the target proof; when algorithm construction is part of the challenge, the construction is withheld while the required guarantees remain. An offline sandbox exposes only permitted cited prior work.

Provers return natural-language proofs. A citation-organizing step checks referenced statements, and separately sampled verifier votes determine acceptance. Workflow comparisons match model-call opportunities while reporting token costs separately. A supplementary pipeline compiles provisional Lean theorem statements and checks their intended meaning; it does not formally prove the generated natural-language solutions.


## Contributions

Builds refreshable, source-versioned evaluation for theoretical algorithm discovery and compares discussion, decomposition, and planning workflows.

## Strengths and limitations

Carefully withheld constructions make some tasks genuine design-and-proof problems. Main scores remain LLM-verifier acceptance with limited expert auditing, and published source material leaves contamination risk; this is a theoretical-adjacent benchmark, not executable heuristic search.

## What to improve

Expand independent proof audits and formal verification, and distinguish algorithm-construction tasks from lower-bound proofs when reporting algorithm-design capability.

## Connections

[When AI Designs AI](../when-ai-designs-ai/index.md) evaluates empirical performance and design differences. TCSAlgBench adds a distinct assessment axis—whether a proposed computational improvement can be justified with a checkable argument—without claiming that proof acceptance measures implementation quality.
