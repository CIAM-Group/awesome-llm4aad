---
id: ttme
short_title: "TTME"
title: "Can Test-Time Memory Evolution Outperform Test-Time Training for Scientific Discovery?"
authors:
  - "Yepeng Liu"
  - "Shengmai Chen"
  - "Xuandong Zhao"
  - "Chengzhi Liu"
  - "Dawn Song"
  - "Xin Eric Wang"
  - "Yuheng Bu"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.32046
code_url: https://github.com/yepengliu/TTME
institutions:
  - uc-santa-barbara
  - uc-berkeley
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Mathematical construction"
  - "Test-time adaptation"
featured: false
summary: "TTME replaces online weight updates with evolving operational guidelines and reusable algorithmic strategies while retaining the discovery framework's archive, parent selection, and verifier."
---

## Why it matters

Test-time training can internalize search experience but incurs repeated optimization cost. The paper asks whether the same search framework can learn sufficiently through external memory instead.

## Core method

Every fixed update interval, evaluated attempts feed two memories. Guideline Memory distills valid outcomes and failures into implementation rules, merging recurrent entries and pruning stale or low-priority ones. Strategy Memory compares successful parent–child code changes, extracts the underlying algorithmic ideas, and consolidates them into source-backed strategy families. For each selected parent, a selector chooses relevant strategies while discouraging redundant assignments across parents; an adaptor turns them into parent-specific modification instructions. Half the candidate budget uses these instructions and half generates directly, both with operational guidelines. Evaluation updates the original archive and the memories, without changing model parameters.

## Contributions

- Provides a modular replacement for the adaptation component in TTT-Discover and ThetaEvolve, leaving their search rules intact.
- Tests three models on five mathematical construction tasks, including autocorrelation inequalities, minimum overlap, and maximal determinant.

## Strengths and limitations

The reported scores beat the corresponding published TTT results in the evaluated settings. Efficiency measurements include memory calls but exclude task evaluation time, and TTT comparison scores come from the original papers rather than all being rerun. Evidence is confined to a small set of mathematical tasks, not a universal dominance result over weight adaptation.

## What to improve

Run repeated, fully matched end-to-end cost comparisons, expand to expensive scientific evaluations, and examine hybrid memory-plus-training adaptation.

## Connections

[EvoMem](../evomem/index.md) also preserves lessons from successful program changes. TTME separates failure-derived implementation rules from reusable strategy families and tests memory as a substitute for parametric adaptation under fixed archive rules.
