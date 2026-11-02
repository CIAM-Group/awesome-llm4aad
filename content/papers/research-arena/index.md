---
id: research-arena
short_title: "Auto-Research Arena"
title: "Auto-Research Arena: Benchmarking and Advancing Auto-Research in Language Modeling"
authors:
  - "Xi Chen"
  - "Chongjian Ge"
  - "Yiran Xu"
  - "Yiqun Mei"
  - "Henrik I. Christensen"
  - "Hao Tan"
  - "Ziwen Chen"
  - "Hanwen Jiang"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.35866
code_url: https://github.com/Auto-Research-Arena/auto-research-arena
institutions:
  - uc-san-diego
  - adobe-research
primary_dimension: feedback
dimensions:
  - feedback
  - scope
  - design-object
problems:
  - "Language Model Research"
  - "Research Harness Evaluation"
featured: false
summary: "Benchmarks executable language-model research across nine resource objectives while separately enforcing model-quality and non-target-resource constraints."
---

## Why it matters

A research harness that improves validation loss may not discover improvements in memory, data use, or inference latency. Changing the objective can expose different design ideas.

## Core method

A fixed language-modeling environment evaluates editable model, optimizer, training, and inference programs. Each of nine tracks minimizes one resource metric subject to validation BPB below 1.05, correctness, and track-specific resource limits. Every GPU-started experiment counts, including failures; the best recorded admissible candidate is reported even if the harness discards it.

Six LLM harnesses use two foundation models, with a restricted TPE baseline in one model group. Searches receive 100 charged experiments, with up to 600 seconds of candidate training on an A100. Sequential Search retains one incumbent; Beam Search retains several directions. Logged histories support cross-objective reuse and longer-training checks.

## Contributions

The benchmark separates admissibility from improvement and measures how objectives shape both harness rankings and reusable program changes. A simple sequential baseline ranks second with both backbones.

## Strengths and limitations

Independent measurement and charged failures improve comparability. Selected discoveries transfer beyond ten-minute training, but some advantages disappear by sixty minutes as horizon-specific schedules decay. Small language models, fixed seeds, noisy system timings, and interpretive idea categories limit broader scientific-novelty claims.

## What to improve

Repeat searches and retraining across seeds, report token and GPU costs together, and test larger models without retuning the discovered programs.

## Connections

[AI4AI-Bench](../ai4ai-bench/index.md) separates development from final algorithm verification. Arena instead separates quality admissibility from the resource being optimized. Its appendix explicitly places evaluator-guided research in the program-search context of [AlphaEvolve](../alphaevolve/index.md).
