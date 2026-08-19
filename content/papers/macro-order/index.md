---
id: macro-order
short_title: 'Macro Order'
title: 'Order Matters: Unveiling the Hidden Impact of Macro Placement Sequences via
  Proxy-Guided LLM Evolution'
authors:
- Shibing Mo
- Jing Liu
- Jianchu Xu
- Ruilin Wu
year: 2026
date: 2026-06-01
venue: arXiv (Cornell University)
paper_url: https://arxiv.org/pdf/2606.08904
institutions:
- affiliation-not-disclosed
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Macro placement is a fundamental step in modern chip physical design, playing
  a crucial role in determining the solution quality of high-dimensional combinatorial
  optimization problems. Despite recent advancements in machine learning for spatial
  coordinate determination, the temporal dimension of placement sequencing remains
  largely governed by static heuristics.
---
## Why it matters

Macro placement is a fundamental step in modern chip physical design, playing a crucial role in determining the solution quality of high-dimensional combinatorial optimization problems. Despite recent advancements in machine learning for spatial coordinate determination, the temporal dimension of placement sequencing remains largely governed by static heuristics.

## Core method

Order Matters evolves macro-placement ordering policies with proxy-guided feedback. The proxy ranks candidate sequences cheaply, while selected candidates receive more expensive placement evaluation so the LLM can learn which ordering decisions matter.

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
