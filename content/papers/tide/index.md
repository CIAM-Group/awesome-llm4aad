---
id: tide
short_title: "TIDE"
title: "TIDE: Tuning-Integrated Dynamic Evolution for LLM-Based Automated Heuristic Design"
authors:
  - "Chentong Chen"
  - "Mengyuan Zhong"
  - "Ye Fan"
  - "Jialong Shi"
  - "Jianyong Sun"
year: 2026
date: 2026-01-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2601.21239
institutions:
  - xjtu
  - nwpu
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "TIDE jointly evolves heuristic structures and tunes numerical parameters through a nested, diversity-aware search process."
---

## Why it matters

A promising heuristic structure can be rejected because its constants are poorly calibrated, while tuning constants cannot rescue a weak structure. Treating the whole program as one discrete mutation entangles these two failure modes. TIDE separates structural evolution from parameter optimization while coordinating their budgets.

## Core method

The outer loop evolves program logic across parallel islands. Tree Similarity Edit Distance measures structural rather than textual diversity and limits premature convergence. For each structure, an inner differential-mutation process calibrates numerical parameters before fitness comparison. A UCB scheduler learns which prompt operator deserves the next LLM query from its observed improvements.

Experiments on combinatorial-optimization heuristics compare with EoH, ReEvo, and MCTS-AHD-style discrete evolution and ablate parameter tuning, structural diversity, islands, and scheduling.

## Contributions

- Nested optimization of program structure and numeric parameters.
- AST/tree-distance diversity management across an island model.
- Online bandit allocation among LLM prompt operators.

## Strengths and limitations

The separation avoids discarding good logic because of bad constants and makes operator allocation adaptive. Inner tuning multiplies evaluations per structure, tree distance does not guarantee behavioral diversity, and the nested budget complicates fair comparison with simpler methods.

## What to improve

Use multi-fidelity parameter tuning, compare structural and behavioral diversity, and report improvements against total evaluator calls, tokens, and wall time rather than generations alone.

## Connections

TIDE extends EoH-style evolution with a continuous inner loop. It shares BEAM's bilevel perspective, but separates structure from numeric calibration rather than architecture from component implementation.
