---
id: successor-heuristics
short_title: 'Successor-Gen'
title: Successor-Generator Planning with LLM-generated Heuristics
authors:
- Alexander Tuisov
- Yonatan Vernik
- Alexander Shleyfman
year: 2026
date: 2026-06-08
venue: Proceedings of the International Conference on Automated Planning and Scheduling
paper_url: https://ojs.aaai.org/index.php/ICAPS/article/download/42843/50403
institutions:
- affiliation-not-disclosed
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Heuristics are a central component of deterministic planning, particularly
  in domain-independent settings where general applicability is prioritized over task-specific
  tuning. This work revisits that paradigm in light of recent advances in large language
  models (LLMs), which enable the automatic synthesis of heuristics directly from
  problem definitions -- bypassing the need for handcrafted domain knowledge.
---
## Why it matters

Heuristics are a central component of deterministic planning, particularly in domain-independent settings where general applicability is prioritized over task-specific tuning. This work revisits that paradigm in light of recent advances in large language models (LLMs), which enable the automatic synthesis of heuristics directly from problem definitions -- bypassing the need for handcrafted domain knowledge.

## Core method

The method generates a compilable successor-generator heuristic from a planning problem description and integrates it into a conventional planner. The LLM supplies the heuristic code, while planner execution and solution quality provide validation.

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
