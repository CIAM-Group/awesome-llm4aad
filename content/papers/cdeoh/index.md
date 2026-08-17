---
id: cdeoh
short_title: "CDEoH"
title: "CDEoH: Category-Driven Automatic Algorithm Design With Large Language Models"
authors:
  - "Yu-Nian Wang"
  - "Shen-Huan Lyu"
  - "Ning Chen"
  - "Jia-Le Xu"
  - "Bowen Ye"
  - "Qingfu Zhang"
year: 2026
date: 2026-03-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2603.19284
institutions:
  - cityu-hk
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "CDEoH injects problem-category knowledge into evolutionary algorithm design to improve stability and preserve useful diversity."
---

## Why it matters

A fitness-only population can collapse around one design pattern even when several functional categories are useful. CDEoH treats category structure as an explicit population-management signal rather than hoping semantic diversity survives ordinary selection.

## Core method

CDEoH organizes generated thought-code pairs into semantic categories. Evolution refines candidates within a category and combines information across categories, preventing one family from monopolizing selection. Category summaries become reusable prompt knowledge while executable performance remains the ground-truth fitness signal.

Experiments cover several combinatorial-optimization tasks and compare with EoH-style evolution. Ablations examine category guidance and population diversity in addition to final objectives.

## Contributions

- Category-aware organization of the thought-code population.
- Intra-category refinement combined with cross-category exploration.
- Structured summaries that turn accumulated candidates into reusable knowledge.

## Strengths and limitations

Categories give a readable account of diversity and can preserve several design modes. They depend on classification quality and may impose artificial boundaries between hybrid ideas. Classification calls also consume search budget.

## What to improve

Compare semantic categories with behavior-derived clustering, track category stability across models, and support hierarchical or overlapping categories for mixed mechanisms.

## Connections

CDEoH retains EoH's thought-code representation but changes population organization. Unlike BehaveSim's execution-based diversity, its diversity signal is semantic and category-level.
