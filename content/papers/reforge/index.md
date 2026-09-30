---
id: reforge
short_title: ReForge
title: "ReForge: Keeping ABR Algorithms Never Finished with Verified Large Language Model Edits"
authors:
  - Zhiqiang He
  - Zhi Liu
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.15138
institutions:
  - university-electro-communications
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - Adaptive Bitrate Streaming
  - Policy Routing
featured: false
summary: Evolves an interpretable fuzzy router over frozen streaming policies while checking each revision against accumulated traffic families.
---

## Why it matters

Adapting a router to a new traffic regime can erase performance on earlier regimes even when average reward improves.

## Core method

Five base adaptive-bitrate policies remain frozen. The search edits a fuzzy router that chooses among them. Each fresh LLM prompt receives counterfactual policy probes, coverage diagnostics, a difficult episode trace, and a ledger of rejected edits. Proposals use a closed edit language for adding, removing, splitting, or modifying rules and membership functions.

Mechanically valid proposals are replayed on all accumulated probe families. Acceptance requires preserving each family's historical best within a tolerance and improving aggregate or worst-family performance; specified simplifying edits can be neutral. New families arrive sequentially. Disjoint held-out episodes test the resulting router, rather than supplying the acceptance signal. In the reported sequence, 48 proposals yield 18 accepted revisions without increasing the final eight-rule count.


## Contributions

Makes historical regression protection and compact routing logic explicit constraints on LLM-driven policy revision.

## Strengths and limitations

The restricted edit language and rejection ledger make changes auditable. Protection applies to finite probe families, not every future network condition, and the base-policy library limits possible behavior.

## What to improve

Test truly novel policy libraries and regime shifts, and assess whether tolerance choices hide cumulative regressions under noisy probes.

## Connections

[RouteRepair](../routerepair/index.md) also separates targeted improvement from regression protection. ReForge guards historical traffic-family performance, whereas RouteRepair checks parent-defined failure and non-failure instances; these are different units of acceptance evidence.
