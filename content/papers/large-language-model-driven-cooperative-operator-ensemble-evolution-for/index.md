---
id: large-language-model-driven-cooperative-operator-ensemble-evolution-for
short_title: 'Large Language Model'
title: 'Large Language Model-Driven Cooperative Operator Ensemble Evolution for Permutation Flow Shop Scheduling'
authors:
  - 'Rui Xu'
  - 'Yufan Liao'
  - 'Haoze Lv'
  - 'Shengcai Liu'
  - 'Yi Mei'
  - 'Ke Tang'
year: 2026
date: 2026-06-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2606.15334
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
summary: 'The permutation flow shop scheduling problem (PFSP) is a classical NP-hard combinatorial optimization problem in intelligent manufacturing. In practice, PFSP is commonly addressed using metaheuristic algorithms, among which the iterated greedy (IG) algorithm is widely adopted due to its simplicity and strong empirical performance.'
---

## Why it matters

The permutation flow shop scheduling problem (PFSP) is a classical NP-hard combinatorial optimization problem in intelligent manufacturing. In practice, PFSP is commonly addressed using metaheuristic algorithms, among which the iterated greedy (IG) algorithm is widely adopted due to its simplicity and strong empirical performance.

## Core method

The paper's abstract describes the following design loop:

> The permutation flow shop scheduling problem (PFSP) is a classical NP-hard combinatorial optimization problem in intelligent manufacturing. In practice, PFSP is commonly addressed using metaheuristic algorithms, among which the iterated greedy (IG) algorithm is widely adopted due to its simplicity and strong empirical performance. However, classical IG relies on a single fixed destruction operator, which often limits exploration and leads to search stagnation on large and complex problem instances. To address this issue, this work proposes a multi-operator IG algorithm, termed IG-DOE, which enhances exploration by switching among heterogeneous destruction operators along a single search trajectory. The core mechanism, called stagnation-triggered sequential switching, activates the next destruction operator in an ordered destruction operator ensemble (DOE) when stagnation is detected, thereby enriching the perturbation behavior of classical IG. Moreover, to reduce reliance on expert-crafted operators, a large language model (LLM)-assisted framework, termed SCOE, is introduced to automatically construct a high-quality DOE through stagewise evolution, state-awareness, and cooperative evaluation. Experiments on the challenging VRF-hard-large benchmark show that the DOE evolved from smaller problem instances generalizes well to larger unseen instances. Under the same CPU-time limit, IG-DOE obtained much better average performance than QIG, a state-of-the-art IG algorithm. Additional experiments on real-world industrial-data-derived instances further show that the evolved DOE can generalize effectively to different data distributions without additional adaptation.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: on expert-crafted operators. Representative methods production logs and processing requirements of an such as FunSearch [20], ReEvo [21], and EoH [22] do not instrument-manufacturing workshop in Shanghai City. construct complete algorithms from scratch. Instead, they Without additional adaptation, IG-DOE (evolved on the evolv

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
