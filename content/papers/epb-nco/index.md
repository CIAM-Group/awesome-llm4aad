---
id: epb-nco
short_title: 'EPB'
title: Interpreting Neural Combinatorial Optimization via Evolving Programmatic Bottlenecks
authors:
- Haocheng Duan
- Yuxin Guo
- Jieyi Bi
- Anqi Xie
- Sirui Li
- Yining Ma
- Cathy Wu
year: 2026
date: 2026-06-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2606.19741
institutions:
- carnegie-mellon
- microsoft
- ntu
primary_dimension: design-object
dimensions:
- design-object
- search
- scope
problems:
- Automatic algorithm design
featured: false
summary: Neural Combinatorial Optimization (NCO) achieves strong performance, yet
  its black-box nature remains a key roadblock to deployment and scientific diagnosis.
  Standard interpretability tools, such as Concept Bottleneck Models (CBMs), are ill-equipped
  for NCO, whose decisions are dynamic, state-dependent, and lack proper concept vocabulary
  definition.
---
## Why it matters

Neural Combinatorial Optimization (NCO) achieves strong performance, yet its black-box nature remains a key roadblock to deployment and scientific diagnosis. Standard interpretability tools, such as Concept Bottleneck Models (CBMs), are ill-equipped for NCO, whose decisions are dynamic, state-dependent, and lack proper concept vocabulary definition.

## Core method

The work evolves programmatic bottlenecks that expose and approximate the decision logic of neural combinatorial-optimization policies. The generated programs are evaluated for fidelity and interpretability, rather than serving as a new routing solver.

## Contributions

- A concrete LLM-based design loop for the target artifact.
- An evaluator or verifier that supplies feedback to subsequent proposals.
- Experiments that expose the method's transfer or scaling behavior.

## Strengths and limitations

The method makes the design artifact executable and lets task feedback guide later proposals. Its conclusions remain tied to the evaluator, search budget, and task scaffold; transfer outside the reported settings is therefore an open question.

## What to improve

Useful follow-ups include stronger behavioral deduplication, cross-task evaluation, and explicit accounting of model and verifier cost.

## Connections

The relation atlas records only method-level links supported by the paper's method or experiments.
