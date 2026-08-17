---
id: optibench
short_title: "OptiBench"
title: "OptiBench Meets ReSocratic: Measure and Improve LLMs for Optimization Modeling"
authors:
  - "Zhicheng Yang"
  - "Yiwei Wang"
  - "Yinya Huang"
  - "Zhijiang Guo"
  - "Wei Shi"
  - "Xiongwei Han"
  - "Liang Feng"
  - "Linqi Song"
  - "Xiaodan Liang"
  - "Jing Tang"
year: 2025
date: 2024-07-01
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2407.09887
code_url: https://github.com/yangzhch6/ReSocratic
institutions:
  - hkust-guangzhou
  - hkust
  - uc-merced
  - eth-zurich
  - cityu-hk
  - huawei-noahs-ark
  - sun-yat-sen
  - mbzuai
  - chongqing-university
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Optimization Modeling"
featured: false
summary: "OptiBench evaluates end-to-end optimization modeling, while ReSocratic synthesizes structured demonstrations to improve smaller models."
---

## Why it matters

Optimization modeling is not ordinary math QA: a model must translate language and tables into variables, constraints, objectives, executable solver code, and numeric outputs. Earlier datasets were small, linear-only, or stopped before solving. OptiBench evaluates the complete chain.

## Core method

OptiBench contains 605 manually verified problems covering linear and nonlinear programming, integer and mixed-integer variables, and both textual and tabular inputs. A model generates Python solver code, which is executed to recover variables and objective values. ReSocratic reverses data synthesis: it first creates a structured, solvable formulation step by step and then back-translates it into a natural-language question, yielding ReSocratic-29K for supervised fine-tuning.

## Contributions

- A 605-problem end-to-end benchmark with nonlinear and tabular cases.
- Solver-executed evaluation of both formulations and final numerical answers.
- ReSocratic-29K, a formulation-first synthetic training corpus.

## Strengths and limitations

Manual verification and execution make the benchmark substantially stronger than answer-only scoring. Synthetic questions may retain artifacts of the formulation-first generator, and a correct numeric answer can occasionally mask a wrong but coincidentally equivalent formulation.

## What to improve

Add equivalence-aware scoring, ambiguous real user requests, infeasible/unbounded cases, and hidden tests that vary the data while preserving the formulation.

## Connections

OptiBench evaluates the artifact produced by systems such as ORLM and LLMOPT. EquivaMap supplies a complementary structural test when two formulations differ syntactically.
