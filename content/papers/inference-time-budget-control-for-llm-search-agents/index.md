---
id: inference-time-budget-control-for-llm-search-agents
short_title: 'Inference Time'
title: 'Inference-Time Budget Control for LLM Search Agents'
authors:
  - 'Zhengru Fang'
  - 'Senkang Forest Hu'
  - 'Zhonghao Chang'
  - 'Yu Guo'
  - 'Yihang Tao'
  - 'Hongyao Liu'
  - 'M. Ruan'
  - 'Jun Huang'
  - 'Yuguang Fang'
year: 2026
date: 2026-05-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2605.05701
institutions:
  - cityu-hk
  - tsinghua
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'LLM search agents increasingly rely on tools at inference time, but their trajectories are often constrained by hard limits on both tool calls and generated tokens. Under such dual budgets, better answers require not only stronger models, but also explicit control over which search action should receive the next budget unit and when the accumulated evidence is sufficient to commit a final answer.'
---

## Why it matters

LLM search agents increasingly rely on tools at inference time, but their trajectories are often constrained by hard limits on both tool calls and generated tokens. Under such dual budgets, better answers require not only stronger models, but also explicit control over which search action should receive the next budget unit and when the accumulated evidence is sufficient to commit a final answer.

## Core method

The paper's abstract describes the following design loop:

> LLM search agents increasingly rely on tools at inference time, but their trajectories are often constrained by hard limits on both tool calls and generated tokens. Under such dual budgets, better answers require not only stronger models, but also explicit control over which search action should receive the next budget unit and when the accumulated evidence is sufficient to commit a final answer. We study this problem in multi-hop question answering (QA) and formulate it as two-stage inference-time budget control. At search time, our controller assigns each feasible action a task-level Value-of-Information (VOI) score, defined as an operational estimate of marginal task value per unit budget under the current search state and remaining dual budget, and uses this score to choose among retrieval, decomposition, and answer commitment. After search, a selective evidence-grounded finalizer compares the trajectory answer with a refined candidate and rewrites only when the residual error appears to be a low-risk answer-form error. Across four multi-hop QA benchmarks, three LLM backbones, and four budget levels, the method yields positive aggregate gains over four audited baselines under the same hard dual-budget protocol. Ablations show that search-time budget control, especially budget-dependent penalty, provides the main performance gain, while answer-time control helps mainly when the retrieval path is already adequate. These results suggest that inference-time budget control for LLM search agents should govern both how budget is spent during search and how the final answer is committed.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (bibliography_only). Evidence: ges, we propose a training-free, two-stage inference-time controller built on a tree-search backbone inspired by BAVT [23]. At search time, the controller scores each feasible action by task-level VOI: an operational estimate of marginal task value per unit budget under the current trajectory state and remaining dual budget, rather than Shannon information gain or Bayesian posterior value. The score

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
