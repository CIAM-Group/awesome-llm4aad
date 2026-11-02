---
id: autosella
short_title: AutoSella
title: 'Optimizing the Optimizer: Language Models Discover Faster Molecular Relaxation Algorithms'
authors: [Artem Tsypin, Vladimir Deshchenya, Kuzma Khrabrov, Denis Potapov, Maxim Radchenko, Artur Kadurin, Michael G. Medvedev]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.06577
code_url: https://github.com/vdeshchenya/autosella
institutions: [axxx, itmo, zelinsky-institute]
primary_dimension: feedback
dimensions: [feedback, design-object, scope]
problems: [Molecular Geometry Optimization, Numerical Optimizer Discovery]
featured: false
summary: Rewrites the Sella molecular optimizer to reduce force evaluations, admitting changes only when training and validation costs improve without losing energy recovery.
---

## Why it matters

Force evaluations dominate expensive molecular relaxation. A seemingly faster optimizer can merely stop at a worse geometry, so improvement must preserve scientific fidelity rather than minimize iteration counts alone.

## Core method

An agent edits a consolidated Sella implementation while a protected evaluator measures per-molecule relative force calls, energy recovery, convergence, and failures. Each iteration proposes one coherent change from the current champion and reads both numerical records and narrative history. Crashes and rejected mechanisms remain in the record, not the accepted program.

Candidates must reduce training force cost without errors or reduced mean energy recovery. The same gates then apply on a validation split before promotion. Two independent 66-hour searches produce AutoSella-F and AutoSella-A. Important changes include curvature models and coordinates, disconnected-fragment handling, and reuse of previous gradient information. Selected optimizers are tested on new molecules and potentials not used for discovery.

## Contributions

AutoSella-F reduces force calls across the reported held-out molecular sets and transfers from GFN2-xTB search to GFN-FF and DFT evaluation. Ablations remove groups of optimizer changes to identify their contribution rather than attributing all gains to more proposals.

## Strengths and limitations

Energy gates explicitly discourage premature stopping. Mean recovery is not a per-molecule fidelity guarantee; geometry checks are supplementary. The validation split is repeatedly queried during selection. AutoSella-A regresses on solvated PubChem, so gains are not uniform across variants or chemical domains.

## What to improve

Use fresh confirmation splits, report molecule-level failure and fidelity distributions, and compare force-call savings with total wall time and discovery amortization.

## Connections

The studies expose different parts of a scientific optimization pipeline to code search. AutoSella edits the molecular optimizer while benchmark starting structures remain fixed. [ADAPT](../adapt-science/index.md) evolves both the policy that selects an initialization from historical designs and the optimizer that follows it. This compares the boundary of the design space, not performance across the two scientific tasks.
