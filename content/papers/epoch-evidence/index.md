---
id: epoch-evidence
short_title: "EPOCH-Evidence"
title: "EPOCH: Reliable Discovery through Evidence-Governed Search"
authors:
  - "Binjie Guo"
  - "Aisheng Mo"
  - "Ruitong Li"
  - "Xinle Deng"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.06986
institutions:
  - zhejiang
  - hku
primary_dimension: feedback
dimensions:
  - feedback
  - search
  - scope
problems:
  - "Algorithm optimization"
  - "Mathematical constructions"
  - "Evidence-governed discovery"
featured: false
summary: "Uses explicit task contracts, typed trial records, falsification, admission gates, and frozen-endpoint replay to bind discoveries to their supported scope."
---

## Why it matters

Passing an evaluator, checking a finite certificate, and proving a general theorem support different claims. EPOCH records these distinctions during search rather than treating a high score as sufficient evidence of discovery.

## Core method

A task contract fixes public and terminal data, evaluators, budget, editable artifacts, and allowed claim scope. Each proposal includes a candidate, mechanism hypothesis, predicted effect, references to prior evidence, and an intended falsifier. An append-only ledger records artifact/evaluator identity, objective, correctness, resource use, and failure attribution; the model receives a bounded projection. Explore, refine, recover, and finalize phases use that evidence without claiming a learned optimal schedule. Candidate admission requires all applicable correctness, challenge, resource, and scope gates to pass; failed and unresolved checks remain distinct and cannot replace a verified incumbent. After selection, independent replay evaluates the frozen artifact without feeding results back into that run. A sealed record binds the claim to its contract and receipts.

## Contributions

- Separates useful failure evidence from eligibility to become the retained endpoint.
- Evaluates a 12-task AlgoTune subset, internal Math14, and AgentHPO component ablations.
- Audits executable constructions and mathematical artifacts with explicit finite-check, formal-proof, and unresolved-bridge boundaries.

## Strengths and limitations

The safety invariant is only relative to the registered checkers and their coverage. Official-test replay covers a different eligible endpoint population from the development aggregate; scores should not be read as identical-sample effects. Resource accounting and paired replication remain limited, and some mathematical claims still need external review or proof bridges. No public framework-code URL is supplied.

## What to improve

Release replayable artifacts and complete resource ledgers, enlarge paired evaluation, and independently audit the alignment between formal statements and generated objects.

## Connections

[Lean Runtime](../lean-runtime/index.md) pursues machine-checked asymptotic runtime certificates for generated randomized algorithms. EPOCH instead governs heterogeneous empirical, finite, and formal evidence through scoped admission. Both constrain what can be claimed, but only the former makes a particular runtime-proof target central. This EPOCH is unrelated to [EPOCH-Coverage](../epoch-coverage/index.md).
