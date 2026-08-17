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
institutions:
  - cityu-hk
  - huawei-noahs-ark
  - sustech
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

ARS generates constraint-aware routing heuristics inside a backbone solver and is evaluated on 1,000 VRP variants in RoutBench.

## Core method

LLM agents interpret problem descriptions, retrieve representative constraints, and generate compatible heuristic code for a backbone metaheuristic, with execution feedback used to repair invalid solvers.

## Contributions

- Introduces the design described above for Vehicle Routing Problem.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
