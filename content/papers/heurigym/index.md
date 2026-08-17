---
id: heurigym
short_title: "HeuriGym"
title: "HeuriGym: An Agentic Benchmark for LLM-Crafted Heuristics in Combinatorial Optimization"
authors:
  - "Hongzheng Chen"
  - "Yingheng Wang"
  - "Yaohui Cai"
  - "Hins Hu"
  - "Jiajie Li"
  - "Shirley Huang"
  - "Chenhui Deng"
  - "Rongjian Liang"
  - "Shufeng Kong"
  - "Haoxing Ren"
  - "S. Samaranayake"
  - "Carla P. Gomes"
  - "Zhiru Zhang"
year: 2026
date: 2025-06-01
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2506.07972
institutions:
  - affiliation-pending
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Combinatorial Optimization Benchmarking"
featured: false
summary: "HeuriGym evaluates whether LLM agents can iteratively produce executable, high-quality heuristics across diverse optimization tasks."
---

## Why it matters

HeuriGym evaluates whether LLM agents can iteratively produce executable, high-quality heuristics across diverse optimization tasks.

## Core method

The benchmark provides a common execution-and-feedback loop over nine problems and evaluates both validity and solution quality with the Quality-Yield Index.

## Contributions

- Introduces the design described above for Combinatorial Optimization Benchmarking.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
