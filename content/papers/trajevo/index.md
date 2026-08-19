---
id: trajevo
short_title: 'TrajEvo'
title: 'TrajEvo: Trajectory Prediction Heuristics Design via LLM-driven Evolution'
authors:
- Zhikai Zhao
- Chuanbo Hua
- Federico Berto
- Kanghoon Lee
- Zihan Ma
- Jiachen Li
- Jinkyoo Park
year: 2026
date: 2026-03-14
venue: Proceedings of the AAAI Conference on Artificial Intelligence
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
summary: Trajectory prediction is a crucial task in modeling human behavior, especially
  in safety-critical fields such as social robotics and autonomous vehicle navigation.
  Traditional heuristics based on handcrafted rules often lack accuracy, while recently
  proposed deep learning approaches suffer from computational cost, slow inference
  speed, lack of explainability, and generalization issues that limit their practical
  adoption in such environments.
---
## Why it matters

Trajectory prediction is a crucial task in modeling human behavior, especially in safety-critical fields such as social robotics and autonomous vehicle navigation. Traditional heuristics based on handcrafted rules often lack accuracy, while recently proposed deep learning approaches suffer from computational cost, slow inference speed, lack of explainability, and generalization issues that limit their practical adoption in such environments.

## Core method

TrajEvo evolves trajectory-prediction heuristics from historical trajectories. Cross-generation elite sampling keeps alternative behaviors alive, while a statistics feedback loop summarizes prediction errors for the next LLM revision.

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
