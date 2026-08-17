---
id: ahd-eval
short_title: "EPS Benchmark"
title: "Understanding the Importance of Evolutionary Search in Automated Heuristic Design with Large Language Models"
authors:
  - "Rui Zhang"
  - "Fei Liu"
  - "Xi Lin"
  - "Zhenkun Wang"
  - "Zhichao Lu"
  - "Qingfu Zhang"
year: 2024
date: 2024-07-01
venue: "PPSN"
paper_url: https://arxiv.org/pdf/2407.10873
institutions:
  - cityu-hk
  - sustech
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Automatic Heuristic Design Benchmarking"
featured: false
summary: "This benchmark isolates the contribution of evolutionary search in LLM-based automatic heuristic design across methods, models, and tasks."
---

## Why it matters

This benchmark isolates the contribution of evolutionary search in LLM-based automatic heuristic design across methods, models, and tasks.

## Core method

Four evolutionary program-search methods are compared on four AHD problems with nine LLMs and repeated runs, providing component-level evidence about search, prompting, and model effects.

## Contributions

- Introduces the design described above for Automatic Heuristic Design Benchmarking.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
