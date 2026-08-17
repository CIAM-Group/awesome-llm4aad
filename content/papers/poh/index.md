---
id: poh
short_title: "PoH"
title: "Planning of Heuristics: Strategic Planning on Large Language Models with Monte Carlo Tree Search for Automating Heuristic Optimization"
authors:
  - "Chaoxu Mu"
  - "Xufeng Zhang"
  - "Hui Wang"
year: 2025
date: 2025-02-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2502.11422
institutions:
  - affiliation-pending
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Traveling Salesman Problem"
  - "Flow Shop Scheduling Problem"
featured: false
summary: "Planning of Heuristics combines LLM self-reflection with Monte Carlo tree search to plan multi-step heuristic improvements."
---

## Why it matters

Planning of Heuristics combines LLM self-reflection with Monte Carlo tree search to plan multi-step heuristic improvements.

## Core method

Heuristics form states, improvement suggestions form actions, and evaluation results provide rewards. Tree search simulates future refinements before committing evaluation budget.

## Contributions

- Introduces the design described above for Traveling Salesman Problem, Flow Shop Scheduling Problem.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
