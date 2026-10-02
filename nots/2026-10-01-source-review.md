# 2026-10-01 原文阅读与关系核查

本轮从 61 篇候选中选择 52 篇，排除 9 篇。下列 50 篇已获取原始 PDF，阅读方法、实验设定和相关局限后撰写；不把摘要初筛记作全文阅读。记录涉及章节，不声称复现实验或逐项验证所有附录推导。

## 元数据原则

- 表中日期为 arXiv 首次提交；网站仅保留到月（日期字段的 01 是月精度占位，不是真实提交日）。修订时间不当作新论文日期。
- SimpleEvol 的 arXiv 记录明确写明 NeurIPS 2026 accepted，但未给出录用日；网站月份采用可核实的 2026-09 公开记录，不编造录用日期。
- ES-AHD / OptiSkill 的原始 arXiv comments 分别明确标注 ICIST 2026 / EMNLP 2026 Main Conference 录用，已填写会议。具体录用日期未披露，暂以原始公开月份 2026-08 / 2026-09 展示，不能把它说成已证实的录用月份；获得录用通知或正式出版记录后再替换。
- QDEvo 已核对 ACM DOI [10.1145/3795101.3805343](https://doi.org/10.1145/3795101.3805343) 的出版元数据：GECCO Companion，`published-print` / `issued` 为 2026-07-13，采用正式出版月份 2026-07。元数据另有 2026-08-13 登记/Published assertion，不混作录用日期。
- 机构来自所读 PDF 作者署名；ε-MemEvo 未披露可确认机构，保留 affiliation-not-disclosed。AXXX 按论文原样保留，不扩写猜测。
- 代码字段来自论文给出的作者项目，匿名仓库也可记录。EES 链接是作者结果/复现记录；MacroAgent 当时公开的是合法化代码，不能保证所有 agent 脚本已开放。
- 2026-10-01 链接检查：14 个 GitHub 项目/分支返回 HTTP 200；Bi-EZP 与 PIAC 的作者原文匿名仓库链接返回 HTTP 401，保留原始来源链接但不能声称当前可匿名访问。未测试代码可运行性。
- contrasts 是机制对照，不表示作者声称继承、引用或复用了实现。extends/adapts 使用原文明示机制证据；不加 baseline-only 关系。

## 逐篇证据索引

| 编号 | 条目 | 首次提交 / 所读版本时间 | 署名机构 ID | 阅读依据与边界 |
| --- | --- | --- | --- | --- |
| A01 | [SimpleEvol](../content/papers/simpleevol/index.md) · [原文](https://arxiv.org/pdf/2609.37172) | 2026-09-29 / 2026-09-29 | smu, independent-researcher, nuist, nus | PDF pp. 1, 3–10: affiliations; AHI/ICE definitions; single-trajectory loop; three-task, ten-model evaluation. arXiv v1 2026-09-29 says accepted at NeurIPS 2026; exact acceptance date not disclosed, September is the verified public-record month. |
| A02 | [BiFE](../content/papers/bife/index.md) · [原文](https://arxiv.org/pdf/2609.36735) | 2026-09-29 / 2026-09-29 | casia, university-chinese-academy-sciences, shandong-university | PDF pp. 1–8, Sections 4–5: 72-feature branching code; imitation prefilter; elite admission; SCIP settings and CPU/runtime evaluation. No own-code URL found in main paper. |
| A03 | [HeurEvo](../content/papers/heurevo/index.md) · [原文](https://arxiv.org/pdf/2609.36303) | 2026-09-28 / 2026-09-28 | purdue, microsoft | PDF pp. 1, 3–9, Sections 3.1–4: plan/code/component representation; UCB island controller; fixed two-minute execution budget; MIPLIB has no held-out evaluation. No own-code link confirmed. |
| A04 | [HADA](../content/papers/hada/index.md) · [原文](https://arxiv.org/pdf/2609.35328) | 2026-09-28 / 2026-09-28 | south-china-university-technology, south-china-normal-university, smu | PDF author block, Sections 2.2–4.4 and training protocol: hyper/task access boundaries, archive selection, proxy/final training, OOD evaluation and example lineages. DGM is related-work context, not a reused backbone. |
| A05 | [QuantForge](../content/papers/quantforge/index.md) · [原文](https://arxiv.org/pdf/2609.34680) | 2026-09-28 / 2026-09-28 | pku | PDF pp. 1–10, Sections 4–6: counterfactual controls, checked code response, strict MXFP4 contract; numerical rather than native-kernel evaluation. |
| A06 | [Modular Game Search](../content/papers/modular-game-search/index.md) · [原文](https://arxiv.org/pdf/2609.33115) | 2026-09-27 / 2026-09-27 | google-deepmind | PDF first page and Sections 3–6: AlphaEvolve adaptation; reference-PUCT credit separation; opponent epochs; held-out and synthesized games; limitations. |
| A09 | [OnDesign](../content/papers/ondesign/index.md) · [原文](https://arxiv.org/pdf/2609.25325) | 2026-09-21 / 2026-09-21 | polyu, chongqing-university | PDF Sections 2–5 and title-page affiliations: online synthesis; state-analysis guideline archive; evaluation on single-objective problems up to 30 variables. Supplementary code mentioned, no public repository URL confirmed. |
| A10 | [Presage](../content/papers/presage/index.md) · [原文](https://arxiv.org/pdf/2609.22636) | 2026-09-18 / 2026-09-18 | google, university-washington | PDF author block, Sections 4–5 and 7: proposer/optimizer/combiner; source patches; manual correctness review; hardware-specific deployment. Google, not Google DeepMind. |
| A13 | [RouteRepair](../content/papers/routerepair/index.md) · [原文](https://arxiv.org/pdf/2609.11452) | 2026-09-10 / 2026-09-10 | seu | PDF Sections 3.4–3.6 and 4: parent-specific failure/strength/protection sets; frozen diagnosis; one-sided collateral loss; verified repair is separate from population admission. |
| A14 | [QuantumEvo](../content/papers/quantumevo/index.md) · [原文](https://arxiv.org/pdf/2609.05327) | 2026-09-04 / 2026-09-04 | kaist, radical-numerics, omelet | PDF title page; Sections 3.2 and 4–6: explicitly built on ReEvo, CUDD C functions, downstream quantum circuit cost; 148 held-out functions; competitive non-LLM ablation. |
| A20 | [ES-AHD](../content/papers/es-ahd/index.md) · [原文](https://arxiv.org/pdf/2609.00023) | 2026-08-26 / 2026-08-26 | guangdong-university-technology, xidian-university, beijing-normal-university | PDF Sections III–IV and author block; arXiv first submission 2026-08-26 despite identifier 2609.00023. Temperature is a scalar noisy update, not an estimated covariance matrix. |
| A11 | [AlgoEvo](../content/papers/algoevo/index.md) · [原文](https://arxiv.org/pdf/2609.15820) | 2026-09-14 / 2026-09-27 | cityu-hk, huawei-noahs-ark, astar-iac | PDF title page, Sections 3.1–3.4 and 4: task-specific skills, situation-conditioned UCB experience tree, cross-task skill updates. Agency affiliation is Institute of Advanced Intelligence and Computing, A*STAR; use a new precise ID, not an older lab inferred from the acronym. |
| A17 | [LLM-HCJG](../content/papers/llm-hcjg/index.md) · [原文](https://arxiv.org/pdf/2609.02353) | 2026-09-02 / 2026-09-02 | sjtu | PDF Sections 3.1–3.3 and 4.5: paired blueprint representation; fixed GLS enhancements; component-swapping ablations. Code promised upon acceptance, no link supplied. |
| A18 | [RideSkill](../content/papers/rideskill/index.md) · [原文](https://arxiv.org/pdf/2609.02250) | 2026-09-02 / 2026-09-23 | hkust, huawei-noahs-ark, hkust-guangzhou | PDF v2 author block, Sections 3.2–3.3, Appendix training phases: skills first, combiner with frozen skills second, repositioner third; not simultaneous co-evolution. v1 month September. |
| A21 | [MacroAgent](../content/papers/macroagent/index.md) · [原文](https://arxiv.org/pdf/2608.24946) | 2026-08-24 / 2026-08-24 | cuhk, pku | PDF Section 3.3 and reference 31 explicitly adopt EoH operators; Sections 4–5 distinguish released legalizer from agent scripts promised upon acceptance; author block CUHK, not CUHK Shenzhen. |
| A22 | [Bi-EZP](../content/papers/bi-ezp/index.md) · [原文](https://arxiv.org/pdf/2608.21927) | 2026-08-22 / 2026-08-22 | guangdong-university-technology | PDF author footnote, Section III: four proxy inputs, AST/interface/bounds checks, inner CMA-ES on training architectures, outer Kendall correlation on validation; rationale is logged but not persistent memory. |
| A25 | [SeisEvo](../content/papers/seisevo/index.md) · [原文](https://arxiv.org/pdf/2608.18272) | 2026-08-18 / 2026-08-18 | hit, nus, pku | PDF Sections 2.2–3: fixed editable surface, physical hard gates, parameter provenance, post-search full-volume evaluation; POCS and MSSA seeds. |
| A26 | [GoalEvolve](../content/papers/goalevolve/index.md) · [原文](https://arxiv.org/pdf/2608.16733) | 2026-08-17 / 2026-08-17 | fudan | PDF Sections 3–4: frozen post-route goal region; Teacher and four same-parent Student branches; effect/debt checkpoint analysis; eight ASAP7 designs. Not every design reaches all goals. |
| A27 | [FeatureHospital](../content/papers/featurehospital/index.md) · [原文](https://arxiv.org/pdf/2608.16148) | 2026-08-17 / 2026-08-17 | jilin-university | PDF author block, Methodology and Experiments; fixed skill/medicine catalog, training-only diagnosis, seven datasets. |
| A29 | [ReForge](../content/papers/reforge/index.md) · [原文](https://arxiv.org/pdf/2608.15138) | 2026-08-15 / 2026-08-15 | university-electro-communications | PDF Sections 3–5: closed-language router edits, counterfactual probes, family-level regression guards, sequential nine-family evaluation. |
| A30 | [ε-MemEvo](../content/papers/eps-memevo/index.md) · [原文](https://arxiv.org/pdf/2608.12522) | 2026-08-12 / 2026-08-12 | affiliation-not-disclosed | PDF algorithm and evaluation sections; no explicit institutional affiliation in author block. Leave undisclosed rather than infer from author names. |
| A31 | [EvoMem](../content/papers/evomem/index.md) · [原文](https://arxiv.org/pdf/2608.10795) | 2026-08-11 / 2026-08-11 | axxx, moscow-state-university, applied-ai-institute | PDF Sections 3–5 and limitations; exact author affiliations AXXX/MSU/Applied AI Institute; speedup counts evaluated candidates, not end-to-end time. |
| A32 | [ELMER](../content/papers/elmer/index.md) · [原文](https://arxiv.org/pdf/2608.10196) | 2026-08-10 / 2026-08-10 | nof1, nyu, university-malta | PDF Sections 2–5, Table 1 and experimental protocol: action-disagreement labels, conditional SFT then offset-DPO, temporal train/validation/test splits. |
| A33 | [ArchAgent v2](../content/papers/archagent-v2/index.md) · [原文](https://arxiv.org/pdf/2608.09874) | 2026-08-10 / 2026-08-10 | google, uc-berkeley, google-deepmind | PDF design/evaluation sections: AlphaEvolve backend, L1D/L2/LLC staged then joint evolution, size audits and long-trace validation. |
| A34 | [Trace-Guided Design](../content/papers/trace-guided-design/index.md) · [原文](https://arxiv.org/pdf/2608.09343) | 2026-08-10 / 2026-08-10 | tsinghua | PDF Sections 3.1–3.3, experiments and Section 5 limitations: repeated simulations, lowest-scoring diagnostic trace, incumbent-based promotion. |
| A35 | [Janus](../content/papers/janus/index.md) · [原文](https://arxiv.org/pdf/2608.08189) | 2026-08-08 / 2026-08-08 | sjtu, zhongguancun-academy, baidu, xjtu, zhongguancun-institute-ai | PDF Sections III–IV: evaluator-as-program, top-k promotion objective, region-conditioned credit, real-anchored promotion; five domains and three seeds. |
| A36 | [PIAC](../content/papers/piac/index.md) · [原文](https://arxiv.org/pdf/2608.06808) | 2026-08-07 / 2026-08-07 | sustech, zhongguancun-academy | PDF Section III Algorithm 1 and potential-gain definition; author footnote; experiments on three solver backbones and six distributions. |
| A37 | [RelayEvolve](../content/papers/relayevolve/index.md) · [原文](https://arxiv.org/pdf/2608.05651) | 2026-08-06 / 2026-08-06 | hku, china-mobile-jiutian, cityu-hk, carnegie-mellon | PDF Method and Experiments; shared ShinkaEvolve backend; dollar and generation budgets; three independent runs. |
| A38 | [ADSL-PDE](../content/papers/adsl-pde/index.md) · [原文](https://arxiv.org/pdf/2608.04384) | 2026-08-05 / 2026-08-24 | north-china-university-technology, zhongguancun-academy | PDF Method, compiler/verifier contract and representation ablations; v2 read, original submission month from arXiv history. |
| A39 | [DyCA](../content/papers/dyca/index.md) · [原文](https://arxiv.org/pdf/2608.03129) | 2026-08-04 / 2026-08-04 | cityu-hk, huawei-noahs-ark | PDF Sections 2–4 and Appendix B; explicit extension of EoH-S CPM; behavior-response anchors and re-clustering. |
| A40 | [MOSAIC](../content/papers/mosaic/index.md) · [原文](https://arxiv.org/pdf/2608.07544) | 2026-07-31 / 2026-07-31 | gatech | PDF Sections 3–4: discriminative instance evolution, decision-tree region assignment, persistent cell insights, local replacement. First submission July 31 despite 2608 identifier. |
| A41 | [FunL2O](../content/papers/funl2o/index.md) · [原文](https://arxiv.org/pdf/2607.27389) | 2026-07-29 / 2026-07-29 | michigan-state, southern-california, uw-madison, ibm-research | PDF Methodology and native pipeline metrics; every candidate retrains its host learner, semantic contract excludes labels/reference solutions at deployment. |
| A42 | [CostAda](../content/papers/costada/index.md) · [原文](https://arxiv.org/pdf/2607.26828) | 2026-07-29 / 2026-09-26 | idea, cityu-hk, mbzuai | PDF v4 Sections 3–5 and algorithm; original July submission retained despite September revision; normalized local/global gain and logarithmic realized-cost calibration. |
| A43 | [EvoPINN](../content/papers/evopinn/index.md) · [原文](https://arxiv.org/pdf/2607.26490) | 2026-07-29 / 2026-07-29 | university-chinese-academy-sciences, casia | PDF Sections 4–5; standard and normalized AST gates, one-module-at-a-time UCB scheduling, disjoint reporting set and five retraining seeds. |
| A44 | [AITE](../content/papers/aite/index.md) · [原文](https://arxiv.org/pdf/2607.17762) | 2026-07-20 / 2026-07-20 | nvidia | PDF Section II architecture, Sections III–IV tasks, Section V limitations. Earlier conference presentation covers only parts; use full article arXiv date. |
| A45 | [LLaMEA-MOBO](../content/papers/llamea-mobo/index.md) · [原文](https://arxiv.org/pdf/2607.08791) | 2026-07-06 / 2026-07-06 | terra-quantum, leiden-university | PDF Sections III–VI incl post-hoc seed reruns and mechanical code correction; complete MOBO code plus SMAC configuration space. |
| A46 | [QDEvo](../content/papers/qdevo/index.md) · [原文](https://arxiv.org/pdf/2607.11916) | 2026-07-06 / 2026-07-06 | hanoi-university-science-technology, george-mason | PDF Sections 2–3: semantic clusters with all-member similarity threshold, local Pareto survival, three levels of reflection. |
| B01 | [Evolution/Illusion](../content/papers/evolution-or-illusion/index.md) · [原文](https://arxiv.org/pdf/2609.19799) | 2026-09-17 / 2026-09-17 | ibm-research | PDF Section 2 and Limitations: exact finite-sample order statistics over 40 logged seeds and 200 iterations; offline evaluation, not online budget controller. |
| B02 | [AI4AI-Bench](../content/papers/ai4ai-bench/index.md) · [原文](https://arxiv.org/pdf/2608.20318) | 2026-08-20 / 2026-08-20 | einsia-navers, tsinghua | PDF Sections 2–4; four-hour development, from-scratch verification, hidden final evaluator; diff categorization itself uses a separate LLM. Avoid inconsistent headline aggregate numbers. |
| B03 | [When AI Designs AI](../content/papers/when-ai-designs-ai/index.md) · [原文](https://arxiv.org/pdf/2608.17471) | 2026-08-18 / 2026-08-18 | cas-ict, benchcouncil, university-chinese-academy-sciences, northwestern | PDF Section 3 human-in-the-loop design-space construction; Section 4 six tasks; module-level distance is relative to collected human designs, not a proof of originality. |
| C01 | [TCSAlgBench](../content/papers/tcsalgbench/index.md) · [原文](https://arxiv.org/pdf/2609.35606) | 2026-09-28 / 2026-09-28 | ut-austin, amazon, university-pennsylvania | PDF Sections 3.1–3.3 and 4: 398 theorem challenges; verifier acceptance is not formal proof; 221 provisional Lean statements are statements, not solved proofs. |
| C02 | [EvoSkillRec](../content/papers/evoskillrec/index.md) · [原文](https://arxiv.org/pdf/2609.34552) | 2026-09-28 / 2026-09-28 | cityu-hk, kuaishou, xjtu | PDF Sections 4.1–4.3, experiments and limitations; metadata-based retrieval explicitly not embedding retrieval; survivor-based promotion. |
| C03 | [JET](../content/papers/jet/index.md) · [原文](https://arxiv.org/pdf/2609.34126) | 2026-09-28 / 2026-09-28 | ntu | PDF Sections 3–5: source-supervised executable judge, frozen target-time judge; WebShop and PushT; visible target tasks are adaptation data, not unseen-task generalization. |
| C04 | [KernelZero](../content/papers/kernelzero/index.md) · [原文](https://arxiv.org/pdf/2609.33074) | 2026-09-27 / 2026-09-27 | cas-ict, university-chinese-academy-sciences, cas-software, cas-ai-industries | PDF Sections 2–3: alternating trained proposer/coder, frontier reward peaks at half-correct rollouts, correctness-gated performance reward. |
| C05 | [OptiSkill](../content/papers/optiskill/index.md) · [原文](https://arxiv.org/pdf/2609.22987) | 2026-09-19 / 2026-09-19 | beihang | PDF Section 2 and test-time evolution; batch-frozen bank, separate addition/repair gates; eight benchmark settings and structural-overlap caveat. |
| C06 | [EES](../content/papers/ees/index.md) · [原文](https://arxiv.org/pdf/2609.17590) | 2026-09-11 / 2026-09-11 | impulse-ai | PDF Sections 4–6; public link is results/reproduction ledger, not necessarily complete framework; 19/22 is development record, not blind success rate. |
| C07 | [FormuEvo](../content/papers/formuevo/index.md) · [原文](https://arxiv.org/pdf/2608.23353) | 2026-08-24 / 2026-08-24 | tsinghua, ntu, smu | PDF Sections 3–4 and limitations; finite objective-value correctness checks, shifted-geometric-mean runtime, static MIP formulation scope. |
| C08 | [GraphIR](../content/papers/graphir/index.md) · [原文](https://arxiv.org/pdf/2608.01633) | 2026-08-03 / 2026-08-03 | xjtu, xiaomi, zhongguancun-academy, zhongguancun-institute-ai | PDF Method and evaluation: AST plus FX trace, static fallback, graph reconstructed per candidate; GraphIR is context, not replacement executable DSL. |
| C09 | [Constraint Reform.](../content/papers/constraint-reformulation/index.md) · [原文](https://arxiv.org/pdf/2607.28268) | 2026-07-30 / 2026-07-30 | ku-leuven, western-macedonia, st-andrews | PDF Sections 3–5 and limitations: solution-level validation not full equivalence, PDR via log-runtime profiles, separate final validation selection. |
| C10 | [WARA](../content/papers/wara/index.md) · [原文](https://arxiv.org/pdf/2607.19822) | 2026-07-22 / 2026-07-22 | cuhk-shenzhen, fnii-shenzhen, cityu-hk, sun-yat-sen | PDF architecture and Section III: three phases with subphases, frozen math/algorithm/evidence contracts; manuscript-level LLM scoring, not independent theorem verification. |

## 待全文的两篇：尚未发布

- A47 ARES：[出版社](https://www.sciencedirect.com/science/article/pii/S2210650226002075)、[Nottingham 机构库](https://nottingham-repository.worktribe.com/output/70033742)。机构库列出开放 PDF 和 2026-07-12 录用日期，但本轮正文下载返回 403，尚未取得全文。作者仓库 README 不能替代论文实验和署名核查。
- A48 PAEvo：[出版社](https://link.springer.com/chapter/10.1007/978-3-032-36217-9_20) 仅提供订阅预览；首次在线 2026-08-25，PPSN 2026，作者机构为 Sun Yat-sen University / NUS。未从作者主页或公开检索找到可读全文，暂不凭摘要发布。

## 新增关系的逐条依据

既有关系不改。方向按原始论文时间先后核对；同月论文亦参考首次提交日期，网站只显示月。

| from → to | type / dimension | 依据 |
| --- | --- | --- |
| reevo → simpleevol | contrasts / search | A01 Sections 3–5; ReEvo method. |
| janus → bife | contrasts / feedback | A35 Section III; A02 method and evaluator definitions. |
| atlas → heurevo | contrasts / design-object | A03 plan/code/component representation and related work; ATLAS scaffold-free archive. |
| dgm → hada | contrasts / design-object | A04 Sections 2.2–3; DGM method. |
| reevo → quantforge | contrasts / feedback | A05 Sections 4–6; ReEvo reflection mechanism. |
| alphaevolve → modular-game-search | adapts / scope | A06 Sections 3–6, AlphaEvolve backend. |
| llamea-bo → ondesign | contrasts / scope | A09 online synthesis and evaluation; existing LLaMEA-BO method. |
| archagent-v2 → presage | contrasts / design-object | A33 architecture and constraints; A10 proposer/optimizer/combiner. |
| mcts-ahd → algoevo | contrasts / feedback | A11 Sections 3.1–3.4; MCTS-AHD tree semantics. |
| reevo → routerepair | contrasts / feedback | A13 Sections 3.4–3.6; ReEvo feedback. |
| reforge → routerepair | contrasts / feedback | A29 acceptance rules; A13 repair-verification rules. |
| reevo → quantumevo | adapts / scope | A14 Section 3.2 and downstream evaluation. |
| eoh → llm-hcjg | generalizes / design-object | A17 Sections 3.1–3.3 and 4.5; EoH thought/code representation. |
| llm-hcjg → rideskill | contrasts / search | A17 paired evolution; A18 Sections 3.2–3.3 and staged training algorithms. |
| eoh → es-ahd | contrasts / search | A20 method and analogy; EoH operators. |
| eoh → macroagent | adapts / scope | A21 contour evolution, five prompt operators and EoH reference. |
| llamea-hpo → bi-ezp | contrasts / search | A22 Section III and inner/outer data split; LLaMEA-HPO configuration loop. |
| alphaevolve → seisevo | contextualizes / scope | A25 introduction discussion of AlphaEvolve and Sections 2.2–3. |
| goalevolve → macroagent | contrasts / feedback | A26 frozen goals and checkpoint analysis; A21 contour evaluation. |
| featurehospital → bi-ezp | contrasts / design-object | A27 Methodology; A22 Section III. |
| evomem → eps-memevo | contrasts / feedback | A31 memory writing/retrieval; A30 contextual Thompson gate. |
| reevo → evomem | contrasts / feedback | A31 Sections 3–5; ReEvo short/long-term reflection. |
| elmer → es-ahd | contrasts / search | A32 behavioral labels and offset-DPO; A20 temperature control. |
| alphaevolve → archagent-v2 | adapts / scope | A33 Sections II–III and backend discussion. |
| reevo → trace-guided-design | contrasts / feedback | A34 Section 3.3 and discussion; ReEvo reflection inputs. |
| alphaevolve → janus | extends / feedback | A35 Section III, especially real-anchored promotion. |
| mosaic → piac | contrasts / feedback | A40 Section 3.3; A36 Section III potential gain. |
| shinkaevolve → relayevolve | extends / search | A37 Method and Experimental Setup, shared backend. |
| evopinn → adsl-pde | contrasts / design-object | A43 Section 4; A38 Method compiler/verifier. |
| eoh-s → dyca | extends / search | A39 Section 3.1 weighted CPM and Sections 3.2–3.3. |
| mosaic → dyca | contrasts / search | A40 region grid; A39 Sections 2–3. |
| reevo → mosaic | contrasts / feedback | A40 Sections 3.3–3.5; explicit ReEvo discussion. |
| funsearch → funl2o | adapts / design-object | A41 Methodology and explicit FunSearch-style formulation. |
| costada → relayevolve | contrasts / search | A42 Section 4; A37 Method. |
| llamea-hpo → llamea-mobo | adapts / scope | A45 introduction and Section III. |
| qdevo → aite | contrasts / search | A46 Section 2; A44 Section II. |
| reevo → qdevo | contrasts / feedback | A46 Sections 2.2–2.3; ReEvo reflection. |
| qdevo → mosaic | contrasts / search | A46 Section 2.3; A40 Section 3. |
| relayevolve → evolution-or-illusion | contrasts / search | A37 Grow–Deepen; B01 Section 2 and limitations. Analytical comparison, no citation claim. |
| when-ai-designs-ai → ai4ai-bench | contrasts / feedback | B03 Section 3; B02 Sections 2 and 4.1. |
| when-ai-designs-ai → tcsalgbench | contrasts / feedback | B03 Section 3; C01 Section 3. Analytical evaluation-axis comparison. |
| adsl-pde → evoskillrec | contrasts / design-object | A38 Method; C02 Sections 4.1–4.3. |
| janus → jet | contrasts / feedback | A35 real-anchored promotion; C03 Sections 3.2–3.4. |
| piac → kernelzero | contrasts / feedback | A36 Section III; C04 Section 2. |
| formuevo → optiskill | contrasts / feedback | C07 Sections 3.3–3.4; C05 Section 2. |
| evomem → ees | contrasts / feedback | A31 Sections 3–5; C06 Sections 4.4 and 6. |
| constraint-reformulation → formuevo | contrasts / feedback | C09 Sections 3–4; C07 Sections 3.2–3.4. |
| graphir → adsl-pde | contrasts / design-object | C08 Method; A38 Method. |
| aite → wara | contrasts / scope | A44 Section II; C10 architecture and Section III. |
