---
id: optscientist
short_title: "OptScientist"
title: "OptScientist: Automated Discovery of Optimization Laws"
authors:
  - "Ma ZhenYao"
  - "Yue Liang"
  - "Jian-Qiao Zhu"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.28562
institutions:
  - plokerm-ai
  - xiamen
  - tuebingen
  - hku
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - scope
problems:
  - "Symbolic Optimization-Law Discovery"
  - "Inverse Decision Modeling"
featured: false
summary: "Infers compact symbolic objectives and constraints behind observed choices by learning an optimization landscape and then distilling its components."
---

## Why it matters

An input-output equation describes what happened; an optimization law additionally proposes what objective and constraints could have produced the observed choice.

## Core method

OptScientist first learns a structured neural optimization model from contextual outcomes using preference or distributional evidence. Objectives and constraints form an explicit bottleneck. It then freezes the learned components and distills them into symbolic expressions, balancing fit against expression complexity and removing context-only constants where appropriate.

An optional LLM agent layer retrieves theoretical priors, selects variables, configures experiments, critiques candidate mechanisms, and proposes new observations. The core OptFeynman evaluation tests the model without this agent assistance. The output is an explanatory optimization problem, not a newly invented numerical optimizer.

## Contributions

OptFeynman contains 99 physics-derived inverse-optimization tasks. The model perfectly recovers discrete preference order on 88 tasks and continuous order on 78 across tested candidate-set sizes. Risky-choice and monetary-policy studies examine held-out prediction with compact recovered laws.

## Strengths and limitations

Order-based validation addresses equivalence beyond literal expression matching. Nevertheless, observational choices need not identify a unique objective, and predictive success does not establish causal mechanism. The optimization assumption, selected variables, symbolic language, and synthetic observation process constrain discoveries.

## What to improve

Test observationally equivalent laws using interventions, expand misspecified and noisy settings, and isolate the agent layer's benefit at matched cost.

## Connections

[LLM-SR](../llm-sr/index.md) proposes symbolic equations that predict observed outputs. OptScientist instead recovers objectives and constraints whose optimizing choices explain those outputs, using an optimization learner and symbolic distillation inside an LLM-assisted research loop.
