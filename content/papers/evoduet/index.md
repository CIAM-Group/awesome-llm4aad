---
id: evoduet
short_title: EvoDuet
title: "EvoDuet: Bilevel Co-Evolution of Web Searching and Task Solving for Scientific Discovery"
authors:
  - "Young-Jun Lee"
  - "Jinheon Baek"
  - "Soyeong Jeong"
  - "Minki Kang"
  - "Seungyeon Jwa"
  - "Jonghyun Choi"
  - "Seungho Han"
  - "Dongyeop Kang"
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.40340
code_url: https://github.com/Open-Galapagos/EvoDuet
institutions:
  - university-minnesota
  - kaist
  - seoul-national-university
  - hanyang-university
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - Scientific Algorithm Discovery
  - Quantum Compilation
  - Mathematical Optimization
  - Signal Processing
featured: false
summary: "Couples program evolution with a gated query-refinement loop that selects external documents using predicted utility and records their measured downstream outcomes."
---

## Why it matters

A search can exhaust what its model and current population know. Adding a web tool is insufficient if successive queries keep returning the same material.

## Core method

A knowledge-gap gate chooses new retrieval, reuse of stored documents, or no retrieval. In the retrieval branch, an inner loop refines query batches and ranks documents by the candidate score the LLM predicts they could enable. This inner loop does not execute a candidate for every query.

The outer evolutionary scaffold generates and evaluates actual programs using the retained documents. With parallel generation, retrieval/reuse branches generate multiple children, while the no-retrieval branch generates one; only the best valid child reaches population selection. Documents are stored with actual downstream scores. Model weights remain fixed, and hypothetical evidence scores never replace program evaluation.

## Contributions

- Makes external information acquisition an adaptive part of program search.
- Separately analyzes oracle documents, query evolution, retrieval gating, and parallel candidate generation.

## Strengths and limitations

The 21-task paired evaluation improves results for two stronger backbones but hurts the smaller Qwen model overall. Main cross-task plots use best-of-four runs, not average-run performance. Some best programs refine public artifacts; retrieval-assisted improvement must not be presented as discovery from scratch. Algorithm-engineering gains are inconsistent.

## What to improve

Calibrate document-value predictions, report average-run cost and reliability, and audit provenance and novelty of reused artifacts.

## Connections

Compared with [LabBook](../labbook/index.md), which retrieves exact internal experiments, EvoDuet optimizes access to external knowledge. [MUSE](../muse/index.md) provides another contrast: frozen implementation memories are gated during execution rather than web queries being evolved around a candidate program.
