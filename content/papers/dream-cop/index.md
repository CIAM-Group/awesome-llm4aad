---
id: dream-cop
short_title: "Dream-COP"
title: "Dream-COP: Guiding Algorithm Discovery for Combinatorial Optimization Problems in an Experience World"
authors:
  - "Kuan Xu"
  - "Jianming Wang"
  - "Ni Zhang"
  - "Yaoxin Wu"
  - "Yong Wang"
  - "Zhiguang Cao"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.36618
institutions:
  - smu
  - university-science-technology-china
  - eindhoven-university-technology
  - central-south-university
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - "Combinatorial optimization"
  - "Heuristic design"
  - "Search-policy discovery"
featured: false
summary: "Dream-COP learns executable search-allocation policies by replaying historical revision trees before deploying them to guide new heuristic and solver discovery."
---

## Why it matters

A good program generator still wastes evaluations if its controller repeatedly extends unproductive branches. This paper makes the controller itself a design object and uses completed searches as inexpensive evidence for improving it.

## Core method

A discovery agent generates either heuristic components or complete solvers, while an independent evaluator records feasibility and development-set quality. Each round forms a tree with alternative revision chains. A second LLM agent writes a Python policy that chooses a new root branch, extends a current leaf, or stops. Candidate policies are replayed on earlier trees: they observe only outcomes revealed by their own actions, and replay performs neither fresh LLM generation nor solver evaluation. Selection maximizes the mean of the top five feasible scores minus a request-cost penalty. Four sequential policy-proposal calls use replay feedback; the winning policy controls the next real round, whose results expand the history. Model weights remain fixed.

## Contributions

- Separates solver discovery from executable allocation-policy discovery, with matched replay and deployment interfaces.
- Tests component design on TSP, knapsack, online packing, and flow-shop scheduling, plus complete two-dimensional packing solvers and cross-problem policy transfer.

## Strengths and limitations

Three-run comparisons support better quality with fewer discovery requests; policy-learning tokens are accounted for separately. Replay can reveal only recorded continuations, so it is not a predictive world model for unseen edits. The top-five reward and cost penalty are design choices, and some reward ablations use a single run.

## What to improve

Test replay-policy transfer across more heterogeneous solvers, quantify sensitivity to incomplete historical trees, and compare controllers under equal end-to-end monetary and execution budgets.

## Connections

Both allocate heuristic-generation budget across revision branches. [MCTS-AHD](../mcts-ahd/index.md) uses a prescribed UCT rule with exploration decay. Dream-COP instead searches executable branching and stopping policies by replaying recorded trees, then deploys the selected policy in the next real search round.
