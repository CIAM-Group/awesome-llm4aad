---
id: landscape-aad
short_title: Landscape-aware
title: 'Landscape-aware Automated Algorithm Design: An Efficient Framework for Real-world Optimization'
authors:
  - Haoran Yin
  - Shuaiqun Pan
  - Zhao Wei
  - Jian Cheng Wong
  - Yew-Soon Ong
  - Anna V. Kononova
  - Thomas Bäck
  - Niki van Stein
year: 2026
date: 2026-07-01
venue: GECCO
paper_url: https://arxiv.org/pdf/2602.04529
institutions:
  - leiden-university
  - astar
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
  - scope
problems:
  - Expensive Black-box Optimization
  - Photonics Design
featured: false
summary: The framework evolves cheap objective proxies with matching landscape features, then uses them to evaluate LLM-generated optimizers before final validation on the expensive target.
---

## Why it matters

Automatic algorithm design can require many complete optimization runs. When each objective evaluation involves an expensive simulator, evaluating every generated optimizer on the real task can dominate the cost of code generation.

## Core method

The framework first samples the target objective and computes exploratory landscape features. Repeated subsampling characterizes feature variability, and highly correlated features are removed. Genetic programming then evolves analytic proxy functions whose feature distributions resemble the target, using a Wasserstein-distance objective. Invalid or degenerate functions are rejected.

Several high-ranking proxy functions become the evaluation environment for LLaMEA. An LLM proposes complete Python optimizer implementations, which are executed on these cheaper functions and scored by optimization progress over the available budget. Evolution improves the optimizer code using these scores. The selected optimizer is subsequently evaluated on the original expensive task.

The two generated artifacts play different roles. Genetic programming creates objective proxies, while the LLM creates optimization algorithms. The method does not replace the final task solution with an LLM prediction.

## Contributions

- A separation between expensive target characterization and repeated algorithm evaluation.
- Distribution-based landscape matching for constructing task-related proxy functions.
- Experiments on several photonics and optical-design objectives, including comparisons with direct design and selection of existing benchmark proxies.

## Strengths and limitations

The proxies often transfer useful optimization behavior better than a nearby standard benchmark function. However, feature similarity does not guarantee that proxy and target rank algorithms identically. Initial target sampling still costs real evaluations, and proxy generation adds computation. Direct design remains competitive or better on several tasks, while transfer quality varies with the objective. The study therefore supports a cost-sensitive alternative, not a universally superior replacement for target evaluation.

## What to improve

Estimate ranking fidelity during search, selectively recheck promising algorithms on the true objective, and include target sampling and proxy construction in total-cost comparisons.

## Connections

LLaMEA-BO generates optimizers that contain surrogate models and acquisition logic to spend objective evaluations carefully during deployment. Landscape-aware design moves approximation outside the generated optimizer, using proxy objectives to reduce the cost of the algorithm-discovery loop itself. These are distinct places to allocate a limited expensive-evaluation budget.
