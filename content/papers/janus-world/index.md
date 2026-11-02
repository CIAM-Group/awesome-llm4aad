---
id: janus-world
short_title: "JANUS-World"
title: "JANUS: Enhancing Long-Horizon Autonomous Research with Co-Evolving World Models"
authors:
  - "Mengdi Liu"
  - "Chenghao Jia"
  - "Hong Chang"
  - "Mingjie He"
  - "Shiguang Shan"
  - "Xilin Chen"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.13194
code_url: https://github.com/bilemond/JANUS
institutions:
  - cas-ict
  - university-chinese-academy-sciences
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - "Machine learning algorithm discovery"
  - "Kernel optimization"
  - "Autonomous research"
featured: false
summary: "JANUS uses an evolving research graph and a reflective world-model agent to rank, refine, and prune experimental proposals before expensive implementation and evaluation."
---

## Why it matters

Reactive execute-and-revise loops waste long experiments on weak branches. This JANUS tries to predict not only immediate improvement but also what an experiment could teach or enable later.

## Core method

The orchestrator creates open proposal nodes by modifying, extending, or combining earlier research. A world-model agent compares proposal pairs on expected performance improvement, information gain, and future exploration utility; a sparse tournament yields normalized Bradley–Terry scores. Progress and remaining budget determine how those criteria are weighted. The agent can debate refinements, prune weak proposals, or revisit branches before the selected proposal is implemented and truly evaluated. Closed nodes retain code and results. Successful and failed trajectories then update intra-task and cross-task research skills, prediction/exploration skills for the world model, and coordination protocols. Adaptation is expressed in those evolving skills rather than demonstrated online weight training.

## Contributions

- Combines pre-execution proposal assessment with retrospective correction in one persistent graph.
- Evaluates thirty MLS-Bench-Lite tasks and longer training, attention-kernel, and genotype-prediction investigations.

## Strengths and limitations

Value and information-gain estimates are model judgments, not guaranteed calibrated forecasts. Pruning can censor alternatives whose true value is never observed. Reported sample efficiency does not by itself price proposal comparisons and reflection, and the three extended case studies provide limited evidence about broad long-horizon reliability.

## What to improve

Measure forecast calibration and false-pruning rates, audit rejected proposals, and compare full compute and model cost across repeated searches.

## Connections

The two systems give world models different roles in selecting search actions. [PathWise](../pathwise/index.md) generates and executes multiple heuristic rollouts before choosing an entailment step. JANUS predicts proposal value before implementation, combining expected improvement, information gain and future exploration utility.

This is distinct from the earlier paper named [Janus](../janus/index.md).
