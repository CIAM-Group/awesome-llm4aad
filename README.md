<div align="center">

# Awesome LLM4AHD

**Large language models for automatic heuristic and algorithm design.**

[Website](https://ciam-group.github.io/awesome-llm4ahd/) · [Papers](#papers) · [Contribution guide](docs/CONTRIBUTION_GUIDE.md)

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
| 2024.12 | [**HSEvo** — HSEvo: Elevating Automatic Heuristic Design with Diversity-Driven Harmony Search and Genetic Algorithm Using LLMs](https://arxiv.org/pdf/2412.14995) | AAAI 2025 | `TSP`, `BPP`, `OP` | Search | [Note](content/papers/hsevo/index.md) · [Code](https://github.com/datphamvn/HSEvo) |
| 2025.01 | [**MCTS-AHD** — Monte Carlo Tree Search for Comprehensive Exploration in LLM-Based Automatic Heuristic Design](https://arxiv.org/pdf/2501.08603) | ICML 2025 | `TSP`, `CVRP`, `KP`, +2 | Search | [Note](content/papers/mcts-ahd/index.md) · [Code](https://github.com/zz1358m/MCTS-AHD-master) |
| 2025.06 | [**AlphaEvolve** — AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/pdf/2506.13131) | arXiv white paper 2025 | `Discovery`, `DCS`, `MM`, +1 | Scope | [Note](content/papers/alphaevolve/index.md) |
| 2025.08 | [**EoH-S** — EoH-S: Evolution of Heuristic Set using LLMs for Automated Heuristic Design](https://arxiv.org/pdf/2508.03082) | AAAI 2026 | `OBP`, `TSP`, `CVRP` | Scope | [Note](content/papers/eoh-s/index.md) |
| 2025.08 | [**MLES** — Multimodal LLM-assisted Evolutionary Search for Programmatic Control Policies](https://arxiv.org/pdf/2508.05433) | ICLR 2026 | `LunarLander`, `CarRacing` | Feedback | [Note](content/papers/mles/index.md) · [Code](https://github.com/QingL2000/MLES) |
| 2026.02 | [**G-LNS** — G-LNS: Generative Large Neighborhood Search for LLM-Based Automatic Heuristic Design](https://arxiv.org/pdf/2602.08253) | arXiv 2026 | `TSP`, `CVRP`, `OP` | Design object | [Note](content/papers/g-lns/index.md) · [Code](https://github.com/zboyn/G-LNS) |
| 2026.04 | [**A2DEPT** — A2DEPT: Large Language Model–Driven Automated Algorithm Design via Evolutionary Program Trees](https://arxiv.org/pdf/2604.24043) | arXiv 2026 | `TSP`, `CVRP`, `Job Shop Scheduling Problem`, +3 | Design object | [Note](content/papers/a2dept/index.md) |
| 2026.04 | [**SeaEvo** — SeaEvo: Advancing Algorithm Discovery with Strategy Space Evolution](https://arxiv.org/pdf/2604.24372) | arXiv 2026 | `Circle Packing`, `TSP`, `Job Shop Scheduling Problem` | Search | [Note](content/papers/seaevo/index.md) |
| 2026.07 | [**RefineEvo** — RefineEvo: Planning-Guided Heuristic Evolution with Bidirectional Experience](https://arxiv.org/pdf/2607.11358) | ICML 2026 | `TSP`, `BPP`, `KP`, +1 | Feedback | [Note](content/papers/refineevo/index.md) |
| 2026.07 | [**DGS** — How to Guide LLM Generation: Dual-Surrogate Guided Search for Automated Heuristic Design](https://arxiv.org/pdf/2607.13911) | arXiv 2026 | `TSP`, `OBP`, `KP`, +3 | Search | [Note](content/papers/dgs/index.md) |
| 2026.08 | [**ATLAS** — ATLAS: Scaffold-Free Algorithm Synthesis by LLMs via Embedding-Guided Quality-Diversity Search](https://arxiv.org/pdf/2608.15546) | arXiv 2026 | `TSP`, `CVRP`, `FSSP` | Search | [Note](content/papers/atlas/index.md) · [Code](https://github.com/Danial-Yazdani/ATLAS) |
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
