---
id: evoskillrec
short_title: EvoSkillRec
title: "EvoSkillRec: Skill-Genome Evolution for Recommender Architecture Discovery"
authors:
  - Xiaopeng Li
  - Kuo Cai
  - Bo Chen
  - Wenlin Zhang
  - Mengyang Ma
  - Yingyi Zhang
  - Zichuan Fu
  - Yu Yang
  - Qidong Liu
  - Yiyu Wang
  - Ruiming Tang
  - Wenwu Ou
  - Jiang Wu
  - Zhanbo Xu
  - Xiangyu Zhao
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.34552
code_url: https://github.com/Xiaopengli1/EvoSkill-Rec
institutions:
  - cityu-hk
  - kuaishou
  - xjtu
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Recommender Architecture Discovery
  - Click-Through Rate Prediction
  - Multi-Task Learning
featured: false
summary: Evolves typed recommender architectures through both validated skill recombination and open code invention, promoting successful modules into a reusable library.
---

## Why it matters

Unrestricted architecture edits often fail, while a fixed operator library cannot retain new mechanisms discovered during search.

## Core method

Seed recommenders are decomposed into executable skills with tensor contracts, inductive-bias tags, validation tests, and empirical memory. Reconstruction tests check that extracted skills reproduce seed-model behavior. Genomes are graphs of these modules connected through a shared tensor context.

Skill-space search retrieves compatible modules through metadata rules and applies bounded graph edits. Code-space search uses a planner and synthesizer to invent new modules, followed by capability, interface, gradient, and portability checks. Both streams receive training-based validation. Generated skills carried by surviving candidates are promoted into a second library tier with provenance. Stagnation shifts proposal budget toward invention; successful promotion shifts it back toward reuse.


## Contributions

Converts validated code inventions into reusable architectural units rather than leaving them as isolated patches.

## Strengths and limitations

Tests span multiple recommendation settings and quality/efficiency trade-offs. A module's success in one host genome does not prove universal usefulness; extraction, training, and promotion costs remain substantial.

## What to improve

Test cross-task skill transfer with frozen libraries, audit false promotion caused by host interactions, and separate compatibility validity from independent causal benefit.

## Connections

[ADSL-PDE](../adsl-pde/index.md) likewise constrains composition through typed executable components. EvoSkillRec differs by making validated new modules and their reuse history an explicit evolving library, rather than only searching solver descriptions.
