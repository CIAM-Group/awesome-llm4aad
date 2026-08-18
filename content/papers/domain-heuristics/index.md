---
id: domain-heuristics
short_title: 'Domain Heuristics'
title: LLM-Evolved Domain-Independent Heuristics for Symbolic AI Planning
authors:
- Elliot Gestrin
- Jendrik Seipp
year: 2026
date: 2026-05-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2605.29649
institutions:
- affiliation-not-disclosed
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Heuristic search is the dominant paradigm in symbolic AI planning, and the
  strongest heuristics are the result of decades of work by planning researchers.
  Recent work has shown that large language models (LLMs) can design heuristics for
  individual planning domains, but no LLM-generated heuristic has so far worked on
  arbitrary planning tasks.
---
## Why it matters

Heuristic search is the dominant paradigm in symbolic AI planning, and the strongest heuristics are the result of decades of work by planning researchers. Recent work has shown that large language models (LLMs) can design heuristics for individual planning domains, but no LLM-generated heuristic has so far worked on arbitrary planning tasks.

## Core method

The planning system uses an OpenEvolve-style MAP-Elites archive to evolve C++ heuristic code. It evaluates candidates on training domains and tests whether the resulting heuristic transfers to unseen symbolic-planning domains.

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
