---
id: dish
short_title: "DiSH"
title: "Harnessing LLMs with Direction-Scope Control for Combinatorial Solver Refinement"
authors:
  - "Yili Cao"
  - "Anqi Li"
  - "Haoran Li"
  - "Yongtang Shi"
  - "Zicheng Zhang"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.05221
institutions:
  - nankai
  - university-waterloo
  - jd-com
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Combinatorial solver refinement"
  - "Feasibility preservation"
  - "Diagnostic feedback"
featured: false
summary: "Groups representative failures and progressively narrows permitted code changes as solver feasibility increases, reducing repair-induced regressions."
---

## Why it matters

A revision may fix current failures while breaking previously feasible instances, even when the aggregate pass rate improves. DiSH explicitly controls both which failures guide an edit and how extensive that edit may be.

## Core method

Every demonstration instance passes through execution/resource, output-format, and constraint checks; the record identifies its first failed stage or feasible objective. The current feasible fraction chooses a semantic revision mode: broad algorithm replacement at low feasibility, then progressively narrower strategy and parameter edits, with protected behavior at full feasibility. These are prompt-level instructions, not a proof that edits cannot violate constraints. Direction control groups failures by stage and normalized diagnostic signature. Alternatives select one representative per group, prioritize cross-round regressions, or focus on high-coverage groups according to current scope. Successful cases remain as anchors. The selected evidence and scope instruction accompany the current solver in the next generation prompt.

## Contributions

- Measures instance-level feasibility oscillation rather than only net pass-rate changes.
- Separates scope control from representative-evidence construction and tests their interaction.
- Evaluates nine combinatorial benchmarks and four backbones, reporting held-out quality/yield and demonstration-set stability.

## Strengths and limitations

The policy primarily protects feasibility, so its increasingly conservative edits may inhibit quality improvement after all demonstrations pass. Thresholds and representative-selection rules are hand-designed. Prompt compliance is empirical, and feasibility on demonstrations does not establish correctness on unseen inputs. Quality components can be computed on different verified subsets across methods.

## What to improve

Learn quality-aware scope rules, retain regression protection while allowing major improvements, and report quality on common feasible test subsets as well as yield.

## Connections

[RefineEvo](../refineevo/index.md) adapts operator choice from population statistics and retrieves trajectory-conditioned lessons. DiSH instead derives a separate pre-generation edit-scope restriction directly from feasibility and compresses failures by diagnostic groups, emphasizing regression prevention over broad evolutionary exploration.
