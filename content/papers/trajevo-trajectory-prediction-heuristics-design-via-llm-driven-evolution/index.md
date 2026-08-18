---
id: trajevo-trajectory-prediction-heuristics-design-via-llm-driven-evolution
short_title: 'TrajEvo'
title: 'TrajEvo: Trajectory Prediction Heuristics Design via LLM-driven Evolution'
authors:
  - 'Zhikai Zhao'
  - 'Chuanbo Hua'
  - 'Federico Berto'
  - 'Kanghoon Lee'
  - 'Zihan Ma'
  - 'Jiachen Li'
  - 'Jinkyoo Park'
year: 2026
date: 2026-03-14
venue: 'Proceedings of the AAAI Conference on Artificial Intelligence'
paper_url: https://ojs.aaai.org/index.php/AAAI/article/download/38868/42830
institutions:
  - university-california
primary_dimension: design-object
dimensions:
  - design-object
  - search
problems:
  - Automatic algorithm design
featured: false
summary: 'Trajectory prediction is a crucial task in modeling human behavior, especially in safety-critical fields such as social robotics and autonomous vehicle navigation. Traditional heuristics based on handcrafted rules often lack accuracy, while recently proposed deep learning approaches suffer from computational cost, slow inference speed, lack of explainability, and generalization issues that limit their practical adoption in such environments.'
---

## Why it matters

Trajectory prediction is a crucial task in modeling human behavior, especially in safety-critical fields such as social robotics and autonomous vehicle navigation. Traditional heuristics based on handcrafted rules often lack accuracy, while recently proposed deep learning approaches suffer from computational cost, slow inference speed, lack of explainability, and generalization issues that limit their practical adoption in such environments.

## Core method

The paper's abstract describes the following design loop:

> Trajectory prediction is a crucial task in modeling human behavior, especially in safety-critical fields such as social robotics and autonomous vehicle navigation. Traditional heuristics based on handcrafted rules often lack accuracy, while recently proposed deep learning approaches suffer from computational cost, slow inference speed, lack of explainability, and generalization issues that limit their practical adoption in such environments. In this paper, we introduce TrajEvo, a framework that leverages Large Language Models (LLMs) to automatically design trajectory prediction heuristics. TrajEvo employs an evolutionary algorithm to generate and refine prediction heuristics from past trajectory data. We introduce a Cross-Generation Elite Sampling to promote population diversity and a Statistics Feedback Loop allowing the LLM to analyze alternative predictions. Our evaluations show TrajEvo outperforms previous heuristic methods on various real-world datasets, and remarkably outperforms both heuristics and deep learning methods when generalizing to an unseen real-world dataset. TrajEvo represents a first step toward automated design of fast, explainable, and generalizable trajectory prediction heuristics. We make our source code publicly available to foster future research.

## Contributions

- Uses a large language model to search, refine, or evaluate algorithmic artifacts.
- Reports experiments for the task family described in the abstract.

## Strengths and limitations

The abstract supports the contribution above; implementation details and failure cases should be expanded after a full reading.

## EoH citation

The reviewed PDF cites EoH (body). Evidence: .; Tong, X.; Yuan, M.; Lin, X.; Luo, F.; Wang, Z.; Lu, Z.; and API — Google AI for Developers. https://ai.google.dev/gemini- Zhang, Q. 2024a. Evolution of heuristics: Towards efficient auto- api/docs/pricing. Last updated: 2025-04-21, Accessed: 2025-05- matic algorithm design using large language model. arXiv preprint 01.

## Connections

This paper is included because the reviewed PDF contains an EoH citation. A method-level relation will be added only after confirming inheritance or an explicit comparison in the full text.
