---
id: evomem
short_title: EvoMem
title: "EvoMem: Memory-Augmented Evolution for Code Optimization"
authors:
  - Viktor Volkov
  - Valentin Khrulkov
  - Andrey V. Galichin
  - Danil Sivtsov
  - Nikita Glazkov
  - Olga Volkova
  - Konstantin Pchelin
  - Iaroslav Bespalov
  - Dmitry V. Dylov
  - Petr Anokhin
  - Ivan Oseledets
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.10795
institutions:
  - axxx
  - moscow-state-university
  - applied-ai-institute
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - scope
problems:
  - Code Optimization
  - Geometric Optimization
  - GPU Kernel Optimization
  - Multi-Hop Question Answering
featured: false
summary: Converts successful parent–child mutations into persistent, provenance-backed advice for subsequent evolutionary code searches.
---

## Why it matters

A useful modification discovered in one run is often lost when the program population is discarded.

## Core method

After a run, EvoMem extracts promising non-root mutation events together with their parent/child programs, measured changes, and task context. Semantic clustering and conservative merging consolidate repeated mechanisms without treating superficially similar code as the same idea. Memory entries retain exemplars and provenance rather than only ungrounded verbal summaries.

During a later search, task-scoped lexical and embedding retrieval selects a bounded set of entries to guide mutation. The underlying parent selection, validity checks, and fitness evaluation remain in place; advice does not bypass execution. The GigaEvo-based study covers geometry, question answering, AlgoTune, and KernelBench. Its search-speed ratio measures candidate evaluations needed to reach the baseline endpoint, not wall-clock acceleration.


## Contributions

Separates a post-run memory-writing phase from bounded, task-aware memory use during mutation.

## Strengths and limitations

Linked execution evidence makes advice auditable and enables cross-run reuse. Gains vary substantially across tasks and runs; some reach targets more slowly, and memory construction adds model cost.

## What to improve

Report full amortized cost over repeated tasks, test forgetting and stale-memory policies, and isolate the value of provenance from retrieval and extra prompt tokens.

## Connections

[ReEvo](../reevo/index.md) uses reflective search feedback within a run. EvoMem instead persists measured mutation knowledge across runs and tasks; [ε-MemEvo](../eps-memevo/index.md) then offers a contrasting control strategy for deciding when such memories should be used.
