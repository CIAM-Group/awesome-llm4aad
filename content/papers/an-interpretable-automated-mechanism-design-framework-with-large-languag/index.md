---
id: an-interpretable-automated-mechanism-design-framework-with-large-languag
short_title: 'An Interpretable'
title: 'An Interpretable Automated Mechanism Design Framework with Large Language Models'
authors:
  - 'Jiayuan Liu'
  - 'Mingyu Guo'
  - 'Vincent Conitzer'
year: 2025
date: 2025-02-01
venue: 'arXiv.org'
paper_url: https://arxiv.org/pdf/2502.12203
institutions:
  - carnegie-mellon
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Mechanism design has long been a cornerstone of economic theory, with traditional approaches relying on mathematical derivations. Recently, automated approaches, including differentiable economics with neural networks, have emerged for designing payments and allocations.'
---

## Why it matters

Mechanism design has long been a cornerstone of economic theory, with traditional approaches relying on mathematical derivations. Recently, automated approaches, including differentiable economics with neural networks, have emerged for designing payments and allocations.

## Core method

The paper's abstract describes the following design loop:

> Mechanism design has long been a cornerstone of economic theory, with traditional approaches relying on mathematical derivations. Recently, automated approaches, including differentiable economics with neural networks, have emerged for designing payments and allocations. While both analytical and automated methods have advanced the field, they each face significant weaknesses: mathematical derivations are not automated and often struggle to scale to complex problems, while automated and especially neural-network-based approaches suffer from limited interpretability. To address these challenges, we introduce a novel framework that reformulates mechanism design as a code generation task. Using large language models (LLMs), we generate heuristic mechanisms described in code and evolve them to optimize over some evaluation metrics while ensuring key design criteria (e.g., strategy-proofness) through a problem-specific fixing process. This fixing process ensures any mechanism violating the design criteria is adjusted to satisfy them, albeit with some trade-offs in performance metrics. These trade-offs are factored in during the LLM-based evolution process. The code generation capabilities of LLMs enable the discovery of novel and interpretable solutions, bridging the symbolic logic of mechanism design and the generative power of modern AI. Through rigorous experimentation, we demonstrate that LLM-generated mechanisms achieve competitive performance while offering greater interpretability compared to previous approaches. Notably, our framework can rediscover existing manually designed mechanisms and provide insights into neural-network based solutions through Programming-by-Example. These results highlight the potential of LLMs to not only automate but also enhance the transparency and scalability of mechanism design, ensuring safe deployment of the mechanisms in society.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: 3 of good solutions with the island-based evolutionary method to encourage exploration and avoid getting trapped at sub-optimal solutions. Evolution of Heuristics (EoH) [Liu et al., 2024b] proposes a similar heuristic evolution framework as FunSearch. EoH explicitly specifies the evolution strategies and incorporates one of these strategies into the prompt in each iteration. The

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
