---
id: llm-nas
short_title: 'UH-NAS'
title: LLM-Guided Neural Architecture Search for Robust Co-Design of Physical Neural
  Networks
authors:
- Tyler King
- Timothée Leleu
year: 2026
date: 2026-06-01
venue: arXiv (Cornell University)
paper_url: https://arxiv.org/pdf/2606.10294
institutions:
- stanford
primary_dimension: design-object
dimensions:
- design-object
- search
- scope
problems:
- Automatic algorithm design
featured: false
summary: Deploying neural networks on unconventional hardware demands architectures
  that co-optimize task accuracy and platform-specific constraints such as energy
  cost, physical non-idealities, and numerical precision. Existing neural architecture
  search (NAS) methods are typically tailored to a single hardware family, limiting
  cross-platform comparison and generalization.
---
## Why it matters

Deploying neural networks on unconventional hardware demands architectures that co-optimize task accuracy and platform-specific constraints such as energy cost, physical non-idealities, and numerical precision. Existing neural architecture search (NAS) methods are typically tailored to a single hardware family, limiting cross-platform comparison and generalization.

## Core method

UH-NAS uses LLM-guided search to co-design neural architectures and physical implementation choices. Hardware-aware objectives and robustness tests constrain the generated candidates, so architecture quality is judged together with deployment behavior.

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
