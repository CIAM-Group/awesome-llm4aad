---
id: constraint-reformulation
short_title: Constraint Reform.
title: LLM-Guided Evolutionary Search for Constraint Model Reformulation to Improve Solver Efficiency
authors:
  - Kostis Michailidis
  - Dimos Tsouros
  - Nguyen Dang
  - Tias Guns
year: 2026
date: 2026-07-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2607.28268
institutions:
  - ku-leuven
  - western-macedonia
  - st-andrews
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Constraint Satisfaction
  - Constraint Model Reformulation
  - Solver Efficiency
featured: false
summary: Searches faster constraint-model implementations and retains prompt examples that are both fast and behaviorally diverse across instances.
---

## Why it matters

A correct declarative model can be slow because of its variable viewpoint or encoding, even when the backend solver is unchanged.

## Core method

An LLM proposes a rationale and executable reformulation. The evaluator solves development instances, measures time to the first solution, and checks each returned problem-level answer against the baseline model. Auxiliary variables and alternative encodings are allowed. This establishes validity of observed answers, not equality of complete solution sets.

Search strategies control retained attempts and instructions. Profile-Diverse Retention keeps the fastest model, then uses maximal-marginal-relevance selection to balance speed with diversity in normalized log-runtime vectors. A separate validation set selects among discovered incumbents, with timeout penalties, before held-out testing. The study compares ten strategies over eight CSPLib satisfaction problems through CPMpy and CP-SAT.


## Contributions

Treats prompt-history selection as an algorithmic design choice and grounds diversity in instance-level solver behavior rather than code appearance.

## Strengths and limitations

Separate final selection reduces training-runtime overfitting. Finite solution checking cannot certify unsatisfiability or general equivalence; one model/backend setup and timing sensitivity limit generalization.

## What to improve

Add complete or proof-assisted equivalence checks where feasible, repeat timing under controlled loads, and test cross-solver transfer without reselection on test data.

## Connections

[FormuEvo](../formuevo/index.md) explores the same solver-facing design layer for optimization models. This study differs in its satisfaction-oriented answer validation and runtime-profile context selection, rather than white-box solver diagnosis.
