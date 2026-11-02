---
id: openarchevo
short_title: OpenArchEvo
title: Large Language Model-Guided Evolutionary Discovery of Native Neural Architectures for Spiking Sequence Modeling
authors: [Ruoyu Zhao, Jiaqi Wu, Chenyu Zhu, Zhichao Lu]
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.40258
code_url: https://github.com/Optima-CityU/OpenArchEvo
institutions: [cityu-hk]
primary_dimension: feedback
dimensions: [feedback, design-object, search]
problems: [Spiking Neural Architecture Discovery, Sequence Modeling]
featured: false
summary: Evolves spike-constrained architecture code using code, rationale, and initialization-time fingerprints to preserve novelty and allocate expensive training evaluations.
---

## Why it matters

Fixed architecture menus can miss spike-native computation, but unrestricted code novelty need not mean architectural novelty. Training every generated network makes open program search costly.

## Core method

Candidates retain executable code and a design rationale, augmented by a 21-dimensional fingerprint of module/structure statistics and fixed-initialization response probes. Code similarity, rationale embeddings, and fingerprints jointly estimate novelty. A TabPFN surrogate predicts task fitness from fingerprints and the archive's measured outcomes.

Island populations perform LLM mutation and recombination under spiking-projection constraints. Near-duplicate screening precedes surrogate scoring. A performance/novelty shortlist selects a limited batch for actual training on WikiText-2 and ListOps; measured outcomes update both archive and surrogate context. Final selection uses evaluated architectures, not predicted-only winners. The discovered designs include activity-dependent state updates and residual control.

## Contributions

OpenArchEvo couples behavior-aware representation with a surrogate-managed training budget. Selected architectures transfer to WikiText-103 and Long Range Arena tasks; NeuroGate, HomeoResSSM, and LoopMem illustrate different regions of the discovered trade-off set.

## Strengths and limitations

Initialization-time probes offer inexpensive evidence beyond syntax. They approximate, rather than prove, behavioral novelty. Evidence contains one full search plus smaller repeats, and the ASI-Arch comparison has unequal budgets. Reported energy reductions are arithmetic estimates, not measured device savings; neuron dynamics remain fixed.

## What to improve

Repeat complete searches under matched budgets, test fingerprint calibration after distribution shifts, and measure actual hardware energy including memory and execution overhead.

## Connections

OpenArchEvo explicitly adopts [EoH](../eoh/index.md)'s idea-code pairing for spiking-network architecture programs and jointly revises code and design rationales. It adds initialization-time fingerprints and surrogate-guided training allocation rather than reusing EoH's full search procedure.

[BehaveSim](../behavesim/index.md) measures behavioral differences through complete problem-solving trajectories. OpenArchEvo cites this motivation but uses fixed initialization-time responses and architecture statistics to compare SNN programs before training, exchanging task-execution evidence for cheaper candidate screening.
