---
id: a2dept
<<<<<<< HEAD
short_title: A2DEPT
title: 'A2DEPT: Large Language Model–Driven Automated Algorithm Design via Evolutionary Program Trees'
authors:
  - Bin Chen
  - Shouliang Zhu
  - Beidan Liu
  - Yong Zhao
  - Tianle Pu
  - Huichun Li
  - Zhengqiu Zhu
year: 2026
date: 2026-04-27
venue: arXiv
=======
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
date: 2026-04-27
venue: "arXiv"
>>>>>>> 0cf906e12b127af4c2dddface76a1cea1ef2f6d9
paper_url: https://arxiv.org/pdf/2604.24043
institutions:
  - uestc
  - nudt
<<<<<<< HEAD
=======
  - amms
>>>>>>> 0cf906e12b127af4c2dddface76a1cea1ef2f6d9
primary_dimension: design-object
dimensions:
  - design-object
  - search
<<<<<<< HEAD
  - feedback
problems:
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
  - Job Shop Scheduling Problem
  - Knapsack Problem
  - Online Bin Packing
  - Orienteering Problem
featured: false
summary: A2DEPT treats LLMs as system-level algorithm architects, evolving complete solver programs over a tree-structured program space with a feedback-driven maintenance loop for executability.
=======
problems:
  - "Automatic Algorithm Design"
featured: false
summary: "A2DEPT represents candidate algorithms as evolutionary program trees for controllable hierarchical reuse and variation."
>>>>>>> 0cf906e12b127af4c2dddface76a1cea1ef2f6d9
---

## Why it matters

<<<<<<< HEAD
Most LLM-based Automated Heuristic Design (AHD) fixes an algorithmic template and only tunes a small set of heuristic components, which hides a costly design decision—the solver backbone—and caps performance even when the heuristic component is well optimized. A2DEPT argues that this template-bound bottleneck motivates a transition from component tuning to open-ended Automated Algorithm Design (AAD), where the search target expands from a scoring heuristic to a complete executable solver.

## Core method

A2DEPT casts AAD as an evolutionary search over a discrete program space. Rather than a population, it maintains a global search tree of executable programs, where each node stores the program, its score, parent/operator history, and local operator weights. The loop has two phases: an LLM-based initialization seeds diverse root programs, then an iterative loop selects parent nodes, applies adaptively scheduled hierarchical operators, repairs broken dependencies, evaluates feasible programs, and writes scores back into the tree.

Three mechanisms make long-horizon open-ended evolution practical:

- **Hybrid selection** combines SA-style parent–child acceptance with Boltzmann supplementary sampling to preserve diverse trajectories under a fixed budget.
- **Hierarchical operators** (micro-tuning, macro-mutation, semantic crossover) with adaptive scheduling enable localized edits and better credit assignment.
- **Program-maintenance loop** repairs missing dependencies via a dependency graph and prunes unreachable code to enforce executability.

## Contributions

- Problem framing: AAD as program-space search over complete executable solvers, beyond template-bound AHD.
- The A2DEPT framework with tree-structured evolutionary search, hybrid selection, and hierarchical operators.
- Concrete mechanisms for reliable long-horizon evolution (repair loop, hybrid selection, hierarchical operators).
- Empirical validation on a diverse suite of NP-hard COP benchmarks (standard and high-constraint), reducing the mean normalized optimality gap by 9.8% relative to the strongest competing AHD baseline.

## Strengths and limitations

A2DEPT enables system-level redesign rather than component-level tuning and enforces executability through feedback-driven repair, preserving search diversity via the tree and hybrid acceptance. Its limitations are that the repair loop consumes part of the LLM budget, and gains are problem-dependent—the paper notes that on Flexible Job Shop Scheduling an expert-designed Guided Local Search still outperforms all AAD methods, suggesting the advantage is contingent on the absence of strong domain-specific structures.

## What to improve

Future work should equalize token/query budgets against baselines, scale the population and add domain-specific operators, and broaden the benchmark coverage beyond the studied COP families.

## Connections

A2DEPT builds on FunSearch, EoH, ReEvo, and MCTS-AHD, which it characterizes as template-bound component synthesis, and is developed concurrently with ATLAS on the move toward full-algorithm synthesis.
=======
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
>>>>>>> 0cf906e12b127af4c2dddface76a1cea1ef2f6d9
