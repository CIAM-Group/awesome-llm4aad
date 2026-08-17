---
id: ahd-agent
short_title: "AHD Agent"
title: "AHD Agent: Agentic Reinforcement Learning for Automatic Heuristic Design"
authors:
  - "Haoze Lv"
  - "Ning Lu"
  - "Ziang Zhou"
  - "Shengcai Liu"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.08756
code_url: https://github.com/Antoniano1963/AHD-Agent
institutions:
  - sustech
  - zhongguancun-academy
  - hkust
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Combinatorial Optimization"
featured: false
summary: "AHD Agent learns a long-horizon heuristic-design policy from interactions with executable evaluation environments."
---

## Why it matters

Fixed AHD workflows decide in advance what context the LLM receives and when it must generate code. AHD Agent instead trains the model to decide which evidence it needs from the solving environment before acting, turning heuristic design into a multi-turn tool-use problem.

## Core method

The agent can propose a heuristic or call tools for instance analysis, AST/code inspection, and targeted evaluation evidence. A synthesized family of AHD environments supports reinforcement learning of this policy rather than training on a single fixed benchmark. Rewards come from executable heuristic performance while the trajectory teaches when information gathering is worth its cost.

Experiments cover eight domains, four held out during training. The 4B-parameter agent is compared with larger-model AHD baselines using quality, evaluator calls, and cost; the paper also studies model and inference scaling.

## Contributions

- A tool-integrated state-aware AHD agent instead of a passive code generator.
- An environment-synthesis and agentic-RL pipeline for learning a reusable design policy.
- Held-out-domain and evaluation-efficiency evidence for a compact model.

## Strengths and limitations

The learned policy can request evidence selectively and its cost accounting is more informative than final-score-only comparisons. However, the tool library and synthesized environments define what the agent can learn; an unseen task with different diagnostics may break the policy. RL also adds substantial training cost that must be amortized across tasks.

## What to improve

Evaluate new tools and interfaces without retraining, report failure modes in tool selection, and compare total training-plus-inference cost with online evolutionary search over realistic reuse horizons.

## Connections

AHD Agent changes the controller: it learns when to inspect and when to design. CALM and AAD Fine-tuning also update model weights, but optimize a generator from candidate quality rather than training an explicit multi-turn tool policy.
