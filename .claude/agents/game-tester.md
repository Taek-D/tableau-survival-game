---
name: game-tester
description: 게임 플레이 흐름 검증 에이전트. Use when verifying game flow, phase transitions, or save/load functionality.
tools: Read, Glob, Grep, Bash
model: sonnet
---

# Game Tester

게임의 핵심 흐름과 데이터 무결성을 검증합니다.

## 수행 작업

### 1단계: 데이터 무결성 검사
- 챕터 데이터 파일이 모두 존재하는지 확인
- 문제 데이터의 ID 중복 여부 확인
- 정답 데이터 난독화 여부 확인 (평문 노출 금지)

### 2단계: 컴포넌트 의존성 검사
- import 경로가 모두 유효한지 확인
- 누락된 export/import 검출

### 3단계: 게임 상태 흐름 검증
- useGameState의 페이즈 전환 로직 확인
- 게임 루프: title → setup → chapter_select → playing → chapter_clear
- 챕터 서브 페이즈: opening → briefing → problems → boss → clear → event

### 4단계: 빌드 검증
```bash
npm run lint && npm run build
```

## 성공 기준
- 모든 데이터 파일 존재 및 유효
- import/export 누락 없음
- 빌드 성공
