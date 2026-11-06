---
id: race-sched
short_title: RACE-Sched
title: 'Harmonizing Real-Time Constraints and Long-Horizon Reasoning: An Asynchronous Agentic Framework for Dynamic Scheduling'
authors:
  - Shijie Cao
  - Yuan Yuan
  - Jing Liu
year: 2026
date: 2026-08-01
venue: IJCAI
paper_url: https://ijcai.org/proceedings/2026/0684.pdf
code_url: https://github.com/cls1277/RACE-Sched
institutions:
  - beihang
  - slai
  - xidian-university
primary_dimension: search
dimensions:
  - search
  - feedback
  - scope
problems:
  - Dynamic Flexible Job Shop Scheduling
featured: false
summary: RACE-Sched separates fast dispatching from slow LLM-driven rule redesign, using sandbox comparisons and gated replacement to update executable scheduling policies.
---

## Why it matters

A scheduling rule can execute quickly, while generating and evaluating its replacement can take minutes. RACE-Sched treats this mismatch as a system-design problem rather than placing an LLM call on every dispatching decision.

## Core method

A reactive stream runs an existing Python priority rule over feasible scheduling actions. A deliberative stream redesigns that rule periodically or when monitored performance deteriorates. The incumbent continues to serve decisions while the replacement is prepared.

The redesign loop diagnoses a bottleneck, generates a candidate and checks its code interface and allowed operations. The validator evaluates candidate and incumbent on paired sandbox episodes. Promotion requires feasibility and evidence of improvement, with effect-size and statistical gates. An accepted rule replaces the active rule through an atomic update rather than interrupting execution.

A repository stores rules with task descriptors, measured efficacy and code complexity. Retrieval combines performance, distance between task descriptors and complexity, providing useful starting points for later redesign. Reflection records the observed trade-offs rather than serving as the sole acceptance criterion.

## Contributions

- An explicit separation between real-time policy execution and slower algorithm redesign.
- A sandbox-based promotion process for generated dispatching rules.
- A reusable rule repository evaluated with several scheduling benchmarks, disturbances and LLM backends.

## Strengths and limitations

The measured rule execution is sub-millisecond, whereas deliberative updates take much longer, supporting the need for separation. However, the reported benchmark protocol serializes updates for reproducibility. It should not be interpreted as a completed industrial asynchronous deployment. Component ablations support the repository and redesign loop on average, but not every component wins on every benchmark. Sandbox checks provide empirical protection, not a proof that a promoted rule is safe under all disturbances.

## What to improve

Evaluate true concurrent operation with delayed updates, measure degradation while stale policies remain active, and enrich retrieval descriptors beyond coarse job and machine counts.

## Connections

DyACE uses matched-state rollouts to choose evolutionary operators during optimization. RACE-Sched makes a different aspect of online algorithm adaptation explicit. It retains a running incumbent while expensive redesign proceeds, then promotes a tested replacement. This highlights the difference between identifying a better update and integrating that update without blocking decisions.
