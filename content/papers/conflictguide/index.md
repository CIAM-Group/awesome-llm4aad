---
id: conflictguide
short_title: ConflictGuide
title: "ConflictGuide: AutoResearch Improves When Competing Behaviors Are Made Visible"
authors:
  - "Binqian Xu"
  - "Qiran Zou"
  - "Xiangbo Shu"
  - "Dianbo Liu"
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.39933
institutions:
  - nus
  - njust
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - Neural Model Design
  - Neural Operator Learning
  - Image Compression
  - Graph Learning
featured: false
summary: "Adds qualified probes of competing model behaviors to a two-stage code-evolution loop, using them for targeted proposals and guarded retention."
---

## Why it matters

A scalar task score can hide whether an edit helps one behavior by damaging another. ConflictGuide exposes those changes after an initial phase of broad exploration.

## Core method

A literature-based Root–Axis–Mechanism taxonomy guides identification of a concrete behavioral conflict from the target model and task. The skill can abstain. A coding agent implements read-only probes, which undergo null calibration and paired qualification before search.

Stage I exposes only task feedback. At a pre-fixed boundary, Stage II adds qualified probe changes and conflict-relevant edit targets. Substantial task improvements are retained directly; marginal gains or eligible ties also require calibrated conflict alleviation. Negative task gains are never accepted. Final evaluation transfers source edits and retrains winners from scratch under matched settings.

## Contributions

- Separates behavior diagnosis, probe qualification, proposal guidance, and edit retention.
- Studies five model families, common-branch continuations, guidance/retention ablations, and alternative coding agents.

## Strengths and limitations

Matched continuation budgets help isolate the feedback change. Results still depend on the supplied conflict taxonomy, probe implementation, and stage allocation. Probe improvement is not proof of a universal causal mechanism, and not every reported task/probe metric improves together.

## What to improve

Evaluate automatic probe qualification on unfamiliar model families and measure robustness to misleading or redundant probes.

## Connections

The related-work discussion explicitly distinguishes [EvoPINN](../evopinn/index.md)'s training-state diagnostics and [GoalEvolve](../goalevolve/index.md)'s stage-localized goal gaps from conflict-specific behavior probes. [Component Feedback](../component-feedback/index.md) instead associates code diffs with already available metric changes; it does not qualify new conflict probes.
