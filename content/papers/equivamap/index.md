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
date: 2025-07-01
venue: "ICML"
paper_url: https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhai25a/zhai25a.pdf
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

EquivaMap checks whether two optimization formulations preserve feasibility and optimality under an LLM-proposed variable mapping.

## Core method

The work defines Quasi-Karp equivalence, asks an LLM to identify decision-variable mappings, and verifies those mappings structurally on the EquivaFormulation dataset.

## Contributions

- Introduces the design described above for Optimization Formulation Equivalence.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
