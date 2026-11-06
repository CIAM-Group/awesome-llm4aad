---
id: automodsat
short_title: AutoModSAT
title: Discovering heuristics in a complex SAT solver with large language models
authors:
  - Yiwen Sun
  - Furong Ye
  - Zhihan Chen
  - Ke Wei
  - Shaowei Cai
year: 2026
date: 2026-06-01
venue: Nature Communications
paper_url: https://www.nature.com/articles/s41467-026-74949-2.pdf
code_url: https://doi.org/10.5281/zenodo.17856395
institutions:
  - fudan
  - cas-software
  - seedmath
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Boolean Satisfiability
featured: false
summary: AutoModSAT combines solver modularization, diverse prompts and evolutionary code search to specialize internal SAT heuristics for a target instance family.
---

## Why it matters

A mature SAT solver is too large and tightly coupled for unrestricted source-code rewriting. AutoModSAT makes selected solver decisions accessible to an LLM without asking it to reconstruct the solver or merely tune existing numerical parameters.

## Core method

The starting point is ModSAT, a manually modularized MiniSat variant with rephasing. Seven editable functions cover restart conditions, clause reduction, phase changes and activity updates. Prompts expose each function and its relevant shared state rather than the complete solver.

Before the main search, individual-function experiments on a reduced training set identify promising edit locations. A separate prompt-optimization procedure varies roles, goals and instructions, then measures the diversity of generated code through embeddings and clustering. This prepares diverse prompts without evaluating every prompt on expensive SAT runs.

The evolutionary loop edits one selected function at a time. Generated code is checked for redundant changes, compiled and repaired when necessary. Candidates are scored by penalized runtime, with timeouts penalized more heavily than successful solves. Improving variants replace the incumbent. Returned satisfying assignments are checked against the formula, while unsatisfiability claims are checked with DRAT proofs.

## Contributions

- A practical interface for generating new internal solver heuristics rather than whole solvers.
- A combination of edit-location screening, code-diversity-based prompt preparation and measured runtime feedback.
- Evaluation on eleven instance families, including competition problems, Picat-generated instances and an industrial electronic-design workload.

## Strengths and limitations

The final paper reports advantages over tuned Kissat and CaDiCaL on eight of eleven datasets, but not uniform dominance. The approach benefits from specialization to an instance family, and cross-family transfer is less reliable. Its initial modularization remains human work. Correctness checks protect the evaluated solver outputs, but they do not make arbitrary generated edits safe in every execution setting. The paper also identifies generated static state as a concern when multiple solver instances share a process.

## What to improve

Automate the extraction of safe editing interfaces, test transfer before committing to a family-specific solver, and evaluate generated state management under parallel and repeated solver execution.

## Connections

AESAT addresses the same internal SAT-heuristic design problem with local refinement, multi-parent recombination and ancestry-based prompt updates. AutoModSAT instead emphasizes modular interfaces, edit-location screening and diversity-oriented prompt preparation. CheckMate provides a related perspective on correctness feedback. It checks generated solutions against a declarative specification, while AutoModSAT uses SAT assignments and unsatisfiability certificates.
