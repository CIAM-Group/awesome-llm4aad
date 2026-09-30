---
id: seisevo
short_title: SeisEvo
title: "SeisEvo: Evolution of Seismic Data Reconstruction Algorithms by Agents"
authors:
  - Yingjie Xu
  - Siwei Yu
  - Jianwei Ma
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.18272
institutions:
  - hit
  - nus
  - pku
primary_dimension: scope
dimensions:
  - scope
  - feedback
problems:
  - Seismic Data Reconstruction
  - Seismic Interpolation and Denoising
featured: false
summary: Evolves white-box seismic reconstruction operators under hard physical-consistency and parameter-provenance constraints.
---

## Why it matters

Classical reconstruction operators are interpretable but their coupled thresholds, schedules, and projections are difficult to redesign manually.

## Core method

A human specifies a seed algorithm, editable components, score, and legality contract. Coding agents inspect strong, failed, and diverse candidates, then propose mechanism-level edits with rationales and parameter provenance. A fixed evaluator rejects illegal, divergent, or non-executable candidates before scoring reconstruction quality on search-time sub-blocks.

Accepted scores and failure records update the next context through programmatic rules; agent explanations are proposals, not adjudicated evidence. Pure scalar retuning and unexplained free constants are disallowed. After the budget ends, the best legal program is frozen and evaluated on external volumes and sampling/noise conditions. POCS and MSSA case studies produce standalone evolved reconstruction algorithms requiring no agent at inference.


## Contributions

Connects program evolution to auditable physical constraints and explicitly separates search-time blocks from final reconstruction tests.

## Strengths and limitations

Hard gates protect observed traces where exact consistency is appropriate. The reported improvements are relative to selected seeds and datasets; human choices of editable surface, physical rules, and scoring still shape the discovery space.

## What to improve

Test harsher acquisition shifts and compare against matched-cost non-LLM mechanism search. Independently audit parameter provenance and the effects of each discovered operator.

## Connections

[AlphaEvolve](../alphaevolve/index.md) is explicitly discussed as part of the evaluator-guided program-discovery background. SeisEvo emphasizes a domain-specific boundary: editable classical mechanisms and physical-admissibility checks must prevent meaningless score gains. This is research context, not a claim of reused implementation.
