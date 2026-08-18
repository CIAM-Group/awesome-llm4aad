---
id: successor-generator-planning-with-llm-generated-heuristics
short_title: 'Successor Generator'
title: 'Successor-Generator Planning with LLM-generated Heuristics'
authors:
  - 'Alexander Tuisov'
  - 'Yonatan Vernik'
  - 'Alexander Shleyfman'
year: 2026
date: 2026-06-08
venue: 'Proceedings of the International Conference on Automated Planning and Scheduling'
paper_url: https://ojs.aaai.org/index.php/ICAPS/article/download/42843/50403
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Heuristics are a central component of deterministic planning, particularly in domain-independent settings where general applicability is prioritized over task-specific tuning. This work revisits that paradigm in light of recent advances in large language models (LLMs), which enable the automatic synthesis of heuristics directly from problem definitions -- bypassing the need for handcrafted domain knowledge.'
---

## Why it matters

Heuristics are a central component of deterministic planning, particularly in domain-independent settings where general applicability is prioritized over task-specific tuning. This work revisits that paradigm in light of recent advances in large language models (LLMs), which enable the automatic synthesis of heuristics directly from problem definitions -- bypassing the need for handcrafted domain knowledge.

## Core method

The paper's abstract describes the following design loop:

> Heuristics are a central component of deterministic planning, particularly in domain-independent settings where general applicability is prioritized over task-specific tuning. This work revisits that paradigm in light of recent advances in large language models (LLMs), which enable the automatic synthesis of heuristics directly from problem definitions -- bypassing the need for handcrafted domain knowledge. We present a method that employs LLMs to generate problem-specific heuristic functions from planning tasks specified through successor generators, goal tests, and initial states written in a general-purpose programming language. These heuristics are compiled and integrated into standard heuristic search algorithms, such as greedy best-first search. Our approach achieves competitive, and in many cases state-of-the-art, performance across a broad range of established planning benchmarks. Moreover, it enables the solution of problems that are difficult to express in traditional formalisms, including those with complex numeric constraints or custom transition dynamics. We provide an extensive empirical evaluation that characterizes the strengths and limitations of the approach across diverse planning settings, demonstrating its effectiveness.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: Liu, F.; Tong, X.; Yuan, M.; Lin, X.; Luo, F.; Wang, Z.; Lu, 20: 61–124. Z.; and Zhang, Q. 2024. Evolution of heuristics: Towards Ghallab, M.; Nau, D.; and Traverso, P. 2004. Automated efficient automatic algorithm design using large language Planning: Theory and Practice. Morgan Kaufmann. model. arXiv p

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
