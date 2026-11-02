---
id: agenticevolve
short_title: "AgenticEvolve"
title: "AgenticEvolve: Evolutionary Program Search with Persistent Language Model Agents that Design and Run Experiments"
authors:
  - "Ze-Yu Peng"
  - "Qing-Yu Lan"
  - "Zhan-He Wang"
  - "Jun Zhang"
  - "Yun-Song Piao"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.31326
code_url: https://github.com/pengzy-cosmo/AgenticEvolve
institutions:
  - university-chinese-academy-sciences
  - cas-theoretical-physics
primary_dimension: search
dimensions:
  - search
  - feedback
problems:
  - "Online bin packing"
  - "Dynamic job shop scheduling"
  - "Symbolic regression"
featured: false
summary: "AgenticEvolve runs a persistent experimental agent on each evolutionary island, combining self-designed analyses with formal evaluation, MAP-Elites archives, and elite migration."
---

## Why it matters

One-shot mutation sees code and scores but cannot inspect behavior through its own experiments. This paper isolates whether giving the variation operator experimental agency improves discovery.

## Core method

Each island retains a conversation and editable candidate program. Before committing a candidate, the agent can write and run a separate analysis script, generate task instances, inspect outputs, and revise code. The formal evaluator remains separate and hides its inputs; a commit consumes evaluation budget and returns restricted metrics or diagnostics. All commits enter shared storage, successful programs compete within the island's MAP-Elites grid, and ring migration adds neighboring elites to future archive summaries. Agents choose whether to retrieve and use those programs. Context compaction preserves a research summary and persistent artifacts. A matched No-analysis ablation disables only the experiment tool, retaining agent persistence, archives, migration, and budgets.

## Contributions

- Separates autonomous experimental work from formal scoring and directly ablates the former.
- Reports better heuristic quality across three models and increased equation-structure recovery on twelve selected LLM-SRBench problems.

## Strengths and limitations

The scheduling test changes random seeds but not scenarios; symbolic-regression cases are a selected subset. Cost gains depend on model pricing and prompt caching, so fewer formal evaluations do not imply universally lower total cost. Execution restrictions are protocol-level rather than operating-system isolation, which limits strong claims of inaccessible evaluation data.

## What to improve

Use enforced sandboxes, include experiment runtime in cost frontiers, and evaluate distribution shifts beyond fresh seeds and selected symbolic cases.

## Connections

Both let an agent gather evidence between formal heuristic evaluations. [AHD Agent](../ahd-agent/index.md) chooses from predefined instance-analysis and AST diagnostics. AgenticEvolve lets persistent island agents write and run their own analysis scripts before committing a candidate to the protected evaluator.
