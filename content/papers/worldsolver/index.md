---
id: worldsolver
short_title: "WorldSolver"
title: "WorldSolver: Can LLM Agents Simulate the Physical Dynamics via Solver Generation?"
authors:
  - "Siru Jiang"
  - "Yongzhe Lyu"
  - "Shuo Lu"
  - "Yubin Wang"
  - "Yuxiang Zhang"
  - "Yue Liao"
  - "Bin Wang"
  - "Jian Liang"
  - "Tieniu Tan"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.08720
code_url: https://github.com/sirujiang/WorldSolver
institutions:
  - casia
  - pku
  - huawei-noahs-ark
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
  - scope
problems:
  - "Physical Simulation Solver Generation"
featured: false
summary: "Evaluates generated physical-dynamics solvers within fixed scenes using execution checks, rendered visual fidelity, and numerical physical-law residuals."
---

## Why it matters

A simulator can render a plausible animation while violating physics, or satisfy selected invariants without reproducing the intended phenomenon.

## Core method

The benchmark derives 168 tasks from 61 graphics papers across seven physical domains. A fixed scaffold supplies geometry, physical parameters, boundary conditions, rendering, and execution interfaces; agents modify only the solver that advances state.

Submitted trajectories are checked for successful execution, scored by a vision-language judge on event order, interaction, signature behavior, and temporal coherence, and tested against hidden task-specific physical rules. Numerical residuals include conservation and contact constraints. Failed execution scores zero; otherwise visual and physical scores are averaged. Agents have thirty minutes to generate a solver and solvers have ten minutes to run.

## Contributions

Controlled scenes isolate solver implementation from asset or renderer changes, while complementary visual and continuous-state checks expose different failure modes.

## Strengths and limitations

Across seven evaluated agents, the best aggregate score is 48.7/100, leaving substantial headroom. This is a composite score, not a solver correctness rate. The visual judge sees sampled frames, physical checks cover only selected laws, and different agent scaffolds complicate attribution to model capability alone.

## What to improve

Increase expert auditing, add perturbation and long-horizon stability tests, and report uncertainty and separate physical-rule failures.

## Connections

[ADSL-PDE](../adsl-pde/index.md) restricts solver designs through a typed description and compiler. WorldSolver evaluates comparatively unrestricted solver code inside a protected environment: they expose complementary representation-level and execution-level approaches to validity.
