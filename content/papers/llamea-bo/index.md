---
id: llamea-bo
short_title: "LLaMEA-BO"
title: "LLaMEA-BO: A Large Language Model Evolutionary Algorithm for Automatically Generating Bayesian Optimization Algorithms"
authors:
  - "Wenhu Li"
  - "Niki van Stein"
  - "Thomas Bäck"
  - "Elena Raponi"
year: 2025
date: 2025-05-27
venue: arXiv
paper_url: https://arxiv.org/pdf/2505.21034
code_url: https://github.com/Ewendawi/LLaMEA-BO
institutions:
  - leiden-university
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - "Bayesian Optimization Algorithm Design"
featured: false
summary: "LLaMEA-BO evolves complete Bayesian optimization algorithms while preserving an initial design, surrogate, and acquisition function."
---

## Why it matters

Bayesian optimization algorithms combine several interacting design choices that are difficult to tune manually. This work treats the whole algorithm as the design object instead of optimizing one hyperparameter at a time.

## Core method

An evolution strategy asks an LLM to generate Python implementations containing the main BO components. Candidates are evaluated on BBOB/COCO tasks, and high-performing programs guide subsequent generations.

## Contributions

- Full-code generation for Bayesian optimization algorithms.
- Interface constraints that preserve essential BO components.
- Evaluation on standard black-box optimization benchmarks.

## Limitations and extensions

Generated BO code is still evaluated through a fixed interface and benchmark family. Future work should test transfer to noisy, constrained, and multi-fidelity objectives.
