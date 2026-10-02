# 2026-09-30 新论文候选清单（2026-10-01 已选择）

本轮共 **61 篇新候选：48 篇直接相关方法/应用、3 篇评价分析、10 篇邻近方向**。另有 4 篇正在 PR #15 中，不重复安排新增。

这里的“新候选”表示尚未在最新主分支收录、且未在当前待合并 PR 中出现，不表示全部刚刚发表：按下述日期口径，9 月 25 篇、8 月 26 篇、7 月 10 篇；其中 34 篇日期在上次维护日 2026-08-19 或之后。7—8 月较早条目属于补漏。

## 使用方法与核实程度

- 回复编号即可，例如“先加 A01、A03、A11、B01，C 组暂缓”；也可把“决定”列改为“收录 / 暂缓 / 排除”。
- 本轮逐条读候选的**官方摘要和元数据**进行范围判断，未声称通读这 61 篇全文。这里的中文说明是初筛概括，不代替正式 index.md 的方法讲解。
- A/B/C 是本次筛选分组，不是网站 taxonomy，不改变现有分类。
- 方法名采用作者给出的名称；没有清楚方法名时用题目关键词作为本报告的短标签，**不是新造的论文缩写**。表内同时保留完整题目。
- arXiv 条目的月份统一指 `published` / v1 首次提交，不使用 `updated` 版本修订日期。正式收录前仍需按项目的录用/正式发表优先规则核验网站日期；“arXiv v1”不代表一定尚未录用。
- A47 ARES：机构库给出的录用时间是 2026-07-12、在线发表 2026-07-26、卷期 2026-08。A48 PAEvo：出版社首次在线 2026-08-25、PPSN 2026，录用具体日期尚未核实。
- 未逐篇核查引用 EoH，也未据此伪造引用关系。当前任务是相关论文候选检索，方法相关性才是准入依据。
- 以上核实程度描述的是 9 月 30 日初筛阶段。10 月 1 日用户已选择其中 52 篇；执行状态见“决定”列和 [原文核查记录](2026-10-01-source-review.md)，不改写历史初筛为已经读过全文。

## 去重基准与已在审核中的论文

基准：`main`，提交 `dc13b33d05f638e962fe1adcab4238ce8c2d5dac`，`content/papers` 中 110 篇。按 arXiv ID（忽略 v1/v2 等后缀）、论文链接和规范化标题核对。最新已收录的 ATLAS、MuEvo、DGS、RefineEvo、SeaEvo、Clade-AHD，以及原有 PACE 等均不重复列入。

[PR #15：AutoSND、LaGO、SpecAHD、DGA2D](https://github.com/CIAM-Group/awesome-llm4aad/pull/15) 当前仍在审核；已读取 PR 文件列表核对下面的 paper_url。

| 论文 | 原文 | 状态 |
| --- | --- | --- |
| AutoSND | [2608.03653](https://arxiv.org/abs/2608.03653) | PR #15 中 |
| LaGO | [2602.16038](https://arxiv.org/abs/2602.16038) | PR #15 中 |
| SpecAHD | [2607.23676](https://arxiv.org/abs/2607.23676) | PR #15 中 |
| DGA₂D | [2608.00700](https://arxiv.org/abs/2608.00700) | PR #15 中 |

## A：直接相关的方法与应用（48 篇）

LLM/编码 agent 直接设计或修改可执行算法、启发式、规则或求解程序。当前收录决定以最后一列为准。

| 编号 | 月份 / 日期口径 | 论文（原文链接） | 主要内容与选择提示 | 决定 |
| --- | --- | --- | --- | --- |
| A01 | 2026-09 · arXiv v1 | **SimpleEvol**<br>[SimpleEvol: An Agent-Loop Framework for LLM-Driven Automated Heuristic Design with Minimal Human Priors](https://arxiv.org/abs/2609.37172) | 低人工先验的自主 agent 循环；同时提出 AHI/ICE 评价框架人工设计程度与模型能力转化效率。 | 已选，已写入本地审核分支 |
| A02 | 2026-09 · arXiv v1 | **BiFE**<br>[BiFE: Search-Efficient Discovery of CPU-Only Branching Policies via LLM-based Bi-Fidelity Evolution](https://arxiv.org/abs/2609.36735) | LLM 生成 MILP 分支规则，以廉价模仿评分预筛、真实求解评估复筛，输出 CPU 可运行策略。 | 已选，已写入本地审核分支 |
| A03 | 2026-09 · arXiv v1 | **HeurEvo**<br>[HeurEvo: Agentic Evolution of Hybrid Solver-Augmented Heuristics for Time-Critical Mathematical Optimization](https://arxiv.org/abs/2609.36303) | 联合进化求解计划、代码和共享组件，在严格时间预算下设计混合启发式与数学规划求解流程。 | 已选，已写入本地审核分支 |
| A04 | 2026-09 · arXiv v1 | **Hyper Algorithm Design Agent**<br>[Hyper Algorithm Design Agent: Evolving Learnable Optimizer from Zero](https://arxiv.org/abs/2609.35328) | 任务 agent 改进可学习优化器代码，hyper agent 改进设计 agent 及自身；面向 MetaBBO。 | 已选，已写入本地审核分支 |
| A05 | 2026-09 · arXiv v1 | **QuantForge**<br>[QuantForge: Discovering Residual Decompositions for MXFP4 Post-Training Quantization](https://arxiv.org/abs/2609.34680) | 用对照实验检验误差解释，再据此修改量化程序；设计 MXFP4 后训练量化算法。 | 已选，已写入本地审核分支 |
| A06 | 2026-09 · arXiv v1 | **General Game-Playing Algorithms**<br>[Modular Discovery of General Game-Playing Algorithms with Large Language Models](https://arxiv.org/abs/2609.33115) | LLM 多 agent 协同进化通用 C++ 搜索机制及由游戏规则生成的启发式，测试跨游戏泛化。 | 已选，已写入本地审核分支 |
| A07 | 2026-09 · arXiv v1 | **PINNMorph**<br>[PINNMorph: Evolving Online Adaptation Policies for Physics-Informed Neural Networks](https://arxiv.org/abs/2609.32685) | 进化状态相关的 PINN 在线调整策略，修改结构、损失、采样和优化过程。 | 本轮不收录 |
| A08 | 2026-09 · arXiv v1 | **O-RAN Slicing xApps**<br>[Evolving Inspectable O-RAN Slicing xApps with LLMs](https://arxiv.org/abs/2609.27337) | 离线进化可读 Python 资源分配控制器，在模拟器与真实 5G 测试床评估。 | 本轮不收录 |
| A09 | 2026-09 · arXiv v1 | **OnDesign**<br>[Online Automated Algorithm Design with Large Language Models](https://arxiv.org/abs/2609.25325) | 根据优化过程的实时状态重新生成算法，使算法设计与目标优化在运行中耦合。 | 已选，已写入本地审核分支 |
| A10 | 2026-09 · arXiv v1 | **Presage**<br>[Presage: Prefetch Search via Agent-Guided Experiments](https://arxiv.org/abs/2609.22636) | 由 proposer、optimizer 和 combiner agents 搜索并组合软件预取代码，使用性能实验指导修改。 | 已选，已写入本地审核分支 |
| A11 | 2026-09 · arXiv v1 | **AlgoEvo**<br>[AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery](https://arxiv.org/abs/2609.15820) | 用技能库和分层经验库支持自主代码搜索，覆盖单启发式、多目标与多组件算法设计。 | 已选，已写入本地审核分支 |
| A12 | 2026-09 · arXiv v1 | **AHL Studio**<br>[You Don't Need To Train: Agentic Heuristic Learning Studio for Executable Human Activity Recognition](https://arxiv.org/abs/2609.16065) | 从传感器样本及错误中形成并修复可执行活动识别规则，最终导出无需 LLM 的策略。 | 本轮不收录 |
| A13 | 2026-09 · arXiv v1 | **RouteRepair**<br>[RouteRepair: Instance-Level Failure Diagnosis and Targeted Repair in LLM-Based Automated Heuristic Design for Routing Optimization](https://arxiv.org/abs/2609.11452) | 根据逐实例失败证据定点修复路由启发式，同时检查对原有良好行为的损伤。 | 已选，已写入本地审核分支 |
| A14 | 2026-09 · arXiv v1 | **QuantumEvo**<br>[LLM-Driven Algorithm Design for Quantum Circuit Synthesis based on Binary Decision Diagrams](https://arxiv.org/abs/2609.05327) | 进化 BDD 变量排序启发式，以最终量子线路成本而非 BDD 大小作为选择反馈。 | 已选，已写入本地审核分支 |
| A15 | 2026-09 · arXiv v1 | **Discovery Loop**<br>[LLM-Guided Program Evolution for Circle Packing: Breaking 10 Packomania Records for $28](https://arxiv.org/abs/2609.05093) | 用历史思路、成绩记录和独立验证器迭代改进圆打包求解器；研究低预算算法发现。 | 本轮不收录 |
| A16 | 2026-09 · arXiv v1 | **RCPSP Priority Rules**<br>[Automated Priority Rule Design for the Resource-Constrained Project Scheduling Problem: A Large Language Model-Guided Population-Based Search](https://arxiv.org/abs/2609.03754) | 用 LLM 种群搜索设计资源受限项目调度优先级规则，直接部署到未见项目。 | 本轮不收录 |
| A17 | 2026-09 · arXiv v1 | **LLM-HCJG**<br>[LLM-Driven Joint Evolution of Coupled Heuristics Components for Routing Optimization](https://arxiv.org/abs/2609.02353) | 联合进化 GLS 的初始化与惩罚构造组件，研究组件兼容性及 TSP 到 CVRP 迁移。 | 已选，已写入本地审核分支 |
| A18 | 2026-09 · arXiv v1 | **RideSkill**<br>[RideSkill: A Hierarchical Algorithm for Generalized Ride Sharing with LLM-Driven Automatic Evolution](https://arxiv.org/abs/2609.02250) | 共同进化拼车技能库、技能组合器和空车再定位程序，部署阶段无需持续调用 LLM。 | 已选，已写入本地审核分支 |
| A19 | 2026-08 · arXiv v1 | **Near-Optimal OR Algorithms**<br>[LLMs Can Design Near-Optimal OR Algorithms](https://arxiv.org/abs/2608.27296) | 测试 LLM 能否从问题类别描述直接设计适用于未见实例的库存、排队与选品算法。 | 本轮不收录 |
| A20 | 2026-08 · arXiv v1 | **ES-AHD**<br>[ES-AHD: An Evolution Strategy Framework for Automatic Heuristic Design](https://arxiv.org/abs/2609.00023) | 从优秀候选提取语义搜索中心，用带动量的采样温度变化调节探索与细化。 | 已选，已写入本地审核分支 |
| A21 | 2026-08 · arXiv v1 | **MacroAgent**<br>[MacroAgent: Regularity-Aware Macro Legalization with LLM-Agent-Designed Contour Algorithms](https://arxiv.org/abs/2608.24946) | 自动设计规则感知的轮廓启发式，用于芯片宏单元布局合法化。 | 已选，已写入本地审核分支 |
| A22 | 2026-08 · arXiv v1 | **Bi-EZP**<br>[Bi-EZP: LLM-Guided Bilevel Program Evolution for Ensemble Zero-Cost Proxy Discovery](https://arxiv.org/abs/2608.21927) | LLM 搜索 NAS 零成本指标聚合程序，内层 CMA-ES 校准数值参数，独立验证结构泛化。 | 已选，已写入本地审核分支 |
| A23 | 2026-08 · arXiv v1 | **Dynamic Algorithm Dispatch**<br>[Data-Driven Dynamic Algorithm Dispatch with Large Language Models](https://arxiv.org/abs/2608.21584) | 从性能数据库生成线性代数算法选择规则，以 LU 分解为案例。 | 本轮不收录 |
| A24 | 2026-08 · arXiv v1 | **Loreley**<br>[Loreley: Repository-Scale Program Evolution with Quality-Diversity Search](https://arxiv.org/abs/2608.19703) | 在质量多样性档案中保留完整代码仓库状态以复用搜索分支；受控实验未确认最终性能优势。 | 本轮不收录 |
| A25 | 2026-08 · arXiv v1 | **SeisEvo**<br>[SeisEvo: Evolution of Seismic Data Reconstruction Algorithms by Agents](https://arxiv.org/abs/2608.18272) | LLM agents 在物理约束下修改地震重建算子，输出可独立部署的白盒重建算法。 | 已选，已写入本地审核分支 |
| A26 | 2026-08 · arXiv v1 | **GoalEvolve**<br>[GoalEvolve: From Handcrafted Algorithm Priors to Goal-Driven Evolution of Physical Design Algorithms](https://arxiv.org/abs/2608.16733) | 根据完整芯片设计流程的目标缺口定位瓶颈，由 Teacher/Student agents 改进对应算法代码。 | 已选，已写入本地审核分支 |
| A27 | 2026-08 · arXiv v1 | **FeatureHospital**<br>[FeatureHospital: A Skill-Driven Multi-Agent Framework for Automated Algorithm Customization in Multi-View Multi-Label Feature Selection](https://arxiv.org/abs/2608.16148) | 诊断数据集问题，由技能化多 agent 组合并协调损失项，定制多视图多标签特征选择算法。 | 已选，已写入本地审核分支 |
| A28 | 2026-08 · arXiv v1 | **The Little Scientist**<br>[The Little Scientist: LLM Agent-Driven Discovery via the Scientific Method](https://arxiv.org/abs/2608.16951) | Scientist agent 循环提出、实现和评测算法，停滞时用跨领域猜想推动探索；案例为蛋白预测与 DNA motif。 | 本轮不收录 |
| A29 | 2026-08 · arXiv v1 | **ReForge**<br>[ReForge: Keeping ABR Algorithms Never Finished with Verified Large Language Model Edits](https://arxiv.org/abs/2608.15138) | LLM 持续修改自适应码率策略的路由规则，以历史网络回放验证修改是否造成退化。 | 已选，已写入本地审核分支 |
| A30 | 2026-08 · arXiv v1 | **ε-MemEvo**<br>[$\varepsilon$-MemEvo: Adaptive Cross-Task Memory Transfer for LLM Program Evolution](https://arxiv.org/abs/2608.12522) | 跨任务保存自然语言算法策略，按搜索状态控制记忆注入，减少负迁移。 | 已选，已写入本地审核分支 |
| A31 | 2026-08 · arXiv v1 | **EvoMem**<br>[EvoMem: Memory-Augmented Evolution for Code Optimization](https://arxiv.org/abs/2608.10795) | 把成功代码变异提炼成可追溯的经验，供后续运行及相关任务检索复用。 | 已选，已写入本地审核分支 |
| A32 | 2026-08 · arXiv v1 | **ELMER**<br>[ELMER: Evolutionary Language Model that Explores and Refines](https://arxiv.org/abs/2608.10196) | 训练语言模型控制语义变异强度，并在自然语言描述与可执行类型化程序间转换。 | 已选，已写入本地审核分支 |
| A33 | 2026-08 · arXiv v1 | **ArchAgent v2**<br>[ArchAgent v2: A Case Study with the Data Prefetching Championship](https://arxiv.org/abs/2608.09874) | 逐级进化多层缓存预取器，将硬件资源可实现性纳入演化反馈。 | 已选，已写入本地审核分支 |
| A34 | 2026-08 · arXiv v1 | **Simulation-Trace Heuristics**<br>[LLM-Guided Heuristic Design from Simulation Traces: A Case Study in Dynamic Production and AGV Scheduling](https://arxiv.org/abs/2608.09343) | 从生产与 AGV 调度仿真轨迹诊断瓶颈，生成并重复评估针对性的策略代码修改。 | 已选，已写入本地审核分支 |
| A35 | 2026-08 · arXiv v1 | **Janus**<br>[Janus: An Algorithm-Evaluator Co-Evolution Framework for LLM-Driven Discovery under Expensive Evaluation Budgets](https://arxiv.org/abs/2608.08189) | 协同进化目标算法与可执行代理评估器；代理只负责排序，候选晋级仍须真实评估。 | 已选，已写入本地审核分支 |
| A36 | 2026-08 · arXiv v1 | **PIAC**<br>[Evolving Parallel Algorithm Portfolios via Potential-Aware Instance Generation with LLMs](https://arxiv.org/abs/2608.06808) | 共同进化互补算法组合和实例生成算子，以潜在改进量替代依赖参考最优解的难度指标。 | 已选，已写入本地审核分支 |
| A37 | 2026-08 · arXiv v1 | **Relay, Don't Route**<br>[Relay, Don't Route: Adaptive Population Handoff for Cost-Efficient LLM-Driven Evolution](https://arxiv.org/abs/2608.05651) | 在廉价与强模型间移交整个候选种群，以种群状态而非单次调用组织预算。 | 已选，已写入本地审核分支 |
| A38 | 2026-08 · arXiv v1 | **ADSL-PDE**<br>[Improving Auto-Design of Neural PDE Solvers with a Domain-Specific Language](https://arxiv.org/abs/2608.04384) | 用领域语言表示 PDE 求解器的设计决策，再确定性编译，缩小无效程序搜索空间。 | 已选，已写入本地审核分支 |
| A39 | 2026-08 · arXiv v1 | **DyCA**<br>[Beyond Average Performance: Dynamic Instance Clustering and Specialized Algorithm Design in LLM-Assisted Evolutionary Search](https://arxiv.org/abs/2608.03129) | 根据算法表现动态聚类实例，协同设计专家算法组合，关注尾部实例稳健性。 | 已选，已写入本地审核分支 |
| A40 | 2026-07 · arXiv v1 | **MOSAIC**<br>[MOSAIC: Adversarial Co-evolution of Specialist Heuristics and Problem Instances for LLM-based Automated Heuristic Design](https://arxiv.org/abs/2608.07544) | 将对抗实例生成、专家启发式和局部反思放入质量多样性档案，共同进化互补组合。 | 已选，已写入本地审核分支 |
| A41 | 2026-07 · arXiv v1 | **FunL2O**<br>[FunL2O: LLM-Guided Feature Function Design for Learning to Optimize](https://arxiv.org/abs/2607.27389) | 用 LLM 进化 Learning-to-Optimize 的输入特征函数，以重新训练后的优化表现评分。 | 已选，已写入本地审核分支 |
| A42 | 2026-07 · arXiv v1 | **CostAda**<br>[Budget-Aware LLM Discovery via Cost-Calibrated Frontier Utility](https://arxiv.org/abs/2607.26828) | 按实际 token 成本和剩余预算分配搜索方向、探索强度与策略干预。 | 已选，已写入本地审核分支 |
| A43 | 2026-07 · arXiv v1 | **EvoPINN**<br>[EvoPINN: Agentic Discovery of Executable Algorithms for Physics-Informed Neural Networks](https://arxiv.org/abs/2607.26490) | 在结构检查与一致计算预算下进化 PINN 表示和训练程序。 | 已选，已写入本地审核分支 |
| A44 | 2026-07 · arXiv v1 | **AITE**<br>[Autonomous Discovery of Wireless Communications Algorithms](https://arxiv.org/abs/2607.17762) | 自动发现无线通信均衡器与接收算法，联合考虑性能和计算开销。 | 已选，已写入本地审核分支 |
| A45 | 2026-07 · arXiv v1 | **MOBO Algorithm Generation**<br>[LLM-Driven Evolutionary Generation of Multi-Objective Bayesian Optimization Algorithms](https://arxiv.org/abs/2607.08791) | 扩展 LLaMEA 来生成完整多目标贝叶斯优化算法，并将超参数优化纳入进化。 | 已选，已写入本地审核分支 |
| A46 | 2026-07 · arXiv v1 | **QDEvo**<br>[QDEvo: A Multi-Objective Quality-Diversity Framework for Automated Heuristic Design](https://arxiv.org/abs/2607.11916) | 用代码嵌入、质量多样性档案和分层反思维持多目标启发式搜索的多样性。 | 已选，已写入本地审核分支 |
| A47 | 2026-07 · 录用 | **ARES**<br>[A multi-agent framework powered by large language models for automatic heuristic design](https://www.sciencedirect.com/science/article/pii/S2210650226002075) | Theorist、Experimenter、Critic 分工提出机制、生成算法及做结构消融，用策略表积累跨代经验。 | 已选，待全文 |
| A48 | 2026-08 · 首次在线 | **PAEvo**<br>[PAEvo: Plan-Algorithm Evolution with LLMs for Automatic Heuristic Design](https://link.springer.com/chapter/10.1007/978-3-032-36217-9_20) | 将高层计划和可执行启发式共同进化，用多个 LLM 角色协作保存并细化设计思路。 | 已选，待全文 |

## B：直接相关的评价与分析（3 篇）

不以新搜索框架为主，但直接研究算法设计能力、创新性或公平评估，建议单独设评测/分析类别。

| 编号 | 月份 / 日期口径 | 论文（原文链接） | 主要内容与选择提示 | 决定 |
| --- | --- | --- | --- | --- |
| B01 | 2026-09 · arXiv v1 | **Evolution or Illusion?**<br>[Evolution or Illusion? Rethinking Evaluation in LLM Evolutionary Search](https://arxiv.org/abs/2609.19799) | 指出方法排名会随种子数、迭代深度与预算变化；提出宽度×深度评估前沿。 | 已选，已写入本地审核分支 |
| B02 | 2026-08 · arXiv v1 | **AI4AI-Bench**<br>[AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement](https://arxiv.org/abs/2608.20318) | 让 agents 改写十类训练算法，再用隐藏评估器从头训练，区分算法改进与调参。 | 已选，已写入本地审核分支 |
| B03 | 2026-08 · arXiv v1 | **When AI Designs AI**<br>[When AI Designs AI: Innovation or Imitation?](https://arxiv.org/abs/2608.17471) | 分析 agent 算法与人类算法在模块设计空间中的差异，区分性能提升与设计新颖性。 | 已选，已写入本地审核分支 |

## C：邻近方向，单独决定（10 篇）

涉及自动建模、NAS、kernel、agent 程序或证明。这些研究与仓库存在联系，但不默认等同于核心 AHD 方法。

| 编号 | 月份 / 日期口径 | 论文（原文链接） | 主要内容与选择提示 | 决定 |
| --- | --- | --- | --- | --- |
| C01 | 2026-09 · arXiv v1 | **TCSAlgBench**<br>[TCSAlgBench: Benchmarking Automated Proving for Research-Level Theoretical Computer Science](https://arxiv.org/abs/2609.35606) | 理论计算机科学研究级证明基准，部分任务包含算法构造；不是主要评价可执行启发式。 | 已选，已写入本地审核分支 |
| C02 | 2026-09 · arXiv v1 | **EvoSkillRec**<br>[EvoSkillRec: Skill-Genome Evolution for Recommender Architecture Discovery](https://arxiv.org/abs/2609.34552) | 以可执行技能模块共同进化推荐网络架构；属于 LLM 驱动 NAS 扩展方向。 | 已选，已写入本地审核分支 |
| C03 | 2026-09 · arXiv v1 | **JET**<br>[JET: Judge-Guided Evolution at Test Time for Agent Programs](https://arxiv.org/abs/2609.34126) | 进化并迁移可执行 judge，再指导目标任务 agent 程序的测试时演化；偏 agent 自改进。 | 已选，已写入本地审核分支 |
| C04 | 2026-09 · arXiv v1 | **KernelZero**<br>[KernelZero: Co-Evolving Proposer and Coder for Continuously Improved GPU Kernel Generation](https://arxiv.org/abs/2609.33074) | 协同训练任务提出模型与 GPU kernel 生成模型；偏硬件代码生成与模型训练。 | 已选，已写入本地审核分支 |
| C05 | 2026-09 · arXiv v1 | **OptiSkill**<br>[OptiSkill: A Hierarchical and Evolving SkillBank for LLM-Based Optimization Modeling](https://arxiv.org/abs/2609.22987) | 为 OR 自动建模积累经求解器验证的分层技能库；重点是正确建模而非启发式演化。 | 已选，已写入本地审核分支 |
| C06 | 2026-09 · arXiv v1 | **EES**<br>[Evolutionary Ensemble Search: Council-Guided Program Evolution with Persistent Memory](https://arxiv.org/abs/2609.17590) | 通过专家议事、程序进化和持久记忆设计 ML 流程；包含开发反馈，不能当作盲测成功率。 | 已选，已写入本地审核分支 |
| C07 | 2026-08 · arXiv v1 | **FormuEvo**<br>[FormuEvo: LLM-Guided Evolution for Discovering Solver-Efficient Mixed-Integer Programming Formulations](https://arxiv.org/abs/2608.23353) | 进化可执行 MIP 建模程序，并依据求解统计诊断改进；属于求解效率导向的自动建模。 | 已选，已写入本地审核分支 |
| C08 | 2026-08 · arXiv v1 | **GraphIR**<br>[GraphIR: Architecture-Level Search States for LLM-Guided Neural Architecture Evolution](https://arxiv.org/abs/2608.01633) | 以计算骨架、可变异模块与接口约束辅助 LLM 进化神经网络架构。 | 已选，已写入本地审核分支 |
| C09 | 2026-07 · arXiv v1 | **Constraint Model Reformulation**<br>[LLM-Guided Evolutionary Search for Constraint Model Reformulation to Improve Solver Efficiency](https://arxiv.org/abs/2607.28268) | 用运行时间反馈与行为多样性保留机制进化约束模型表述，偏自动建模。 | 已选，已写入本地审核分支 |
| C10 | 2026-07 · arXiv v1 | **WARA**<br>[WARA: A Closed-Loop Multi-Agent Framework for Wireless Optimization Autoresearch](https://arxiv.org/abs/2607.19822) | 涵盖问题提出、建模、算法、实验和论文的无线 autoresearch 系统；范围较广。 | 已选，已写入本地审核分支 |

## 初筛明确排除的例子

这不是所有排除项的穷尽表，而是记录最容易被标题误导的条目。

| 论文 | 排除依据 |
| --- | --- |
| [From Intents to Algorithms: Verified Algorithm Discovery for Transport Networks](https://arxiv.org/abs/2609.27386) | 摘要明确说实际 proof-of-concept 使用十参数数值候选，而非完成的 live-LLM/AST 实验；没有证明 LLM 生成带来的效果。 |
| [EvE: An Alternate Optimizer to Adam](https://arxiv.org/abs/2609.35614) | 提出 DE + Adam 优化器；用来微调 LLM 不等于由 LLM 设计算法，摘要没有这种设计环节。 |
| [Symbolic Discovery of Iterative Algorithms: A Continuous Latent Space Bayesian Optimization Framework](https://arxiv.org/abs/2607.01552) | 用 VAE 与贝叶斯优化搜索更新函数，摘要没有使用 LLM；不能仅因“自动算法发现”而收录。 |

## 检索记录与来源

检索日：2026-09-30。以 arXiv API 为主，补充出版社、作者/机构页面。来源摘要只用于初筛，不视为已验证实验结论。

1. 核心关键词：`algorithm design`、`heuristic design`、`algorithm discovery`、`program evolution`；首次提交窗口 2026-07-01 至 2026-09-30。arXiv API 返回 155 条，全部取回。
2. 扩展关键词：`(LLM OR language model OR AlphaEvolve OR FunSearch) AND (heuristic OR evolution OR algorithm discovery OR algorithm design)`；首次提交窗口 2026-08-01 至 2026-09-30。返回 585 条，分 400 + 185 两页取回。
3. 两组按不带版本号的 arXiv ID 合并为 700 条关键词命中；不是 700 篇全部相关论文，也不是 700 篇全文阅读。经范围初筛、主分支和 PR 去重后，保留 59 篇 arXiv 候选，另补 2 篇期刊/会议论文。
4. 所有候选逐条保留官方来源链接。ARES 的日期另核对[作者机构库](https://nottingham-repository.worktribe.com/output/70033742/a-multi-agent-framework-powered-by-large-language-models-for-automatic-heuristic-design)；PAEvo 见其出版社页面。
5. 本轮并非声称穷尽全领域。关键字检索可能漏掉未使用这些术语的应用论文；用户选择后需继续完成全文、机构、录用月份、代码以及关系依据核实。

## 下一步

等待用户选择编号；选定后再阅读全文、写固定格式笔记、核实机构与时间，审慎建立有依据的 relations，并按当时未合并 PR 状态选择单一审核路径。
