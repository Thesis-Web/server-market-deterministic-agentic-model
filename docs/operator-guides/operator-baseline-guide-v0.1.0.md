# Operator Baseline Guide — Server Market Deterministic Agentic Model

Version: 0.1.0  
Status: draft baseline  
Date: 2026-03-13

## 1. Bootstrap use

This guide covers the initial repository bootstrap phase only.

## 2. Operator sequence

1. clone repo on droplet
2. run bootstrap script
3. install dependencies
4. run deterministic quality gate
5. review generated file tree
6. commit baseline
7. push to main

## 3. Failure handling

If any gate fails:

- stop
- correct the failing file or script
- rerun the full gate
- commit only after a clean pass

## 4. Continuation point

After bootstrap baseline is pushed, begin drafting Blueprint 1 and Engineering Spec 1.
