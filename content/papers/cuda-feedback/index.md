---
id: cuda-feedback
short_title: 'CUDA Feedback'
title: Towards Feedback-to-Plan Decisions for Self-Evolving LLM Agents in CUDA Kernel
  Generation
authors:
- Yee Kien Chong
- Jiaming Wu
- Youhui Zhang
- Peng Qu
year: 2026
date: 2026-05-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2605.26720
institutions:
- tsinghua
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Large language models (LLMs) have shown strong empirical gains as self-evolving
  agents for CUDA kernel generation, driven by feedback-conditioned planning across
  generations. However, how planning decisions attribute and combine heterogeneous
  feedback signals remains opaque.
---
## Why it matters

Large language models (LLMs) have shown strong empirical gains as self-evolving agents for CUDA kernel generation, driven by feedback-conditioned planning across generations. However, how planning decisions attribute and combine heterogeneous feedback signals remains opaque.

## Core method

The CUDA study analyzes how feedback should become planning decisions in a self-evolving kernel-generation agent. Profiling results are transformed into explicit plan updates before new kernels are generated and tested, separating diagnosis from code editing.

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
