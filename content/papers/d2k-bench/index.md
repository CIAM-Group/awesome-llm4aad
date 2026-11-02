---
id: d2k-bench
short_title: "D2K-Bench"
title: "D2K-Bench: Can LLM Agents Turn Expert Designs into Efficient GPU Kernels?"
authors:
  - "Daifeng Li"
  - "Huiqiang Jiang"
  - "Chengruidong Zhang"
  - "Wei Wu"
  - "Xudong Guo"
  - "Jianhong Tu"
  - "Jianwei Zhang"
  - "Binhang Yuan"
  - "Dayiheng Liu"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.03226
code_url: https://github.com/QwenLM/D2K-Bench
institutions:
  - hkust
  - alibaba
  - university-science-technology-china
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - "GPU Kernel Generation"
  - "Design-to-Implementation Evaluation"
featured: false
summary: "Tests how expert algorithm, dataflow, and low-level guidance changes generated-kernel correctness, speed, and implemented design properties."
---

## Why it matters

Slow generated kernels may lack the right algorithm, fail to realize a good design, or both. Runtime alone cannot distinguish these causes.

## Core method

Twenty-six tasks with 85 workloads pair a PyTorch reference with expert-derived guidance at three dependent levels: algorithmic transformations, dataflow, and execution techniques. Guided and unguided agents receive identical tools, Triton interfaces, B200 hardware, and 350-turn budgets; neither receives expert source code.

Candidates compile, run correctness checks, and receive timing and profiling feedback. The best fully valid submission is retained. Separate runtime-blind LLM assessments score independent design proposals and evidence in generated code. Cumulative L1, L1+L2, and L1+L2+L3 ablations respect dependencies rather than pretending the levels are independent interventions.

## Contributions

The protocol connects stated designs, realized implementation properties, and measured performance. Across five models, guidance raises correctness from 93.1% to 98.5% and the all-task performance score from 1.46 to 1.95.

## Strengths and limitations

Pairing makes guidance effects inspectable, but the tasks, hardware, expert selection, and model-based rubrics restrict generalization. The performance score penalizes invalid tasks and is not always a raw speedup. Judge agreement at model-aggregate level does not establish causal attribution for individual techniques.

## What to improve

Repeat runs, audit rubric judgments with experts, and test guidance transfer across hardware and unseen workload shapes.

## Connections

[Strong Priors](../strongprior/index.md) supplies algorithmic starting code; D2K-Bench supplies structured design explanations without source code. The contrast separates useful prior knowledge from the remaining burden of implementing it efficiently.
