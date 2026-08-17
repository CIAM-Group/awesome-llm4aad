---
id: shinkaevolve
short_title: "ShinkaEvolve"
title: "ShinkaEvolve: Towards Open-Ended and Sample-Efficient Program Evolution"
authors:
  - "Robert Tjarko Lange"
  - "Yuki Imajuku"
  - "Edoardo Cetin"
year: 2025
date: 2025-09-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2509.19349
institutions:
  - sakana-ai
primary_dimension: search
dimensions:
  - search
  - scope
problems:
  - "Program Evolution"
  - "Scientific Algorithm Discovery"
featured: false
summary: "ShinkaEvolve is an open-source program-evolution system designed for open-ended and sample-efficient algorithm discovery."
---

## Why it matters

ShinkaEvolve is an open-source program-evolution system designed for open-ended and sample-efficient algorithm discovery.

## Core method

The system combines parent sampling, novelty rejection to suppress duplicate code, and bandit-based selection among LLM generators across scientific and engineering discovery tasks.

## Contributions

- Introduces the design described above for Program Evolution, Scientific Algorithm Discovery.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
