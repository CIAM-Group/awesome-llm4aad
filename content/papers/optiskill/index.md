---
id: optiskill
short_title: OptiSkill
title: "OptiSkill: A Hierarchical and Evolving SkillBank for LLM-Based Optimization Modeling"
authors:
  - Ruiqing Zhao
  - Rui Liu
  - Yuan Zuo
  - Huarong Zhang
  - Xiao Han
  - Junjie Wu
year: 2026
date: 2026-09-01
venue: EMNLP
paper_url: https://arxiv.org/pdf/2609.22987
code_url: https://github.com/rachhhhing/OptiSkill
institutions:
  - beihang
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
  - scope
problems:
  - Operations Research Modeling
  - Mathematical Program Generation
featured: false
summary: Distills reusable formulation strategies and local error-avoidance lessons, then updates an OR-modeling skill bank through batch-level validation.
---

## Why it matters

Solving each modeling problem independently repeats variable-domain, activation, and constraint errors that could be remembered as reusable formulation skills.

## Core method

Successful trajectories supply global modeling procedures; success/failure pairs supply local trigger-and-guidance experiences. Supported, nonredundant skills are organized by problem type. Retrieval selects applicable strategies and experiences, which guide a frozen LLM in producing a mathematical formulation and executable solver code.

During test-time evolution, the bank remains fixed within a batch. Failed formulations can be refined using solver feedback, then diagnosed as missing knowledge, misleading retrieved knowledge, or unrelated coding errors. New and repaired skills stay inactive until batch-level support, repair, and regression checks pass. Reliability labels influence later retrieval, and persistently risky entries can be removed.


## Contributions

Makes skill revision and historical-success preservation explicit, rather than appending every successful example to memory.

## Strengths and limitations

The hierarchy separates reusable structure from local corrections. Solver success is not universal semantic verification, structural overlap is not zero, and sequential test-time learning should not be confused with a frozen independent-test protocol.

## What to improve

Audit skill correctness with experts, vary batch order, and report no-update versus continual-update results on prospectively separated problem families.

## Connections

[FormuEvo](../formuevo/index.md) stores condition–strategy–effect memories to improve solver efficiency. OptiSkill instead organizes formulation procedures and corrective experiences, with validated batch-level bank revisions; the shared issue is transferring modeling knowledge without propagating bad advice.
