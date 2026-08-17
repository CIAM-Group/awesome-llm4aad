---
id: autoport
short_title: "AutoPort"
title: "LLM-Enabled Automated Algorithm Design for Multiuser Fluid Antenna Communications"
authors:
  - "Gan Zheng"
  - "Fei Liu"
  - "Qingfu Zhang"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.14661
institutions:
  - cityu-hk
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - "Fluid Antenna Port Selection"
  - "Beamforming"
featured: false
summary: "This work applies LLM-enabled algorithm design to joint port selection and beamforming in multiuser fluid antenna systems."
---

## Why it matters

Joint fluid-antenna port selection and beamforming creates a large, coupled, non-convex search problem. Hand-designed methods are expensive and often decouple decisions that should interact. The paper is a useful test of whether LLM-AHD transfers beyond standard routing and packing benchmarks into a constrained communications system.

## Core method

The objective maximizes the minimum user SINR for fairness. The study follows two design routes: LLM evolution improves crossover and mutation operators within a genetic algorithm, and a second search produces AutoPort, a new heuristic designed from scratch. Candidate code is executed in the communications simulator, so feedback reflects the coupled port-selection and beamforming outcome.

Simulations compare the evolved methods with conventional genetic search, deep-learning approaches, and near-optimal references. The paper reports near-optimal performance and sizable improvements over the conventional baselines in its tested settings.

## Contributions

- Applies executable LLM-AHD to a domain-specific, coupled wireless optimization problem.
- Compares component improvement with full heuristic generation from scratch.
- Produces the AutoPort heuristic and reports its implementation explicitly.

## Strengths and limitations

The two routes help distinguish enhancing a known algorithm from inventing a new one. Evidence is simulation-based and tied to the assumed channel model, system size, and evaluator. The paper does not establish robustness to deployment mismatch or explain how much communications knowledge enters through the scaffold.

## What to improve

Stress-test channel and user-distribution shifts, evaluate wall-clock scalability, and compare with domain-expert operators under identical simulation budgets. Releasing the full evaluator would make the transfer claim easier to reproduce.

## Connections

AutoPort is best viewed as a domain adaptation of EoH-style executable search. Its two design modes also illustrate the spectrum between operator evolution and complete heuristic synthesis.
