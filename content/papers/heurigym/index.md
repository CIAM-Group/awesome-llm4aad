---
id: heurigym
short_title: "HeuriGym"
title: "HeuriGym: An Agentic Benchmark for LLM-Crafted Heuristics in Combinatorial Optimization"
authors:
  - "Hongzheng Chen"
  - "Yingheng Wang"
  - "Yaohui Cai"
  - "Hins Hu"
  - "Jiajie Li"
  - "Shirley Huang"
  - "Chenhui Deng"
  - "Rongjian Liang"
  - "Shufeng Kong"
  - "Haoxing Ren"
  - "S. Samaranayake"
  - "Carla P. Gomes"
  - "Zhiru Zhang"
year: 2026
date: 2025-06-01
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2506.07972
code_url: https://github.com/cornell-zhang/heurigym
institutions:
  - cornell
  - harvard
  - nvidia
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Combinatorial Optimization Benchmarking"
featured: false
summary: "HeuriGym evaluates whether LLM agents can iteratively produce executable, high-quality heuristics across diverse optimization tasks."
---

## Why it matters

Static coding benchmarks do not test whether an agent can improve an executable heuristic through repeated measurement. HeuriGym provides a common environment for this open-ended process and distinguishes producing valid code from producing consistently strong code.

## Core method

Each task gives an agent a heuristic interface, executable evaluator, and iterative feedback loop. Nine combinatorial-optimization problems cover different artifact and constraint patterns. The Quality-Yield Index combines the quality of successful heuristics with the rate at which an agent produces evaluable outputs, preventing a method from hiding many failures behind one strong sample.

The benchmark compares multiple models and agent configurations, reports per-task behavior, and supports reproducible evaluation through its released environments.

## Contributions

- Nine executable heuristic-design environments behind one agent protocol.
- Quality-Yield Index for joint quality and reliability measurement.
- An open benchmark for comparing models, prompting, and agent scaffolds.

## Strengths and limitations

Executable environments make results more meaningful than textual judging, and the yield term exposes brittleness. A single combined metric can hide whether gains come from validity or objective quality. The nine tasks remain mostly combinatorial optimization and may favor familiar Python heuristic interfaces.

## What to improve

Publish metric components beside the aggregate, add wall-clock and evaluator-call budgets, and extend the gym to full solvers, online adaptation, and coupled algorithms.

## Connections

HeuriGym is evaluation infrastructure rather than an AHD method. It complements the EPS Benchmark by testing agentic heuristic crafting across a broader shared interface.
