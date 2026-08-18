---
id: llm-evolved-pattern-generators-for-optimal-classical-planning
short_title: 'LLM Evolved Pattern'
title: 'LLM-Evolved Pattern Generators for Optimal Classical Planning'
authors:
  - 'Windy Phung'
  - 'Dominik Drexler'
  - 'Arnaud Lequen'
  - 'Jendrik Seipp'
year: 2026
date: 2026-06-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2606.02438
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Learned heuristics have recently become a competitive alternative to traditional domain-independent heuristics for satisficing planning. Existing approaches, however, focus on improving search guidance rather than guaranteeing admissibility, which makes them unsuitable for optimal classical planning.'
---

## Why it matters

Learned heuristics have recently become a competitive alternative to traditional domain-independent heuristics for satisficing planning. Existing approaches, however, focus on improving search guidance rather than guaranteeing admissibility, which makes them unsuitable for optimal classical planning.

## Core method

The paper's abstract describes the following design loop:

> Learned heuristics have recently become a competitive alternative to traditional domain-independent heuristics for satisficing planning. Existing approaches, however, focus on improving search guidance rather than guaranteeing admissibility, which makes them unsuitable for optimal classical planning. We present the first method for learning domain-dependent heuristics that are admissible by design and thus preserve the optimality guarantees of A* search. Instead of learning a direct mapping from states to heuristic values, we learn to construct abstractions that induce admissible heuristics. We use an LLM-driven evolutionary program-synthesis framework to obtain, for each domain, a program that produces a pattern collection for any task in that domain, and we combine the resulting patterns admissibly via saturated cost partitioning. Empirically, the learned programs encode interpretable domain-specific insights, run with negligible overhead at test time and yield heuristics that match the coverage of state-of-the-art domain-independent baselines on several domains while evaluating each state substantially faster.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: Liu, F.; Xialiang, T.; Yuan, M.; Lin, X.; Luo, F.; Wang, Z.; Francès, G.; Corrêa, A. B.; Geissmann, C.; and Pommeren- Lu, Z.; and Zhang, Q. 2024. Evolution of Heuristics: To- ing, F. 2019. Generalized Potential Heuristics for Classical wards Efficient Automatic Algorithm Design Using Large Planning. In Kraus, S., ed., Proceedings of the 28th Inter- Language Model. In Procee

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
