---
id: comrsi
short_title: ComRSI
title: Recursive Code Evolution for Task-Oriented Semantic Communications
authors: [Yan Gong, Zheng Chu, Wei Koong Chai, Hari Mohan Pandey, Jingrui Hou, Miao Zhang, Yuanjian Li, Pei Xiao]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.29641
institutions: [bournemouth, nottingham-ningbo, wuhan-university, chongqing-jiaotong, xjtlu, surrey]
primary_dimension: design-object
dimensions: [design-object, feedback, search]
problems: [Semantic Communication, Accuracy-Rate-Compute Optimization]
featured: false
summary: Recursively edits executable communication systems while a protected evaluator tests accuracy, channel use, computation, and statistically gated improvements.
---

## Why it matters

Semantic communication usually optimizes weights inside a fixed architecture. Moving computation across the transmitter–receiver boundary or changing the transmitted representation requires changing the program itself.

## Core method

The LLM receives the accepted encoder, channel adapters, decoder, loss, training policy, diagnostics, and proposal history. It writes four candidate revisions per generation. Valid candidates receive proxy training; the top two are trained from scratch with three seeds. A score combines accuracy over public SNRs with logarithmic rate and FLOP penalties.

Acceptance requires both a minimum score improvement and a positive paired-bootstrap lower bound. Only accepted code and configuration become the next parent; trained weights are never inherited. Protected channels, manifests, budgets, integrity checks, and withheld post-search tests constrain evaluator manipulation. Rejected proposals still contribute textual history.

## Contributions

The original CIFAR-100 lineage discovers an attention-pooled 32-symbol design, compared with 256 symbols initially. Ten-search repetitions distinguish executable inheritance from textual history and memoryless proposals; transfer includes fresh training on Tiny-ImageNet and withheld fading channels.

## Strengths and limitations

The repeat study supports an advantage over memoryless proposals, but not a statistically conclusive advantage over the history-equipped non-recursive agent. Equal training steps do not imply equal FLOPs or wall time. Simulated image-classification channels omit practical modulation, estimation, latency, and energy costs.

## What to improve

Increase independent search repetitions, evaluate digital communication and adaptive rates, and account separately for transmitter and receiver deployment costs.

## Connections

Both reserve repeated training for promising code candidates, but use that evidence differently. [RLDiscover](../rldiscover/index.md) selects its final program by the highest observed full-budget fitness over repeated seeds. ComRSI tests each candidate against the incumbent on paired validation images after three fresh training runs, requiring both a minimum score gain and a positive bootstrap lower bound before replacement. This distinguishes ranking by repeated measurements from an uncertainty-aware acceptance gate.
