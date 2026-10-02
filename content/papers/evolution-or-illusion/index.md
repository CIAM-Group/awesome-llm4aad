---
id: evolution-or-illusion
short_title: Evolution/Illusion
title: Evolution or Illusion? Rethinking Evaluation in LLM Evolutionary Search
authors:
  - Tal Oved
  - Roi Pony
  - Oshri Naparstek
  - Udi Barzelay
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.19799
institutions:
  - ibm-research
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - Evolutionary Search Evaluation
  - Search Budget Allocation
featured: false
summary: Evaluates evolutionary-search methods over a seeds-by-iterations grid to reveal budget-dependent rankings and width/depth trade-offs.
---

## Why it matters

Declaring a winner at one search depth and one seed count can conceal a different winner under another equally valid budget allocation.

## Core method

Each logged seed yields a best-so-far trajectory. For every depth and subset size, exact order statistics compute the expected best result over subsets of the 40 observed seeds, avoiding Monte Carlo noise in that finite-sample calculation. The analysis then finds the best width/depth split under a product budget and compares strategy rankings across the resulting surface.

Bootstrap analysis estimates how often partial-budget rankings differ from the full-budget ranking. Three strategies and five optimization tasks are examined up to 200 iterations. This is post-hoc analysis of already collected trajectories: the budget-optimal split is not known to an online search procedure without first observing the grid.


## Contributions

Replaces a single reported operating point with an auditable budget frontier and demonstrates that seed count, search depth, and method ranking interact.

## Strengths and limitations

Reusing logs makes allocation comparisons reproducible. Collecting enough independent trajectories is costly, finite observed seeds limit inference, and iteration counts do not normalize token or evaluator cost.

## What to improve

Select allocations on independent development tasks and report dollar/time frontiers alongside the seed–iteration grid, with uncertainty for ranking conclusions.

## Connections

[RelayEvolve](../relayevolve/index.md) decides online whether to grow or deepen trajectories. This study contextualizes that decision with an offline width/depth evaluation protocol; it is not evidence that one framework implements the other.
