---
id: leanplan
short_title: LeanPlan
title: 'LeanPlan: Optimal Planning with LLM-Generated Heuristics and Admissibility Proofs'
authors: [André G. Pereira, Augusto B. Corrêa, Felipe Meneguzzi, Jendrik Seipp]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.08246
institutions: [ufrgs, oxford, aberdeen, linkoping-university]
primary_dimension: feedback
dimensions: [feedback, design-object, scope]
problems: [Optimal Symbolic Planning, Verified Heuristic Design]
featured: false
summary: Jointly generates domain-specific planning heuristics, checked task assumptions, and Lean admissibility proofs, using planner performance as the optimization signal.
---

## Why it matters

An effective learned heuristic need not be admissible, so using it in A* can sacrifice optimality. Numerical success on training tasks cannot establish the required universal property.

## Core method

A deterministic translator compiles a unit-cost STRIPS domain into Lean definitions. The coding agent develops a reusable heuristic, a certificate checking its required domain assumptions, and proofs of goal awareness and consistency on reachable states. Compilation failures, proof failures, and measured planner runs guide revisions.

An independent controller rejects proof shortcuts and new axioms, rebuilds the artifacts, checks theorem dependencies and training-task certificates, and reruns planning. Acceptance also requires at least the baseline's training coverage and fewer total expansions on shared solved tasks. New instances must pass the certificate before the heuristic is used. Shared grounding and search theorems connect the compiled heuristic to returned-plan validity and conditional optimality.

## Contributions

Heuristics and proofs are generated for ten IPC and three new domains. Tests include instances much larger than training tasks; the planner improves aggregate coverage and typically reduces expansions, without dominating every domain.

## Strengths and limitations

Proofs concern executed heuristics rather than an unrelated mathematical surrogate. Guarantees apply only when certificates pass and returned plan cost is below the stated bound; unsolvability is not certified. Parser, formalized semantics, and Lean infrastructure remain trusted. Support is limited to unit-cost STRIPS.

## What to improve

Expand to action costs and richer PDDL, audit the trusted parsing boundary, and measure proof-development cost across models and difficult domains.

## Connections

[A-CEoH](../a-ceoh/index.md) supplies host-A* context and selects heuristics by time-limited solution quality. LeanPlan instead requires domain certificates and machine-checked goal-awareness and consistency before comparing planning performance. The contrast concerns acceptance conditions for generated A* heuristics, not framework inheritance.
