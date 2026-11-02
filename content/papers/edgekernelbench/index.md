---
id: edgekernelbench
short_title: "EdgeKernelBench"
title: "EdgeKernelBench: Unified LLM-Driven Kernel Generation for Edge Backends"
authors:
  - "Yuhua Zheng"
  - "Xueyi Chen"
  - "Xinze Zou"
  - "Xin Li"
  - "Haoji Hu"
  - "Huan Wang"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.24648
institutions:
  - westlake
  - zhejiang
primary_dimension: design-object
dimensions:
  - design-object
  - scope
  - feedback
problems:
  - "Edge Kernel Generation"
  - "Layered Compiler-IR Search"
featured: false
summary: "Uses a shared graph–tensor–schedule IR and layered agent search to compare correctness and speed across heterogeneous edge backends."
---

## Why it matters

Backend-specific source languages make it difficult to share algorithmic decisions or compare generated kernels across constrained edge devices.

## Core method

EdgeKernelBench defines 331 canonical tasks spanning operators, subgraphs, and compact models. A unified IR exposes graph, tensor, and schedule decisions, while a compiler interface handles backend lowering. The reference TVM path performs legalization rather than silently optimizing the agent's decisions.

The Layered Edge Kernel Agent (LEKA) projects context to the active level, keeps candidate histories, and routes hardware evidence to the responsible layer. Progressive lowering fixes upper-level choices before refining lower-level ones. Evaluation covers mobile CPU, Jetson GPU, and Mali GPU backends.

## Contributions

Best single-attempt correctness is 64.5%, but only 25.5% of outputs beat the reference. On the 69-task agent subset, LEKA reaches 43.5% Fast@1.0 versus 26.1% for Claude Code under the same base model and optimization budget.

## Strengths and limitations

Shared semantics expose the correctness–performance gap across backends, and the agent comparison controls key budgets. However, the agent subset is smaller than the benchmark, supported compiler paths constrain the design space, and results do not establish portability to NPUs or heterogeneous execution within one program.

## What to improve

Test unseen backend versions, broaden end-to-end agent workloads, and measure the performance cost of fixing upper-level decisions too early.

## Connections

[TileCas](../tilecas/index.md) preserves editable alternatives across high- and low-level representations, including rollback. LEKA instead organizes search through a common layered IR and progressive lowering, exposing a concrete trade-off between revisitable abstractions and structured backend portability.
