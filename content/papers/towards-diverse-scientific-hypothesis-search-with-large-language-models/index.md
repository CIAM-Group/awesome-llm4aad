---
id: towards-diverse-scientific-hypothesis-search-with-large-language-models
short_title: 'Towards Diverse'
title: 'Towards Diverse Scientific Hypothesis Search with Large Language Models'
authors:
  - 'Haorui Wang'
  - 'Parshin Shojaee'
  - 'Kazem Meidani'
  - 'Kunyang Sun'
  - 'José Miguel Hernández-Lobato'
  - 'Teresa Head-Gordon'
  - 'Jiajun He'
  - 'Chandan K. Reddy'
  - 'Chao Zhang'
  - 'Yuanqi Du'
year: 2026
date: 2026-06-01
venue: 'arXiv (Cornell University)'
paper_url: https://arxiv.org/pdf/2606.10587
institutions:
  - carnegie-mellon
  - microsoft
  - university-california
  - university-cambridge
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - Automatic algorithm design
featured: false
summary: 'Large language models (LLMs) are on the rise for accelerating scientific discovery, most recently in advanced tasks such as generating valid scientific hypotheses. Yet in many discovery settings, the goal is not to identify a single best hypothesis since validation can be noisy and expensive, and scientists benefit from a set of high-quality alternative hypotheses that hedge against downstream uncertainty for the best solutions.'
---

## Why it matters

Large language models (LLMs) are on the rise for accelerating scientific discovery, most recently in advanced tasks such as generating valid scientific hypotheses. Yet in many discovery settings, the goal is not to identify a single best hypothesis since validation can be noisy and expensive, and scientists benefit from a set of high-quality alternative hypotheses that hedge against downstream uncertainty for the best solutions.

## Core method

The paper's abstract describes the following design loop:

> Large language models (LLMs) are on the rise for accelerating scientific discovery, most recently in advanced tasks such as generating valid scientific hypotheses. Yet in many discovery settings, the goal is not to identify a single best hypothesis since validation can be noisy and expensive, and scientists benefit from a set of high-quality alternative hypotheses that hedge against downstream uncertainty for the best solutions. Nevertheless, commonly used evolutionary search recipes tend to prioritize optimization over exploration in hypothesis generation, and the resulting selection pressure during the search process leads to diversity collapse. Motivated by these limitations, we formulate hypothesis search as a sampling problem, where the objective is to efficiently produce diverse, high-quality hypotheses under a fixed validation budget. Building on this perspective, we propose \ours, an evolutionary framework inspired by the classical parallel tempering algorithm that searches hypotheses at multiple temperature levels and enables principled information exchange across temperatures to improve exploration without disrupting convergence. Across domains including molecular discovery, equation discovery, and algorithm discovery, our approach consistently improves both hypothesis quality and diversity under the same validation budget, and produces candidates that remain robust under more expensive downstream computational validations.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: Liu, F., Xialiang, T., Yuan, M., Lin, X., Luo, F., Wang, arXiv:2102.09548, 2021. Z., Lu, Z., and Zhang, Q. Evolution of heuristics: To- wards efficient automatic algorithm design using large Huang, K., Zhang, S., Wang, H., Qu, Y., Lu, Y., Roohani, language mode

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
