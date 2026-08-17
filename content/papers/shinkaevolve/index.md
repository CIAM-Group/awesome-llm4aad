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
code_url: https://github.com/SakanaAI/ShinkaEvolve
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

Program evolution can spend most of its budget resampling similar parents, generating duplicate edits, or repeatedly choosing an unproductive model. ShinkaEvolve focuses on those system-level efficiency problems and provides an open implementation spanning very different discovery tasks.

## Core method

Parent sampling balances exploitation of elite programs with exploration of the archive. Code-novelty rejection resamples proposals too similar to existing candidates before expensive evaluation. A bandit controller allocates generation calls across an ensemble of LLMs based on their observed utility. Immutable-code protection constrains edits to the intended region.

The paper evaluates circle packing, agent design, competitive programming, and mixture-of-experts loss discovery, emphasizing samples required to reach a result as well as final performance.

## Contributions

- Three reusable controls for parent choice, duplicate rejection, and model allocation.
- A task-general open-source evolution harness.
- Evidence across mathematical, agentic, programming, and ML discovery tasks.

## Strengths and limitations

The system is practical, inspectable, and substantially easier to reproduce than closed discovery platforms. Source-code novelty is an imperfect proxy for behavioral novelty, and bandit rewards are non-stationary as the archive evolves. Cross-task results use different evaluators, limiting aggregate claims.

## What to improve

Replace or augment textual novelty with execution behavior, include evaluator wall time in model allocation, and standardize cost reporting against OpenEvolve and other open harnesses.

## Connections

ShinkaEvolve is a system-level successor to FunSearch-style program evolution and a direct open alternative to OpenEvolve. Harness Engineering studies complementary execution-layer choices around such systems.
