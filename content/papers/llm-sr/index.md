---
id: llm-sr
short_title: "LLM-SR"
title: "LLM-SR: Scientific Equation Discovery via Programming with Large Language Models"
authors:
  - "Parshin Shojaee"
  - "Kazem Meidani"
  - "Shashank Gupta"
  - "Amir Barati Farimani"
  - "Chandan K. Reddy"
year: 2025
date: 2024-04-01
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2404.18400
institutions:
  - virginia-tech
  - cmu
  - ai2
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - "Scientific Equation Discovery"
  - "Symbolic Regression"
featured: false
summary: "LLM-SR frames scientific equation discovery as executable program search informed by language-model scientific priors."
---

## Why it matters

LLM-SR frames scientific equation discovery as executable program search informed by language-model scientific priors.

## Core method

The LLM proposes equation skeletons as programs, an external optimizer fits numerical parameters, and an experience buffer supports iterative hypothesis refinement across scientific domains.

## Contributions

- Introduces the design described above for Scientific Equation Discovery, Symbolic Regression.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
