---
id: ceoh
short_title: "CEoH"
title: "Leveraging Large Language Models to Develop Heuristics for Emerging Optimization Problems"
authors:
  - "Thomas Bömer"
  - "Nico Koltermann"
  - "Max Disselnmeyer"
  - "Laura Dörr"
  - "Anne Meyer"
year: 2025
date: 2025-03-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2503.03350
institutions:
  - tu-dortmund
  - kit
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Unit-Load Pre-Marshalling Problem"
featured: false
summary: "CEoH adds explicit problem context to EoH for optimization domains with little public heuristic knowledge."
---

## Why it matters

CEoH adds explicit problem context to EoH for optimization domains with little public heuristic knowledge.

## Core method

Problem descriptions and domain context are inserted into the evolutionary prompting loop, helping smaller models generate compatible constructive heuristics for the unit-load pre-marshalling problem.

## Contributions

- Introduces the design described above for Unit-Load Pre-Marshalling Problem.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
