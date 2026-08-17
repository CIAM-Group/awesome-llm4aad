---
id: aad-ft
short_title: "AAD Fine-tuning"
title: "Fine-tuning Large Language Model for Automated Algorithm Design"
authors:
  - "Fei Liu"
  - "Rui Zhang"
  - "Lin, Xi"
  - "Zhichao Lu"
  - "Qingfu Zhang"
year: 2025
date: 2025-07-13
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2507.10614
code_url: https://github.com/RayZhhh/dpo-aad
institutions:
  - cityu-hk
  - xjtu
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Automatic Algorithm Design"
featured: false
summary: "This study fine-tunes language models for algorithm design using diversity-aware sampling and preference optimization."
---

## Why it matters

AAD usually treats a pretrained code model as a fixed mutation operator. The paper asks a more basic question: can evaluation traces from algorithm search train a model that proposes better algorithms, and can that training transfer beyond the task that produced the data?

## Core method

The pipeline first runs AAD to collect candidate programs with measured fitness. Diversity-Aware Rank-based Sampling avoids constructing preference data only from near-duplicate elites: it combines performance rank with code diversity when selecting preferred and rejected pairs. Direct Preference Optimization then teaches Llama-3.2-1B-Instruct and Llama-3.1-8B-Instruct to favor stronger algorithm designs.

Evaluation distinguishes in-domain improvement from transfer to unseen design tasks. Ablations compare sampling policies and model scales, making the paper an analysis of data construction as much as of fine-tuning.

## Contributions

- A fitness-grounded preference-data pipeline specialized for executable algorithm design.
- Diversity-aware pair selection that reduces redundant supervision.
- Evidence on both small and medium open models, with cross-task evaluation.

## Strengths and limitations

Preference optimization turns expensive evaluations into reusable model capability and the released data/code improve reproducibility. The learned preference is still tied to the candidate distribution and evaluator that generated the pairs; it may reward stylistic proxies or fail when task interfaces change substantially.

## What to improve

Study iterative data collection, evaluator-noise robustness, and whether behavior-based diversity is a better sampling signal than textual code distance. Report the evaluation cost required to amortize fine-tuning against stronger prompted models.

## Connections

Unlike CALM, which updates the generator online during search, this work builds preference pairs from AAD traces and performs an explicit DPO training stage. Both shift learning from prompts into model weights.
