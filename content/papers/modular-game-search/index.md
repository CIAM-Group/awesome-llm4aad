---
id: modular-game-search
short_title: Modular Game Search
title: Modular Discovery of General Game-Playing Algorithms with Large Language Models
authors:
  - Zun Li
  - John Schultz
  - Marc Lanctot
  - Daniel Hennes
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.33115
institutions:
  - google-deepmind
primary_dimension: scope
dimensions:
  - scope
  - design-object
  - feedback
problems:
  - General Game Playing
  - Monte Carlo Tree Search
featured: false
summary: Factorizes LLM evolution into reusable C++ search mechanisms and per-game knowledge modules, with reference-engine evaluation to separate their contributions.
---

## Why it matters

Evolving one game-playing program can entangle genuinely transferable search logic with knowledge of a particular game. The paper makes this distinction explicit.

## Core method

Built on AlphaEvolve, a coordinator evolves game-independent procedural search operators while workers evolve per-game priors, value estimators, and history resamplers. All candidates are compiled C++ modules with typed interfaces.

Credit assignment is deliberately asymmetric. Knowledge workers use fixed reference PUCT; the coordinator measures how an evolved search mechanism improves over that reference and over executing the prior alone. Headroom-normalized scores are aggregated across games. Hidden-state access checks reject cheating in imperfect-information games. Opponents remain fixed within a curriculum epoch, then advance only after a confirmation tournament; old and new epoch scores are not directly ranked together.

Evaluation covers OpenSpiel training and held-out games, procedurally synthesized games, and frozen neural policy/value representations. Cross-game tournament rankings supplement results under controlled time and simulation budgets.

## Contributions

- Separates transferable search machinery from domain knowledge during program evolution.
- Addresses confounded module credit and changing opponents rather than relying on one scalar game score.

## Strengths and limitations

The breadth of transfer tests is a strength. However, reference-PUCT evaluation biases knowledge modules toward compatibility with that engine. Offline discovery is expensive, and a general search mechanism does not replace specialized endgame knowledge or large pretrained evaluators.

## What to improve

Test alternative reference engines and report transfer gains per unit of offline discovery compute. Study how much unseen-game performance depends on newly synthesized domain knowledge.

## Connections

[AlphaEvolve](../alphaevolve/index.md) supplies the program-evolution backbone. This work generalizes that setup into coordinated archives with distinct roles for transferable mechanisms and task-specific knowledge.
