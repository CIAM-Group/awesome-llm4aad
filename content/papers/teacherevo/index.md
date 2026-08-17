---
id: teacherevo
short_title: "Teacher-Aware"
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
  - shenzhen-tech-univ
  - shanghai-polytechnic
  - sjtu
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

Final objective values are sparse feedback: they reveal that a heuristic failed but not which intermediate decisions diverged from a strong policy. Teacher-aware evolution borrows dense behavioral signals from a learned optimizer without requiring that neural policy at deployment.

## Core method

An independently trained optimization policy is queried on states visited by each candidate program. Agreement with the teacher's action preferences supplies local behavioral feedback alongside the candidate's end-to-end task performance. The evolutionary loop uses both signals to select and revise programs. The final artifact remains ordinary static code; this is guidance during design, not policy distillation or hybrid neural inference.

Scheduling, routing, and graph-optimization experiments compare teacher-aware search with performance-only program evolution.

## Contributions

- Dense state-level behavioral guidance for program evolution.
- Separation between a neural design-time teacher and a standalone deployment artifact.
- Cross-domain evaluation beyond one solver family.

## Strengths and limitations

The approach turns a strong opaque policy into feedback for an interpretable executable heuristic and can diagnose local mistakes. It inherits teacher bias and requires representative state coverage; excessive imitation could prevent the program from outperforming the teacher.

## What to improve

Anneal teacher influence, query disagreement or uncertainty states selectively, and test whether evolved programs can exceed or transfer beyond their teacher's training distribution.

## Connections

Teacher-aware evolution adds a new feedback channel to EoH-like program search. It differs from CALM: the learned policy teaches candidate behavior, while CALM updates the language-model generator itself.
