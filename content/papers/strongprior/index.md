---
id: strongprior
short_title: "StrongPrior"
title: "From Heuristic Selection to Automated Algorithm Design: LLMs Benefit from Strong Priors"
authors:
  - "Qi Huang"
  - "Furong Ye"
  - "Ananta Shahane"
  - "Thomas Bäck"
  - "Niki van Stein"
year: 2026
date: 2026-03-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2603.02792
institutions:
  - leiden-university
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Pseudo-Boolean Optimization"
  - "Black-Box Optimization"
featured: false
summary: "This study shows that strong algorithmic priors can make LLM-driven algorithm design more efficient and robust."
---

## Why it matters

This study shows that strong algorithmic priors can make LLM-driven algorithm design more efficient and robust.

## Core method

Token-level attribution motivates supplying high-quality benchmark algorithms as code priors. The resulting search is evaluated on pseudo-Boolean and continuous black-box optimization suites.

## Contributions

- Introduces the design described above for Pseudo-Boolean Optimization, Black-Box Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
