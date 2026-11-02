---
id: adsd
short_title: ADSD
title: Training Numerical Intelligence via Auto-Diagnosis and Skill Discovery
authors: [Peter Chen, Wotao Yin]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.03872
institutions: [uc-berkeley, alibaba-damo]
primary_dimension: feedback
dimensions: [feedback, design-object, scope]
problems: [Numerical Solver Improvement, Power Flow, ODE Integration, Elliptic PDEs]
featured: false
summary: Converts solver traces into tested numerical diagnoses, then retrieves, audits, and implements literature-backed methods as reusable solver-improvement skills.
---

## Why it matters

A residual or runtime score can reveal a failing solver without identifying stiffness, poor conditioning, or another actionable numerical cause. Blind code revision does not guarantee acquisition of the right mathematical method.

## Core method

An agent first builds and freezes a baseline solver and records public-case trajectories. Literature screening identifies symptom–condition claims; full-paper evidence is grouped into executable diagnostic probes. Hypotheses developed on diagnosis subsets become deterministic detectors and must pass a separate public verification pool before guiding improvement.

For each verified diagnosis, the agent retrieves relevant numerical methods, records assumptions and page-level evidence, and performs a separate theory audit. Candidate implementations are tested before being frozen into skill packets containing code, instructions, and a claim dossier. The same base agent then receives its original solver plus these packets to construct an improved solver. Private cases remain outside the development loop, and off-the-shelf solver implementations are prohibited.

## Contributions

Power flow, AC optimal power flow, stiff ODEs, and heterogeneous diffusion PDEs test the diagnosis-to-implementation pipeline. Ablations compare with direct and recursive self-improvement under the evaluated agent budgets; transfer tests change grid topology and operating regimes.

## Strengths and limitations

The method makes numerical evidence and implementation provenance explicit. A detector's high empirical support is not a causal theorem, and theoretical audits still depend on agent reasoning. Results rely on a curated literature database and the baseline-generation restrictions; complete discovery cost matters alongside final solver runtime.

## What to improve

Audit diagnostic false positives, test contradictory or inapplicable literature, and isolate the effects of retrieval, theory checking, and executable skill reuse.

## Connections

Both turn execution traces into diagnostic knowledge for subsequent solver code. [TRACE](../trace/index.md) generates schema-specific analysis programs that extract insights or callable surrogates from a shared log buffer. ADSD builds literature-grounded probes, verifies diagnostic hypotheses on a separate public pool, and audits the methods packaged as solver skills. The contrast is how actionable diagnoses acquire evidence, not a claim that either framework inherits the other.
