---
id: presage
short_title: Presage
title: "Presage: Prefetch Search via Agent-Guided Experiments"
authors:
  - Matthew Giordano
  - Parthasarathy Ranganathan
  - Baris Kasikci
  - Akanksha Jain
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.22636
institutions:
  - google
  - university-washington
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
problems:
  - Software Prefetching
  - CPU Code Optimization
featured: false
summary: Agents propose, experimentally optimize, and combine software-prefetch patches using source-level profiling and measured workload runtime.
---

## Why it matters

A prefetch can slow a program by adding instructions or interfering with other memory accesses. Finding useful insertion sites and composing individually good edits requires understanding program behavior.

## Core method

A proposer inspects source and profiling summaries to nominate functions with prefetchable bottlenecks; it intentionally does not prescribe exact code. Separate optimizer agents work in isolated copies, insert and revise prefetches, and benchmark runtime. Custom tools expose instruction-normalized source and assembly metrics to explain results; cache misses are diagnostic signals, not the optimization objective.

A combiner then searches combinations of successful patches. Combining two individually good changes is not automatically accepted: the result must improve on the baseline and individual proposals. The output is a small source patch specialized to a workload, compiler, operating system, and microarchitecture. Tests provide feedback, while manual patch review remains part of the correctness process.

## Contributions

- Uses semantic code reasoning and experiment loops for software-prefetch discovery.
- Explicitly handles interference when combining independently optimized regions.

## Strengths and limitations

The reported suite spans 81 workloads and includes large multi-file applications. Results are hardware-specific; tests and LLM review do not prove semantic equivalence. The pruning of combinations also relies on assumptions about how independently discovered proposals interact.

## What to improve

Measure portability and patch durability after software changes, and strengthen automated correctness checks without hiding manual review costs.

## Connections

[ArchAgent v2](../archagent-v2/index.md) evolves hardware-prefetch logic across cache levels. Presage instead modifies application-side software prefetches. The shared optimization target exposes a concrete design-boundary trade-off, not a claim that their implementations derive from one another.
