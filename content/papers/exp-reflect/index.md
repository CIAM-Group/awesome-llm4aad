---
id: exp-reflect
short_title: 'Exp-CoEvo'
title: Experience-Guided Reflective Co-Evolution of Prompts and Heuristics for Automatic
  Algorithm Design
authors:
- Yihong Liu
- Junyi Li
- W. Zhao
- Hongyu Lu
- Ji-Rong Wen
year: 2025
date: 2025-09-01
venue: arXiv.org
paper_url: https://arxiv.org/pdf/2509.24509
institutions:
- cityu-hk
- tencent
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Combinatorial optimization problems are traditionally tackled with handcrafted
  heuristic algorithms, which demand extensive domain expertise and significant implementation
  effort. Recent progress has highlighted the potential of automatic heuristics design
  powered by large language models (LLMs), enabling the automatic generation and refinement
  of heuristics.
---
## Why it matters

Combinatorial optimization problems are traditionally tackled with handcrafted heuristic algorithms, which demand extensive domain expertise and significant implementation effort. Recent progress has highlighted the potential of automatic heuristics design powered by large language models (LLMs), enabling the automatic generation and refinement of heuristics.

## Core method

Experience-Guided Reflective Co-Evolution updates both the heuristic population and the prompt population. Execution outcomes become experience records that steer later prompt and code revisions instead of treating the generator as fixed.

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
