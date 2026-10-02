---
id: graphir
short_title: GraphIR
title: "GraphIR: Architecture-Level Search States for LLM-Guided Neural Architecture Evolution"
authors:
  - Zhen Liu
  - Wanqi Zhou
  - Shuanghao Bai
  - Yuhan Liu
  - Jinjun Wang
  - Jingwen Fu
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.01633
institutions:
  - xjtu
  - xiaomi
  - zhongguancun-academy
  - zhongguancun-institute-ai
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - scope
problems:
  - Neural Architecture Search
  - Algorithmic Reasoning
featured: false
summary: Extracts architecture-level state from candidate neural programs so LLM mutations can reason about tensor dependencies and editable components.
---

## Why it matters

Source code exposes implementation details but often hides the architecture dependencies needed to make safe, meaningful edits.

## Core method

Static analysis identifies modules, tensor operations, and editable regions. Lightweight instantiation and PyTorch FX tracing recover observed interfaces and producer–consumer dependencies when possible; conservative static dependencies provide a fallback. Fixed extraction rules produce structure facts rather than asking an LLM to summarize its own code.

The compact state describes the computation skeleton, mutation surface, and interface constraints. Mutation prompts contain the original program, this state, and evaluation history. The executable artifact remains source code, and GraphIR is rebuilt for each later candidate. Tests examine structural reasoning, architecture search on MNIST1D variants, and neural algorithmic reasoning on CLRS.


## Contributions

Makes mutation-relevant architecture evidence explicit without restricting every candidate to a fixed operator genome.

## Strengths and limitations

Extracted dependencies can reduce invalid edits and clarify interfaces. Trace coverage, default input synthesis, static fallbacks, and bounded context remain incomplete; the extracted state is not a correctness proof, and some comparisons report best runs.

## What to improve

Test dynamic control flow and unusual modules, quantify extraction errors, and compare representation gains with matched prompt-token and full search-time budgets.

## Connections

[ADSL-PDE](../adsl-pde/index.md) uses a typed representation as the source of deterministic compilation. GraphIR instead extracts a descriptive state from existing executable code to guide edits; both expose structure, but enforce different validity guarantees.
