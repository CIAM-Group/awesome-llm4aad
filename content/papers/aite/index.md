---
id: aite
short_title: AITE
title: Autonomous Discovery of Wireless Communications Algorithms
authors:
  - Fayçal Aït Aoudia
  - Jakob Hoydis
  - Sebastian Cammerer
  - Gian Marti
  - Merlin Nimier-David
  - Nicolas Roussel
  - Alexander Keller
year: 2026
date: 2026-07-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2607.17762
code_url: https://github.com/nvlabs/the-ai-telco-engineer
institutions:
  - nvidia
primary_dimension: scope
dimensions:
  - scope
  - search
  - feedback
problems:
  - Wireless Communications
  - OTFS Equalization
  - Pilotless OFDM Reception
featured: false
summary: Coordinates idea generation and parallel coding agents to discover wireless algorithms along a measured performance–complexity frontier.
---

## Why it matters

Promising signal-processing ideas can be rejected because of one poor implementation, while raw performance can hide impractical computational cost.

## Core method

An orchestrator proposes distinct algorithmic ideas and assigns multiple isolated ReAct workers to each. Workers edit, run, and refine code through a task-specific evaluator returning performance and complexity. Optional postrun hyperparameter optimization yields multiple operating points; all reported experiments use this tuning stage.

A leaderboard retains the Pareto front and selected off-front examples. Post-processing checks whether an implementation actually followed its assigned idea, so a deviating implementation does not falsely discredit that idea. Worker journals also refine generic operating instructions while protected task and idea text remain unchanged. This implementation is built with LangChain rather than reused wholesale from another evolutionary framework.


## Contributions

Separates idea quality, implementation quality, and parameter configuration within an auditable wireless-algorithm search process.

## Strengths and limitations

OTFS equalization and pilotless OFDM reception exercise different discovery challenges. Monte Carlo evaluation dominates cost; explainable algorithms are not automatically low-latency implementations, and hyperparameter-search allocation remains unresolved.

## What to improve

Budget the complete idea/implementation/tuning hierarchy, test channel and hardware shifts, and independently verify generated derivations and receiver assumptions.

## Connections

[QDEvo](../qdevo/index.md) preserves quality/runtime trade-offs through semantic niches and local Pareto selection. AITE instead organizes implementations by explicit ideas and a global performance–complexity frontier; both retain alternatives, but their diversity mechanisms differ.
