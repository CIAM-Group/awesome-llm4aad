---
id: beyond-algorithm-evolution
short_title: "Beyond Algo Evo"
title: "Beyond Algorithm Evolution: An LLM-Driven Framework for the Co-Evolution of Swarm Intelligence Optimization Algorithms and Prompts"
authors:
  - "Shipeng Cen"
  - "Ying Tan"
year: 2025
date: 2025-12-10
venue: arXiv
paper_url: https://arxiv.org/pdf/2512.09209
institutions:
  - pku
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - design-object
problems:
  - "Combinatorial Optimization"
featured: false
summary: "Beyond Algorithm Evolution co-evolves swarm-intelligence algorithms and the prompts that steer an LLM search process."
---

## Why it matters

Most algorithm-evolution systems treat the prompt as fixed infrastructure. This work makes prompt design part of the evolving object, exposing a second source of adaptation when the optimization landscape is uncertain.

## Core method

One LLM alternates between improving swarm-intelligence algorithm programs and proposing prompt templates. A prompt-evaluation procedure measures how well a template guides later proposals, while the algorithm population is tested on several NP problems.

## Contributions

- Joint evolution of algorithm code and prompt templates.
- A simple evaluation signal for comparing prompt strategies.
- A swarm-intelligence view of LLM-based automatic algorithm design.

## Limitations and extensions

The framework inherits the cost and instability of two coupled evolutionary loops. Better credit assignment could separate gains caused by prompt changes from gains caused by code changes.
