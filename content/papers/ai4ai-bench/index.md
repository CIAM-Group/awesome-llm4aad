---
id: ai4ai-bench
short_title: AI4AI-Bench
title: "AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement"
authors:
  - Yizhe Chi
  - Wenyi Li
  - Deyao Hong
  - Xiaoqiu Wang
  - Mingju Gao
  - Kaisen Yang
  - Bingxiang He
  - Youjie Zheng
  - Calvin Xiao
  - Qinhuai Na
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.20318
institutions:
  - einsia-navers
  - tsinghua
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
  - scope
problems:
  - Training Algorithm Design
  - Research Agent Evaluation
featured: false
summary: Benchmarks agents that rewrite training repositories, then measures the submitted algorithms through fixed, from-scratch reruns.
---

## Why it matters

A strong checkpoint or a faster development run does not show that an agent has improved the learning algorithm itself.

## Core method

Ten tasks freeze research repositories spanning training and model-transformation families. Agents receive a starting model and an inexpensive development proxy, with four hours on one B300 GPU. They submit modified source, not a claimed score or trained checkpoint. The submission is then rerun from scratch under the verification budget and a predetermined final evaluator unavailable during development.

Cross-task scoring maps an uninformative reference, the original repository, and an ideal metric value to fixed anchors. Separate code-diff analysis classifies changes to execution settings versus changes to objectives, supervision, update rules, or data. That classification uses another LLM and should be distinguished from the executable performance measurement.


## Contributions

Separates development from verification and makes the kind of algorithmic intervention a second evaluation axis alongside final performance.

## Strengths and limitations

Frozen reruns reduce dependence on retained checkpoints and unverified self-reported scores. Proxy–target mismatch, hardware budgets, normalization choices, and model-based diff labels all affect interpretation; success does not demonstrate a completed recursive self-improvement cycle.

## What to improve

Add expert audits of change categories, multiple rerun seeds, and task-level raw metrics so normalized averages do not hide failures.

## Connections

[When AI Designs AI](../when-ai-designs-ai/index.md) measures distance from human algorithmic designs. AI4AI-Bench instead categorizes which layer of a training procedure an agent changed; both separate performance from what was actually designed, using different operational definitions.
