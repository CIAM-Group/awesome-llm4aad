---
id: muse
short_title: MUSE
title: 'MUSE: Multi-Level Memory with Selective Runtime Injection for Scientific Coding Agents'
authors:
  - Haoran Jin
  - Defu Lian
  - Xiting Wang
  - Hong Xie
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.38332
code_url: https://github.com/hr-jin/MUSE
institutions:
  - university-science-technology-china
  - state-key-cognitive-intelligence
  - renmin-university
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - Numerical Solver Generation
  - GPU Kernel Optimization
  - Scientific Software Repair
featured: false
summary: Supplies scientific coding agents with frozen multi-level experience and selectively injects implementation advice during tool execution.
---

## Why it matters

A problem-level memory search may miss a useful numerical or implementation warning that becomes relevant only after code is written.

## Core method

Completed source attempts yield approach lessons and implementation lessons linked to their code and observed outcomes. Consolidation builds a global bank; all banks are frozen before testing. Each target starts with global guidance and five problem-matched approaches.

After designated tool returns, four retrieval routes query implementation lessons, historical submissions, and errors using the current message, arguments, and output. Duplicate sources and already supplied references are excluded. A tool-free LLM gate selects at most one source, adds a concrete review suggestion, or injects nothing. The coding agent's weights and tool interfaces are unchanged. Hidden final assessments are not fed back to the agent.

## Contributions

- Connects task-level planning memory with operation-level checks.
- Separates verified outcomes from suggested alternatives and evaluates both successful and failed source experience.

## Strengths and limitations

Four benchmarks cover PDE solvers, kernels, and scientific repository repair. Gate and memory-level ablations support the design, and kernel memory transfers across two benchmarks. Results use one agent/model configuration and frozen banks; continual updates and broader transfer remain untested.

## What to improve

Report retrieval/gating overhead against gains, test additional backbones, and evaluate how outdated numerical or library assumptions are retired.

## Connections

[LabBook](../labbook/index.md) updates memory from the current discovery run and retrieves exact experiments before each new program. MUSE freezes a bank built from prior tasks, then gates implementation advice after tool returns. They place experimental memory at different points in the coding process.

[EvoMem](../evomem/index.md) curates provenance-backed lessons from past program-evolution jobs and retrieves advice before mutations. MUSE extracts lessons from successful and failed coding trajectories, then selectively injects implementation checks after tool returns.

Both gate external evidence before it influences further coding. [EvoDuet](../evoduet/index.md) makes a retrieval decision before program mutation, choosing no retrieval, stored documents or a new web-query optimization loop. MUSE instead inspects designated tool returns and selectively injects at most one source from a frozen experience bank. The comparison concerns the timing and source of knowledge intervention, not whether either system has memory.
