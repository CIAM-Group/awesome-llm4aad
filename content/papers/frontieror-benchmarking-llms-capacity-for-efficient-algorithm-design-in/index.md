---
id: frontieror-benchmarking-llms-capacity-for-efficient-algorithm-design-in
short_title: 'FrontierOR'
title: 'FrontierOR: Benchmarking LLMs'' Capacity for Efficient Algorithm Design in Large-Scale Optimization'
authors:
  - 'Minwei Kong'
  - 'Chonghe Jiang'
  - 'Ao Qu'
  - 'Wenbin Ouyang'
  - 'Zhaoming Zeng'
  - 'Xiaotong Guo'
  - 'Zhekai Li'
  - 'Junyi Li'
  - 'Yi Fan'
  - 'Xinshou Zheng'
  - 'Xi Jing'
  - 'Yikai Zhang'
  - 'Zhiwei Liang'
  - 'Seonghoo Kim'
  - 'Runqing Yang'
  - 'Zijian Zhou'
  - 'Sirui Li'
  - 'Han Zheng'
  - 'Wangyang Ying'
  - 'Ou Zheng'
year: 2026
date: 2026-05-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2605.25246
institutions:
  - microsoft
  - nus
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - Automatic algorithm design
featured: false
summary: 'Large language models (LLMs) are increasingly used for optimization modeling and solver-code generation, yet practical operations research and optimization problems often require a harder capability: designing scalable algorithms that exploit problem structure and outperform direct formulation-and-solve baselines. Existing benchmarks are limited to small or simplified examples far below real-world scale and complexity.'
---

## Why it matters

Large language models (LLMs) are increasingly used for optimization modeling and solver-code generation, yet practical operations research and optimization problems often require a harder capability: designing scalable algorithms that exploit problem structure and outperform direct formulation-and-solve baselines. Existing benchmarks are limited to small or simplified examples far below real-world scale and complexity.

## Core method

The paper's abstract describes the following design loop:

> Large language models (LLMs) are increasingly used for optimization modeling and solver-code generation, yet practical operations research and optimization problems often require a harder capability: designing scalable algorithms that exploit problem structure and outperform direct formulation-and-solve baselines. Existing benchmarks are limited to small or simplified examples far below real-world scale and complexity. We introduce FrontierOR, among the first benchmarks to systematically evaluate LLM-based efficient algorithm design for realistic large-scale optimization problems. FrontierOR includes 180 tasks derived from methodologically diverse papers published in top-tier operations research venues, each with standardized instances and a hidden, expert-verified evaluation suite. We evaluate seven LLMs spanning frontier, cost-effective, and open-source models both in one-shot and test-time evolution settings. The results reveal that frontier models still struggle to move from executable formulations to efficient optimization algorithms: the strongest one-shot model outperforms Gurobi in only 31% of cases in both solution quality and computational efficiency, and even strong coding agents with test-time evolution achieve only 50% on selected hard tasks. FrontierOR establishes a practical evaluation platform for LLM-based optimization algorithm design, which enables future LLMs and agents to be systematically tested on whether they can move beyond correct formulation toward a feasible, high-quality, and efficient algorithm. Code and data are publicly released at https://github.com/Minw913/FrontierOR.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: tion operator within a MAP-Elites evolutionary algorithm over a program database; we adopt OpenEvolve [20] as the open-source replication of this paradigm. (2) EoH [13]: The LLM jointly evolves code and the natural-language thoughts behind it; its prompt operators explicitly encourage the agent to explore diverse solution approaches rather than locally perturbing existing code. (3

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
