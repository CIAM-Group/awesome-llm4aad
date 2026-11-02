---
id: search-to-signal
short_title: Search to Signal
title: "From Search to Signal: Online Post-Training in Automatic Heuristic Design"
authors:
  - "Yilun Yuan"
  - "Tianyu Zhou"
  - "Zhenzhou Tang"
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.39383
institutions:
  - wenzhou-university
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - Automatic Heuristic Design
  - Traveling Salesman Problem
  - Capacitated Vehicle Routing Problem
featured: false
summary: "Intervenes on reward construction inside a fixed CALM loop to distinguish archive utility, normalized training credit, and genuine search improvement."
---

## Why it matters

An evaluated program can be useful to a search archive without immediately improving the frontier. Likewise, positive group-relative training credit need not mean that a program beats its parent.

## Core method

The study fixes CALM's evolutionary operators, context construction, population transitions, grouping, and optimizer, then changes only the record-to-reward mapping. Alternatives separate validity and quality, concentrate weight on the pre-generation upper tail, or probe residual information from counterfactual parent exposure. GRPO normalization can erase additive offsets and almost erase positive rescaling, so different reward formulas do not necessarily imply different updates.

Shared-record and matched-token experiments trace advantages into parameter changes. Live runs, frozen-generator controls, and population-reset checkpoint evaluations then separate model adaptation from accumulated search state. Timing-derived extra-search budgets provide an additional, explicitly approximate resource comparison.

## Contributions

- A normalizer-aware audit of online AHD training signals.
- Separates validity, valid-only quality, contextual improvement, and frontier discovery rather than reporting only the best endpoint.

## Strengths and limitations

The main three-seed cohort uses TSP and one 7B model. Other tasks mainly provide mechanism checks. No reward mapping uniformly dominates; online updates do not consistently beat additional frozen search under the timing-derived budgets. Those budgets are not exact realized-time matches.

## What to improve

Repeat with larger groups, additional hosts and models, and timestamped end-to-end resource accounting.

## Connections

The intervention preserves [CALM](../calm/index.md)'s co-evolutionary loop while replacing and auditing its reward construction. [PCPO](../pcpo/index.md) instead curates replayed elites and adds periodic positive off-policy updates, changing the training-data and update organization as well as credit assignment.
