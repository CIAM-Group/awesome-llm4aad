---
id: lhs
short_title: "LHS"
title: "Latent Heuristic Search: Continuous Optimization for Automated Algorithm Design"
authors:
  - "C. Ahmed"
  - "Mahdi Mostajabdaveh"
  - "Zirui Zhou"
year: 2026
date: 2026-06-15
venue: "LION"
paper_url: https://arxiv.org/pdf/2605.17137
code_url: https://github.com/cheikh025/LHS
institutions:
  - huawei-canada
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Traveling Salesman Problem"
  - "Capacitated Vehicle Routing Problem"
  - "Knapsack Problem"
  - "Online Bin Packing"
featured: false
summary: "Latent Heuristic Search moves automated algorithm design from discrete program mutations to gradient-based optimization on a learned continuous manifold."
---

## Why it matters

Program syntax is discrete, so evolutionary AHD cannot directly use gradients from a performance predictor. LHS asks whether learned continuous geometry can make nearby search steps meaningful while a frozen LLM still decodes the final artifact into executable code.

## Core method

An encoder maps evaluated programs into embeddings and a differentiable surrogate predicts their performance. An invertible normalizing flow maps the embedding distribution to a structured Gaussian prior where gradient ascent is regularized. A learned mapper converts optimized latent vectors into soft prompts for a frozen LLM, which generates the executable heuristic that is finally measured by the real evaluator.

Experiments on TSP, CVRP, knapsack, and online bin packing report performance competitive with discrete evolutionary baselines.

## Contributions

- A continuous search space learned from discrete heuristic programs.
- Surrogate-gradient optimization regularized by a normalizing flow.
- Soft-prompt decoding through a frozen LLM across four COPs.

## Strengths and limitations

Continuous optimization offers a genuinely different search mechanism and may reuse gradients efficiently. The surrogate can be confidently wrong off-distribution, and decoder discontinuities mean a small latent move need not yield a small program change. Training the representation also requires an evaluated program corpus.

## What to improve

Use uncertainty-aware trust regions, study latent-to-behavior smoothness, and compare total data-collection plus training cost against discrete search. Cross-task latent transfer is an especially important test.

## Connections

LHS contrasts with EoH, ReEvo, and MCTS-AHD by optimizing a learned continuous manifold instead of selecting discrete code mutations.
