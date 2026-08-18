---
id: or-agent-bridging-evolutionary-search-and-structured-research-for-automa
short_title: 'OR-Agent'
title: 'OR-Agent: Bridging Evolutionary Search and Structured Research for Automated Algorithm Discovery'
authors:
  - 'Qi Liu'
  - 'Ruochen Hao'
  - 'Can Li'
  - 'Wanjing Ma'
year: 2026
date: 2026-02-01
venue: 'arXiv.org'
paper_url: https://arxiv.org/pdf/2602.13769
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
summary: 'Automating scientific discovery in complex, experiment-driven domains requires more than iterative mutation of programs; it demands structured hypothesis management, environment interaction, and principled reflection. We present OR-Agent, a configurable multi-agent research framework designed for automated exploration in rich experimental environments.'
---

## Why it matters

Automating scientific discovery in complex, experiment-driven domains requires more than iterative mutation of programs; it demands structured hypothesis management, environment interaction, and principled reflection. We present OR-Agent, a configurable multi-agent research framework designed for automated exploration in rich experimental environments.

## Core method

The paper's abstract describes the following design loop:

> Automating scientific discovery in complex, experiment-driven domains requires more than iterative mutation of programs; it demands structured hypothesis management, environment interaction, and principled reflection. We present OR-Agent, a configurable multi-agent research framework designed for automated exploration in rich experimental environments. OR-Agent organizes research as a structured tree-based workflow that explicitly models branching hypothesis generation and systematic backtracking, enabling controlled management of research trajectories beyond simple mutation-crossover loops. At its core, we introduce an evolutionary-systematic ideation mechanism that unifies evolutionary selection of research starting points, comprehensive research plan generation, and coordinated exploration within a research tree. We introduce a hierarchical optimization-inspired reflection system in which short-term reflections act as verbal gradients, long-term reflections as verbal momentum, and memory compression as semantic weight decay, collectively forming a principled mechanism for governing research dynamics. We conduct extensive experiments across classical combinatorial optimization benchmarks as well as simulation-based cooperative driving scenarios. Results demonstrate that OR-Agent outperforms strong evolutionary baselines while providing a general, extensible, and inspectable framework for AI-assisted scientific discovery. All code and experimental data are publicly available at https://github.com/qiliuchn/OR-Agent.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: ized through large language model (LLM)–driven idea recombination and variation, similar in spirit to prior LLM-based genetic approaches such as AEL [LTYZ23], EoH [LTY+ 24] and ReEvo [YWC+ 24]. However, unlike these methods, OR-Agent does not rely on frequent evolutionary operators alone. Instead, it emphasizes extensive and systematic investigation around each evolutionary start

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
