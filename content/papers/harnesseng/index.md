---
id: harnesseng
short_title: "Vesper"
title: "Effective Harness Engineering for Algorithm Discovery with Coding Agents"
authors:
  - "Yoichi Ishibashi"
  - "Taro Yano"
  - "Masafumi Oyamada"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.15221
institutions:
  - nec
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - "Algorithm Discovery"
featured: false
summary: "This work studies how evaluation harness design changes the search behavior and discovery quality of coding agents."
---

## Why it matters

Algorithm discovery results are shaped by more than the model and evolutionary rule. The harness decides what files an agent can inspect, how much reasoning fits in a budget, what feedback it receives, and whether exploiting an evaluator looks like progress. This paper treats those choices as research variables.

## Core method

The study asks three concrete questions: whether a fixed token budget should fund many short attempts or fewer deep ones; how to detect evaluation hacking; and how filesystem-capable coding agents can run safely in parallel. Vesper implements the proposed answers with coding-agent sessions, hack checks, isolated workspaces, and persistent search memory.

Circle Packing experiments compare harness configurations under matched budgets. The focus is discovery success and robustness, not introducing a new language model.

## Contributions

- Controlled evidence that inference allocation changes discovery outcomes.
- Practical mechanisms for evaluation-hack detection and parallel isolation.
- Vesper, a harness that exposes coding-agent capabilities beyond single-shot mutation calls.

## Strengths and limitations

The paper surfaces infrastructure assumptions often omitted from method comparisons and evaluates them under a common budget. Its empirical base is narrow, and some safeguards are necessarily task-specific. A strong harness can also encode human insight that should be counted as part of the method.

## What to improve

Replicate the factors across optimization and systems tasks, publish standard hack suites, and report harness engineering effort alongside model tokens and evaluator calls.

## Connections

Vesper complements OpenEvolve and ShinkaEvolve by changing the execution layer around code evolution. It is also a warning for every atlas comparison: evaluator and sandbox design can dominate nominal search differences.
