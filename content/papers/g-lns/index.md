---
id: g-lns
short_title: G-LNS
title: 'G-LNS: Generative Large Neighborhood Search for LLM-Based Automatic Heuristic Design'
authors:
  - Baoyun Zhao
  - He Wang
  - Liang Zeng
year: 2026
date: 2026-02-09
venue: arXiv
paper_url: https://arxiv.org/pdf/2602.08253
code_url: https://github.com/zboyn/G-LNS
institutions:
  - neu
  - ucas
  - thu
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
  - Orienteering Problem
featured: false
summary: G-LNS extends LLM-based AHD to the automated design of Large Neighborhood Search operators, co-evolving coupled destroy and repair operators with a synergy-aware evaluation mechanism.
---

## Why it matters

Existing LLM-based AHD largely instantiates around constructive priority rules or parameterized local-search penalties, restricting the LLM to component tuning or fixed neighborhood operators. Constructive heuristics follow an irreversible trajectory, while local search treats neighborhood structures as fixed priors. Large Neighborhood Search (LNS) achieves strong structural reshaping through alternating destroy and repair, but the tight coupling between these two operators makes automated LNS design particularly challenging and has largely prevented its adoption within AHD.

## Core method

G-LNS evolves executable Python code for both destroy and repair LNS operators, enabling structural solution perturbation beyond fixed templates. Its key design choices are:

- A **dual-population architecture** maintains separate repositories for destroy operators and repair operators, each seeded with classic domain-expert heuristics (e.g., Random/Worst Removal, Greedy Insertion) as in-context examples.
- A **cooperative evaluation** mechanism runs the LNS process and records the joint performance of operator pairs.
- A **Synergy Matrix** captures the cooperative performance of specific (destroy, repair) pairs and guides synergy-aware crossover.
- A **multi-episode evaluation** with adaptive weights smooths the stochasticity of LNS and yields robust fitness and synergy statistics.

## Contributions

- Generative LNS for AHD: the first framework to co-evolve tightly coupled destroy and repair operators for Large Neighborhood Search using LLMs.
- Synergy-aware co-evolution through the Synergy Matrix, which explicitly models operator interactions during evolution.
- Empirical effectiveness and generalization on TSP and CVRP: G-LNS outperforms LLM-based AHD methods and strong classical solvers, achieving near-optimal solutions with reduced computational budgets and generalizing to unseen instance distributions.

## Strengths and limitations

G-LNS enables true structural innovation (operator logic rather than parameter tuning) and models operator coupling explicitly. Its focus is on routing COPs, it carries dual-population overhead, and its performance depends on the quality of the seed operators used for initialization.

## What to improve

The authors outline extensions to additional combinatorial optimization problems, multi-objective optimization, transfer learning across domains, and adaptive computational-budget allocation.

## Connections

G-LNS extends the constructive/local-search AHD line (FunSearch, EoH, ReEvo) to the design of LNS operators and draws on Adaptive Large Neighborhood Search (ALNS) for its fitness mechanism.
