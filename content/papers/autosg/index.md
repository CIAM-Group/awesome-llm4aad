---
id: autosg
short_title: "AutoSG"
title: "AutoSG: LLM-Driven Solver Generation Solely from Task Prompts for Expensive Optimization"
authors:
  - "Haoran Gu"
  - "Handing Wang"
  - "Yi Mei"
  - "Mengjie Zhang"
year: 2026
date: 2026-05-25
venue: arXiv
paper_url: https://arxiv.org/pdf/2605.25658
institutions:
  - xidian-university
  - victoria-wellington
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
  - scope
problems:
  - "Expensive Optimization"
featured: false
summary: "AutoSG grounds solver generation in retrieved literature, preserves useful structures during refinement, and evaluates without training-instance execution."
---

## Why it matters

Expensive optimization leaves little budget for trial-and-error. AutoSG addresses hallucinated domain knowledge, destructive refinement, and costly instance evaluation in one automated workflow.

## Core method

Retrieval-augmented generation grounds solver code in verified literature. A one-step refinement operator preserves locally useful structures, while an instance-free Elo-style judge estimates candidate quality without repeatedly running training instances.

## Contributions

- Literature-grounded solver generation from task descriptions.
- Structure-preserving self-refinement.
- Budget-aware evaluation and broader transfer across instances.

## Limitations and extensions

Retrieval quality becomes a central dependency, and judge scores can diverge from true solver performance. Auditable evidence links and periodic execution checks are important extensions.
