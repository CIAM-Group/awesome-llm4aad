---
id: constraint-aware-path-planning-from-natural-language-instructions-using
short_title: 'Constraint aware'
title: 'Constraint-aware Path Planning from Natural Language Instructions Using Large Language Models'
authors:
  - 'Shim, Dylan'
  - 'Wei, Minghan'
year: 2026
date: 2026-03-01
venue: 'ArXiv.org'
paper_url: https://arxiv.org/pdf/2603.19257
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - scope
problems:
  - Automatic algorithm design
featured: false
summary: 'Real-world path planning tasks typically involve multiple constraints beyond simple route optimization, such as the number of routes, maximum route length, depot locations, and task-specific requirements. Traditional approaches rely on dedicated formulations and algorithms for each problem variant, making them difficult to scale across diverse scenarios.'
---

## Why it matters

Real-world path planning tasks typically involve multiple constraints beyond simple route optimization, such as the number of routes, maximum route length, depot locations, and task-specific requirements. Traditional approaches rely on dedicated formulations and algorithms for each problem variant, making them difficult to scale across diverse scenarios.

## Core method

The paper's abstract describes the following design loop:

> Real-world path planning tasks typically involve multiple constraints beyond simple route optimization, such as the number of routes, maximum route length, depot locations, and task-specific requirements. Traditional approaches rely on dedicated formulations and algorithms for each problem variant, making them difficult to scale across diverse scenarios. In this work, we propose a flexible framework that leverages large language models (LLMs) to solve constrained path planning problems directly from natural language input. The core idea is to allow users to describe routing tasks conversationally, while enabling the LLM to interpret and solve the problem through solution verification and iterative refinement. The proposed method consists of two integrated components. For problem types that have been previously formulated and studied, the LLM first matches the input request to a known problem formulation in a library of pre-defined templates. For novel or unseen problem instances, the LLM autonomously infers a problem representation from the natural language description and constructs a suitable formulation in an in-context learning manner. In both cases, an iterative solution generation and verification process guides the LLM toward producing feasible and increasingly optimal solutions. Candidate solutions are compared and refined through multiple rounds of self-correction, inspired by genetic-algorithm-style refinement. We present the design, implementation, and evaluation of this LLM-based framework, demonstrating its capability to handle a variety of constrained path planning problems. This method provides a scalable and generalizable approach for solving real-world routing tasks with minimal human intervention, while enabling flexible problem specification through natural language.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (bibliography_only). Evidence: ied constraints, such as the number of routes, maximum route length, depot locations, and scheduling requirements. While the Traveling Salesperson Problem (TSP)1 represents a classical form of route optimization, real-world scenarios frequently involve more complex variations of the vehicle routing problem

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
