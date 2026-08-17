---
id: pyvrp-plus
short_title: "PyVRP+"
title: "PyVRP+: LLM-Driven Metacognitive Heuristic Evolution for Hybrid Genetic Search in Vehicle Routing Problems"
authors:
  - "Manuj Malik"
  - "Jianan Zhou"
  - "Shashank Reddy Chirra"
  - "Zhiguang Cao"
year: 2026
date: 2026-05-25
venue: AAMAS
paper_url: https://arxiv.org/pdf/2604.07872
code_url: https://github.com/ra-MANUJ-an/pyvrp-code
institutions:
  - smu
  - ntu
  - oxford
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - design-object
problems:
  - "Vehicle Routing Problem"
featured: false
summary: "PyVRP+ uses a reason-act-reflect loop to evolve components of hybrid genetic search with explicit metacognitive feedback."
---

## Why it matters

Reactive score-only mutation often produces local edits without an explanation of failure. PyVRP+ makes diagnosis and hypothesis formation explicit before changing a routing heuristic.

## Core method

Metacognitive Evolutionary Programming alternates reasoning, implementation, and reflection. The LLM receives domain knowledge and performance evidence while evolving core components of a PyVRP-style hybrid genetic search.

## Contributions

- A structured reason-act-reflect evolution loop.
- Explicit failure diagnosis and design hypotheses.
- A deployment-oriented study on vehicle-routing components.

## Limitations and extensions

The method is coupled to the PyVRP representation and expensive routing evaluations. Cross-backbone transfer and calibrated reflection quality remain open questions.
