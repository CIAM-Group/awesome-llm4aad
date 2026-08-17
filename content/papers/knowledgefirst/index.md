---
id: knowledgefirst
short_title: "Knowledge-first"
title: "Back to the Beginning of Heuristic Design: Bridging Code and Knowledge with LLMs"
authors:
  - "Nguyen Viet Tuan Kiet"
  - "Bui Dinh Pham"
  - "Dao Van Tung"
  - "Tran Cong Dao"
  - "Huynh Thi Thanh Binh"
year: 2026
date: 2026-05-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2605.06123
institutions:
  - hust
  - university-sydney
primary_dimension: design-object
dimensions:
  - design-object
  - feedback
  - scope
problems:
  - "Combinatorial Optimization"
featured: false
summary: "This paper makes reusable algorithmic knowledge, rather than code alone, the primary search object in automatic heuristic design."
---

## Why it matters

Most AHD systems search executable programs and summarize insights afterward. That bottom-up loop can lose the principle behind a useful implementation and makes transfer difficult. This work reverses the direction: evolve explicit knowledge first, then generate code to test it.

## Core method

The formal view treats knowledge as a compressed hypothesis about strong heuristics and code as its task-specific realization. Too much compression loses performance-relevant detail; too little becomes an untransferable program trace. Population- and tree-based instantiations evolve knowledge statements, synthesize executable artifacts from them, evaluate those artifacts, and revise the knowledge. Hybrid variants combine this top-down loop with conventional code-centric search.

Experiments span combinatorial optimization and tasks beyond it, measuring discovery efficiency, transfer, and generalization rather than only in-run best fitness.

## Contributions

- A top-down AHD formulation with knowledge as the primary state.
- A distortion-compression account of reusable algorithmic hypotheses.
- Population, tree, and hybrid implementations tested for transfer.

## Strengths and limitations

Explicit hypotheses are readable and can survive implementation changes. Their evaluation is indirect because code generation mediates every fitness signal; poor code can unfairly reject good knowledge. Language-level knowledge may also sound plausible without being operationally precise.

## What to improve

Evaluate one knowledge item through multiple implementations, attach uncertainty and evidence to memory, and test human reuse of discovered principles rather than relying only on automated transfer scores.

## Connections

The paper inverts the thought-code priority of EoH: code is an experiment for evolving knowledge, not the co-equal search object. It also provides a conceptual foundation for memory systems such as HMACE and MeEvo.
