---
id: scoe
short_title: 'SCOE'
title: Large Language Model-Driven Cooperative Operator Ensemble Evolution for Permutation
  Flow Shop Scheduling
authors:
- Rui Xu
- Yufan Liao
- Haoze Lv
- Shengcai Liu
- Yi Mei
- Ke Tang
year: 2026
date: 2026-06-01
venue: ArXiv.org
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
summary: The permutation flow shop scheduling problem (PFSP) is a classical NP-hard
  combinatorial optimization problem in intelligent manufacturing. In practice, PFSP
  is commonly addressed using metaheuristic algorithms, among which the iterated greedy
  (IG) algorithm is widely adopted due to its simplicity and strong empirical performance.
---
## Why it matters

The permutation flow shop scheduling problem (PFSP) is a classical NP-hard combinatorial optimization problem in intelligent manufacturing. In practice, PFSP is commonly addressed using metaheuristic algorithms, among which the iterated greedy (IG) algorithm is widely adopted due to its simplicity and strong empirical performance.

## Core method

SCOE uses a cooperative ReEvo-style loop to evolve an ensemble of interacting flow-shop operators. Operators are evaluated jointly, and the search must improve the ensemble without discarding useful specialization in individual members.

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
