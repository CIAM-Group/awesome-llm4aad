---
id: efficient-heuristics
short_title: "Hercules"
title: "Efficient Heuristics Generation for Solving Combinatorial Optimization Problems Using Large Language Models"
authors:
  - "Xuan Wu"
  - "Di Wang"
  - "Chunguo Wu"
  - "Lijie Wen"
  - "Chunyan Miao"
  - "Yubin Xiao"
  - "You Zhou"
year: 2025
date: 2025-08-03
venue: KDD
paper_url: https://arxiv.org/pdf/2505.12627
code_url: https://github.com/wuuu110/Hercules
institutions:
  - jilin-university
  - ntu
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - design-object
problems:
  - "Combinatorial Optimization"
featured: false
summary: "Hercules extracts core abstractions from elite heuristics and feeds them back as task-specific prior knowledge for LLM generation."
---

## Why it matters

Generic prompts often give vague search directions, and evaluating semantically equivalent heuristics wastes computation. Hercules targets both problems with reusable abstractions and similarity-aware evaluation.

## Core method

Core Abstraction Prompting extracts common components from strong elite heuristics and inserts them into later prompts. The framework then generates and evaluates candidates on combinatorial-optimization tasks while reducing redundant evaluations.

## Contributions

- A prompt-level abstraction of elite heuristic structure.
- A more specific search signal for LLM-generated heuristics.
- An efficiency-oriented evaluation strategy for redundant candidates.

## Limitations and extensions

The abstractions are tied to the observed elite population. It would be useful to study whether they remain valid under distribution shifts or when the design object changes.
