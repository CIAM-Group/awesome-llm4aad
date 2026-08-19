---
id: pace
short_title: 'PACE'
title: 'PACE: Primitive-Aware Code Evolution for Automated Algorithm Design'
authors:
- Zhuoliang Xie
- Ruihao Zheng
- Xiang Xu
- Genghui Li
- Zhengkun Wang
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.07395
institutions:
- SUSTech
- SZU
primary_dimension: design-object
dimensions:
- design-object
- search
- scope
problems:
- Automatic algorithm design
featured: false
summary: Large Language Model (LLM)-based automated algorithm design typically evolves
  algorithms as complete, indivisible programs. While this whole-program perspective
  simplifies the search space, it fundamentally couples the useful local logic to
  its host program.
---
## Why it matters

Large Language Model (LLM)-based automated algorithm design typically evolves algorithms as complete, indivisible programs. While this whole-program perspective simplifies the search space, it fundamentally couples the useful local logic to its host program.

## Core method

PACE separates reusable Executable Algorithmic Primitives from their host programs. Primitive-aware mutation and crossover preserve, transfer, and recombine these units; Thompson sampling prioritizes primitives using parent-relative improvements without an extra validation set.

## Contributions

- Persistent executable primitives as reusable search units.
- Primitive-aware variation with parent-relative Thompson sampling.
- Experiments showing component retention across program evolution.

## Strengths and limitations

The method makes the design artifact executable and lets task feedback guide later proposals. Its conclusions remain tied to the evaluator, search budget, and task scaffold; transfer outside the reported settings is therefore an open question.

## What to improve

Useful follow-ups include stronger behavioral deduplication, cross-task evaluation, and explicit accounting of model and verifier cost.

## Connections

The relation atlas records only method-level links supported by the paper's method or experiments.
