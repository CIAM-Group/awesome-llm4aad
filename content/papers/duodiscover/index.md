---
id: duodiscover
short_title: "DuoDiscover"
title: "DuoDiscover: Scaling Autonomous Discovery Beyond the Evaluation Bottleneck"
authors:
  - "Shubham Agarwal"
  - "Akshat Gupta"
  - "Mike Heddes"
  - "Dilara Soylu"
  - "Rui Meng"
  - "Patrick Tser Jern Kon"
  - "Jiefeng Chen"
  - "Mert Cemri"
  - "Shu Liu"
  - "Abe Gonzalez"
  - "Akanksha Jain"
  - "Bhavana Dalvi Mishra"
  - "Linfeng Song"
  - "Vilobh Meshram"
  - "Xiangru Tang"
  - "Jinsung Yoon"
  - "Aditya Parameswaran"
  - "Ion Stoica"
  - "Vahab Mirrokni"
  - "Burak Gokturk"
  - "Parthasarathy Ranganathan"
  - "Tomas Pfister"
  - "Nanyun Peng"
  - "Chun-Liang Li"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.17184
institutions:
  - google
  - uc-berkeley
  - stanford
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
  - search
problems:
  - "Repository optimization"
  - "GPU and TPU kernels"
  - "CPU microarchitecture"
featured: false
summary: "DuoDiscover jointly discovers optimization targets and cheap proxy evaluators, continually checking proxy ranking fidelity against expensive true evaluations."
---

## Why it matters

When a true evaluation takes hours, increasing proposal throughput alone cannot scale discovery. The system must find changes that matter and an inexpensive way to judge their local progress.

## Core method

Each worker chooses a code region and writes a tailored executable proxy, or yardstick, that returns a score and correctness flag. It hill-climbs that proxy in a fast inner loop and periodically submits promising states to the fixed expensive evaluator. After each true evaluation, a fidelity test compares proxy and true rankings using Kendall correlation on pairs separated beyond measured noise. A drifting proxy is invalidated and rebuilt or abandoned. A lightweight orchestrator terminates stalled workers, starts new targets, briefs active workers, and transfers or combines only confirmed changes. Neither a central task decomposition nor a user-marked edit region is required.

## Contributions

- Treats cheap evaluation as a discovered artifact coupled to its optimization target.
- Tests repository and GPU/TPU suites plus extended engineering cases, reporting re-evaluated final candidates rather than the maximum noisy score observed during search.

## Strengths and limitations

Main benchmark results are single-run, with repeated-run checks restricted to subsets. When no faithful proxy exists the method falls back to expensive search; proxy construction and fidelity warmup can dominate short budgets. A proxy may be used before enough paired evidence exists to validate it, so true evaluation remains essential.

## What to improve

Study uncertainty-aware proxy admission, account for failed proxy construction and all hardware cost, and expand repeated-run evidence for expensive cases.

## Connections

[ArchAgent v2](../archagent-v2/index.md) reduces hardware-search cost with prescribed shortened traces before longer validation. DuoDiscover instead lets agents construct target-specific proxies and repeatedly invalidate them when their rankings cease to match true evaluations.
