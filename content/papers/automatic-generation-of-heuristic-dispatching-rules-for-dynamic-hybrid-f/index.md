---
id: automatic-generation-of-heuristic-dispatching-rules-for-dynamic-hybrid-f
short_title: 'Automatic generation'
title: 'Automatic generation of heuristic dispatching rules for dynamic hybrid flow shop scheduling via personalized multi-island reflective evolution'
authors:
  - 'Yuning Lei'
  - 'Jin Huang'
  - 'Xinyu Li'
  - 'Qihao Liu'
  - 'Liang Gao'
year: 2026
date: 2026-05-01
venue: 'Tsinghua Science & Technology'
paper_url: https://www.sciopen.com/local/article_pdf/10.26599/TST.2026.9010050.pdf
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Dynamic hybrid flow shop scheduling problems (DHFSP) are critical in modern manufacturing systems, where uncertainties such as order fluctuations and equipment failures pose significant challenges. Traditional exact methods and metaheuristics struggle to meet real-time decision-making requirements under such dynamic conditions.'
---

## Why it matters

Dynamic hybrid flow shop scheduling problems (DHFSP) are critical in modern manufacturing systems, where uncertainties such as order fluctuations and equipment failures pose significant challenges. Traditional exact methods and metaheuristics struggle to meet real-time decision-making requirements under such dynamic conditions.

## Core method

The paper's abstract describes the following design loop:

> Dynamic hybrid flow shop scheduling problems (DHFSP) are critical in modern manufacturing systems, where uncertainties such as order fluctuations and equipment failures pose significant challenges. Traditional exact methods and metaheuristics struggle to meet real-time decision-making requirements under such dynamic conditions. Heuristic dispatching rules (HDRs) have been widely adopted for their rapid response capabilities. In recent years, large language models (LLMs) have demonstrated remarkable capabilities in code generation and logical reasoning, showing promising potential for automated HDR design. However, existing LLM-based methods predominantly adopt single-population evolution strategies, which suffer from insufficient population diversity, limited semantic-level reasoning, and premature convergence, thereby frequently becoming trapped in local optima. To address these challenges, this paper proposes a personalized multi-island reflective evolution framework that assigns distinct exploration personalities to multiple parallel sub-populations and incorporates an LLM-driven semantic reflection mechanism to achieve efficient search space coverage and enhanced exploration depth. The framework employs a two-stage strategy: offline training constructs a robust rule library through diversified dynamic scenarios, while online application enables rapid real-time decision-making. Experimental results on 300 test instances demonstrate that the proposed method outperforms traditional HDRs, conventional evolutionary rule generation methods, and state-of-the-art LLM-based approaches, exhibiting superior stability and generalization capability.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: pabilities to the automated generation of heuristics. Liu et al. network framework that overcomes the dimensional limi- [17] presented the evolution of heuristics (EoH) framework, tations of neural networks. Although these DRL methods which systematically showcases the capability of LLMs to have shown promising results, their adoption in industrial automatic

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
