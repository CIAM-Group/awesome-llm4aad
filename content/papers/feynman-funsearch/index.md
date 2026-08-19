---
id: feynman-funsearch
short_title: 'Feynman-FS'
title: Explainable AI-assisted optimization for Feynman integral reduction
authors:
- Zhe Song
- Tong-Zhi Yang
- Qing-Hong Cao
- M. X. Luo
- Hua Xing Zhu
year: 2026
date: 2026-06-22
venue: Journal of High Energy Physics
paper_url: https://link.springer.com/content/pdf/10.1007/JHEP06(2026)225.pdf
institutions:
- pku
primary_dimension: design-object
dimensions:
- design-object
- search
- scope
problems:
- Automatic algorithm design
featured: false
summary: A bstract We present a novel approach to optimizing the reduction of Feynman
  integrals using integration-by-parts identities. By developing a priority function
  through the FunSearch algorithm, which combines large language models and genetic
  algorithms, we achieve significant improvements in memory usage and computational
  efficiency compared to traditional methods.
---
## Why it matters

A bstract We present a novel approach to optimizing the reduction of Feynman integrals using integration-by-parts identities. By developing a priority function through the FunSearch algorithm, which combines large language models and genetic algorithms, we achieve significant improvements in memory usage and computational efficiency compared to traditional methods.

## Core method

FunSearch evolves a priority function for Feynman-integral reduction. The generated function is compiled into the reduction pipeline and judged by large-scale symbolic-reduction performance, making the evaluator domain-specific but the program search reusable.

## Contributions

- A concrete LLM-based design loop for the target artifact.
- An evaluator or verifier that supplies feedback to subsequent proposals.
- Experiments that expose the method's transfer or scaling behavior.

## Strengths and limitations

The method makes the design artifact executable and lets task feedback guide later proposals. Its conclusions remain tied to the evaluator, search budget, and task scaffold; transfer outside the reported settings is therefore an open question.

## What to improve

Useful follow-ups include stronger behavioral deduplication, cross-task evaluation, and explicit accounting of model and verifier cost.

## Connections

The relation atlas records only method-level links supported by the paper's method or experiments.
