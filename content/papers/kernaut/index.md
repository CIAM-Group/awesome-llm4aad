---
id: kernaut
short_title: Kernaut
title: Kernel Autoresearch for Open-Ended Model Discovery
authors: [Richard Cornelius Suwandi, Feng Yin, Kevin Murphy]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.10394
code_url: https://github.com/richardcsuwandi/kernaut
institutions: [cuhk-shenzhen, university-british-columbia]
primary_dimension: design-object
dimensions: [design-object, feedback, search]
problems: [Machine Learning Kernel Discovery, Gaussian Process Modeling]
featured: false
summary: Searches machine-learning kernel components under positive-semidefinite construction contracts, retaining behaviorally distinct candidates in a quality-diversity archive.
---

## Why it matters

A fixed kernel grammar limits discoverable inductive biases, but a numerical PSD test cannot establish that arbitrary covariance code is a valid kernel. These are machine-learning kernels, not GPU compute kernels.

## Core method

Agents generate feature maps, nonnegative spectral constructions, input transforms, or closure expressions. A trusted interpreter assembles their outputs into PSD-preserving kernels. Tiered acceptance checks execution, numerical behavior, and construction contracts, including determinism and consistency under input-batch changes. The backend, not the agent, tunes declared numerical parameters.

Search alternates new roots and revisions of archive elites. MAP-Elites cells combine behavior niches, dimensional growth, and novelty bands. Centered normalized Gram-matrix fingerprints compare candidates with known and discovered kernels; near-duplicates receive soft penalties rather than unconditional rejection. Meta-validation selects one frozen program before sealed test evaluation.

## Contributions

The paper combines open component generation with algebraically controlled assembly. Experiments cover held-out black-box optimization families, forecasting, enzyme mechanisms, and glucose patients. Human refinement of a discovered kernel is reported separately from autonomous discovery.

## Strengths and limitations

Construction gives stronger validity evidence than sampled PSD checks. The guarantee still requires finite, dimension-correct, pure component outputs; runtime consistency checks are not universal proofs of arbitrary Python purity. The optimization benchmark is small-data and at most eight-dimensional, and some programs fail at dimension sixteen.

## What to improve

Enforce dimension-generic interfaces, strengthen purity restrictions, and test larger datasets and mixed-input domains without weakening the validity contract.

## Connections

[LeanPlan](../leanplan/index.md) accepts a domain heuristic only with Lean-checked consistency and goal-awareness proofs under an explicit certificate. Kernaut instead assembles kernels through PSD-preserving construction contracts, supplemented by checks on component purity and interfaces. The comparison is proof generation versus constrained construction, not an equivalence of guarantees.

Both check that changing unrelated batch members does not change a preserved result. Kernaut uses purity-constrained covariance components and consistency tests within a numerical tolerance under permutation, subsetting, extension and duplication. [BIEvolve](../bievolve/index.md) checks dependencies from batch variables into protected GPU mechanisms and requires bitwise output agreement across matched batch contexts. This contrasts interface-based purity checks with targeted dependency and bitwise checks.
