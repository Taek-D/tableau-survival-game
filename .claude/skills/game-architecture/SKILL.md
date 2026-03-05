---
name: game-architecture
description: 게임 엔진 아키텍처 가이드. Use when modifying game phases, state management, VN system, chapter flow, or save/load. Triggers on gameState, useReducer, phase, chapter, novel, save, load.
allowed-tools: Read, Grep, Glob
---

# Game Architecture

## 게임 루프 (Phase Machine)

```
title → setup → chapter_select → playing → chapter_clear
                                    │
                    opening → briefing → problems → boss → clear → event
```

### 핵심 파일
- `src/hooks/useGameState.jsx` — useReducer 기반 상태 머신
- `src/pages/GamePlay.jsx` — 메인 게임 페이지, 페이즈 라우팅
- `src/components/chapter/ChapterFlow.jsx` — 챕터 내 서브 페이즈 흐름

### 상태 관리 패턴
- **상태**: `useReducer` + Context API (Redux/Zustand 금지)
- **저장**: localStorage (즉시) + Supabase (2초 디바운스)
- **인증**: `useAuth.jsx` (Supabase Auth + 게스트 모드)

### 페이즈 전환 규칙
- `dispatch({ type: 'SET_PHASE', payload: nextPhase })` 로만 전환
- 페이즈는 문자열 enum: `'title'`, `'setup'`, `'chapter_select'`, `'playing'`, `'chapter_clear'`
- 서브 페이즈도 동일 패턴

### 비주얼 노벨 시스템
- `src/components/novel/` — 캐릭터 표시, 대화 진행
- 대화 데이터는 챕터별 `.js` 파일에 정의
- 선택지 분기는 `src/components/story/`

### 세이브 데이터 스키마
- `STORAGE_KEY`로 localStorage 저장
- 유저별 스코프: `{key}-{userId}`
- 스키마 변경 시 호환성 유지 필수 (마이그레이션 로직 추가)

## Don'ts
- 페이즈 전환을 dispatch 외 방법으로 하지 않기
- 세이브 스키마 호환성 깨뜨리지 않기
- Context 밖에서 게임 상태 직접 수정하지 않기
