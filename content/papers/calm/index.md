---
id: calm
short_title: "CALM"
title: "CALM: Co-evolution of Algorithms and Language Model for Automatic Heuristic Design"
authors:
  - "Ziyao Huang"
  - "Weiwei Wu"
  - "Kui Wu"
  - "Jianping Wang"
  - "Wei-Bin Lee"
year: 2025
date: 2025-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2505.12285
institutions:
  - cityu-hk
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "CALM co-evolves candidate algorithms and the language model that proposes them, combining verbal and numerical guidance."
---

## Why it matters

CALM co-evolves candidate algorithms and the language model that proposes them, combining verbal and numerical guidance.

## Core method

The algorithm search updates prompts from evaluated candidates while reinforcement learning fine-tunes a local LLM from heuristic quality, allowing the generator distribution to adapt to the task.

## Contributions

- Introduces the design described above for Combinatorial Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
