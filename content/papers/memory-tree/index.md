---
id: memory-tree
short_title: 'MEMOIR'
title: Memory-Guided Tree Search with Cross-Branch Knowledge Transfer for LLM Solver
  Synthesis
authors:
- Fatemeh Haji
- Javier Delarosa Quiros
- Peyman Najafirad
year: 2026
date: 2026-05-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2605.17539
institutions:
- university-texas-san-antonio
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: 'Combinatorial optimization (CO) underlies decision-making from logistics
  to chip design, where infeasible solutions are operationally unusable and small
  quality gains translate into substantial economic value. Recent work uses large
  language models (LLMs) to automate solver synthesis: generating executable solver
  programs from natural-language specifications.'
---
## Why it matters

Combinatorial optimization (CO) underlies decision-making from logistics to chip design, where infeasible solutions are operationally unusable and small quality gains translate into substantial economic value. Recent work uses large language models (LLMs) to automate solver synthesis: generating executable solver programs from natural-language specifications.

## Core method

Memory-Guided Tree Search augments solver synthesis with branch-local and global memories. Search branches can retrieve useful discoveries from one another, reducing repeated failures while retaining tree structure for deliberate exploration.

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
