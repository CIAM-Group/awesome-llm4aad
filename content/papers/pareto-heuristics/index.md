---
id: pareto-heuristics
short_title: 'Pareto-Grid'
title: Pareto-Grid-Guided Large Language Models for Fast and High-Quality Heuristics
  Design in Multi-Objective Combinatorial Optimization
authors:
- Ha Minh Hieu
- Hung Phan
- Tung Duy Doan
- Tung Dao
- Cong Dao Tran
- Huynh Thi Thanh Binh
year: 2026
date: 2026-01-01
venue: Proceedings of the AAAI Conference on Artificial Intelligence
paper_url: https://ojs.aaai.org/index.php/AAAI/article/download/41024/44985
institutions:
- hanoi-university-science-technology
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: Multi-objective combinatorial optimization problems (MOCOP) frequently arise
  in practical applications that require the simultaneous optimization of conflicting
  objectives. Although traditional evolutionary algorithms can be effective, they
  typically depend on domain knowledge and repeated parameter tuning, limiting flexibility
  when applied to unseen MOCOP instances.
---
## Why it matters

Multi-objective combinatorial optimization problems (MOCOP) frequently arise in practical applications that require the simultaneous optimization of conflicting objectives. Although traditional evolutionary algorithms can be effective, they typically depend on domain knowledge and repeated parameter tuning, limiting flexibility when applied to unseen MOCOP instances.

## Core method

The method treats heuristic quality as a multi-objective search problem. A Pareto grid balances objective value with runtime and structural diversity, so selection does not collapse the population onto one expensive or redundant design.

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
