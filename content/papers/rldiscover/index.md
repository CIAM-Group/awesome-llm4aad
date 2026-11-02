---
id: rldiscover
short_title: RLDiscover
title: 'RLDISCOVER: LLM-driven co-evolution of reinforcement learning algorithms'
authors: [Haoran Li, Zengle Ge, Xiaomin Yuan, Yui Lo, Songlin Zhou, Jiahua Ying, Haoxin Li, Qianhui Liu, Yuanhang Liu, Jiaqun Liu, Guokai Chen, Mingju Chen, Ruinan Wang, Annan Li, Jianmin Wu, Dawei Yin, Dou Shen]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.09218
institutions: [university-chinese-academy-sciences, baidu, tsinghua, casia, pku, shanghai-university, bristol]
primary_dimension: search
dimensions: [search, design-object, feedback]
problems: [Reinforcement Learning Algorithm Discovery]
featured: false
summary: Moves from bandit-selected RL component edits to joint program evolution, using progressively longer multi-seed training to control evaluation cost and noise.
---

## Why it matters

RL algorithms contain interacting representation, target, loss, policy, and exploration mechanisms. Joint edits are difficult to credit, but isolated improvements may fail when combined; noisy long training makes either strategy expensive.

## Core method

The seed is divided into five executable components. A UCB controller initially selects one component to mutate; unproductive arms freeze. Component champions are merged in gain order, retaining replacements only when validation does not worsen. Subsequent population searches may change multiple components, carrying mechanism-level lessons across rounds.

Candidates pass through 50K-step/one-seed, 200K-step/two-seed, and 1M-step/three-seed evaluations. A quota and the higher-fidelity leader's low-fidelity score govern promotion, with a slot for each round's best candidate. Five intermediate finalists receive full training. Syntax, component-presence, deduplication, and silent-fallback audits precede reporting.

## Contributions

The same pipeline evolves SAC, PPO, and DQN across 26 task–algorithm pairs. The paper reports recurring robust losses, progress-dependent value targets, and running statistics, plus selected transfer experiments. Staged evaluation greatly reduces compute relative to fully training the same candidate pool.

## Strengths and limitations

Repeated seeds and finalist audits improve credibility. PPO/DQN inherit SAC-oriented budgets and hyperparameters, so their returns are not directly comparable with tuned published implementations. Component credit operates only at short fidelity; slow-learning but strong asymptotic programs can be discarded early.

## What to improve

Calibrate each algorithm family, promote candidates using learning-curve uncertainty, and return longer-horizon evidence to component-level search.

## Connections

[MuEvo](../muevo/index.md) keeps component participation reversible and evaluates collaboration contexts. RLDiscover instead first freezes local edits, then switches to unrestricted co-evolution, trading persistent component-level interaction modeling for a staged search and training budget.
