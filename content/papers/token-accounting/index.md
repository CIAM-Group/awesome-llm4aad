---
id: token-accounting
short_title: "Token Accounting"
title: "LLM Evolutionary Search Strategies Should be Compared by Tokens"
authors:
  - "Tal Oved"
  - "Roi Pony"
  - "Oshri Naparstek"
  - "Udi Barzelay"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.23977
institutions:
  - ibm-research
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Evolutionary Search Evaluation"
  - "Search Cost Accounting"
featured: false
summary: "Replays evolutionary-search trajectories against cumulative token budgets and audits scorer exploits before comparing them with independent sampling."
---

## Why it matters

A proposal can include long archives, retries, and controller calls. Equal proposal counts need not grant competing search procedures equal resources.

## Core method

The analysis reuses 600 logged runs: forty seeds for each of three strategies on five systems and mathematical tasks. Every model call contributes prompt, completion, and reasoning tokens to a best-so-far trajectory. Exact order statistics compare seed-width/depth allocations with an independently sampled program pool at matched token budgets, without extrapolating beyond available samples.

The audit re-executes potentially leading programs and checks transaction coverage, delivered partitions, and simulator inputs. Both evolution and sampling must obey the same task-validity rules.

## Contributions

The paper measures the cost hidden by proposal counts and shows how selection amplifies evaluator exploits. A purported fivefold scheduling improvement collapses after incomplete schedules are rejected.

## Strengths and limitations

After token matching and audit, evolution's advantage is at most 5% in twelve of fifteen task–method pairs; larger gains remain on Heilbronn search. This does not establish universal parity: the finite sampling pool restricts the comparison window, evolutionary curves still improve there, and token counts are not identical to hardware compute or money across models.

## What to improve

Report token, wall-clock, and evaluator costs together, log coverage during search, and select allocation policies on independent tasks.

## Connections

[Evolution or Illusion](../evolution-or-illusion/index.md) compares width and depth at a fixed number of proposals. The token-accounting study treats proposal cost as variable and compares logged search with independent sampling at equal cumulative model tokens. The papers address complementary accounting choices, and the latter describes the former as concurrent work.
