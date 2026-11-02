---
id: autoprofiler
short_title: "AutoProfiler"
title: "Less is more: learning what to profile for GPU kernel optimization"
authors:
  - "Yihan Wang"
  - "Peiyu Liu"
  - "Runyu Chen"
  - "Wei Xu"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.36576
code_url: https://github.com/Satissss/AutoProfiler
institutions:
  - renmin-university
  - uibe
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - "GPU Kernel Optimization"
  - "Adaptive Hardware Profiling"
featured: false
summary: "Evolves a deterministic profiling decision tree offline so one downstream kernel rewrite receives selectively gathered hardware evidence."
---

## Why it matters

More profiler counters can consume budget and distract a kernel optimizer. Which evidence to collect is itself a design decision.

## Core method

AutoProfiler starts with a roofline-style tree separating compute- and memory-related regimes. An LLM proposes REWRITE operations that change a leaf's metric bundle and SPLIT operations that partition kernels using measured thresholds.

Paired kernel optimization trials evaluate each tree edit; a conservative reward retains useful changes. Learning occurs offline on CUDA-Agent-Ops data. At deployment the deterministic tree gathers kernel-conditioned evidence and invokes the kernel rewriter once, without another model deciding which counters to query.

## Contributions

On unseen KernelBench tasks and RTX 4090D hardware, the reported configuration reaches 87.2% accuracy and 1.704× average speedup, compared with 1.570× for the strongest reported fixed profiling competitor. Experiments demonstrate that adding counters does not monotonically improve optimization.

## Strengths and limitations

The learned object is an evidence-acquisition policy, not merely a better kernel prompt. However, offline training cost must be separated from cheap deployment. Comparators make different numbers of model calls, and a single hardware family limits portability. Oracle profiling analyses describe headroom, not a deployable policy.

## What to improve

Report amortized training cost and equal-token comparisons, test compiler and device transfer, and quantify whether tree decisions remain useful after kernel revisions.

## Connections

Both address who controls hardware measurement during kernel improvement. [JustGoal](../justgoal/index.md) lets the coding agent choose profiling tools and probes within its run. AutoProfiler instead evolves a profiling tree offline, then selects metric groups deterministically before a single rewrite. This contrasts online discretionary profiling with a reusable, budgeted measurement policy.
