---
id: aesat
short_title: AESAT
title: 'Bridging LLMs and SAT Solving: Automated Evolution of High-Performance Heuristics'
authors:
  - Mao Luo
  - Hang Ding
  - Chu-Min Li
  - Junjie Zhang
  - Zhiwei Ye
  - Zhipeng Lü
  - Caiquan Xiong
  - Xinyun Wu
year: 2026
date: 2026-08-01
venue: IJCAI
paper_url: https://ijcai.org/proceedings/2026/0257.pdf
code_url: https://github.com/FSQH-dh/AESAT
institutions:
  - hubei-university-technology
  - picardie-jules-verne
  - aix-marseille
  - hust
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Boolean satisfiability
featured: false
summary: AESAT refines and recombines solver-internal C heuristics, using runtime measurements and ancestral histories to improve both code and generation prompts.
---

## Why it matters

A promising change to a mature SAT solver can initially run worse than its baseline. Discarding every such proposal immediately may prevent the search from refining or combining useful ideas. AESAT studies this problem inside Kissat rather than asking an LLM to solve SAT instances directly.

## Core method

The search starts with a target C function, the surrounding solver, a set of coding guidelines and training instances. GPT-4.5 proposes an initial population of heuristic descriptions. For each individual, GPT proposes local changes and Claude implements them. The resulting solver is executed on the training instances, with timeouts penalized through PAR2. Local refinement retains the best neighbor and records its parent and measured performance.

DeepSeek-R1 then combines selected parents into new functions. Population reduction considers measured performance, an LLM-assessed innovation score and randomness, while preserving the best measured individual. Ancestral code, descriptions and runtime results also feed a periodic update of the generation guidelines. These textual analyses guide proposals but do not replace solver execution as the performance test.

The case study evolves the bandit rule that switches between branching heuristics in Kissat-MAB. It also modifies a VSIDS score-increment function. Section 4 traces how temporary switching bonuses, reward normalization and other changes are refined and recombined before becoming competitive.

## Contributions

- Combines local code refinement with multi-parent evolutionary exploration.
- Makes performance histories useful for both candidate generation and prompt revision.
- Tests generated solver components on SAT Competition datasets from 2022 through 2025.

## Strengths and limitations

The experiments connect generated code to concrete solver behavior and compare several discovered functions with their baselines. However, training uses 60 instances drawn from the 2024 competition, so results on the full 2024 set are not wholly held out. Only some training improvements transfer to the full benchmark sets. The prompt-update analysis shows a trend across successive runs rather than a fully matched randomized intervention, which limits causal attribution. Reported model-call cost also does not replace accounting for lengthy solver evaluations.

## What to improve

Separate training, selection and final test families. Compare local refinement, recombination and prompt adaptation under equal total evaluation and inference budgets. Release repeated independent search runs, including failed candidates and their runtime cost.

## Connections

[AutoModSAT](../automodsat/index.md) also searches solver-internal heuristics with execution feedback. Its modular interfaces, prompt-diversity optimization and single-parent evolutionary search differ from AESAT's local refinement and multi-parent recombination. This is a comparison of search mechanisms, not a claim that one framework implements the other.
