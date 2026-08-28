---
id: heuragenix
short_title: "HeurAgenix"
title: "HeurAgenix: Leveraging LLMs for Solving Complex Combinatorial Optimization Challenges"
authors:
  - "Xianliang Yang"
  - "Ling Zhang"
  - "Haolong Qian"
  - "Lei Song"
  - "Jiang Bian"
year: 2025
date: 2025-06-18
venue: arXiv
paper_url: https://arxiv.org/pdf/2506.15196
code_url: https://github.com/microsoft/HeurAgenix
institutions:
  - microsoft-research-asia
  - tsinghua
primary_dimension: scope
dimensions:
  - scope
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "HeurAgenix evolves a pool of heuristics and dynamically selects among them according to the current optimization state."
---

## Why it matters

A single heuristic can be strong on one search stage and poor on another. HeurAgenix separates heuristic discovery from state-dependent selection, making the generated portfolio useful during solving.

## Core method

The first stage compares seed and improved heuristics to extract reusable evolution strategies. The second stage uses an LLM or lightweight selector to choose a heuristic for the current state, with dual-reward fine-tuning for low-cost selection.

## Contributions

- A two-stage evolution-and-selection hyper-heuristic.
- State-aware choice among generated heuristics.
- A lightweight selector option for lower inference cost.

## Limitations and extensions

The selector adds another learned component and can inherit model bias. A shared benchmark for selection quality, switching cost, and final solution quality would strengthen comparisons.
