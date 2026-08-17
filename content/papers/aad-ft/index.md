---
id: aad-ft
short_title: "AAD-FT"
title: "Fine-tuning Large Language Model for Automated Algorithm Design"
authors:
  - "Fei Liu"
  - "Rui Zhang"
  - "Lin, Xi"
  - "Zhichao Lu"
  - "Qingfu Zhang"
year: 2025
date: 2025-07-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2507.10614
institutions:
  - cityu-hk
  - xjtu
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Automatic Algorithm Design"
featured: false
summary: "This study fine-tunes language models for algorithm design using diversity-aware sampling and preference optimization."
---

## Why it matters

This study fine-tunes language models for algorithm design using diversity-aware sampling and preference optimization.

## Core method

Diversity-Aware Rank-based sampling balances candidate quality and coverage, then direct preference optimization aligns small and medium open models with evaluated algorithm quality across tasks.

## Contributions

- Introduces the design described above for Automatic Algorithm Design.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
