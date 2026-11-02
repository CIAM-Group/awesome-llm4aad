---
id: tilecas
short_title: "TileCas"
title: "TileCas: Cascading Kernel Development Across Programming Abstractions"
authors:
  - "Xinyu Xiao"
  - "Zihe Song"
  - "Dezhi Ran"
  - "Wei Yang"
  - "Tao Xie"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.14740
code_url: https://github.com/TongmingLAIC/tilecas
institutions:
  - fudan
  - tongming-lake
  - ut-dallas
  - pku
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - "Multi-Level Kernel Optimization"
  - "Editable Programming Abstractions"
featured: false
summary: "Lets coding agents retain, diagnose, lower, and revisit kernel candidates across high-level DSL and low-level accelerator source representations."
---

## Why it matters

A high-level language shrinks the search space but can hide controls needed for performance. Permanently lowering a program sacrifices that convenience even when the low-level branch disappoints.

## Core method

TileCas is a pluggable interface around existing kernel agents. Cross-Level Diagnosis maps compiler correspondence and measured evidence to actionable controls at different representations, retaining source versions and measurement conditions.

Abstraction Scheduling chooses both a candidate and representation for refinement. A heterogeneous search tree records same-level edits, lowering, and rollback, so an agent can restore an earlier high-level version or reuse selected low-level components. Experiments pair TileLang with HIP or Ascend C while keeping the base agents' generation and evaluation mechanisms.

## Contributions

Across fifty KernelBench Level-3 workloads, two accelerators, two models, and five seeds, AKO with TileCas achieves 4.84× arithmetic-mean speedup versus 3.75× for the strongest evaluated non-TileCas baseline. A KDA integration also improves, supporting interface reuse.

## Strengths and limitations

The time budget includes conversion and exploration costs, and unsuccessful candidates contribute zero to the speed metric. Nevertheless, tests use finite inputs and numerical tolerances, only two representation levels are studied, and compiler changes may invalidate correspondence. Selected switching interventions do not establish optimal scheduling at every decision.

## What to improve

Test deeper abstraction hierarchies, quantify porting effort, and compare uncertainty-aware scheduling with fixed switching policies.

## Connections

[ADSL-PDE](../adsl-pde/index.md) constrains search to a typed solver language with a fixed compilation path. TileCas makes the abstraction level itself editable and revisitable, trading a smaller guaranteed structure for greater low-level control.
