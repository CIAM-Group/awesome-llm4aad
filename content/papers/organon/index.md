---
id: organon
short_title: "Organon"
title: "Organon : From Evolutionary Search to Recursive Self-Improving Agents for Scientific Discovery"
authors:
  - "Cheikh Ahmed"
  - "Zhiyu Zhang"
  - "Kun Mao"
  - "Yong Zhang"
  - "Zirui Zhou"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.33046
code_url: https://github.com/cheikh025/Organon
institutions:
  - huawei-canada
  - huawei
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - "Algorithm design"
  - "GPU kernel optimization"
  - "Mathematical construction"
  - "Systems optimization"
featured: false
summary: "Organon lets a persistent discovery agent revise its active search, diagnostic, memory, and coordination components between bounded search horizons while preserving history and a fixed official evaluator."
---

## Why it matters

A discovery method can encounter a bottleneck its original controller or tools cannot diagnose. Restricting adaptation to candidate programs or a few prompt parameters leaves those operational failures outside the search.

## Core method

The agent manages two objects: a persistent population/history and an editable composition of search, tools, memory, worker coordination, and execution rules. It chooses a bounded number of candidate attempts, runs the current search configuration, then inspects scores, lineages, failures, and worker findings. It may continue, replace a provider, add diagnostics, change worker instructions, or withdraw an earlier revision. Dependency-aware, reversible component registration makes these changes live without losing evaluated programs. Later outcomes inform whether to retain or correct the revision, including revisions to the diagnostic procedures themselves. Candidate failures consume budget; the official task evaluator and remaining budget cannot be rewritten.

## Contributions

- Makes runtime capability changes and their reversibility explicit, not just candidate mutation or prompt evolution.
- Tests twenty-one algorithm, kernel, mathematical, and systems tasks and documents search-policy, diagnostic, and self-correction trajectories.

## Strengths and limitations

The common allowance is candidate attempts, not equal monetary or internal diagnostic cost. Repeated evaluations of selected programs are not independent repeated searches. Trajectory analysis covers one run per task, and simultaneous revisions prevent causal attribution; the appendix also records undetected sign errors and unused changes.

## What to improve

Add controlled revision ablations, repeat full searches, measure total resource use, and strengthen invariants and automatic rollback tests around dynamically changed components.

## Connections

Both let program search revise part of its own control process. Beyond Algorithm Evolution co-evolves operation-specific prompt templates with solver code. Organon instead exposes the live selection, survival, tool, memory and coordination procedures for reversible revision while keeping official evaluation fixed. See [Beyond Algo Evo](../beyond-algorithm-evolution/index.md).
