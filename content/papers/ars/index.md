---
id: ars
short_title: "ARS"
title: "ARS: Automatic Routing Solver with Large Language Models"
authors:
  - "Kai Li"
  - "Fei Liu"
  - "Zhenkun Wang"
  - "Xialiang Tong"
  - "Xiongwei Han"
  - "Mingxuan Yuan"
  - "Qingfu Zhang"
year: 2025
date: 2025-02-01
venue: "OpenReview/arXiv"
paper_url: https://arxiv.org/pdf/2502.15359
code_url: https://github.com/Ahalikai/ARS-Routbench
institutions:
  - sustech
  - cityu-hk
  - huawei-noahs-ark
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - "Vehicle Routing Problem"
featured: false
summary: "ARS generates constraint-aware routing heuristics inside a backbone solver and is evaluated on 1,000 VRP variants in RoutBench."
---

## Why it matters

Real routing systems combine capacities, time windows, precedence, pickup-delivery, and many other constraints. A solver generator that succeeds only on a few named VRP variants does not demonstrate general constraint handling. ARS pairs automatic solver construction with a benchmark designed to expose that gap.

## Core method

ARS retains a backbone metaheuristic and asks LLM agents to generate the constraint-aware components it needs. From a natural-language problem description, the system identifies relevant attributes, retrieves representative constraint examples from a database, synthesizes compatible code, and uses execution feedback for repair. This narrows the generation problem without requiring a separate hand-written rule for every variant.

RoutBench systematically combines 24 routing attributes into 1,000 variants. Against seven LLM-based methods, ARS reports over 90% success on common VRPs and over 60% on RoutBench, at least 30 percentage points above compared methods in success rate.

## Contributions

- A retrieval-augmented agent pipeline for constraint-aware routing code.
- RoutBench, a 1,000-variant benchmark derived from 24 practical attributes.
- Separate evidence on solver success, constraint coverage, and solution quality.

## Strengths and limitations

The backbone gives generated code a stable execution contract and the benchmark is substantially broader than standard CVRP tests. That same backbone limits the algorithm structures ARS can discover. Success rates also depend on the correctness and coverage of the constraint database and checker.

## What to improve

Analyze compositional failures when individually familiar constraints interact, verify feasibility with independent solvers, and compare retrieval against longer in-context libraries under matched token budgets.

## Connections

ARS and AFL both automate constrained routing solvers. ARS specializes a stable metaheuristic through retrieved constraint knowledge; AFL delegates more of the end-to-end design and repair process to collaborating agents.
