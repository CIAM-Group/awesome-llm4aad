---
id: man-made-heuristics-are-dead-long-live-code-generators
short_title: 'Man Made Heuristics'
title: 'Man-Made Heuristics Are Dead. Long Live Code Generators!'
authors:
  - 'Rohit Dwivedula'
  - 'Divyanshu Saxena'
  - 'Aditya Akella'
  - 'Swarat Chaudhuri'
  - 'Daehyeok Kim'
year: 2025
date: 2025-10-01
venue: 'ACM Workshop on Hot Topics in Networks'
paper_url: https://arxiv.org/pdf/2510.08803
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Policy design for various systems controllers has conventionally been a manual process, with domain experts carefully tailoring heuristics for the specific instance in which the policy will be deployed. In this paper, we re-imagine policy design via a novel automated search technique fueled by recent advances in generative models, specifically Large Language Model (LLM)-driven code generation.'
---

## Why it matters

Policy design for various systems controllers has conventionally been a manual process, with domain experts carefully tailoring heuristics for the specific instance in which the policy will be deployed. In this paper, we re-imagine policy design via a novel automated search technique fueled by recent advances in generative models, specifically Large Language Model (LLM)-driven code generation.

## Core method

The paper's abstract describes the following design loop:

> Policy design for various systems controllers has conventionally been a manual process, with domain experts carefully tailoring heuristics for the specific instance in which the policy will be deployed. In this paper, we re-imagine policy design via a novel automated search technique fueled by recent advances in generative models, specifically Large Language Model (LLM)-driven code generation. We outline the design and implementation of PolicySmith, a framework that applies LLMs to synthesize instance-optimal heuristics. We apply PolicySmith to two long-standing systems policies - web caching and congestion control, highlighting the opportunities unraveled by this LLM-driven heuristic search. For caching, PolicySmith discovers heuristics that outperform established baselines on standard open-source traces. For congestion control, we show that PolicySmith can generate safe policies that integrate directly into the Linux kernel.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: As LLMs continue to improve, we expect this design space to widen, enabling the evolution of heuristics in more complex Per object Number of accesses (count), last access time, time added to cache, object size templates. The narrow Template implies that most errors Aggre

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
