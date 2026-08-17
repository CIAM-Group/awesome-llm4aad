---
id: dash
short_title: "DASH"
title: "Rethinking LLM-Driven Heuristic Design: Generating Efficient and Specialized Solvers via Dynamics-Aware Optimization"
authors:
  - "Rongzheng Wang"
  - "Yihong Huang"
  - "Muquan Li"
  - "Jiakai Li"
  - "Di Liang"
  - "Bob Simons"
  - "Pei Ke"
  - "Shuang Liang"
  - "Ke Qin"
year: 2026
date: 2026-01-14
venue: arXiv
paper_url: https://arxiv.org/pdf/2601.20868
institutions:
  - uestc
  - tencent-hunyuan
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - scope
problems:
  - "Combinatorial Optimization"
featured: false
summary: "DASH co-optimizes solver search and runtime schedules with convergence-aware feedback and a profiled solver library."
---

## Why it matters

Endpoint-only scores hide slow or unstable solvers, and distribution shifts can force a full redesign. DASH treats convergence behavior and solver specialization as first-class design signals.

## Core method

Dynamics-Aware Solver Heuristics uses a convergence-aware metric to guide generated solver search and runtime scheduling. A profiled library retrieves specialized components so new instance groups need less re-adaptation.

## Contributions

- Feedback from convergence dynamics rather than only final quality.
- Joint optimization of solver structure and runtime schedule.
- Retrieval of profiled components for specialization.

## Limitations and extensions

The library and dynamics metric depend on reliable profiling data. Cross-domain reuse and online updating under changing instance distributions remain open.
