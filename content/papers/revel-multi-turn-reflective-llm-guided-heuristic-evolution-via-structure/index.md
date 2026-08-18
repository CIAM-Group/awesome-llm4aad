---
id: revel-multi-turn-reflective-llm-guided-heuristic-evolution-via-structure
short_title: 'ReVEL'
title: 'ReVEL: Multi-Turn Reflective LLM-Guided Heuristic Evolution via Structured Performance Feedback'
authors:
  - 'Cuong Van Duc'
  - 'Minh Nguyen Dinh Tuan'
  - 'Tam Vu Duc'
  - 'Tung Vu Duy'
  - 'Son Nguyen Van'
  - 'Hanh Nguyen Thi'
  - 'Binh Huynh Thi Thanh'
year: 2026
date: 2026-04-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2604.04940
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Designing effective heuristics for NP-hard combinatorial optimization problems remains challenging and often requires substantial domain expertise. Recent LLM-guided evolutionary methods have shown promise for automated heuristic generation, but most existing approaches refine heuristics independently or through limited pairwise feedback.'
---

## Why it matters

Designing effective heuristics for NP-hard combinatorial optimization problems remains challenging and often requires substantial domain expertise. Recent LLM-guided evolutionary methods have shown promise for automated heuristic generation, but most existing approaches refine heuristics independently or through limited pairwise feedback.

## Core method

The paper's abstract describes the following design loop:

> Designing effective heuristics for NP-hard combinatorial optimization problems remains challenging and often requires substantial domain expertise. Recent LLM-guided evolutionary methods have shown promise for automated heuristic generation, but most existing approaches refine heuristics independently or through limited pairwise feedback. We propose ReVEL: Multi-Turn Reflective LLM-Guided Heuristic Evolution via Structured Performance Feedback, a framework for group-wise multi-turn heuristic refinement. ReVEL organizes heuristics into behavior-aware reflective groups, including similarity-driven groups for localized refinement and diversity-driven groups for exploratory search. Within each group, the LLM performs iterative multi-turn refinement using accumulated performance feedback, enabling related heuristics to be jointly analyzed and progressively improved across evolutionary iterations. Experiments on standard combinatorial optimization benchmarks show that ReVEL generally improves optimization performance over existing LLM-guided evolutionary baselines across multiple settings and LLM backbones. Additional analyses suggest that behavior-aware grouping contributes to more consistent refinement trajectories during iterative heuristic evolution.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: cent LLM-guided evolutionary frameworks such but most existing approaches refine heuristics independently as EoH Liu et al., 2024 and ReEvo Ye et al., 2024 demonstrate or through limited pairwise feedback. We propose ReVEL: that LLMs can directly generate and iteratively refi

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
