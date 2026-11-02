---
id: adapt-science
short_title: ADAPT for Science
title: 'ADAPT for Science: A Multi-Agent System for Self-Evolving Scientific Optimization'
authors: [Zhaoran Feng, Yuchen Ni, Jianan Liu, Lemao Liu, Dejing Dou, Kairui Feng]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.30851
institutions: [nanjing-university, shanghai-innovation-institute, fudan, tongji, bedi-cloud]
primary_dimension: design-object
dimensions: [design-object, search, feedback]
problems: [Scientific Optimization, Gravitational-Wave Detector Design]
featured: false
summary: Co-designs initialization-selection policies and executable optimizers using historical detector designs, simulation traces, and independent held-out validation.
---

## Why it matters

For costly constrained scientific objectives, a better optimizer cannot compensate for every poor starting point. Initialization and update dynamics should be designed together under the actual evaluation budget.

## Core method

ADAPT retrieves 64 structurally similar detector designs from a cleaned historical library and transfers parameters by semantic component matches, using training-set priors for unmatched values. A selection evolver rewrites the policy that probes, prunes, and allocates compute among these starts. An optimizer evolver then rewrites update rules, state handling, schedules, and numerical safeguards.

Candidate policies run in a differentiable physics simulator. Traces guide LLM revisions through a pool of existing evolutionary workflows; quality, anytime progress, feasibility, and improvement guide optimizer selection. The chosen procedures are frozen before evaluation on eight withheld topologies. The discovered optimizer retains Adam but shortens momentum memory, applies remaining-time-dependent update scaling, and transactionally rejects non-finite parameter/state updates.

## Contributions

The paper separates “where to search” from “how to search” as two executable design objects. Its complete policy obtains mean held-out loss 0.204 versus 0.452 for the best evaluated fixed optimizer; ablations test selection, optimizer evolution, and scientific guidance.

## Strengths and limitations

The historical library and independent validator make transfer testable. Evidence remains within one simulated scientific domain, and performance depends on library coverage. Matched scientific evaluation budgets do not eliminate the extra cost of discovering policies.

## What to improve

Report amortization across repeated targets, test genuinely out-of-distribution topologies, and extend validation to non-differentiable simulators and physical measurements.

## Connections

[ShinkaEvolve](../shinkaevolve/index.md) is one of the explicitly used program-evolution backends. ADAPT adds scientific retrieval, semantic parameter transfer, and separate initialization-selection and optimizer tasks around that backend rather than proposing a replacement evolutionary controller.
