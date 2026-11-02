---
id: pcpo
short_title: PCPO
title: "Self-Evolving Algorithm-Design Agents: Escaping In-Context Evolutionary Stagnation via Population-Curated Policy Optimization"
authors:
  - "Chen Lu"
  - "Ke Xue"
  - "Siyuan Xu"
  - "Mingxuan Yuan"
  - "Chao Qian"
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.38757
institutions:
  - nanjing-university
  - huawei-noahs-ark
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - VLSI Global Placement
  - Learning Rate Schedule Design
  - GPU Kernel Optimization
featured: false
summary: "Combines fresh GRPO updates with periodic reinforcement of structurally diverse archived programs to adapt algorithm-design generators."
---

## Why it matters

Repeatedly conditioning a frozen generator on its own unsuccessful programs may preserve a poor search direction. PCPO investigates learning from verified programs instead of relying only on longer evolutionary context.

## Core method

A persistent archive removes invalid programs, normalized-AST duplicates, and near-structural twins unless the latter improve fitness sufficiently. Instance-specific buckets prevent incompatible reward scales from mixing. Within each bucket, normalized quality and distance from recent policy outputs determine elite selection.

Fresh samples receive on-policy GRPO updates at every step. Periodic off-policy updates replay curated elites with nonnegative rank-based advantages, clipped importance ratios, and reference-policy regularization. The placement task generates Adam learning-rate schedules inside DREAMPlace; the kernel experiment generates executable GPU implementations. The motivating likelihood-transfer proposition is conditional, not a guarantee that fitness increases or a path to the optimum exists.

## Contributions

- Couples structural archive curation with hybrid on/off-policy generator learning.
- Tests training on four placement cases and inference on sixteen, plus four kernel-design tasks.

## Strengths and limitations

Results suggest useful within-domain transfer and reduced inference token use. Training compute remains an additional cost; four selected kernels do not establish general kernel optimization performance. AST similarity is structural, not a semantic equivalence proof.

## What to improve

Report training-cost amortization over unseen designs and isolate replay quality, structural diversity, and positive-only credit under equal total compute.

## Connections

[CALM](../calm/index.md) updates the generator from the evolving candidate stream. PCPO adds persistent, instance-bucketed elite replay and hybrid updates. [Search to Signal](../search-to-signal/index.md) studies a complementary question: which credit distinctions survive normalization when the surrounding CALM procedure is held fixed.
