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
date: 2025-04-24
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2404.18400
code_url: https://github.com/deep-symbolic-mathematics/LLM-SR
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

Symbolic regression must search an enormous expression space from limited observations. Traditional expression trees provide compositional search but use little scientific knowledge. LLM-SR tests whether a language model can propose plausible equation structure while numerical optimization handles constants.

## Core method

The LLM writes equation skeletons as Python programs, making loops, helper functions, and reusable subexpressions available beyond a fixed algebraic grammar. An external optimizer fits free numerical parameters, and data error scores the resulting equation. An experience buffer retains high-performing programs and feedback for subsequent prompts, creating an iterative propose-fit-evaluate loop.

Experiments cover physics, biology, and materials datasets and compare against established symbolic-regression systems. The released repository includes code and data.

## Contributions

- Program-based equation representation informed by pretrained scientific knowledge.
- A clean split between structural generation and coefficient fitting.
- Multi-domain empirical comparison with symbolic-regression baselines.

## Strengths and limitations

Generated equations remain executable and inspectable, while external fitting avoids asking the LLM to guess precise constants. Pretrained familiarity may favor known equation families, and low data error alone does not guarantee identifiability or physical validity. LLM query cost also complicates comparison with mature SR solvers.

## What to improve

Add dimensional and conservation constraints, quantify rediscovery versus genuine extrapolation, and use uncertainty-aware evaluation across multiple data regimes.

## Connections

LLM-SR shares the executable proposal-and-evaluation loop of FunSearch, but its artifact is a scientific equation program and its inner optimizer fits continuous parameters.
