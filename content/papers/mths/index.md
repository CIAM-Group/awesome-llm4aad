---
id: mths
short_title: "MTHS"
title: "Hierarchical Representations for Cross-task Automated Heuristic Design using LLMs"
authors:
  - "Fei Liu"
  - "Rui Zhang"
  - "Shunyu Yao"
  - "Qinglong Hu"
  - "Kefeng Zheng"
  - "Zhichao Lu"
  - "Qingfu Zhang"
year: 2026
date: 2026-07-06
venue: "ICML"
paper_url: https://openreview.net/pdf/5723a21bffbe74a1f5c2b88d97cee90b29e16b4d.pdf
institutions:
  - cityu-hk
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - "Cross-Task Automated Heuristic Design"
featured: false
summary: "MTHS separates task-independent metaheuristics from task-specific programs and evolves both levels across multiple tasks."
---

## Why it matters

Task-by-task AHD tends to discover one-off code even when problems share reusable search principles. MTHS asks whether an LLM can evolve a task-independent metaheuristic at one level and instantiate it differently for each task at another.

## Core method

The representation separates a high-level metaheuristic description from task-specific executable programs. Cross-task search evolves the shared strategy using evidence from several tasks, while within-task search refines implementations and returns useful lessons upward. Elite knowledge moves between levels without forcing identical code interfaces.

The reported study spans several combinatorial-optimization tasks, compares with hand-designed and LLM-AHD baselines, and tests whether evolved metaheuristics transfer to related held-out settings.

## Contributions

- Hierarchical separation of transferable strategy and task-specific code.
- Two-way information flow between multi-task and per-task evolution.
- Direct evaluation of transfer rather than only multi-task average fitness.

## Strengths and limitations

The hierarchy provides a plausible unit for transfer and keeps final programs executable. Negative transfer is possible when tasks share vocabulary but not useful search structure, and the chosen task family strongly determines what appears universal.

## What to improve

Estimate task relatedness before sharing, allow several metaheuristic clusters, and evaluate transfer to tasks with different state and action interfaces under fixed adaptation budgets.

## Connections

MTHS moves from within-task heuristic evolution to reusable cross-task strategy. EoH-S broadens one task to a heuristic set, whereas MTHS broadens one design process across tasks.
