---
id: a-ceoh
short_title: "A-CEoH"
title: "Algorithmic Prompt-Augmentation for Efficient LLM-Based Heuristic Design for A* Search"
authors:
  - "Thomas Bömer"
  - "Nico Koltermann"
  - "Max Disselnmeyer"
  - "Bastian Amberg"
  - "Anne Meyer"
year: 2026
date: 2026-01-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2601.19622
institutions:
  - kit
  - tu-dortmund
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "A* Search"
  - "Unit-Load Pre-Marshalling Problem"
  - "Sliding Puzzle Problem"
featured: false
summary: "A-CEoH augments EoH prompts with the surrounding A* algorithm to provide domain-agnostic implementation context."
---

## Why it matters

A-CEoH augments EoH prompts with the surrounding A* algorithm to provide domain-agnostic implementation context.

## Core method

The method includes executable A* code in the prompt so the LLM can design compatible guiding heuristics through in-context learning, with evaluations on warehouse and sliding-puzzle search.

## Contributions

- Introduces the design described above for A* Search, Unit-Load Pre-Marshalling Problem, Sliding Puzzle Problem.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
