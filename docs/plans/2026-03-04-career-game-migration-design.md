# JOB QUEST: 직무 체험 - 전환 설계서

**날짜**: 2026-03-04
**상태**: 승인됨
**접근법**: Incremental Migration (점진적 전환)

---

## 요약

Tableau Quest의 게임 엔진(페이즈 머신, VN 시스템, 퀴즈, DnD, XP/레벨, 세이브)을 유지하면서, 주제를 PM/디자이너/개발자 직무 간접 체험으로 전환한다. MVP는 PM 직군만 8챕터.

## 핵심 결정 사항

| 항목 | 결정 |
|------|------|
| 게임 이름 | JOB QUEST: 직무 체험 |
| MVP 범위 | PM 직군 8챕터 |
| 캐릭터 시스템 | 성별 선택 유지 + 직군 선택 추가 |
| 스토리 분기 | 직군별만 (성별은 외형만) |
| 문제 유형 | quiz + roadmap(DnD) + text_input |
| 기존 데이터 | 즉시 삭제 후 새 구조 |
| 접근법 | Incremental Migration |

---

## 1. 데이터 아키텍처

### 새 폴더 구조

```
src/data/
├── roleRegistry.js              ← 모든 컴포넌트의 데이터 접근 단일 진입점
├── roles/
│   └── pm/
│       ├── chapters/
│       │   ├── chapter1.js      ← PM 챕터 1 (완전체)
│       │   ├── chapter2.js~chapter8.js  ← 스켈레톤
│       │   └── index.js         ← 내보내기 + CHAPTER_META/PART_META
│       ├── problems/
│       │   ├── quizProblems.js
│       │   ├── roadmapProblems.js   ← 신규 (우선순위 매트릭스 DnD)
│       │   ├── textInputProblems.js ← 신규 (유저스토리 작성 등)
│       │   ├── _key.js             ← 난독화 정답
│       │   └── answerLoader.js     ← 정답 로더
│       ├── characters.js        ← 멘토 + 동료 캐릭터
│       └── titles.js            ← PM 직군 칭호
└── (기존 chapters/, problems/, stories/, characters.js, titles.js → 삭제)
```

### roleRegistry.js API

```js
export function getChapter(chapterId, role) { ... }
export function getChapterMeta(role) { ... }
export function getMaxChapter(role) { ... }
export function getMentorCharacter(role) { ... }
export function getColleagueCharacter(role, gender) { ... }
export function getRoleCharacters(role) { ... }
export function getProblemById(problemId, role) { ... }
export function getLevelTitles(role) { ... }
export function getRoleInfo(role) { ... }
```

### 문제 ID 규칙

| 직군 | 퀴즈 | 로드맵(DnD) | 텍스트 |
|------|------|------------|--------|
| PM | `pm_quiz_01` | `pm_roadmap_01` | `pm_text_01` |
| 디자이너 | `des_quiz_01` | `des_layout_01` | `des_text_01` |
| 개발자 | `dev_quiz_01` | `dev_arch_01` | `dev_text_01` |

---

## 2. 게임 상태 변경

### useGameState.jsx

**추가 필드:**
```js
playerRole: null  // 'pm' | 'designer' | 'developer'
```

**변경:**
- `LEVEL_TITLES` → `getLevelTitles(role)` (PM: 수습 PM → PM 루키 → ... → CPO)
- `getAffectionLabel()` → `getTrustLabel()` (호감도→신뢰도: 관심→신뢰→존경→멘토→파트너)
- `STORAGE_KEY` → `'job-quest-save'`
- `START_NEW_GAME`: `{ name, gender, role }`
- 챕터 최대값: `getMaxChapter(role)` 동적 (PM=8)

**유지:**
- `playerGender` (외형용)
- 페이즈 머신, XP/레벨, 세이브/로드, 힌트 토큰 전부

### CharacterSetup.jsx

이름 입력 → 성별 선택 → 직군 선택 카드 3장
- PM: 선택 가능 (#5b8df0)
- 디자이너/개발자: "준비 중" 표시

---

## 3. 컴포넌트 변경

### ChapterFlow.jsx
- `getPartnerCharacter(gender)` → `getColleagueCharacter(role, gender)`
- 성별 분기 대사(`partnerGreeting[genderKey]`) → 단일 트랙(`colleagueGreeting`)
- 직군 분기는 `roleRegistry` 데이터 레벨에서 처리

### ChapterSelect.jsx
- `CHAPTER_META`/`PART_META` → `getChapterMeta(role)`/`getPartMeta(role)` 동적 로드

### QuestionRouter.jsx 확장
- 기존: `quiz`, `block_drag`, `calc_field`
- 추가: `roadmap`, `text_input`

### 새 컴포넌트: RoadmapQuestion (PM 전용)
- 2x2 우선순위 매트릭스 (Impact×Effort)
- 기능 카드를 올바른 사분면에 드래그
- `@dnd-kit` 재활용

### 새 컴포넌트: TextInputQuestion (공용)
- CodeMirror 기반 텍스트 입력 (CalcFieldEditor 재활용)
- 키워드 매칭 + 정규식 채점

### 삭제 대상
- `src/data/tableauFunctions.js`
- `src/utils/chartRenderer.js`
- `src/components/calcfield/FunctionReference.jsx`
- `src/components/blocks/ChartPreview.jsx`
- `src/data/chapters/*`, `src/data/problems/*`, `src/data/stories/*`
- `src/data/characters.js`, `src/data/titles.js`

---

## 4. 브랜딩

| 현재 | 변경 |
|------|------|
| TABLEAU QUEST | JOB QUEST: 직무 체험 |
| Growlab Interactive | (제거) |
| 태블로 / 데이터 분석가 | PM / 디자이너 / 개발자 |
| 호감도 | 신뢰도 |
| 파트너 | 멘토/동료 |

### CSS 테마
```css
[data-role="pm"]        { --color-accent: #5b8df0; }
[data-role="designer"]  { --color-accent: #b07aa1; }
[data-role="developer"] { --color-accent: #59a14f; }
```

---

## 5. PM 챕터 구성 (실무 워크플로우 기반)

| Part | Ch | 제목 | 실무 워크플로우 | 배우는 것 |
|------|----|------|---------------|----------|
| 1: 온보딩 | 1 | 첫 출근, 제품 파악 | 제품 분석, 지표 이해, 이해관계자 파악 | DAU/MAU, 퍼널, 조직 구조 |
| 1: 온보딩 | 2 | 유저 리서치 | 유저 인터뷰, 페르소나, 여정 맵 | 유저 리서치 방법론, 페르소나 작성 |
| 2: 기획 | 3 | 문제 정의 | 가설 수립, 기회 크기 산정, 문제 프레이밍 | Problem Statement, Opportunity Sizing |
| 2: 기획 | 4 | 우선순위 결정 | RICE 스코어링, Impact-Effort 매트릭스 | 우선순위 프레임워크 |
| 2: 기획 | 5 | PRD 작성 | 유저스토리, 인수 조건, 와이어프레임 | PRD 구조, AC 작성법 |
| 3: 실행 | 6 | 스프린트 운영 | 백로그 관리, 스프린트 플래닝, 스탠드업 | 애자일/스크럼 실무 |
| 3: 실행 | 7 | 디자인·개발 협업 | 디자인 리뷰, QA, 커뮤니케이션 | 크로스펑셔널 협업 |
| 3: 실행 | 8 | 런칭과 회고 | 런칭 체크리스트, 지표 추적, 회고 | Go-to-Market, 데이터 기반 의사결정 |

### 콘텐츠 전략
- 챕터 1: 완전체 (실제 대사, 실제 문제, 실제 정답)
- 챕터 2-8: 스켈레톤 (구조만, 플레이스홀더 텍스트)
- 캐릭터 이미지: 플레이스홀더 → 나중에 일러스트 교체

---

## 6. 구현 순서 (권장)

| 단계 | 작업 | 핵심 파일 |
|------|------|----------|
| 1 | 기존 태블로 데이터 삭제 + 새 폴더 구조 생성 | `src/data/` |
| 2 | roleRegistry.js 생성 | `src/data/roleRegistry.js` |
| 3 | useGameState에 playerRole 추가 + 라벨 변경 | `useGameState.jsx` |
| 4 | CharacterSetup 직군 선택 추가 | `CharacterSetup.jsx` |
| 5 | PM 캐릭터 + 칭호 데이터 작성 | `roles/pm/characters.js`, `titles.js` |
| 6 | PM 챕터 1 완전체 작성 | `roles/pm/chapters/chapter1.js` |
| 7 | PM 퀴즈 문제 + 난독화 정답 | `roles/pm/problems/` |
| 8 | ChapterFlow/ChapterSelect 직군 분기 적용 | `ChapterFlow.jsx`, `ChapterSelect.jsx` |
| 9 | QuestionRouter 확장 + TextInputQuestion 신규 | `QuestionRouter.jsx` |
| 10 | RoadmapQuestion 신규 (DnD) | `questions/pm/RoadmapQuestion.jsx` |
| 11 | 브랜딩 변경 (타이틀, UI 텍스트) | LoginPage, GameStart 등 |
| 12 | 태블로 전용 코드 정리(삭제) | blocks/ChartPreview, calcfield/FunctionReference 등 |
| 13 | E2E 플레이테스트 + 버그 수정 | 전체 |

---

## 7. 검증 방법

1. `npm run dev` → 로그인 → 성별+직군 선택 화면 확인
2. PM 선택 → 챕터 1 오프닝 VN 씬 재생 확인
3. 퀴즈 문제 풀이 → 채점 → XP 부여 확인
4. 로드맵 인터랙티브 문제 → DnD 동작 확인
5. 텍스트 입력 문제 → 채점 동작 확인
6. 챕터 클리어 → 다음 챕터 해금 확인
7. 세이브/로드: 새로고침 후 이어하기 동작 확인
8. 게스트 모드: 로그인 없이 전 과정 동작 확인
9. `npm run build` → 빌드 에러 없음
10. `npm run lint` → 린트 에러 없음
