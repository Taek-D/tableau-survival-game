---
name: tableau-quest-architecture
description: 전체 아키텍처 및 프로젝트 구조 가이드. Use when working with project structure, file organization, or understanding the overall system.
---

# Tableau Quest Architecture

## Overview
Tableau 학습용 비주얼 노벨 + 퀴즈 게임. React SPA로 구성되며 Supabase를 백엔드로 사용.

## Core Architecture

### Game Loop (Phase Machine)
```
title → setup → chapter_select → playing → chapter_clear → game_over/game_complete
                                    ↓
                    opening → briefing → problems → boss → clear → event
```

### State Management
- **AuthContext** (`useAuth.jsx`): 인증 상태 (Supabase + 게스트 모드)
- **GameContext** (`useGameState.jsx`): 게임 상태 (useReducer 패턴)
- 상태 변경은 반드시 dispatch를 통해서만 수행

### Data Flow
```
Game Data (static) → GameContext (state) → Components (UI)
     ↓                      ↓
  chapters/              localStorage (즉시)
  problems/              Supabase (2초 디바운스)
  stories/
```

### Dual Save Strategy
| Storage      | Timing           | Purpose              |
|-------------|------------------|----------------------|
| localStorage | 상태 변경 즉시     | 오프라인, 빠른 로드    |
| Supabase     | 2초 디바운스       | 클라우드 백업, 크로스 디바이스 |

## Key Design Decisions
1. **클라이언트 사이드 채점**: 서버 왕복 없이 즉시 피드백
2. **난독화된 정답**: 브라우저에서 평문 정답 노출 방지
3. **Context API**: 게임 규모에 Redux는 과잉 → useReducer로 충분
4. **Phase Machine**: 명시적 상태 전이로 게임 흐름 제어

## File Dependencies
```
App.jsx
  └─ AuthProvider (useAuth.jsx)
      └─ GameProvider (useGameState.jsx)
          ├─ GameStart.jsx (/)
          └─ GamePlay.jsx (/play)
              ├─ ChapterSelect
              ├─ ChapterFlow
              │   ├─ VNScene (novel/)
              │   ├─ QuestionRouter (questions/)
              │   │   ├─ QuizQuestion + quizChecker
              │   │   ├─ BlockDragQuestion + blockDragChecker
              │   │   └─ CalcFieldQuestion + calcFieldValidator
              │   └─ StoryFlow (story/)
              ├─ ChapterClear
              └─ GameOver / GameComplete
```

## Adding New Features
- 새 컴포넌트 → `src/components/{feature}/` 폴더 생성
- 새 데이터 → `src/data/` 아래 적절한 위치
- 새 유틸리티 → `src/utils/`
- 전역 상태 추가 → `useGameState.jsx`의 initialState + reducer에 추가
