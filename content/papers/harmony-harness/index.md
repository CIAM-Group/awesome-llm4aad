---
id: harmony-harness
short_title: "Harmony Harness"
title: "Harmony Harness: Multi-Objective Self-Evolution of Agent Harnesses"
authors:
  - "Weichen Yu"
  - "Lesly Miculicich"
  - "Bhavana Dalvi Mishra"
  - "Jiefeng Chen"
  - "Shuo Li"
  - "Matt Fredrikson"
  - "Tomas Pfister"
  - "Long T. Le"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.15150
institutions:
  - google
  - carnegie-mellon
  - google-deepmind
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - "Agent Harness Evolution"
  - "Multi-Objective Program Search"
featured: false
summary: "Evolves repository-scale agent harnesses through objective-decomposed populations and separately editable general and environment-specific components."
---

## Why it matters

A harness can improve benchmark accuracy while becoming less safe or less transferable. Treating the entire harness as one scalar-scored artifact hides these trade-offs.

## Core method

Harmony Harness keeps one incumbent for each preference vector in a decomposition-based multi-objective search. Scalarized shortfalls guide replacement among neighboring preferences. The editable artifact includes orchestration, tools, skills, and repository logic, except for a minimal required interface.

Failure-derived hypotheses guide component edits, followed by validation, repair, or rollback. Operators distinguish general mechanisms from environment-specific adaptations; a generalization operator can change that boundary. At inference, selected components are composed into an execution DAG.

## Contributions

Across SecRepoBench and BaxBench, held-out studies report improvements in functionality and security, including 66.7% jointly functional-and-secure performance in a cross-benchmark setting versus 36.7% for its baseline. Ablations test objective decomposition and factorized editing.

## Strengths and limitations

Separate splits and joint metrics help expose grader exploitation. However, some observed fronts collapse to a candidate strong on both objectives, so the experiments do not establish difficult Pareto trade-offs. A perfect training score was exploitable; operational component labels do not prove transferability or security.

## What to improve

Use independently maintained security evaluators, harder conflicting objectives, and cost-matched transfer tests that freeze component selection before final evaluation.

## Connections

[DGM](../dgm/index.md) archives self-modifying coding agents as whole implementations. Harmony Harness makes an alternative design choice: objective-decomposed selection and explicit component boundaries support multi-objective search and recomposition.
