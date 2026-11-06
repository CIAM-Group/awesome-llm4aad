---
id: metamuse
short_title: MetaMuse
title: 'MetaMuse: Algorithm Generation via Creative Ideation'
authors:
  - Ruiying Ma
  - Chieh-Jan Mike Liang
  - Yanjie Gao
  - Francis Y. Yan
year: 2026
date: 2026-04-01
venue: ICLR
paper_url: https://fyy.cs.illinois.edu/files/metamuse-iclr26.pdf
code_url: https://github.com/illinois-nsai/MetaMuse
institutions:
  - uc-berkeley
  - microsoft
  - uiuc
primary_dimension: feedback
dimensions:
  - search
  - feedback
problems:
  - Cache Replacement
  - Online Bin Packing
featured: false
summary: MetaMuse steers algorithm generation with external word stimuli and measured behavioral diversity, then translates the resulting ideas into executable policies.
---

## Why it matters

Repeatedly asking an LLM for a better algorithm can produce variations of familiar designs. MetaMuse investigates how to encourage genuinely different behavior rather than relying on sampling temperature or differences in wording.

## Core method

Each generated algorithm is executed on a collection of synthetic traces. Its performance across these traces forms a vector, allowing the search to compare algorithms by observed behavior rather than source-code appearance.

Candidate generation begins with external keyword stimuli drawn from a dictionary. The simple variant samples these words randomly. The feedback-guided variant first collects warm-up examples, then fits Gaussian-process predictors from embeddings of problem-mapped observations to performance-vector coordinates. It predicts outcomes for two sampled stimulus sets and chooses the one closer to a target representing unexplored behavior or strong performance. Actual execution, not the prediction alone, determines the quality of the resulting algorithm.

A staged prompt turns the words into properties, connects those properties to the target problem, describes an algorithm and finally generates Python code. The experiments produce cache insertion and eviction policies and online bin-packing rules. Runtime and resource checks reject unsafe generated programs.

## Contributions

- An operational definition of diversity based on multi-trace performance.
- External stimulus selection as a controllable source of algorithmic ideas.
- Experiments separating stimulus selection and staged reasoning across two online decision problems and several ideation models.

## Strengths and limitations

The study evaluates generated rules on real and synthetic traces, and its ablations examine which design choices help. However, behavioral diversity depends on the chosen diagnostic traces. Two algorithms can receive similar vectors yet behave differently elsewhere. All tested ideation models share a code-generation backend, limiting conclusions about completely different pipelines. Generation prices do not remove simulator and evaluation costs, and the paper does not establish completed production deployment.

## What to improve

Adapt the diagnostic traces as blind spots emerge, measure total search cost, and test whether discovered behaviors remain useful under distribution shifts and stricter execution constraints.

## Connections

ShinkaEvolve checks code similarity and asks an LLM to assess novelty before spending on candidate evaluation. MetaMuse instead uses measured performance vectors to steer subsequent idea generation. This exposes a concrete trade-off between inexpensive semantic filtering and more costly evidence about behavioral diversity.
