---
id: pareto-grid-guided-large-language-models-for-fast-and-high-quality-heuri
short_title: 'Pareto Grid Guided'
title: 'Pareto-Grid-Guided Large Language Models for Fast and High-Quality Heuristics Design in Multi-Objective Combinatorial Optimization'
authors:
  - 'Ha Minh Hieu'
  - 'Hung Phan'
  - 'Tung Duy Doan'
  - 'Tung Dao'
  - 'Cong Dao Tran'
  - 'Huynh Thi Thanh Binh'
year: 2026
date: 2026-01-01
venue: 'Proceedings of the AAAI Conference on Artificial Intelligence'
paper_url: https://ojs.aaai.org/index.php/AAAI/article/download/41024/44985
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Multi-objective combinatorial optimization problems (MOCOP) frequently arise in practical applications that require the simultaneous optimization of conflicting objectives. Although traditional evolutionary algorithms can be effective, they typically depend on domain knowledge and repeated parameter tuning, limiting flexibility when applied to unseen MOCOP instances.'
---

## Why it matters

Multi-objective combinatorial optimization problems (MOCOP) frequently arise in practical applications that require the simultaneous optimization of conflicting objectives. Although traditional evolutionary algorithms can be effective, they typically depend on domain knowledge and repeated parameter tuning, limiting flexibility when applied to unseen MOCOP instances.

## Core method

The paper's abstract describes the following design loop:

> Multi-objective combinatorial optimization problems (MOCOP) frequently arise in practical applications that require the simultaneous optimization of conflicting objectives. Although traditional evolutionary algorithms can be effective, they typically depend on domain knowledge and repeated parameter tuning, limiting flexibility when applied to unseen MOCOP instances. Recently, integration of Large Language Models (LLMs) into evolutionary computation has opened new avenues for automatic heuristic generation, using their advanced language understanding and code synthesis capabilities. Nevertheless, most existing approaches predominantly focus on single-objective tasks, often neglecting key considerations such as runtime efficiency and heuristic diversity in multi-objective settings. To bridge this gap, we introduce Multi-heuristics for MOCOP via Pareto-Grid-guided Evolution of LLMs (MPaGE), a novel enhancement of the Simple Evolutionary Multiobjective Optimization (SEMO) framework that leverages LLMs and Pareto Front Grid (PFG) technique. By partitioning the objective space into grids and retaining top-performing candidates to guide heuristic generation, MPaGE utilizes LLMs to prioritize heuristics with semantically distinct logical structures during variation, thus promoting diversity and mitigating redundancy within the population. Through extensive evaluations, MPaGE demonstrates superior performance over existing LLM-based frameworks, and achieves competitive results to traditional Multi-objective evolutionary algorithms (MOEAs), with significantly faster runtime. Our code is available at: https://github.com/langkhachhoha/MPaGE.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: ed to automate heuristic design dominated solutions. Each iteration selects a random solu- in combinatorial optimization. Core approaches like EoH, tion from the archive, explores one of its neighbors, and 36965 Figure 1: Overview of the proposed method. The heuristics are first r

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
