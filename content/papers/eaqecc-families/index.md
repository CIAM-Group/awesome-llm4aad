---
id: eaqecc-families
short_title: "EAQECC Families"
title: "Researcher-in-the-Loop Evolutionary Discovery of Entanglement-Assisted Quantum Code Families"
authors:
  - "Jae-Hyun Baek"
  - "Byung-Sun Won"
  - "Jon-Lark Kim"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.41183
code_url: https://github.com/LeGenAI/llm_guided_EAQECC_search
institutions:
  - sogang
  - ewha-womans
primary_dimension: scope
dimensions:
  - scope
  - design-object
  - feedback
problems:
  - "Quantum Error-Correcting Code Discovery"
  - "Certified Mathematical Generalization"
featured: false
summary: "Evolves finite-code search programs, then combines researcher-led family generalization with exact checks, nonexistence certificates, and Lean-checked algebra."
---

## Why it matters

A valid finite construction does not establish an infinite family, an optimality claim, or autonomous mathematical discovery. This study separates those evidential steps.

## Core method

AlphaEvolve edits a designated block of an annealing-style search program. The resulting program proposes matrices; an exact oracle computes code parameters and rewards promising entanglement-assisted quantum codes. Four campaigns contain 401 program evaluations with 240-second allocations.

Researchers inspect the finite outputs, derive a family formula, extend it to prime-power fields, and check the underlying algebraic certificate in Lean. Magma checks finite constructions, while checked DRAT proofs support ten nonexistence results. Later prompts incorporating the discovered formula are distinguished from the initial discovery campaigns.

## Contributions

The family and entanglement lifting close 54 gaps in archived tables. A separate eight-block comparison tests iterative versus independent program generation: validation-selected programs transfer to unseen lengths with held-out success rates of 46.1% and 31.6%, versus 19.5% and 3.1%.

## Strengths and limitations

Programs, finite codes, mathematical generalization, and proof artifacts have separate provenance. However, the primary controlled effect is not statistically significant at the generation-block level; equal proposal counts are not equal token budgets. Exact verification scales poorly, and the results concern algebraic code parameters, not hardware error rates. Human generalization is essential.

## What to improve

Increase independent generation blocks, compare token- and compute-matched controls, and evaluate physical decoding and circuit costs.

## Connections

The EAQECC study uses [AlphaEvolve](../alphaevolve/index.md) to modify exact-oracle-guided search programs, then separates finite-code generation from researcher-led family generalization, checked algebra, and nonexistence certificates.

For quantum-code discovery, [Weight-Five BB](../weight-five-bb/index.md) uses staged distance estimates to rank candidates and certifies selected results afterward. EAQECC Discovery uses exact parameter evaluation within its program search and independently rechecks returned codes. The code families and evaluation costs differ.
