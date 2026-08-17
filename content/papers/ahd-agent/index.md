---
id: ahd-agent
short_title: "AHD Agent"
title: "AHD Agent: Agentic Reinforcement Learning for Automatic Heuristic Design"
authors:
  - "Haoze Lv"
  - "Ning Lu"
  - "Ziang Zhou"
  - "Shengcai Liu"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.08756
institutions:
  - sustech
  - hkust
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "AHD Agent learns a long-horizon heuristic-design policy from interactions with executable evaluation environments."
---

## Why it matters

AHD Agent learns a long-horizon heuristic-design policy from interactions with executable evaluation environments.

## Core method

Agentic reinforcement learning controls when to explore, revise, retain, or combine candidates, turning the LLM from a passive generator in a fixed workflow into an adaptive search policy.

## Contributions

- Introduces the design described above for Combinatorial Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
