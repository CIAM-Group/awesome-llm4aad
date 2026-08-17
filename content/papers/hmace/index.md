---
id: hmace
short_title: "HMACE"
title: "HMACE: Heterogeneous Multi-Agent Collaborative Evolution for Combinatorial Optimization"
authors:
  - "Yuping Yan"
  - "Jirui Han"
  - "Fei Ming"
  - "Yuanshuai Li"
  - "Yaochu Jin"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.07214
institutions:
  - westlake
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Traveling Salesman Problem"
  - "Online Bin Packing"
  - "Multiple Knapsack Problem"
  - "Permutation Flow Shop Scheduling"
featured: false
summary: "HMACE assigns proposal, generation, evaluation, and reflection to specialized agents in a memory-backed evolutionary workflow."
---

## Why it matters

Monolithic AHD prompts mix planning, coding, judging, and memory into one role. That encourages repeated ideas and weak use of prior evaluations. HMACE treats the evolutionary generation as an organization of specialized agents with explicit information flow.

## Core method

A Proposer explores design strategies, a Generator turns them into executable heuristics, an Evaluator measures task fitness, and a Reflector converts outcomes into archive updates. Behavior-aware retrieval supplies relevant past experience; lightweight filtering rejects redundant or weak candidates before expensive evaluation; fitness grounds what enters memory.

Across TSP, online BPP, MKP, and PFSP, HMACE is compared with single- and multi-agent baselines. In matched LLM comparisons it reports 0.464% and 0.223% average gaps on TSP and online BPP with 0.13M and 0.42M tokens respectively.

## Contributions

- A four-role collaborative architecture for each evolutionary generation.
- Behavior-aware retrieval and fitness-grounded long-term memory.
- Explicit filtering for a quality-efficiency trade-off across four COPs.

## Strengths and limitations

Role separation makes the workflow inspectable and the token/evaluation accounting is useful. More agents do not guarantee independent expertise: all roles may share model biases, and routing messages adds tokens and prompt design. Archive errors can persist across generations.

## What to improve

Ablate role merging under equal tokens, test heterogeneous model assignments, and evaluate whether archive memories transfer across tasks rather than only accelerating one run.

## Connections

HMACE adds organizational structure and memory to evolutionary AHD. AFL also uses specialized agents, but for end-to-end constrained solver construction rather than population evolution.
