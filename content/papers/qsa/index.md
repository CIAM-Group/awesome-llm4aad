---
id: qsa
short_title: QSA
title: 'Toward Quantum Software Automation: A Quantum-Aware Harness for LLM-Guided Evolution'
authors: [Lily Jiaxin Wan, Deming Chen, Klara Nahrstedt, Bo Chen]
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.38883
institutions: [uiuc]
primary_dimension: feedback
dimensions: [feedback, scope, search]
problems: [Quantum Compiler Optimization, Quantum Multiprogramming, Error Mitigation]
featured: false
summary: Wraps program evolution in quantum-specific low-cost verification, static and execution-state feedback, and rewards tailored to compiler transformations and runtime policies.
---

## Why it matters

Quantum-software candidates are expensive to score through simulation or hardware execution. Generic code-and-score prompts also hide the circuit transformations and resource interactions that explain performance.

## Core method

QSA uses OpenEvolve as its program-search engine. Preliminary evolution identifies difficult circuit scales; a verification coreset preserves circuit-type diversity at those scales. Lightweight structural proxies replace repeated expensive fidelity estimation during search, while final programs are checked on the full suite.

Static circuit profiles expose width, depth, gate counts, and DAG features. Instrumented operators provide intermediate snapshots so mutation prompts can localize harmful transformations. Compiler-oriented rewards combine normalized quality/cost metrics. For a runtime policy, quantum jobs or bundles—not candidate programs—receive Pareto ranks; the selected jobs' average rank and the policy's correlation with ground-truth ranks across the job pool form a scalar program reward. Engineers specify the initial component, implementation, and objectives; the harness automates subsequent revisions and evaluation.

## Contributions

IBM Quantum experiments examine multiprogramming and error-mitigation software across three benchmark suites, with repeated evolution trials and harness ablations. The method reports improved fidelity/utilization and markedly reduced mitigation time, while accounting separately for API cost and elapsed evolution time.

## Strengths and limitations

The coreset and proxies make quantum evaluation tractable, but proxy rankings can fail outside the measured circuit scales or noise regimes. The system is semi-automated and component-scoped, not autonomous creation of arbitrary quantum software. Generalization to other hardware requires suitable measurable objectives and exposed execution feedback.

## What to improve

Use uncertainty-triggered full-fidelity checks, audit cross-platform proxy calibration, and compare complete verification costs including coreset construction.

## Connections

QSA applies the [AlphaEvolve](../alphaevolve/index.md)-style program-evolution loop through OpenEvolve to quantum compiler passes and runtime policies. Its quantum-specific contribution is the verification, execution context and reward harness, not a direct modification of the AlphaEvolve implementation.
