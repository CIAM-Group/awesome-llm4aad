---
id: calm
short_title: "CALM"
title: "CALM: Co-evolution of Algorithms and Language Model for Automatic Heuristic Design"
authors:
  - "Ziyao Huang"
  - "Weiwei Wu"
  - "Kui Wu"
  - "Jianping Wang"
  - "Wei-Bin Lee"
year: 2025
date: 2025-05-18
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2505.12285
code_url: https://github.com/whxru/CALM
institutions:
  - cityu-hk
  - seu
  - uvic
  - hon-hai-research-institute
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "CALM co-evolves candidate algorithms and the language model that proposes them, combining verbal and numerical guidance."
---

## Why it matters

Prompt-based AHD changes the text shown to a fixed generator but never teaches the generator from accumulated evaluations. CALM asks whether the LLM itself can adapt online so that high-quality heuristic regions become more likely under its proposal distribution.

## Core method

CALM maintains an evolutionary loop for executable heuristics while periodically updating a local 7B model with reinforcement learning. Verbal guidance comes from selected candidates and prompts; numerical guidance comes from evaluated solution quality. A changing model proposes the next population, and that population supplies rewards for later model updates.

The system runs locally with 4-bit quantization on a single 24 GB GPU. Across several optimization tasks, it outperforms verbal-only baselines and reports competitive results against methods using substantially larger API models.

## Contributions

- Couples population evolution with online adaptation of the generator.
- Uses task fitness as numerical model feedback alongside verbal prompting.
- Demonstrates a locally trainable 7B alternative to larger fixed API models.

## Strengths and limitations

Updating the generator can amortize lessons across later samples and reduces dependence on proprietary APIs. Online RL may overfit noisy design instances and makes comparison harder because training compute becomes part of the search budget.

## What to improve

Measure forgetting and cross-task transfer, include total GPU energy and wall time, and study replay or regularization that preserves general code capability during specialization.

## Connections

CALM moves adaptation into model weights. AAD Fine-tuning learns from offline preference pairs, whereas CALM interleaves reinforcement updates with the active evolutionary run.
