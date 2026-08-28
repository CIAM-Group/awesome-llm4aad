---
id: vrpagent
short_title: 'VRPAgent'
title: 'VRPAgent: LLM-Driven Discovery of Heuristic Operators for Vehicle Routing
  Problems'
authors:
- André Hottung
- Federico Berto
- Chuanbo Hua
- Nayeli Gast Zepeda
- Daniel Wetzel
- Michael Römer
- Haoran Ye
- Davide Zago
- Michael Poli
- Stefano Massaroli
- Jinkyoo Park
- Kevin Tierney
year: 2025
date: 2025-10-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2510.07073
institutions:
- pku
- stanford
primary_dimension: design-object
dimensions:
- design-object
problems:
- Automatic algorithm design
featured: false
summary: Designing high-performing heuristics for vehicle routing problems (VRPs)
  is a complex task that requires both intuition and deep domain knowledge. Large
  language model (LLM)-based code generation has recently shown promise across many
  domains, but it still falls short of producing heuristics that rival those crafted
  by human experts.
---
## Why it matters

Designing high-performing heuristics for vehicle routing problems (VRPs) is a complex task that requires both intuition and deep domain knowledge. Large language model (LLM)-based code generation has recently shown promise across many domains, but it still falls short of producing heuristics that rival those crafted by human experts.

## Core method

VRPAgent keeps a generic routing metaheuristic fixed and uses an LLM to generate problem-specific destroy and repair operators. A genetic search embeds, tests, and selects those operators across CVRP, VRPTW, and prize-collecting VRP.

## Contributions

- LLM-generated VRP operators inside a fixed metaheuristic.
- Genetic selection across multiple routing variants.
- Single-core comparisons with handcrafted and learning-based operators.

## Strengths and limitations

The method makes the design artifact executable and lets task feedback guide later proposals. Its conclusions remain tied to the evaluator, search budget, and task scaffold; transfer outside the reported settings is therefore an open question.

## What to improve

Useful follow-ups include stronger behavioral deduplication, cross-task evaluation, and explicit accounting of model and verifier cost.

## Connections

The relation atlas records only method-level links supported by the paper's method or experiments.
