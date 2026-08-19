---
id: algo-dev
short_title: 'OpenEvolve'
title: 'Algorithmic algorithm development with LLMs: A Case Study on LLM-Usage for
  Contraction Order Optimization in Tensor Networks'
authors:
- Fabian Hoppe
- Melven Röhrig-Zöllner
- Philipp Knechtges
year: 2026
date: 2026-06-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2606.01975
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
summary: We consider LLM-based algorithm development through a case study on contractionorder
  optimisation for tensor networks with OpenEvolve. We pay particular attention to
  the choice of the LLM as well as design choices such as evaluation metric and test
  instances.
---
## Why it matters

We consider LLM-based algorithm development through a case study on contractionorder optimisation for tensor networks with OpenEvolve. We pay particular attention to the choice of the LLM as well as design choices such as evaluation metric and test instances.

## Core method

The study uses OpenEvolve to evolve executable contraction-order programs for tensor networks. Its experiments vary the language model, verifier/evaluation metric, and test-instance design, then inspect whether apparent gains transfer beyond the selected instances.

## Contributions

- A concrete OpenEvolve case study for tensor-network contraction order.
- A controlled analysis of model, verifier, and instance choices.
- Evidence that evaluation and interpretation remain central to coding-agent evolution.

## Strengths and limitations

The method makes the design artifact executable and lets task feedback guide later proposals. Its conclusions remain tied to the evaluator, search budget, and task scaffold; transfer outside the reported settings is therefore an open question.

## What to improve

Useful follow-ups include stronger behavioral deduplication, cross-task evaluation, and explicit accounting of model and verifier cost.

## Connections

The relation atlas records only method-level links supported by the paper's method or experiments.
