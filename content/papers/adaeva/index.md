---
id: adaeva
short_title: "AdaEva"
title: "AdaEva: Accelerating LLM-Driven Algorithm Design with Adaptive Partial Evaluation"
authors:
  - "Tai Nguyen"
  - "Fei Liu"
  - "Phong Le"
  - "Carola Doerr"
  - "Nguyen Dang"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.03896
code_url: https://github.com/taindp98/AdaEva
institutions:
  - st-andrews
  - sorbonne-university
  - cnrs
  - uzh
  - eth-zurich
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - "Adaptive evaluation"
  - "Combinatorial optimization"
  - "Black-box algorithm design"
featured: false
summary: "Allocates instance-wise evaluation depth through successive halving or statistical racing while retaining the host framework's program-generation machinery."
---

## Why it matters

Fully evaluating every weak candidate can consume the budget needed to explore better programs. AdaEva treats comparison precision as a resource to allocate, not a fixed cost paid uniformly.

## Core method

At a selection event, parents and offspring form a candidate pool. Cached results are reused while survivors are evaluated on additional shared training instances. AdaEva-S raises evaluation depth geometrically and discards a scheduled fraction by accumulated performance, retaining at least the required population size. AdaEva-R adds small batches, waits for a minimum depth, then uses a Friedman test with Conover post-hoc comparisons to eliminate sufficiently inferior candidates. Racing can collect fresh stochastic evaluations after exhausting the instance pool and stops when enough survivors remain or no elimination occurs for a configured number of rounds. The host's generation operators and per-instance evaluator remain unchanged; the main experiments also leave prompts unaware of partial feedback.

## Contributions

- Separates evaluation allocation from the underlying LLM search controller.
- Tests EoH, HiFo-Prompt, and LLaMEA across packing, routing, scheduling, and BBOB, with five seeds.
- Evaluates held-out performance at multiple budget checkpoints and examines racing-test and allocation sensitivity.

## Strengths and limitations

Matched evaluation counts exclude the extra LLM calls made possible by cheaper comparisons. Adaptive allocation is not uniformly best: shallow fixed evaluation can win when instances rank candidates identically. Several choices are sensitive on BBOB, and the experiments do not fully separate framework effects from benchmark effects. Early elimination remains vulnerable to noisy or unrepresentative evidence.

## What to improve

Optimize combined inference and evaluation cost, test fixed-target stopping, and adapt both the allocation strategy and its statistical safeguards to observed uncertainty.

## Connections

[EvoAlloc](../evoalloc/index.md) also decides how much evaluation a candidate deserves. AdaEva applies explicit halving or statistical-racing rules over a shared instance pool; EvoAlloc evolves natural-language allocation policies and validates them through future disagreements and audits.
