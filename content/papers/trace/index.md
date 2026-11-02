---
id: trace
short_title: TRACE
title: 'TRACE: Tackling Real-World Resource Assignment Problems via Agentic Heuristic Design'
authors: [Jose A. Ayala-Romero, Andres Garcia-Saavedra, Xavier Costa-Perez]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.01887
institutions: [nec-labs-europe, i2cat, icrea]
primary_dimension: feedback
dimensions: [feedback, design-object, scope]
problems: [Dynamic Resource Assignment, Cloud Scheduling, Energy-Efficient Virtualized RAN]
featured: false
summary: Extends heuristic evolution with agents that turn execution logs into compact system insights and callable surrogate tools for resource-assignment policies.
---

## Why it matters

Processing affinity, queue behavior, and energy costs are often absent from the problem specification. Execution logs contain this information, but are too large and schema-specific to insert wholesale into mutation prompts.

## Core method

An EoH-style population loop evaluates assignment programs and accumulates their logs. At epoch boundaries, a reasoner sees the objective and log schema or excerpt, then proposes a distinct diagnostic hypothesis. A coder writes and runs schema-specific extraction code on the complete log buffer.

Workflow runs alternate textual insights and low-parameter surrogate models with callable prediction interfaces. A merge step rewrites concise system information, including tool signatures, for later heuristic-generation prompts. New heuristics may call these tools and are selected by end-to-end assignment cost. After a bounded number of successful extraction runs, knowledge freezes while evolution continues; the costly reasoner is invoked much less often than the lightweight generation model.

## Contributions

Synthetic cloud workloads and a measurement-driven 5G vRAN simulation test policies balancing latency, drops, and energy. The extraction workflow adds under 2% wall-clock overhead relative to the compared EoH generation budget and produces auditable system-aware rules.

## Strengths and limitations

Generated parsers adapt to different schemas and process logs without context-window limits. Missing fields, bad hypotheses, or invalid parsing code can remove the benefit; an executable diagnostic is not automatically a true causal explanation. The vRAN result uses measured components and traffic traces inside simulation, not a live deployment experiment.

## What to improve

Validate extracted models on fresh traces, quantify misleading-knowledge failures, and measure adaptation cost after hardware and traffic shifts.

## Connections

[EoH](../eoh/index.md) supplies the evolutionary backbone. TRACE extends its proposal context with execution-derived system knowledge and tools, making unknown dynamics inspectable rather than leaving them implicit in a scalar score.
