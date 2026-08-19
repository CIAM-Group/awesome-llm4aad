<div align="center">

# Awesome LLM4AAD

**Large language models for automatic algorithm design.**

[Website](https://ciam-group.github.io/awesome-llm4aad/) · [Papers](#papers) · [Contribution guide](docs/CONTRIBUTION_GUIDE.md)

</div>

## Scope

This repository curates papers in which large language models participate in the design, search, evaluation, or improvement of executable algorithms and heuristics. Peer-reviewed papers, arXiv preprints, and public technical reports are included; software without an accompanying paper is not listed as a paper entry.

## Papers

Each entry links to the paper, a structured reading note, and code when available. Dates use the accepted publication month when available and the first arXiv month for preprints. Problems use compact labels here while full names remain in the searchable paper metadata.

<!-- PAPER_TABLE:START -->
| Month | Paper | Venue | Problems | Focus | Resources |
|:---:|---|:---:|---|:---:|:---:|
| 2023.11 | [**AEL** — Algorithm Evolution Using Large Language Model](https://arxiv.org/pdf/2311.15249) | arXiv 2023 | `TSP` | Design object | [Note](content/papers/ael/index.md) |
| 2023.12 | [**FunSearch** — Mathematical discoveries from program search with large language models](https://www.nature.com/articles/s41586-023-06924-6.pdf) | Nature 2023 | `Cap Set`, `OBP` | Design object | [Note](content/papers/funsearch/index.md) · [Code](https://github.com/google-deepmind/funsearch) |
| 2024.05 | [**LLM-Opt Survey** — When Large Language Model Meets Optimization](https://arxiv.org/pdf/2405.10098) | Swarm and Evolutionary Computation 2024 | `AAD` | Design object | [Note](content/papers/llm-optimization-survey/index.md) |
| 2024.07 | [**EoH** — Evolution of Heuristics: Towards Efficient Automatic Algorithm Design Using Large Language Model](https://arxiv.org/pdf/2401.02051) | ICML 2024 | `TSP`, `BPP`, `FSSP` | Design object | [Note](content/papers/eoh/index.md) · [Code](https://github.com/FeiLiu36/EoH) |
| 2024.09 | [**EPS Benchmark** — Understanding the Importance of Evolutionary Search in Automated Heuristic Design with Large Language Models](https://arxiv.org/pdf/2407.10873) | PPSN 2024 | `AHD Bench` | Feedback | [Note](content/papers/ahd-eval/index.md) · [Code](https://github.com/zhichao-lu/llm-eps) |
| 2024.10 | [**Survey-AHD** — A Systematic Survey on Large Language Models for Algorithm Design](https://arxiv.org/pdf/2410.14716) | arXiv (Cornell University) 2024 | `AAD` | Design object | [Note](content/papers/ahd-survey/index.md) |
| 2024.12 | [**ReEvo** — ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution](https://arxiv.org/pdf/2402.01145) | NeurIPS 2024 | `TSP`, `VRP`, `OP`, +2 | Feedback | [Note](content/papers/reevo/index.md) · [Code](https://github.com/ai4co/reevo) |
| 2024.12 | [**LLM4AD Platform** — LLM4AD: A Platform for Algorithm Design with Large Language Model](https://arxiv.org/pdf/2412.17287) | arXiv 2024 | `AAD` | Scope | [Note](content/papers/llm4ad-platform/index.md) · [Code](https://github.com/Optima-CityU/LLM4AD) |
| 2025.02 | [**LLMRule** — An Interpretable Automated Mechanism Design Framework with Large Language Models](https://arxiv.org/pdf/2502.12203) | arXiv.org 2025 | `AAD` | Design object | [Note](content/papers/mech-design/index.md) |
| 2025.02 | [**PoH** — Planning of Heuristics: Strategic Planning on Large Language Models with Monte Carlo Tree Search for Automating Heuristic Optimization](https://arxiv.org/pdf/2502.11422) | arXiv 2025 | `TSP`, `FSSP` | Feedback | [Note](content/papers/poh/index.md) |
| 2025.02 | [**ARS** — ARS: Automatic Routing Solver with Large Language Models](https://arxiv.org/pdf/2502.15359) | arXiv 2025 | `VRP` | Design object | [Note](content/papers/ars/index.md) · [Code](https://github.com/Ahalikai/ARS-Routbench) |
| 2025.03 | [**CEoH** — Leveraging Large Language Models to Develop Heuristics for Emerging Optimization Problems](https://arxiv.org/pdf/2503.03350) | arXiv 2025 | `UPMP` | Feedback | [Note](content/papers/ceoh/index.md) |
| 2025.04 | [**HSEvo** — HSEvo: Elevating Automatic Heuristic Design with Diversity-Driven Harmony Search and Genetic Algorithm Using LLMs](https://arxiv.org/pdf/2412.14995) | AAAI 2025 | `TSP`, `BPP`, `OP` | Search | [Note](content/papers/hsevo/index.md) · [Code](https://github.com/datphamvn/HSEvo) |
| 2025.04 | [**MEoH** — Multi-Objective Evolution of Heuristic Using Large Language Model](https://arxiv.org/pdf/2409.16867) | AAAI 2025 | `OBP`, `TSP` | Scope | [Note](content/papers/meoh/index.md) · [Code](https://github.com/Optima-CityU/LLM4AD) |
| 2025.04 | [**LLaMEA-HPO** — In-the-loop Hyper-Parameter Optimization for LLM-Based Automated Design of Heuristics](https://arxiv.org/pdf/2410.16309) | ACM TELO 2025 | `OBP`, `BBO`, `TSP` | Search | [Note](content/papers/llamea-hpo/index.md) · [Code](https://zenodo.org/records/14917719) |
| 2025.04 | [**LLM-SR** — LLM-SR: Scientific Equation Discovery via Programming with Large Language Models](https://arxiv.org/pdf/2404.18400) | ICLR 2025 | `Equation Discovery`, `SR` | Design object | [Note](content/papers/llm-sr/index.md) · [Code](https://github.com/deep-symbolic-mathematics/LLM-SR) |
| 2025.04 | [**LLMOPT** — LLMOPT: Learning to Define and Solve General Optimization Problems from Scratch](https://arxiv.org/pdf/2410.13213) | ICLR 2025 | `General Opt. Modeling` | Design object | [Note](content/papers/llmopt/index.md) · [Code](https://github.com/caigaojiang/LLMOPT) |
| 2025.04 | [**OptiBench** — OptiBench Meets ReSocratic: Measure and Improve LLMs for Optimization Modeling](https://arxiv.org/pdf/2407.09887) | ICLR 2025 | `Opt. Modeling` | Feedback | [Note](content/papers/optibench/index.md) · [Code](https://github.com/yangzhch6/ReSocratic) |
| 2025.05 | [**ORLM** — ORLM: A Customizable Framework in Training Large Models for Automated Optimization Modeling](https://arxiv.org/pdf/2405.17743) | Operations Research 2025 | `Opt. Modeling` | Design object | [Note](content/papers/orlm/index.md) · [Code](https://github.com/Cardinal-Operations/ORLM) |
| 2025.05 | [**CALM** — CALM: Co-evolution of Algorithms and Language Model for Automatic Heuristic Design](https://arxiv.org/pdf/2505.12285) | arXiv 2025 | `CO` | Feedback | [Note](content/papers/calm/index.md) · [Code](https://github.com/whxru/CALM) |
| 2025.05 | [**RedAHD** — RedAHD: Reduction-Based End-to-End Automatic Heuristic Design with Large Language Models](https://arxiv.org/pdf/2505.20242) | arXiv 2025 | `TSP`, `CVRP`, `BPP`, +3 | Scope | [Note](content/papers/redahd/index.md) |
| 2025.05 | [**LLaMEA-BO** — LLaMEA-BO: A Large Language Model Evolutionary Algorithm for Automatically Generating Bayesian Optimization Algorithms](https://arxiv.org/pdf/2505.21034) | arXiv 2025 | `Bayesian Optimization Algorithm Design` | Design object | [Note](content/papers/llamea-bo/index.md) · [Code](https://github.com/Ewendawi/LLaMEA-BO) |
| 2025.05 | [**InstSpecHH** — LLM-Driven Instance-Specific Heuristic Generation and Selection](https://arxiv.org/pdf/2506.00490) | arXiv 2025 | `OBP`, `CVRP` | Scope | [Note](content/papers/instspechh/index.md) |
| 2025.06 | [**AlphaEvolve** — AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/pdf/2506.13131) | arXiv white paper 2025 | `Discovery`, `DCS`, `MM`, +1 | Scope | [Note](content/papers/alphaevolve/index.md) |
| 2025.06 | [**HeurAgenix** — HeurAgenix: Leveraging LLMs for Solving Complex Combinatorial Optimization Challenges](https://arxiv.org/pdf/2506.15196) | arXiv 2025 | `CO` | Scope | [Note](content/papers/heuragenix/index.md) · [Code](https://github.com/microsoft/HeurAgenix) |
| 2025.07 | [**AAD Fine-tuning** — Fine-tuning Large Language Model for Automated Algorithm Design](https://arxiv.org/pdf/2507.10614) | arXiv 2025 | `AAD` | Feedback | [Note](content/papers/aad-ft/index.md) · [Code](https://github.com/RayZhhh/dpo-aad) |
| 2025.07 | [**EquivaMap** — EquivaMap: Leveraging LLMs for Automatic Equivalence Checking of Optimization Formulations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhai25a/zhai25a.pdf) | ICML 2025 | `Formulation Equivalence` | Feedback | [Note](content/papers/equivamap/index.md) · [Code](https://github.com/HumainLab/EquivaMap) |
| 2025.07 | [**MCTS-AHD** — Monte Carlo Tree Search for Comprehensive Exploration in LLM-Based Automatic Heuristic Design](https://arxiv.org/pdf/2501.08603) | ICML 2025 | `TSP`, `CVRP`, `KP`, +2 | Search | [Note](content/papers/mcts-ahd/index.md) · [Code](https://github.com/zz1358m/MCTS-AHD-master) |
| 2025.08 | [**Hercules** — Efficient Heuristics Generation for Solving Combinatorial Optimization Problems Using Large Language Models](https://arxiv.org/pdf/2505.12627) | KDD 2025 | `CO` | Feedback | [Note](content/papers/efficient-heuristics/index.md) · [Code](https://github.com/wuuu110/Hercules) |
| 2025.09 | [**AutoPBO** — AutoPBO: LLM-powered Optimization for Local Search PBO Solvers](https://arxiv.org/pdf/2509.04007) | arXiv.org 2025 | `AAD` | Design object | [Note](content/papers/autopbo/index.md) |
| 2025.09 | [**Exp-CoEvo** — Experience-Guided Reflective Co-Evolution of Prompts and Heuristics for Automatic Algorithm Design](https://arxiv.org/pdf/2509.24509) | arXiv.org 2025 | `AAD` | Design object | [Note](content/papers/exp-reflect/index.md) |
| 2025.09 | [**ShinkaEvolve** — ShinkaEvolve: Towards Open-Ended and Sample-Efficient Program Evolution](https://arxiv.org/pdf/2509.19349) | arXiv 2025 | `Program Evolution`, `Discovery` | Search | [Note](content/papers/shinkaevolve/index.md) · [Code](https://github.com/SakanaAI/ShinkaEvolve) |
| 2025.10 | [**Code Generators** — Man-Made Heuristics Are Dead. Long Live Code Generators!](https://arxiv.org/pdf/2510.08803) | ACM Workshop on Hot Topics in Networks 2025 | `AAD` | Design object | [Note](content/papers/code-generators/index.md) |
| 2025.10 | [**VRPAgent** — VRPAgent: LLM-Driven Discovery of Heuristic Operators for Vehicle Routing Problems](https://arxiv.org/pdf/2510.07073) | ArXiv.org 2025 | `AAD` | Design object | [Note](content/papers/vrpagent/index.md) |
| 2025.10 | [**CodeEvolve** — CodeEvolve: An Open-Source Evolutionary Coding Agent for Algorithmic Discovery and Optimization](https://arxiv.org/pdf/2510.14150) | arXiv 2025 | `Algorithmic Discovery`, `Optimization` | Search | [Note](content/papers/codeevolve/index.md) · [Code](https://github.com/inter-co/science-codeevolve) |
| 2025.12 | [**PartEvo** — Partition to Evolve: Niching-enhanced Evolution with LLMs for Automated Algorithm Discovery](https://openreview.net/pdf?id=OEawM2coNT) | NeurIPS 2025 | `Unimodal Optimization`, `Multimodal Optimization`, `Mobile Edge Task Offloading`, +2 | Search | [Note](content/papers/partevo/index.md) · [Code](https://github.com/QingL2000/PartEvo) |
| 2025.12 | [**CogMCTS** — CogMCTS: A Novel Cognitive-Guided Monte Carlo Tree Search Framework for Iterative Heuristic Evolution with Large Language Models](https://arxiv.org/pdf/2512.08609) | arXiv 2025 | `CO` | Search | [Note](content/papers/cogmcts/index.md) |
| 2025.12 | [**Beyond Algo Evo** — Beyond Algorithm Evolution: An LLM-Driven Framework for the Co-Evolution of Swarm Intelligence Optimization Algorithms and Prompts](https://arxiv.org/pdf/2512.09209) | arXiv 2025 | `CO` | Feedback | [Note](content/papers/beyond-algorithm-evolution/index.md) |
| 2026.01 | [**GenePlan** — GenePlan: Evolving Better Generalized PDDL Plans Using Large Language Models](https://ojs.aaai.org/index.php/ICAPS/article/download/42885/50445) | Proceedings of the International Conference on Automated Planning and Scheduling 2026 | `AAD` | Design object | [Note](content/papers/geneplan/index.md) |
| 2026.01 | [**Magellan** — Magellan: Autonomous Discovery of Novel Compiler Optimization Heuristics with AlphaEvolve](https://arxiv.org/pdf/2601.21096) | arXiv.org 2026 | `AAD` | Design object | [Note](content/papers/magellan/index.md) |
| 2026.01 | [**Pareto-Grid** — Pareto-Grid-Guided Large Language Models for Fast and High-Quality Heuristics Design in Multi-Objective Combinatorial Optimization](https://ojs.aaai.org/index.php/AAAI/article/download/41024/44985) | Proceedings of the AAAI Conference on Artificial Intelligence 2026 | `AAD` | Design object | [Note](content/papers/pareto-heuristics/index.md) |
| 2026.01 | [**DASH** — Rethinking LLM-Driven Heuristic Design: Generating Efficient and Specialized Solvers via Dynamics-Aware Optimization](https://arxiv.org/pdf/2601.20868) | arXiv 2026 | `CO` | Feedback | [Note](content/papers/dash/index.md) |
| 2026.01 | [**E2OC** — Evolving Interdependent Operators with Large Language Models for Multi-Objective Combinatorial Optimization](https://arxiv.org/pdf/2601.17899) | arXiv 2026 | `MOCO` | Design object | [Note](content/papers/e2oc/index.md) |
| 2026.01 | [**TIDE** — TIDE: Tuning-Integrated Dynamic Evolution for LLM-Based Automated Heuristic Design](https://arxiv.org/pdf/2601.21239) | arXiv 2026 | `CO` | Design object | [Note](content/papers/tide/index.md) |
| 2026.02 | [**LLM-PB** — Large Language Models for Designing Participatory Budgeting Rules](https://arxiv.org/pdf/2602.09349) | arXiv (Cornell University) 2026 | `AAD` | Design object | [Note](content/papers/participatory-rules/index.md) |
| 2026.02 | [**OR-Agent** — OR-Agent: Bridging Evolutionary Search and Structured Research for Automated Algorithm Discovery](https://arxiv.org/pdf/2602.13769) | arXiv.org 2026 | `AAD` | Design object | [Note](content/papers/or-agent/index.md) |
| 2026.02 | [**G-LNS** — G-LNS: Generative Large Neighborhood Search for LLM-Based Automatic Heuristic Design](https://arxiv.org/pdf/2602.08253) | arXiv 2026 | `TSP`, `CVRP` | Design object | [Note](content/papers/g-lns/index.md) · [Code](https://github.com/ZBoyn/G-LNS) |
| 2026.02 | [**AILS-AHD** — Enhancing CVRP Solver through LLM-driven Automatic Heuristic Design](https://arxiv.org/pdf/2602.23092) | arXiv 2026 | `CVRP` | Design object | [Note](content/papers/enhancing-cvrp/index.md) |
| 2026.03 | [**PathPlan** — Constraint-aware Path Planning from Natural Language Instructions Using Large Language Models](https://arxiv.org/pdf/2603.19257) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/pathplan-llm/index.md) |
| 2026.03 | [**Strong Priors** — From Heuristic Selection to Automated Algorithm Design: LLMs Benefit from Strong Priors](https://arxiv.org/pdf/2603.02792) | arXiv 2026 | `PBO`, `BBO` | Feedback | [Note](content/papers/strongprior/index.md) |
| 2026.03 | [**DyACE** — DyACE: Dynamic Algorithm Co-evolution for Online Automated Heuristic Design with Large Language Model](https://arxiv.org/pdf/2603.13344) | arXiv 2026 | `Online Combinatorial Optimization` | Design object | [Note](content/papers/dyace/index.md) |
| 2026.03 | [**Evolved-ALNS** — Large Language Model-Driven Full-Component Evolution of Adaptive Large Neighborhood Search](https://arxiv.org/pdf/2603.06996) | arXiv 2026 | `TSP`, `CVRP` | Design object | [Note](content/papers/evolved-alns/index.md) |
| 2026.03 | [**CDEoH** — CDEoH: Category-Driven Automatic Algorithm Design With Large Language Models](https://arxiv.org/pdf/2603.19284) | arXiv 2026 | `CO` | Feedback | [Note](content/papers/cdeoh/index.md) |
| 2026.03 | [**DGM** — Darwin Godel Machine: Open-ended evolution of self-improving agents](https://arxiv.org/pdf/2505.22954) | ICLR 2026 | `AAD` | Design object | [Note](content/papers/dgm/index.md) · [Code](https://github.com/jennyzzt/dgm) |
| 2026.03 | [**EoH-S** — EoH-S: Evolution of Heuristic Set using LLMs for Automated Heuristic Design](https://arxiv.org/pdf/2508.03082) | AAAI 2026 | `OBP`, `TSP`, `CVRP` | Scope | [Note](content/papers/eoh-s/index.md) |
| 2026.03 | [**TrajEvo** — TrajEvo: Trajectory Prediction Heuristics Design via LLM-driven Evolution](https://ojs.aaai.org/index.php/AAAI/article/download/38868/42830) | Proceedings of the AAAI Conference on Artificial Intelligence 2026 | `AAD` | Design object | [Note](content/papers/trajevo/index.md) |
| 2026.04 | [**CliffSearch** — CliffSearch: Structured Agentic Co-Evolution over Theory and Code for Scientific Algorithm Discovery](https://arxiv.org/pdf/2604.01210) | arXiv 2026 | `Discovery` | Design object | [Note](content/papers/cliffsearch/index.md) |
| 2026.04 | [**ReVEL** — ReVEL: Multi-Turn Reflective LLM-Guided Heuristic Evolution via Structured Performance Feedback](https://arxiv.org/pdf/2604.04940) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/revel/index.md) |
| 2026.04 | [**A-CEoH** — Algorithmic Prompt-Augmentation for Efficient LLM-Based Heuristic Design for A* Search](https://arxiv.org/pdf/2601.19622) | EvoStar 2026 | `A* Search`, `UPMP`, `SPP` | Feedback | [Note](content/papers/a-ceoh/index.md) · [Code](https://github.com/tb-git-tud/a-ceoh-evolution-of-heuristics) |
| 2026.04 | [**BEAM** — BEAM: Bi-level Memory-adaptive Algorithmic Evolution for LLM-Powered Heuristic Design](https://arxiv.org/pdf/2604.12898) | arXiv 2026 | `CO` | Design object | [Note](content/papers/beam/index.md) |
| 2026.04 | [**AFL** — AFL: An Agentic Framework with LLMs for Solving Complex Vehicle Routing Problems](https://arxiv.org/pdf/2510.16701) | ICLR 2026 | `Complex VRP` | Design object | [Note](content/papers/afl/index.md) · [Code](https://github.com/ZHANG-NI/AFL) |
| 2026.04 | [**BehaveSim** — Rethinking Code Similarity for Automated Algorithm Design with LLMs](https://arxiv.org/pdf/2603.02787) | ICLR 2026 | `Similarity Evaluation` | Feedback | [Note](content/papers/behavesim/index.md) · [Code](https://github.com/RayZhhh/behavesim) |
| 2026.04 | [**HeuriGym** — HeuriGym: An Agentic Benchmark for LLM-Crafted Heuristics in Combinatorial Optimization](https://arxiv.org/pdf/2506.07972) | ICLR 2026 | `CO Bench` | Feedback | [Note](content/papers/heurigym/index.md) · [Code](https://github.com/cornell-zhang/heurigym) |
| 2026.04 | [**MLES** — Multimodal LLM-assisted Evolutionary Search for Programmatic Control Policies](https://arxiv.org/pdf/2508.05433) | ICLR 2026 | `LunarLander`, `CarRacing` | Feedback | [Note](content/papers/mles/index.md) · [Code](https://github.com/QingL2000/MLES) |
| 2026.04 | [**A2DEPT** — A2DEPT: Large Language Model-Driven Automated Algorithm Design via Evolutionary Program Trees](https://arxiv.org/pdf/2604.24043) | arXiv 2026 | `AAD` | Design object | [Note](content/papers/a2dept/index.md) |
| 2026.05 | [**CUDA Feedback** — Towards Feedback-to-Plan Decisions for Self-Evolving LLM Agents in CUDA Kernel Generation](https://arxiv.org/pdf/2605.26720) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/cuda-feedback/index.md) |
| 2026.05 | [**DHFSP-Evo** — Automatic generation of heuristic dispatching rules for dynamic hybrid flow shop scheduling via personalized multi-island reflective evolution](https://www.sciopen.com/local/article_pdf/10.26599/TST.2026.9010050.pdf) | Tsinghua Science & Technology 2026 | `AAD` | Design object | [Note](content/papers/dhfsp-evo/index.md) |
| 2026.05 | [**Domain Heuristics** — LLM-Evolved Domain-Independent Heuristics for Symbolic AI Planning](https://arxiv.org/pdf/2605.29649) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/domain-heuristics/index.md) |
| 2026.05 | [**FrontierOR** — FrontierOR: Benchmarking LLMs' Capacity for Efficient Algorithm Design in Large-Scale Optimization](https://arxiv.org/pdf/2605.25246) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/frontieror/index.md) |
| 2026.05 | [**MEMOIR** — Memory-Guided Tree Search with Cross-Branch Knowledge Transfer for LLM Solver Synthesis](https://arxiv.org/pdf/2605.17539) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/memory-tree/index.md) |
| 2026.05 | [**OR Survey** — Large Language Models for Operations Research: A Comprehensive Survey](https://arxiv.org/pdf/2605.20849) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/or-survey/index.md) |
| 2026.05 | [**LaF-MCTS** — Automated Large-scale CVRP Solver Design via LLM-assisted Flexible MCTS](https://arxiv.org/pdf/2605.03339) | arXiv 2026 | `Large-scale CVRP` | Design object | [Note](content/papers/laf-mcts/index.md) |
| 2026.05 | [**Knowledge-first** — Back to the Beginning of Heuristic Design: Bridging Code and Knowledge with LLMs](https://arxiv.org/pdf/2605.06123) | arXiv 2026 | `CO` | Design object | [Note](content/papers/knowledgefirst/index.md) |
| 2026.05 | [**HMACE** — HMACE: Heterogeneous Multi-Agent Collaborative Evolution for Combinatorial Optimization](https://arxiv.org/pdf/2605.07214) | arXiv 2026 | `TSP`, `OBP`, `MKP`, +1 | Feedback | [Note](content/papers/hmace/index.md) |
| 2026.05 | [**AHD Agent** — AHD Agent: Agentic Reinforcement Learning for Automatic Heuristic Design](https://arxiv.org/pdf/2605.08756) | arXiv 2026 | `CO` | Feedback | [Note](content/papers/ahd-agent/index.md) · [Code](https://github.com/Antoniano1963/AHD-Agent) |
| 2026.05 | [**Code Graph** — Budget-Efficient Automatic Algorithm Design via Code Graph](https://arxiv.org/pdf/2605.10598) | arXiv 2026 | `AAD Bench` | Design object | [Note](content/papers/codegraph/index.md) |
| 2026.05 | [**Teacher-Aware** — Teacher-Aware Evolution of Heuristic Programs from Learned Optimization Policies](https://arxiv.org/pdf/2605.10634) | arXiv 2026 | `Scheduling`, `Routing`, `Graph Optimization` | Feedback | [Note](content/papers/teacherevo/index.md) |
| 2026.05 | [**Vesper** — Effective Harness Engineering for Algorithm Discovery with Coding Agents](https://arxiv.org/pdf/2605.15221) | arXiv 2026 | `Algorithm Discovery` | Feedback | [Note](content/papers/harnesseng/index.md) |
| 2026.05 | [**AutoPort** — LLM-Enabled Automated Algorithm Design for Multiuser Fluid Antenna Communications](https://arxiv.org/pdf/2605.14661) | IEEE TWC 2026 | `FAS Port Selection`, `Beamforming` | Design object | [Note](content/papers/autoport/index.md) |
| 2026.05 | [**AutoSG** — AutoSG: LLM-Driven Solver Generation Solely from Task Prompts for Expensive Optimization](https://arxiv.org/pdf/2605.25658) | arXiv 2026 | `Expensive Optimization` | Feedback | [Note](content/papers/autosg/index.md) |
| 2026.05 | [**PyVRP+** — PyVRP+: LLM-Driven Metacognitive Heuristic Evolution for Hybrid Genetic Search in Vehicle Routing Problems](https://arxiv.org/pdf/2604.07872) | AAMAS 2026 | `VRP` | Feedback | [Note](content/papers/pyvrp-plus/index.md) · [Code](https://github.com/ra-MANUJ-an/pyvrp-code) |
| 2026.05 | [**AHD-Network** — Automated Heuristic Design for Network Operations](https://arxiv.org/pdf/2605.28197) | arXiv 2026 | `Low-Density Parity-Check Decoding` | Scope | [Note](content/papers/ahd-network/index.md) |
| 2026.05 | [**CoEvo** — LLM-Driven Co-Evolutionary Automated Heuristic Design for Bi-Component Coupled Combinatorial Optimization](https://arxiv.org/pdf/2606.00718) | arXiv 2026 | `Traveling Thief Problem`, `Traveling Purchaser Problem` | Design object | [Note](content/papers/coevo/index.md) |
| 2026.06 | [**EPB** — Interpreting Neural Combinatorial Optimization via Evolving Programmatic Bottlenecks](https://arxiv.org/pdf/2606.19741) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/epb-nco/index.md) |
| 2026.06 | [**EvoOptiGraph** — EvoOptiGraph: Weakness-Driven Coevolution via Graph-Based Structural Generation for Optimization Modeling](https://arxiv.org/pdf/2606.26578) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/evooptigraph/index.md) |
| 2026.06 | [**Macro Order** — Order Matters: Unveiling the Hidden Impact of Macro Placement Sequences via Proxy-Guided LLM Evolution](https://arxiv.org/pdf/2606.08904) | arXiv (Cornell University) 2026 | `AAD` | Design object | [Note](content/papers/macro-order/index.md) |
| 2026.06 | [**OpenEvolve** — Algorithmic algorithm development with LLMs: A Case Study on LLM-Usage for Contraction Order Optimization in Tensor Networks](https://arxiv.org/pdf/2606.01975) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/algo-dev/index.md) |
| 2026.06 | [**PatternGen** — LLM-Evolved Pattern Generators for Optimal Classical Planning](https://arxiv.org/pdf/2606.02438) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/pattern-gen/index.md) |
| 2026.06 | [**SCOE** — Large Language Model-Driven Cooperative Operator Ensemble Evolution for Permutation Flow Shop Scheduling](https://arxiv.org/pdf/2606.15334) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/scoe/index.md) |
| 2026.06 | [**UH-NAS** — LLM-Guided Neural Architecture Search for Robust Co-Design of Physical Neural Networks](https://arxiv.org/pdf/2606.10294) | arXiv (Cornell University) 2026 | `AAD` | Design object | [Note](content/papers/llm-nas/index.md) |
| 2026.06 | [**VVenC-QP** — LLM-Driven Heuristic Frame-Level Quantization Parameter Adaptation for VVenC](https://arxiv.org/pdf/2606.20847) | ArXiv.org 2026 | `AAD` | Design object | [Note](content/papers/qp-adapt/index.md) |
| 2026.06 | [**Successor-Gen** — Successor-Generator Planning with LLM-generated Heuristics](https://ojs.aaai.org/index.php/ICAPS/article/download/42843/50403) | Proceedings of the International Conference on Automated Planning and Scheduling 2026 | `AAD` | Design object | [Note](content/papers/successor-heuristics/index.md) |
| 2026.06 | [**MeEvo** — MeEvo: Metacognitive Evolution Combined with Natural Evolution for Automatic Heuristic Design](https://arxiv.org/pdf/2606.14202) | arXiv 2026 | `CO` | Feedback | [Note](content/papers/meevo/index.md) · [Code](https://github.com/Qzs1335/MeEvo) |
| 2026.06 | [**LHS** — Latent Heuristic Search: Continuous Optimization for Automated Algorithm Design](https://arxiv.org/pdf/2605.17137) | LION 2026 | `TSP`, `CVRP`, `KP`, +1 | Design object | [Note](content/papers/lhs/index.md) · [Code](https://github.com/cheikh025/LHS) |
| 2026.06 | [**REFLEX** — REFLEX: Reflective Evolution from LLM Experience](https://arxiv.org/pdf/2606.16496) | arXiv 2026 | `Programmatic Policy Evolution` | Feedback | [Note](content/papers/reflex/index.md) |
| 2026.06 | [**Feynman-FS** — Explainable AI-assisted optimization for Feynman integral reduction](https://link.springer.com/content/pdf/10.1007/JHEP06(2026)225.pdf) | Journal of High Energy Physics 2026 | `AAD` | Design object | [Note](content/papers/feynman-funsearch/index.md) |
| 2026.06 | [**STABLE** — Semantics-Aware Bilevel Co-Evolution: Towards Automated Multicomponent Algorithm Design](https://arxiv.org/pdf/2606.29953) | arXiv 2026 | `Multicomponent Algorithm Design` | Design object | [Note](content/papers/stable/index.md) |
| 2026.06 | [**RAISE** — RAISE: LLM-based Automated Heuristic Design with Robust Adversary Instance Search](https://arxiv.org/pdf/2606.31801) | arXiv 2026 | `OBP`, `Online Job Shop Scheduling`, `Online Vehicle Routing` | Scope | [Note](content/papers/raise/index.md) |
| 2026.07 | [**MTHS** — Hierarchical Representations for Cross-task Automated Heuristic Design using LLMs](https://openreview.net/pdf/5723a21bffbe74a1f5c2b88d97cee90b29e16b4d.pdf) | ICML 2026 | `Cross-task AHD` | Design object | [Note](content/papers/mths/index.md) |
| 2026.07 | [**PathWise** — PathWise: Planning through World Model for Automated Heuristic Design via Self-Evolving LLMs](https://arxiv.org/pdf/2601.20539) | ICML 2026 | `TSP`, `KP`, `CVRP`, +3 | Search | [Note](content/papers/pathwise/index.md) · [Code](https://github.com/oguzhangungordu/PathWise) |
| 2026.07 | [**AST Operator** — Breaking Validity-Induced Boundaries to Expand Algorithm Search Space: A Two-Stage AST-Based Operator for LLM-Driven Automated Heuristic Evolution](https://arxiv.org/pdf/2604.16420) | GECCO 2026 | `CO` | Design object | [Note](content/papers/ast-evo/index.md) |
| 2026.07 | [**CoupleEvo** — CoupleEvo: Evolving Heuristics for Coupled Optimization Problems Using Large Language Models](https://arxiv.org/pdf/2605.06341) | GECCO Companion 2026 | `Coupled Optimization` | Design object | [Note](content/papers/coupleevo/index.md) · [Code](https://github.com/tb-git-kit-research/CoupleEvo) |
| 2026.07 | [**Mutation Dynamics** — Mutation Without Variation: Convergence Dynamics in LLM-Driven Program Evolution](https://arxiv.org/pdf/2606.05408) | GECCO Workshop 2026 | `Program Evolution Dynamics` | Feedback | [Note](content/papers/mutation-without-variation/index.md) · [Code](https://github.com/can-gurkan/lmca) |
| 2026.08 | [**PACE** — PACE: Primitive-Aware Code Evolution for Automated Algorithm Design](https://arxiv.org/pdf/2608.07395) | arXiv 2026 | `AAD` | Design object | [Note](content/papers/pace/index.md) |
<!-- PAPER_TABLE:END -->

## Interactive atlas

The website connects the collection through a compact [paper timeline](https://ciam-group.github.io/awesome-llm4ahd/), a curated [relation map](https://ciam-group.github.io/awesome-llm4ahd/relations), and paper-level research notes.

[![AHD Papers timeline](docs/assets/atlas-preview.png)](https://ciam-group.github.io/awesome-llm4ahd/)

## Contributing

No local setup is required. Add or edit Markdown directly in GitHub; automated checks validate the content, update the paper table, and rebuild the website after merge.

- [Add a paper](docs/CONTRIBUTION_GUIDE.md#add-a-paper)
- [Add a relation](docs/CONTRIBUTION_GUIDE.md#add-a-relation)
- [Choose relation types and dimensions](docs/CONTRIBUTION_GUIDE.md#choose-the-classification)
- [Contribution rules](CONTRIBUTING.md)

## Citation

If this collection supports your research, cite the repository URL. Please cite original papers for paper-specific claims and results.

## License

Repository code and original notes are available under the [Apache License 2.0](LICENSE). Paper figures remain the property of their original authors and publishers and are included with source attribution for scholarly navigation.
