---
id: a-reinforcement-learning-enhanced-discrete-zebra-optimization-algorithm
short_title: 'A reinforcement'
title: 'A reinforcement learning-enhanced discrete zebra optimization algorithm for solving the traveling salesman problem'
authors:
  - 'Sajjad Ghatei'
  - 'Shiva Taghipoureivazi'
  - 'Ahmad Habibi Zadnavin'
  - 'Ali Ghaffari'
year: 2026
date: 2026-05-26
venue: 'Scientific Reports'
paper_url: https://www.nature.com/articles/s41598-026-53013-5_reference.pdf
institutions:
  - affiliation-not-disclosed
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'In this study, a novel hybrid algorithm named the Reinforced Zebra Optimization Algorithm (RZOA) is proposed to solve the Traveling Salesman Problem (TSP). Initially, a discrete version of the Zebra Optimization Algorithm, referred to as DZOA, was developed, in which the continuous relationships of the original ZOA were transformed into a set of discrete operators to effectively update the routes.'
---

## Why it matters

In this study, a novel hybrid algorithm named the Reinforced Zebra Optimization Algorithm (RZOA) is proposed to solve the Traveling Salesman Problem (TSP). Initially, a discrete version of the Zebra Optimization Algorithm, referred to as DZOA, was developed, in which the continuous relationships of the original ZOA were transformed into a set of discrete operators to effectively update the routes.

## Core method

The paper's abstract describes the following design loop:

> In this study, a novel hybrid algorithm named the Reinforced Zebra Optimization Algorithm (RZOA) is proposed to solve the Traveling Salesman Problem (TSP). Initially, a discrete version of the Zebra Optimization Algorithm, referred to as DZOA, was developed, in which the continuous relationships of the original ZOA were transformed into a set of discrete operators to effectively update the routes. Subsequently, to enhance the intelligence of the operator selection process and to maintain a dynamic balance between exploration and exploitation, a mechanism based on Deep Reinforcement Learning was designed. Within the framework of the proposed RZOA, each zebra agent adaptively and self-learnedly makes decisions using a Deep Q-Network (DQN). Each agent observes both its own state and the overall population state, employs the DQN to select the optimal operator, and improves its decision-making policy dynamically through an experience replay memory. The state-action-reward structure was carefully designed to ensure an intelligent and balanced learning behavior between local and global search processes. The results of numerical experiments conducted on 42 standard benchmark datasets from the TSPLIB repository demonstrate that the proposed RZOA exhibits significant superiority over the compared algorithms in terms of solution quality, convergence speed, and performance stability. In particular, the proposed method achieves near-optimal performance with an average Percentage Deviation of the Best solution (PDB) below 1% and an average Percentage Deviation of the Average solution (PDA) typically below 0.5% for small and medium-scale instances, while maintaining PDA values within 4-5% for large-scale problems. Moreover, RZOA outperforms competing algorithms in the majority of benchmark cases, demonstrating superior robustness and consistency. Furthermore, the Friedman and Wilcoxon statistical analyses confirm this superiority at a 95% confidence level. Overall, by integrating the global search capability of the Zebra Optimization Algorithm with the adaptive decision-making power of the DQN, the proposed RZOA provides a novel, intelligent, and efficient approach for solving complex combinatorial optimization problems.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (bibliography_only). Evidence: L The remainder of this paper is organized as follows: Section 2 presents a review of C I related works. Section 3 introduces the proposed RZOA algorithm. Section 4 discusses T the simulation results obtained from implementing RZOA and comparing its R performance with other adv

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
