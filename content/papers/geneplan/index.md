---
id: geneplan
short_title: 'GenePlan'
title: 'GenePlan: Evolving Better Generalized PDDL Plans Using Large Language Models'
authors:
- Andrew Murray
- Danial Dervovic
- Alberto Pozanco
- Michael Cashmore
year: 2026
date: 2026-01-01
venue: Proceedings of the International Conference on Automated Planning and Scheduling
paper_url: https://ojs.aaai.org/index.php/ICAPS/article/download/42885/50445
institutions:
- jpmorgan-ai-research
primary_dimension: design-object
dimensions:
- design-object
- search
problems:
- Automatic algorithm design
featured: false
summary: GenePlan evolves reusable Python planners for a PDDL domain, using validated plan length to select and recombine programs across training instances.
---

## Why it matters

A program that solves many instances of one planning domain can avoid repeated expensive search. However, an LLM-generated planner that reaches the goal may still take many unnecessary actions. GenePlan optimizes the generated planner itself for shorter valid plans, rather than asking an LLM to output a separate action sequence for every task.

## Core method

The design artifact is a Python `get_plan(objects, init, goal)` function for a given PDDL domain. It returns a sequence of grounded actions for each instance. Search starts from a supplied planner or a planner generated with chain-of-thought prompting, then maintains a database of candidate programs and their scores.

Parent programs are sampled from both the current population and the offspring already generated. Sampling favors lower average plan length, with an inverse-decaying temperature that shifts from exploration toward exploitation as the database grows. The prompt includes the domain, parent code, measured scores and available execution or plan-validation errors. The LLM is instructed to combine useful components and make changes that reduce redundant actions or improve goal ordering.

An AST filter checks allowed syntax, packages, functions and attributes before code is executed. Each candidate is tested on the training instances. A plan validator checks its action sequence, and failures receive a large penalty. The fitness is the mean plan length including these penalties. After the offspring quota is reached, the best candidates from parents and offspring form the next population. The reported setup uses a population of 10, an offspring quota of 10 and 10 generations. The resulting planner is reused on unseen instances of the same domain without a fresh LLM call for each task.

## Contributions

- Adapts executable program evolution to complete domain-dependent PDDL planners, with plan quality rather than validity alone as the objective.
- Combines code filtering, plan validation and penalized plan length in the search feedback.
- Tests eight domains with separate training and test instances, and measures both planner-generation cost and the repeated-use runtime needed to amortize it.

## Strengths and limitations

The GPT-4o variant solves all 240 test instances across the eight reported domains. Its mean IPC-style plan-quality score is 0.91, compared with 0.93 for Fast Downward with a 30-minute limit and 0.64 for GPT-4o chain-of-thought prompting. These scores compare plan lengths and penalize unsolved tasks. They are not success percentages. The reported average runtime of 0.49 seconds per instance also excludes the one-time planner-generation time of about 645 seconds.

The evidence supports reuse within a domain, not one planner generalizing across unrelated domains. The paper's additional Sokoban test exposes this boundary: GenePlan's generated search procedure solves no tested instances, while Fast Downward solves most. Replacing meaningful PDDL names with generic identifiers also causes the ablated variant to fail throughout the eight-domain evaluation. The method therefore relies on useful domain semantics and on the existence of a compact strategy that the search can discover. AST filtering and successful tests do not prove correctness on every future instance.

## What to improve

Evaluate larger instances and domain variants separately from the search data. Add early stopping and report repeated synthesis runs with both API and execution budgets. A hybrid planner could use a generated strategy when its validity checks pass and fall back to conventional search when the domain requires it, rather than assuming that program synthesis always replaces search.

## Connections

[FunSearch](../funsearch/index.md) supplies the explicitly acknowledged program-evolution pattern. Both approaches sample scored programs to construct prompts, execute new candidates and retain useful code. GenePlan adapts this pattern from evolving critical functions within a problem scaffold to synthesizing complete domain-specific planning procedures. Its inverse-decaying sampling temperature, plan validator and elitist replacement are concrete choices for this new artifact. This is a documented adaptation, not a claim that GenePlan retains FunSearch's island-based population management.
