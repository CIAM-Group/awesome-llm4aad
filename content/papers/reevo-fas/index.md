---
id: reevo-fas
short_title: ReEvo-FAS
title: 'Beyond LLM-GA: Secure Fluid Antenna Systems with ReEvo-Designed Memetic Algorithm'
authors: [Hanyong Xu, Zhaolai Dang, Tong Zhang]
year: 2026
date: 2026-10-01
venue: WCSP 2026 (accepted)
paper_url: https://arxiv.org/pdf/2610.10235
institutions: [hit-shenzhen]
primary_dimension: design-object
dimensions: [design-object, scope, feedback]
problems: [Secure Fluid Antenna Port Selection, Memetic Operator Design]
featured: false
summary: Applies ReEvo offline to crossover, mutation, and local-search operators for secrecy-aware fluid-antenna optimization, then deploys the frozen operators without LLM calls.
---

## Why it matters

Secure antenna-port selection couples discrete placement with continuous beamforming. Evolving only a genetic crossover or mutation rule leaves other search stages manually constrained and can miss secrecy-specific local refinements.

## Core method

A feasible chromosome selects a fixed number of antenna ports. For each operator class, ReEvo compares higher- and lower-fitness programs, reflects on the differences, and generates improved code. Fitness is the best secure sum-rate achieved by the inner search with secure WMMSE beamforming, rather than a stand-alone port surrogate.

Operators are evolved sequentially: crossover first, mutation with crossover fixed, then local search with both fixed. The final crossover uses elite-port statistics and geometry; mutation performs feasible swaps; local search proposes four complementary one-swap neighbors. Cardinality repair, invalid-program rejection, cached evaluations, and elitist replacement constrain deployment. No online LLM queries are required.

## Contributions

The design extends LLM-generated operators to all three discrete stages under a common secrecy objective. Separate training, validation, and paired test channels evaluate the resulting optimizer, which improves reported secure sum-rate over conventional and single-operator LLM genetic algorithms.

## Strengths and limitations

Offline code generation makes deployment costs explicit. Perfect channel information, including the eavesdropper channel, is assumed. Equal generation counts are not equal evaluator budgets because local search evaluates additional neighbors; the result should not be read as a matched-compute speedup.

## What to improve

Compare equal beamformer-evaluation budgets, test imperfect or delayed channel information, and evaluate whether jointly evolving the three operators improves on sequential freezing.

## Connections

[ReEvo](../reevo/index.md) supplies the reflective code-evolution method directly. This application adapts its generated operators to secrecy-aware antenna selection and couples them to a continuous beamforming evaluator.
