---
id: goalevolve
short_title: GoalEvolve
title: "GoalEvolve: From Handcrafted Algorithm Priors to Goal-Driven Evolution of Physical Design Algorithms"
authors:
  - Haixu Liu
  - Lei Zhou
  - Yuhao Ren
  - Yumao Wu
  - Zhiang Wang
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.16733
institutions:
  - fudan
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - VLSI Physical Design
  - Timing and Power Optimization
featured: false
summary: Uses remaining end-of-flow timing and power target gaps to guide source-level evolution of physical-design algorithms.
---

## Why it matters

A source edit can improve a local design stage while causing downstream routing or power regressions.

## Core method

GoalEvolve fixes a multi-metric target region and measures normalized positive violations after the complete design flow. A Teacher traces the dominant gap through checkpoints, retrieves implementation and paper cards, and proposes source-level hypotheses. Four Student branches start from the same parent: two explore new mechanisms, one refines a promising mechanism, and one integrates compatible validated changes.

Isolated builds and identical evaluation conditions support comparison. Checkpoint analysis tracks local gains, degradation in other metrics, and whether later stages preserve or reverse those effects. A program database retains validated, failed, and promising mechanisms; plateau handling can revisit distinct feasible lineages while retaining the champion. The case study edits OpenROAD post-placement timing/power mechanisms with downstream evaluation held fixed.


## Contributions

Makes unmet final goals, rather than only local scores, the control signal for source-code evolution and evidence retrieval.

## Strengths and limitations

Full-flow checks expose hidden regressions. Targets come from preliminary commercial-flow characterization, evaluation is expensive, and improved aggregate distance does not mean every target was met on every design.

## What to improve

Freeze targets and budgets prospectively on unseen designs, and separately measure transfer of mechanisms versus design-specific source tuning.

## Connections

[MacroAgent](../macroagent/index.md) evolves a bounded contour generator inside a mostly fixed legalization pipeline. GoalEvolve instead attributes final-flow shortfalls to editable source mechanisms, illustrating a different feedback granularity in physical-design algorithm discovery.
