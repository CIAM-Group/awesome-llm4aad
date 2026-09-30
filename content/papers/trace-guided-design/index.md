---
id: trace-guided-design
short_title: Trace-Guided Design
title: "LLM-Guided Heuristic Design from Simulation Traces: A Case Study in Dynamic Production and AGV Scheduling"
authors:
  - Jinbo Li
  - Chuanhao Li
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.09343
institutions:
  - tsinghua
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - Dynamic Production Scheduling
  - Automated Guided Vehicle Scheduling
featured: false
summary: Uses queryable simulation traces to diagnose and revise executable production and AGV scheduling policies between evaluation batches.
---

## Why it matters

A mean simulator score does not reveal whether a scheduling policy fails because of charging, empty travel, buffer blocking, or starvation.

## Core method

Each candidate remains fixed during a simulation run. Repeated scoring runs estimate its mean performance; a selected difficult replication provides a trace database and grouped operational metrics. A manager agent inspects this evidence and the incumbent, proposes revision directions, and delegates executable changes to editing agents.

Loading or runtime failures trigger bounded repairs followed by a complete reevaluation. Only fully evaluated candidates can compete with the incumbent, which is retained unless a candidate has a better estimated mean. The process stops on budget, target score, or stagnation. Diagnostic hypotheses guide edits, but simulator outcomes decide promotion; no LLM makes online dispatch decisions during deployment.


## Contributions

Connects process-level evidence to code revision in a dynamic production/transport scheduling case study.

## Strengths and limitations

Traces make failure mechanisms inspectable. A single incumbent limits diversity, finite independent-seed estimates can misrank candidates, and the worst replication may not represent normal operation.

## What to improve

Compare matched-seed promotion tests, alternative trace-selection rules, and structured revision memory before claiming transfer to other discrete-event systems.

## Connections

[ReEvo](../reevo/index.md) turns performance feedback into reflective guidance. This study changes the feedback substrate to inspectable simulation events and operational states, allowing hypotheses about mechanisms rather than only aggregate scores.
