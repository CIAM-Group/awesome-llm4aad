---
id: featurehospital
short_title: FeatureHospital
title: "FeatureHospital: A Skill-Driven Multi-Agent Framework for Automated Algorithm Customization in Multi-View Multi-Label Feature Selection"
authors:
  - Junxuan Li
  - Zhiqi Chen
  - Yuzhou Liu
  - Peng Zhang
  - Huaxiao Liu
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.16148
institutions:
  - jilin-university
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
problems:
  - Multi-View Multi-Label Feature Selection
featured: false
summary: Diagnoses a dataset and composes a feature-selection objective from a fixed catalog of loss components using specialized agents.
---

## Why it matters

A single feature-selection loss need not fit datasets with different label imbalance, redundant features, and unreliable views.

## Core method

Training-data statistics become a diagnostic profile. A diagnosis agent produces issue cards, a triage agent selects departments, and specialist agents propose implemented loss components from their medicine catalogs. A pharmacist resolves duplicated or conflicting prescriptions and assigns each retained loss a role and weight: backbone, regularizer, supporting term, or guardrail.

The resulting objective trains a continuous feature-selection vector through sigmoid logits. Features are ranked by the learned selection strengths and the top-k subset is evaluated on held-out data. The reusable skills, formulas, and validation rules are defined in advance: the LLM composes a dataset-specific algorithm rather than inventing arbitrary loss code or repeatedly querying test performance.


## Contributions

Exposes dataset diagnosis, component selection, and objective assembly as separate, inspectable decisions. Experiments cover seven multi-view multi-label datasets and four prediction metrics.

## Strengths and limitations

The catalog constrains invalid designs and makes selected objectives interpretable. Its expressiveness is also bounded by that catalog; results vary by dataset and metric rather than uniformly dominating every baseline.

## What to improve

Measure sensitivity to diagnostic errors and pharmacist-assigned weights, and compare with budget-matched non-LLM selection over exactly the same catalog.

## Connections

[Bi-EZP](../bi-ezp/index.md) also combines predefined signals into a task-specific evaluator. FeatureHospital selects and weights catalog losses through diagnosis; Bi-EZP searches executable aggregation structure and separately optimizes numeric weights. This is a design-object comparison, not claimed inheritance.
