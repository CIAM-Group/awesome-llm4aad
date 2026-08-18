---
id: evooptigraph
short_title: 'EvoOptiGraph'
title: 'EvoOptiGraph: Weakness-Driven Coevolution via Graph-Based Structural Generation
  for Optimization Modeling'
authors:
- Qingcan Kang
- Mingyang Liu
- Xiaojin Fu
- Shixiong Kai
- Tao Zhong
- Mingxuan Yuan
year: 2026
date: 2026-06-01
venue: ArXiv.org
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
summary: Automating optimization modeling from natural language with large language
  models (LLMs) faces two key challenges. First, training corpora lack structural
  diversity.
---
## Why it matters

Automating optimization modeling from natural language with large language models (LLMs) faces two key challenges. First, training corpora lack structural diversity.

## Core method

EvoOptiGraph represents optimization models as graph-structured objects and uses weakness signals to decide what to evolve next. Generated formulations are checked by solvers, while verification results feed the next data/model co-evolution cycle.

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
