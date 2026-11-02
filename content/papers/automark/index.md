---
id: automark
short_title: AutoMark
title: 'AutoMark: Enabling Autoresearch to Discover Better LLM Watermarks'
authors: [Thibaud Gloaguen, Robin Staab, Martin Vechev]
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.37310
code_url: https://github.com/eth-sri/automark
institutions: [eth-zurich]
primary_dimension: feedback
dimensions: [feedback, design-object, search]
problems: [Language Model Watermark Algorithm Discovery]
featured: false
summary: Searches watermark algorithms behind statistical validity screens, evaluating detectability, output quality, and attack robustness rather than raw detection success alone.
---

## Why it matters

A generated watermark can appear detectable by producing biased text or miscalibrated false positives. Automated search needs explicit validity criteria before rewarding robustness or detection power.

## Core method

Agents implement context seeding, watermark scores, logits transformations, and detectors inside a vLLM-based library. Statistical screens seek violations of distortion-freeness, false-positive calibration averaged over random keys, and a stronger bound on the frequency of poorly calibrated individual keys.

Each agent receives prior code and results plus public evaluation instructions. Submitted schemes undergo private-configuration verification and evaluation; results become the next agent's history. After an initial four-submission allowance, later agents receive one submission, encouraging distinct directions. Detection, text quality, and attacks including deletion, substitution, paraphrasing, and backtranslation guide discovery. Selected schemes receive a changed prompt/model/attacker evaluation and human component analysis.

## Contributions

The framework produces over fifty schemes and identifies distinct designs such as robustness-focused ConcordMark and quality-focused RotationFirst. It also demonstrates why soundness averaged across keys is weaker than reliable behavior for a deployed fixed key.

## Strengths and limitations

Validity tests expose shortcuts that ordinary fitness optimization can reward. Passing finite statistical screens is not a universal proof. Independent comparisons omit the additional per-key correction for baseline consistency, which must qualify their soundness interpretation. Security, multibit marking, and open-weight deployment properties are outside the evaluated scope; component ablations required human design.

## What to improve

Expand adversarial verification, evaluate fixed-key calibration prospectively, and measure detection quality under corrections and new language distributions.

## Connections

AutoMark cites [AlphaEvolve](../alphaevolve/index.md) when motivating evaluator-guided discovery, then studies the additional statistical safeguards needed for watermark search. Distribution preservation and false-positive controls are checked before detection and robustness scores are trusted. This is evaluation context, not implementation reuse.
