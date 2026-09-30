---
id: quantforge
short_title: QuantForge
title: "QuantForge: Discovering Residual Decompositions for MXFP4 Post-Training Quantization"
authors:
  - Qiulin Shang
  - Zhoutong Wu
  - Jie Hu
  - Kun Yuan
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.34680
institutions:
  - pku
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - Post-Training Quantization
featured: false
summary: Turns controlled experiments about quantization errors into checked program revisions, discovering a staged MXFP4 quantizer.
---

## Why it matters

A quantizer's score does not identify why an edit helped. Coordinate transforms, legal low-bit encoding, and downstream residual correction interact, so a mistaken explanation can send the next edit in the wrong direction.

## Core method

QuantForge maintains two records: useful executable programs and unresolved explanations of their remaining errors. Before an experiment, it records competing explanations and their predicted responses to controls. It then selects a low-cost set of comparisons that distinguishes those predictions under a frozen evaluation contract.

The result is compiled into a requirement for a successor program. Changed code and an execution probe check whether that requirement was implemented. A successful program can be retained even if its original explanation is rejected. Remeasuring the revised program determines the next unresolved error.

The resulting HiRes quantizer combines coordinate shaping, legal code-assignment refinement, and attention/MLP path correction, always measuring residuals after earlier stages. Search experiments compare four feedback schemes at 240 evaluator calls; QuantForge spends some calls on controls and compliance checks instead of new candidates.

## Contributions

- Distinguishes program selection from validation of the explanation guiding its revision.
- Provides controlled-search and post-discovery component ablations, plus a frozen quantizer tested across model families.

## Strengths and limitations

The matched-budget study reports better held-out transfer despite fewer newly evaluated programs. However, MXFP4 is simulated in PyTorch: native-kernel latency, throughput, and memory savings are not demonstrated. The ability to formulate distinguishing controls is also specific to the available quantization interface.

## What to improve

Measure end-to-end hardware costs of HiRes and test whether the same evidence-to-code procedure helps other algorithm families where causal controls are harder to construct.

## Connections

[ReEvo](../reevo/index.md) turns performance comparisons into natural-language reflection. QuantForge takes a different feedback route: pre-registered competing explanations, executed controls, and checked implementation obligations. This connects two specific forms of feedback, without claiming direct method inheritance.
