---
id: hmace
short_title: "HMACE"
title: "HMACE: Heterogeneous Multi-Agent Collaborative Evolution for Combinatorial Optimization"
authors:
  - "Yuping Yan"
  - "Jirui Han"
  - "Fei Ming"
  - "Yuanshuai Li"
  - "Yaochu Jin"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.07214
institutions:
  - affiliation-pending
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Traveling Salesman Problem"
  - "Online Bin Packing"
  - "Multiple Knapsack Problem"
  - "Permutation Flow Shop Scheduling"
featured: false
summary: "HMACE assigns proposal, generation, evaluation, and reflection to specialized agents in a memory-backed evolutionary workflow."
---

## Why it matters

HMACE assigns proposal, generation, evaluation, and reflection to specialized agents in a memory-backed evolutionary workflow.

## Core method

Four heterogeneous agents coordinate each generation. Behavior-aware retrieval, inexpensive candidate filtering, and a fitness-grounded archive reduce repeated evaluations and preserve useful search experience.

## Contributions

- Introduces the design described above for Traveling Salesman Problem, Online Bin Packing, Multiple Knapsack Problem, Permutation Flow Shop Scheduling.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
