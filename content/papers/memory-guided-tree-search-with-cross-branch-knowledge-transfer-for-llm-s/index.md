---
id: memory-guided-tree-search-with-cross-branch-knowledge-transfer-for-llm-s
short_title: 'Memory Guided Tree'
title: 'Memory-Guided Tree Search with Cross-Branch Knowledge Transfer for LLM Solver Synthesis'
authors:
  - 'Fatemeh Haji'
  - 'Javier Delarosa Quiros'
  - 'Peyman Najafirad'
year: 2026
date: 2026-05-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2605.17539
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Combinatorial optimization (CO) underlies decision-making from logistics to chip design, where infeasible solutions are operationally unusable and small quality gains translate into substantial economic value. Recent work uses large language models (LLMs) to automate solver synthesis: generating executable solver programs from natural-language specifications.'
---

## Why it matters

Combinatorial optimization (CO) underlies decision-making from logistics to chip design, where infeasible solutions are operationally unusable and small quality gains translate into substantial economic value. Recent work uses large language models (LLMs) to automate solver synthesis: generating executable solver programs from natural-language specifications.

## Core method

The paper's abstract describes the following design loop:

> Combinatorial optimization (CO) underlies decision-making from logistics to chip design, where infeasible solutions are operationally unusable and small quality gains translate into substantial economic value. Recent work uses large language models (LLMs) to automate solver synthesis: generating executable solver programs from natural-language specifications. However, existing tree-search and evolutionary agents refine candidate trajectories in parallel without explicit knowledge transfer, reintroducing the same constraint violations and converging on similar algorithm families. We introduce MEMOIR, a memory-guided tree-search framework with a two-level memory hierarchy: branch-local memory preserves execution-grounded refinement details within a branch as it iterates on a single algorithmic design, while global memory stores compressed algorithmic and failure-mode summaries across branches. A reflection step at branch termination distills these summaries, enabling cross-branch transfer without polluting future contexts with low-level debugging traces. Across seven CO problems spanning scheduling, routing, packing, and geometric design, MEMOIR achieves 96.7% solution validity (a 9.2 point gap over the strongest baseline) and improves the average normalized score by 7.3 points at matched per-method execution budget. Over three independent runs on four problems, MEMOIR's run-to-run validity standard deviation is more than an order of magnitude below that of every baseline we evaluated in this setting, suggesting that memory-guided exploration yields consistent improvements rather than reflecting sampling variance.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: s, scoring candidates with execution-grounded signals. FunSearch applies evolutionary program search over LLM-generated programs [Romera-Paredes et al., 2024], EoH co-evolves heuristic descriptions and code with LLMs [Liu et al., 2024], ReEvo augments evolution with short- and long-term reflections [Ye et al., 2024], and MCTS-AHD performs Monte Carlo Tree Search over algorithm-des

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
