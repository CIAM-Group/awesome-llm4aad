---
id: reflex
short_title: "REFLEX"
title: "REFLEX: Reflective Evolution from LLM Experience"
authors:
  - "Pan Wang"
year: 2026
date: 2026-06-15
venue: arXiv
paper_url: https://arxiv.org/pdf/2606.16496
institutions:
  - affiliation-not-disclosed
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - design-object
problems:
  - "Programmatic Policy Evolution"
featured: false
summary: "REFLEX separates visual diagnosis from code generation and stores reusable skills in a persistent evolving memory."
---

## Why it matters

When one model call both interprets behavior and writes code, the reason for a mutation is hard to audit. REFLEX separates these roles so experience can be inspected and reused across runs.

## Core method

A vision-enabled Critic turns behavioral evidence into structured diagnoses. A text-focused Actor uses those diagnoses to synthesize child policies, while a persistent Skill Memory stores reusable code snippets and lessons.

## Contributions

- Decoupled diagnosis and policy synthesis.
- Persistent memory for reusable evolutionary experience.
- A train-free reflective loop for visual policy evolution.

## Limitations and extensions

The public preprint does not disclose the author affiliation, and visual diagnosis quality remains model-dependent. Better memory provenance and benchmarked critic calibration would improve trustworthiness.
