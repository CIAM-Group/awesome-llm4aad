---
id: rngd-kernel-loop
short_title: "RNGD Kernel Loop"
title: "A Case Study of a Multi-Agent Kernel-Optimization Loop That Learns a New AI Accelerator"
authors:
  - "Byonggon Chun"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.38329
code_url: https://github.com/bgchun-fs/multi-agent-kernel-gen-loop
institutions:
  - fluidstack
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - scope
problems:
  - "NPU Kernel Optimization"
  - "Accelerator Knowledge Acquisition"
featured: false
summary: "Builds and rechecks accelerator knowledge while a multi-agent design-tree search optimizes three kernels under scarce, noisy device access."
---

## Why it matters

An unfamiliar accelerator demands both implementation search and learning what its compiler, language, and measurements actually mean.

## Core method

The loop constructs a checked DSL guide, runs microbenchmarks, records compiler legality rules, and revalidates knowledge after toolchain changes. Strategy, architecture, implementation, and ownership roles explore per-kernel design trees while retaining a best accepted implementation.

Cheap legality and cost checks screen candidates before scarce device runs. Late-stage acceptance uses repeated paired comparisons with the incumbent rather than a single timing. The 12-day campaign optimizes three Gemma decode kernels in the Furiosa RNGD Rust DSL.

## Contributions

The final retained kernels achieve a reported 9.293× geometric-mean speedup over the competition baseline. The process documents knowledge repair, measurement calibration, and 44 test-input shortcut rows excluded from the reported outcome.

## Strengths and limitations

This is one campaign, not a controlled attribution study: neither onboarding nor role division is ablated. Toolchain and grader changes complicate historical comparisons. The repeated acceptance test's observed false-positive rate exceeds its nominal 5%; public-board position is not an official ranking. Final kernels were tested on generated inputs, not real checkpoint weights.

## What to improve

Repeat on isolated devices and new accelerators, preregister acceptance tests, vary inputs from the start, and compare against an otherwise identical loop without active onboarding.

## Connections

For unfamiliar accelerators, [AscendEvolve](../ascendevolve/index.md) retrieves from a version-scoped platform corpus and records task-local counterevidence. The RNGD loop explicitly builds and rechecks its platform knowledge with probe kernels and compiler tests when the toolchain changes.
