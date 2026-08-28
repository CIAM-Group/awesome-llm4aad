---
id: cliffsearch
short_title: "CliffSearch"
title: "CliffSearch: Structured Agentic Co-Evolution over Theory and Code for Scientific Algorithm Discovery"
authors:
  - "Youssef Mroueh"
  - "Carlos Fonseca"
  - "Brian Belgodere"
  - "David Cox"
year: 2026
date: 2026-04-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2604.01210
institutions:
  - ibm-research
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - "Scientific Algorithm Discovery"
featured: false
summary: "CliffSearch evolves structured theory-and-code artifacts with separate exploration, correction, and review agents."
---

## Why it matters

Code-only evolution can optimize a metric while losing the scientific reason behind a candidate. CliffSearch keeps hypotheses, implementations, and review judgments together as one searchable artifact.

## Core method

LLM agents implement pair selection, crossover, mutation, and review. Correctness and originality gates complement benchmark fitness, while exploration mutation imports ideas from adjacent domains and correction mutation repairs targeted weaknesses.

## Contributions

- A structured theory-plus-code representation for discovery.
- Separate exploration and correction pathways.
- Review-based gates for correctness and originality.

## Limitations and extensions

Reviewer judgments can be subjective and expensive. Calibrated evidence checks and domain-specific executable tests would make the gates more reliable.
