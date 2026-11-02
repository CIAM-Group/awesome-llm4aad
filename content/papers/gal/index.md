---
id: gal
short_title: "GAL"
title: "Generative Adversarial Loops"
authors:
  - "Kislay Aditya Oj"
  - "Nidhi Jain"
  - "Sri Surya Varma Datla"
  - "Priyanka Jayaswal"
  - "Kumar Krishna Agrawal"
  - "Aditya Desai"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.11458
institutions:
  - iit-bombay
  - independent-researcher
  - uc-berkeley
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - design-object
problems:
  - "Efficient inference"
  - "KV-cache compression"
  - "Context extension"
featured: false
summary: "Alternates agentic adversarial benchmark generation with algorithm repair, retaining earlier tests to expose and correct approximation failures."
---

## Why it matters

An algorithm can improve on a fixed benchmark while retaining systematic blind spots. GAL makes discovering the next informative failure an explicit search problem alongside editing the algorithm.

## Core method

The discriminator searches for valid inputs that a current approximate-inference algorithm fails, then appends them to a cumulative benchmark. The generator edits the algorithm against that enlarged benchmark while retaining earlier requirements. In long-context tasks, discriminator outputs are executable data-generation programs with answers known by construction; a control using unapproximated inference helps reject intrinsically unsolvable examples. The two searches use agentic/evolutionary harnesses, not adversarial gradient training. In the demonstrated closed loops, GEPA generates counterexamples and coding agents revise the approximation code. For example, a ledger-retrieval failure prompts chunk-stratified KV allocation, followed by a second counterexample that motivates combined key-distinctiveness, attention, and value-norm scoring.

## Contributions

- Finds interpretable failure patterns across KV compression, sparse video generation, sparse attention, and context extension.
- Runs two complete benchmark-generation/algorithm-repair rounds in KV compression and context extension, with separate standard-benchmark checks.
- Measures the search cost needed to expose a failure under a specified adversary.

## Strengths and limitations

The closed-loop evidence covers two domains and two rounds, not all four discriminator tasks. Some standard-benchmark gains are modest or non-monotonic across generations. The proposed cost certificate depends on the adversary, model, budget, and evaluator; it is not a universal robustness guarantee. Finite-convergence reasoning also requires assumptions about the task space and successful repairs.

## What to improve

Run longer replicated loops, reserve unseen adversarial generators for testing, and include generator, discriminator, and execution costs in the same budget.

## Connections

[RAISE](../raise/index.md) also changes the inputs used to judge a generated algorithm. Its adversarial instance search targets robustness within a prescribed uncertainty set; GAL evolves structured benchmark generators and repairs approximate-inference algorithms against a growing archive of counterexamples.
