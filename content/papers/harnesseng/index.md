---
id: harnesseng
short_title: "Vesper"
title: "Effective Harness Engineering for Algorithm Discovery with Coding Agents"
authors:
  - "Yoichi Ishibashi"
  - "Taro Yano"
  - "Masafumi Oyamada"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.15221
institutions:
  - openai
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Algorithm Discovery"
featured: false
summary: "This work studies how evaluation harness design changes the search behavior and discovery quality of coding agents."
---

## Why it matters

This work studies how evaluation harness design changes the search behavior and discovery quality of coding agents.

## Core method

The analysis varies task exposure, evaluator feedback, test coverage, and execution interfaces to isolate the infrastructure choices that determine whether iterative coding agents make reliable progress.

## Contributions

- Introduces the design described above for Algorithm Discovery.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
