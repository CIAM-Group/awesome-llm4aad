---
id: poh
short_title: "PoH"
title: "Planning of Heuristics: Strategic Planning on Large Language Models with Monte Carlo Tree Search for Automating Heuristic Optimization"
authors:
  - "Chaoxu Mu"
  - "Xufeng Zhang"
  - "Hui Wang"
year: 2025
date: 2025-02-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2502.11422
institutions:
  - anhui-university
  - pengcheng-lab
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Traveling Salesman Problem"
  - "Flow Shop Scheduling Problem"
featured: false
summary: "Planning of Heuristics combines LLM self-reflection with Monte Carlo tree search to plan multi-step heuristic improvements."
---

## Why it matters

Direct iterative prompting is short-sighted: it accepts one proposed revision before knowing whether that direction has useful descendants. PoH casts heuristic refinement as planning so several possible improvement trajectories can compete over a longer horizon.

## Core method

A node is an executable heuristic state, an LLM-generated improvement suggestion is an action, and measured task performance supplies reward. Monte Carlo Tree Search balances expanding new suggestions with revisiting promising branches; self-reflection explains failures and proposes actions. Backpropagated rewards let later outcomes revise the value of earlier design choices.

Experiments on TSP and flow-shop scheduling compare PoH with hand-crafted heuristics and LLM-AHD baselines, including larger problem sizes.

## Contributions

- A planning formulation of multi-step heuristic improvement.
- Integration of self-reflective actions with MCTS selection and backup.
- Evidence across routing and scheduling tasks.

## Strengths and limitations

The tree preserves alternative lineages and credits early choices with downstream outcomes. Each expansion still requires generation and execution, making tree breadth expensive. Natural-language actions may also duplicate one another while appearing distinct.

## What to improve

Merge behaviorally equivalent branches, use uncertainty-aware value estimates, and compare with population evolution under the same evaluator calls and prompt-token budget.

## Connections

PoH belongs to the tree-search line with MCTS-AHD. Its distinctive framing treats reflective improvement suggestions as actions in a planning problem.
