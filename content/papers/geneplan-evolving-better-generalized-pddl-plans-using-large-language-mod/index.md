---
id: geneplan-evolving-better-generalized-pddl-plans-using-large-language-mod
short_title: 'GenePlan'
title: 'GenePlan: Evolving Better Generalized PDDL Plans Using Large Language Models'
authors:
  - 'Andrew Murray'
  - 'Danial Dervovic'
  - 'Alberto Pozanco'
  - 'Michael Cashmore'
year: 2026
date: 2026-01-01
venue: 'Proceedings of the International Conference on Automated Planning and Scheduling'
paper_url: https://ojs.aaai.org/index.php/ICAPS/article/download/42885/50445
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'We present GenePlan (GENeralized Evolutionary Planner), a novel framework that leverages large language model (LLM) assisted evolutionary algorithms to generate domain-dependent generalized planners for classical planning tasks described in PDDL. By casting generalized planning as an optimization problem, GenePlan iteratively evolves interpretable Python planners that minimize plan length across diverse problem instances.'
---

## Why it matters

We present GenePlan (GENeralized Evolutionary Planner), a novel framework that leverages large language model (LLM) assisted evolutionary algorithms to generate domain-dependent generalized planners for classical planning tasks described in PDDL. By casting generalized planning as an optimization problem, GenePlan iteratively evolves interpretable Python planners that minimize plan length across diverse problem instances.

## Core method

The paper's abstract describes the following design loop:

> We present GenePlan (GENeralized Evolutionary Planner), a novel framework that leverages large language model (LLM) assisted evolutionary algorithms to generate domain-dependent generalized planners for classical planning tasks described in PDDL. By casting generalized planning as an optimization problem, GenePlan iteratively evolves interpretable Python planners that minimize plan length across diverse problem instances. In empirical evaluation across six existing benchmark domains and two new domains, GenePlan achieved an average SAT score of 0.91, closely matching the performance of the state-of-the-art planners (SAT score 0.93), and significantly outperforming other LLM-based baselines such as chain-of-thought prompting (average SAT score 0.64). The generated planners solve new instances rapidly (average 0.49 seconds per task) and at low cost (average $1.82 per domain using GPT-4o).

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: Liu, F.; Tong, X.; Yuan, M.; Lin, X.; Luo, F.; Wang, Z.; Dagan, G.; Keller, F.; and Lascarides, A. 2025. Dynamic Lu, Z.; and Zhang, Q. 2024. Evolution of Heuristics: To- Planning with a LLM. In Proceedings of the Conference on wards Efficient Automatic Algorithm Design using Large Neural Information Processing Systems (NeurIPS). Language Mo

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
