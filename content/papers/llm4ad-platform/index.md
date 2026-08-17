---
id: llm4ad-platform
short_title: "LLM4AD Platform"
title: "LLM4AD: A Platform for Algorithm Design with Large Language Model"
authors:
  - "Fei Liu"
  - "Rui Zhang"
  - "Zhuoliang Xie"
  - "Rui Sun"
  - "Kai Li"
  - "Qinglong Hu"
  - "Ping Guo"
  - "Xi Lin"
  - "Xialiang Tong"
  - "Mingxuan Yuan"
  - "Zhenkun Wang"
  - "Zhichao Lu"
  - "Qingfu Zhang"
year: 2024
date: 2024-12-23
venue: arXiv
paper_url: https://arxiv.org/pdf/2412.17287
code_url: https://github.com/Optima-CityU/LLM4AD
institutions:
  - cityu-hk
  - sustech
  - xjtu
  - huawei-noahs-ark
primary_dimension: scope
dimensions:
  - scope
  - design-object
  - search
problems:
  - "Automatic Algorithm Design"
featured: false
summary: "LLM4AD packages search methods, design tasks, model interfaces, and a secure evaluation sandbox into one reusable platform."
---

## Why it matters

Research systems for LLM-based algorithm design often mix search logic, prompts, evaluators, and task code. LLM4AD makes those parts explicit and reusable, lowering the cost of reproducing and comparing methods.

## Core method

The platform exposes modular blocks for search, algorithm-design tasks, and LLM calls. A common sandbox evaluates executable candidates, while tutorials, examples, and a GUI make new task adapters easier to add.

## Contributions

- A unified implementation interface for LLM-assisted algorithm design.
- Reusable search and task modules across optimization, machine learning, and scientific discovery.
- A secure evaluation sandbox and practical support material.

## Limitations and extensions

The platform standardizes interfaces but does not solve budget allocation or evaluation noise by itself. Future extensions could add reproducible experiment manifests and native relation metadata for research atlases.
