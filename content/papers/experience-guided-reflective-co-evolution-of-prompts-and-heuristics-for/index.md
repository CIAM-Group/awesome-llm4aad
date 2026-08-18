---
id: experience-guided-reflective-co-evolution-of-prompts-and-heuristics-for
short_title: 'Experience Guided'
title: 'Experience-Guided Reflective Co-Evolution of Prompts and Heuristics for Automatic Algorithm Design'
authors:
  - 'Yihong Liu'
  - 'Junyi Li'
  - 'W. Zhao'
  - 'Hongyu Lu'
  - 'Ji-Rong Wen'
year: 2025
date: 2025-09-01
venue: 'arXiv.org'
paper_url: https://arxiv.org/pdf/2509.24509
institutions:
  - cityu-hk
  - tencent
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Combinatorial optimization problems are traditionally tackled with handcrafted heuristic algorithms, which demand extensive domain expertise and significant implementation effort. Recent progress has highlighted the potential of automatic heuristics design powered by large language models (LLMs), enabling the automatic generation and refinement of heuristics.'
---

## Why it matters

Combinatorial optimization problems are traditionally tackled with handcrafted heuristic algorithms, which demand extensive domain expertise and significant implementation effort. Recent progress has highlighted the potential of automatic heuristics design powered by large language models (LLMs), enabling the automatic generation and refinement of heuristics.

## Core method

The paper's abstract describes the following design loop:

> Combinatorial optimization problems are traditionally tackled with handcrafted heuristic algorithms, which demand extensive domain expertise and significant implementation effort. Recent progress has highlighted the potential of automatic heuristics design powered by large language models (LLMs), enabling the automatic generation and refinement of heuristics. These approaches typically maintain a population of heuristics and employ LLMs as mutation operators to evolve them across generations. While effective, such methods often risk stagnating in local optima. To address this issue, we propose the Experience-Guided Reflective Co-Evolution of Prompt and Heuristics (EvoPH) for automatic algorithm design, a novel framework that integrates the island migration model with the elites selection algorithm to simulate diverse heuristics populations. In EvoPH, prompts are co-evolved with heuristic algorithms, guided by performance feedback. We evaluate our framework on two problems, i.e., Traveling Salesman Problem and Bin Packing Problem. Experimental results demonstrate that EvoPH achieves the lowest relative error against optimal solutions across both datasets, advancing the field of automatic algorithm design with LLMs.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: s it with an experience- driven adaptation loop that dynamically adjusts evolution strategies, thereby ensuring both stability and adaptability; by comparison, EoH (Liu et al., 2024a) relies on fixed prompt strategies, and ReEvo (Ye et al., 2024) employs LLM-based reflection while maintaining a population but does not evolve prompts. Third, while NeRM (Guo et al., 2025) jointly re

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
