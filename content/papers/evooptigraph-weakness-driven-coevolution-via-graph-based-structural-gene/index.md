---
id: evooptigraph-weakness-driven-coevolution-via-graph-based-structural-gene
short_title: 'EvoOptiGraph'
title: 'EvoOptiGraph: Weakness-Driven Coevolution via Graph-Based Structural Generation for Optimization Modeling'
authors:
  - 'Qingcan Kang'
  - 'Mingyang Liu'
  - 'Xiaojin Fu'
  - 'Shixiong Kai'
  - 'Tao Zhong'
  - 'Mingxuan Yuan'
year: 2026
date: 2026-06-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2606.26578
institutions:
  - cityu-hk
  - huawei-noahs-ark
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - Automatic algorithm design
featured: false
summary: 'Automating optimization modeling from natural language with large language models (LLMs) faces two key challenges. First, training corpora lack structural diversity.'
---

## Why it matters

Automating optimization modeling from natural language with large language models (LLMs) faces two key challenges. First, training corpora lack structural diversity.

## Core method

The paper's abstract describes the following design loop:

> Automating optimization modeling from natural language with large language models (LLMs) faces two key challenges. First, training corpora lack structural diversity. Second, data generation pipelines remain static and decoupled from model learning. To address these challenges, we propose EvoOptiGraph, a novel framework where data and model co-evolve, driven by model weaknesses. EvoOptiGraph represents each mixed-integer linear program (MILP) as an attributed bipartite graph and applies validity-preserving evolutionary operators to generate structurally diverse instances. The evolved graphs are converted into solver code and natural language via deterministic compilation and verified back-translation. Training proceeds in two stages: supervised fine-tuning (SFT) on an initial dataset, followed by reinforcement learning with verifiable rewards (RLVR), where graph-derived weakness signals guide the generation of new instances targeting the model's failures. This forms a closed loop that continuously updates the training distribution. Empirical results on six public datasets show that EvoOptiGraph significantly outperforms larger generalist models, agentic methods, and specialized baselines in accuracy, executability, and generalization. These results demonstrate that targeted data-model coevolution is an effective strategy for improving LLMs on optimization modeling tasks.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: n Journal of Operational Research, 315(2):484–498, 2024b. Fei Liu, Xialiang Tong, Mingxuan Yuan, Xi Lin, Fu Luo, Zhenkun Wang, Zhichao Lu, and Qingfu Zhang. Evolution of heuristics: Towards efficient automatic algorithm design using large language model. arXiv preprint arXiv:2401.02051, 2024c. Haoyang Liu, Jie Wang, Wanbo Zhang, Zijie Geng, Yufei Kuang, Xijun Li, Bin Li, Yongdong Zhang, and F

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
