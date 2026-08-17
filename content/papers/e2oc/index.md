---
id: e2oc
short_title: "E2OC"
title: "Evolving Interdependent Operators with Large Language Models for Multi-Objective Combinatorial Optimization"
authors:
  - "Junhao Qiu"
  - "Xin Chen"
  - "Liang Ge"
  - "Liyong Lin"
  - "Zhichao Lu"
  - "Qingfu Zhang"
year: 2026
date: 2026-01-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2601.17899
institutions:
  - cityu-hk
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Multi-Objective Combinatorial Optimization"
featured: false
summary: "E2OC co-designs interdependent neighborhood operators instead of optimizing each operator in isolation."
---

## Why it matters

Multi-objective local search depends on operators whose effects interact. Optimizing each one separately can produce individually strong components that work poorly together. E2OC makes operator configuration and dependency part of the search object.

## Core method

E2OC represents design as an MDP and uses Monte Carlo Tree Search to explore operator strategies. At each node, an underlying LLM-AHD method proposes or modifies code. Operator rotation changes assignments and reveals whether performance comes from a particular operator or its ensemble role. Multi-objective indicators provide rewards for tree backpropagation.

The framework is evaluated across different objective counts against independently designed operators and existing multi-objective search baselines.

## Contributions

- A planning formulation for jointly designing interdependent operators.
- Operator rotation to evaluate role and configuration effects.
- A wrapper capable of using several AHD methods as lower-level designers.

## Strengths and limitations

Joint design captures synergies missed by component-wise fitness and the wrapper is method-agnostic. Nested search is expensive, rewards are noisy, and rotation may not disentangle higher-order interactions. Results also depend on initial templates and warm starts.

## What to improve

Add credit assignment for individual and pairwise effects, prune MCTS with uncertainty, and test whether an evolved ensemble transfers across instance distributions.

## Connections

E2OC and CoupleEvo both coordinate generated components. E2OC focuses on operator roles inside a multi-objective algorithm and adds MCTS planning.
