---
id: jet
short_title: JET
title: "JET: Judge-Guided Evolution at Test Time for Agent Programs"
authors:
  - Yao Long Teng
  - Jiayi Cai
  - Bo An
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.34126
institutions:
  - ntu
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - Agent Program Evolution
  - Reward-Hidden Adaptation
featured: false
summary: Evolves an executable evaluator on labeled source trajectories, freezes it, and uses it to guide agent-code adaptation without target reward queries.
---

## Why it matters

Deployment settings may expose trajectories but withhold the evaluator that originally supplied search rewards.

## Core method

Source-side evolution rewrites judge code, including prompts, preprocessing, deterministic computations, calibration, and parsing. Training labels guide search; a separate validation split selects the judge, which is then frozen. Its underlying model weights are not retrained.

At target time, proposed agent programs execute on visible tasks. The frozen judge supplies scores for promotion and diagnostics for further rewrites; feedback from rejected candidates is retained. True target evaluator outputs are isolated for post-hoc auditing. The target tasks do influence adaptation through their trajectories, so improvement there is not evidence of zero-shot generalization to entirely unseen tasks.


## Contributions

Separates evaluator development from target program evolution and tests whether learned evaluation procedures transfer across reward-hidden settings.

## Strengths and limitations

Source/target information boundaries make the claim precise. Judge errors can be exploited by search; PushT includes an exactly reconstructible reward control, while WebShop requires approximate judgment, so their difficulties differ.

## What to improve

Test shifts in reward semantics as well as observations, audit judge hacking, and evaluate frozen adapted programs on additional unseen target tasks.

## Connections

[Janus](../janus/index.md) continually updates proxy evaluators and requires real validation for promotion. JET freezes a source-trained judge and cannot make that target-time check; this contrast identifies a consequential evaluator-trust boundary.
