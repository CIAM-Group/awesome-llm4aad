---
id: simpleevol
short_title: SimpleEvol
title: "SimpleEvol: An Agent-Loop Framework for LLM-Driven Automated Heuristic Design with Minimal Human Priors"
authors:
  - Jianghan Zhu
  - Cong Zhang
  - Rongjie Zhu
  - Chi Zhang
  - Zhiguang Cao
year: 2026
date: 2026-09-01
venue: NeurIPS
paper_url: https://arxiv.org/pdf/2609.37172
code_url: https://github.com/HenryZhu1029/SimpleEvol-Master
institutions:
  - smu
  - independent-researcher
  - nuist
  - nus
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
  - Flow Shop Scheduling Problem
featured: false
summary: A single-trajectory heuristic-design agent uses execution feedback and compressed history, studying how framework complexity affects gains from stronger language models.
---

## Why it matters

A more elaborate search framework need not make better use of a stronger LLM. This paper asks how much improved model capability translates into improved heuristics, rather than comparing frameworks with only one backbone.

## Core method

SimpleEvol keeps one evolving trajectory and a best-so-far heuristic. The agent receives the task, elite code, recent attempts, and compressed working notes, then proposes executable code with a short explanation. Evaluation returns objective values, runtime, and execution errors. Every few iterations, history is summarized into useful and unsuccessful design patterns; older records are removed. There is no explicit population selection or separate crossover/mutation controller.

The paper also defines AHI from orchestration components, invocation types, and call counts. ICE is a fitted slope relating heuristic performance to an external model-capability score across backbones—not a direct measure of intelligence or a causal effect. Experiments use constructive TSP heuristics, CVRP heuristic matrices inside ACO, and FSSP perturbation rules inside GLS, with ten LLMs and a common generated-heuristic budget.

## Contributions

- A compact feedback-driven alternative to explicitly orchestrated evolutionary operators.
- A cross-model evaluation protocol, including cost comparisons and ablations of memory, metadata, and elite retention.

## Strengths and limitations

The experiments report favorable performance and ICE across the three settings. Removing history summaries or elite context degrades results. However, the relationship between AHI and ICE is observational, depends on the chosen index and model panel, and does not establish that removing structure always helps. Equal candidate counts also do not mean equal token expenditure.

## What to improve

A useful follow-up would hold dollar and evaluator budgets fixed while varying one orchestration component at a time, and test whether the fitted scaling trend predicts genuinely unseen backbones.

## Connections

[ReEvo](../reevo/index.md) uses explicit short- and long-term reflection within population search. SimpleEvol instead incorporates execution history into one autonomous trajectory. This is an alternative organization of feedback and search, not an extension claim.
