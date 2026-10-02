---
id: archagent-v2
short_title: ArchAgent v2
title: "ArchAgent v2: A Case Study with the Data Prefetching Championship"
authors:
  - Abraham Gonzalez
  - Raghav Gupta
  - Akanksha Jain
  - Hanna Alam
  - Alexander Novikov
  - Po-Sen Huang
  - Matej Balog
  - Marvin Eisenberger
  - Sergey Shirobokov
  - Ngân Vũ
  - Hank Levy
  - Borivoje Nikolić
  - Sagar Karandikar
  - Martin Dixon
  - Parthasarathy Ranganathan
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.09874
institutions:
  - google
  - uc-berkeley
  - google-deepmind
primary_dimension: scope
dimensions:
  - scope
  - search
  - feedback
problems:
  - Hardware Prefetching
  - Cache Hierarchy Optimization
featured: false
summary: Evolves coordinated hardware prefetchers across cache levels using staged search, joint refinement, and simulation-based validation.
---

## Why it matters

A prefetcher that helps one cache can waste bandwidth or interfere with another, so independent per-level tuning misses interactions.

## Core method

The system first evolves L1D, L2, and last-level-cache prefetchers in stages while freezing the other levels. It then runs joint and multicore refinement passes, reusing promising lineages. AlphaEvolve proposes code changes and simulation evaluates the resulting cache hierarchy, rather than evaluating each prefetcher as an isolated predictor.

Search uses shortened traces; selected designs face longer validation traces. Generated implementations must respect per-level storage budgets. Their size-reporting functions are co-edited and audited, including final manual checking, so the process is not a proof that arbitrary generated hardware satisfies every implementation constraint. Reported IPC gains concern the DPC4 simulation configuration and workloads.


## Contributions

Turns hierarchical coordination and compute-conscious simulation into explicit parts of prefetcher discovery.

## Strengths and limitations

Joint passes address cross-level interactions neglected by isolated search. Simulator IPC and storage accounting do not establish silicon timing, power, or robustness to all unseen workloads.

## What to improve

Validate physical implementation costs and test whether improvements survive trace, core-count, and memory-system shifts under fixed search budgets.

## Connections

[AlphaEvolve](../alphaevolve/index.md) supplies the evolutionary program-search backbone. [Presage](../presage/index.md) instead inserts software prefetches into application code; the distinction is the editable layer, not two names for the same prefetching technique.
