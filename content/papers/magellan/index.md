---
id: magellan
short_title: 'Magellan'
title: 'Magellan: Autonomous Discovery of Novel Compiler Optimization Heuristics with
  AlphaEvolve'
authors:
- Hongzheng Chen
- Alexander Novikov
- N. Vu
- Hanna Alam
- Zhiru Zhang
- Aiden Grossman
- Mircea Trofin
- Amir Yazdanbakhsh
year: 2026
date: 2026-01-01
venue: arXiv.org
paper_url: https://arxiv.org/pdf/2601.21096
institutions:
- google-deepmind
primary_dimension: design-object
dimensions:
- design-object
- search
- scope
problems:
- Automatic algorithm design
featured: false
summary: Modern compilers rely on hand-crafted heuristics to guide optimization passes.
  These human-designed rules often struggle to adapt to the complexity of modern software
  and hardware and lead to high maintenance burden.
---
## Why it matters

Modern compilers rely on hand-crafted heuristics to guide optimization passes. These human-designed rules often struggle to adapt to the complexity of modern software and hardware and lead to high maintenance burden.

## Core method

Magellan couples an LLM coding agent with evolutionary search and autotuning to synthesize compiler decision logic. Generated heuristics are compiled into LLVM/XLA pipelines and evaluated on macro-benchmarks such as inlining and register allocation.

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
