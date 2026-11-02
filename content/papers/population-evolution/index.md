---
id: population-evolution
short_title: "PE"
title: "Discovered, Not Designed: Population Evolution for Collaborative and Compute-Intensive Model Discovery"
authors:
  - "Bo Peng"
  - "Lizhu Zhang"
  - "Yuhang Zhou"
  - "Mingyi Wang"
  - "Yifan Wu"
  - "Serena Li"
  - "Xiangjun Fan"
  - "Zhuokai Zhao"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.05950
institutions:
  - meta
primary_dimension: scope
dimensions:
  - scope
  - feedback
  - search
problems:
  - "Model architecture discovery"
  - "Training-algorithm discovery"
  - "Multi-task transfer"
  - "Compute-intensive evaluation"
featured: false
summary: "Connects local model-code searches through cross-instance replay and shared evidence, screening small-scale discoveries before expensive full training."
---

## Why it matters

A locally successful model edit need not transfer to another dataset or survive full-scale training. Population Evolution makes cross-instance evidence and staged promotion part of ongoing search.

## Core method

Each source instance retains its own parent archive and training protocol. When a candidate meets its local improvement criterion, the system publishes its executable intervention, mechanism description, provenance, and results to a shared ledger. Peer evaluation restores each receiving instance's reference code, applies the same intervention, and retrains its weights; failed transfers are recorded alongside successes. Summaries of this evidence condition subsequent local proposals without merging code archives. Promotion requires success on at least two of four peers. Joint discovery then tests larger-scale instances and shares their results. For expensive pretraining, small-data searches feed two intermediate evaluations, including a disjoint-data check; passing both permits full-target training. Full-target outcomes are deliberately withheld from proposal context in that track.

## Contributions

- Provides RMD-Bench with recommendation, RL-algorithm, LLM-pretraining, and VLM-pretraining families.
- Tests shared evidence across multiple search harnesses and proposers.
- Measures completed discovery runs under matched total GPU compute for expensive pretraining.

## Strengths and limitations

Transfer requires compatible intervention interfaces. Recommendation target protocols are calibrated and reported on the same released test splits, so those results are not untouched-test generalization. In held-out RL tasks, the best PE candidate remains below the unmodified reference mean. Expensive full searches need more independent replication; local iteration matching does not equal total evaluation work.

## What to improve

Reserve independent calibration and test splits, quantify whole-search variance, and adapt peer/promotion policies without letting target feedback leak into selection.

## Connections

The main implementation uses [AdaEvolve's local search](https://arxiv.org/abs/2602.20133), but this catalogue does not contain an AdaEvolve node. [MECo](../meco/index.md) develops frozen heuristic sets from source-task feedback; PE instead shares executable model interventions, retrains them on peer instances, and promotes successful changes across training scales. The comparison concerns how cross-task evidence supports transfer, not a claimed lineage.
