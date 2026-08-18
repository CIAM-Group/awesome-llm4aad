---
id: magellan-autonomous-discovery-of-novel-compiler-optimization-heuristics
short_title: 'Magellan'
title: 'Magellan: Autonomous Discovery of Novel Compiler Optimization Heuristics with AlphaEvolve'
authors:
  - 'Hongzheng Chen'
  - 'Alexander Novikov'
  - 'N. Vu'
  - 'Hanna Alam'
  - 'Zhiru Zhang'
  - 'Aiden Grossman'
  - 'Mircea Trofin'
  - 'Amir Yazdanbakhsh'
year: 2026
date: 2026-01-01
venue: 'arXiv.org'
paper_url: https://arxiv.org/pdf/2601.21096
institutions:
  - google-deepmind
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - Automatic algorithm design
featured: false
summary: 'Modern compilers rely on hand-crafted heuristics to guide optimization passes. These human-designed rules often struggle to adapt to the complexity of modern software and hardware and lead to high maintenance burden.'
---

## Why it matters

Modern compilers rely on hand-crafted heuristics to guide optimization passes. These human-designed rules often struggle to adapt to the complexity of modern software and hardware and lead to high maintenance burden.

## Core method

The paper's abstract describes the following design loop:

> Modern compilers rely on hand-crafted heuristics to guide optimization passes. These human-designed rules often struggle to adapt to the complexity of modern software and hardware and lead to high maintenance burden. To address this challenge, we present Magellan, an agentic framework that evolves the compiler pass itself by synthesizing executable C++ decision logic. Magellan couples an LLM coding agent with evolutionary search and autotuning in a closed loop of generation, evaluation on user-provided macro-benchmarks, and refinement, producing compact heuristics that integrate directly into existing compilers. Across several production optimization tasks, Magellan discovers policies that match or surpass expert baselines. In LLVM function inlining, Magellan synthesizes new heuristics that outperform decades of manual engineering for both binary-size reduction and end-to-end performance. In register allocation, it learns a concise priority rule for live-range processing that matches intricate human-designed policies on a large-scale workload. We also report preliminary results on XLA problems, demonstrating portability beyond LLVM with reduced engineering effort.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: n Yuan, Xi Lin, Fu Luo, Zhenkun optimization. In Proceedings of the 23rd ACM SIGKDD international Wang, Zhichao Lu, and Qingfu Zhang. Evolution of heuristics: towards conference on knowledge discovery and data mining, pages 1487–1495, efficient automatic algorithm design using large language model. In 2017. Proceedings of the 41st Int

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
