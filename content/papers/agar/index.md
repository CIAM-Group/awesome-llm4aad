---
id: agar
short_title: "AGAR"
title: "AGAR: a reinforcement learning substrate for LLM program evolution"
authors:
  - "Haoran Li"
  - "Zengle Ge"
  - "Xiaomin Yuan"
  - "Yui Lo"
  - "Haoxin Li"
  - "Songlin Zhou"
  - "Qianhui Liu"
  - "Jiahua Ying"
  - "Yuanhang Liu"
  - "Mingju Chen"
  - "Annan Li"
  - "Jianmin Wu"
  - "Dawei Yin"
  - "Dou Shen"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.09215
institutions:
  - university-chinese-academy-sciences
  - baidu
  - tsinghua
  - casia
  - shanghai-university
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - "Program evolution"
  - "Competitive programming"
  - "Mathematical construction"
  - "Systems optimization"
featured: false
summary: "Factorizes program-evolution control into replaceable RL-inspired text modules and updates persistent guidance without training the code-generating model."
---

## Why it matters

Search controllers combine parent selection, exploration, attribution, and memory, making it difficult to determine which decision mechanism helps. AGAR gives these mechanisms explicit interfaces while exposing where an RL interpretation exceeds the implemented evidence.

## Core method

The decision-process action is the modular text prefix supplied to a frozen code generator, not the generated program itself. Credit assignment, value estimation, and exploration modules construct that prefix; retrieved experience is additional context. Execution and population replacement provide the transition. Persistent module guidelines are revised with separate critics rather than model-weight gradients. An initial unconditional TextGrad-style rewrite failed to accumulate stable rules; the repaired operator permits at most one addition and one edit/removal per period, followed by deferred validation. Only the credit and memory guidelines are actually edited in this repair. A streaming scheduler consumes completed evaluations immediately, with the controller as sole population writer. Value estimates remain textual/statistical heuristics: the implementation does not learn Bellman backups from observed returns.

## Contributions

- Defines interchangeable controller components and reports integration and asynchronous-state pitfalls.
- Compares variants over 19 tasks, two backends, and nominally three seeds, plus a five-task substrate ladder.
- Documents a failed guideline-update operator and a bounded, auditable replacement.

## Strengths and limitations

Gains concentrate in competitive programming; some tasks lack all three completed seeds. The component ladder is not monotonic and does not isolate each module's causal contribution. Asynchronous rollouts use stale population snapshots without importance correction. The formal discounted objective is not evidence that empirical long-horizon RL training has been achieved.

## What to improve

Test learned return estimates, report larger leave-one-module-out studies, and validate guideline changes with explicit delayed-credit and staleness controls.

## Connections

Both revise persistent textual controls for later program mutations. [RefineEvo](../refineevo/index.md) rewrites an operator prompt when repeated uses produce invalid code or no improvement. AGAR updates modular controller guidelines from rollout feedback, and replaces unconditional rewrites with bounded rule edits and delayed validation. The comparison concerns how prompt-level search policies are revised and checked, not training the code generator itself.
