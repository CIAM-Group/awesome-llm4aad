---
id: autopbo
short_title: 'AutoPBO'
title: 'AutoPBO: LLM-powered Optimization for Local Search PBO Solvers'
authors:
- Jinyuan Li
- Yi Chu
- Yiwen Sun
- Mengchuan Zou
- Shaowei Cai
year: 2025
date: 2025-09-01
venue: arXiv.org
paper_url: https://arxiv.org/pdf/2509.04007
institutions:
- chinese-academy-sciences
- fudan
- university-chinese-academy-sciences
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Pseudo-Boolean Optimization (PBO) provides a powerful framework for modeling
  combinatorial problems through pseudo-Boolean (PB) constraints. Local search solvers
  have shown excellent performance in PBO solving, and their efficiency is highly
  dependent on their internal heuristics to guide the search.
---
## Why it matters

Pseudo-Boolean Optimization (PBO) provides a powerful framework for modeling combinatorial problems through pseudo-Boolean (PB) constraints. Local search solvers have shown excellent performance in PBO solving, and their efficiency is highly dependent on their internal heuristics to guide the search.

## Core method

AutoPBO starts from an existing pseudo-Boolean local-search solver rather than generating a complete solver from scratch. Multiple LLM roles propose and revise solver components, while four benchmark families provide the objective signal used to keep improvements.

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
