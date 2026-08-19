---
id: participatory-rules
short_title: 'LLM-PB'
title: Large Language Models for Designing Participatory Budgeting Rules
authors:
- Nguyễn Thạch
- Xingchen Sha
- Hau Chan
year: 2026
date: 2026-02-01
venue: arXiv (Cornell University)
paper_url: https://arxiv.org/pdf/2602.09349
institutions:
- university-nebraska-lincoln
- northwestern
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Participatory budgeting (PB) is a democratic paradigm for deciding the funding
  of public projects given the residents' preferences, which has been adopted in numerous
  cities across the world. The main focus of PB is designing rules, functions that
  return feasible budget allocations for a set of projects subject to some budget
  constraint.
---
## Why it matters

Participatory budgeting (PB) is a democratic paradigm for deciding the funding of public projects given the residents' preferences, which has been adopted in numerous cities across the world. The main focus of PB is designing rules, functions that return feasible budget allocations for a set of projects subject to some budget constraint.

## Core method

LLMs generate and evolve participatory-budgeting allocation rules. Each rule is checked for allocation utility and fairness, and the framework includes a repair step for strategy-proofness rather than accepting a high-scoring but invalid rule.

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
