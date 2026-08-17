---
id: strongprior
short_title: "Strong Priors"
title: "From Heuristic Selection to Automated Algorithm Design: LLMs Benefit from Strong Priors"
authors:
  - "Qi Huang"
  - "Furong Ye"
  - "Ananta Shahane"
  - "Thomas Bäck"
  - "Niki van Stein"
year: 2026
date: 2026-03-01
venue: "arXiv"
paper_url: https://arxiv.org/pdf/2603.02792
institutions:
  - leiden-university
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Pseudo-Boolean Optimization"
  - "Black-Box Optimization"
featured: false
summary: "This study shows that strong algorithmic priors can make LLM-driven algorithm design more efficient and robust."
---

## Why it matters

Open-ended generation is attractive, but a vast algorithm space can make LLM search inefficient and unstable. Traditional heuristic selection operates in a narrow portfolio with strong prior structure. This paper studies that spectrum and asks how much useful design comes from supplying a high-quality algorithmic starting point.

## Core method

Attribution analysis examines which parts of prompt code influence generated modifications. The design experiments then provide established algorithms as code priors and let LLM-based search refine or specialize them, contrasting this with weaker-prior and selection-style baselines. Pseudo-Boolean optimization and BBOB continuous black-box suites test discrete and continuous regimes.

The paper reports improved efficiency and stability with strong priors, framing heuristic selection as a constrained special case of instance-specific algorithm design.

## Contributions

- Connects heuristic selection and open-ended AAD through prior strength.
- Uses attribution analysis to motivate code-level prior design.
- Empirical evidence on both pseudo-Boolean and continuous black-box suites.

## Strengths and limitations

The work corrects the assumption that less human structure is always better and offers a practical route to lower search cost. Strong priors can cap novelty, leak benchmark expertise, and make gains look like local tuning. The linked repository is promised upon acceptance and is not yet counted as available code.

## What to improve

Vary prior quality and distance systematically, test whether the method can abandon a misleading prior, and report novelty relative to the starting algorithm alongside final fitness.

## Connections

This paper supplies a counterpoint to from-scratch and open-ended systems such as ShinkaEvolve. It places heuristic selection, warm-started evolution, and full AAD on one continuum.
