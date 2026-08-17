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
date: 2026-04-23
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2510.16701
code_url: https://github.com/ZHANG-NI/AFL
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

Complex VRPs require more than choosing a route-scoring rule: a system must interpret heterogeneous constraints, construct a compatible solver, run it, diagnose infeasibility, and repair code. AFL treats those steps as an agent workflow rather than assuming a clean, predefined heuristic interface.

## Core method

Four specialized agents divide the loop. A problem-analysis agent extracts requirements and constraints; a design agent proposes the solution strategy; a coding agent implements it; and a judging agent checks descriptions, code, execution, and feasibility, returning targeted revision feedback. The workflow iterates until the generated solver passes its checks and produces a feasible solution.

The benchmark contains 60 complex VRP settings. Evaluation separates feasibility and execution success from solution quality, which is important because an apparently strong objective value is meaningless when constraints are violated.

## Contributions

- An end-to-end agent decomposition for understanding, implementing, and repairing VRP solvers.
- Explicit judgment loops at both design-description and executable-code levels.
- Evaluation on complex constrained variants rather than only canonical CVRP instances.

## Strengths and limitations

The separation of roles makes failures easier to localize and gives feasibility first-class status. It also creates a long and expensive interaction chain whose success depends on the judge prompts and execution harness. The evidence is domain-specific, so it does not yet show that the same four-agent decomposition transfers outside routing.

## What to improve

Add formal constraint checking where possible, report per-agent token and retry costs, test ablations that merge agent roles, and compare with single-agent coding systems under the same execution budget.

## Connections

AFL extends the scope from evolving a heuristic component to assembling a working constrained solver. It is closest in purpose to ARS, but uses a multi-agent construction-and-repair workflow rather than augmenting a fixed routing backbone with retrieved constraint knowledge.
