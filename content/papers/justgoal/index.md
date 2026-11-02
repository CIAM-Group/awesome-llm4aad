---
id: justgoal
short_title: "JustGoal"
title: "JustGoal: With Only a Goal, the AI Baseline Is Above the Expert Kernels"
authors:
  - "Yaojian Chen"
  - "Dazhi Peng"
  - "Zhui Zhu"
  - "Leshan Li"
  - "Haojun Sun"
  - "Yiyun Zheng"
  - "Qingfeng He"
  - "Shangzhan Li"
  - "Xianglong Deng"
  - "Yifei Shen"
  - "Shengye Xiang"
  - "Zhen Li"
  - "Lin Gan"
  - "Yuxuan Li"
  - "Xu Han"
  - "Zhiyuan Liu"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.36434
institutions:
  - tsinghua
  - modelbest
  - hit
  - university-chinese-academy-sciences
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "GPU Kernel Optimization"
  - "Agent Baseline Evaluation"
featured: false
summary: "Tests a general-purpose goal-only coding agent against expert kernels and specialized harnesses, with independent final timing and correctness checks."
---

## Why it matters

A specialized workflow's benefit can disappear when the underlying model improves. Released kernel artifacts alone cannot isolate the contribution of the harness that produced them.

## Core method

JustGoal gives a general-purpose coding agent an optimization objective, target hardware, and constraints, but no kernel-specific knowledge base or prescribed search workflow. The agent constructs its own compilation, testing, and timing loop. The prompt still supplies important constraints, including numerical-tolerance guidance.

Authors independently recheck final kernels with the relevant FlashAttention or FlashInferBench procedures, including cold-cache and CUPTI measurements. Additional experiments hold the base model and single-shape scope fixed while varying harness components.

## Contributions

On B200, retained kernels beat library implementations on eight of ten operators and the fastest available specialized-agent artifact on five of nine comparisons. In the controlled single-shape setting, KDA-0.5 reaches 0.95× JustGoal's performance.

## Strengths and limitations

The same-model control is more informative than the headline artifact comparison, whose models and discovery budgets differ. Broader multi-shape scope can favor specialized infrastructure. Results do not establish that domain knowledge is universally useless, nor that finite numerical checks make kernels production-ready; reproducing the complete KDA workflow was also limited.

## What to improve

Repeat with fully reproducible harnesses, equal end-to-end budgets, more devices, and whole-workload correctness and performance requirements.

## Connections

[D2K-Bench](../d2k-bench/index.md) isolates the value of supplied algorithmic and dataflow guidance with paired kernel-development runs. JustGoal asks a general coding agent to construct its own optimization loop from a goal and constraints. They probe the need for specialized guidance under different tasks and controls.

Both address who controls hardware measurement during kernel improvement. JustGoal lets the coding agent choose profiling tools and probes within its run. [AutoProfiler](../autoprofiler/index.md) instead evolves a profiling tree offline, then selects metric groups deterministically before a single rewrite. This contrasts online discretionary profiling with a reusable, budgeted measurement policy.

Both consider when kernel development should leave a high-level representation. [TileCas](../tilecas/index.md) explicitly selects an edit action, retained source candidate and abstraction level from mapped code and profiling evidence. In JustGoal's GDN case study, the general coding agent decides its own progression from Triton to CUDA and hardware-specific tensor-core instructions without prescribed stages. This compares explicit abstraction scheduling with agent-directed toolchain changes.
