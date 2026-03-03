---
name: tableau-quest-components
description: UI 컴포넌트 패턴 및 스타일 가이드. Use when creating or modifying React components, styling, or UI patterns.
---

# Tableau Quest Component Guide

## Component Organization
```
src/components/
├── auth/       # 인증 (LoginPage)
├── blocks/     # 블록 드래그 (차트 빌더)
├── calcfield/  # 계산식 에디터 (CodeMirror)
├── chapter/    # 챕터 흐름 관리
├── common/     # 공용 UI 컴포넌트
├── novel/      # 비주얼 노벨 시스템
├── questions/  # 문제 라우팅 & 렌더링
└── story/      # 스토리 분기 시스템
```

## Styling Conventions

### Tailwind CSS 4 사용
- 별도 CSS 파일 금지 — Tailwind 유틸리티만 사용
- 커스텀 디자인 토큰은 `src/index.css`의 @theme에서 정의
- 자주 쓰이는 색상: `bg-bg-primary`, `text-accent`, `border-white/10`

### 공통 UI 패턴
```jsx
// 글래스모피즘 카드
<div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

// 그라디언트 텍스트
<span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">

// 액센트 버튼
<button className="rounded-xl bg-accent px-4 py-3 font-bold text-white hover:shadow-[0_0_30px_rgba(91,141,240,0.3)]">

// 비활성 버튼
<button disabled className="rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/25 cursor-not-allowed">
```

### 다크 테마
- 배경: `#060d1a` 계열
- 텍스트: `white/90`, `white/40`, `white/25` 등 불투명도 조절
- 보더: `white/10`, `white/[0.06]`
- 글로우: `bg-accent/6 blur-[120px]`

## Component Patterns

### 함수형 컴포넌트
```jsx
export default function ComponentName({ prop1, prop2 }) {
  const { user } = useAuth()
  const state = useGameState()
  const dispatch = useGameDispatch()
  // ...
  return <div>...</div>
}
```

### Context 사용
- `useAuth()` — 인증 상태 접근
- `useGameState()` — 게임 상태 읽기 전용
- `useGameDispatch()` — 게임 상태 변경 (dispatch)

### Visual Novel Components
- `VNScene` — 전체 화면 씬 (배경 + 캐릭터 + 대화)
- `CharacterSprite` — 캐릭터 이미지 렌더링
- `DialogueBox` — 대화 텍스트 + 이름

### Question Components
- `QuestionRouter` — 문제 유형별 라우팅
- `QuizQuestion` — 객관식 (4지선다)
- `BlockDragQuestion` — 드래그앤드롭 (dnd-kit)
- `CalcFieldQuestion` — 코드 에디터 (CodeMirror)

## 새 컴포넌트 작성 시
1. 기능별 폴더 생성 또는 기존 폴더에 추가
2. default export 사용
3. Tailwind 유틸리티로 스타일링
4. 게임 상태 접근은 Context Hooks 사용
5. 한국어 UI 텍스트, 영어 변수명
