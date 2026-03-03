# 프로젝트 전환: Tableau Quest → IT 직무 체험 게임

## Context

Tableau Quest는 태블로 학습용 비주얼 노벨 + 퀴즈 게임이다. 게임 엔진(페이즈 머신, VN 시스템, 퀴즈, 드래그앤드롭, XP/레벨, 세이브 등)은 잘 만들어져 있으므로 그대로 유지하고, **주제를 PM/디자이너/개발자 직무 간접 체험으로 전환**한다.

대상: 취준생/대학생 | 시작 시 직군 선택 | 직군별 완전 별개 스토리라인 | 직군별 다른 인터랙티브 문제 유형

## 게임 이름 후보 (결정 필요)

| 후보 | 느낌 |
|------|------|
| **CAREER QUEST** | 직관적, 영어권에서도 통함 |
| **ROOKIE QUEST** | 신입/취준생 타겟 강조 |
| **IT QUEST** | 업계 직접 명시 |
| **JOB QUEST** | 가볍고 캐주얼 |

---

## Phase 1: 엔진 수정 (구조적 변경)

### 1-1. `src/hooks/useGameState.jsx` — 게임 상태에 역할 추가

- `initialState`에 `playerRole: null` 추가 (`'pm'` | `'designer'` | `'developer'`)
- `playerGender` 제거 (성별 분기 대신 직군 분기)
- `LEVEL_TITLES` → 직군별 함수로 변경:
  - PM: 수습 PM → PM 루키 → 기획 전사 → ... → CPO
  - 디자이너: 수습 디자이너 → UI 루키 → ... → CDO
  - 개발자: 수습 개발자 → 코딩 루키 → ... → CTO
- `getAffectionLabel()` 변경: `[동기, 친한 동기, 신뢰, 썸, 고백]` → `[관심, 신뢰, 존경, 멘토, 파트너]`
- `STORAGE_KEY` 변경: `'tableau-quest-save'` → 새 이름
- `START_NEW_GAME` 액션: `{ name, gender }` → `{ name, role }`
- 챕터 최대값 20 하드코딩 → `getMaxChapter(role)` 동적 함수

### 1-2. `src/components/common/CharacterSetup.jsx` — 직군 선택 화면

- 성별 선택 → 3개 직군 카드로 교체:
  - PM (파란색 #5b8df0): "제품을 기획하고 팀을 이끌어요"
  - 디자이너 (보라색 #b07aa1): "사용자 경험을 디자인해요"
  - 개발자 (초록색 #59a14f): "서비스를 코드로 만들어요"
- 각 카드에 멘토 캐릭터 프리뷰 표시
- 정보 박스: 멘토, 조직, 직무 → 직군별 동적 표시
- dispatch: `{ name, role }` 전송

### 1-3. `src/pages/GamePlay.jsx` — 헤더/페이즈 업데이트

- `getPartnerCharacter(gender)` → `getMentorCharacter(role)`
- 호감도 → 신뢰도(멘토십) 라벨 변경
- `getChapter(chapterId)` → `getChapter(chapterId, role)`

### 1-4. `src/components/chapter/ChapterFlow.jsx` — 성별 분기 제거

- `genderKey` 기반 분기 전부 제거 (`partnerGreeting[genderKey]`, `bossIntro.partnerLine[genderKey]` 등)
- 직군별 챕터 데이터는 단일 대화 트랙 (남/여 분기 없음)
- `getPartnerCharacter` → `getMentorCharacter` 교체

### 1-5. `src/components/chapter/ChapterSelect.jsx` — 직군별 챕터 목록

- `CHAPTER_META` / `PART_META` → `getChapterMeta(role)` / `getPartMeta(role)` 동적 로드

---

## Phase 2: 데이터 구조 & 콘텐츠 프레임워크

### 2-1. 새 폴더 구조

```
src/data/
├── roleRegistry.js          ← 중앙 라우터 (모든 컴포넌트는 이걸 통해 데이터 접근)
├── roles/
│   ├── pm/
│   │   ├── chapters/        (chapter1.js, chapter2.js, ..., index.js)
│   │   ├── problems/        (quizProblems.js, roadmapProblems.js, textInputProblems.js, _key.js, answerLoader.js)
│   │   ├── characters.js    (멘토 + 동료 캐릭터)
│   │   └── titles.js        (칭호/업적)
│   ├── designer/
│   │   ├── chapters/
│   │   ├── problems/        (quizProblems.js, uiLayoutProblems.js, textInputProblems.js, ...)
│   │   ├── characters.js
│   │   └── titles.js
│   └── developer/
│       ├── chapters/
│       ├── problems/        (quizProblems.js, architectureProblems.js, textInputProblems.js, ...)
│       ├── characters.js
│       └── titles.js
└── (기존 data/ 파일들은 삭제)
```

### 2-2. `src/data/roleRegistry.js` — 중앙 데이터 라우터 (신규)

```js
// 모든 컴포넌트가 데이터에 접근하는 단일 진입점
export function getChapter(chapterId, role) { ... }
export function getChapterMeta(role) { ... }
export function getMaxChapter(role) { ... }
export function getMentorCharacter(role) { ... }
export function getRoleCharacters(role) { ... }
export function getProblemById(problemId, role) { ... }
export function getLevelTitlesForRole(role) { ... }
```

### 2-3. 문제 ID 규칙 (충돌 방지)

| 직군 | 퀴즈 | 인터랙티브 | 텍스트 |
|------|------|-----------|--------|
| PM | `pm_quiz_01` | `pm_roadmap_01` | `pm_text_01` |
| 디자이너 | `des_quiz_01` | `des_layout_01` | `des_text_01` |
| 개발자 | `dev_quiz_01` | `dev_arch_01` | `dev_text_01` |

### 2-4. 챕터 데이터 스키마 (기존과 동일 구조, 성별 분기 제거)

기존 구조를 유지하되 `partnerGreeting[genderKey]` → `colleagueGreeting` 단일 트랙으로 단순화.

### 2-5. 정답 시스템

각 직군별 `_key.js` + `answerLoader.js` 분리. roleRegistry가 올바른 로더로 라우팅.

---

## Phase 3: 직군별 인터랙티브 컴포넌트

### 3-1. `src/components/questions/QuestionRouter.jsx` — 직군 인지형 라우터

기존 3타입 → 5+ 타입으로 확장:
- `quiz` → QuizQuestion (공용, 기존 유지)
- `text_input` → TextInputQuestion (공용, CalcField 기반 개조)
- `roadmap` → RoadmapQuestion (PM 전용, 신규)
- `ui_layout` → UILayoutQuestion (디자이너 전용, 신규)
- `architecture` → ArchitectureQuestion (개발자 전용, 신규)

### 3-2. PM: `src/components/questions/pm/RoadmapQuestion.jsx` (신규)

**우선순위 매트릭스 드래그앤드롭**
- 기능/태스크 카드를 2x2 그리드(Impact×Effort)에 배치
- 기존 `@dnd-kit` 인프라 재활용
- 문제 데이터: items[] + zones[] + 정답 배치

### 3-3. 디자이너: `src/components/questions/designer/UILayoutQuestion.jsx` (신규)

**UI 컴포넌트 배치**
- 모바일/웹 와이어프레임 영역에 UI 컴포넌트를 드래그
- 폰 모양 프레임 안에 슬롯, 컴포넌트 팔레트에서 드래그
- 기존 BlockDrag와 구조적으로 유사

### 3-4. 개발자: `src/components/questions/developer/ArchitectureQuestion.jsx` (신규)

**아키텍처 다이어그램 배치**
- 서비스/레이어 노드를 올바른 위치에 배치
- MVP: 슬롯 기반 드래그 (BlockDrag 유사)

### 3-5. 공용: `src/components/questions/TextInputQuestion.jsx` (신규)

CalcFieldEditor 기반, 직군별 텍스트 입력:
- PM: 유저 스토리 작성, 인수 조건 등
- 디자이너: 디자인 스펙, 접근성 설명 등
- 개발자: 수도코드, SQL 쿼리 등

### 3-6. 기존 DnD 인프라 추출

`src/components/blocks/` → `src/components/dnd/` 로 이동 (공용화):
- `DraggableBlock.jsx` → `DraggableItem.jsx`
- `DroppableSlot.jsx` → `DroppableZone.jsx`

### 3-7. 삭제 대상 파일

| 파일 | 이유 |
|------|------|
| `src/data/tableauFunctions.js` | 태블로 함수 레퍼런스 |
| `src/utils/chartRenderer.js` | 태블로 차트 렌더링 |
| `src/components/calcfield/FunctionReference.jsx` | 태블로 함수 참조 UI |
| `src/components/blocks/ChartPreview.jsx` | 태블로 차트 프리뷰 |
| `src/data/chapters/*` | 태블로 챕터 데이터 전부 |
| `src/data/problems/*` | 태블로 문제 데이터 전부 |
| `src/data/stories/*` | 태블로 스토리 데이터 전부 |
| `src/data/characters.js` | 태블로 캐릭터 데이터 |
| `src/data/titles.js` | 태블로 칭호 데이터 |

---

## Phase 4: 콘텐츠 (PM 먼저, MVP)

### 전략: PM 1개 직군을 먼저 완성하고, 이후 디자이너/개발자 추가

### PM 챕터 구성 (초안, 8챕터)

| Part | Ch | 제목 | 핵심 주제 |
|------|----|------|----------|
| 1 | 1 | PM의 첫 출근 | 요구사항 수집 기초 |
| 1 | 2 | 유저 스토리 | 사용자 관점 기획 |
| 1 | 3 | PRD 작성 | 제품 요구사항 문서 |
| 2 | 4 | 우선순위 결정 | RICE/Impact-Effort |
| 2 | 5 | 로드맵 설계 | 분기별 로드맵 |
| 2 | 6 | 스프린트 기획 | 애자일/스크럼 |
| 3 | 7 | 이해관계자 관리 | 커뮤니케이션 |
| 3 | 8 | 제품 런칭 | 종합 프로젝트 |

### 콘텐츠 생성 순서
1. 챕터 1 완전체 (실제 대사, 실제 문제, 실제 정답)
2. 챕터 2-8 스켈레톤 (구조만, 플레이스홀더 텍스트)
3. 캐릭터 이미지: 플레이스홀더 (단색 + 이모지) → 나중에 일러스트 교체

---

## Phase 5: 브랜딩 & 마무리

### 변경 대상 텍스트

| 현재 | 변경 |
|------|------|
| TABLEAU QUEST | 새 게임 이름 |
| Growlab Interactive | 새 스튜디오명 (또는 제거) |
| 태블로 | 제거 |
| 데이터 분석가 | PM / 디자이너 / 개발자 |
| 박서연 팀장 | 직군별 멘토 |
| 호감도 | 신뢰도 |
| 파트너 | 멘토/동료 |

### 파일별 변경
- `src/components/auth/LoginPage.jsx` — 타이틀, 서브타이틀
- `src/components/common/GameStart.jsx` — 타이틀, 설명
- `src/components/common/GameOver.jsx` — 해고 → 직군 맥락
- `src/components/common/GameComplete.jsx` — 엔딩 등급 텍스트
- `src/components/chapter/BuffSelect.jsx` — 루트 이름/설명
- `index.html` — `<title>` 태그
- `package.json` — name 필드
- `src/index.css` — 직군별 액센트 색상 CSS 변수 추가

### CSS 테마 확장
```css
[data-role="pm"]        { --color-accent: #5b8df0; }
[data-role="designer"]  { --color-accent: #b07aa1; }
[data-role="developer"] { --color-accent: #59a14f; }
```

---

## 구현 순서 (권장)

| 단계 | 작업 | 핵심 파일 |
|------|------|----------|
| **1** | useGameState에 playerRole 추가 + 레벨/호감 라벨 변경 | `useGameState.jsx` |
| **2** | roleRegistry.js + 폴더 구조 생성 | `src/data/roleRegistry.js`, `src/data/roles/` |
| **3** | CharacterSetup 직군 선택으로 교체 | `CharacterSetup.jsx` |
| **4** | ChapterFlow/ChapterSelect에서 성별 분기 → 직군 분기 | `ChapterFlow.jsx`, `ChapterSelect.jsx` |
| **5** | PM 챕터 1 + 퀴즈 문제 데이터 작성 | `roles/pm/chapters/`, `roles/pm/problems/` |
| **6** | QuestionRouter 확장 + TextInputQuestion 신규 | `QuestionRouter.jsx` |
| **7** | RoadmapQuestion(PM 인터랙티브) 신규 | `questions/pm/RoadmapQuestion.jsx` |
| **8** | 브랜딩 변경 (타이틀, UI 텍스트) | LoginPage, GameStart, GameOver, GameComplete |
| **9** | 태블로 코드/데이터 정리(삭제) | blocks/, calcfield/, data/ 정리 |
| **10** | E2E 플레이테스트 + 버그 수정 | 전체 |

---

## Verification (테스트 방법)

1. `npm run dev` → 로그인 → 직군 선택 화면 확인
2. PM 선택 → 챕터 1 오프닝 VN 씬 재생 확인
3. 퀴즈 문제 풀이 → 채점 → XP 부여 확인
4. 로드맵 인터랙티브 문제 → 드래그앤드롭 동작 확인
5. 챕터 클리어 → 다음 챕터 해금 확인
6. 세이브/로드: 새로고침 후 이어하기 동작 확인
7. 게스트 모드: 로그인 없이 위 과정 전부 동작 확인
8. `npm run build` → 빌드 에러 없음 확인
9. `npm run lint` → 린트 에러 없음 확인
