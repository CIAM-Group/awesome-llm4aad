---
id: network-world-models
short_title: Network World Models
title: Network World Models as Environments for Algorithm Design on Complex Systems
authors: [Rishab Alagharu, Hongji Pu, Zeeshan Memon, Xinyuan Song, Yuntong Hu, Liang Zhao]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.01048
institutions: [emory, uiuc]
primary_dimension: feedback
dimensions: [feedback, search, scope]
problems: [Network Intervention Algorithm Design, Diffusion Optimization]
featured: false
summary: Uses an action-conditioned network world model to evaluate executable intervention algorithms and return rollout diagnostics, marginal action credit, and counterfactual probes.
---

## Why it matters

A network intervention matters through the diffusion it triggers. Repeated Monte Carlo evaluation of candidate algorithms is expensive, and final reward alone does not explain which action should change.

## Core method

The world model applies an intervention's known graph/state changes exactly, then predicts subsequent diffusion with action-conditioned learned dynamics. A coding agent receives classical algorithm implementations as context and writes complete candidate intervention algorithms. Validity checks precede rollout scoring.

Candidates and incumbents use common sampled trajectories with fresh seeds each round. Promotion requires mean improvement larger than the paired estimate's standard error. Feedback includes temporal spread diagnostics, leave-one-action-out credit, and agent-requested counterfactual interventions. Exploration gives way to refinement over search. Final discovered algorithms are evaluated independently with the trusted Monte Carlo simulator, not just the learned evaluator.

## Contributions

Eight tasks and five diffusion models test the generated algorithms, including cross-network transfer. The paper reports matching or exceeding the strongest listed comparison in 138 of 141 settings and analyzes how transition error and search suboptimality bound selection regret.

## Strengths and limitations

Matched rollouts reduce sampling noise, while trusted final simulation checks surrogate transfer. The regret bound assumes error control over the reachable state-action support, which average prediction accuracy does not establish. Leave-one-out credit incurs additional evaluations and does not fully resolve action interactions; real-world dynamics can differ from the modeled diffusion families.

## What to improve

Audit adaptive exploitation of world-model errors, incorporate uncertainty-triggered trusted evaluation, and test partially observed or changing diffusion processes.

## Connections

[TRACE](../trace/index.md) extracts compact diagnostics and surrogate tools from observed execution logs. This work instead makes a learned simulator queryable for counterfactual actions and trajectory credit, contrasting retrospective extraction with intervention-based feedback.
