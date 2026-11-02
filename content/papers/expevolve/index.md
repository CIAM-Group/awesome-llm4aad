---
id: expevolve
short_title: "ExpEvolve"
title: "ExpEvolve: Structuring and Reusing Experience for Open-Ended Discovery"
authors:
  - "Yongqiang Chen"
  - "Chenxi Liu"
  - "Deyu Zou"
  - "Zhenhao Chen"
  - "Tongliang Liu"
  - "Bo Han"
  - "Kun Zhang"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.29303
institutions:
  - mbzuai
  - carnegie-mellon
  - hong-kong-baptist-university
  - cuhk
  - university-sydney
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Mathematical discovery"
  - "Machine learning engineering"
featured: false
summary: "ExpEvolve extracts interpretable idea factors from unexplained program-score differences and uses bandit-selected factor edits and plateau interventions to guide further program discovery."
---

## Why it matters

A code archive or prose summary may preserve examples without identifying which high-level choices explain their performance. ExpEvolve seeks reusable, testable design factors rather than only surface edits.

## Core method

The system annotates archived programs with binary or categorical idea factors. A pairwise ranker predicts which program should score better; large unexplained score contrasts trigger an LLM to propose missing factors. Candidate factors are annotated across the archive and admitted only with adequate support and score separation. Factors become edit actions such as add, remove, or set a mechanism. A bandit assigns idea-guided proposal slots using evaluation rewards normalized against same-generation open-search proposals, while reserving other slots for broad exploration. At plateaus, the system identifies properties shared by leading programs, masks actions that reinforce that background, and supplies more diverse exemplars to create new contrasts.

## Contributions

- Turns learned representations of algorithmic ideas into explicit search actions rather than passive memory.
- Evaluates eleven mathematical tasks with 200-program budgets and three seeds, and integrates the mechanism into six MLS-Bench tasks.

## Strengths and limitations

The sample-efficiency argument assumes a faithful factor representation; the practical LLM annotations do not establish causal effects. Experiments use relatively inexpensive, small-scale verification, and factor discovery itself incurs model overhead. The paper states that it extends CausalEvolve (arXiv:2603.14575), which should not be mistaken for an unrelated lineage.

## What to improve

Audit factor annotations and intervention faithfulness, report all factor-learning costs, and test with noisy or expensive scientific evaluators.

## Connections

[EvoMem](../evomem/index.md) retrieves lessons associated with successful edits. ExpEvolve additionally tests whether categorical factors explain score ordering and makes add/remove/set actions over those factors the search controller's choices.
