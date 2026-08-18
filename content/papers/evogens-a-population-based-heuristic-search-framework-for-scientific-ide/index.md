---
id: evogens-a-population-based-heuristic-search-framework-for-scientific-ide
short_title: 'EvoGens'
title: 'EvoGens: A Population-Based Heuristic Search Framework for Scientific Idea Generation'
authors:
  - 'Xu Li'
  - 'Hanzhe Tu'
  - 'Xinyi Li'
  - 'Kuncheng Zhao'
  - 'Xun Han'
  - 'Zhonghui Liu'
year: 2026
date: 2026-05-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2605.30961
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Generating novel research ideas is fundamental to scientific progress. While Large Language Models (LLMs) show promise in assisting this process, existing approaches often exhibit semantic convergence, resulting in limited diversity and novelty.'
---

## Why it matters

Generating novel research ideas is fundamental to scientific progress. While Large Language Models (LLMs) show promise in assisting this process, existing approaches often exhibit semantic convergence, resulting in limited diversity and novelty.

## Core method

The paper's abstract describes the following design loop:

> Generating novel research ideas is fundamental to scientific progress. While Large Language Models (LLMs) show promise in assisting this process, existing approaches often exhibit semantic convergence, resulting in limited diversity and novelty. To address this, we introduce EvoGens, an evolution-inspired framework that recasts scientific idea generation as an evolutionary search over a population of ideas. EvoGens iteratively applies rank-based mutation with differentiated retrieval planning to incorporate external knowledge, and semantic-aware crossover to fuse complementary concepts for conceptual reorganization. A lightweight evaluation signal guides the selection process, encouraging sustained exploration while mitigating premature convergence. Extensive experiments demonstrate that EvoGens substantially enhances exploration capabilities compared to state-of-the-art baselines. Specifically, it improves the Novelty from 0.1 to 0.4 and the Diversity from 0.24 to 0.55, while maintaining comparable idea quality under the current automatic evaluation protocol. These findings suggest that evolutionary mechanisms can serve as a useful framework for exploration-oriented research ideation, especially for broadening the novelty and diversity of candidate ideas under a shared automatic evaluation setting.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: eration of new search and iterative refinement. In particular, Evolution of research ideas. Representative methods construct structured Heuristics (EoH) [30] evolves natural-language heuristic retrieval mechanisms, such as entity co-occurrence graphs “thoughts” together with executable code for automatic or citation-based associations, to identify relevant conc

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
