---
id: es-ahd
short_title: ES-AHD
title: "ES-AHD: An Evolution Strategy Framework for Automatic Heuristic Design"
authors:
  - Yutao Lai
  - Kezhao Lai
  - Hai-Lin Liu
  - Yuping Wang
  - Ping Guo
year: 2026
date: 2026-08-01
venue: ICIST
paper_url: https://arxiv.org/pdf/2609.00023
code_url: https://github.com/Mriya0306/ES-AHD
institutions:
  - guangdong-university-technology
  - xidian-university
  - beijing-normal-university
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Traveling Salesman Problem
featured: false
summary: Generates heuristics around an LLM summary of elite design patterns, varying sampling temperature through a momentum-like stochastic update.
---

## Why it matters

Editing one parent at a time may fail to combine patterns shared by several successful heuristics. ES-AHD explores a generation-level semantic summary as the center of subsequent proposals.

## Core method

The LLM initializes a population of executable heuristics. After evaluation, the best subset is summarized into a textual core insight. New candidates are sampled using that shared insight rather than obtained only through pairwise crossover or single-parent mutation.

A scalar temperature retains part of its previous value, adds Gaussian noise, and is clipped below by a positive minimum. The paper interprets this as an evolution-strategy-inspired control of semantic variation. It does not estimate a code-space covariance matrix or establish numerical equivalence to CMA-ES.

Experiments generate the next-city selection function of a constructive TSP solver. They report a top-four training score, route lengths at several sizes, and TSPLIB comparisons under a shared LLM backbone.

## Contributions

- Replaces individual-level reproduction with elite-summary-conditioned population generation.
- Adds a stochastic temperature schedule to that semantic search loop.

## Strengths and limitations

The search mechanism is compact and produces directly executable rules. Evidence is confined to TSP and one reported backbone, and the reported aggregates should not be read as a universal ranking of AHD frameworks. Temperature is only an indirect control of behavioral diversity.

## What to improve

Separate the effects of elite summarization and temperature noise across repeated runs, and measure actual program-behavior diversity rather than assuming temperature tracks it.

## Connections

[EoH](../eoh/index.md) evolves ideas together with executable heuristics. ES-AHD offers an alternative reproduction mechanism: a shared elite insight guides a new population instead of prescribed individual-level thought/code operators.
