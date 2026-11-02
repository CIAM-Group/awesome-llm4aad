---
id: kernel-proof
short_title: "Kernel Proofs"
title: "Proving LLM-Generated GPU Kernels Correct and Safe: Floating-Point Verification in Lean and VerCors"
authors:
  - "Archibald Browne"
  - "Eugene Lee"
  - "Cristopher Salvi"
year: 2026
date: 2026-10-01
venue: "NeurIPS Workshop on AI for Verifiable Coding"
paper_url: https://arxiv.org/pdf/2610.24548
institutions:
  - imperial-college
  - logos-research
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - "GPU Kernel Verification"
  - "Floating-Point Semantic Equivalence"
featured: false
summary: "Feeds Lean semantic proofs and VerCors parallel-safety checks back to kernel generation, with explicit translation and floating-point assumptions."
---

## Why it matters

Passing selected numerical tests does not establish that a generated parallel kernel implements its specification for every supported input.

## Core method

A deterministic translator turns a supported PyTorch FX specification into TorchLean. Generated CUDA is translated through a restricted Clang-based path into Velvet's sequential model. The agent constructs Lean proofs of floating-point semantic equivalence and separately supplies VerCors permissions and annotations for race freedom and memory safety.

Failed proof attempts or counterexamples guide revisions. The two verification branches are complementary: the sequential semantic argument assumes race freedom, while the parallel checker addresses that obligation. Transcendental operations use explicit shared-behavior assumptions rather than unrestricted real-number identities.

## Contributions

Across thirty supported KernelBench tasks, two model configurations jointly discharge both verification branches on 11 and 22 tasks, respectively. The study demonstrates proof-guided generation over floating-point computations rather than only idealized arithmetic.

## Strengths and limitations

Guarantees are conditional on the modeling assumptions, supported language subset, translators, and declared automation trust boundary. They are not a proof of the entire compiler or physical device. Import-failure retries differ from counted generation rounds; one campaign per configuration and no performance objective limit comparative claims.

## What to improve

Verify translation passes, reduce trusted automation and operation assumptions, and measure proof coverage and speed together on broader kernels.

## Connections

[D2K-Bench](../d2k-bench/index.md) checks generated kernels by execution and separately judges adherence to expert designs. Kernel Proofs checks semantic equivalence and parallel safety through formal obligations under stated assumptions. The comparison concerns what correctness evidence establishes, not which method produces faster kernels.
