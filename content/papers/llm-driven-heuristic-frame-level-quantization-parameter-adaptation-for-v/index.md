---
id: llm-driven-heuristic-frame-level-quantization-parameter-adaptation-for-v
short_title: 'LLM Driven Heuristic'
title: 'LLM-Driven Heuristic Frame-Level Quantization Parameter Adaptation for VVenC'
authors:
  - 'Liqiang He'
  - 'Yingwen Zhang'
  - 'Riyu Lu'
  - 'M Wang'
  - 'S Q Wang'
year: 2026
date: 2026-06-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2606.20847
institutions:
  - cityu-hk
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Optimal frame-level quantization parameter (QP) allocation remains a persistent challenge in modern video encoders. The fixed-QP scheme widely adopted in practical systems is inherently content-agnostic, while classical Lagrangian rate-distortion optimization (RDO) methods often suffer from inaccurate multiplier settings.'
---

## Why it matters

Optimal frame-level quantization parameter (QP) allocation remains a persistent challenge in modern video encoders. The fixed-QP scheme widely adopted in practical systems is inherently content-agnostic, while classical Lagrangian rate-distortion optimization (RDO) methods often suffer from inaccurate multiplier settings.

## Core method

The paper's abstract describes the following design loop:

> Optimal frame-level quantization parameter (QP) allocation remains a persistent challenge in modern video encoders. The fixed-QP scheme widely adopted in practical systems is inherently content-agnostic, while classical Lagrangian rate-distortion optimization (RDO) methods often suffer from inaccurate multiplier settings. In this paper, we explore the use of large language models (LLMs) to automatically design RDO heuristics for frame-level QP adaptation. We construct a closed-loop evolutionary framework in which the LLM iteratively proposes RDO heuristics as algorithmic ideas with executable code, and these candidates are evaluated directly through encoding with the Fraunhofer Versatile Video Encoder (VVenC), where each heuristic acts as a scoring function that compares different QP choices based on the encoding statistics of past frames and current candidates. Experimental results across multiple test sets show that the evolved heuristic achieves promising rate-distortion improvements over both the fixed-QP scheme and the Lagrangian baseline. Further analysis reveals that the LLM can autonomously discover an adaptive heuristic that penalizes QP fluctuations via entropy-based terms, providing new insights into the design of RDO algorithms

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: ] F. Liu, X. Tong, M. Yuan, X. Lin, F. Luo, Z. Wang, Z. Lu, and Q. Zhang, scale in reference picture resampling for versatile video coding,” IEEE “Evolution of heuristics: Towards efficient automatic algorithm design Transactions on Multimedia, vol. 27, pp. 5831–5842, 2025. using large language model,” arXiv preprint arXiv:2401.02051, 2024. [7] L. Li, B. Li, H. Li, and C.

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
