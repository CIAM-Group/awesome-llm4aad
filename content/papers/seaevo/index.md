---
id: seaevo
short_title: SeaEvo
title: 'SeaEvo: Advancing Algorithm Discovery with Strategy Space Evolution'
authors:
  - Sichun Luo
  - Yi Huang
  - Haochen Luo
  - Fengyuan Liu
  - Guanzhi Deng
  - Lei Li
  - Qinghua Yao
  - Zefa Hu
  - Junlan Feng
  - Qi Liu
year: 2026
date: 2026-04-27
venue: arXiv
paper_url: https://arxiv.org/pdf/2604.24372
institutions:
  - hku
  - cityu-hk
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - Circle Packing
  - Traveling Salesman Problem
  - Job Shop Scheduling Problem
featured: false
summary: SeaEvo adds a modular strategy-space layer to LLM-driven evolutionary program search, representing each candidate with an explicit natural-language strategy and clustering the archive to preserve promising directions and avoid saturated strategy families.
---

## Why it matters

Most LLM-driven evolutionary systems track search state primarily as executable programs and scalar fitness, and when natural-language reasoning is used it stays transient (local mutation context or unstructured memory). This creates three failure modes: syntactically different programs that implement the same idea appear as genuine progress; selection by scalar fitness discards lower-fitness but strategically promising directions; and per-program fitness gives little visibility into when an entire strategy family has saturated.

## Core method

SeaEvo (Strategy-space Evolution) elevates natural-language strategy to a first-class, population-level representation without modifying the underlying evolutionary algorithm. Each candidate is augmented with an explicit strategy description and embedding, yielding a dual-space archive organized by both programs and semantic strategies. Three coordinated modules use this representation:

- **Strategy Articulation (SA)** turns mutation into a diagnose–direct–implement process by specifying a strategic direction before code generation.
- **Stratified Experience Retrieval** clusters the archive by strategy semantics and selects behaviorally complementary inspirations.
- **Strategic Landscape Navigation** periodically summarizes effective, saturated, and underexplored strategy families to steer future mutations away from exhausted directions.

Because it is a modular layer, SeaEvo drops onto existing evolutionary backbones (e.g., OpenEvolve, ShinkaEvolve) without rewriting their mutation or selection operators.

## Contributions

- A strategy-space layer that makes language-level strategic reasoning persistent population-level evolutionary state.
- Three modules for strategy articulation, stratified retrieval, and landscape navigation.
- Consistent improvements of underlying backbones across algorithm discovery, systems optimization, and agent-scaffold design, with a 20.6% average relative improvement across four systems benchmarks and a best single run on Prism scoring 3× higher.

## Strengths and limitations

SeaEvo preserves diversity through semantic clustering, is backbone-agnostic, and enables reuse of strategic knowledge. The main caveat is that total compute is not strictly matched—clustering, retrieval, and navigation add LLM calls beyond a plain evolutionary baseline—and the approach depends on embedding and clustering quality.

## What to improve

The paper implies the need for compute-matched baselines, cross-run transfer of strategy representations, and mechanisms to merge or retire outdated directions as the archive grows.

## Connections

SeaEvo complements reflection-based feedback (e.g., ReEvo) with a persistent organization of strategic directions, operating orthogonally to the single-program fitness search used by most LLM-guided evolutionary systems.
