---
id: afl
short_title: "AFL"
title: "AFL: An Agentic Framework with LLMs for Solving Complex Vehicle Routing Problems"
authors:
  - "Ni Zhang"
  - "Zhiguang Cao"
  - "Jianan Zhou"
  - "Cong Zhang"
  - "Yew-Soon Ong"
year: 2026
date: 2025-10-01
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2510.16701
institutions:
  - smu
  - ntu
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - "Complex Vehicle Routing Problem"
featured: false
summary: "AFL uses specialized agents to turn raw descriptions of complex vehicle-routing instances into executable and feasible solvers."
---

## Why it matters

AFL uses specialized agents to turn raw descriptions of complex vehicle-routing instances into executable and feasible solvers.

## Core method

Four agents divide problem understanding, algorithm and code generation, execution, feasibility checking, and repair across an end-to-end workflow evaluated on complex VRP benchmarks.

## Contributions

- Introduces the design described above for Complex Vehicle Routing Problem.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
