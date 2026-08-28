---
id: pathplan-llm
short_title: 'PathPlan'
title: Constraint-aware Path Planning from Natural Language Instructions Using Large
  Language Models
authors:
- Shim, Dylan
- Wei, Minghan
year: 2026
date: 2026-03-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2603.19257
institutions:
- florida-atlantic
primary_dimension: design-object
dimensions:
- design-object
- scope
problems:
- Automatic algorithm design
featured: false
summary: Real-world path planning tasks typically involve multiple constraints beyond
  simple route optimization, such as the number of routes, maximum route length, depot
  locations, and task-specific requirements. Traditional approaches rely on dedicated
  formulations and algorithms for each problem variant, making them difficult to scale
  across diverse scenarios.
---
## Why it matters

Real-world path planning tasks typically involve multiple constraints beyond simple route optimization, such as the number of routes, maximum route length, depot locations, and task-specific requirements. Traditional approaches rely on dedicated formulations and algorithms for each problem variant, making them difficult to scale across diverse scenarios.

## Core method

The path-planning framework parses natural-language constraints into a planning formulation, generates candidate solutions, and iteratively verifies and repairs them. Its design target is an executable solver pipeline rather than a standalone heuristic operator.

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
