---
id: dgm
short_title: 'DGM'
title: 'Darwin Godel Machine: Open-ended evolution of self-improving agents'
authors:
- Jenny Zhang
- Shengran Hu
- Cong Lu
- Robert Lange
- Jeff Clune
year: 2026
date: '2026-03-12'
venue: ICLR
paper_url: https://arxiv.org/pdf/2505.22954
institutions:
- university-british-columbia
- vector-institute
- sakana-ai
primary_dimension: design-object
dimensions:
- design-object
- search
- scope
problems:
- Automatic algorithm design
featured: false
summary: The Darwin Gödel Machine lets a coding agent modify its own repository, evaluates each child on coding benchmarks, and keeps an archive of validated self-improvements.
code_url: https://github.com/jennyzzt/dgm
---
## Why it matters

The Darwin Gödel Machine targets a broader question than ordinary heuristic search: can a language-model coding agent improve the code that implements the agent itself?

## Core method

DGM maintains an archive of coding agents. It selects an existing agent, asks it to edit its own repository, evaluates the child on coding benchmarks, and adds validated children back to the archive. The archive preserves alternative stepping stones instead of keeping only the latest agent.

## Contributions

- A self-referential archive of coding agents.
- Empirical validation of self-modifications on SWE-bench and Polyglot.
- Sandboxing and traceability safeguards for recursive code changes.

## Strengths and limitations

The method makes the design artifact executable and lets task feedback guide later proposals. Its conclusions remain tied to the evaluator, search budget, and task scaffold; transfer outside the reported settings is therefore an open question.

## What to improve

Useful follow-ups include stronger behavioral deduplication, cross-task evaluation, and explicit accounting of model and verifier cost.

## Connections

The relation atlas records only method-level links supported by the paper's method or experiments.
