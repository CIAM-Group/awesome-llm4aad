---
id: tgr-evodag
short_title: TGR-EvoDAG
title: 'TGR-EvoDAG: A DAG-based Multi-Agent Code Evolution Framework for Generative Recommendation on Tencent'
authors:
  - Junlin He
  - Junzhang Zhu
  - Yudong Li
  - Yihong Tang
  - Xuefeng Jiang
  - Wei Ma
  - Chengxiang Zhuo
  - Zang Li
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.32326
institutions:
  - tencent
  - polyu
  - mcgill
  - independent-researcher
primary_dimension: search
dimensions: [search, feedback, scope]
problems: [Generative Recommendation, Multi-Stage Training Pipeline Design]
featured: false
summary: Evolves a complete generative-recommendation pipeline through a code DAG with cross-branch merging, stage-aware GPU budgeting, and deliberate downstream adaptation.
---

## Why it matters

Changing a semantic tokenizer invalidates downstream training and can initially reduce recommendation quality. A search that counts edits equally or immediately discards regressions misses these delayed improvements.

## Core method

Each DAG node records a code snapshot, its parents, hypothesis, affected training stages, measured cost, diagnostics, and distilled lessons. An operator selector chooses exploration, local mutation, or multi-parent merging according to expected gain and retraining cost. Architect–critic and coder–reviewer pairs develop and check the change; merges use diffs against the lowest common ancestor.

Training returns recommendation metrics, mathematical probes, simulated-user diagnostics, and GPU consumption. A distiller records mechanism-level lessons. The pruner can mark a regressed upstream branch as needing downstream adaptation, forcing a later child to repair compatibility rather than abandoning it. Final selection uses validation metrics, not simulated-user satisfaction.

## Contributions

The method makes cross-stage dependencies part of search control. Under a 24-GPU-hour public-data budget, it improves Hit@10 from 0.0626 to 0.0869; the transferred architecture produces a reported 0.40% online CTR increase in a 14-day Tencent experiment.

## Strengths and limitations

Diagnostic-matched baselines help separate richer feedback from search topology. Industrial testing adds deployment evidence, but simulated users are not human subjects, and the internal production environment limits independent reproduction. Generality beyond the evaluated recommendation pipeline remains unproven.

## What to improve

Repeat full searches across datasets and seeds, expose reproducible cost accounting, and quantify when adaptation tags rescue genuinely useful upstream edits.

## Connections

Both face coupled stages and costly retraining in generative retrieval systems. [Evolving Semantic Indexes](../semantic-index-evo/index.md) finds that a tiny-generator proxy transfers better for index changes than for unrestricted objective or pipeline edits. TGR-EvoDAG instead budgets stage-dependent retraining and explicitly adapts downstream stages after upstream changes.

Both reuse code discoveries in recommender search. [EvoSkillRec](../evoskillrec/index.md) promotes validated modules into typed skills for composition inside an architecture. TGR-EvoDAG keeps a graph of evaluated code versions and merges complementary branches, resolving code and cross-stage dependencies.
