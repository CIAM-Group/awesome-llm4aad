---
id: sla
short_title: "SLA"
title: "Stateless Language Agents: Scaling Long-Horizon Automated Research"
authors:
  - "Qizheng Zhang"
  - "Changxiu Ji"
  - "Isaac Sun"
  - "Yuetai Li"
  - "Shubhangi Upasani"
  - "Sherry Ruan"
  - "Boyuan Ma"
  - "Fenglu Hong"
  - "Vamsidhar Kamanuru"
  - "Yoonho Lee"
  - "Yuzhen Mao"
  - "Genghan Zhang"
  - "Rulin Shao"
  - "Qiuyang Mang"
  - "Andy Dimnaku"
  - "Changran Hu"
  - "Radha Poovendran"
  - "Kunle Olukotun"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.07625
code_url: https://github.com/Alex-q-z/stateless-language-agents
institutions:
  - stanford
  - carnegie-mellon
  - university-washington
  - sambanova-systems
  - uc-berkeley
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - scope
problems:
  - "Long-horizon program search"
  - "Kernel optimization"
  - "Algorithm design"
  - "Software engineering"
featured: false
summary: "Reconstructs fresh role-specific agent contexts from harness-owned experiment records, coordinating explicit assignments over long research runs."
---

## Why it matters

Longer agent conversations need not produce more experiments. SLA separates durable research evidence from transient reasoning so that context selection and work assignment remain controlled as inference budgets grow.

## Core method

The harness stores candidate code, scores, local worker incumbents, and a chronological outcome record. Every Advisor epoch and every Worker trial starts a fresh session. The Advisor sees the global best plus a structured summary grouped by direction, separating measured non-improvements from inconclusive execution failures, and assigns concrete experiments. Each isolated Worker receives only its assignment, retained candidate, and compact local feedback. Workers cannot inspect other workspaces or the complete history. Local incumbents may remain below the global best, allowing alternative approaches to mature; a redirected worker restarts from the global best but establishes a new local baseline after its first valid evaluation. An independent evaluator records outcomes, and only harness-retained artifacts survive between invocations.

## Contributions

- Implements enforced statelessness and context isolation for both planning and execution roles.
- Studies software, kernel, and algorithm tasks at cumulative budgets reaching one billion tokens.
- Uses shared-checkpoint continuation ablations to test context reconstruction, isolation, and explicit assignments.

## Strengths and limitations

Most task/configuration results are single runs; only one main kernel configuration and checkpoint ablations are replicated. Token matching does not equate total computation, and cost estimates exclude running experiments. The ablations keep all agents stateless, so they isolate context and assignment choices rather than statelessness itself. All tasks require executable evaluators.

## What to improve

Replicate full-budget comparisons, include execution costs, and directly vary conversational persistence while holding evidence reconstruction fixed.

## Connections

[Discovery with Forgetting](../discovery-forgetting/index.md) discards historical evidence during resets, retaining the incumbent and score. SLA retains the full external record but reconstructs bounded role-specific contexts. These are distinct answers to how search should escape unproductive historical commitments.
