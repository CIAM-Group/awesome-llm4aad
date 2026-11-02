---
id: llm-blockfe
short_title: LLM-BlockFE
title: 'Long Text to Predictive Features: LLM-Guided Blockwise Feature Engineering via Executable Program Search'
authors: [Ziming Dai, Dabiao Ma, Ziheng Guo, Jack Dong, Zimu Zhou]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.12390
institutions: [cityu-hk, qfin, tianjin-university, carnegie-mellon]
primary_dimension: search
dimensions: [search, design-object, feedback]
problems: [Text Feature Engineering, Predictive Model Pipelines]
featured: false
summary: Builds deployable text-feature programs through immutable block additions, downstream validation, depth-calibrated rollback, and diverse parallel trajectories.
---

## Why it matters

Long texts contain useful predictive information, but per-record LLM inference may be too costly. An offline-discovered feature program can convert that information into ordinary structured-model inputs.

## Core method

The LLM generates complete code with a marked new block; extraction checks reject changes outside that region. Execution and text-feature screening precede local Bayesian tuning of the new block's parameters. A lightweight XGBoost evaluator measures its conditional validation-AUC gain alongside existing structured features. Positive additions are accepted and frozen.

Each trajectory maintains a block tree and an archived best program. Recent child successes and failures form a Beta-Bernoulli estimate, partially pooled with other blocks at the same depth. Low predicted expansion opportunity triggers rollback rather than endless extension. Multiple trajectories share only fixed descriptions of their exploration direction, not code or feature outputs; their final frozen programs are jointly used by the downstream model.

## Contributions

Four datasets test predictive quality and inference cost. Production monitoring covers five risk-control applications and 2.69 million users, with reported improvements over the previous text-feature strategy. Deployment executes ordinary feature code without online LLM inference.

## Strengths and limitations

The append-only contract protects accumulated behavior and makes rollback auditable. It can also preserve suboptimal early decisions, and independent trajectory scoring misses cross-program interactions until final fitting. Two datasets and deployment evidence are private; monitoring is not a randomized intervention.

## What to improve

Evaluate cross-program feature redundancy, audit temporal drift and repeated-validation selection, and compare rollback with controlled edits to earlier blocks.

## Connections

[MCTS-AHD](../mcts-ahd/index.md) selects heuristic-program branches with UCT and backpropagated quality statistics. LLM-BlockFE instead freezes accepted code blocks and uses depth-calibrated estimates of child success to continue or backtrack, preserving stable prefixes while restricting subsequent edits.
