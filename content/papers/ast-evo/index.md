---
id: ast-evo
short_title: "AST Operator"
title: "Breaking Validity-Induced Boundaries to Expand Algorithm Search Space: A Two-Stage AST-Based Operator for LLM-Driven Automated Heuristic Evolution"
authors:
  - "Shengmin Sun"
  - "Jialong Shi"
year: 2026
date: 2026-04-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2604.16420
institutions:
  - xjtu
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "The two-stage AST operator deliberately permits structural disruption before repairing candidates into executable heuristics."
---

## Why it matters

The two-stage AST operator deliberately permits structural disruption before repairing candidates into executable heuristics.

## Core method

The search first edits abstract syntax trees beyond conservative validity-preserving transformations, then uses an LLM-assisted repair stage to restore executable code and evaluate new structural regions.

## Contributions

- Introduces the design described above for Combinatorial Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
