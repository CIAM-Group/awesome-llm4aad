---
id: beam
short_title: "BEAM"
title: "BEAM: Bi-level Memory-adaptive Algorithmic Evolution for LLM-Powered Heuristic Design"
authors:
  - "Chuyang Xiang"
  - "Yichen Wei"
  - "Jiale Ma"
  - "Handing Wang"
  - "Junchi Yan"
year: 2026
date: 2026-04-14
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2604.12898
institutions:
  - sjtu
  - xidian-university
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "BEAM combines high-level algorithm modeling with lower-level code evolution through an adaptive two-level memory."
---

## Why it matters

Single-function evolution works inside a known solver but does not naturally construct a competent multi-component algorithm. BEAM argues that full solver design needs separate reasoning about high-level structure and low-level implementation, plus memory that connects evidence across those levels.

## Core method

BEAM formulates design as bilevel optimization. The outer genetic algorithm evolves high-level structures containing function placeholders. For each structure, an inner Monte Carlo tree search realizes and refines those placeholders as executable code. Adaptive Memory stores useful structural and implementation experience, while a Knowledge Augmentation pipeline supplies starting material without fixing one rigid template.

Experiments include hybrid CVRP solver design and Maximum Independent Set. The paper reports a 37.84% aggregate reduction in CVRP optimality gap and an evolved MIS heuristic that outperforms KaMIS in the tested setting.

## Contributions

- A bilevel split between algorithm architecture and component implementation.
- GA-based outer structure evolution combined with MCTS-based inner realization.
- Adaptive memory and knowledge augmentation for complex-code generation.

## Strengths and limitations

The decomposition mirrors how human designers separate architecture from implementation and supports larger artifacts than a scoring function. It is also computationally heavy: every outer candidate induces an inner search, and memory/knowledge choices introduce additional priors. The paper needs broader replication before claiming general whole-solver design.

## What to improve

Report nested-search cost in evaluator calls and tokens, test structure transfer between tasks, and compare with flat search under equal total compute rather than equal outer generations.

## Connections

BEAM extends the design object beyond EoH-style functions and resembles A2DEPT in separating structure from implementation. Its distinctive choice is nested GA/MCTS optimization with cross-level memory.
