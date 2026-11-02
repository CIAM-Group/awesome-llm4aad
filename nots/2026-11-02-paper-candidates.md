# 2026-11-02 新论文候选清单（91 篇已核读写入审核分支、4 篇排除）

本轮列出 **95 篇未收录候选**：A 通用设计与搜索机制 40 篇，B 专项算法与程序设计 25 篇，C 评测与分析 10 篇，D 邻近/边界方向 20 篇。

**用户最初选择除 D14、D15、D20 外的 92 篇；通读后发现 A19 未展示算法或程序设计，用户确认本轮不收录，保留候选记录。其余 91 篇已核读原文并写入审核分支，等待 PR 审核，不等于已上线。** D 组仍按实际设计对象解释，不默认与核心 AAD 等价。下方“阅读与选择说明”保留初筛阶段的方法；后续逐篇原文证据与最终验证见[本轮记录](2026-11-02-session.md)。

## 阅读与选择说明

- 以 2026-11-02 为检索日，主检索覆盖 2026-10-01 至 2026-11-02，并回看 2026-09-29 至 09-30 的上次遗漏。候选中 10 月 82 篇、9 月末 13 篇；本轮未检出满足初筛条件的 11 月首发条目，不声称 11 月一定没有相关文章。
- 每条候选已读取 **arXiv 官方摘要和元数据**，说明仅是相关性初筛，**不是通读 PDF 后的讲解**。正式收录仍须阅读原文、核实机构/发表信息/代码，并建立有依据的关系。
- 表内日期均为 **arXiv v1 首次提交日（UTC）**，不是录用日，不按 ID 的月份猜日期，也不把修订时间当新论文。网站正式收录时再执行录用/正式发表优先、展示到月的规则。
- 英文短标签只方便本轮筛选：优先用作者方法名，否则用标题关键词，不自动变成网站缩写或文件夹名称。完整题目和 arXiv ID 均保留。
- A/B/C/D 只用于本次候选分组，不修改网站的受控 taxonomy。
- 可以回复“本轮 A 全部、B03/B08、C01，D 暂缓”，也可编辑表格的“决定”列；不能沿用上一轮同编号的选择。
- 本轮未逐篇核查是否引用 EoH；当前请求是寻找相关论文，不能把引用或名称相似当成相关性结论。

## 去重基准

- 已切换到 main 并成功 `git pull --ff-only origin main`，当前提交 `a409ca9f54e5d0a7ad6266687cddeab2f545a721`，共 164 篇。
- PR #15、#16 均已合并；截至本轮检查没有 open PR。原分支保留。
- 按去掉版本后缀的 arXiv ID 和规范化完整标题核对。查询结果中的 SimpleEvol、BiFE 已在网站，不重复列入。
- 上轮明确排除的 9 篇没有重新列入。ARES、PAEvo 仍属于已选、待原文的旧任务，不包装成本月新发现。

## 同名与边界提醒

- 两篇 EPOCH：`2610.17379` 是覆盖率与偏好训练，`2610.06986` 是证据治理；不能合并。
- JANUS `2610.13194` 与现有 Janus `2608.08189` 不同。
- MoSAIC `2610.15205` 与现有 MOSAIC `2608.07544` 不同。
- MemEvo `2609.36581` 与已有 EvoMem、ε-MemEvo 不同。
- Kernaut 的 kernel 是机器学习核函数，不是 GPU 内核。
- `2610.00707` / `2610.00675` 实际首发在 9 月 30 日；ATRL / Token 比较 / Bermudan 审计等也按官方首发日列出，不依 ID 数字排序猜日期。


## A：通用算法设计、搜索机制与研究控制（40 篇）

| 编号 | v1 日期 | 标签与完整题目（原始来源） | 为什么相关 / 选择提示 | 决定 |
| --- | --- | --- | --- | --- |
| A01 | 2026-10-29 | **HEMO** — [HEMO: Harness Self-Evolution for Multi-Objective Combinatorial Optimization](https://arxiv.org/abs/2610.40023) | 让多目标组合优化的算子设计流程本身演化，而不只改算子。 | 已核读，已写入分支 |
| A02 | 2026-10-28 | **HoliDivEvolve** — [Holistic Diversity Management in LLM-Guided Evolutionary Search](https://arxiv.org/abs/2610.38407) | 同时管理岛屿初始化、搜索预算和迁移，维持不同搜索方向。 | 已核读，已写入分支 |
| A03 | 2026-10-28 | **MUSE** — [MUSE: Multi-Level Memory with Selective Runtime Injection for Scientific Coding Agents](https://arxiv.org/abs/2610.38332) | 将跨任务、高层方案和实现细节分层记忆，并在编码执行中选择性注入经验。 | 已核读，已写入分支 |
| A04 | 2026-10-27 | **Dream-COP** — [Dream-COP: Guiding Algorithm Discovery for Combinatorial Optimization Problems in an Experience World](https://arxiv.org/abs/2610.36618) | 用历史搜索轨迹构成经验环境，学习指导后续算法发现的策略。 | 已核读，已写入分支 |
| A05 | 2026-10-26 | **Agentic Algorithm Design / Lean** — [Agentic Algorithm Design: LLMs that Propose, Formalise, and Prove Runtime Bounds for Evolutionary Algorithms in Lean](https://arxiv.org/abs/2610.35595) | 生成黑盒优化算法，并用 Lean 检查期望运行时间界；不是仅做经验打分。 | 已核读，已写入分支 |
| A06 | 2026-10-23 | **Coral Discovery** — [Coral Discovery: The Division of Cognitive Labor in Autonomous Research](https://arxiv.org/abs/2610.33281) | 按研究方向而不只按最高分分配多 agent 的实验预算。 | 已核读，已写入分支 |
| A07 | 2026-10-23 | **TTME** — [Can Test-Time Memory Evolution Outperform Test-Time Training for Scientific Discovery?](https://arxiv.org/abs/2610.32046) | 在同一发现框架内比较外部记忆演化与测试时权重训练，不把两者混为一谈。 | 已核读，已写入分支 |
| A08 | 2026-10-22 | **AgenticEvolve** — [AgenticEvolve: Evolutionary Program Search with Persistent Language Model Agents that Design and Run Experiments](https://arxiv.org/abs/2610.31326) | 每个岛由持久 agent 运行，允许其设计实验后再修改候选程序。 | 已核读，已写入分支 |
| A09 | 2026-10-22 | **PRS** — [Directing to Diversify: Multi-Directional Search for Automatic Heuristic Design](https://arxiv.org/abs/2610.31048) | 把启发式改写分成扩展、压缩和细调三个方向，并自适应调度。 | 已核读，已写入分支 |
| A10 | 2026-10-21 | **ExpEvolve** — [ExpEvolve: Structuring and Reusing Experience for Open-Ended Discovery](https://arxiv.org/abs/2610.29303) | 从程序差异中抽取高层设计因素，用于经验复用和停滞后的探索。 | 已核读，已写入分支 |
| A11 | 2026-10-20 | **SpecEvo** — [SpecEvo: Speculative Evolution with Large Language Models for Cost-Efficient Scientific Discovery](https://arxiv.org/abs/2610.28706) | 便宜模型负责日常探索与经验整理，强模型在检查点进行战略干预。 | 已核读，已写入分支 |
| A12 | 2026-10-19 | **CVaR-RMD** — [CVaR-RMD: CVaR Selection Pressure for Robust Metaheuristic Discovery](https://arxiv.org/abs/2610.25697) | 以尾部风险而非仅平均分筛选生成的启发式，关注跨实例与随机种子的稳健性。 | 已核读，已写入分支 |
| A13 | 2026-10-18 | **Épi** — [Epi: Towards a Persistent, Self-Improving Agent for Autonomous Research](https://arxiv.org/abs/2610.24944) | 跨会话保存研究状态与分支；除数学发现外，也评估可执行运筹求解程序。 | 已核读，已写入分支 |
| A14 | 2026-10-17 | **Organon** — [Organon : From Evolutionary Search to Recursive Self-Improving Agents for Scientific Discovery](https://arxiv.org/abs/2610.33046) | 持久 agent 在运行中修改搜索、种群、记忆和协作机制；算法设计是其测试领域之一。 | 已核读，已写入分支 |
| A15 | 2026-10-14 | **Scaling Discovery Requires Forgetting** — [Scaling Discovery Requires Forgetting](https://arxiv.org/abs/2610.20563) | 保留最好候选、周期性重启会话和搜索历史，缓解长期搜索的路径依赖。 | 已核读，已写入分支 |
| A16 | 2026-10-12 | **EPOCH—Coverage** — [EPOCH: Coverage-Aware Evolution with Experiential Preference Optimization for LLM-based Automated Heuristic Design](https://arxiv.org/abs/2610.17379) | 联合优化实例覆盖和互补启发式集合，再用偏好学习与反思蒸馏更新生成模型。 | 已核读，已写入分支 |
| A17 | 2026-10-12 | **HarnessTTT** — [HarnessTTT: Learn to Optimize Harness at Test-Time for Scientific Discovery](https://arxiv.org/abs/2610.17370) | 测试时训练生成搜索流程的 proposer，保持执行模型冻结。 | 已核读，已写入分支 |
| A18 | 2026-10-12 | **DuoDiscover** — [DuoDiscover: Scaling Autonomous Discovery Beyond the Evaluation Bottleneck](https://arxiv.org/abs/2610.17184) | 共同发现优化方案和便宜代理评估器，并用真实评估检查代理的排序可靠性。 | 已核读，已写入分支 |
| A19 | 2026-10-10 | **Triage-PiEvo** — [Triage-PiEvo: Evidence Admission for Principle-Evolving Scientific Agents](https://arxiv.org/abs/2610.14683) | 原文 §§3–4 实验生成分子、材料等科学候选，未展示算法或程序设计；初筛误归核心方向，已更正。 | 用户确认本轮排除，保留候选 |
| A20 | 2026-10-09 | **JANUS—World Models** — [JANUS: Enhancing Long-Horizon Autonomous Research with Co-Evolving World Models](https://arxiv.org/abs/2610.13194) | 用共同演化的世界模型预测实验价值、裁剪研究分支；不是仓库现有 Janus。 | 已核读，已写入分支 |
| A21 | 2026-10-08 | **EvoAlloc** — [EvoAlloc: A Self-Evolving Resource Allocation Agent for Efficient Program Evolution](https://arxiv.org/abs/2610.12086) | 演化计算资源分配策略，并抽查被拒绝候选以修正分配偏差。 | 已核读，已写入分支 |
| A22 | 2026-10-08 | **Generative Adversarial Loops** — [Generative Adversarial Loops](https://arxiv.org/abs/2610.11458) | 交替生成暴露弱点的数据和修复弱点的算法，实验包括 KV 压缩与上下文扩展。 | 已核读，已写入分支 |
| A23 | 2026-10-06 | **AGAR** — [AGAR: a reinforcement learning substrate for LLM program evolution](https://arxiv.org/abs/2610.09215) | 把程序演化写成决策过程，分别处理选择、探索、记忆与信用分配；不训练底层 LLM 权重。 | 已核读，已写入分支 |
| A24 | 2026-10-06 | **Stateless Language Agents** — [Stateless Language Agents: Scaling Long-Horizon Automated Research](https://arxiv.org/abs/2610.07625) | 由外部框架保存研究状态，每次调用重建有限上下文，研究长预算下的搜索效率。 | 已核读，已写入分支 |
| A25 | 2026-10-05 | **Guidance-TTT** — [Evolving in Thought Space: Training a Small Model at Test Time Unlocks Better Discoveries](https://arxiv.org/abs/2610.06269) | 只训练提出高层改动的小模型，让冻结的大模型实现可执行方案。 | 已核读，已写入分支 |
| A26 | 2026-10-05 | **Population Evolution** — [Discovered, Not Designed: Population Evolution for Collaborative and Compute-Intensive Model Discovery](https://arxiv.org/abs/2610.05950) | 在相关任务之间共享实验结果，并用分阶段训练降低昂贵模型设计的搜索成本。 | 已核读，已写入分支 |
| A27 | 2026-10-04 | **EPOCH—Evidence** — [EPOCH: Reliable Discovery through Evidence-Governed Search](https://arxiv.org/abs/2610.06986) | 用任务契约、类型化记忆、反证与独立回放约束发现声明；与 Coverage EPOCH 是不同论文。 | 已核读，已写入分支 |
| A28 | 2026-10-04 | **AgentDiscover** — [AgentDiscover: Autonomous Discovery with Minimal Search Scaffolding](https://arxiv.org/abs/2610.05334) | 让编码 agent 自主安排搜索，在数据库中保存想法、候选与关系。 | 已核读，已写入分支 |
| A29 | 2026-10-04 | **DiSH** — [Harnessing LLMs with Direction-Scope Control for Combinatorial Solver Refinement](https://arxiv.org/abs/2610.05221) | 同时限制修改方向和修改范围，减少组合优化求解器改进中的可行性反复丢失。 | 已核读，已写入分支 |
| A30 | 2026-10-02 | **AdaEva** — [AdaEva: Accelerating LLM-Driven Algorithm Design with Adaptive Partial Evaluation](https://arxiv.org/abs/2610.03896) | 逐步增加候选的测试实例，借助 successive halving / racing 提前淘汰弱候选。 | 已核读，已写入分支 |
| A31 | 2026-10-02 | **FrugalEvo** — [FrugalEvo: Towards Cost-Aware LLM-Guided Program Evolution](https://arxiv.org/abs/2610.03675) | 强模型规划、便宜模型实现，加上缓存复用；强调固定费用下的全程搜索收益。 | 已核读，已写入分支 |
| A32 | 2026-10-02 | **MECo** — [Multi-Task Evolution for Zero-Shot Cross-Problem Generalization using LLMs](https://arxiv.org/abs/2610.03316) | 多任务启发式种群迁移与互补集合选择，研究未见问题上的零样本泛化。 | 已核读，已写入分支 |
| A33 | 2026-10-01 | **SEDIMA** — [SEDIMA: Cross-Run Hierarchical Insight Memory for Evolutionary Search Agents](https://arxiv.org/abs/2610.02361) | 跨搜索运行提炼、聚类和检索经验，不只保留单次运行的上下文。 | 已核读，已写入分支 |
| A34 | 2026-09-30 | **Initialization Improves Discovery** — [Initialization Improves LLM-Driven Discovery](https://arxiv.org/abs/2610.00707) | 分析搜索模式坍缩，并测试先并行探索、再初始化迭代搜索的干预。 | 已核读，已写入分支 |
| A35 | 2026-09-30 | **LabBook** — [LabBook: Harnessing Experimental History for Efficient LLM-Driven Discovery](https://arxiv.org/abs/2610.00675) | 单 agent 维护实验笔记并检索完整实验日志，不依赖显式种群或搜索树。 | 已核读，已写入分支 |
| A36 | 2026-09-30 | **EvoDuet** — [EvoDuet: Bilevel Co-Evolution of Web Searching and Task Solving for Scientific Discovery](https://arxiv.org/abs/2609.40340) | 双层共同优化检索查询与候选解，用实验结果改进后续外部知识检索。 | 已核读，已写入分支 |
| A37 | 2026-09-30 | **ConflictGuide** — [ConflictGuide: AutoResearch Improves When Competing Behaviors Are Made Visible](https://arxiv.org/abs/2609.39933) | 把竞争目标之间的行为冲突显式反馈给模型代码演化，而不只给单一分数。 | 已核读，已写入分支 |
| A38 | 2026-09-30 | **From Search to Signal** — [From Search to Signal: Online Post-Training in Automatic Heuristic Design](https://arxiv.org/abs/2609.39383) | 研究怎样把候选有效性、性能和生成上下文转换为在线训练信号。 | 已核读，已写入分支 |
| A39 | 2026-09-30 | **PCPO** — [Self-Evolving Algorithm-Design Agents: Escaping In-Context Evolutionary Stagnation via Population-Curated Policy Optimization](https://arxiv.org/abs/2609.38757) | 用全局种群整理自产算法，更新生成模型；测试涵盖 EDA 学习率调度和 GPU 程序。 | 已核读，已写入分支 |
| A40 | 2026-09-29 | **Component-Aware Feedback** — [Component-Aware Feedback for Self-Evolving Programs](https://arxiv.org/abs/2609.38639) | 记录父子程序的组件修改及指标变化，为多组件程序演化提供归因记忆。 | 已核读，已写入分支 |

## B：专项算法与可执行程序设计（25 篇）

| 编号 | v1 日期 | 标签与完整题目（原始来源） | 为什么相关 / 选择提示 | 决定 |
| --- | --- | --- | --- | --- |
| B01 | 2026-10-23 | **TGR-EvoDAG** — [TGR-EvoDAG: A DAG-based Multi-Agent Code Evolution Framework for Generative Recommendation on Tencent](https://arxiv.org/abs/2610.32326) | 以 DAG 管理生成式推荐的多分支代码演化，考虑阶段训练成本和下游共同适配。 | 已核读，已写入分支 |
| B02 | 2026-10-22 | **ADAPT for Science** — [ADAPT for Science: A Multi-Agent System for Self-Evolving Scientific Optimization](https://arxiv.org/abs/2610.30851) | 同时调整初始搜索方向和优化过程，在引力波探测器设计中评估。 | 已核读，已写入分支 |
| B03 | 2026-10-21 | **ComRSI** — [Recursive Code Evolution for Task-Oriented Semantic Communications](https://arxiv.org/abs/2610.29641) | 演化语义通信的编码器、解码器、损失与训练程序；摘要也明确报告部分比较未显著。 | 已核读，已写入分支 |
| B04 | 2026-10-20 | **AI Research Teams / Linear Attention** — [Building AI Research Teams for Autonomous Discovery of Linear Attention Architectures](https://arxiv.org/abs/2610.28887) | 不同背景的持久 agent 协作搜索线性注意力架构，并自适应分配实验机会。 | 已核读，已写入分支 |
| B05 | 2026-10-20 | **Evolving Semantic Indexes** — [Evolving Semantic Indexes for Generative Retrieval](https://arxiv.org/abs/2610.28568) | 用 LLM 改写生成式检索的语义索引程序，并检验小代理模型的排序可靠性。 | 已核读，已写入分支 |
| B06 | 2026-10-18 | **PRECOCIAL** — [PRECOCIAL: Pretraining with Code Curriculums via Iterative Search for Accelerated Learning](https://arxiv.org/abs/2610.24970) | 演化生成合成预训练数据的程序；搜索复用网络训练状态，区别于逐候选重训。 | 已核读，已写入分支 |
| B07 | 2026-10-16 | **Evo-B&B** — [Evo-B&B: Behavior-Aware LLM-Guided Joint Evolution of Branching and Node Selection Policies for MILP](https://arxiv.org/abs/2610.22861) | 联合演化 MILP 的分支和节点选择策略，以行为相似性维持多样性。 | 已核读，已写入分支 |
| B08 | 2026-10-12 | **AutoNovo** — [AutoNovo: Agentic Program Search Discovers Transferable Nucleic Acid Design Algorithms](https://arxiv.org/abs/2610.16232) | 搜索核酸设计器的程序，而非只搜索核酸序列，并评估跨预测模型迁移。 | 已核读，已写入分支 |
| B09 | 2026-10-11 | **SiteEvo** — [SiteEvo: An LLM Agent for Autonomous Discovery of Site-Adaptive Massive MIMO Detectors](https://arxiv.org/abs/2610.15490) | 按部署站点生成完整 MIMO 检测器程序，再优化参数和计算结构。 | 已核读，已写入分支 |
| B10 | 2026-10-08 | **LLM-BlockFE** — [Long Text to Predictive Features: LLM-Guided Blockwise Feature Engineering via Executable Program Search](https://arxiv.org/abs/2610.12390) | 以代码块扩展和回退搜索特征提取程序，最终部署时不再调用 LLM。 | 已核读，已写入分支 |
| B11 | 2026-10-07 | **Kernaut** — [Kernel Autoresearch for Open-Ended Model Discovery](https://arxiv.org/abs/2610.10394) | 生成具有合法性契约的机器学习核函数程序；这里的 kernel 不是 GPU kernel。 | 已核读，已写入分支 |
| B12 | 2026-10-07 | **ReEvo-designed FAS algorithm** — [Beyond LLM-GA: Secure Fluid Antenna Systems with ReEvo-Designed Memetic Algorithm](https://arxiv.org/abs/2610.10235) | 离线演化流体天线安全优化中的交叉、变异和局部搜索算子。 | 已核读，已写入分支 |
| B13 | 2026-10-06 | **RLDiscover** — [RLDISCOVER: LLM-driven co-evolution of reinforcement learning algorithms](https://arxiv.org/abs/2610.09218) | 共同演化 RL 算法组件，结合分阶段训练与重复评估处理高成本和噪声。 | 已核读，已写入分支 |
| B14 | 2026-10-06 | **LeanPlan** — [LeanPlan: Optimal Planning with LLM-Generated Heuristics and Admissibility Proofs](https://arxiv.org/abs/2610.08246) | LLM 生成规划启发式，同时用 Lean 检查可采纳性，支持最优规划。 | 已核读，已写入分支 |
| B15 | 2026-10-05 | **AutoSella** — [Optimizing the Optimizer: Language Models Discover Faster Molecular Relaxation Algorithms](https://arxiv.org/abs/2610.06577) | 直接改写分子几何优化器，以力计算次数为目标，并检查提前停止与泛化问题。 | 已核读，已写入分支 |
| B16 | 2026-10-02 | **ADSD** — [Training Numerical Intelligence via Auto-Diagnosis and Skill Discovery](https://arxiv.org/abs/2610.03872) | 先诊断数值求解器的问题，再发现可复用改进技能；覆盖电力流、ODE 和 PDE。 | 已核读，已写入分支 |
| B17 | 2026-10-01 | **TRACE** — [TRACE: Tackling Real-World Resource Assignment Problems via Agentic Heuristic Design](https://arxiv.org/abs/2610.01887) | 从系统日志中提取机制与可执行工具，用于动态资源分配启发式设计。 | 已核读，已写入分支 |
| B18 | 2026-10-01 | **Autonomous Anomaly Detectors** — [Have an LLM Write Your Anomaly Detector: Autonomous Discovery of Compact, Interpretable Detectors for Time Series](https://arxiv.org/abs/2610.01223) | 生成短 NumPy 异常检测程序，重点兼顾检测性能、效率和可解释性。 | 已核读，已写入分支 |
| B19 | 2026-10-01 | **Network World Models** — [Network World Models as Environments for Algorithm Design on Complex Systems](https://arxiv.org/abs/2610.01048) | 以网络扩散世界模型加速评估，并用轨迹及反事实反馈改进网络干预算法。 | 已核读，已写入分支 |
| B20 | 2026-09-30 | **OpenArchEvo** — [Large Language Model-Guided Evolutionary Discovery of Native Neural Architectures for Spiking Sequence Modeling](https://arxiv.org/abs/2609.40258) | 在可执行代码空间演化原生脉冲网络结构，以行为特征辅助新颖性与性能估计。 | 已核读，已写入分支 |
| B21 | 2026-09-30 | **GRADASLIM** — [From DNA Design to DNA Slimming: Auditable Agentic Discovery of a Deletion-Only Designer](https://arxiv.org/abs/2609.40143) | 用 agent 改写 DNA 设计器，生成满足删除约束、保留预测活性的压缩算法。 | 已核读，已写入分支 |
| B22 | 2026-09-30 | **AutoMIP** — [Autoresearch in Mixed-Integer Linear and Nonlinear Programming](https://arxiv.org/abs/2609.39360) | 利用想法池和算法树组织 MILP / MINLP 的长时自动研究。 | 已核读，已写入分支 |
| B23 | 2026-09-30 | **QSA** — [Toward Quantum Software Automation: A Quantum-Aware Harness for LLM-Guided Evolution](https://arxiv.org/abs/2609.38883) | 为量子软件演化提供低成本验证、程序分析和任务奖励，覆盖编译与运行时策略。 | 已核读，已写入分支 |
| B24 | 2026-09-29 | **AutoMark** — [AutoMark: Enabling Autoresearch to Discover Better LLM Watermarks](https://arxiv.org/abs/2609.37310) | 自动发现水印算法，以统计有效性、可检测性、质量和鲁棒性做筛选。 | 已核读，已写入分支 |
| B25 | 2026-09-29 | **MemEvo** — [MemEvo: Automatic Discovery of Streaming Video Memory Mechanisms](https://arxiv.org/abs/2609.36581) | 在受限 DSL 中发现流式视频记忆程序；不是已有的 EvoMem 或 ε-MemEvo。 | 已核读，已写入分支 |

## C：评测、分析与结果可信度（10 篇）

| 编号 | v1 日期 | 标签与完整题目（原始来源） | 为什么相关 / 选择提示 | 决定 |
| --- | --- | --- | --- | --- |
| C01 | 2026-10-28 | **DecompGym** — [DecompGym: Benchmarking LLM Agents on Designing Decomposition Algorithms](https://arxiv.org/abs/2610.38175) | 评测 Benders 与列生成算法的实现；除答案外还审核是否真的使用指定分解方法。 | 已核读，已写入分支 |
| C02 | 2026-10-26 | **Auto-Research Arena** — [Auto-Research Arena: Benchmarking and Advancing Auto-Research in Language Modeling](https://arxiv.org/abs/2610.35866) | 在语言模型研究中分开资格约束与改进目标，评测多种自动研究流程。 | 已核读，已写入分支 |
| C03 | 2026-10-23 | **RadonBench** — [RadonBench: A Benchmark of Classical and Learning-Guided Search Techniques for Problems in Combinatorial Geometry](https://arxiv.org/abs/2610.33259) | 在统一有效性规则下比较经典、学习及 AlphaEvolve 搜索；研究对象偏数学构造。 | 已核读，已写入分支 |
| C04 | 2026-10-16 | **Principle-Level Local Optima** — [An important Bottleneck in LLM Optimizers: Principle-Level Local Optima](https://arxiv.org/abs/2610.24291) | 诊断代码仍变化但设计原则已坍缩的停滞，测试常见多样性干预的局限。 | 已核读，已写入分支 |
| C05 | 2026-10-13 | **Compare Search by Tokens** — [LLM Evolutionary Search Strategies Should be Compared by Tokens](https://arxiv.org/abs/2610.23977) | 用日志重放和等 token 预算重比较演化与独立采样，强调成本公平性。 | 已核读，已写入分支 |
| C06 | 2026-10-13 | **DivAlgo** — [DivAlgo: A systematic evaluation of algorithmic diversity for code generation models](https://arxiv.org/abs/2610.19157) | 评测生成程序在算法层面的多样性，而不只看代码表面差异。 | 已核读，已写入分支 |
| C07 | 2026-10-07 | **Bermudan Program-Search Audit** — [Auditing LLM Program Search for Bermudan Stopping with Primal--Dual Certificates](https://arxiv.org/abs/2610.14063) | 用原始—对偶界、冻结选择和留出测试审计收益；结果并非一味宣称超过基线。 | 已核读，已写入分支 |
| C08 | 2026-10-06 | **WorldSolver** — [WorldSolver: Can LLM Agents Simulate the Physical Dynamics via Solver Generation?](https://arxiv.org/abs/2610.08720) | 评测从物理现象生成可执行求解器，分别检查执行、视觉结果与物理合理性。 | 已核读，已写入分支 |
| C09 | 2026-10-02 | **D2K-Bench** — [D2K-Bench: Can LLM Agents Turn Expert Designs into Efficient GPU Kernels?](https://arxiv.org/abs/2610.03226) | 区分 agent 发现 GPU 算法设计与实现专家设计的能力。 | 已核读，已写入分支 |
| C10 | 2026-10-01 | **AlgoREval** — [Are you Synthesizing or Recalling? Evaluating LLMs on Algorithmic Code Retrieval](https://arxiv.org/abs/2610.02438) | 分离已知算法的参数记忆检索与新算法综合，帮助审视所谓新颖性。 | 已核读，已写入分支 |

## D：邻近与边界候选（单独决定范围）（20 篇）

| 编号 | v1 日期 | 标签与完整题目（原始来源） | 为什么相关 / 选择提示 | 决定 |
| --- | --- | --- | --- | --- |
| D01 | 2026-10-30 | **EAQECC Discovery** — [Researcher-in-the-Loop Evolutionary Discovery of Entanglement-Assisted Quantum Code Families](https://arxiv.org/abs/2610.41183) | LLM 程序演化生成量子纠错码，研究者再归纳结构并给证明；偏数学构造而非纯算法设计。 | 已核读，已写入分支 |
| D02 | 2026-10-28 | **New-Accelerator Kernel Loop** — [A Case Study of a Multi-Agent Kernel-Optimization Loop That Learns a New AI Accelerator](https://arxiv.org/abs/2610.38329) | 多 agent 自建平台知识并优化新 NPU 内核，属于硬件特定的程序优化案例。 | 已核读，已写入分支 |
| D03 | 2026-10-27 | **Batch-Invariant Kernel Generation** — [God Does Not Play Dice: Enforcing Batch Invariance in Agentic Kernel Generation](https://arxiv.org/abs/2610.36623) | 把不同批处理上下文下的数值一致性加入内核生成的验收门槛。 | 已核读，已写入分支 |
| D04 | 2026-10-27 | **AutoProfiler** — [Less is more: learning what to profile for GPU kernel optimization](https://arxiv.org/abs/2610.36576) | 用 LLM 改写与拆分 profiling 决策树，学习该采集哪些性能信息。 | 已核读，已写入分支 |
| D05 | 2026-10-27 | **JustGoal** — [JustGoal: With Only a Goal, the AI Baseline Is Above the Expert Kernels](https://arxiv.org/abs/2610.36434) | 以只给目标和约束的通用 agent 作 GPU 优化基线，检验专用框架的额外价值。 | 已核读，已写入分支 |
| D06 | 2026-10-21 | **SplatLab** — [SplatLab: Autonomous Scientific Discovery for 3DGS Research](https://arxiv.org/abs/2610.30468) | 从基线复现、插件演化到训练与消融的 3DGS 自动研究，范围比传统 AHD 更宽。 | 已核读，已写入分支 |
| D07 | 2026-10-20 | **OptScientist** — [OptScientist: Automated Discovery of Optimization Laws](https://arxiv.org/abs/2610.28562) | 从数据发现解释现象的优化模型/规律，而非主要设计求解算法；属自动建模边界候选。 | 已核读，已写入分支 |
| D08 | 2026-10-20 | **AscendEvolve** — [Beyond Experience: Knowledge-Guided Evolution for NPU Kernel Generation](https://arxiv.org/abs/2610.27588) | 从平台文档、头文件和算子库检索知识，指导 Ascend NPU 程序的生成、修复与重组。 | 已核读，已写入分支 |
| D09 | 2026-10-17 | **EdgeKernelBench / LEKA** — [EdgeKernelBench: Unified LLM-Driven Kernel Generation for Edge Backends](https://arxiv.org/abs/2610.24648) | 统一边缘后端的内核生成评测，并通过分层 IR 优化程序。 | 已核读，已写入分支 |
| D10 | 2026-10-17 | **Verified GPU Kernels** — [Proving LLM-Generated GPU Kernels Correct and Safe: Floating-Point Verification in Lean and VerCors](https://arxiv.org/abs/2610.24548) | 联合 Lean 与 VerCors 验证 LLM 生成内核的浮点语义、线程安全与无数据竞争。 | 已核读，已写入分支 |
| D11 | 2026-10-10 | **MoSAIC—DAG Scheduling** — [MoSAIC: Learning DAG Scheduling Heuristics from Optimal Schedules through Motif-Aware Recovery and LLM-Guided Reasoning](https://arxiv.org/abs/2610.15205) | 从最优调度学习优先级函数；摘要涉及 LLM 推理和贝叶斯优化，正式收录前需细查两者分工。不是已有 MOSAIC。 | 已核读，已写入分支 |
| D12 | 2026-10-10 | **Harmony Harness** — [Harmony Harness: Multi-Objective Self-Evolution of Agent Harnesses](https://arxiv.org/abs/2610.15150) | 对 agent 运行流程做多目标、组合式演化；不是直接针对组合优化算法。 | 已核读，已写入分支 |
| D13 | 2026-10-10 | **TileCas** — [TileCas: Cascading Kernel Development Across Programming Abstractions](https://arxiv.org/abs/2610.14740) | 允许编码 agent 在不同编程抽象层之间搜索和转移 GPU/加速器程序。 | 已核读，已写入分支 |
| D14 | 2026-10-09 | **ATRL** — [Compaction-Aware Reinforcement Learning For Ascend Triton Kernel Generation](https://arxiv.org/abs/2610.23950) | 针对长轨迹和上下文压缩训练 Ascend Triton 程序生成模型，属于代码生成训练方向。 | 排除 |
| D15 | 2026-10-09 | **Evo²** — [Evo$^2$: Evolving the Evolver through Weight-Harness Co-Evolution](https://arxiv.org/abs/2610.13025) | 共同更新 agent 模型权重与运行流程；实验主要是软件工程，是否扩到该范围由用户决定。 | 排除 |
| D16 | 2026-10-08 | **EliteTable** — [EliteTable: Self-Improving Program Search for Executable Control Policies](https://arxiv.org/abs/2610.12536) | 搜索可执行控制策略；摘要明确仍需要对比和消融来证明各组件贡献。 | 已核读，已写入分支 |
| D17 | 2026-10-07 | **Agentic EDA Case Study** — [When Algorithmic Exploration Becomes Cheap: A Case Study of Agentic Research in EDA](https://arxiv.org/abs/2610.10129) | 总结八个 agent 算法探索案例与研究验证问题，属于经验分析而非单一 AHD 框架。 | 已核读，已写入分支 |
| D18 | 2026-10-05 | **Weight-Five Bicycle Codes** — [Large Language Model-Guided Discovery of Weight-Five Bivariate Bicycle Codes](https://arxiv.org/abs/2610.06623) | 使用 LLM 生成程序搜索量子码，并报告精确距离和结构证据；偏数学对象发现。 | 已核读，已写入分支 |
| D19 | 2026-10-03 | **TRIZ-a** — [$\mathrm{TRIZ}^{a}$: Guiding Agent Evolution from Pattern Recognition to Solution Invention](https://arxiv.org/abs/2610.04555) | 以发明原理指导网络安全程序的演化；包括未通过最终晋升门槛的实验结果。 | 已核读，已写入分支 |
| D20 | 2026-10-01 | **InterEvolve** — [InterEvolve: Test-Time Evolution of Reward Programs for Humanoid Loco-Manipulation](https://arxiv.org/abs/2610.02196) | 演化机器人分阶段奖励程序，结合数值调参和模拟验证，不直接训练新控制器。 | 排除 |

## 检索覆盖与排除原则

- arXiv 官方 API 五组查询分别返回 21 / 66 / 133 / 278 / 4 条，去重共 400 条；各组返回数量与 `totalResults` 一致，没有漏取分页。
- 查询分别覆盖 AAD/AHD/AlphaEvolve/FunSearch、LLM 与程序演化/算法设计、科研 agent/程序搜索/内核、标题中的算法/启发式/演化/发现，以及 SplatLab/AutoMIP/ADSD/EDA 案例补查。聚合网站仅用于发现线索，候选内容与日期以官方来源为准。
- 排除不涉及 LLM 设计程序的经典优化算法、仅优化 LLM 本身但无 LLM 参与设计的工作、纯提示词/安全/记忆应用、大多数仅做科学假设或分子对象搜索的文章。未将所有“agent 自演化”都列为 AAD。
- 例如 EVOL `2610.03273` 的摘要是进化生成示范再训练学习路径推荐策略，未证明其用 LLM 生成算法；本轮不因“evolution”字样收录。TraceDSE `2610.07191` 主要选择映射与配置，而非生成通用求解算法，也未列入核心候选。
- D 组明确保留需要用户裁定的范围：内核实现、奖励程序、数学构造、自动建模和通用 agent 运行流程。这里的“待选”不是质量担保或效果复现。
- 这是可复查的本轮检索结果，不宣称穷尽所有数据库或所有新论文。

## 当前操作边界

初筛阶段仅更新 `nots/`。用户选择后已进入 `review/november-paper-curation` 实施阶段；具体已读、已写、验证和发布状态见 [本轮记录](2026-11-02-session.md)，不能把选中条目视为已发布条目。
