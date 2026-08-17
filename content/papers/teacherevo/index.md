---
id: teacherevo
short_title: "TeacherEvo"
title: "Teacher-Aware Evolution of Heuristic Programs from Learned Optimization Policies"
authors:
  - "Minyu Chen"
  - "Song Qin"
  - "Ling-I Wu"
  - "Jianxin Xue"
  - "Guoqiang Li"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.10634
institutions:
  - affiliation-pending
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Scheduling"
  - "Routing"
  - "Graph Optimization"
featured: false
summary: "Teacher-aware evolution uses learned optimization policies as behavioral teachers while retaining static, executable heuristics at deployment."
---

## Why it matters

Teacher-aware evolution uses learned optimization policies as behavioral teachers while retaining static, executable heuristics at deployment.

## Core method

Candidate programs receive both endpoint task scores and state-level action preferences queried from an independently trained policy. The teacher guides evolution but is neither distilled into the program nor required during deployment.

## Contributions

- Introduces the design described above for Scheduling, Routing, Graph Optimization.
- Evaluates the resulting algorithms or formulations through executable task feedback.

## Strengths and limitations

The method exposes a concrete, testable design loop and produces artifacts that can be evaluated directly. Its conclusions remain tied to the reported tasks, evaluator design, language models, and computational budget; broader replication is needed before assuming transfer to substantially different settings.

## What to improve

Useful next steps include stronger cross-task evaluation, cost-matched ablations, and analysis of failure cases and sensitivity to the underlying language model.

## Connections

Structured connections are included in the relation map only when the methodological dependency is explicit and well supported.
