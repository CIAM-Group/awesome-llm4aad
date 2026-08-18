---
id: order-matters-unveiling-the-hidden-impact-of-macro-placement-sequences-v
short_title: 'Order Matters'
title: 'Order Matters: Unveiling the Hidden Impact of Macro Placement Sequences via Proxy-Guided LLM Evolution'
authors:
  - 'Shibing Mo'
  - 'Jing Liu'
  - 'Jianchu Xu'
  - 'Ruilin Wu'
year: 2026
date: 2026-06-01
venue: 'arXiv (Cornell University)'
paper_url: https://arxiv.org/pdf/2606.08904
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Macro placement is a fundamental step in modern chip physical design, playing a crucial role in determining the solution quality of high-dimensional combinatorial optimization problems. Despite recent advancements in machine learning for spatial coordinate determination, the temporal dimension of placement sequencing remains largely governed by static heuristics.'
---

## Why it matters

Macro placement is a fundamental step in modern chip physical design, playing a crucial role in determining the solution quality of high-dimensional combinatorial optimization problems. Despite recent advancements in machine learning for spatial coordinate determination, the temporal dimension of placement sequencing remains largely governed by static heuristics.

## Core method

The paper's abstract describes the following design loop:

> Macro placement is a fundamental step in modern chip physical design, playing a crucial role in determining the solution quality of high-dimensional combinatorial optimization problems. Despite recent advancements in machine learning for spatial coordinate determination, the temporal dimension of placement sequencing remains largely governed by static heuristics. In this work, we demonstrate that the placement sequence is not merely a preprocessing step but a decisive factor in optimization, where suboptimal early decisions trigger irreversible domino effects that constrain the solution space. To harness this unexplored dimension, we propose \textbf{OrderPlace}, a proxy-guided LLM evolution framework for automatically discovering macro placement order strategies. Instead of relying on manually crafted heuristics such as area- or connectivity-based ordering, OrderPlace explores a broader space of code-level policies, ranging from static scoring metrics to dynamic physics-inspired mechanisms. To mitigate the prohibitive cost of evaluating sequences, we introduce a lightweight proxy evaluation mechanism that efficiently filters candidates using a deterministic greedy probe. Experimental results on the standard ISPD 2005 benchmarks demonstrate that OrderPlace discovers novel ordering strategies. Compared with WireMask-EA and the state-of-the-art method EGPlace, OrderPlace reduces wirelength by 34.04\% and 14.08\%, respectively.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: ational Liu, F., Tong, X., Yuan, M., Lin, X., Luo, F., Wang, Z., Conference on Artificial Intelligence and Statistics, pp. Lu, Z., and Zhang, Q. Evolution of heuristics: towards 661–668, 2010. efficient automatic algorithm design using large language Shi, Y., Xue, K., Lei, S., and Qian, C. Macro placement by model. In Proceedings of the International Conference

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
