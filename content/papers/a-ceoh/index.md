---
id: a-ceoh
short_title: "A-CEoH"
title: "Algorithmic Prompt-Augmentation for Efficient LLM-Based Heuristic Design for A* Search"
authors:
  - "Thomas Bömer"
  - "Nico Koltermann"
  - "Max Disselnmeyer"
  - "Bastian Amberg"
  - "Anne Meyer"
year: 2026
date: 2026-04-08
venue: "EvoStar"
paper_url: https://arxiv.org/pdf/2601.19622
code_url: https://github.com/tb-git-tud/a-ceoh-evolution-of-heuristics
institutions:
  - kit
  - tu-dortmund
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "A* Search"
  - "Unit-Load Pre-Marshalling Problem"
  - "Sliding Puzzle Problem"
featured: false
summary: "A-CEoH augments EoH prompts with the surrounding A* algorithm to provide domain-agnostic implementation context."
---

## Why it matters

A* lives or dies by its heuristic, yet an LLM given only a problem description does not see how that function interacts with the open list, closed list, path cost, and termination logic. A-CEoH asks whether algorithm context can replace part of the domain knowledge normally engineered into an A* heuristic.

## Core method

The paper extends EoH with *algorithmic-context augmentation*: every generation prompt contains the surrounding A* implementation and the exact interface the candidate heuristic must satisfy. EoH still evolves a paired natural-language idea and executable function, but candidates are evaluated only through their effect inside A*. This keeps the evolutionary machinery domain-agnostic while making the prompt implementation-aware.

The study covers the unit-load pre-marshalling problem and the sliding puzzle. It compares variants with and without algorithmic context and examines both solution quality and search effort, rather than treating heuristic output as an isolated prediction.

## Contributions

- A prompt construction that exposes the host search algorithm without supplying a hand-written domain heuristic.
- Evidence that the same A*-level context can support heuristic evolution in two structurally different domains.
- An open implementation containing the evolutionary setup and reported heuristics.

## Strengths and limitations

The intervention is simple, reproducible, and useful: it changes the information available to the model without inventing another search controller. However, two A*-based domains do not establish transfer to other host algorithms. More context also means longer prompts, and the paper does not separate all gains due to interface clarity from gains due to additional algorithm knowledge.

## What to improve

Test the idea on beam search, branch-and-bound, and anytime search; match prompt-token budgets in the ablation; and measure whether evolved heuristics remain admissible, consistent, or robust under distribution shift when those properties matter.

## Connections

A-CEoH is a contextualized EoH variant. It complements CEoH: CEoH adds richer *problem* context, whereas A-CEoH adds the *host algorithm* that consumes the generated heuristic.
