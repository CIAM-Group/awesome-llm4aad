---
id: codeevolve
short_title: "CodeEvolve"
title: "CodeEvolve: An Open-Source Evolutionary Coding Agent for Algorithmic Discovery and Optimization"
authors:
  - "Henrique Assumpcao"
  - "Diego Ferreira"
  - "Leandro Campos"
  - "Fabricio Murai"
year: 2025
date: 2025-10-15
venue: arXiv
paper_url: https://arxiv.org/pdf/2510.14150
code_url: https://github.com/inter-co/science-codeevolve
institutions:
  - interco
  - ufmg
  - wpi
primary_dimension: search
dimensions:
  - search
  - design-object
  - scope
problems:
  - "Algorithmic Discovery"
  - "Optimization"
featured: false
summary: "CodeEvolve combines island evolution, inspiration crossover, meta-prompting, and CVT-MAP-Elites for open algorithm discovery."
---

## Why it matters

Open implementations are needed to compare coding-agent discovery systems under reproducible budgets. CodeEvolve packages several search operators and an LLM ensemble into an openly described evolutionary framework.

## Core method

Candidate programs live in a CVT-MAP-Elites archive. Island evolution, inspiration-based crossover, depth-aware refinement, and weighted model selection propose new programs, which are scored on algorithmic-discovery tasks.

## Contributions

- An open evolutionary coding-agent framework.
- A combination of archive-based diversity and LLM-specific variation operators.
- Comparisons with AlphaEvolve, OpenEvolve, ShinkaEvolve, and EoH-style tasks.

## Limitations and extensions

Results depend on model access and evaluation budgets. A stronger analysis of operator-level credit assignment would clarify which search components transfer across domains.
