---
id: frontieror
short_title: 'FrontierOR'
title: 'FrontierOR: Benchmarking LLMs'' Capacity for Efficient Algorithm Design in
  Large-Scale Optimization'
authors:
- Minwei Kong
- Chonghe Jiang
- Ao Qu
- Wenbin Ouyang
- Zhaoming Zeng
- Xiaotong Guo
- Zhekai Li
- Junyi Li
- Yi Fan
- Xinshou Zheng
- Xi Jing
- Yikai Zhang
- Zhiwei Liang
- Seonghoo Kim
- Runqing Yang
- Zijian Zhou
- Sirui Li
- Han Zheng
- Wangyang Ying
- Ou Zheng
year: 2026
date: 2026-05-01
venue: ArXiv.org
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
summary: 'Large language models (LLMs) are increasingly used for optimization modeling
  and solver-code generation, yet practical operations research and optimization problems
  often require a harder capability: designing scalable algorithms that exploit problem
  structure and outperform direct formulation-and-solve baselines. Existing benchmarks
  are limited to small or simplified examples far below real-world scale and complexity.'
---
## Why it matters

Large language models (LLMs) are increasingly used for optimization modeling and solver-code generation, yet practical operations research and optimization problems often require a harder capability: designing scalable algorithms that exploit problem structure and outperform direct formulation-and-solve baselines. Existing benchmarks are limited to small or simplified examples far below real-world scale and complexity.

## Core method

FrontierOR evaluates LLMs on large-scale optimization design, including one-shot generation and test-time evolution. Its contribution is a benchmark and protocol for measuring whether generated algorithms remain efficient as problem structure and scale increase.

## Contributions

- A concrete LLM-based design loop for the target artifact.
- An evaluator or verifier that supplies feedback to subsequent proposals.
- Experiments that expose the method's transfer or scaling behavior.

## Strengths and limitations

The method makes the design artifact executable and lets task feedback guide later proposals. Its conclusions remain tied to the evaluator, search budget, and task scaffold; transfer outside the reported settings is therefore an open question.

## What to improve

Useful follow-ups include stronger behavioral deduplication, cross-task evaluation, and explicit accounting of model and verifier cost.

## Connections

The relation atlas records only method-level links supported by the paper's method or experiments.
