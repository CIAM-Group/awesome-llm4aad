---
id: mosaic-dag
short_title: "MoSAIC Scheduling"
title: "MoSAIC: Learning DAG Scheduling Heuristics from Optimal Schedules through Motif-Aware Recovery and LLM-Guided Reasoning"
authors:
  - "Shiva Ahir"
  - "Hashmath Shaik"
  - "Alex Doboli"
  - "Nadeem Yaseen"
  - "Simona Doboli"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.15205
institutions:
  - stony-brook
  - barcelona-supercomputing
  - hofstra
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - scope
problems:
  - "DAG Scheduling"
  - "Optimal-Schedule Supervision"
featured: false
summary: "Recovers compact priority rules from exact DAG schedules with Bayesian optimization and trains an LLM to select ready tasks using motif-aware evidence."
---

## Why it matters

Exact scheduling is expensive, but its solutions can supervise reusable decisions rather than being discarded after solving each small instance.

## Core method

CP-SAT produces optimal schedules for small DAGs. Bayesian optimization fits linear priority weights over fixed structural features such as rank, depth, fanout, indegree, and communication cost. The resulting motif-linked rules and optimal traces populate a knowledge base.

The paper then reports supervised fine-tuning and reinforcement learning of an LLM that selects the next ready task from structured context. Thus Bayesian optimization recovers the numeric heuristic parameters, while the LLM learns scheduling decisions; the method does not evolve arbitrary executable heuristic source.

## Contributions

Reported decision accuracy rises from 67.5% after fine-tuning to 80.8% after reinforcement learning. Synthetic-task makespan gap averages 2.1%, compared with 5.6% for HEFT, with additional PolyBench and MachSuite studies.

## Strengths and limitations

Optimal supervision provides a concrete target and interpretable feature weights. Evidence is concentrated on two-processor systems, with costly small-instance oracle generation and a fixed feature family. The claimed model fine-tuning procedure and implementation details are insufficiently specified for independent reproduction; larger heterogeneous and dynamic settings remain untested.

## What to improve

Release the complete training recipe and artifacts, separate BO-only and LLM-policy contributions under matched budgets, and test processor-count and graph-distribution transfer.

## Connections

Both use expert action information to improve sequential scheduling decisions. [Teacher-Aware](../teacherevo/index.md) queries a learned policy on program-visited states and uses disagreements to evolve standalone heuristic code. MoSAIC trains its scheduling LLM on CP-SAT next-task traces with motif context and refines it with makespan rewards, retaining model inference in the scheduling policy. The contrast is teacher-guided program search versus trained runtime action selection.

This scheduling paper is distinct from [MOSAIC](../mosaic/index.md).
