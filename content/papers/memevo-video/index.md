---
id: memevo-video
short_title: MemEvo
title: 'MemEvo: Automatic Discovery of Streaming Video Memory Mechanisms'
authors: [Guohong Liu, Jialei Ye, Shanhui Zhao, Yunxin Liu, Yuanchun Li]
year: 2026
date: 2026-09-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2609.36581
institutions: [tsinghua, pku]
primary_dimension: design-object
dimensions: [design-object, search, feedback]
problems: [Streaming Video Memory Program Discovery]
featured: false
summary: Searches causal bounded-memory video programs in an extensible DSL, freezing the vision-language models while evaluating answer quality, storage, context, and latency.
---

## Why it matters

A streaming system must decide what to retain before knowing future questions. Hand-designing admission, compression, consolidation, and retrieval independently can miss interactions under a fixed memory budget.

## Core method

The DSL fixes recent, episodic, and gist-memory roles and their access contracts. Search can alter admission, retention, segmentation, encoding, merging, retrieval, and capacity settings; newly implemented operators become reusable only after type, access, and resource checks. Recent memory and the frozen model interfaces remain fixed.

An LLM reads history, failures, a measured Pareto archive, and remaining budget, then proposes finite edit plans and implements new operators when necessary. A fixed schedule searches episodic storage, retrieval, then gist memory, freezing earlier choices between stages. Deduplicated candidates run in the unchanged harness; answer-option probability, payload storage, reader context, and latency supply feedback. Deployment executes only the selected memory program and frozen models, not the research agent.

## Contributions

Approximately 54 GPU-hours of NExT-GQA development produce a frozen program tested on StreamingBench and OVO-Bench. Results with two vision-language backbones improve aggregate real-time perception and historical retrieval while maintaining bounded storage.

## Strengths and limitations

Explicit causal/resource contracts constrain search and make failure records useful. The archive describes only evaluated candidates, not a global Pareto frontier. Stage freezing can miss later component interactions. Retrieval lacks explicit temporal-relation reasoning and can distract the reader with earlier events; some reasoning/counting categories regress.

## What to improve

Search temporal retrieval rules, revisit frozen components under a joint budget, and test longer streams, query shifts, and actual end-to-end serving cost.

## Connections

[EvoSkillRec](../evoskillrec/index.md) promotes validated code inventions into a reusable architecture-skill library. MemEvo also admits new typed operators, but fixes memory-state roles and uses sequential stage freezing rather than freely evolving architecture genomes. This video-memory paper is distinct from EvoMem and ε-MemEvo, which store algorithm-search experience.
