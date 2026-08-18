---
id: llm-guided-neural-architecture-search-for-robust-co-design-of-physical-n
short_title: 'LLM Guided Neural'
title: 'LLM-Guided Neural Architecture Search for Robust Co-Design of Physical Neural Networks'
authors:
  - 'Tyler King'
  - 'Timothée Leleu'
year: 2026
date: 2026-06-01
venue: 'arXiv (Cornell University)'
paper_url: https://arxiv.org/pdf/2606.10294
institutions:
  - stanford
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - Automatic algorithm design
featured: false
summary: 'Deploying neural networks on unconventional hardware demands architectures that co-optimize task accuracy and platform-specific constraints such as energy cost, physical non-idealities, and numerical precision. Existing neural architecture search (NAS) methods are typically tailored to a single hardware family, limiting cross-platform comparison and generalization.'
---

## Why it matters

Deploying neural networks on unconventional hardware demands architectures that co-optimize task accuracy and platform-specific constraints such as energy cost, physical non-idealities, and numerical precision. Existing neural architecture search (NAS) methods are typically tailored to a single hardware family, limiting cross-platform comparison and generalization.

## Core method

The paper's abstract describes the following design loop:

> Deploying neural networks on unconventional hardware demands architectures that co-optimize task accuracy and platform-specific constraints such as energy cost, physical non-idealities, and numerical precision. Existing neural architecture search (NAS) methods are typically tailored to a single hardware family, limiting cross-platform comparison and generalization. We introduce Unconventional Hardware Neural Architecture Search (UH-NAS), a hardware-agnostic, LLM-guided NAS framework that integrates language models as evolutionary operators to co-optimize accuracy and inference energy. By exposing hardware as a swappable backend with per-platform energy models, physical constraints, and non-ideality simulators, UH-NAS enables fair system-level comparisons across various backends without modifying the search algorithm. Tested on optical MZI hardware, UH-NAS discovers more diverse, robust architectures than conventional baselines while outperforming existing LLM-to-NAS approaches. Additional ablations on architecture robustness under non-idealities and the role of system prompts highlight the importance of architecture-hardware co-design for emerging computing platforms.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: ducing breakthrough results on long-standing mathemat- ical and algorithmic problems, while EoH [32] and ReEvo Our main results are as follows. First, the proposed frame- [33] extend the paradigm to combinatorial heuristic design work enables consistent system-level comparison across through r

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
