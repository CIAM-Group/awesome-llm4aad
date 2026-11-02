---
id: guidance-ttt
short_title: "Guidance-TTT"
title: "Evolving in Thought Space: Training a Small Model at Test Time Unlocks Better Discoveries"
authors:
  - "Chonghe Jiang"
  - "Ao Qu"
  - "Siyuan Liu"
  - "Ruoyun Ma"
  - "Zijian Zhou"
  - "Dingyi Zhuang"
  - "Bo Liu"
  - "Han Zheng"
  - "Hanfei Yu"
  - "Baichuan Mo"
  - "Jinhua Zhao"
  - "Paul Pu Liang"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.06269
code_url: https://github.com/Human-Agent-Society/reef/tree/main/recipes/tttd/examples/guidance_ttt
institutions:
  - mit
  - polyu
  - bytedance
  - nus
  - stanford
  - university-washington
  - uc-berkeley
  - tsinghua
  - singapore-mit-alliance
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - search
problems:
  - "Test-time training"
  - "Packing"
  - "Heuristic programming"
  - "Numerical algorithms"
  - "GPU kernels"
featured: false
summary: "Trains a small guidance policy on verifier rewards while a larger frozen executor implements its parent-conditioned strategic changes."
---

## Why it matters

Updating a model that writes entire programs makes test-time learning costly and mixes strategic quality with implementation reliability. Guidance-TTT places adaptation in short, explicit proposed changes instead.

## Core method

A parent-linked archive stores executable solutions, verifier scores, solution summaries, and summaries of changes from their parents. A PUCT rule selects parents using best-child quality, a rank prior, and expansion counts. An 8B or 14B guidance model sees compact summaries and samples a sibling group of natural-language modifications. The frozen executor receives each modification and the exact parent code, then produces a complete child program. Verifier rewards update only the guidance policy with an entropic, group-relative RL objective; adaptive within-group reward weighting emphasizes high-scoring candidates. Eligible evaluated children and their summaries return to the archive. Thus the learned action is strategic text, while code generation and implementation capacity remain in a separate fixed model.

## Contributions

- Combines archive reuse with trainable guidance and frozen implementation.
- Evaluates packing, AHC058, Lasso-path solvers, and TriMul kernels, including held-out Lasso tests and kernel-environment transfer.
- Includes frozen-guidance and direct-code-training controls, with a practical large-executor cost comparison.

## Strengths and limitations

The flagship comparisons mix published references, differently budgeted baselines, and distinct model configurations. The reported 58% cost reduction also uses different rollout counts and training schedules, not a strictly equal-compute intervention. Executor mistakes still contaminate the guidance reward. Extra parent context helps one tested task and hurts another, so more information is not uniformly beneficial.

## What to improve

Replicate independent searches at matched total training, inference, and evaluation budgets; separate poor guidance from failed implementation when assigning credit.

## Connections

Both train a proposer with frozen execution, but Guidance-TTT learns parent-conditioned strategic changes whereas [HarnessTTT](../harnessttt/index.md) searches the executor's prompts, skills, tools, and middleware as a complete harness.

Both separate a proposed design change from its implementation. [FrugalEvo](../frugalevo/index.md) assigns strategy generation to a fixed expensive model and repeated implementation to a cheaper model. Guidance-TTT instead updates a compact guidance model from the rewards of sibling implementations while keeping a separate execution model frozen. The contrast is where adaptation and model cost are placed within the same strategy-to-code interface.
