---
id: lace
short_title: LACE
title: Large language models discover complementary heuristics for combinatorial optimization
authors:
  - Huatian Gong
  - Shuaian Wang
  - Dongping Song
  - Jiuh-Biing Sheu
  - Ran Yan
year: 2026
date: 2026-08-01
venue: Nature Machine Intelligence
paper_url: https://www.nature.com/articles/s42256-026-01307-8.pdf
code_url: https://github.com/PJ-NTU/LACE
institutions:
  - ntu
  - polyu
  - university-liverpool
  - national-taiwan
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - Combinatorial Optimization
  - Port Scheduling
  - Tugboat Routing and Scheduling
featured: false
summary: LACE constructs a problem interface and helper library, then evolves a runtime-constrained portfolio whose heuristics cover different instances.
---

## Why it matters

A generated solver can fail because it misunderstands a constraint or because one search strategy fits only part of the instance distribution. LACE addresses these separately through a tested problem interface and a complementary set of executable heuristics.

## Core method

The first stage uses LLM calls to construct input and output schemas and a Python tool library containing feasibility checks, objective evaluation and problem-specific helpers. Smoke tests check these components before the LLM generates an initial portfolio of standalone solve functions. Each function can combine construction and local search while calling the shared tools.

The second stage generates candidates through local refinement, reflective redesign, complementary crossover, comparative synthesis and diversity injection. These operators use instance-level ranks to choose strong, weak or complementary parents. Separate repair calls handle execution failures and runtime violations. Candidates that remain invalid or too slow after bounded repair attempts are discarded.

Selection optimizes the portfolio rather than individual average scores. The current and new heuristics form a pool of twice the target size. A mixed-integer program selects a subset minimizing the mean best rank attained on each development instance. This prevents large objective scales from dominating the coverage objective. The default setup uses 10 retained heuristics, 128 development instances per problem and six evolution iterations.

At test time, portfolio members run independently and the best feasible result is retained using their computed objectives. No LLM is called during solving. Different runtime budgets require separate discovery runs, rather than one portfolio automatically satisfying every budget.

## Contributions

- Combines generated problem interfaces and reusable tools with complementary heuristic search.
- Uses rank-based portfolio selection and explicit execution-time repair.
- Evaluates 36 CO-Bench problems and four logistics variants, with tool, portfolio and backbone analyses.

## Strengths and limitations

The study separates executable reliability from coverage of heterogeneous instances. It reports an average CO-Bench score of 0.945, compared with 0.870 for its strongest LLM-based baseline. These normalized scores are not proofs of optimality. For the four new problems, the reference is the best objective found by the compared methods.

The deployment result is best-of-portfolio, with one CPU core per heuristic. Equal per-heuristic wall-clock limits do not imply equal aggregate CPU cost to a single solver. Several baseline results are reused from CO-Bench, while other methods are rerun. Five-seed variability is reported for the four new problems, but the other main experiments use one run per configuration. Smoke testing also does not prove that generated contracts capture every intended constraint.

## What to improve

Compare portfolios under matched total compute, learn a low-cost selector, and validate generated checkers independently. Report repeated discovery runs across all problem families and distinguish framework transfer to new problems from reuse of an already evolved portfolio.

## Connections

[EoH-S](../eoh-s/index.md) also makes complementary instance coverage the design objective. LACE combines this portfolio perspective with generated problem interfaces and tools, then uses rank-based mixed-integer selection. The connection concerns a concrete design choice, not an asserted implementation lineage.

[HeurAgenix](../heuragenix/index.md) selects state-to-operation heuristics within a solution trajectory. LACE instead executes complete solver members independently. Both use multiple heuristics, but organize their cooperation at different levels.
