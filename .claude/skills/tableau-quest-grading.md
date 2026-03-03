---
name: tableau-quest-grading
description: 채점 시스템 가이드. Use when working with quiz checking, block drag validation, calc field validation, or answer data.
---

# Tableau Quest Grading System

## Overview
3가지 문제 유형별 클라이언트 사이드 채점 엔진.

## 1. Quiz Checker (`src/utils/quizChecker.js`)
- **방식**: 정답 ID 매칭
- **입력**: 선택한 옵션 ID
- **출력**: 정답/오답 boolean
- **데이터**: `src/data/problems/quizProblems.js`

## 2. Block Drag Checker (`src/utils/blockDragChecker.js`)
- **방식**: 슬롯별 블록 비교 + 대안 정답 허용
- **입력**: 사용자가 배치한 블록 맵 (slot → block)
- **출력**: 정답/오답 + 슬롯별 피드백
- **데이터**: `src/data/problems/blockDragProblems.js`

## 3. Calc Field Validator (`src/utils/calcFieldValidator.js`)
- **방식**: 정규식 패턴 매칭 + 부분 점수 피드백
- **입력**: 사용자 입력 계산식 문자열
- **출력**: 정답/오답 + 부분 매칭 힌트
- **데이터**: `src/data/problems/calcFieldProblems.js`

## Answer Data Architecture

### 난독화 시스템
- **핵심 파일**: `src/data/problems/_key.js` (난독화 키)
- **로더**: `src/data/problems/answerLoader.js`
- 정답은 평문으로 저장하지 않음 → 난독화된 형태로 저장
- 런타임에 answerLoader를 통해 복호화

### 새 문제 추가 시
1. 문제 데이터를 해당 파일에 추가
2. 정답을 난독화 시스템으로 처리
3. answerLoader에서 올바르게 로드되는지 확인

## 채점 흐름
```
QuestionRouter.jsx
  ├─ QuizQuestion → quizChecker.js → 결과
  ├─ BlockDragQuestion → blockDragChecker.js → 결과
  └─ CalcFieldQuestion → calcFieldValidator.js → 결과
          ↓
  dispatch({ type: 'RECORD_ANSWER', ... })
          ↓
  XP 부여 + 호감도 변동
```

## 주의사항
- 채점 로직 변경 시 기존 문제의 정답 판정이 바뀔 수 있음
- 정규식 패턴은 다양한 입력 형태를 고려해야 함 (공백, 대소문자 등)
- 정답 데이터를 절대 console.log로 출력하지 않기
