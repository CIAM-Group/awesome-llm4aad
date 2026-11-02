---
id: labbook
short_title: LabBook
title: "LabBook: Harnessing Experimental History for Efficient LLM-Driven Discovery"
authors:
  - "Bo Yuan"
  - "Wenqian Ye"
  - "Zelin Zhao"
  - "Lama Moukheiber"
  - "Henry Kautz"
  - "Aidong Zhang"
  - "Yongxin Chen"
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.00675
institutions:
  - gatech
  - university-virginia
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - Program Optimization
  - Scientific Algorithm Discovery
  - Heuristic Design
featured: false
summary: "Uses one agent to rewrite a research notebook and selectively retrieve exact experiments from an append-only log before proposing new programs."
---

## Why it matters

Selecting only successful ancestors loses useful failures, while replaying every experiment wastes context. LabBook separates complete record retention from the evidence presented to the next proposal.

## Core method

Each iteration starts with the latest program and evaluation, a rewritten natural-language notebook, and deterministic best-so-far progress signals. The same agent may make up to five read-only actions: inspect the score history, fetch a chosen program, fetch its evaluator result, or stop retrieval. It then jointly emits the next complete program and updated notebook.

Evaluation appends the exact attempt to the log; the final output is the best evaluated program, not necessarily the last. There is no explicit population, branching controller, embedding retriever, or parameter update. The notebook records attempted approaches, implementation details, lessons, and unresolved directions.

## Contributions

- A compact, inspectable alternative to population-mediated experimental memory.
- Quality–API-cost comparisons on 49 Frontier-CS problems and nine additional discovery tasks.

## Strengths and limitations

Two-backbone results and retrieval/memory ablations support selective evidence access. The additional-task results are not all lower-cost wins, and API-dollar comparisons depend on provider pricing. The study largely assumes stable task interfaces and evaluators; noisy experimental settings remain open.

## What to improve

Test corrupted or contradictory notebook summaries, noisy evaluations, and long-run growth of the supposedly compact memory.

## Connections

[RefineEvo](../refineevo/index.md) retrieves structured positive and negative lessons to guide its planned evolutionary operations. LabBook lets one agent rewrite a compact notebook and selectively reopen exact past code and results before proposing the next program.

LabBook updates memory from the current discovery run and retrieves exact experiments before each new program. [MUSE](../muse/index.md) freezes a bank built from prior tasks, then gates implementation advice after tool returns. They place experimental memory at different points in the coding process.
