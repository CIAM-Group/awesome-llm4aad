---
id: mech-design
short_title: 'LLMRule'
title: An Interpretable Automated Mechanism Design Framework with Large Language Models
authors:
- Jiayuan Liu
- Mingyu Guo
- Vincent Conitzer
year: 2025
date: 2025-02-01
venue: arXiv.org
paper_url: https://arxiv.org/pdf/2502.12203
institutions:
- carnegie-mellon
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Mechanism design has long been a cornerstone of economic theory, with traditional
  approaches relying on mathematical derivations. Recently, automated approaches,
  including differentiable economics with neural networks, have emerged for designing
  payments and allocations.
---
## Why it matters

Mechanism design has long been a cornerstone of economic theory, with traditional approaches relying on mathematical derivations. Recently, automated approaches, including differentiable economics with neural networks, have emerged for designing payments and allocations.

## Core method

The framework evolves interpretable mechanism rules in a FunSearch-style program-search loop. Generated rules are evaluated against mechanism-design criteria and repaired when they violate strategy-proofness or other formal constraints.

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
