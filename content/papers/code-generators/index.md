---
id: code-generators
short_title: 'Code Generators'
title: Man-Made Heuristics Are Dead. Long Live Code Generators!
authors:
- Rohit Dwivedula
- Divyanshu Saxena
- Aditya Akella
- Swarat Chaudhuri
- Daehyeok Kim
year: 2025
date: 2025-10-01
venue: ACM Workshop on Hot Topics in Networks
paper_url: https://arxiv.org/pdf/2510.08803
institutions:
- ut-austin
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Policy design for various systems controllers has conventionally been a manual
  process, with domain experts carefully tailoring heuristics for the specific instance
  in which the policy will be deployed. In this paper, we re-imagine policy design
  via a novel automated search technique fueled by recent advances in generative models,
  specifically Large Language Model (LLM)-driven code generation.
---
## Why it matters

Policy design for various systems controllers has conventionally been a manual process, with domain experts carefully tailoring heuristics for the specific instance in which the policy will be deployed. In this paper, we re-imagine policy design via a novel automated search technique fueled by recent advances in generative models, specifically Large Language Model (LLM)-driven code generation.

## Core method

This work evolves executable policies for systems problems such as web caching and congestion control. The LLM proposes code, an evaluator measures the policy in the target simulator, and evolutionary selection preserves policies that improve the operational objective.

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
