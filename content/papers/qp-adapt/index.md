---
id: qp-adapt
short_title: 'VVenC-QP'
title: LLM-Driven Heuristic Frame-Level Quantization Parameter Adaptation for VVenC
authors:
- Liqiang He
- Yingwen Zhang
- Riyu Lu
- M Wang
- S Q Wang
year: 2026
date: 2026-06-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2606.20847
institutions:
- cityu-hk
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Optimal frame-level quantization parameter (QP) allocation remains a persistent
  challenge in modern video encoders. The fixed-QP scheme widely adopted in practical
  systems is inherently content-agnostic, while classical Lagrangian rate-distortion
  optimization (RDO) methods often suffer from inaccurate multiplier settings.
---
## Why it matters

Optimal frame-level quantization parameter (QP) allocation remains a persistent challenge in modern video encoders. The fixed-QP scheme widely adopted in practical systems is inherently content-agnostic, while classical Lagrangian rate-distortion optimization (RDO) methods often suffer from inaccurate multiplier settings.

## Core method

The VVenC study inserts an LLM-driven closed loop into frame-level quantization-parameter decisions. The LLM proposes executable rate-distortion heuristics, and the video encoder supplies direct compression-quality feedback for revision.

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
