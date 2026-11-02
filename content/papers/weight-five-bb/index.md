---
id: weight-five-bb
short_title: "Weight-Five BB"
title: "Large Language Model-Guided Discovery of Weight-Five Bivariate Bicycle Codes"
authors:
  - "Juan Cruz-Benito"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.06623
code_url: https://github.com/qiskit-community/qcode-discovery
institutions:
  - ibm-research
primary_dimension: scope
dimensions:
  - scope
  - design-object
  - feedback
problems:
  - "Quantum Error-Correcting Code Discovery"
  - "Exact Distance Certification"
featured: false
summary: "Evolves polynomial-tuple generator programs for weight-five quantum codes and audits their outputs for exact distance, equivalence, and connected components."
---

## Why it matters

Promising estimated code parameters may hide weak distance bounds, repeated presentations, or disconnected copies of smaller codes.

## Core method

Four 300-iteration OpenEvolve campaigns evolve Python functions generating polynomial tuples for bivariate bicycle and perturbed bicycle codes. Exact rank and family constraints screen outputs before staged decoder-based distance estimates guide fitness.

Post-search analysis adds exhaustive low-weight exclusion, logical witnesses, and exact MILP certificates where available. Canonical graph signatures merge presentations, while a basis-independent connectivity analysis reduces repeated components before frontier comparisons. The evolved artifacts are generator programs; quantum codes are their outputs.

## Contributions

The catalogue contains 1,142 retained proposals, including 1,081 attributed to generated programs. Exact connected CSS realizations include [[96,4,10]], [[140,6,10]], and [[180,4,14]]. Archive comparisons distinguish equivalence, shared parameters, and newly supplied distance evidence rather than calling every point novel.

## Strengths and limitations

Among logged positive-distance CSS proposals, 87.18% certify distance at least five, versus 72.50–74.26% in stratified random controls. Controls cover more connected classes. Missing failed campaign calls and repeated observations prevent equal-attempt or equal-compute yield claims. Presentation equivalence is narrower than full code equivalence; physical decoding performance is untested.

## What to improve

Log all attempts, search connected components directly, and compare exact certification and circuit-level costs under matched budgets.

## Connections

Both this study and [FunSearch](../funsearch/index.md) evaluate programs that construct mathematical objects. The feedback differs: weight-five code search uses staged distance estimates followed by selective exact certification, so a search score is not itself the final certificate. The later [EAQECC Families](../eaqecc-families/index.md) study instead emphasizes researcher-led infinite-family generalization and a separate formal algebraic certificate.
