---
id: pace-primitive-aware-code-evolution-for-automated-algorithm-design
short_title: 'PACE'
title: 'PACE: Primitive-Aware Code Evolution for Automated Algorithm Design'
authors:
  - 'Zhuoliang Xie'
  - 'Ruihao Zheng'
  - 'Xiang Xu'
  - 'Genghui Li'
  - 'Zhengkun Wang'
year: 2026
date: 2026-08-01
venue: 'arXiv'
paper_url: https://arxiv.org/pdf/2608.07395
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - Automatic algorithm design
featured: false
summary: 'Large Language Model (LLM)-based automated algorithm design typically evolves algorithms as complete, indivisible programs. While this whole-program perspective simplifies the search space, it fundamentally couples the useful local logic to its host program.'
---

## Why it matters

Large Language Model (LLM)-based automated algorithm design typically evolves algorithms as complete, indivisible programs. While this whole-program perspective simplifies the search space, it fundamentally couples the useful local logic to its host program.

## Core method

The paper's abstract describes the following design loop:

> Large Language Model (LLM)-based automated algorithm design typically evolves algorithms as complete, indivisible programs. While this whole-program perspective simplifies the search space, it fundamentally couples the useful local logic to its host program. Consequently, valuable code snippets vanish when the overall program is discarded, making it highly difficult to assess the contribution of individual algorithmic components.To address this, we propose Primitive-Aware Code Evolution (PACE), which decouples local logic from complete programs by representing it as persistent units called Executable Algorithmic Primitives (EAPs). To enable code-level transfer, PACE maintains a dynamic set of EAPs. Algorithm evolution is driven by primitive-aware operators that structurally guarantee the retention and cross-program transfer of these components. To evaluate them effectively, PACE leverages Thompson sampling based on parent-relative performance improvements, guiding primitive selection from the set without requiring extra evaluation datasets. Experiments on four tasks demonstrate that PACE effectively discovers competitive algorithms while structurally preserving valuable algorithmic components.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (bibliography_only). Evidence: Checked arXiv PDF; EoH appears in the reference list.

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
