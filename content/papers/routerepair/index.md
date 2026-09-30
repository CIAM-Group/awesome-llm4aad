---
id: routerepair
short_title: RouteRepair
title: "RouteRepair: Instance-Level Failure Diagnosis and Targeted Repair in LLM-Based Automated Heuristic Design for Routing Optimization"
authors:
  - Binghao Ji
  - Di Huang
  - Jiahui Fang
  - Zhiyuan Liu
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.11452
institutions:
  - seu
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
featured: false
summary: Diagnoses each routing heuristic's instance-level weaknesses and validates bounded repairs against both failure recovery and collateral degradation.
---

## Why it matters

An average score can conceal a useful routing heuristic's recurring failures on particular instance structures. Replacing it wholesale may erase behavior that already works well.

## Core method

For each selected parent, within-scale performance ranks define failure cases and representative strengths. All non-failure instances form a larger protection set. A diagnosis expert combines these outcomes with spatial, demand, route-behavior, and code evidence to identify a bounded edit target. Its reviewed brief is frozen before a separate repair expert changes the permitted scoring function or edge-prior matrix.

Parent and child are reevaluated with matched instances, seeds, solver settings, and budgets. Verified repair requires sufficient recovery on failure cases and limited one-sided degradation over the protection set: improvements elsewhere cannot cancel new damage. Importantly, verification is distinct from admission to the outer population; a useful aggregate trade-off need not qualify as a successful repair. Outcome-aware memory records both successes and failures.

Experiments retain fixed constructive, GLS, and ACO backbones for TSP and CVRP.

## Contributions

- Converts instance-wise outcomes into parent-specific diagnosis and bounded code edits.
- Explicitly measures preserved behavior instead of relying only on mean fitness.

## Strengths and limitations

Matched validation makes local improvement claims testable. Nevertheless, the diagnosis is a hypothesis rather than established causality, and protection only covers the sampled instance distribution and chosen tolerances. The editable interfaces remain domain-specific.

## What to improve

Evaluate repairs on a separate distribution-shift set and study whether repeated reuse of protection cases gradually overfits the acceptance test.

## Connections

[ReEvo](../reevo/index.md) uses comparative feedback to guide heuristic revision. RouteRepair offers a more localized alternative: a parent's failure profile, a frozen repair contract, and an external collateral-damage test replace unconstrained reflection as the principal guide.
