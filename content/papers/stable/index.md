---
id: stable
short_title: "STABLE"
title: "Semantics-Aware Bilevel Co-Evolution: Towards Automated Multicomponent Algorithm Design"
authors:
  - "Zhiyao Zhang"
  - "Shenghao Wu"
  - "Xingyu Wu"
  - "Kay Chen Tan"
year: 2026
date: 2026-06-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2606.29953
institutions:
  - polyu
  - scau
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - "Multicomponent Algorithm Design"
featured: false
summary: "STABLE organizes complex algorithms as reusable components and co-evolves their configuration and implementation with semantic guidance."
---

## Why it matters

Real algorithms contain several interacting components. Whole-program rewriting loses useful parts, while tuning components inside a fixed template cannot discover new compositions. Stable searches both the arrangement of components and the code that realizes them.

## Core method

The upper evolutionary level changes component configuration and coordination. The lower level improves each component's executable implementation under the current configuration. Semantic descriptions identify related components and support retrieval, reuse, and recombination instead of relying only on literal code overlap. Fitness is measured on the assembled algorithm, preserving interaction effects.

Experiments target multicomponent algorithm design and compare against whole-code evolution and fixed-component alternatives, with ablations for semantics and the bilevel split.

## Contributions

- A bilevel representation separating component organization from implementation.
- Semantics-aware component retrieval and reuse.
- End-to-end co-evaluation of assembled multicomponent algorithms.

## Strengths and limitations

Component boundaries make complex systems more manageable and allow partial reuse. Those boundaries and semantic descriptions are themselves strong design choices; hidden dependencies can make independently improved components fail when assembled. Nested evolution increases cost.

## What to improve

Infer interfaces from code, test component libraries across tasks, and use interaction-aware credit assignment so a weak global score does not discard every local improvement.

## Connections

Stable generalizes the component-coordination issue seen in CoupleEvo and E2OC. It also shares Code Graph's goal of preserving partial algorithmic value, but uses explicit semantic components and bilevel search.
