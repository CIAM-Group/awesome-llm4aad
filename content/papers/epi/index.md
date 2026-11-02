---
id: epi
short_title: "Épi"
title: "Epi: Towards a Persistent, Self-Improving Agent for Autonomous Research"
authors:
  - "Yue Huang"
  - "Zhangchen Xu"
  - "Xiaonan Luo"
  - "Zheyuan Liu"
  - "Lichi Li"
  - "Yiping Wang"
  - "Peiyang Song"
  - "Eric Gabriel Ramos"
  - "Enze Xie"
  - "Olexandr Isayev"
  - "Paul Liang"
  - "Nouha Dziri"
  - "Huan Sun"
  - "Jianfeng Gao"
  - "Ying Liu"
  - "Misha Sra"
  - "Xiangliang Zhang"
  - "Alex Pentland"
  - "Zichen Chen"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.24944
institutions:
  - bake-ai
  - university-notre-dame
  - university-washington
  - stevens-institute-technology
  - scale-ai
  - nvidia
  - carnegie-mellon
  - mit
  - cohere-labs
  - ohio-state-university
  - microsoft-corporation
  - uc-santa-barbara
  - stanford
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - scope
problems:
  - "Autonomous research"
  - "Algorithm design"
  - "Operations research"
featured: false
summary: "Épi sustains research through persistent versioned branches, hierarchical lessons, and independent review; its turbo configuration applies the same continuity mechanisms to budgeted solver development."
---

## Why it matters

Long investigations lose experimental state and rationale when a model session ends. Algorithm development also requires preserving executable alternatives, not merely a textual summary of the best result.

## Core method

A campaign fixes a task-specific evaluation contract, feasibility tolerances, and improvement threshold before search. The agent runs experiments on versioned branches, preserves abandoned approaches with reasons, and can resume or fork earlier implementations. Code and detailed artifacts stay in a filesystem; a separate memory store retains reusable lessons and dead ends. Session handovers select the state and evidence needed for continuation. An independent model reviews research direction, while an isolated verifier checks artifacts. Épi-turbo reuses this persistence for standalone optimization solvers, supplies the quality–runtime scoring formula, reserves call costs before execution, and stops when further sessions do not improve the verified score. Review and extra validation were disabled in its reported short-task runs.

## Contributions

- Connects cross-session continuity to inspectable code, experiments, branch history, and certificates.
- Evaluates solver development on thirty FrontierOR tasks with matched model and per-task spending limits, separately from its mathematical record campaigns.

## Strengths and limitations

The higher aggregate solver score is mainly a runtime benefit, not uniformly better solution quality: the comparator wins direct objective comparisons on more instances. The benchmark uses one run per system and task, so it does not establish statistical significance. Released results and certificates should not be confused with release of the complete agent implementation.

## What to improve

Repeat the solver experiments, report quality and runtime separately, and isolate the effects of memory, branching, stopping, and independent review.

## Connections

[Scaling Discovery Requires Forgetting](../discovery-forgetting/index.md) keeps only the incumbent when restarting. Épi takes the complementary approach of preserving alternative code branches and selectively retrieving lessons; the trade-off is escaping historical anchoring versus retaining recoverable research evidence.
