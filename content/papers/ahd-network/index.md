---
id: ahd-network
short_title: "AHD-Network"
title: "Automated Heuristic Design for Network Operations"
authors:
  - "Reza Namvar"
  - "Jose Gallego"
  - "Jose A. Ayala-Romero"
  - "Livia Elena Chatzieleftheriou"
  - "Andres Garcia-Saavedra"
  - "Albert Banchs"
  - "Marco Fiore"
year: 2026
date: 2026-05-27
venue: arXiv
paper_url: https://arxiv.org/pdf/2605.28197
institutions:
  - imdea-networks
  - uc3m
  - nec
  - tu-delft
primary_dimension: scope
dimensions:
  - scope
  - design-object
  - feedback
problems:
  - "Low-Density Parity-Check Decoding"
featured: false
summary: "This work transfers LLM-based automated heuristic design into network operations and tests it on low-density parity-check decoding."
---

## Why it matters

Network heuristics are embedded in production systems and are difficult to redesign safely. The paper examines which parts of an AHD loop must change when evaluation is noisy, expensive, and tied to systems constraints.

## Core method

The authors map the AHD workflow onto a 5G decoding task and discuss integration issues such as domain representation, noisy measurements, and incomplete implementations. Initial generated heuristics reach parity with established production solutions.

## Contributions

- A concrete integration study for AHD in networking.
- A production-oriented discussion of evaluation and deployment constraints.
- An initial LDPC-decoding implementation and comparison.

## Limitations and extensions

The current study is an early networking case study rather than a broad benchmark. Repeated evaluations on live network traces and stronger safeguards for deployment are natural next steps.
