---
id: algoevo
short_title: AlgoEvo
title: "AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery"
authors:
  - Junhao Qiu
  - Qinglong Hu
  - Ji Cheng
  - Xialiang Tong
  - Liyong Lin
  - Qingfu Zhang
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.15820
institutions:
  - cityu-hk
  - huawei-noahs-ark
  - astar-iac
primary_dimension: search
dimensions:
  - search
  - feedback
  - scope
problems:
  - Combinatorial Optimization
  - Multi-Objective Optimization
  - Multi-Component Algorithm Design
featured: false
summary: An autonomous code-search agent uses paradigm-specific design skills and a hierarchical experience bank to accumulate reusable algorithm-design knowledge.
---

## Why it matters

Fixed generation pipelines make it difficult to reuse one discovery engine across single heuristics, multi-objective operators, and interacting components.

## Core method

A design skill specifies editable roles, code interfaces, valid changes, and evaluation conventions. The agent chooses when to inspect, edit, diagnose, retrieve, or evaluate rather than following a fixed operator sequence. Only evaluation events create experience cards containing the modification, context, measured reward, and rationale.

Cards form a derivation tree. Retrieval uses UCB statistics conditioned on situations such as stagnation, bottlenecks, component coupling, or a sparse Pareto front; descendant rewards update ancestor statistics. After enough completed task trees accumulate, their patterns refine the corresponding skill. Skills remain fixed within a task, so cross-task consolidation is distinct from within-task search. Experiments cover six problems across three design paradigms.


## Contributions

Connects an action-selecting coding agent to explicit design contracts and a task-indexed hierarchy of measured experiences.

## Strengths and limitations

The framework separates transferable design knowledge from task interfaces. Its benefits depend on the diagnostic categories and quality of distilled cards; fewer evaluator calls need not imply lower total agent cost.

## What to improve

Test transfer to entirely new design interfaces and report token, diagnostic, and evaluator costs together. Audit whether stale or incorrectly attributed experience harms later tasks.

## Connections

[MCTS-AHD](../mcts-ahd/index.md) uses a tree to allocate heuristic search. AlgoEvo instead indexes measured experience by the current diagnostic situation and separately consolidates it into cross-task skills; this is a concrete alternative use of tree search and memory.
