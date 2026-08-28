---
id: or-agent
short_title: 'OR-Agent'
title: 'OR-Agent: Bridging Evolutionary Search and Structured Research for Automated
  Algorithm Discovery'
authors:
- Qi Liu
- Ruochen Hao
- Can Li
- Wanjing Ma
year: 2026
date: 2026-02-01
venue: arXiv.org
paper_url: https://arxiv.org/pdf/2602.13769
institutions:
- tongji
primary_dimension: design-object
dimensions:
- design-object
- search
- scope
problems:
- Automatic algorithm design
featured: false
summary: Automating scientific discovery in complex, experiment-driven domains requires
  more than iterative mutation of programs; it demands structured hypothesis management,
  environment interaction, and principled reflection. We present OR-Agent, a configurable
  multi-agent research framework designed for automated exploration in rich experimental
  environments.
---
## Why it matters

Automating scientific discovery in complex, experiment-driven domains requires more than iterative mutation of programs; it demands structured hypothesis management, environment interaction, and principled reflection. We present OR-Agent, a configurable multi-agent research framework designed for automated exploration in rich experimental environments.

## Core method

OR-Agent combines evolutionary candidate search with a structured research tree. LLM agents propose hypotheses, critique results, record short- and long-term verbal gradients, and backtrack through the tree when a branch stops improving.

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
