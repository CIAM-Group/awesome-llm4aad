---
id: dhfsp-evo
short_title: 'DHFSP-Evo'
title: Automatic generation of heuristic dispatching rules for dynamic hybrid flow
  shop scheduling via personalized multi-island reflective evolution
authors:
- Yuning Lei
- Jin Huang
- Xinyu Li
- Qihao Liu
- Liang Gao
year: 2026
date: 2026-05-01
venue: Tsinghua Science & Technology
paper_url: https://www.sciopen.com/local/article_pdf/10.26599/TST.2026.9010050.pdf
institutions:
- hust
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Dynamic hybrid flow shop scheduling problems (DHFSP) are critical in modern
  manufacturing systems, where uncertainties such as order fluctuations and equipment
  failures pose significant challenges. Traditional exact methods and metaheuristics
  struggle to meet real-time decision-making requirements under such dynamic conditions.
---
## Why it matters

Dynamic hybrid flow shop scheduling problems (DHFSP) are critical in modern manufacturing systems, where uncertainties such as order fluctuations and equipment failures pose significant challenges. Traditional exact methods and metaheuristics struggle to meet real-time decision-making requirements under such dynamic conditions.

## Core method

The dispatching-rule system combines personalized multi-island evolution with reflection. Each island maintains a different search trajectory, while the LLM uses scheduling feedback to revise rules and the final evaluation checks dynamic hybrid flow-shop performance.

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
