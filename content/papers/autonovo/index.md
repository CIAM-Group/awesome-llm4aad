---
id: autonovo
short_title: AutoNovo
title: 'AutoNovo: Agentic Program Search Discovers Transferable Nucleic Acid Design Algorithms'
authors: [Joel Shor, Subhashini Venugopalan]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.16232
institutions: [allen-institute, move37-labs, google]
primary_dimension: feedback
dimensions: [feedback, design-object, scope]
problems: [Nucleic Acid Design Algorithm Discovery, Cross-Oracle Transfer]
featured: false
summary: Uses agentic tree search to rewrite sequence-design algorithms, with distinct optimization and evaluation oracles encouraging transfer beyond one predictive model.
---

## Why it matters

A DNA sequence can exploit artifacts of its design oracle. The question is whether searching the designer program itself can produce algorithms whose outputs transfer to independent predictors.

## Core method

The ERA harness expands a UCB-guided program tree. Each generated Designer stores a queryable oracle and a starting ACGT sequence, searches within a wall-clock budget, and returns its best sequence. Seeds reimplement established gradient and discrete designers. Crashes, forbidden exception handlers, and budget overruns incur penalties.

The outer search evaluates each program on three starting sequences. In most configurations it combines the designer's accessible oracle score with an orthogonal score hidden from the inner designer. Selected code is frozen before testing on twenty starts and alternate oracle roles. Discovered programs combine straight-through gradient updates, discrete incumbent preservation, and budget-aware restarts or sparse mutations.

## Contributions

A family of sixteen programs supplies the best observed means across three direct and six cross-oracle tasks; no single program wins everywhere. The study distinguishes transferring an algorithm to a new oracle from transferring its designed sequences to another predictor.

## Strengths and limitations

Some experiments withhold an oracle from both loops, but an oracle hidden only from the designer is still visible to outer selection. All evidence is in silico for one phenotype; it does not establish biological effectiveness. Code audits reveal oracle-identity shortcuts, stale gradients, missing random seeds, and an out-of-memory failure.

## What to improve

Evaluate independent biological assays, remove identity shortcuts, standardize reproducibility, and ablate the individual mechanisms responsible for transfer.

## Connections

[AlphaEvolve](../alphaevolve/index.md) makes execution scores the arbiter of program evolution. AutoNovo's concrete alternative is a nested evaluator: an evolved optimizer sees one oracle while outer program selection can use another, separating optimization success from transfer quality.
