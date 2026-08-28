---
id: dyace
short_title: "DyACE"
title: "DyACE: Dynamic Algorithm Co-evolution for Online Automated Heuristic Design with Large Language Model"
authors:
  - "G. Lu"
  - "Yiping Liu"
  - "Xiangxiang Zeng"
year: 2026
date: 2026-03-07
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2603.13344
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Online Combinatorial Optimization"
featured: false
summary: "DyACE adapts heuristic operators online as the optimization process moves through different search stages."
---

## Why it matters

A perturbation useful for escaping an early local optimum may be harmful during late refinement. Static AHD returns one fixed algorithm and assumes its behavior remains appropriate throughout the run. DyACE makes changing search conditions part of the design problem.

## Core method

DyACE co-evolves a dynamic control strategy and executable heuristic operators. The upper level observes search state and selects or adapts behavior; the lower level supplies operators for that state. Look-Ahead Rollout Search estimates downstream consequences rather than accepting modifications from immediate reward alone.

Experiments compare dynamic co-evolution with fixed and static-AHD baselines on perturbative combinatorial search, including stage-dependent behavior and rollout-cost analyses.

## Contributions

- Recasts heuristic design as non-stationary online control.
- Co-evolves a stage policy with the operators it controls.
- Uses look-ahead rollouts to capture delayed algorithmic effects.

## Strengths and limitations

Dynamic adaptation fits iterative search better than one immutable heuristic. Online generation and rollout are costly, and noisy stage detection can create instability. Deployment also involves a controller-plus-operator system rather than one inspectable function.

## What to improve

Learn compact state descriptors, cache reusable operators, and compare online design with an offline portfolio under equal runtime. Safety checks are needed before adapting code inside a live solver.

## Connections

DyACE changes *when* design occurs: it continues during solution search. EoH and most atlas methods finish heuristic evolution before deployment.
