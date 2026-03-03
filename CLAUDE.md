# Tableau Quest - Development Guide

## Package Manager
- **항상 `npm` 사용**

## Development Workflow
1. 변경 사항 작성
2. 린트: `npm run lint`
3. 빌드: `npm run build`
4. 로컬 테스트: `npm run dev` → http://localhost:5173

## Project Structure
```
src/
├── components/        # React 컴포넌트 (기능별 폴더)
│   ├── auth/          # 로그인/인증 UI
│   ├── blocks/        # 블록 드래그 차트 빌더
│   ├── calcfield/     # 계산식 에디터 (CodeMirror)
│   ├── chapter/       # 챕터 흐름 (선택, 클리어, 버프)
│   ├── common/        # 공용 UI (게임 시작, 게이지바, CG뷰어)
│   ├── novel/         # 비주얼 노벨 (캐릭터, 대화)
│   ├── questions/     # 문제 라우팅 (퀴즈, 블록, 계산식)
│   └── story/         # 스토리 분기 (선택지, 시나리오)
├── data/              # 게임 데이터 (정적)
│   ├── chapters/      # 20개 챕터 정의
│   ├── problems/      # 61개 문제 (3종류)
│   └── stories/       # 스토리 시나리오
├── hooks/             # React Context + Hooks
│   ├── useAuth.jsx    # Supabase 인증 (게스트 모드 포함)
│   └── useGameState.jsx  # 게임 상태 (useReducer + 듀얼 저장)
├── utils/             # 채점 엔진
│   ├── quizChecker.js       # 객관식 채점
│   ├── blockDragChecker.js  # 블록 드래그 채점
│   ├── calcFieldValidator.js # 계산식 채점 (정규식)
│   └── chartRenderer.js     # Recharts 렌더링
├── lib/supabase.js    # Supabase 클라이언트
└── pages/GamePlay.jsx # 메인 게임 페이지
```

## Tech Stack
- React 19 + Vite 7 + Tailwind CSS 4
- Supabase (Auth + PostgreSQL)
- React Router DOM 7
- CodeMirror (계산식 에디터)
- dnd-kit (드래그앤드롭)
- Recharts (차트 렌더링)

## Coding Conventions
- JavaScript (JSX), TypeScript 미사용
- ES modules (import/export)
- 함수형 컴포넌트 + Hooks만 사용
- Context API로 상태 관리 (Redux/Zustand 사용 안 함)
- UI 텍스트는 한국어, 변수명은 영어
- Tailwind 유틸리티 클래스로 스타일링 (별도 CSS 파일 금지)

## Game Architecture
- **게임 루프**: title → setup → chapter_select → playing → chapter_clear
- **챕터 서브 페이즈**: opening → briefing → problems → boss → clear → event
- **문제 유형 3가지**: quiz (객관식), blockDrag (차트 빌더), calcField (계산식)
- **채점**: 클라이언트 사이드 (src/utils/)
- **저장**: localStorage (즉시) + Supabase (2초 디바운스)

## Important Patterns
- 정답 데이터는 난독화됨 (src/data/problems/_key.js) — 평문 노출 금지
- 게임 상태는 useReducer로 관리 (useGameState.jsx)
- 인증 컨텍스트는 useAuth.jsx (게스트 모드 지원)
- 비주얼 노벨 시스템은 src/components/novel/

## Don'ts
- console.log를 프로덕션 코드에 남기지 않기
- 정답 데이터를 평문으로 하드코딩하지 않기 (난독화 시스템 사용)
- 세이브 데이터 스키마를 호환성 깨뜨리며 변경하지 않기
- CSS 파일 만들지 않기 — Tailwind 유틸리티 클래스 사용
- `any` 타입이나 느슨한 타입 가드 사용하지 않기
