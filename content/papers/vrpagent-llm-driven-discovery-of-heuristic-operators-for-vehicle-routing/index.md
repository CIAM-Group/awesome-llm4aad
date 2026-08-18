---
id: vrpagent-llm-driven-discovery-of-heuristic-operators-for-vehicle-routing
short_title: 'VRPAgent'
title: 'VRPAgent: LLM-Driven Discovery of Heuristic Operators for Vehicle Routing Problems'
authors:
  - 'André Hottung'
  - 'Federico Berto'
  - 'Chuanbo Hua'
  - 'Nayeli Gast Zepeda'
  - 'Daniel Wetzel'
  - 'Michael Römer'
  - 'Haoran Ye'
  - 'Davide Zago'
  - 'Michael Poli'
  - 'Stefano Massaroli'
  - 'Jinkyoo Park'
  - 'Kevin Tierney'
year: 2025
date: 2025-10-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2510.07073
institutions:
  - pku
  - stanford
primary_dimension: design-object
dimensions:
  - design-object
problems:
  - Automatic algorithm design
featured: false
summary: 'Designing high-performing heuristics for vehicle routing problems (VRPs) is a complex task that requires both intuition and deep domain knowledge. Large language model (LLM)-based code generation has recently shown promise across many domains, but it still falls short of producing heuristics that rival those crafted by human experts.'
---

## Why it matters

Designing high-performing heuristics for vehicle routing problems (VRPs) is a complex task that requires both intuition and deep domain knowledge. Large language model (LLM)-based code generation has recently shown promise across many domains, but it still falls short of producing heuristics that rival those crafted by human experts.

## Core method

The paper's abstract describes the following design loop:

> Designing high-performing heuristics for vehicle routing problems (VRPs) is a complex task that requires both intuition and deep domain knowledge. Large language model (LLM)-based code generation has recently shown promise across many domains, but it still falls short of producing heuristics that rival those crafted by human experts. In this paper, we propose VRPAgent, a framework that integrates LLM-generated components into a metaheuristic and refines them through a novel genetic search. By using the LLM to generate problem-specific operators, embedded within a generic metaheuristic framework, VRPAgent keeps tasks manageable, guarantees correctness, and still enables the discovery of novel and powerful strategies. Across multiple problems, including the capacitated VRP, the VRP with time windows, and the prize-collecting VRP, our method discovers heuristic operators that outperform handcrafted methods and recent learning-based approaches while requiring only a single CPU core. To our knowledge, \VRPAgent is the first LLM-based paradigm to advance the state-of-the-art in VRPs, highlighting a promising future for automated heuristics discovery.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: 8% 121 - - - NDS CPU+GPU 36.57 -0.20% 60 41.11 -0.07% 120 56.00 -0.07% 240 EoH CPU 45.89 25.21% <1 52.42 27.42% <1 71.21 27.07% <1 MCTS-AHD CPU 45.51 24.17% <1 52.49 27.59% <1 71.15 26.96% <1 ReEvo

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
