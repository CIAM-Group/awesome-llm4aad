---
id: pattern-gen
short_title: 'PatternGen'
title: LLM-Evolved Pattern Generators for Optimal Classical Planning
authors:
- Windy Phung
- Dominik Drexler
- Arnaud Lequen
- Jendrik Seipp
year: 2026
date: 2026-06-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2606.02438
institutions:
- linkoping-university
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Learned heuristics have recently become a competitive alternative to traditional
  domain-independent heuristics for satisficing planning. Existing approaches, however,
  focus on improving search guidance rather than guaranteeing admissibility, which
  makes them unsuitable for optimal classical planning.
---
## Why it matters

Learned heuristics have recently become a competitive alternative to traditional domain-independent heuristics for satisficing planning. Existing approaches, however, focus on improving search guidance rather than guaranteeing admissibility, which makes them unsuitable for optimal classical planning.

## Core method

OpenEvolve searches for executable programs that generate pattern collections for classical planning. The design object is therefore a pattern generator whose output is passed to an optimal planner, not a hand-written pattern set.

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
