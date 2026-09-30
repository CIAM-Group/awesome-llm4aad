---
id: when-ai-designs-ai
short_title: When AI Designs AI
title: "When AI Designs AI: Innovation or Imitation?"
authors:
  - Yikang Yang
  - Zhengxin Yang
  - Luzhou Peng
  - Minghao Luo
  - Yanqi Kan
  - Wanling Gao
  - Jianfeng Zhan
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.17471
institutions:
  - cas-ict
  - benchcouncil
  - university-chinese-academy-sciences
  - northwestern
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - Algorithmic Novelty Evaluation
  - AI Research Agents
featured: false
summary: Maps agent-designed and human-designed AI methods into shared module-level design spaces to distinguish performance gains from structural novelty.
---

## Why it matters

Code similarity and benchmark accuracy alone cannot reveal whether an agent discovered a different algorithm or recombined familiar choices.

## Core method

Reference implementations are converted into structured descriptions, grouped into role-based modules, and organized as task-specific dependency graphs. Human experts review the proposed design spaces. Each method receives coordinates recording its choice at every module; Hamming distance to the nearest collected human method measures algorithmic difference at that chosen granularity.

Agent submissions are mapped from their executed code using the same definitions, with sampled human checks and systematic corrections. New choices can extend a module's option set; methods incompatible with the graph are labeled out of space. Six AI tasks supply performance comparisons, with and without prepared reference material, separately from design-distance analysis.


## Contributions

Provides an inspectable account of where designs differ, rather than asking a judge for a single impressionistic novelty score.

## Strengths and limitations

Human review and code-based mapping improve auditability. The distance depends on the reference collection and module granularity: zero distance does not mean identical implementation, and out-of-space does not by itself establish scientific novelty.

## What to improve

Report mapping agreement and uncertainty, vary graph granularity, and have independent experts inspect potentially novel mechanisms before assigning originality claims.

## Connections

[AI4AI-Bench](../ai4ai-bench/index.md) distinguishes training-algorithm changes from execution changes. This paper supplies a finer, task-specific design-coordinate view; the relation is complementary evaluation methodology, not baseline usage.
