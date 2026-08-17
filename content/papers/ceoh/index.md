---
id: ceoh
short_title: "CEoH"
title: "Leveraging Large Language Models to Develop Heuristics for Emerging Optimization Problems"
authors:
  - "Thomas Bömer"
  - "Nico Koltermann"
  - "Max Disselnmeyer"
  - "Laura Dörr"
  - "Anne Meyer"
year: 2025
date: 2025-03-05
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2503.03350
institutions:
  - tu-dortmund
  - kit
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Unit-Load Pre-Marshalling Problem"
featured: false
summary: "CEoH adds explicit problem context to EoH for optimization domains with little public heuristic knowledge."
---

## Why it matters

Emerging optimization problems may have little public code or textbook knowledge in an LLM's pretraining corpus. A bare problem name is therefore a weak prompt. CEoH tests whether explicit domain context can make a smaller model useful without hand-designing the heuristic itself.

## Core method

CEoH builds a contextual prompt containing the unit-load pre-marshalling process, state representation, legal moves, objective, and heuristic interface. Within that scaffold, EoH-style operators evolve natural-language ideas and code. Candidates are executed on instances and selected by their objective values.

The case study compares contextualized evolution with original EoH prompting, including smaller language models with weak pretrained knowledge of this domain.

## Contributions

- A reproducible way to package scarce domain knowledge into an evolutionary prompt.
- Evidence that contextualization can partly compensate for limited pretrained domain knowledge.
- An application of LLM-AHD outside the usual routing and packing benchmarks.

## Strengths and limitations

The paper isolates a practical bottleneck hidden by popular benchmarks. The evidence covers one problem, and a knowledgeable person must still decide which context matters. Extra context can also inject implementation bias into the search.

## What to improve

Extract context automatically from simulator code and documentation, ablate each context component, and test the same recipe on other low-resource optimization domains.

## Connections

CEoH specializes EoH for scarce-domain knowledge. A-CEoH later shifts the augmentation target from problem description to the surrounding host algorithm.
