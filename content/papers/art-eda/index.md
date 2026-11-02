---
id: art-eda
short_title: "ART"
title: "When Algorithmic Exploration Becomes Cheap: A Case Study of Agentic Research in EDA"
authors:
  - "Keren Zhu"
  - "Yu Deng"
  - "Xiaoyu Hao"
  - "Liwen Jiang"
  - "Zijian Jiang"
  - "Cunqing Lan"
  - "Boxiang Song"
  - "Pujun Su"
  - "Yaojia Wang"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.10129
institutions:
  - fudan
primary_dimension: scope
dimensions:
  - scope
  - feedback
problems:
  - "Electronic Design Automation"
  - "Agentic Algorithm Research"
featured: false
summary: "Reports eight agentic EDA research trials with fixed substantive acceptance gates, independent evaluation, and explicit failures of practical tool transfer."
---

## Why it matters

A valid construction or locally faster component can still fail to improve an established design tool. Research acceptance must distinguish those endpoints.

## Core method

Agentic Research Trials (ART) specify demanding endpoints without prescribing the algorithmic route. Agents pursue extended attempts, while separately prepared feasibility checks, measurements, and adversarial proof review decide acceptance. Human organizers can redirect the question or reject an inadequate comparison; search instructions are not mathematical assumptions.

Eight trials span spanning trees, logic optimization, placement, contraction, clock trees, remapping, rewriting, and FPGA optimization. The artifact may be a theorem, a counterexample, an algorithm, or integrated tool code, each judged against its original substantive gate.

## Contributions

Cases include a researcher-reconstructed approximation argument and useful tool changes, alongside placement campaigns missing their whole-tool improvement target and exact surrogate improvements that worsen physical results. A separate publication-corpus study characterizes computational research loops; it does not measure private AI usage.

## Strengths and limitations

Failed branches and continuing integration work prevent early milestones from being mistaken for completed research. However, the trials are heterogeneous case studies without matched-budget controls, human-time estimates are retrospective, and proof review is not equivalent to machine-checked formalization.

## What to improve

Publish complete intervention and cost ledgers, compare fixed acceptance protocols across teams, and follow improvements through independent whole-tool reproduction.

## Connections

The paper explicitly situates ART beside [AlphaEvolve](../alphaevolve/index.md)'s executable discovery loop, but shifts attention to human-set acceptance authority and the gap between validated local artifacts and useful end-to-end EDA systems.
