---
id: algoreval
short_title: "AlgoREval"
title: "Are you Synthesizing or Recalling? Evaluating LLMs on Algorithmic Code Retrieval"
authors:
  - "Nickil Maveli"
  - "Antonio Vergari"
  - "Shay B. Cohen"
year: 2026
date: 2026-10-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2610.02438
code_url: https://github.com/Nickil21/AlgoREval
institutions:
  - edinburgh
primary_dimension: feedback
dimensions:
  - feedback
  - design-object
problems:
  - "Algorithmic Code Retrieval"
  - "Code Generation Evaluation"
featured: false
summary: "Measures reproduction of named algorithms across languages and input representations, separating this operational task from claims of novel algorithm synthesis."
---

## Why it matters

Successfully implementing a familiar named algorithm is useful, but does not by itself show algorithmic invention or robust correctness.

## Core method

AlgoREval poses 599 entries covering 77 classical algorithms, seven languages, and several graph representations. Prompts specify the algorithm, interface, concrete input, and required output. Generated code is compiled when needed and run under a timeout; normalized output matching determines success, with static, runtime, timeout, and wrong-output failures reported separately.

Fifteen models are evaluated zero-shot. Further experiments add retrieved implementations or structured hints, then compare supervised fine-tuning and execution-reward GRPO on algorithm-level held-out splits. Timing and implementation comparisons probe whether different outputs resemble known legitimate algorithm variants.

## Contributions

The benchmark isolates interface-sensitive reproduction of established algorithms and shows that language and input encoding materially change measured reliability.

## Strengths and limitations

Executable checks expose runnable but incorrect code, and algorithm-level splits reduce training/evaluation overlap in adaptation experiments. However, one fixed test input does not establish general correctness. The authors cannot verify per-algorithm pretraining exposure, so behavior cannot conclusively distinguish internal retrieval from synthesis; fine-tuning gains also vary across splits.

## What to improve

Add property-based and adversarial tests, broaden representation coverage, and use controlled training corpora to test retrieval explanations directly.

## Connections

AlgoREval's supplementary fidelity audit compares a judge-inferred technique category from a task statement with the category found in generated code. [DecompGym](../decompgym/index.md) instead prescribes a decomposition contract and audits operative master-subproblem information flow and claimed solution status. Both examine method conformance, but inferred category agreement and an explicit operational contract establish different kinds of evidence.
