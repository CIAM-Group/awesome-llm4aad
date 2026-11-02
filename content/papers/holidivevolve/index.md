---
id: holidivevolve
short_title: HoliDivEvolve
title: Holistic Diversity Management in LLM-Guided Evolutionary Search
authors:
  - Seockbean Song
  - Youngsik Yoon
  - Sungjae Lee
  - Siwei Wang
  - Wei Chen
  - Jungseul Ok
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.38407
institutions:
  - postech
  - microsoft-research-asia
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Program Optimization
  - Circle Packing
  - Signal Processing
  - Systems Optimization
featured: false
summary: Coordinates diverse island initialization, budget-aware island scheduling, and migration of complementary programs in LLM-guided search.
---

## Why it matters

Separate islands can still explore almost identical programs. Diversity depends on their starting points, computational budgets, and exchanged references—not simply on maintaining several populations.

## Core method

The method generates an initial candidate pool and selects island seeds by a max–min code-embedding distance criterion. Its scheduler combines normalized population quality, recent improvement, and an exploration bonus. Remaining budget shifts emphasis from growth toward current quality.

When an island grows slowly relative to others, it receives non-best programs from a faster-growing donor, prioritized by distance from its own best program. The recipient retains that best program as the parent and uses migrants as references. Migration therefore changes mutation context without pretending that copying a program is a locally discovered improvement. Initialization and subsequent generations share one budget.

## Contributions

- Treats initialization, scheduling, and migration as coupled diversity controls.
- Evaluates six mathematical and systems tasks, with controlled diversity and scheduler studies.

## Strengths and limitations

The experiments inspect descendant diversity as well as final scores. GPT-5 comparator results come from a prior paper rather than fresh matched reruns; component studies concentrate on signal processing. Embedding distance does not guarantee different execution behavior, and a qualitative migration example does not establish causality by itself.

## What to improve

Rerun all methods under matched token and evaluator budgets, and compare code distance with behavioral diversity on held-out tasks.

## Connections

[ShinkaEvolve](../shinkaevolve/index.md) rejects code-near-duplicate proposals before evaluation. HoliDivEvolve instead uses code distance to choose seeds and complementary cross-island references. The contrast concerns where diversity is enforced, not merely which baseline wins.
