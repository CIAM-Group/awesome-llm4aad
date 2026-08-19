---
id: revel
short_title: 'ReVEL'
title: 'ReVEL: Multi-Turn Reflective LLM-Guided Heuristic Evolution via Structured
  Performance Feedback'
authors:
- Cuong Van Duc
- Minh Nguyen Dinh Tuan
- Tam Vu Duc
- Tung Vu Duy
- Son Nguyen Van
- Hanh Nguyen Thi
- Binh Huynh Thi Thanh
year: 2026
date: 2026-04-01
venue: ArXiv.org
paper_url: https://arxiv.org/pdf/2604.04940
institutions:
- hanoi-university-science-technology
- phenikaa-university
- vinuniversity
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Designing effective heuristics for NP-hard combinatorial optimization problems
  remains challenging and often requires substantial domain expertise. Recent LLM-guided
  evolutionary methods have shown promise for automated heuristic generation, but
  most existing approaches refine heuristics independently or through limited pairwise
  feedback.
---
## Why it matters

Designing effective heuristics for NP-hard combinatorial optimization problems remains challenging and often requires substantial domain expertise. Recent LLM-guided evolutionary methods have shown promise for automated heuristic generation, but most existing approaches refine heuristics independently or through limited pairwise feedback.

## Core method

ReVEL groups candidate heuristics by observed behavior before reflection. Similarity groups support local refinement, diversity groups encourage exploration, and multi-turn feedback lets the LLM revise a group across several evolutionary iterations.

## Contributions

- A concrete LLM-based design loop for the target artifact.
- An evaluator or verifier that supplies feedback to subsequent proposals.
- Experiments that expose the method's transfer or scaling behavior.

## Strengths and limitations

The method makes the design artifact executable and lets task feedback guide later proposals. Its conclusions remain tied to the evaluator, search budget, and task scaffold; transfer outside the reported settings is therefore an open question.

## What to improve

Useful follow-ups include stronger behavioral deduplication, cross-task evaluation, and explicit accounting of model and verifier cost.

## Connections

The relation atlas records only method-level links supported by the paper's method or experiments.
