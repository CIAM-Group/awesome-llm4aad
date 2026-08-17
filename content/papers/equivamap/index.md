---
id: equivamap
short_title: "EquivaMap"
title: "EquivaMap: Leveraging LLMs for Automatic Equivalence Checking of Optimization Formulations"
authors:
  - "Haotian Zhai"
  - "Connor Lawless"
  - "Ellen Vitercik"
  - "Liu Leqi"
year: 2025
date: 2025-07-13
venue: "ICML"
paper_url: https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhai25a/zhai25a.pdf
code_url: https://github.com/HumainLab/EquivaMap
institutions:
  - ut-austin
  - stanford
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Optimization Formulation Equivalence"
featured: false
summary: "EquivaMap checks whether two optimization formulations preserve feasibility and optimality under an LLM-proposed variable mapping."
---

## Why it matters

Optimization copilots can produce formulations that look different yet encode the same problem, or look plausible while changing feasibility. Text similarity, a few solver outputs, and exact syntax are unreliable correctness tests. EquivaMap turns semantic equivalence into an explicit verification task.

## Core method

Given two formulations, the LLM proposes a structured mapping between variables and mathematical components. EquivaMap then checks the mapping against Quasi-Karp equivalence conditions, separating hypothesis generation from programmatic verification. EquivaFormulation supplies equivalent and non-equivalent pairs with controlled transformations.

Experiments compare the pipeline with LLM-only judgments and simpler heuristics, analyzing mapping quality and final verification accuracy.

## Contributions

- A formal equivalence target tailored to optimization formulations.
- A propose-then-verify pipeline combining LLM flexibility with deterministic checks.
- The public EquivaFormulation dataset and implementation.

## Strengths and limitations

Verification grounds the LLM and produces more diagnostic failures than a binary judgment. The approach still depends on proposing the right mapping; failure to find one is not proof of non-equivalence. The dataset covers a bounded transformation family.

## What to improve

Search over multiple mapping hypotheses, generate counterexamples for failed equivalence, and extend coverage to nonlinear, stochastic, and decomposition-based formulations.

## Connections

EquivaMap is a verification component for automatic optimization modeling. It can sit downstream of ORLM or LLMOPT before solver execution.
