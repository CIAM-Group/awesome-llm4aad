---
id: gradaslim
short_title: GrAdaSlim
title: 'From DNA Design to DNA Slimming: Auditable Agentic Discovery of a Deletion-Only Designer'
authors: [Joel Shor]
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.40143
institutions: [allen-institute, move37-labs]
primary_dimension: design-object
dimensions: [design-object, feedback, scope]
problems: [DNA Slimming Algorithm Discovery, Deletion-Only Sequence Optimization]
featured: false
summary: Evolves a DNA-deletion designer whose returned source indices make length and subsequence constraints independently checkable before activity scoring.
---

## Why it matters

Shortening regulatory DNA is not ordinary fixed-length sequence design. A legitimate deletion-only algorithm must preserve source order and cannot obtain a better predicted activity by silently substituting or inserting bases.

## Core method

ERA starts from a GrAdaBeam designer and rewrites its executable search procedure. Each candidate must return an exact-length sequence and strictly increasing source indices; the evaluator reconstructs the sequence and rejects invalid outputs. Programs are scored on ATAC and MYC starts using target-specific BPNet oracles and low-activity embedding backgrounds, with failures receiving worst-case fitness.

The discovered GrAdaSlim maintains position salience. It rapidly closes the length gap by sampling deletions from low-salience positions, then refines exact-length index sets through membership swaps and local/block shifts. Better candidate batches reinforce retained positions, neighboring positions share some credit, simulated annealing permits temporary regressions, and an archive preserves the best valid sequence.

## Contributions

Five unseen transcription-factor targets evaluate 400- and 100-base outputs under matched wall time. At 400 bases, all target-specific paired intervals favor GrAdaSlim over greedy deletion. At 100 bases, four intervals include zero and one favors greedy deletion.

## Strengths and limitations

The index contract verifies deletion-only behavior independently of oracle quality. Five starts and one optimizer seed per target provide limited uncertainty resolution. Optimization and evaluation use the same predictive oracle; retained activity above one may reflect oracle exploitation or artificial deletion junctions, not biological preservation. There is no wet-lab validation.

## What to improve

Use independent activity predictors and assays, increase starts and optimizer seeds, and test a broader length–activity curve with junction-aware constraints.

## Connections

[AutoNovo](../autonovo/index.md) also uses ERA to search sequence-design programs, but its ordinary sequence editing and cross-oracle objective differ from GrAdaSlim's exact deletion contract and same-oracle activity evaluation. Algorithm validity and biological transfer are separate questions.
