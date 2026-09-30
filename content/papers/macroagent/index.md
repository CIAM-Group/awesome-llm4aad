---
id: macroagent
short_title: MacroAgent
title: "MacroAgent: Regularity-Aware Macro Legalization with LLM-Agent-Designed Contour Algorithms"
authors:
  - Jiaxi Jiang
  - Xufeng Yao
  - Yuxuan Zhao
  - Yuntao Lu
  - Peiyu Liao
  - Zuodong Zhang
  - Yibo Lin
  - Bei Yu
year: 2026
date: 2026-08-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2608.24946
code_url: https://github.com/gilgamsh/MacroAgent
institutions:
  - cuhk
  - pku
primary_dimension: scope
dimensions:
  - scope
  - design-object
problems:
  - Macro Legalization
  - VLSI Physical Design
featured: false
summary: Evolves contour-generation heuristics inside a macro-legalization pipeline to trade layout regularity against displacement and downstream routing quality.
---

## Why it matters

Rectangular macro arrangements improve regularity but can move macros too far from useful global-placement locations.

## Core method

MacroAgent clusters macros, generates candidate contours, matches macros to grid templates inside those contours, and refines inter-cluster overlaps. The LLM designs the contour generator, not this entire physical-design flow. Prompts include geometric interfaces, quality metrics, previous ideas/code, and reference layouts.

EoH-style exploration and modification prompts generate 110 candidate heuristics in the reported budget. Rather than keeping a fixed population, the database retains candidates that improve regularity or displacement on any testcase. Grid templates are assigned with bipartite matching, and downstream placement/routing evaluates the resulting legalizations. Experiments compare matched legalization stages and include an industrial place-and-route flow.


## Contributions

Adapts idea/code evolution to regularity-aware geometry and retains multiple contour strategies to handle the regularity–displacement trade-off.

## Strengths and limitations

Downstream evaluation checks whether geometric improvements survive the design flow. The surrounding pipeline and reference examples remain human-designed; best-of-many legalization results require their total evaluation cost to be counted.

## What to improve

Evaluate unseen macro shapes and technology settings, and compare single-contour and portfolio choices under equal end-to-end runtime.

## Connections

[EoH](../eoh/index.md) is the explicit source of the five idea/code evolution directives. MacroAgent adapts them to contour-generation programs and changes retention to preserve useful geometric trade-offs.
