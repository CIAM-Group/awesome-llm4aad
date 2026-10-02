---
id: elmer
short_title: ELMER
title: "ELMER: Evolutionary Language Model that Explores and Refines"
authors:
  - Matthew Siper
  - Ahmed Khalifa
  - Julian Togelius
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.10196
institutions:
  - nof1
  - nyu
  - university-malta
primary_dimension: search
dimensions:
  - search
  - design-object
  - feedback
problems:
  - Evolutionary Program Search
  - Trading Policy Synthesis
featured: false
summary: Learns natural-language mutation operators whose requested strength is grounded in measured changes to program behavior.
---

## Why it matters

Asking for a small or large code edit does not reliably control how much an executable policy actually changes.

## Core method

Policies have natural-language descriptions and typed GPTL programs. Training examples come from grammar-valid degradation chains; parent/child executions assign low, medium, or high mutation labels using action-sequence disagreement on shared historical states. A Qwen3-8B model learns mutation, compilation, and translation tasks through supervised training, then common-parent offset preference optimization improves strength conditioning.

In evolutionary search, descriptions are mutated and compiled into programs; validation fitness, not behavioral distance, selects survivors. A mutation can have the requested behavioral size and still be unprofitable. Tests use three futures assets, chronological splits with embargoes, multiple outer search algorithms, and a common 1,000-evaluation budget. Matched code-output training isolates representation from model size and training data.


## Contributions

Provides an executable behavioral definition of mutation strength and a controlled comparison between language-space and code-space variation.

## Strengths and limitations

Behavior-grounded labels outperform merely naming strength categories. Calibration is ordinal rather than exact, outer-loop effects differ, and historical trading tests do not establish future returns.

## What to improve

Transfer the behavioral calibration to non-financial programs and report validity, training cost, search efficiency, and held-out quality separately.

## Connections

[ES-AHD](../es-ahd/index.md) controls exploration through generation temperature and elite guidance. ELMER instead trains variation strength against observed program behavior, giving a concrete distinction between sampling diversity and behavioral step size.
