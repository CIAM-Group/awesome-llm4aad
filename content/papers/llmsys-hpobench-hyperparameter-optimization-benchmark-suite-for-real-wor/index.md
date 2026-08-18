---
id: llmsys-hpobench-hyperparameter-optimization-benchmark-suite-for-real-wor
short_title: 'LLMSYS-HPOBench'
title: 'LLMSYS-HPOBench: Hyperparameter Optimization Benchmark Suite for Real-World LLM Systems'
authors:
  - 'Siyu Wu'
  - 'Yulong Ye'
  - 'Zezhen Xiang'
  - 'Pengzhou Chen'
  - 'Gangda Xiong'
  - 'Tao Chen'
year: 2026
date: 2026-05-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2605.08305
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Large Language Model (LLM) systems have been the frontier of AI in many application domains, leading to new challenges and opportunities for hyperparameter optimization (HPO) for the AutoML community. However, this type of system exhibits an unprecedented compound space of hyperparameter configuration from both the AI and non-AI components; rich and nonlinear implications from the fidelity factors; and diverse costs of measuring hyperparameter configurations, none of which have been fully captured in existing benchmarks.'
---

## Why it matters

Large Language Model (LLM) systems have been the frontier of AI in many application domains, leading to new challenges and opportunities for hyperparameter optimization (HPO) for the AutoML community. However, this type of system exhibits an unprecedented compound space of hyperparameter configuration from both the AI and non-AI components; rich and nonlinear implications from the fidelity factors; and diverse costs of measuring hyperparameter configurations, none of which have been fully captured in existing benchmarks.

## Core method

The paper's abstract describes the following design loop:

> Large Language Model (LLM) systems have been the frontier of AI in many application domains, leading to new challenges and opportunities for hyperparameter optimization (HPO) for the AutoML community. However, this type of system exhibits an unprecedented compound space of hyperparameter configuration from both the AI and non-AI components; rich and nonlinear implications from the fidelity factors; and diverse costs of measuring hyperparameter configurations, none of which have been fully captured in existing benchmarks. This paper presents the first (live) benchmark suite and datasets for HPO of real-world LLM systems, dubbed LLMSYS-HPOBench, covering data related to the inference objective values of hyperparameter configurations profiled from running the LLM systems. Currently, LLMSYS-HPOBench contains 364,450 hyperparameter configurations with a dimensionality of 12-23, 3-5 dimensions of fidelity factor leading to 932 settings, 3-9 inference objective metrics, and 2-10 cost metrics, together with generated logs from measuring the LLM systems. What we seek to advocate is not only a revalidation of the existing HPO algorithms over the frontier LLM systems, but also to provide an evolving platform for the AutoML community to explore new directions of research in this regard. The benchmark suite has been made available at: https://github.com/ideas-labo/llmsys-hpobench

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (bibliography_only). Evidence: compiler optimization [61]. Others collect data from a broader range of configurable systems, spanning databases, web services, cloud systems, and video encoders; among them, some consider only a single workload/environment per system [68, 66, 31, 53, 67, 29], whereas others explicitly incorporate multiple workloads/environments [52, 44, 41, 9, 28]. More broadly, MOOT [51] curate

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
