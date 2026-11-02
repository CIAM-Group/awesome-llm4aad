---
id: ascendevolve
short_title: "AscendEvolve"
title: "Beyond Experience: Knowledge-Guided Evolution for NPU Kernel Generation"
authors:
  - "Xi Chen"
  - "Ming Shen"
  - "Haotian Yan"
  - "Ruoyu Sun"
  - "Tianjun Yao"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.27588
institutions:
  - slai
  - guangzhou-university
  - sjtu
  - swufe
  - cuhk-shenzhen
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - scope
problems:
  - "NPU Kernel Generation"
  - "Evidence-Grounded Program Search"
featured: false
summary: "Grounds diverse Ascend kernel search and mechanism-level recombination in retrieved platform documentation, toolkit headers, and measured local evidence."
---

## Why it matters

An agent cannot reliably discover unfamiliar accelerator mechanisms by remembering only code it has already tried.

## Core method

A versioned shared knowledge base indexes platform documents, toolkit headers, and operator repositories. Task-local records retain hypotheses, parentage, failures, measurements, and lessons. Demand-driven retrieval supplies small evidence slices for proposal, repair, and optimization; local measurements can override a documented expectation without rewriting shared facts.

The first stage explores distinct implementation-strategy trees, retaining failures and backtracking when necessary. The second combines a strong base with donor mechanisms selected for its diagnosed weakness, checks compatibility, and reevaluates the resulting kernel.

## Contributions

On 53 CANN-Bench operators, AscendEvolve reports a composite score of 71.39, 11.6% and 17.2% above Reflexion and OpenEvolve. Knowledge-base ablations show particularly large effects on intermediate-complexity tasks.

## Strengths and limitations

The knowledge is operationally grounded rather than an unverified narrative summary. However, the score is not a speedup ratio, overall correctness does not exceed every baseline, and hardest-level correctness remains 35%. Validity is established by tests, not semantic proof; knowledge and measurements depend on hardware and toolchain versions.

## What to improve

Evaluate new toolchains and operators, publish retrieval and device-cost accounting, and test stale or conflicting source evidence systematically.

## Connections

For unfamiliar accelerators, AscendEvolve retrieves from a version-scoped platform corpus and records task-local counterevidence. The RNGD loop explicitly builds and rechecks its platform knowledge with probe kernels and compiler tests when the toolchain changes. See [RNGD Kernel Loop](../rngd-kernel-loop/index.md).

Both retrieve external evidence to address specific gaps encountered during program search. [EvoDuet](../evoduet/index.md) evolves web queries and ranks documents by predicted downstream solution gains. AscendEvolve routes exact questions into a fixed, version-scoped platform corpus, filters by source authority, and lets device evidence override documentation for the current task.
