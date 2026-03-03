---
name: tableau-quest-game-engine
description: 게임 엔진 및 상태 관리 가이드. Use when working with game state, phases, XP/level system, save/load, or game loop logic.
---

# Tableau Quest Game Engine

## Core File
`src/hooks/useGameState.jsx` — 게임의 핵심 상태 관리

## Phase Machine

### Main Phases
| Phase | 설명 | 전이 조건 |
|-------|------|----------|
| title | 타이틀 화면 | → setup (새 게임) |
| setup | 캐릭터 설정 | → chapter_select (설정 완료) |
| chapter_select | 챕터 선택 | → playing (챕터 선택) |
| playing | 게임 플레이 | → chapter_clear / game_over |
| chapter_clear | 챕터 클리어 | → chapter_select (다음) |
| game_over | 게임 오버 | → chapter_select (재시도) |
| game_complete | 전체 클리어 | 종료 |

### Chapter Sub-Phases
```
opening → briefing → problems → boss → clear → event
```

## State Shape (initialState)
```js
{
  phase, playerName, playerGender,
  currentChapter, maxUnlockedChapter,
  chapterPhase, currentProblemIndex,
  xp, level, affection,
  solvedProblems, correctCount, incorrectCount,
  currentTitle, unlockedTitles,
  chapterStars, hints,
  chapterCorrect, chapterTotal,
  cgSeen, storyIndex, bossIntroShown,
  // ... 기타
}
```

## XP & Level System
- XP 테이블: [0, 80, 200, 400, 700, 1100, 1600, 2200, 3000, 4000]
- 10 레벨 시스템 (수습 분석가 → 태블로 마스터)
- `getLevelFromXP(xp)` / `getXPForLevel(level)` 헬퍼 함수

## Affection System
- 범위: 0~100
- 단계: 5단계 (21/41/61/81 기준)
- 정답/오답, 이벤트 선택에 따라 변동

## Save/Load
- **저장 키**: `tableau-quest-save`
- **localStorage**: 상태 변경 즉시 저장
- **Supabase**: 2초 디바운스 → `game_saves` 테이블
- **충돌 해결**: updatedAt 타임스탬프 비교 → 최신 데이터 우선

## Dispatch Actions (주요)
- `SET_PHASE` — 메인 페이즈 전환
- `SET_CHAPTER_PHASE` — 서브 페이즈 전환
- `ADD_XP` — XP 추가 (자동 레벨업 포함)
- `RECORD_ANSWER` — 문제 답안 기록
- `SET_AFFECTION` — 호감도 변경
- `RESET_GAME` — 새 게임
- `LOAD_SAVE` — 세이브 로드

## 주의사항
- 상태 변경은 반드시 dispatch로만 수행
- initialState 스키마 변경 시 기존 세이브 호환성 유지 필요
- XP 테이블 변경 시 기존 유저의 레벨이 변동될 수 있음
