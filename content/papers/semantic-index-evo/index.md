---
id: semantic-index-evo
short_title: Semantic Index Evo
title: Evolving Semantic Indexes for Generative Retrieval
authors: [Jinming Nian, Jyun-Yu Jiang, Henry Tsai, Yi Fang, Zhirong Liang]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.28568
institutions: [santa-clara-university, coupang]
primary_dimension: feedback
dimensions: [feedback, design-object, search]
problems: [Generative Retrieval, Semantic Index Construction]
featured: false
summary: Evolves semantic-index and collision-handling programs using a tiny retrieval model, and tests when its fitness rankings transfer to a much larger generator.
---

## Why it matters

Semantic identifiers define which documents a generative retriever can reach. Their discrete construction cannot simply be optimized through downstream gradients, while retraining the target generator for every candidate is costly.

## Core method

An AdaEvolve island population selects parent and inspiration programs. A locally served 31B LLM proposes code diffs inside mutable components. Candidates map fixed document/query embeddings and training relevance pairs to integer identifiers. Execution, collision-rate, and timeout gates trigger repair before costly fitness evaluation.

A roughly 1M-non-embedding-parameter GPT-2 decoder learns each candidate's identifiers; Recall@100 on held-out training pairs guides evolution. Selected programs are subsequently tested with a 1B generator. Experiments separately mutate identifiers, collision handling, generator objectives, and the whole pipeline to examine the validity of this proxy rather than assuming it.

## Contributions

Joint identifier/collision evolution raises NQ320K target Recall@100 from 85.82% to 90.57%. A 21-program calibration finds rank correlation 0.90 between proxy and target for semantic-index changes. Three retrieval datasets test the resulting programs.

## Strengths and limitations

The component study exposes a consequential failure: objective and full-pipeline searches improve proxy scores while degrading target recall. Search scopes differ in budgets and initialization, so their selected outcomes are not clean isolated causal comparisons. The calibration does not establish universal proxy reliability.

## What to improve

Calibrate on more independently sampled candidates, introduce uncertainty-aware target evaluations, and compare coupled components under matched search budgets.

## Connections

Both face coupled stages and costly retraining in generative retrieval systems. Evolving Semantic Indexes finds that a tiny-generator proxy transfers better for index changes than for unrestricted objective or pipeline edits. [TGR-EvoDAG](../tgr-evodag/index.md) instead budgets stage-dependent retraining and explicitly adapts downstream stages after upstream changes.
