---
id: bermudan-audit
short_title: "Bermudan Audit"
title: "Auditing LLM Program Search for Bermudan Stopping with Primal--Dual Certificates"
authors:
  - "Yuhua Qian"
year: 2026
date: 2026-10-01
venue: "NeurIPS MATH-AI Workshop"
paper_url: https://arxiv.org/pdf/2610.14063
code_url: https://github.com/MrSteeeve/OpenHyra
institutions:
  - shanghai-ai-lab
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Optimal Stopping Policy Search"
  - "Noisy Search Evaluation"
featured: false
summary: "Audits generated Bermudan exercise policies with frozen selection, paired payoff comparisons, and evaluator-owned primal–dual estimates, finding no reliable improvement."
---

## Why it matters

Searching a noisy score can reward lower measurement variance or selection luck rather than a better policy. A valid bound can also be too loose to detect genuine progress.

## Core method

Candidates expose Python fit/predict policies, while a trusted evaluator controls paths, causal exercise, payoffs, and a shared dual upper bound. A planner–proposer pipeline and direct generation produce 24 attempts with matched no-generation controls. Public search feedback is a paired payoff-improvement lower confidence bound.

Selection freezes before evaluation on fresh contracts and seeds. A separate six-pair ablation varies structured versus scalar memory under fixed parents and operators. Reported payoff, raw primal–dual gap, and uncertainty-augmented selection score are kept distinct; the latter can improve merely because its error margin shrinks.

## Contributions

The audit retains failures and the original reference, separates improvement testing from near-optimality certification, and calibrates dual looseness against binomial references.

## Strengths and limitations

No selected generated program consistently improves on Ridge LSMC beyond Monte Carlo uncertainty. Structured memory shows no benefit in the small ablation. About 99% of Ridge's estimated gap on six one-dimensional puts comes from the dual, and those contracts offer little improvement headroom. Three seed blocks, small budgets, and asymptotic confidence bounds preclude broad negative conclusions about program search.

## What to improve

Use positive controls with weaker parents, contracts with larger headroom, candidate-specific tighter duals, and larger paired evaluations.

## Connections

The paper explicitly places [AlphaEvolve](../alphaevolve/index.md) and [FunSearch](../funsearch/index.md) in context: an exact construction verifier differs fundamentally from a noisy policy evaluator whose apparent gains require independent statistical checks.
