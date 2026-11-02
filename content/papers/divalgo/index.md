---
id: divalgo
short_title: "DivAlgo"
title: "DivAlgo: A systematic evaluation of algorithmic diversity for code generation models"
authors:
  - "Anubhav Jangra"
  - "Smaranda Muresan"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.19157
code_url: https://github.com/anubhav-jangra/divalgo
institutions:
  - columbia
  - barnard-college
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - "Algorithmic Diversity Evaluation"
  - "Code Generation"
featured: false
summary: "Builds a human-grounded algorithmic-diversity benchmark and distilled similarity metric to test whether generated solutions cover distinct computational strategies."
---

## Why it matters

Correct programs can repeatedly instantiate one familiar algorithm. This matters both for diversity-preserving search and for interpreting claims of algorithmic originality.

## Core method

DivAlgo filters correct C++ submissions from CodeContests+ using dependency-graph and embedding distances, then LLM-ensemble pair judgments. Its 7,623 problems include two representative solutions and retained human pools. An ontology separates programming paradigms, techniques, and data structures.

A distilled code encoder approximates algorithmic similarity. The Vendi score of its similarity matrix measures population diversity; ontology overlap measures coverage of the two references. Twenty-four models are tested with ordinary sampling, higher temperature, verbalized sampling, iterative constraints, and human-strategy guidance. Correctness and matched sample sizes remain separate controls.

## Contributions

The benchmark combines fine-grained strategy labels with a scalable population metric and shows that stronger diversity prompting helps more than merely pooling model outputs.

## Strengths and limitations

Unconditioned generations recover only a fraction of human diversity; the best tested strategy reaches about 70.5% on a matched 25-sample subset. This is a metric- and subset-specific result. LLM-derived labels, imperfect encoder agreement, C++ concentration, and two-reference coverage constrain interpretation; a Vendi score is not a literal count of proven distinct algorithms.

## What to improve

Expand expert validation and reference families, test more languages, and measure whether diversity improvements increase downstream search quality.

## Connections

DivAlgo explicitly discusses and validates against [BehaveSim](../behavesim/index.md). It trades execution-trace specificity for scalable static embeddings and ontology labels, enabling broader coverage while introducing a different approximation.
