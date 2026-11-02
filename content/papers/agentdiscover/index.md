---
id: agentdiscover
short_title: "AgentDiscover"
title: "AgentDiscover: Autonomous Discovery with Minimal Search Scaffolding"
authors:
  - "Mahdi Farahbakhsh"
  - "Ilan Sela"
  - "Fatemeh Doudi"
  - "Vishnu Teja Kunde"
  - "Krishna Narayanan"
  - "Jean-Francois Chamberland"
  - "Dileep Kalathil"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.05334
code_url: https://github.com/mhdfb/AgentDiscover
institutions:
  - texas-am
primary_dimension: search
dimensions:
  - search
  - feedback
  - scope
problems:
  - "Autonomous program search"
  - "Heuristic programming"
  - "Kernel optimization"
  - "Mathematical construction"
featured: false
summary: "Lets a coding agent choose its search through graph-database queries, local experiments, and fresh sessions backed by persistent ideas and candidate lineage."
---

## Why it matters

A capable code generator can still be restricted by the candidates and history a fixed search controller chooses to expose. AgentDiscover transfers those selection decisions to the agent while retaining external evaluation and structured memory.

## Core method

A sandboxed coding agent can issue read-only queries over a graph of ideas, candidates, sessions, and lessons, write experimental tools, and submit programs. The server validates database writes through dedicated interfaces, evaluates submissions outside the worktree, and returns fitness with steering information such as remaining candidate allowance. Idea membership and lineage make classical selectors expressible as queries—for example, retrieving the best candidate per idea—without forcing the agent to use them. When a session stalls or becomes costly, a fresh agent inherits the database, tools, and skills but not its conversation. An optional meta agent reads prior transcripts and measured outcomes after each session, then writes skills about the search process for later sessions.

## Contributions

- Combines agent-selected retrieval, experiment planning, persistent graph memory, and protected evaluation.
- Tests 24 problems, including official AtCoder system tests and model-spend-controlled comparisons.
- Corrects several inherited evaluators that allowed reward hacking and separately studies parallelism and meta guidance.

## Strengths and limitations

Each main-table result is a single run, and some comparisons use published candidate-count budgets rather than matched total cost. Reset associations alone do not prove a causal benefit; the meta-agent fork study is more controlled. Four workers improve wall time but not clearly model-spend efficiency. The paper does not analyze which search rules agents actually adopt.

## What to improve

Replicate cost-matched runs, log and classify actual selection policies, and separate the effects of queryable memory, resets, and agent-driven planning.

## Connections

[SLA](../sla/index.md) also separates durable records from short-lived sessions. AgentDiscover lets each agent query arbitrary relevant history and choose experiments; SLA's harness constructs restricted role-specific contexts and an Advisor assigns explicit work. This isolates an autonomy-versus-context-control trade-off.
