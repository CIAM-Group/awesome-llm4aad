---
id: poh
short_title: PoH
title: 'Planning of Heuristics: Strategic Planning on Large Language Models with Monte Carlo Tree Search for Automating Heuristic Optimization'
authors:
  - Hui Wang
  - Xufeng Zhang
  - Chaoxu Mu
year: 2025
date: 2025-02-17
venue: arXiv
paper_url: https://arxiv.org/pdf/2502.11422
institutions:
  - anhui-university
  - pengcheng-lab
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Traveling Salesman Problem
  - Flow Shop Scheduling Problem
featured: false
summary: PoH models heuristic refinement as planning over executable states and language actions, using Monte Carlo Tree Search to compare multi-step improvement trajectories.
---

## Why it matters

Direct iteration or population updates make local decisions from the current candidate, even when a reflective suggestion may lead to a poor longer-term trajectory. PoH treats heuristic refinement as planning so alternative futures can be searched before the final heuristic is selected.

## Core method

PoH defines an executable heuristic as a state, a natural-language improvement suggestion as an action, and solver performance as the reward. A base LLM writes heuristic code; an optimizer LLM reads the code, results, and trajectory context to propose suggestions.

These transitions form an MCTS tree. UCT follows promising branches, expansion generates several suggestion-conditioned children, and greedy simulation continues from the strongest child for additional transitions. Rewards are backed up along the trajectory, and the output is the best node on the highest-reward path rather than simply the deepest node. Experiments use Guided Local Search for TSP and flow-shop scheduling.

## Contributions

- A planning formulation that maps heuristic states, language actions, transitions, and solver rewards to an executable MDP.
- An MCTS controller that compares multi-step improvement trajectories.
- Experiments on TSP and flow-shop scheduling, including search-strategy and cross-LLM comparisons.

## Strengths and limitations

Explicit action semantics make the search trace inspectable, while lookahead preserves alternatives that greedy updates may discard. The evidence is narrower than the paper's broad claim: experiments cover two tasks under Guided Local Search, reported runtime excludes LLM design cost, and search controllers use different numbers of explored heuristics. Full token and API-cost accounting and significance tests are also limited.

## What to improve

Future work should match heuristic evaluations, queries, tokens, and wall-clock time when comparing MCTS, greedy, and beam search. Behavioral deduplication, uncertainty-aware values, and tests beyond GLS could reduce redundant branches and expose cross-task transfer.

## Connections

PoH builds on ReEvo's reflective improvement direction and is recorded as a search-level relation to that line. It is concurrent with MCTS-AHD: both use trees, but PoH makes free-text suggestions searchable actions and uses multi-step simulation, whereas MCTS-AHD emphasizes a structured action set and lineage preservation. CogMCTS later couples cognitive feedback to expansion; PoH's distinctive contribution is reflection-as-action.
