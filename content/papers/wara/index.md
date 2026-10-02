---
id: wara
short_title: WARA
title: "WARA: A Closed-Loop Multi-Agent Framework for Wireless Optimization Autoresearch"
authors:
  - Yuan Guo
  - Yilong Chen
  - Chao Hu
  - Xianghao Yu
  - Liang Hong
  - Jie Xu
year: 2026
date: 2026-07-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2607.19822
code_url: https://github.com/guoyuan-dotcom/WARA_CUHKSZ
institutions:
  - cuhk-shenzhen
  - fnii-shenzhen
  - cityu-hk
  - sun-yat-sen
primary_dimension: scope
dimensions:
  - scope
  - design-object
  - feedback
problems:
  - Wireless Resource Allocation
  - Optimization Modeling
  - Algorithm Design
featured: false
summary: Coordinates wireless research agents through validated artifacts linking problem formulation, algorithm design, executed experiments, and manuscript claims.
---

## Why it matters

A plausible formulation, runnable solver, and polished report can still contradict one another if each stage proceeds from informal summaries.

## Core method

WARA first grounds a topic in literature and freezes a bounded problem contract. Formulation and theory agents then specify the system model, optimization problem, tractability analysis, and implementable update rules. Accepted mathematical and algorithmic contracts constrain experiment generation in a controller-owned execution harness.

Validation checks logs, benchmark consistency, metrics, and figures before promoting outputs to an evidence contract. Writing and analysis agents consume those artifacts; review failures are routed to the responsible artifact for local repair rather than restarting everything. The workflow has three major phases with multiple subphases, not a single unconstrained conversation among agents.


## Contributions

Makes cross-stage consistency and scoped repair explicit in an end-to-end wireless-optimization research workflow.

## Strengths and limitations

Artifact ownership and frozen contracts improve traceability. The comparative evaluation mainly scores manuscript-visible research validity with an LLM; a high score does not independently verify novelty, proofs, or all numerical claims.

## What to improve

Add blinded expert review, executable replication, and mechanism-level ablations, separating manuscript quality from actual algorithmic improvement.

## Connections

[AITE](../aite/index.md) concentrates on implementing and comparing wireless algorithm ideas. WARA covers a wider problem-to-manuscript workflow; the useful contrast is search within a fixed evaluator versus maintaining consistency across formulation, method, and evidence.
