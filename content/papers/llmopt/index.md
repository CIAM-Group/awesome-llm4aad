---
id: llmopt
short_title: "LLMOPT"
title: "LLMOPT: Learning to Define and Solve General Optimization Problems from Scratch"
authors:
  - "Caigao Jiang"
  - "Xiang Shu"
  - "Hong Qian"
  - "Xingyu Lu"
  - "Jun Zhou"
  - "Aimin Zhou"
  - "Yang Yu"
year: 2025
date: 2025-04-24
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2410.13213
code_url: https://github.com/caigaojiang/LLMOPT
institutions:
  - ecnu
  - ant-group
  - nanjing-university
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - "General Optimization Modeling"
featured: false
summary: "LLMOPT learns a shared representation for defining optimization problems and producing solver code from natural-language descriptions."
---

## Why it matters

An end user describes goals and constraints in ordinary language, while an OR expert must decide the variables, objective, formulation, solver, and interpretation. LLMOPT targets this whole pipeline rather than evaluating only one intermediate mathematical string.

## Core method

The framework normalizes problems into a five-element representation that separates optimization type, variables, objective, constraints, and data. Multi-instruction tuning trains the model across problem definition, formulation, solver-code generation, and answer production. Generated code calls optimization software, and consistency checks reduce unsupported numerical answers.

Evaluation spans multiple families of natural-language optimization problems and reports both definition/formulation quality and executable solution accuracy, including generalization beyond training templates.

## Contributions

- A shared five-element representation across optimization families.
- Joint instruction training for understanding, modeling, code generation, and solving.
- End-to-end evaluation grounded by executed solver code.

## Strengths and limitations

The intermediate schema makes errors easier to inspect and execution prevents purely verbal answers from passing. A fixed five-element representation may be strained by stochastic, dynamic, or multi-level problems, and executable code can still solve the wrong formulation.

## What to improve

Pair the pipeline with formulation-equivalence checking, add clarification dialogue for ambiguous requests, and evaluate robustness to missing, contradictory, and tabular inputs.

## Connections

LLMOPT and ORLM both automate optimization modeling. LLMOPT emphasizes a unified end-to-end representation; ORLM emphasizes scalable data construction and a customizable open model.
