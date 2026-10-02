---
id: kernelzero
short_title: KernelZero
title: "KernelZero: Co-Evolving Proposer and Coder for Continuously Improved GPU Kernel Generation"
authors:
  - Changxin Ke
  - Rui Zhang
  - Zixiang Fang
  - Zhenghong Li
  - Yuanbo Wen
  - Jiashuo Shen
  - Shuo Wang
  - Jiaming Guo
  - Ling Li
  - Qi Guo
  - Yunji Chen
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.33074
institutions:
  - cas-ict
  - university-chinese-academy-sciences
  - cas-software
  - cas-ai-industries
primary_dimension: search
dimensions:
  - search
  - feedback
  - scope
problems:
  - GPU Kernel Generation
  - CUDA Optimization
  - Triton Optimization
featured: false
summary: Alternately trains task-proposing and kernel-coding models, using capability-matched Torch modules and correctness-gated speed rewards.
---

## Why it matters

Fixed kernel datasets can become too easy or too hard as a coder improves, while rewarding speed before correctness encourages invalid kernels.

## Core method

The proposer receives API sets sampled from realistic co-occurrence patterns and generates Torch modules. Syntax/interface checks, execution, and numerical-stability tests reject unusable tasks. Its reward peaks when roughly half of the coder's sampled implementations are correct, encouraging challenges near the current capability boundary rather than trivial or impossible modules.

The coder is first distilled using compiler-inspired tiling, fusion, pipelining, and reordering principles. Correctness-aware GRPO then rewards valid CUDA/Triton implementations, activating the performance term only when group-level correctness is sufficiently reliable. Alternating proposer and coder updates changes model weights and the training curriculum; this is not simply inference-time mutation of one fixed kernel population.


## Contributions

Couples adaptive training-task generation with an explicit correctness-before-speed mechanism.

## Strengths and limitations

CUDA and Triton evaluations distinguish correctness from faster-than-reference success. Randomized equivalence tests remain finite, hardware and operator distributions constrain transfer, and training cost must be separated from deployment inference cost.

## What to improve

Test unseen shapes, numerical corner cases, and different GPUs, and report curriculum construction plus reinforcement-learning cost alongside final pass and speed metrics.

## Connections

[PIAC](../piac/index.md) also adapts generated tasks to weaknesses of the current solver. PIAC evolves heuristic portfolios using perturbation-based improvement potential; KernelZero trains a coder using tasks near a measured correctness boundary. This is a curriculum-feedback contrast, not implementation reuse.
