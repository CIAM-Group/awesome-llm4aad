---
id: discovery-forgetting
short_title: "Discovery Forgetting"
title: "Scaling Discovery Requires Forgetting"
authors:
  - "Shangyin Tan"
  - "Ben Zhou"
  - "Lakshya A Agrawal"
  - "Jialin Zhang"
  - "Yilin Chen"
  - "Qiuyang Mang"
  - "Donghyun Lee"
  - "Dennis Jacob"
  - "Koushik Sen"
  - "Alex Dimakis"
  - "Matei Zaharia"
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.20563
institutions:
  - uc-berkeley
  - stanford
  - bespoke-labs
primary_dimension: feedback
dimensions:
  - feedback
  - search
problems:
  - "Heuristic programming"
  - "Kernel optimization"
  - "Model training"
featured: false
summary: "Periodic whole-team restarts discard agent sessions and search history but preserve the best evaluated program, reducing historical anchoring during long-budget discovery."
---

## Why it matters

More tokens or collaborating agents do not necessarily yield more varied ideas: accumulated histories can anchor all workers to increasingly small edits. The paper tests forgetting as a separate scaling mechanism.

## Core method

Each agent edits a candidate, submits it to a judge, and stores the code, score, and feedback as a versioned commit. Team members can asynchronously inspect peers' candidates before proposing changes, without direct dialogue. A reducer controls which filesystem records and session history each agent receives. Search is divided into rounds; at a boundary it removes every session and candidate-history record from the active workspace, retains only the team-wide best program and its score, and restarts all agents with the original instructions. Communication resumes within the new round. Thus it resets both conversational and external search context rather than merely compressing the transcript.

## Contributions

- Separates parallelism, candidate-mediated communication, and whole-history forgetting within one agent harness.
- Compares matched spending on four tasks spanning combinatorial programming, a VLIW kernel, and small-language-model training, with three runs per configuration.

## Strengths and limitations

The team-with-forgetting configuration performs best on the tested tasks, but evidence uses one model and a small task set. Most improvement follows the first reset; later returns diminish. Fixed round boundaries and incumbent-only retention can discard useful negative evidence or complementary candidates, so the best forgetting policy remains unresolved.

## What to improve

Learn reset timing from stagnation, compare selective retention policies, and test whether recovered exploration offsets repeated mistakes on longer, noisier tasks.

## Connections

[SimpleEvol](../simpleevol/index.md) compresses search history to preserve usable experience. This method deliberately removes both sessions and the visible archive at resets, making the amount of retained history—not population size alone—the central experimental variable.
