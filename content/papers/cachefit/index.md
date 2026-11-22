---
id: cachefit
short_title: CacheFit
title: 'CacheFit: The Rising Cost of Cache Replacement and Constraint-Driven Redesign of Last-Level Cache Replacement Policies'
authors:
  - Bita Aslrousta
  - Kaushal Mhapsekar
  - Darsh Asher
  - Azam Ghanbari
  - Joshua Kalyanapu
  - Samira Mirbagher Ajorpaz
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.10579
institutions:
  - north-carolina-state
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - CPU last-level cache replacement
  - Hardware-constrained cache policy redesign
featured: false
summary: CacheFit redesigns executable cache replacement policies using LLM proposals, ChampSim performance feedback, HARCOM circuit-cost estimates and editable search memory under explicit hardware budgets.
---

## Why it matters

A cache replacement algorithm can improve simulated throughput while requiring impractical metadata or decision logic. Metadata capacity alone also misses differences in array geometry and dependent operations. CacheFit puts estimated implementation costs inside algorithm search, rather than considering them only after a policy has been selected.

## Core method

The design artifact is a complete C++ cache replacement policy compatible with ChampSim. A pretrained LLM receives a seed policy, interface requirements, hardware budgets and retrieved design lessons. It proposes revised code, which is compiled and repaired within a bounded retry loop. ChampSim measures performance on instruction traces. A second representation expresses the policy's arrays and operations as HARCOM circuit-model components, with compilation and mechanical fidelity checks before cost evaluation.

The controller rejects candidates that violate specified budgets even if their instructions per cycle, or IPC, improve. It then distills experimental outcomes into an editable summary with four fields: principles, discouraged mechanisms, adjustable choices and unresolved questions. This summary is capped at 32 entries and retains links to the originating experiments. It is external search memory, not a change to model weights.

When progress stalls, the search can cross two candidates from its top-eight archive. The second parent is selected for distance between code embeddings, encouraging combinations beyond small edits of the best policy. The same stagnation trigger coordinates crossover, model rotation and memory refresh. A designer can insert, remove or revise memory entries to redirect subsequent proposals. These mechanisms are detailed in Section III-C.

## Contributions

- Combines execution feedback with estimated latency, storage, area and power during policy generation.
- Makes accumulated search lessons inspectable and editable without retraining the LLM.
- Shows concrete redesigns rather than only aggregate search scores. Fit-MPPPB halves the predictor-table count, narrows counters and shrinks the sampler. Across 20 SPEC CPU2017 workloads, it reports 60.3% less storage and 56.3% less modeled static power with about 1.1% higher aggregate IPC.
- Demonstrates a different trade-off with Fit-SHiP++: about 56% less storage and 61% less modeled static power at a 1.54% IPC reduction.

## Strengths and limitations

The useful contribution is the connection between a generated program, its evaluated behavior and a decomposed cost estimate. Component-level analyses explain where savings arise, and the memory-intervention examples make human steering concrete.

All circuit costs come from HARCOM's analytical model, not RTL synthesis or silicon measurements. Some modeled paths are only partially elaborated. Results depend on the program-to-model translation and the selected 5 nm assumptions. The main performance study uses a single-core simulator and 20 workloads. The separate 27-workload generalization result includes the nine tuning workloads, and the stronger-prefetcher check uses a shorter simulation window. Comparisons with other discovery frameworks need clearer matched-budget reporting before supporting broad superiority claims.

## What to improve

Release the generator, translations and evaluation traces. Validate selected policies through RTL synthesis and timing analysis. Report independent search repetitions, equal-budget baselines, separate held-out results and a common simulation protocol for prefetcher comparisons.

## Connections

[AlphaEvolve](../alphaevolve/index.md) provides the generator/evaluator pattern that CacheFit explicitly adopts. CacheFit specializes the evaluator for cache-policy execution and analytical circuit-cost constraints. This is a method adaptation, not a claim that AlphaEvolve's implementation is reused.

[CACHEFORGE](../cacheforge/index.md) also evolves executable cache policies, but emphasizes simulator performance and metadata budgets. Comparing the two reveals why metadata capacity and explicit circuit-path, area and power estimates impose different design constraints.
