---
id: atlas
short_title: ATLAS
title: 'ATLAS: Scaffold-Free Algorithm Synthesis by LLMs via Embedding-Guided Quality-Diversity Search'
authors:
  - Danial Yazdani
  - Mohammad Nabi Omidvar
  - Yuan Sun
  - Maksud Ibrahimov
  - Xiaodong Li
year: 2026
date: 2026-08-16
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.15546
code_url: https://github.com/Danial-Yazdani/ATLAS
institutions:
  - rmit
  - leeds
  - latrobe
primary_dimension: search
dimensions:
  - search
  - design-object
  - feedback
problems:
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
  - Flow Shop Scheduling Problem
featured: false
summary: ATLAS performs scaffold-free full-algorithm synthesis with an embedding-guided quality-diversity search that preserves multiple competitive designs across embedding-space regions via a three-layer refinement strategy.
---

## Why it matters

Component-synthesis methods such as FunSearch, EoH, and ReEvo evolve an algorithmic function that occupies a designated role inside a user-defined scaffold; the surrounding control flow is fixed in advance. This makes synthesis manageable but imposes much of the algorithmic architecture and restricts the LLM from adding, removing, or reordering components. Full-algorithm synthesis removes this restriction but enlarges and complicates the search landscape, exposing generated algorithms to execution, interface, and feasibility failures and risking premature convergence to one design region.

## Core method

ATLAS fixes only a minimal I/O interface (instance and solution formats) and lets the LLM choose and restructure components, interactions, and control flow. Its search is organized as an embedding-guided quality-diversity framework:

- A **coverage-preserving archive** (semantic repertoire) of executable algorithms is organized in a pretrained embedding space; embedding distance drives retrieval, clustering, and redundancy-aware pruning without hand-specified descriptors.
- A **three-layer search** refines the current best region (Layer 1), gives non-elite region representatives dedicated refinement (Layer 2), and performs cross-region synthesis to recombine components and interactions (Layer 3).
- An **independent evaluator** verifies returned solutions and recomputes objectives, applies an all-or-nothing validity rule, and routes classified failure evidence to an error-conditioned REPAIR operator that regenerates the candidate.

## Contributions

- Scaffold-free full-algorithm synthesis formulation with only a problem specification and minimal I/O interface.
- Embedding-guided quality-diversity and multimodal search that preserves coverage across embedding-space regions.
- Hierarchical three-layer search over the clustered repertoire.
- Independent evaluation and failure-conditioned recovery with parallel, resource-controlled execution.
- Empirical design insights; ATLAS outperforms several state-of-the-art component-synthesis methods and a matched full-synthesis baseline on four NP-hard COPs while retaining multiple competitive designs from distinct regions.

## Strengths and limitations

ATLAS removes scaffold bias, preserves multiple competing designs (useful for multimodal landscapes), and treats failure as a search operator. The trade-offs are a larger and more heterogeneous search space with higher synthesis cost, and dependence on embedding quality for retrieval and clustering.

## What to improve

The paper suggests broader problem coverage, better embedding or behavior descriptors, and cost control for the enlarged synthesis loop as promising next steps.

## Connections

ATLAS is developed concurrently with A2DEPT on full-algorithm synthesis and situates itself alongside LLAMEA and AlphaEvolve as full-synthesis methods, while contrasting the component-synthesis line (FunSearch, EoH, ReEvo, HSEvo, MCTS-AHD, EoH-S).
