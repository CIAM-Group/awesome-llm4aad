---
id: precocial
short_title: PRECOCIAL
title: 'PRECOCIAL: Pretraining with Code Curriculums via Iterative Search for Accelerated Learning'
authors: [Edward Gu, Ali Payani, Kevin Ellis]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.24970
institutions: [cornell, cisco-research]
primary_dimension: design-object
dimensions: [design-object, feedback, search]
problems: [Synthetic Pretraining Data Generation, Curriculum Discovery]
featured: false
summary: Searches executable symbolic-data generators while carrying forward accepted network checkpoints, making successive programs a learned pretraining curriculum.
---

## Why it matters

Useful synthetic pretraining distributions are often hand-written. Searching their generators is expensive because evaluating each program requires both pretraining and downstream fine-tuning.

## Core method

A Python generator emits abstract ASCII sequences under a fixed contract that rejects English words. Its initial rule families include hierarchical structures, cellular automata, sequence operations, and reasoning. An LLM sees the accepted program, objective, recent learning curves, and a small downstream training sample; it can reweight, delete, rewrite, or invent rules.

Candidates continue pretraining from the last accepted network checkpoint, then receive downstream validation evaluation. A non-improving candidate is rejected together with its added training steps. Accepted generators and checkpoints accumulate a curriculum along a single chain. Thus fitness depends on the accepted training history, rather than treating each generator as an independently scored artifact.

## Contributions

Language, code, and reasoning experiments compare searched programs with hand-written curricula, first-shot LLM programs, and program mutations. Under ten evaluations, continued pretraining reduces training work and improves average perplexity relative to independently trained population-search implementations; frozen-program transfer tests reuse curricula on other datasets.

## Strengths and limitations

The method explicitly accounts for checkpoint reuse and rejection. Models are only 0.15M–3.36M parameters, and each task has three ten-evaluation searches. The paired perplexity advantage over FunSearch is not statistically conclusive. Longer accumulated pretraining partly explains gains, rather than generator quality alone.

## What to improve

Disentangle curriculum order, total pretraining exposure, and program quality; test larger pretrained models and fully task-hidden discovery.

## Connections

[AlphaEvolve](../alphaevolve/index.md) normally independently evaluates population candidates. PRECOCIAL explicitly replaces that assumption with an accepted single lineage carrying neural training state, trading independent fitness comparisons for cheaper cumulative learning.
