Pull request overview
Updates the curated paper corpus (new entries + metadata edits) and associated taxonomy data used by the site/content build pipeline.

Changes:

Added new paper notes for SeaEvo, RefineEvo, DGS, and ATLAS; updated existing notes for G-LNS and A2DEPT.
Modified data/institutions.yml and data/relations.yml (institution IDs + relation graph data).
Updated the README paper table and adjusted ancillary scripts/.gitignore.
Reviewed changes
Copilot reviewed 9 out of 22 changed files in this pull request and generated 4 comments.

Show a summary per file
💡 Add a code-review agent skill or configure MCP servers for context-aware, tailored reviews. Learn more in the docs.

In data/relations.yml:

> -    type: generalizes
-    dimension: scope
-    description: >-
-      AFL expands automatic routing design from specializing a solver backbone to
-      multi-agent construction and repair of complete constrained VRP solvers.
-  - from: g-lns
-    to: evolved-alns
-    type: generalizes
-    dimension: design-object
-    description: >-
-      Evolved-ALNS broadens generated neighborhood operators into joint evolution
-      of the seven interacting modules of an adaptive LNS solver.
-  - from: coupleevo
-    to: coevo
+      HSEvo includes FunSearch in its analysis of diversity and convergence in
+      evolutionary program search.
The relation from: alphaevolve -> to: shinkaevolve has a description that references HSEvo, which does not match the from/to pair. This looks like a copy/paste error and will make the displayed relation misleading.

In data/institutions.yml:

> -  short_name: NWPU
-  initials: NWPU
-  website: https://www.nwpu.edu.cn/
-  accent: '#0f4c81'
-kit:
-  name: Karlsruhe Institute of Technology
-  short_name: KIT
-  initials: KIT
-  website: https://www.kit.edu/english/
-  accent: '#007a3d'
-tu-dortmund:
-  name: TU Dortmund University
-  short_name: TU Dortmund
-  initials: TUDO
-  website: https://www.tu-dortmund.de/en/
-  accent: '#4b4b4d'
 uestc:
   name: University of Electronic Science and Technology of China
   short_name: UESTC
   initials: UESTC
data/institutions.yml has been reduced to ~200 lines and no longer defines many institution IDs that are still referenced by existing paper frontmatter (e.g. kit, tu-dortmund, tsinghua, microsoft-research-asia, hkust, cornell, harvard, nvidia). Because scripts/build-content.mjs validates that every paper.institutions[] entry exists, this change will break buildContent() / validate-content unless all papers are updated or the missing institutions are restored.

In README.md:

> @@ -43,7 +43,15 @@ Each entry links to the paper, a structured reading note, and code when availabl
 | 2025.05 | [**LLaMEA-BO** — LLaMEA-BO: A Large Language Model Evolutionary Algorithm for Automatically Generating Bayesian Optimization Algorithms](https://arxiv.org/pdf/2505.21034) | arXiv 2025 | `Bayesian Optimization Algorithm Design` | Design object | [Note](content/papers/llamea-bo/index.md) · [Code](https://github.com/Ewendawi/LLaMEA-BO) |
 | 2025.05 | [**InstSpecHH** — LLM-Driven Instance-Specific Heuristic Generation and Selection](https://arxiv.org/pdf/2506.00490) | arXiv 2025 | `OBP`, `CVRP` | Scope | [Note](content/papers/instspechh/index.md) |
 | 2025.06 | [**AlphaEvolve** — AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/pdf/2506.13131) | arXiv white paper 2025 | `Discovery`, `DCS`, `MM`, +1 | Scope | [Note](content/papers/alphaevolve/index.md) |
-| 2025.06 | [**HeurAgenix** — HeurAgenix: Leveraging LLMs for Solving Complex Combinatorial Optimization Challenges](https://arxiv.org/pdf/2506.15196) | arXiv 2025 | `CO` | Scope | [Note](content/papers/heuragenix/index.md) · [Code](https://github.com/microsoft/HeurAgenix) |
+| 2025.08 | [**EoH-S** — EoH-S: Evolution of Heuristic Set using LLMs for Automated Heuristic Design](https://arxiv.org/pdf/2508.03082) | AAAI 2026 | `OBP`, `TSP`, `CVRP` | Scope | [Note](content/papers/eoh-s/index.md) |
+| 2025.08 | [**MLES** — Multimodal LLM-assisted Evolutionary Search for Programmatic Control Policies](https://arxiv.org/pdf/2508.05433) | ICLR 2026 | `LunarLander`, `CarRacing` | Feedback | [Note](content/papers/mles/index.md) · [Code](https://github.com/QingL2000/MLES) |
+| 2026.02 | [**G-LNS** — G-LNS: Generative Large Neighborhood Search for LLM-Based Automatic Heuristic Design](https://arxiv.org/pdf/2602.08253) | arXiv 2026 | `TSP`, `CVRP`, `OP` | Design object | [Note](content/papers/g-lns/index.md) · [Code](https://github.com/zboyn/G-LNS) |
+| 2026.04 | [**A2DEPT** — A2DEPT: Large Language Model–Driven Automated Algorithm Design via Evolutionary Program Trees](https://arxiv.org/pdf/2604.24043) | arXiv 2026 | `TSP`, `CVRP`, `Job Shop Scheduling Problem`, +3 | Design object | [Note](content/papers/a2dept/index.md) |
+| 2026.04 | [**SeaEvo** — SeaEvo: Advancing Algorithm Discovery with Strategy Space Evolution](https://arxiv.org/pdf/2604.24372) | arXiv 2026 | `Circle Packing`, `TSP`, `Job Shop Scheduling Problem` | Search | [Note](content/papers/seaevo/index.md) |
+| 2026.07 | [**RefineEvo** — RefineEvo: Planning-Guided Heuristic Evolution with Bidirectional Experience](https://arxiv.org/pdf/2607.11358) | ICML 2026 | `TSP`, `BPP`, `KP`, +1 | Feedback | [Note](content/papers/refineevo/index.md) |
+| 2026.07 | [**DGS** — How to Guide LLM Generation: Dual-Surrogate Guided Search for Automated Heuristic Design](https://arxiv.org/pdf/2607.13911) | arXiv 2026 | `TSP`, `OBP`, `KP`, +3 | Search | [Note](content/papers/dgs/index.md) |
+| 2026.08 | [**ATLAS** — ATLAS: Scaffold-Free Algorithm Synthesis by LLMs via Embedding-Guided Quality-Diversity Search](https://arxiv.org/pdf/2608.15546) | arXiv 2026 | `TSP`, `CVRP`, `FSSP` | Search | [Note](content/papers/atlas/index.md) · [Code](https://github.com/Danial-Yazdani/ATLAS) |
+| 2025.06 | [**HeurAgenix** — HeurAgenix: Leveraging LLMs for Solving Complex Combinatorial Optimization Challenges](https://arxiv.org/pdf/2506.15196) | arXiv 2025 | `CO` | Scope | [Note](content/papers/heuragenix/index.md) · [Code](https://github.com/microsoft/HeurAgenix) 
This README table row is missing the trailing |, which breaks the markdown table formatting for the rest of the generated paper list.

In data/relations.yml:

> -    type: contextualizes
-    dimension: design-object
-    description: >-
-      The OR survey provides context for Order Matters' proxy-guided evolution of
-      macro-placement ordering policies.
-  - from: reevo
-    to: revel
-    type: extends
-    dimension: feedback
-    description: >-
-      ReVEL extends reflective heuristic evolution with behavior-aware, group-wise,
-      multi-turn performance feedback.
-  - from: eoh
-    to: llm-nas
-    type: contextualizes
-    dimension: design-object
-    description: >-
-      UH-NAS is a neighboring LLM-evolution route for hardware-aware neural
-      architecture co-design, rather than a direct EoH extension.
-  - from: orlm
-    to: evooptigraph
-    type: contrasts
-    dimension: feedback
-    description: >-
-      EvoOptiGraph takes a weakness-driven graph co-evolution route, contrasting
-      with ORLM's learned model-generation framework and fixed training distribution.
-  - from: optibench
-    to: frontieror
-    type: generalizes
-    dimension: scope
-    description: >-
-      FrontierOR generalizes optimization-modeling evaluation to large-scale,
-      structurally complex algorithm-design tasks and test-time evolution.
-  - from: reevo
-    to: scoe
-    type: generalizes
-    dimension: design-object
-    description: >-
-      SCOE builds on ReEvo's reflective evolution while expanding the artifact from
-      one heuristic to a cooperative operator ensemble.
-  - from: eoh
-    to: vrpagent
-    type: adapts
-    dimension: design-object
-    description: >-
-      VRPAgent adapts LLM-guided search to discover VRP-specific destroy and repair
-      operators within a fixed routing solver backbone.
-  - from: reevo
-    to: dhfsp-evo
-    type: extends
-    dimension: search
-    description: >-
-      The multi-island dispatching-rule method extends ReEvo with personalized
-      islands, semantic reflection, and offline/online evolution stages.
-  - from: ahd-survey
-    to: pace
-    type: contextualizes
-    dimension: design-object
-    description: >-
-      The AHD survey provides context for PACE's primitive-level representation and
-      its attempt to preserve reusable code during executable program evolution.
-  - from: eoh
-    to: ahd-survey
-    type: contextualizes
-    dimension: historical
-    description: >-
-      This survey places EoH among the documented LLM-based algorithm-design methods.
-  - from: eoh
-    to: or-survey
-    type: contextualizes
-    dimension: historical
-    description: >-
-      This OR survey contextualizes EoH within a broader review of LLM-assisted
-      optimization and algorithm design.
-  - from: llm-optimization-survey
-    to: eoh
-    type: contextualizes
-    dimension: historical
-    description: >-
-      This overview cites EoH while surveying the intersection of language models
-      and optimization rather than proposing an EoH-derived method.
-  - from: eoh
-    to: cuda-feedback
-    type: contextualizes
-    dimension: feedback
-    description: >-
-      The CUDA feedback-to-plan study cites EoH as adjacent evolutionary context;
-      its contribution is attribution analysis rather than EoH inheritance.
-  - from: llm-optimization-survey
-    to: pathplan-llm
-    type: contextualizes
-    dimension: scope
-    description: >-
-      The optimization overview provides context for PathPlan-LLM's natural-language
-      formulation, solution generation, and iterative route verification.
-  - from: eoh
-    to: epb-nco
-    type: contextualizes
     dimension: design-object
     description: >-
This file now ends at line 57 and contains only 7 total - from: entries, which is far below what’s needed for the rest of the existing content/papers/* entries. Since scripts/build-content.mjs requires every paper to have at least one relation, the current truncated relations list will cause validation failures for most papers.