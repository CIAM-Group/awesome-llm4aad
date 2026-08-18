---
id: autopbo-llm-powered-optimization-for-local-search-pbo-solvers
short_title: 'AutoPBO'
title: 'AutoPBO: LLM-powered Optimization for Local Search PBO Solvers'
authors:
  - 'Jinyuan Li'
  - 'Yi Chu'
  - 'Yiwen Sun'
  - 'Mengchuan Zou'
  - 'Shaowei Cai'
year: 2025
date: 2025-09-01
venue: 'arXiv.org'
paper_url: https://arxiv.org/pdf/2509.04007
institutions:
  - chinese-academy-sciences
  - fudan
  - university-chinese-academy-sciences
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Pseudo-Boolean Optimization (PBO) provides a powerful framework for modeling combinatorial problems through pseudo-Boolean (PB) constraints. Local search solvers have shown excellent performance in PBO solving, and their efficiency is highly dependent on their internal heuristics to guide the search.'
---

## Why it matters

Pseudo-Boolean Optimization (PBO) provides a powerful framework for modeling combinatorial problems through pseudo-Boolean (PB) constraints. Local search solvers have shown excellent performance in PBO solving, and their efficiency is highly dependent on their internal heuristics to guide the search.

## Core method

The paper's abstract describes the following design loop:

> Pseudo-Boolean Optimization (PBO) provides a powerful framework for modeling combinatorial problems through pseudo-Boolean (PB) constraints. Local search solvers have shown excellent performance in PBO solving, and their efficiency is highly dependent on their internal heuristics to guide the search. Still, their design often requires significant expert effort and manual tuning in practice. While Large Language Models (LLMs) have demonstrated potential in automating algorithm design, their application to optimizing PBO solvers remains unexplored. In this work, we introduce AutoPBO, a novel LLM-powered framework to automatically enhance PBO local search solvers. We conduct experiments on a broad range of four public benchmarks, including one real-world benchmark, a benchmark from PB competition, an integer linear programming optimization benchmark, and a crafted combinatorial benchmark, to evaluate the performance improvement achieved by AutoPBO and compare it with six state-of-the-art competitors, including two local search PBO solvers NuPBO and OraSLS, two complete PB solvers PBO-IHS and RoundingSat, and two mixed integer programming (MIP) solvers Gurobi and SCIP. AutoPBO demonstrates significant improvements over previous local search approaches, while maintaining competitive performance compared to state-of-the-art competitors. The results suggest that AutoPBO offers a promising approach to automating local search solver design.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: olutionary search, initiating heuristic discov- the threshold, ▷ ∈ {=, >, ≥, <, ≤} is a relational operator, ery through iterative code generation. Then, EoH (Liu et al. and each lj is a literal (either a Boolean variable xi or its 2024) extends this paradigm through dual-representation negation ¬xi ). evolution, and ReEvo (Ye et al. 2024) introduces a structu

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
