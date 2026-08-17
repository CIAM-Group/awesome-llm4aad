---
id: a2dept
short_title: "A2DEPT"
title: "A2DEPT: Large Language Model-Driven Automated Algorithm Design via Evolutionary Program Trees"
authors:
  - "Bin Chen"
  - "Shouliang Zhu"
  - "Beidan Liu"
  - "Yong Zhao"
  - "Tianle Pu"
  - "Huichun Li"
  - "Zhengqiu Zhu"
year: 2026
date: 2026-04-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2604.24043
institutions:
  - uestc
  - nudt
  - amms
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Automatic Algorithm Design"
featured: false
summary: "A2DEPT represents candidate algorithms as evolutionary program trees for controllable hierarchical reuse and variation."
---

## Why it matters

Most LLM-AHD systems evolve one function inside a fixed solver template. That protects executability, but it prevents the search from changing control flow, adding modules, or redesigning the solver as a system. A2DEPT targets this gap between component tuning and full algorithm synthesis.

## Core method

A2DEPT represents a solver as an evolutionary program tree whose nodes encode functional modules and whose hierarchy captures their composition. Hybrid selection balances objective quality with structural exploration. Hierarchical operators can expand, prune, replace, and refine subtrees, while the LLM implements or repairs the affected modules. This makes structural edits more localized than rewriting an entire flat program.

The experiments span combinatorial optimization, differential-equation solvers, and control problems. The paper reports comparisons with EoH and MCTS-AHD, executability analyses, scale studies, and ablations of the tree representation and operators.

## Contributions

- Moves the design object from a single heuristic function to a hierarchical, complete program.
- Introduces tree-aware selection and variation for reusable system-level modules.
- Demonstrates the representation across optimization, scientific computing, and control tasks.

## Strengths and limitations

The tree gives the search an interpretable structural unit and enables meaningful subtree reuse. Its flexibility also enlarges the invalid-program space and introduces representation choices that may themselves encode strong priors. Comparisons are difficult unless evaluator calls, repair calls, and prompt tokens are all budget-matched.

## What to improve

Measure module reuse across tasks, expose the cost of repair separately from productive evaluations, and compare the learned trees with equally expressive typed program-synthesis or grammar-guided baselines.

## Connections

A2DEPT broadens the design object beyond EoH-style functions. It shares MCTS-AHD's interest in structured exploration, but organizes the *program* as a tree rather than only organizing the *search history* as one.
