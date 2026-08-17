---
id: behavesim
short_title: "BehaveSim"
title: "Rethinking Code Similarity for Automated Algorithm Design with LLMs"
authors:
  - "Rui Zhang"
  - "Zhichao Lu"
year: 2026
date: 2026-03-01
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2603.02787
institutions:
  - cityu-hk
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Algorithm Similarity Evaluation"
featured: false
summary: "BehaveSim measures generated algorithms by their problem-solving trajectories rather than by surface-level code similarity."
---

## Why it matters

BehaveSim measures generated algorithms by their problem-solving trajectories rather than by surface-level code similarity.

## Core method

The method records intermediate solutions produced during execution and aligns these trajectories with dynamic time warping. It can distinguish syntactically different algorithms with similar behavior and superficially similar code with different logic.

## Contributions

- Introduces the design described above for Algorithm Similarity Evaluation.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
