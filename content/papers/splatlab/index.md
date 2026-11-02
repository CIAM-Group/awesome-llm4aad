---
id: splatlab
short_title: "SplatLab"
title: "SplatLab: Autonomous Scientific Discovery for 3DGS Research"
authors:
  - "Seemandhar Jain"
  - "Manmohan Chandraker"
year: 2026
date: 2026-10-01
venue: "NeurIPS"
paper_url: https://arxiv.org/pdf/2610.30468
institutions:
  - uc-san-diego
primary_dimension: scope
dimensions:
  - scope
  - search
  - feedback
problems:
  - "3D Gaussian Splatting Research"
  - "Executable Research Provenance"
featured: false
summary: "Combines verified 3DGS plugin scaffolds, island tournaments, falsification, and run-linked claims in an automated research workflow."
---

## Why it matters

Generating a plausible extension is easier than reproducing its baseline and supporting every reported comparison with executable evidence.

## Core method

SplatLab organizes 36 agent roles across research phases around a verified reproduction backbone. A seven-category 3DGS taxonomy and nine plugin hooks bound editable components. Literature and measured bottlenecks motivate proposals.

Eight islands apply mutation operators selected by a bandit. An Elo cascade moves from inexpensive idea screening to measured training performance; full evaluation is reserved for strong candidates. Verbal-gradient reflection revises proposals, while a standing falsifier tests stress conditions and penalizes failures. Commit hashes and run identifiers bind manuscript numbers to experiments, and unresolved claims block completion.

## Contributions

The reported collection contains sixteen manuscripts with target-relative PSNR improvements of 0.18–3.78 dB. The workflow combines reproducible scaffolds, adversarial testing, and cross-repository checks rather than treating manuscript generation as validation.

## Strengths and limitations

The results are domain-specific research campaigns, not a compute-matched comparison with human researchers. Seed coverage varies, reproduction engineering and GPU costs are substantial, and model-based manuscript judgments do not establish scientific novelty. A successful pipeline does not independently identify the contribution of every agent role.

## What to improve

Release complete cost-normalized runs, replicate all selected results across seeds and scenes, and separate expert novelty assessment from model-written review.

## Connections

SplatLab wraps [AlphaEvolve](../alphaevolve/index.md)-style editable program blocks in verified 3DGS plugin scaffolds and a domain taxonomy, linking evolved implementations to measured experiments and run-backed manuscript claims.

SplatLab explicitly adopts [ReEvo](../reevo/index.md)'s verbal-gradient idea, but sends rationales from measured 3DGS candidate comparisons to its ideator. The reflections guide new plugin ideas rather than ReEvo's original heuristic mutation step.
