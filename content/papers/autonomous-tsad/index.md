---
id: autonomous-tsad
short_title: Autonomous TSAD
title: 'Have an LLM Write Your Anomaly Detector: Autonomous Discovery of Compact, Interpretable Detectors for Time Series'
authors: [David Berghaus]
year: 2026
date: 2026-10-01
venue: arXiv
paper_url: https://arxiv.org/pdf/2610.01223
code_url: https://anonymous.4open.science/r/TS-AD_submission-7E42/README.md
institutions: [lamarr-institute, fraunhofer-iais]
primary_dimension: design-object
dimensions: [design-object, feedback, search]
problems: [Time-Series Anomaly Detection]
featured: false
summary: Searches compact NumPy anomaly detectors against synthetic training-region anomalies, retaining full research history while selecting the best final program.
---

## Why it matters

Accurate anomaly detection need not require a large learned model. An executable detector can be inexpensive and inspectable, provided its discovery objective reflects useful anomaly mechanisms without leaking test labels.

## Core method

The agent edits a single short function mapping training and test segments to timestamp scores. A fixed harness injects synthetic anomalies into a held-out slice of the training region and supplies validation performance. The generator covers magnitude changes, frozen segments, and in-range contextual or rhythmic changes; real anomaly labels are excluded from search.

There is no automatic hill-climbing acceptance gate: unsuccessful edits remain in the trajectory and can inspire later proposals. The best-scoring program over the session is returned. Single-principle prompting favors compact mechanisms. The strongest univariate and multivariate discoveries compare local spectral descriptions with normal training windows using covariance-aware distances, then map multi-scale window novelty to timestamp scores.

## Contributions

TSB-AD and TAB evaluate separate univariate and multivariate detectors. The paper compares driving models and a matched ShinkaEvolve search, provides executable code, and measures CPU inference efficiency rather than only predictive metrics.

## Strengths and limitations

Programs are readable and require no neural training at deployment. Rankings depend on metric and dataset: the method does not dominate every TAB univariate measure. The synthetic generator supplies substantial human prior knowledge, and inference-time efficiency excludes discovery cost. Search-controller comparisons show no consistent accuracy winner.

## What to improve

Repeat independent searches, vary synthetic anomaly families, and evaluate unseen industrial processes and region-level detection objectives.

## Connections

The anomaly-detector study contrasts [ShinkaEvolve](../shinkaevolve/index.md)'s sampled parent and inspiration programs with a single coding session that retains its sequence of attempts, including regressions. The latter returns the session-best detector without automatically reverting each unsuccessful edit.
