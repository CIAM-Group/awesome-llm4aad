---
id: coral-discovery
short_title: "Coral Discovery"
title: "Coral Discovery: The Division of Cognitive Labor in Autonomous Research"
authors:
  - "Xinxing Ren"
  - "Qianbo Zang"
  - "Ziyan Wang"
  - "Suman Deb"
  - "Qiang Yang"
  - "Caelum Forder"
  - "Peter Carroll"
  - "Gilead Gevero"
  - "Jing Liu"
  - "Yali Du"
  - "Milind Tambe"
  - "Zekun Guo"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.33281
institutions:
  - coral-ai-labs
  - university-trento
  - harvard
  - university-cambridge
  - kings-college-london
  - university-hull
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - "Autonomous program discovery"
  - "Kernel optimization"
  - "Combinatorial optimization"
featured: false
summary: "Coral Discovery allocates autonomous agents across verified algorithmic directions using direction-local credit, estimated improvement yield, and an exploration option."
---

## Why it matters

A shared leaderboard can make collaborating agents converge on the same promising mechanism. Useful but initially weaker directions then receive too little effort to mature.

## Core method

Agents independently edit and evaluate programs in shared versioned storage. Each attempt declares a method-level change, while an independent verifier reads its diff to assign a mechanism-level direction. A direction board estimates improvement per evaluation, shrinks sparse estimates toward a shared prior, and adds an exploration bonus. Credit requires improvement over the parent, cited inspiration, and that direction's own best, so copying another line does not manufacture progress. A separate NEW option estimates the value of opening a direction. Suggested agent counts are advisory, with claim caps and duplicate checks. Agents finish an ongoing line before consulting the board, submit one evaluation per round, and record an insight afterward.

## Contributions

- Makes direction-level diversity and local progress explicit rather than equating diversity with different program ancestors.
- Evaluates nine kernel, packing, mathematical, inference, and systems tasks with controlled model, agent budget, and evaluator-access rules.

## Strengths and limitations

Best-of-three reporting gives six wins, one tie, and two losses against the reproduced strongest baseline configuration. Exploration consumes evaluations: directions that never produce a global record hurt LLM-SQL and transaction scheduling. Direction labels depend on a model verifier, and cited published results use different web/grader access conditions.

## What to improve

Report uncertainty across more runs, test verifier consistency, and learn when direction-level exploration should yield to sustained work within one mechanism.

## Connections

[ShinkaEvolve](../shinkaevolve/index.md) promotes novelty through candidate filtering and adaptive evolutionary sampling. Coral Discovery intervenes at a coarser unit: it credits and budgets research directions while persistent agents choose their own edits.
