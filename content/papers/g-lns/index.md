---
id: g-lns
short_title: "G-LNS"
title: "G-LNS: Generative Large Neighborhood Search for LLM-Based Automatic Heuristic Design"
authors:
  - "Baoyun Zhao"
  - "He Wang"
  - "Liang Zeng"
year: 2026
date: 2026-02-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2602.08253
code_url: https://github.com/ZBoyn/G-LNS
institutions:
  - northeastern-cn
  - ucas
  - tsinghua
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Traveling Salesman Problem"
  - "Capacitated Vehicle Routing Problem"
featured: false
summary: "G-LNS expands the design object from priority rules to complementary destroy-and-repair operators for large neighborhood search."
---

## Why it matters

Many LLM-AHD systems generate a constructive priority function or tune a fixed local move. Those interfaces limit the reachable algorithm space. G-LNS asks the model to design destroy-and-repair behavior capable of larger structural changes.

## Core method

The LLM generates executable destroy and repair heuristics inside a Large Neighborhood Search loop. Because one component's value depends on its partner, cooperative evaluation records pair performance in a synergy matrix. Selection uses both component evidence and compatibility while the host LNS repeatedly restructures candidate solutions.

Experiments on TSP and CVRP compare generated LNS with constructive-rule and fixed-local-search AHD baselines, with ablations for cooperative evaluation.

## Contributions

- Expands the artifact to complementary destroy and repair procedures.
- A synergy-aware cooperative evaluation for paired components.
- An open implementation of generative LNS within LLM-AHD.

## Strengths and limitations

Large-neighborhood moves can escape basins inaccessible to scoring rules, and pairwise evaluation acknowledges interaction. The matrix adds quadratic pressure as archives grow, while the fixed LNS shell remains a strong human prior.

## What to improve

Use sparse bandit estimates for pair evaluation, transfer component libraries across tasks, and evolve neighborhood size and acceptance criteria alongside destroy/repair code.

## Connections

G-LNS broadens the EoH design object from a scoring function to a paired neighborhood mechanism. Its synergy problem is related to CoupleEvo and E2OC.
