---
id: siteevo
short_title: SiteEvo
title: 'SiteEvo: An LLM Agent for Autonomous Discovery of Site-Adaptive Massive MIMO Detectors'
authors: [Jiajia Guo, Chao-Kai Wen, Shi Jin, Jun Zhang]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.15490
institutions: [affiliation-not-disclosed]
primary_dimension: scope
dimensions: [scope, design-object, feedback]
problems: [Massive MIMO Detection, Site-Adaptive Signal Processing]
featured: false
summary: Discovers site-specific detector programs, trains their parameters, then reduces preparation and payload cost under a validation error-rate constraint.
---

## Why it matters

Wireless sites differ in interference and channel structure. Parameter tuning within a prescribed detector may be insufficient, while a structurally better detector can still be too expensive to deploy.

## Core method

The LLM receives a communication model, site diagnostics, previous candidates, and a contract separating reusable channel preparation from payload detection. It proposes complete PyTorch detectors and trainable parameterizations. Execution-only repair receives errors but no performance ranking, keeping debugging separate from algorithm selection.

A backend trains numerical parameters and returns validation bit-error rates. Promising structures receive progressively larger training budgets. A second search starts from the chosen detector and proposes traceable structural simplifications; it minimizes preparation cost plus coherence-block-weighted payload cost subject to preserving BER within tolerance. The selected code and parameters are frozen, with no online LLM calls.

## Contributions

Three simulated deployment sites test structural specialization. Reported BER reductions at 6 dB are factors of 2.6–6.0 versus each site's strongest comparison, while refinement reduces block-level computational cost by 16.7–34.1%.

## Strengths and limitations

The preparation/payload split matches reusable channel computation and exposes deployment trade-offs. Results assume perfect channel information and known noise variance in simulated sites. Operation-count reductions do not establish hardware latency or robustness to changing propagation conditions. The public author block does not disclose affiliations.

## What to improve

Test channel-estimation errors, online distribution drift, measured device latency, and amortized discovery cost across site updates.

## Connections

[AITE](../aite/index.md) retains a performance–complexity frontier of wireless algorithms. SiteEvo instead first fixes a site-specific BER anchor, then performs parent-constrained cost refinement, making the accuracy-versus-efficiency trade-off a sequential constrained search.
