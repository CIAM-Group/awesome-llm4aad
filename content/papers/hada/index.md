---
id: hada
short_title: HADA
title: "Hyper Algorithm Design Agent: Evolving Learnable Optimizer from Zero"
authors:
  - Zipei Yu
  - Yue-Jiao Gong
  - Zeyuan Ma
  - Yuncheng Jiang
  - Zhiguang Cao
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.35328
code_url: https://github.com/MetaEvo/HADA-AAD
institutions:
  - south-china-university-technology
  - south-china-normal-university
  - smu
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - scope
problems:
  - Black-Box Optimization
  - Constrained Optimization
  - Multi-Objective Optimization
  - UAV Path Planning
featured: false
summary: A hyper agent edits its own and a task agent's behavior while the task agent evolves a trainable MetaBBO optimizer project.
---

## Why it matters

Learning-to-optimize systems automate low-level decisions but still rely on humans to choose the policy architecture, observations, training loop, and underlying optimizer. HADA searches over that larger software project.

## Core method

Each evolutionary node stores a MetaBBO project and execution information: code, patches, domain notes, training logs, and evaluation scores. The archive samples promising but less-explored valid parents using performance and child counts.

A hyper agent first edits the instructions governing the task agent and itself. The task agent then modifies the optimizer project, including the learned policy, low-level environment, and training logic. The changed project is trained and evaluated, and the resulting child is archived. Unlike the hyper agent, the task agent cannot edit the agent machinery.

Search uses cheaper training and repeated evaluation; the selected optimizer receives longer training and more final runs. The experiments span continuous single-objective, constrained, and multi-objective benchmarks, plus UAV planning. The product is a learned optimizer together with its training code, not simply an LLM-generated update formula.

## Contributions

- Evolves both a learning-assisted optimizer and the agent procedure that designs it.
- Uses an execution-history tree to revisit alternative development paths and transfer design behavior across domains.

## Strengths and limitations

The editable project provides a broad design space, but training each candidate makes evaluation costly and noisy. Improvements are empirical and benchmark-dependent: recursive editing is not a proof of beneficial self-modification, nor does it bypass no-free-lunch results. The integrity of evaluation interfaces is especially important when project files are editable.

## What to improve

Independently freeze final evaluators, audit all allowed file changes, and compare hyper-agent evolution against equally budgeted fixed-agent search across multiple seeds.

## Connections

[Darwin Gödel Machine](../dgm/index.md) and HADA both use empirical evaluation and archives for self-improvement, but organize the editable system differently. DGM evolves a coding agent; HADA separates a hyper agent that edits agent behavior from a task agent that edits the optimizer project. This is a comparison of design boundaries, not a claim that HADA reuses DGM's implementation.
