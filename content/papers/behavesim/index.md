---
id: behavesim
short_title: "BehaveSim"
title: "Rethinking Code Similarity for Automated Algorithm Design with LLMs"
authors:
  - "Rui Zhang"
  - "Zhichao Lu"
year: 2026
date: 2026-04-23
venue: "ICLR"
paper_url: https://arxiv.org/pdf/2603.02787
code_url: https://github.com/RayZhhh/behavesim
institutions:
  - cityu-hk
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Algorithm Similarity Evaluation"
featured: false
summary: "BehaveSim measures generated algorithms by their problem-solving trajectories rather than by surface-level code similarity."
---

## Why it matters

Population diversity is useful only when different-looking programs actually solve the problem differently. Token, AST, embedding, and final-output similarity can confuse cosmetic rewrites with algorithmic novelty. BehaveSim makes the behavior executed between input and output the comparison object.

## Core method

Each candidate is instrumented to produce a sequence of task-relevant intermediate solutions. Dynamic Time Warping aligns trajectories of different lengths and yields a behavioral distance. The metric is first tested on controlled pairs covering syntax/behavior mismatch cases, then integrated into FunSearch-style selection to suppress behaviorally redundant candidates.

Experiments compare BehaveSim with token, AST, embedding, and output-based measures. When used during search, behavioral diversity improves efficiency and the quality of the final top programs.

## Contributions

- A trajectory-level definition of algorithm similarity.
- A DTW measure that handles unequal execution-trace lengths.
- Evidence that the metric improves search rather than only classifying static code pairs.

## Strengths and limitations

The measure targets algorithmic process more directly than source-code distance. It requires a task-specific choice of what state to log; a poor trajectory can hide important differences, and pairwise DTW becomes expensive for long traces or large archives.

## What to improve

Learn compact trace representations, approximate distances for large archives, and test whether behavioral novelty predicts generalization rather than only diversity on design instances.

## Connections

BehaveSim supplies a missing diversity signal for FunSearch and related evolutionary systems. It could complement AST-based variation and Code Graph by checking whether structural novelty produces genuinely different behavior.
