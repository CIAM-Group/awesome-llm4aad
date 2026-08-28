---
id: geneplan
short_title: 'GenePlan'
title: 'GenePlan: Evolving Better Generalized PDDL Plans Using Large Language Models'
authors:
- Andrew Murray
- Danial Dervovic
- Alberto Pozanco
- Michael Cashmore
year: 2026
date: 2026-01-01
venue: Proceedings of the International Conference on Automated Planning and Scheduling
paper_url: https://ojs.aaai.org/index.php/ICAPS/article/download/42885/50445
institutions:
- jpmorgan-ai-research
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: We present GenePlan (GENeralized Evolutionary Planner), a novel framework
  that leverages large language model (LLM) assisted evolutionary algorithms to generate
  domain-dependent generalized planners for classical planning tasks described in
  PDDL. By casting generalized planning as an optimization problem, GenePlan iteratively
  evolves interpretable Python planners that minimize plan length across diverse problem
  instances.
---
## Why it matters

We present GenePlan (GENeralized Evolutionary Planner), a novel framework that leverages large language model (LLM) assisted evolutionary algorithms to generate domain-dependent generalized planners for classical planning tasks described in PDDL. By casting generalized planning as an optimization problem, GenePlan iteratively evolves interpretable Python planners that minimize plan length across diverse problem instances.

## Core method

GenePlan evolves complete generalized PDDL planners as executable programs. Candidate planners are tested across planning instances and retained when they improve generalized planning behavior, extending program evolution beyond a single heuristic function.

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
