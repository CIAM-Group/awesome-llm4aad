---
id: ai-research-teams
short_title: AI Research Teams
title: Building AI Research Teams for Autonomous Discovery of Linear Attention Architectures
authors: [Yujian Liu, Li An, Zelin He, Jacob Helwig, Jiabao Ji, Rohit Jain, Siyu Zhu, Shiyu Chang]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.28887
institutions: [uc-santa-barbara, penn-state, linkedin]
primary_dimension: search
dimensions: [search, feedback, design-object]
problems: [Linear Attention Architecture Discovery]
featured: false
summary: Allocates architecture experiments among persistent discipline-grounded research agents using shared evidence, private histories, review, and discounted UCB selection.
---

## Why it matters

Expensive architecture experiments make both idea diversity and allocation of research opportunities consequential. Independent prompts alone do not preserve the reasoning that connects successive discoveries.

## Core method

Sixteen agents share a model and tools but receive different scientific profiles and private persistent histories. A shared idea tree stores proposals, results, and links; periodic synthesis records lessons. Discounted UCB selects the next researcher using improvement over the incumbent team-best utility, while retaining opportunities for less-tested agents.

The selected agent proposes a falsifiable mathematical change. Technical and novelty reviewers screen it before a separate implementation agent codes and repairs the architecture. Candidates must satisfy integration and speed checks, then train from scratch under matched FLOPs. Language modeling, reasoning, and retrieval metrics determine utility. Every outcome, including rejection, feeds private reflection and shared evidence.

## Contributions

An 80-iteration search at approximately 150M parameters discovers Context-First DeltaNet: a recurrent vector first explains shared information, then matrix memory fits residual prediction error. Validation at 1.3B improves the reported category-level metrics over the compared attention architectures. Organizational ablations test profiles, memory, and allocation.

## Strengths and limitations

Larger-scale validation supports transfer beyond search scale. Results concern one architecture family and expensive training regime. Search uses reduced versions of several final benchmark families, so their full evaluations are not wholly task-disjoint holdouts; real-world retrieval is excluded from search.

## What to improve

Repeat team-level searches, measure end-to-end research cost, and test whether disciplinary diversity helps under different evaluators and architecture families.

## Connections

Both allocate scarce experiments among persistent research agents. AI Research Teams assigns credit and discounted-UCB priority to individual researchers. [Coral Discovery](../coral-discovery/index.md) tracks verified mechanism-level directions instead, including an explicit option to open a new direction.
