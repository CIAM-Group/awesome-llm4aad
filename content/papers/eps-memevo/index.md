---
id: eps-memevo
short_title: ε-MemEvo
title: "$\\varepsilon$-MemEvo: Adaptive Cross-Task Memory Transfer for LLM Program Evolution"
authors:
  - Aofan Liu
  - Shiyuan Song
  - Yiyan Qi
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.12522
institutions:
  - affiliation-not-disclosed
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - Mathematical Program Discovery
  - Systems Optimization
featured: false
summary: Learns when and how strongly to inject cross-task mutation memories into an existing evolutionary code-search loop.
---

## Why it matters

Reusable advice can accelerate search, but irrelevant memories can repeatedly push mutations in an unhelpful direction.

## Core method

A completed task contributes a tactic distilled from its best program. Embedding retrieval supplies a small set of candidate memories during later AdaEvolve searches. A contextual Thompson-sampling gate chooses no memory, a light hint, or stronger guidance. Its six contexts combine improvement/plateau/stagnation with early/late search.

Gate credit comes from improvement over a delayed five-iteration window, not the LLM's confidence in its own advice. Beta posteriors carry across tasks. Leave-one-task-out evaluation excludes target-task memory content, but retains the learned gate posterior; it therefore tests transfer of the controller as well as the memory. Experiments use eight mathematical and systems tasks, two model backbones, and paired runs.


## Contributions

Treats memory use as a learned search-control decision rather than injecting retrieved text at every mutation.

## Strengths and limitations

Skip and weak-guidance actions can limit negative transfer. Delayed binary rewards make credit assignment coarse, and leave-one-task-out memory exclusion should not be mistaken for resetting all learned state.

## What to improve

Separately hold out gate-training tasks, compare complete token costs, and audit failed transfers under deliberately misleading memories.

## Connections

[EvoMem](../evomem/index.md) focuses on extracting provenance-backed mutation knowledge and retrieving relevant entries. ε-MemEvo addresses a complementary question: whether retrieved knowledge should influence the next search stage at all.
