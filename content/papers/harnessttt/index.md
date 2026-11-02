---
id: harnessttt
short_title: "HarnessTTT"
title: "HarnessTTT: Learn to Optimize Harness at Test-Time for Scientific Discovery"
authors:
  - "Yingzi Ma"
  - "Yulong Cao"
  - "Nanxi Li"
  - "Fang Wu"
  - "Yizhe Zhang"
  - "James Zou"
  - "Yejin Choi"
  - "Chaowei Xiao"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.17370
code_url: https://github.com/SaFo-Lab/HarnessTTT
institutions:
  - uw-madison
  - nvidia
  - johns-hopkins
  - stanford
  - meta
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - search
problems:
  - "Scientific discovery"
  - "Harness optimization"
  - "GPU kernels"
  - "Heuristic programming"
featured: false
summary: "HarnessTTT trains a separate proposer to generate executable search harnesses, scoring their budgeted rollouts with a frozen executor and retaining explicit transferable harness artifacts."
---

## Why it matters

Updating the solver model stores adaptation in its weights; editing context alone requires repeatedly reinterpreting experience. HarnessTTT instead trains the model that designs the procedure around a frozen solver.

## Core method

A proposer samples harness revisions containing prompts, skills, Python tools, middleware, and execution controls. Validated, deduplicated harnesses all start from the same incumbent program and each receive a bounded executor rollout. Best valid rollout scores produce gap-normalized rewards; within-parent leave-one-out advantages, near-tie filtering, and softmax sharpening guide a clipped, KL-regularized LoRA update on proposer tokens only. Executor parameters remain unchanged. The next round retains the best solution, its harness, a diversity-preserving runner-up, and a bounded experience digest. Static checks, restricted interfaces, sandboxed tool tests, and repair screening guard the generated tools without constituting a formal safety guarantee.

## Contributions

- Makes the complete executable harness a learned, inspectable action rather than merely a rewritten prompt.
- Evaluates fourteen task settings and separately studies transfer to stronger executors and replay of fixed learned harnesses.

## Strengths and limitations

The paper quarantines LLM-SQL and transaction-scheduling results, so aggregate frontier counts require that caveat. Stronger-executor transfer also adds further search, and fixed-harness replay uses one search seed. Reward shaping is a heuristic surrogate rather than an unbiased gradient of the best-of-group objective; some trajectory audit artifacts are unreleased.

## What to improve

Explain and resolve quarantined task protocols, release audit artifacts, repeat searches, and separate harness transfer from extra compute and executor strength.

## Connections

Both train a proposer with frozen execution, but [Guidance-TTT](../guidance-ttt/index.md) learns parent-conditioned strategic changes whereas HarnessTTT searches the executor's prompts, skills, tools, and middleware as a complete harness.
