---
id: cvar-rmd
short_title: "CVaR-RMD"
title: "CVaR-RMD: CVaR Selection Pressure for Robust Metaheuristic Discovery"
authors:
  - "Ruodai Cui"
  - "Li Niu"
year: 2026
date: 2026-10-01
venue: Findings of EMNLP 2026
paper_url: https://arxiv.org/pdf/2610.25697
code_url: https://github.com/BeyondHeaven/CVaR-RMD
institutions:
  - qualcomm
  - polyu
  - sjtu
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Robust heuristic design"
  - "Online bin packing"
  - "Capacitated vehicle routing"
  - "Flow-shop scheduling"
featured: false
summary: "CVaR-RMD changes evolutionary program selection from mean loss to empirical tail-risk, using shared heterogeneous evaluation conditions and tail-case diagnostics to discover more robust heuristics."
---

## Why it matters

A heuristic with a good average can fail badly on particular instance families, seeds, or scales. Those adverse cases are easily hidden when the evolutionary loop ranks candidates only by a mean.

## Core method

Each generated program implements a fixed interface and is evaluated on conditions specifying an instance family, scale, instance seed, and execution seed. Candidates within a generation share the evaluation batch. Invalid code, timeouts, and infeasible solutions receive fixed loss penalties. The fitness is empirical CVaR: the average of the worst chosen fraction of outcomes, with fractional boundary weighting when needed. Tail records identify difficult conditions and optionally guide LLM mutation. Rank-biased parent sampling and elitist parent–offspring replacement use this risk score; accumulated losses can require minimum evidence before archive entry. The selected program is frozen for deployment without further LLM calls.

## Contributions

- Isolates risk-sensitive selection through a Mean-RMD comparison that retains the same generator, archive, validator, and search budget.
- Reports fifteen discovery seeds in packing, routing, and flow-shop scheduling, including larger-instance and curated within-domain transfer tests.

## Strengths and limitations

The experiments support lower tail loss and failures while retaining competitive means, not guaranteed robustness to arbitrary shifts. Tail-level choice controls a practical mean–risk trade-off, and finite samples can miss rare failures. Only three problem domains are studied. Acceptance is disclosed in official metadata; the displayed month follows first arXiv submission because the acceptance month is not supplied.

## What to improve

Quantify uncertainty in estimated tails, adapt evaluation effort to rare events, and assess risk choices under genuinely different generators.

## Connections

[RAISE](../raise/index.md) searches for nearby adversarial instances in an inner loop. CVaR-RMD instead keeps a specified heterogeneous evaluation distribution and ranks its adverse quantile across instances, scales, and seeds: robustness comes from risk-sensitive selection rather than adaptive instance generation.
