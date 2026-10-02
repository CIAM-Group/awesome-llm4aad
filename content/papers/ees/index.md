---
id: ees
short_title: EES
title: "Evolutionary Ensemble Search: Council-Guided Program Evolution with Persistent Memory"
authors:
  - Juan P. Madrigal-Cianci
  - Eshan Chordia
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.17590
code_url: https://github.com/impulse-ai/mlebench-medals
institutions:
  - impulse-ai
primary_dimension: search
dimensions:
  - search
  - feedback
  - scope
problems:
  - Machine Learning Procedure Design
  - Program Evolution
  - Ensemble Construction
featured: false
summary: Specifies council-guided evolution of executable ML procedures, with measured child fitness, compatible-prediction ensembling, and cross-run lessons.
---

## Why it matters

Combining agent recommendations is useful only if changes create executable candidates with comparable evidence and traceable lineage.

## Core method

A role-specialized council interprets task evidence and recommends directions; an orchestrator assigns implementation and evaluation work. Mutation and crossover start from measured parents and create changed code or typed pipeline specifications. Every child must execute and earn its own validation score; inherited code does not imply inherited fitness.

Archives retain useful alternatives. Parent-relative feedback informs operator credit, while session summaries and problem-indexed lessons can guide future runs. Prediction ensembles require matching row, target, class, and validation semantics, then must outperform the best individual under a validation gate. Different execution profiles implement different subsets of this architecture, which must be recorded for a comparison to be meaningful.


## Contributions

Defines contracts connecting deliberation, executable edits, population evidence, memory, and final ensemble selection.

## Strengths and limitations

The public ledger exposes concrete artifacts and caveats. Its 19-of-22 medal-threshold record includes between-run grading, external-source routes, and mixed confirmation; it neither establishes blind autonomous success nor isolates the benefit of the full proposed stack.

## What to improve

Run preregistered, budget-matched component ablations with untouched tasks and per-run manifests, keeping terminal grades outside development feedback.

## Connections

[EvoMem](../evomem/index.md) also persists measured search experience across runs. EES broadens the memory to task-indexed pipeline and ensemble lessons, but its historical ledger does not isolate the causal effect of that retrieval mechanism.
