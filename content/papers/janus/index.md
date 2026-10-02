---
id: janus
short_title: Janus
title: "Janus: An Algorithm-Evaluator Co-Evolution Framework for LLM-Driven Discovery under Expensive Evaluation Budgets"
authors:
  - Ximeng Liu
  - Qianlong Wang
  - Yingming Mao
  - Annan Li
  - Yatao Li
  - Shizhen Zhao
  - Jianmin Wu
  - Dawei Yin
  - Dou Shen
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.08189
institutions:
  - sjtu
  - zhongguancun-academy
  - baidu
  - xjtu
  - zhongguancun-institute-ai
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
  - search
problems:
  - Scientific Program Discovery
  - Expensive Simulation Optimization
featured: false
summary: Co-evolves candidate programs and executable proxy evaluators, while requiring real evaluation before any candidate enters the validated population.
---

## Why it matters

Expensive simulators make evaluating every mutation impractical, while a fixed surrogate can become inaccurate as search changes the candidate distribution.

## Core method

AlphaEvolve-style islands maintain real-validated program populations. Separate LLM-generated evaluator programs contain structural formulas or branches and, where applicable, parameters fitted to an archive of actual outcomes. Their selection objective emphasizes recovering high-quality candidates near the top of the ranking rather than minimizing average prediction error.

Region-conditioned evaluator portfolios score provisional candidates; subsequent real outcomes update regional credit. Promotion balances predicted quality, uncertainty, and novelty, and periodically bypasses surrogate ranking for direct exploration. Proxy scores never update the incumbent: only real-valid outcomes enter the target population. Archive refreshes refit evaluators and rescore waiting candidates as the search distribution changes.


## Contributions

Makes the screening evaluator itself a searched program, with an explicit boundary between provisional predictions and validated algorithm improvements.

## Strengths and limitations

Five scientific/simulation tasks support real-evaluation savings under matched call budgets. Extra proxy evolution has its own token/runtime cost, and three seeds do not establish universal reliability under severe distribution shift.

## What to improve

Audit discarded high-quality candidates and compare total cost, not only real calls. Stress-test evaluator disagreement and shared blind spots on new task families.

## Connections

[AlphaEvolve](../alphaevolve/index.md) supplies the island-based target search. [BiFE](../bife/index.md) instead screens using a fixed strong-branching imitation objective; Janus evolves the proxy structure online, a specific contrast in low-cost feedback design.
