---
id: cacheforge
short_title: CACHEFORGE
title: 'CACHEFORGE: LLM-Guided End-to-End Generative Cache Replacement Policy for Performance and Hardware Efficiency'
authors:
  - Kaushal Mhapsekar
  - Bita Aslrousta
  - Brijesh Kumar Bhayana
  - Paula Contreras
  - Azam Ghanbari
  - Ethan Goodman
  - Anna Andriiko
  - Samira Mirbagher Ajorpaz
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.07668
institutions:
  - north-carolina-state
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - CPU last-level cache replacement
  - Cache policy performance and metadata efficiency
featured: false
summary: CACHEFORGE evolves C++ cache replacement logic through LLM proposals, CRC-2 ChampSim evaluation, retrieved design memory, adaptive mutations and cross-policy recombination under metadata budgets.
---

## Why it matters

Searching parameters within a fixed cache-policy template cannot change its metadata structures or decision rules. CACHEFORGE instead searches executable code. It also separates cache hit rate from processor throughput, since retaining more lines does not necessarily prevent the misses that stall execution.

## Core method

The generator receives the cache interface, optimization objective, storage constraints, prior policies and retrieved experimental lessons. It emits a policy name, rationale, C++ implementation and overhead estimate. Candidates are compiled into CRC-2 ChampSim and evaluated on SPEC CPU2006 traces. Feedback includes IPC, misses, access-type hit rates and metadata usage. Search can start from a human-designed policy or an initially empty design context.

The search retains short-term context, episodic experiment records and distilled design summaries. Retrieval supplies relevant prior attempts to the next prompt. Temperature controls proposal diversity, while mutation instructions request smaller refinements or larger structural changes according to recent performance. Branching proposals can refine a parent, combine different successful policies or generate a new policy informed by accumulated lessons. The paper compares hit-rate, IPC and combined reward choices rather than assuming that one metric always predicts the others.

The resulting programs include more than parameter adjustments. SPARC+ combines spatial and reuse information with insertion rules and victim feedback. TA-DPIP uses reuse, stride and thrashing signals to control insertion priority. Other outputs redesign MPPPB predictor features, sampling and storage. Sections III and VI describe the search machinery and generated mechanisms, respectively.

## Contributions

- Searches cache replacement code with mutable control flow and metadata rather than only a fixed vector of parameters.
- Connects generated policy mechanisms to simulation outcomes and examines memory, seeds, temperature and mutation choices.
- Reports 10,687 generated policies across its experiments. The highlighted SPARC+ result improves IPC by about 10.15% over LRU on five memory-intensive workloads. A separate evaluation tests policies across all 28 SPEC CPU2006 traces, so that subset speedup should not be presented as an all-suite result.
- Shows that the policy selected for throughput need not be the one selected for hit rate or performance per unit of metadata.

## Strengths and limitations

The paper provides identifiable generated algorithms and sensitivity studies, making it directly relevant to executable algorithm discovery. It is not simply an LLM choosing the next cache victim at runtime or training a replacement predictor.

Evidence comes from trace-based simulation, not deployed hardware. Compilation and structural checks do not establish RTL feasibility or formal correctness. Search and evaluation windows differ, and the full-suite evaluation includes the five tuning workloads. Independent search variability and equal-budget comparisons need fuller reporting. Some numerical descriptions also need reconciliation: the stated 43% storage reduction does not follow from the same paragraph's 12 KB and 29.05 KB figures. No verified public implementation was identified for this entry.

## What to improve

Release policies, prompts, lineage records and evaluation scripts. Report held-out workloads separately, repeat searches under matched budgets and clarify the phase-transition rules and storage accounting. Validate selected policies with circuit-level implementation checks beyond metadata capacity.

## Connections

[CacheFit](../cachefit/index.md) targets the same executable cache-policy artifact but includes HARCOM estimates of circuit latency, area and power in its feasibility gates. CACHEFORGE focuses on performance and metadata-guided discovery. This is a concrete difference in evaluation constraints, not evidence that either method extends or universally outperforms the other.
