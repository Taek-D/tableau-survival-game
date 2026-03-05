---
name: problem-authoring
description: 문제 추가/수정 가이드. Use when creating new problems, quiz questions, blockDrag problems, calcField problems, or modifying answer data. Triggers on problem, quiz, question, answer, obfuscate, 난독화, 채점.
allowed-tools: Read, Grep, Glob, Bash
---

# Problem Authoring Guide

## 문제 유형 3가지

| 유형 | 컴포넌트 | 채점기 |
|------|----------|--------|
| `quiz` | `QuizQuestion.jsx` | `quizChecker.js` |
| `blockDrag` | `BlockDragQuestion.jsx` | `blockDragChecker.js` |
| `calcField` | `CalcFieldEditor.jsx` | `calcFieldValidator.js` |

## 새 문제 추가 절차

### 1. 문제 데이터 작성
- 위치: `src/data/problems/`
- 파일: 유형별 파일 (`quizProblems.js`, `blockDragProblems.js`, `calcFieldProblems.js`)

### 2. 정답 난독화 (필수!)
- 평문 정답을 코드에 직접 넣지 않기
- `src/data/problems/_key.js`의 난독화 시스템 사용
- `answerLoader.js`를 통해 정답 로드

### 3. 챕터에 문제 연결
- 챕터 데이터의 `problems` 배열에 문제 ID 추가
- 보스 문제는 `boss` 필드에 지정

### 4. 채점 검증
- 각 채점기의 로직 확인
- `quizChecker`: 정답 인덱스 비교
- `blockDragChecker`: 블록 배치 위치 비교
- `calcFieldValidator`: 정규식 패턴 매칭

## ID 규칙
- 퀴즈: `quiz_{chapter}_{number}` (예: `quiz_1_01`)
- 블록드래그: `block_{chapter}_{number}`
- 계산식: `calc_{chapter}_{number}`

## Don'ts
- 정답을 평문으로 하드코딩하지 않기
- 난독화 키(`_key.js`)를 수정하지 않기 (기존 정답 깨짐)
- 채점기 로직을 문제별로 분기하지 않기 (범용 패턴 유지)
