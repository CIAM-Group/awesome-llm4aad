---
id: rl-update-discovery
short_title: RL Update Discovery
title: Evolutionary Discovery of Reinforcement Learning Algorithms via Large Language Models
authors:
  - Alkis Sygkounas
  - Amy Loutfi
  - Andreas Persson
year: 2026
date: 2026-07-01
venue: GECCO
paper_url: https://arxiv.org/pdf/2603.28416
institutions:
  - orebro-university
primary_dimension: design-object
dimensions:
  - design-object
  - search
  - feedback
problems:
  - Reinforcement Learning Algorithm Design
featured: false
summary: An LLM-driven evolutionary search discovers executable reinforcement-learning update rules, evaluates them through complete training runs and tunes selected rules after evolution.
---

## Why it matters

Improving a reward function leaves the underlying learning algorithm unchanged. This work instead searches the executable update procedure, allowing candidate programs to maintain auxiliary models and state while the surrounding policy and rollout interfaces remain fixed.

## Core method

The framework extends REvolve from reward-function search to training-update code. To encourage nonstandard designs, prompts disallow canonical actor-critic structures, temporal-difference losses and value bootstrapping during discovery. These restrictions define a deliberate search space rather than an unconstrained search over all RL algorithms.

An island-based population is varied by LLM-generated mutations and crossover. Mutations target a coherent algorithmic component. Crossover combines candidate programs, with parent selection considering both fitness and code dissimilarity. Each candidate is evaluated through complete training runs across several environments and random seeds. Normalized peak checkpoint returns provide evolutionary fitness.

After evolution, the LLM proposes bounded ranges for scalar parameters of selected rules. Uniform sampling over these ranges evaluates refinements through additional training runs. This tuning is separate from the main structural search. The discovered examples combine learned dynamics, planning or differentiable imagined trajectories with policy updates.

## Contributions

- Executable learning-update rules as the search artifact, rather than rewards or policy parameters alone.
- An evolutionary evaluation protocol based on end-to-end learning outcomes.
- Post-search parameter refinement and evaluation beyond the environments used during discovery.

## Strengths and limitations

The experiments demonstrate meaningful algorithm discovery, not merely fine-tuning an LLM. However, the search requires extensive training compute, and only a small number of complete evolutionary runs are reported. The final comparison emphasizes selected successful candidates rather than uniform success across backends. Results use peak checkpoints, and performance on new environments includes task-specific parameter tuning, so it is not zero-shot generalization. Strong conventional algorithms remain better on some tasks.

## What to improve

Evaluate anytime and final-checkpoint performance, include unsuccessful searches in cost reporting, and separate zero-shot transfer from gains obtained through new-task tuning.

## Connections

LLaMEA-HPO tunes each generated algorithm before its fitness enters evolutionary selection. This work first searches update structures and then tunes selected finalists. The contrast exposes a budget trade-off. Delayed tuning is cheaper during structural search but can discard structures whose default parameters hide their potential.
