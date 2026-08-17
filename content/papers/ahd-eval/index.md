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
date: 2024-09-07
venue: "PPSN"
paper_url: https://arxiv.org/pdf/2407.10873
code_url: https://github.com/zhichao-lu/llm-eps
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

Early LLM-based evolutionary program-search papers used different tasks, models, budgets, and baselines, so higher headline scores did not establish whether evolution itself helped. This study creates a common experimental frame and asks which search components survive controlled comparison.

## Core method

The benchmark reimplements four LLM-based EPS methods plus a simple baseline, evaluates four AHD problems, spans nine open and closed LLMs, and repeats each setting five times. Performance is aggregated relative to domain baselines, while separate studies examine evolutionary operators, prompt strategies, model choice, query budget, and initialization.

The main result is nuanced: evolutionary search generally matters, but method rankings vary with the LLM and problem, and simple components can explain part of the reported progress. All implementations and model interfaces are released in one repository.

## Contributions

- A cost-conscious, repeated benchmark across methods, tasks, and nine LLMs.
- Component analyses that distinguish the value of search from the value of the underlying model and prompt.
- A unified open implementation for subsequent EPS research.

## Strengths and limitations

The controlled matrix is much more credible than isolated method results and exposes sensitivity hidden by single-model evaluations. Its four tasks still cover a narrow part of algorithm design, and rapidly changing models can make exact rankings stale. Aggregation may also hide task-specific failure modes.

## What to improve

Extend the suite to full algorithms, coupled components, and modeling agents; record prompt tokens, wall time, and failed executions; and maintain versioned leaderboards rather than treating one model snapshot as permanent evidence.

## Connections

This is an evaluation paper rather than another search method. It directly stress-tests FunSearch-style and ReEvo-style EPS claims and provides the fairest basis in the atlas for comparing their search mechanisms.
