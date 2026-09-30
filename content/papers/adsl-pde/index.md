---
id: adsl-pde
short_title: ADSL-PDE
title: Improving Auto-Design of Neural PDE Solvers with a Domain-Specific Language
authors:
  - Shengxin Kong
  - Liwen Xu
  - Jingwen Fu
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.04384
code_url: https://github.com/Super-KongCC/Improving-Auto-Design-of-Neural-PDE-Solvers-with-a-Domain-Specific-Language
institutions:
  - north-china-university-technology
  - zhongguancun-academy
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Neural PDE Solver Design
featured: false
summary: Searches typed neural-PDE solver descriptions that a deterministic compiler turns into executable training pipelines.
---

## Why it matters

Unrestricted solver-code generation spends much of its budget on invalid implementations, while fixed hyperparameter grids exclude structural design choices.

## Core method

ADSL describes the PDE task, solver family, architecture, physical losses, sampling, and training recipe. Parsing produces a typed dependency graph; static checks reject incompatible shapes, unsupported derivatives, missing variables, or unavailable backend primitives before training. A deterministic compiler instantiates the specified solver without hidden parameter search.

Method islands evolve family-compatible descriptions. Valid candidates receive quick training, then promising ones receive full training and validation. Structured compiler diagnostics and numerical performance guide later edits. Controlled cross-island composition can register validated new implementations in the backend library, extending the available families without allowing arbitrary unchecked code in every candidate.


## Contributions

Treats the representation and compiler contract as central parts of reliable solver discovery, with representation-level validity and efficiency measurements.

## Strengths and limitations

The design makes invalid states easier to reject and decisions easier to inspect. Expressiveness remains limited by implemented primitives and compatible compositions; search cost includes repeated neural training.

## What to improve

Test transfer to PDEs requiring new primitives and separate gains from representation, backend engineering, quick-training selection, and additional solver families.

## Connections

[EvoPINN](../evopinn/index.md) searches executable PINN designs. ADSL-PDE offers a contrasting design substrate: typed descriptions and deterministic compilation across solver families instead of free-form implementation edits.
