---
id: evo-bnb
short_title: Evo-B&B
title: 'Evo-B&B: Behavior-Aware LLM-Guided Joint Evolution of Branching and Node Selection Policies for MILP'
authors: [Jiayu Chen, Chentong Chen, Yuhan Liu, Ye Fan, Jianyong Sun, Jialong Shi]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.22861
institutions: [xjtu, nwpu]
primary_dimension: design-object
dimensions: [design-object, search, feedback]
problems: [Mixed-Integer Linear Programming, Branch-and-Bound Policy Design]
featured: false
summary: Jointly evolves branching and node-selection programs with behavior-probe diversity, island search, and selective continuous-parameter tuning.
---

## Why it matters

A branching rule changes which subproblems exist; node selection changes which are explored first. Optimizing them separately can miss their interactions, while syntactically different code can still make identical decisions.

## Core method

Each individual contains two executable scoring functions and continuous parameters, integrated through a fixed SCIP interface. LLM mutation and crossover operate across islands using parent code, rationales, solving feedback, and operator instructions. End-to-end training-instance solves measure time and node-count ratios.

Fixed decision probes collected from default SCIP record top choices and relative scoring preferences for both policies. Behavioral similarity removes redundant candidates unless they Pareto-dominate their closest counterpart; quality–diversity selection handles capacity. Islands exchange design information and reset on stagnation. Retained candidates near the island-best fitness receive ten bounded Gaussian parameter-tuning steps with code structure held fixed.

## Contributions

The paper turns two coupled B&B decisions into one design object. Four MILP classes at three scales test the policies; the method has the lowest average runtime in six of twelve settings. Ablations distinguish behavioral diversity from AST similarity and joint search from independently evolved components.

## Strengths and limitations

Behavior probes target decision diversity rather than textual novelty. Fixed default-solver states may not cover states visited by evolved policies, and runtime and node count can disagree. Gains are not uniform across all scales or problem classes; full solves and tuning remain expensive.

## What to improve

Refresh probes with policy-induced states, account for tuning and failed candidates in total budgets, and test heterogeneous real-world MILP collections.

## Connections

[TIDE](../tide/index.md) separates island-based structural evolution from numeric tuning. Evo-B&B explicitly uses that design pattern for coupled SCIP policies, replacing structural-diversity emphasis with matched behavioral probes and tuning only promising retained candidates.
