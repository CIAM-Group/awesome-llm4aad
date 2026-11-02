---
id: decompgym
short_title: "DecompGym"
title: "DecompGym: Benchmarking LLM Agents on Designing Decomposition Algorithms"
authors:
  - "Sikai Cheng"
  - "Tinghan Ye"
  - "Arnaud Deza"
  - "Xiaonan Qi"
  - "Miao Li"
  - "Litong Liu"
  - "Changkun Guan"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.38175
code_url: https://github.com/SIKAI-C/DecompGym
institutions:
  - gatech
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - "Decomposition Solver Generation"
  - "Method-Conformance Evaluation"
featured: false
summary: "Audits generated Benders and column-generation solvers for prescribed information flow as well as execution, feasibility, and objective quality."
---

## Why it matters

An optimal-looking answer does not show that a generated solver actually implements its prescribed decomposition or justifies its optimality claim.

## Core method

Agents write standalone Python solvers for 81 synthetic instances from five Benders and four column-generation families. The task contract requires operative master–subproblem information flow and forbids a monolithic fallback. Evaluation applies a 60-second, single-thread execution limit, numerical feasibility checks, a source-reading LLM method judge, and an objective within 1% of a stored optimum.

Independent regeneration and reflection share their first attempt. Reflection receives the failed code and a separate diagnosis informed by execution and the method judge's rationale. Up to ten attempts are allowed, with failures, time, and tokens recorded.

## Contributions

The method-conformance gap isolates plausible answers produced by nonconforming algorithms: 93 of 108 method-audit rejections would pass output-only checks. The study also distinguishes repairable, localized defects from objective gaps with less informative feedback.

## Strengths and limitations

First-attempt success is 87.8% across twelve model–tool combinations. Reflection converts 66% of retries into successes versus 39% for regeneration, but this is not an equal-token comparison. Instances are moderate-sized, each setting has one trajectory, and accepted programs were not independently audited; a single judge may favor its own model.

## What to improve

Add expert-reviewed accepted cases, repeated seeds, larger instances, and solver-bound diagnostics that locate objective-gap failures.

## Connections

[FrontierOR](../frontieror/index.md) allows agents to choose full solution methods. DecompGym instead fixes a decomposition contract and checks its implementation, exposing an evaluation distinction that output quality alone cannot resolve.
