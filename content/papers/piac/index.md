---
id: piac
short_title: PIAC
title: Evolving Parallel Algorithm Portfolios via Potential-Aware Instance Generation with LLMs
authors:
  - Shaofeng Zhang
  - Shengcai Liu
  - Zhiyuan Wang
  - Ke Tang
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.06808
code_url: https://anonymous.4open.science/r/piac-BAF3
institutions:
  - sustech
  - zhongguancun-academy
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - scope
problems:
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
  - Algorithm Portfolios
featured: false
summary: Co-evolves instance-mutator programs and complementary heuristic portfolios using improvement potential rather than reference-solution gaps.
---

## Why it matters

A hard instance may offer little useful learning signal, and computing its gap to an optimum can itself be expensive.

## Core method

PIAC alternates instance generation and portfolio construction. LLM-generated mutator programs transform seed instances; their fitness is the mean potential gain of their outputs. This gain compares the current portfolio with variants produced by perturbing its internal heuristic scoring matrices under the same solver backbone. It estimates locally accessible improvement without requiring an optimal reference solution.

High-potential instances augment the accumulated training set. LLM crossover and mutation then generate heuristic components, which are inserted into fixed constructive, ant-colony, or guided-local-search backbones. Greedy portfolio updates reward complementary instance coverage. Thus both the training distribution and executable heuristics change, but the perturbation interface remains backbone-specific.


## Contributions

Separates useful training-instance discovery from absolute hardness and searches over executable instance mutators rather than one fixed generator.

## Strengths and limitations

Experiments cover TSP/CVRP under multiple distributions and backbones. Potential gain is a surrogate for eventual generalization, not a guarantee; perturbation and repeated portfolio evaluations add cost.

## What to improve

Test whether high potential predicts held-out improvement across new problems, and report complete instance-generation costs and sensitivity to perturbation scales.

## Connections

[MOSAIC](../mosaic/index.md) evolves instances that discriminate between specialist heuristics. PIAC instead ranks instances by improvement available through controlled perturbations of the current portfolio, providing a concrete contrast in co-evolutionary training signals.
