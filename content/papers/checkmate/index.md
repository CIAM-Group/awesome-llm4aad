---
id: checkmate
short_title: CheckMate
title: Learning to Solve and Optimize by Evolving Code
authors:
  - Veronika Semmelrock
  - Benedetta Strizzolo
  - Francesco Zuccato
  - Gerhard Friedrich
  - Patrick Rodler
  - Konstantin Schekotihin
year: 2026
date: 2026-08-01
venue: IJCAI
paper_url: https://ijcai.org/proceedings/2026/0451.pdf
code_url: https://git-ainf.aau.at/checkmate/ijcai26
institutions:
  - university-klagenfurt
  - university-udine
primary_dimension: feedback
dimensions:
  - feedback
  - scope
problems:
  - Hardware Configuration
  - Combined Configuration
  - Energy-aware Distributed Flexible Job Shop Scheduling
featured: false
summary: CheckMate integrates declarative solution verification into OpenEvolve so that constraint violations and measured performance guide the evolution of problem-specific solvers.
---

## Why it matters

Writing an evaluator for automatically generated solvers can require as much domain work as writing the solver itself. CheckMate separates the specification of a valid solution from the procedure used to find one, allowing a formal model to check programs generated through code evolution.

## Core method

The input includes a natural-language problem description, a formal specification, a verifier, representative instances and scoring priorities. OpenEvolve proposes Python solver programs using its population and prompting machinery. CheckMate executes each program, parses its output and checks whether the proposed solution satisfies the formal constraints.

Evaluation distinguishes execution errors, malformed output, infeasible solutions and successful solutions. Feasible candidates receive quality and resource scores. The next proposal can use stack traces, violated constraints and performance feedback rather than a single opaque score. A failure protocol also lets a program explicitly report that its search failed. In these experiments, instances are known to be satisfiable, so such a report identifies an algorithmic failure rather than proving infeasibility.

The resulting loop evolves reusable solvers for industrial configuration and scheduling problems. It does not ask the LLM to produce an isolated solution for every new instance.

## Contributions

- A reusable verification layer attached to an existing evolutionary code-generation system.
- Structured feedback separating solution validity from optimization quality and computational cost.
- Evaluation on hardware configuration, combined configuration and energy-aware distributed scheduling.

## Strengths and limitations

The generated solvers perform well on the studied large and difficult instances. Performance is less uniform for individual solvers on combined configuration, where combining runs improves coverage. Verification establishes whether a particular returned solution satisfies the specification, not whether the generated algorithm is correct on every possible input. Results also depend on representative training instances and a correct formal model. The paper leaves a systematic component ablation for future work.

## What to improve

Test incomplete or erroneous specifications, quantify the contribution of each feedback channel, and separate solver selection from final held-out evaluation more explicitly.

## Connections

CheckMate adapts the AlphaEvolve-style generate, execute and select loop through OpenEvolve. Its distinctive addition is declarative solution checking with structured error feedback. AutoModSAT offers a complementary correctness mechanism based on SAT assignments and unsatisfiability certificates. Both validate evaluated outputs rather than prove arbitrary generated programs correct for all inputs.
