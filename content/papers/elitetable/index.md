---
id: elitetable
short_title: "EliteTable"
title: "EliteTable: Self-Improving Program Search for Executable Control Policies"
authors:
  - "Stuart Farmer"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.12536
code_url: https://github.com/StuartFarmer/elitetable
institutions:
  - casa-dilauro
primary_dimension: search
dimensions:
  - search
  - scope
problems:
  - "Executable Control Policies"
  - "Archive-Guided Program Search"
featured: false
summary: "Uses a fixed elite table to condition new, edited, and remixed control programs, then tests selected winners on fresh episodes."
---

## Why it matters

An archive can make program search improve in-run while repeatedly fitting the same evaluation episodes. Fresh-episode tests are needed to distinguish those outcomes.

## Core method

EliteTable freezes a ten-program table each generation. Fifty candidate slots propose new programs, edits, or remixes of up to three parents, using a 20/40/40 mixture after initialization. Even nominally new proposals see the elite context; they are not independent-sampling controls.

Duplicate checks and bounded repair attempts precede evaluation on ten fixed episodes. The best ten incumbent and candidate programs form the next table. After ten generations, selected first- and last-generation winners are frozen and evaluated on one hundred new episodes. Each of six Gymnasium tasks has ten independent searches.

## Contributions

All ten paired held-out endpoints improve in four tasks. The report also preserves important failures: six Acrobot searches decline, CartPole saturates in generation one, and BipedalWalker and CarRacing remain below their reporting targets.

## Strengths and limitations

Held-out episodes and paired search endpoints strengthen the descriptive evidence. There are no independent-sampling, non-LLM, archive-size, or operator-mixture controls, so the study cannot attribute gains or establish relative performance. The search controller and model weights do not themselves evolve.

## What to improve

Add budget-matched controls, ablate archive conditioning and remixing, and test robustness beyond the selected episode distributions.

## Connections

[FunSearch](../funsearch/index.md) uses archived programs to condition further executable proposals. EliteTable explores a simpler fixed-table, new/edit/remix design for control policies; the relevant contrast is archive organization, not evidence of general recursive self-improvement.
