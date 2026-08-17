<div align="center">

# Awesome LLM4AAD

**Large language models for automatic algorithm design.**

[Website](https://ciam-group.github.io/awesome-llm4aad/) · [Papers](#papers) · [Contribution guide](docs/CONTRIBUTION_GUIDE.md)

</div>

## Scope

This repository curates papers in which large language models participate in the design, search, evaluation, or improvement of executable algorithms and heuristics. Peer-reviewed papers, arXiv preprints, and public technical reports are included; software without an accompanying paper is not listed as a paper entry.

## Papers

Each entry links to the paper, a structured reading note, and code when available. Dates follow the first public release; venue years are shown separately. Problems use compact labels here while full names remain in the searchable paper metadata.

<!-- PAPER_TABLE:START -->
| Month | Paper | Venue | Problems | Focus | Resources |
|:---:|---|:---:|---|:---:|:---:|
| 2023.11 | [**AEL** — Algorithm Evolution Using Large Language Model](https://arxiv.org/pdf/2311.15249) | arXiv 2023 | `TSP` | Design object | [Note](content/papers/ael/index.md) |
| 2023.12 | [**FunSearch** — Mathematical discoveries from program search with large language models](https://www.nature.com/articles/s41586-023-06924-6.pdf) | Nature 2023 | `Cap Set`, `OBP` | Design object | [Note](content/papers/funsearch/index.md) · [Code](https://github.com/google-deepmind/funsearch) |
| 2024.01 | [**EoH** — Evolution of Heuristics: Towards Efficient Automatic Algorithm Design Using Large Language Model](https://arxiv.org/pdf/2401.02051) | ICML 2024 | `TSP`, `BPP`, `FSSP` | Design object | [Note](content/papers/eoh/index.md) · [Code](https://github.com/FeiLiu36/EoH) |
| 2024.02 | [**ReEvo** — ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution](https://arxiv.org/pdf/2402.01145) | NeurIPS 2024 | `TSP`, `VRP`, `OP`, +2 | Feedback | [Note](content/papers/reevo/index.md) · [Code](https://github.com/ai4co/reevo) |
| 2024.04 | [**LLM-SR** — LLM-SR: Scientific Equation Discovery via Programming with Large Language Models](https://arxiv.org/pdf/2404.18400) | ICLR 2025 | `Equation Discovery`, `SR` | Design object | [Note](content/papers/llm-sr/index.md) |
| 2024.05 | [**ORLM** — ORLM: A Customizable Framework in Training Large Models for Automated Optimization Modeling](https://arxiv.org/pdf/2405.17743) | arXiv 2025 | `Opt. Modeling` | Design object | [Note](content/papers/orlm/index.md) |
| 2024.07 | [**EPS Benchmark** — Understanding the Importance of Evolutionary Search in Automated Heuristic Design with Large Language Models](https://arxiv.org/pdf/2407.10873) | PPSN 2024 | `AHD Bench` | Feedback | [Note](content/papers/ahd-eval/index.md) |
| 2024.07 | [**OptiBench** — OptiBench Meets ReSocratic: Measure and Improve LLMs for Optimization Modeling](https://arxiv.org/pdf/2407.09887) | ICLR 2025 | `Opt. Modeling` | Feedback | [Note](content/papers/optibench/index.md) |
| 2024.09 | [**MEoH** — Multi-Objective Evolution of Heuristic Using Large Language Model](https://arxiv.org/pdf/2409.16867) | AAAI 2025 | `OBP`, `TSP` | Scope | [Note](content/papers/meoh/index.md) · [Code](https://github.com/Optima-CityU/LLM4AD) |
| 2024.10 | [**LLMOPT** — LLMOPT: Learning to Define and Solve General Optimization Problems from Scratch](https://arxiv.org/pdf/2410.13213) | ICLR 2025 | `General Opt. Modeling` | Design object | [Note](content/papers/llmopt/index.md) |
| 2024.10 | [**LLaMEA-HPO** — In-the-loop Hyper-Parameter Optimization for LLM-Based Automated Design of Heuristics](https://arxiv.org/pdf/2410.16309) | ACM TELO 2025 | `OBP`, `BBO`, `TSP` | Search | [Note](content/papers/llamea-hpo/index.md) · [Code](https://zenodo.org/records/14917719) |
| 2024.12 | [**HSEvo** — HSEvo: Elevating Automatic Heuristic Design with Diversity-Driven Harmony Search and Genetic Algorithm Using LLMs](https://arxiv.org/pdf/2412.14995) | AAAI 2025 | `TSP`, `BPP`, `OP` | Search | [Note](content/papers/hsevo/index.md) · [Code](https://github.com/datphamvn/HSEvo) |
| 2025.01 | [**MCTS-AHD** — Monte Carlo Tree Search for Comprehensive Exploration in LLM-Based Automatic Heuristic Design](https://arxiv.org/pdf/2501.08603) | ICML 2025 | `TSP`, `CVRP`, `KP`, +2 | Search | [Note](content/papers/mcts-ahd/index.md) · [Code](https://github.com/zz1358m/MCTS-AHD-master) |
| 2025.02 | [**ARS** — ARS: Automatic Routing Solver with Large Language Models](https://arxiv.org/pdf/2502.15359) | OpenReview/arXiv 2025 | `VRP` | Design object | [Note](content/papers/ars/index.md) |
| 2025.02 | [**PoH** — Planning of Heuristics: Strategic Planning on Large Language Models with Monte Carlo Tree Search for Automating Heuristic Optimization](https://arxiv.org/pdf/2502.11422) | arXiv 2025 | `TSP`, `FSSP` | Feedback | [Note](content/papers/poh/index.md) |
| 2025.03 | [**CEoH** — Leveraging Large Language Models to Develop Heuristics for Emerging Optimization Problems](https://arxiv.org/pdf/2503.03350) | arXiv 2025 | `UPMP` | Feedback | [Note](content/papers/ceoh/index.md) |
| 2025.05 | [**CALM** — CALM: Co-evolution of Algorithms and Language Model for Automatic Heuristic Design](https://arxiv.org/pdf/2505.12285) | arXiv 2025 | `CO` | Feedback | [Note](content/papers/calm/index.md) |
| 2025.05 | [**RedAHD** — RedAHD: Reduction-Based End-to-End Automatic Heuristic Design with Large Language Models](https://arxiv.org/pdf/2505.20242) | arXiv 2025 | `TSP`, `CVRP`, `BPP`, +3 | Scope | [Note](content/papers/redahd/index.md) |
| 2025.05 | [**InstSpecHH** — LLM-Driven Instance-Specific Heuristic Generation and Selection](https://arxiv.org/pdf/2506.00490) | arXiv 2025 | `OBP`, `CVRP` | Scope | [Note](content/papers/instspechh/index.md) |
| 2025.06 | [**HeuriGym** — HeuriGym: An Agentic Benchmark for LLM-Crafted Heuristics in Combinatorial Optimization](https://arxiv.org/pdf/2506.07972) | ICLR 2026 | `CO Bench` | Feedback | [Note](content/papers/heurigym/index.md) |
| 2025.06 | [**AlphaEvolve** — AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/pdf/2506.13131) | arXiv white paper 2025 | `Discovery`, `DCS`, `MM`, +1 | Scope | [Note](content/papers/alphaevolve/index.md) |
| 2025.07 | [**AAD Fine-tuning** — Fine-tuning Large Language Model for Automated Algorithm Design](https://arxiv.org/pdf/2507.10614) | arXiv 2025 | `AAD` | Feedback | [Note](content/papers/aad-ft/index.md) |
| 2025.07 | [**EquivaMap** — EquivaMap: Leveraging LLMs for Automatic Equivalence Checking of Optimization Formulations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhai25a/zhai25a.pdf) | ICML 2025 | `Formulation Equivalence` | Feedback | [Note](content/papers/equivamap/index.md) |
| 2025.08 | [**EoH-S** — EoH-S: Evolution of Heuristic Set using LLMs for Automated Heuristic Design](https://arxiv.org/pdf/2508.03082) | AAAI 2026 | `OBP`, `TSP`, `CVRP` | Scope | [Note](content/papers/eoh-s/index.md) |
| 2025.08 | [**MLES** — Multimodal LLM-assisted Evolutionary Search for Programmatic Control Policies](https://arxiv.org/pdf/2508.05433) | ICLR 2026 | `LunarLander`, `CarRacing` | Feedback | [Note](content/papers/mles/index.md) · [Code](https://github.com/QingL2000/MLES) |
| 2025.09 | [**ShinkaEvolve** — ShinkaEvolve: Towards Open-Ended and Sample-Efficient Program Evolution](https://arxiv.org/pdf/2509.19349) | arXiv 2025 | `Program Evolution`, `Discovery` | Search | [Note](content/papers/shinkaevolve/index.md) |
| 2025.09 | [**PartEvo** — Partition to Evolve: Niching-enhanced Evolution with LLMs for Automated Algorithm Discovery](https://openreview.net/pdf?id=OEawM2coNT) | NeurIPS 2025 | `Unimodal Optimization`, `Multimodal Optimization`, `Mobile Edge Task Offloading`, +2 | Search | [Note](content/papers/partevo/index.md) · [Code](https://github.com/QingL2000/PartEvo) |
| 2025.10 | [**AFL** — AFL: An Agentic Framework with LLMs for Solving Complex Vehicle Routing Problems](https://arxiv.org/pdf/2510.16701) | ICLR 2026 | `Complex VRP` | Design object | [Note](content/papers/afl/index.md) |
| 2026.01 | [**A-CEoH** — Algorithmic Prompt-Augmentation for Efficient LLM-Based Heuristic Design for A* Search](https://arxiv.org/pdf/2601.19622) | arXiv 2026 | `A* Search`, `UPMP`, `SPP` | Feedback | [Note](content/papers/a-ceoh/index.md) |
| 2026.01 | [**E2OC** — Evolving Interdependent Operators with Large Language Models for Multi-Objective Combinatorial Optimization](https://arxiv.org/pdf/2601.17899) | arXiv 2026 | `MOCO` | Design object | [Note](content/papers/e2oc/index.md) |
| 2026.01 | [**TIDE** — TIDE: Tuning-Integrated Dynamic Evolution for LLM-Based Automated Heuristic Design](https://arxiv.org/pdf/2601.21239) | arXiv 2026 | `CO` | Design object | [Note](content/papers/tide/index.md) |
| 2026.02 | [**G-LNS** — G-LNS: Generative Large Neighborhood Search for LLM-Based Automatic Heuristic Design](https://arxiv.org/pdf/2602.08253) | arXiv 2026 | `TSP`, `CVRP` | Design object | [Note](content/papers/g-lns/index.md) |
| 2026.03 | [**BehaveSim** — Rethinking Code Similarity for Automated Algorithm Design with LLMs](https://arxiv.org/pdf/2603.02787) | ICLR 2026 | `Similarity Evaluation` | Feedback | [Note](content/papers/behavesim/index.md) |
| 2026.03 | [**CDEoH** — CDEoH: Category-Driven Automatic Algorithm Design With Large Language Models](https://arxiv.org/pdf/2603.19284) | arXiv 2026 | `CO` | Feedback | [Note](content/papers/cdeoh/index.md) |
| 2026.03 | [**DyACE** — DyACE: Dynamic Algorithm Co-evolution for Online Automated Heuristic Design with Large Language Model](https://arxiv.org/pdf/2603.13344) | arXiv 2026 | `Online Combinatorial Optimization` | Design object | [Note](content/papers/dyace/index.md) |
| 2026.03 | [**Strong Priors** — From Heuristic Selection to Automated Algorithm Design: LLMs Benefit from Strong Priors](https://arxiv.org/pdf/2603.02792) | arXiv 2026 | `PBO`, `BBO` | Feedback | [Note](content/papers/strongprior/index.md) |
| 2026.03 | [**Evolved-ALNS** — Large Language Model-Driven Full-Component Evolution of Adaptive Large Neighborhood Search](https://arxiv.org/pdf/2603.06996) | arXiv 2026 | `TSP`, `CVRP` | Design object | [Note](content/papers/evolved-alns/index.md) |
| 2026.04 | [**A2DEPT** — A2DEPT: Large Language Model-Driven Automated Algorithm Design via Evolutionary Program Trees](https://arxiv.org/pdf/2604.24043) | arXiv 2026 | `AAD` | Design object | [Note](content/papers/a2dept/index.md) |
| 2026.04 | [**AST Operator** — Breaking Validity-Induced Boundaries to Expand Algorithm Search Space: A Two-Stage AST-Based Operator for LLM-Driven Automated Heuristic Evolution](https://arxiv.org/pdf/2604.16420) | arXiv 2026 | `CO` | Design object | [Note](content/papers/ast-evo/index.md) |
| 2026.04 | [**BEAM** — BEAM: Bi-level Memory-adaptive Algorithmic Evolution for LLM-Powered Heuristic Design](https://arxiv.org/pdf/2604.12898) | arXiv 2026 | `CO` | Design object | [Note](content/papers/beam/index.md) |
| 2026.05 | [**AHD Agent** — AHD Agent: Agentic Reinforcement Learning for Automatic Heuristic Design](https://arxiv.org/pdf/2605.08756) | arXiv 2026 | `CO` | Feedback | [Note](content/papers/ahd-agent/index.md) |
| 2026.05 | [**AutoPort** — LLM-Enabled Automated Algorithm Design for Multiuser Fluid Antenna Communications](https://arxiv.org/pdf/2605.14661) | arXiv 2026 | `FAS Port Selection`, `Beamforming` | Design object | [Note](content/papers/autoport/index.md) |
| 2026.05 | [**Code Graph** — Budget-Efficient Automatic Algorithm Design via Code Graph](https://arxiv.org/pdf/2605.10598) | arXiv 2026 | `AAD Bench` | Design object | [Note](content/papers/codegraph/index.md) |
| 2026.05 | [**CoupleEvo** — CoupleEvo: Evolving Heuristics for Coupled Optimization Problems Using Large Language Models](https://arxiv.org/pdf/2605.06341) | arXiv 2026 | `Coupled Optimization` | Design object | [Note](content/papers/coupleevo/index.md) |
| 2026.05 | [**HMACE** — HMACE: Heterogeneous Multi-Agent Collaborative Evolution for Combinatorial Optimization](https://arxiv.org/pdf/2605.07214) | arXiv 2026 | `TSP`, `OBP`, `MKP`, +1 | Feedback | [Note](content/papers/hmace/index.md) |
| 2026.05 | [**Knowledge-first** — Back to the Beginning of Heuristic Design: Bridging Code and Knowledge with LLMs](https://arxiv.org/pdf/2605.06123) | arXiv 2026 | `CO` | Design object | [Note](content/papers/knowledgefirst/index.md) |
| 2026.05 | [**LaF-MCTS** — Automated Large-scale CVRP Solver Design via LLM-assisted Flexible MCTS](https://arxiv.org/pdf/2605.03339) | arXiv 2026 | `Large-scale CVRP` | Design object | [Note](content/papers/laf-mcts/index.md) |
| 2026.05 | [**LHS** — Latent Heuristic Search: Continuous Optimization for Automated Algorithm Design](https://arxiv.org/pdf/2605.17137) | arXiv 2026 | `TSP`, `CVRP`, `KP`, +1 | Design object | [Note](content/papers/lhs/index.md) |
| 2026.05 | [**Teacher-Aware** — Teacher-Aware Evolution of Heuristic Programs from Learned Optimization Policies](https://arxiv.org/pdf/2605.10634) | arXiv 2026 | `Scheduling`, `Routing`, `Graph Optimization` | Feedback | [Note](content/papers/teacherevo/index.md) |
| 2026.05 | [**Vesper** — Effective Harness Engineering for Algorithm Discovery with Coding Agents](https://arxiv.org/pdf/2605.15221) | arXiv 2026 | `Algorithm Discovery` | Feedback | [Note](content/papers/harnesseng/index.md) |
| 2026.05 | [**PathWise** — PathWise: Planning through World Model for Automated Heuristic Design via Self-Evolving LLMs](https://arxiv.org/pdf/2601.20539) | ICML 2026 | `TSP`, `KP`, `CVRP`, +3 | Search | [Note](content/papers/pathwise/index.md) · [Code](https://github.com/oguzhangungordu/PathWise) |
| 2026.05 | [**CoEvo** — LLM-Driven Co-Evolutionary Automated Heuristic Design for Bi-Component Coupled Combinatorial Optimization](https://arxiv.org/pdf/2606.00718) | arXiv 2026 | `Traveling Thief Problem`, `Traveling Purchaser Problem` | Design object | [Note](content/papers/coevo/index.md) |
| 2026.06 | [**MeEvo** — MeEvo: Metacognitive Evolution Combined with Natural Evolution for Automatic Heuristic Design](https://arxiv.org/pdf/2606.14202) | arXiv 2026 | `CO` | Feedback | [Note](content/papers/meevo/index.md) |
| 2026.06 | [**STABLE** — Semantics-Aware Bilevel Co-Evolution: Towards Automated Multicomponent Algorithm Design](https://arxiv.org/pdf/2606.29953) | arXiv 2026 | `Multicomponent Algorithm Design` | Design object | [Note](content/papers/stable/index.md) |
| 2026.06 | [**RAISE** — RAISE: LLM-based Automated Heuristic Design with Robust Adversary Instance Search](https://arxiv.org/pdf/2606.31801) | arXiv 2026 | `OBP`, `Online Job Shop Scheduling`, `Online Vehicle Routing` | Scope | [Note](content/papers/raise/index.md) |
| 2026.07 | [**MTHS** — Hierarchical Representations for Cross-task Automated Heuristic Design using LLMs](https://openreview.net/pdf/5723a21bffbe74a1f5c2b88d97cee90b29e16b4d.pdf) | ICML 2026 | `Cross-task AHD` | Design object | [Note](content/papers/mths/index.md) |
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
