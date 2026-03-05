# JOB QUEST: 직무 체험 - 구현 계획

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Tableau Quest 게임 엔진을 유지하면서 주제를 PM 직무 간접 체험으로 전환한다 (MVP: PM 8챕터).

**Architecture:** 기존 페이즈 머신/VN/세이브 엔진은 그대로 유지. `roleRegistry.js`를 데이터 접근 단일 진입점으로 추가하여 직군별 데이터 라우팅. 기존 태블로 데이터는 삭제하고 `roles/pm/` 하위에 새 데이터 구조 생성. 새 문제 유형 2개(roadmap DnD, text_input) 추가.

**Tech Stack:** React 19, Vite 7, Tailwind CSS 4, @dnd-kit, CodeMirror, Supabase, Recharts

**설계 문서:** `docs/plans/2026-03-04-career-game-migration-design.md`

---

## Task 1: 기존 태블로 데이터 삭제 + 새 폴더 구조 생성

**Files:**
- Delete: `src/data/chapters/` (전체)
- Delete: `src/data/problems/` (전체)
- Delete: `src/data/stories/` (전체)
- Delete: `src/data/characters.js`
- Delete: `src/data/titles.js`
- Delete: `src/data/tableauFunctions.js`
- Delete: `src/utils/chartRenderer.js`
- Delete: `src/components/calcfield/FunctionReference.jsx`
- Delete: `src/components/blocks/ChartPreview.jsx`
- Create: `src/data/roles/pm/chapters/` (빈 폴더)
- Create: `src/data/roles/pm/problems/` (빈 폴더)

**Step 1: 기존 태블로 데이터 파일 삭제**

```bash
rm -rf src/data/chapters src/data/problems src/data/stories
rm src/data/characters.js src/data/titles.js src/data/tableauFunctions.js
rm src/utils/chartRenderer.js
rm src/components/calcfield/FunctionReference.jsx
rm src/components/blocks/ChartPreview.jsx
```

**Step 2: 새 폴더 구조 생성**

```bash
mkdir -p src/data/roles/pm/chapters
mkdir -p src/data/roles/pm/problems
```

**Step 3: 삭제된 파일 import 참조 확인**

```bash
grep -r "from.*data/chapters" src/ --include="*.jsx" --include="*.js"
grep -r "from.*data/problems" src/ --include="*.jsx" --include="*.js"
grep -r "from.*data/stories" src/ --include="*.jsx" --include="*.js"
grep -r "from.*data/characters" src/ --include="*.jsx" --include="*.js"
grep -r "from.*data/titles" src/ --include="*.jsx" --include="*.js"
grep -r "from.*data/tableauFunctions" src/ --include="*.jsx" --include="*.js"
grep -r "from.*utils/chartRenderer" src/ --include="*.jsx" --include="*.js"
grep -r "FunctionReference" src/ --include="*.jsx" --include="*.js"
grep -r "ChartPreview" src/ --include="*.jsx" --include="*.js"
```

→ 모든 import 참조를 목록화. 아직 고치지 않음 (Task 2에서 roleRegistry로 교체).

**Step 4: 커밋**

```bash
git add -A
git commit -m "chore: 태블로 데이터/컴포넌트 삭제 + PM 폴더 구조 생성"
```

---

## Task 2: roleRegistry.js 생성

**Files:**
- Create: `src/data/roleRegistry.js`

**Step 1: roleRegistry.js 작성**

```js
// src/data/roleRegistry.js
// 모든 컴포넌트가 데이터에 접근하는 단일 진입점

const roleModules = {
  pm: () => import('./roles/pm/chapters/index.js'),
};

const roleProblems = {
  pm: () => import('./roles/pm/problems/index.js'),
};

const roleCharacters = {
  pm: () => import('./roles/pm/characters.js'),
};

const roleTitles = {
  pm: () => import('./roles/pm/titles.js'),
};

// 캐시
let _cache = {};

function getModule(role, type) {
  const key = `${role}_${type}`;
  if (!_cache[key]) {
    // 동기 import용 (빌드 타임에 번들링)
    switch (role) {
      case 'pm':
        switch (type) {
          case 'chapters': return require('./roles/pm/chapters/index.js');
          case 'problems': return require('./roles/pm/problems/index.js');
          case 'characters': return require('./roles/pm/characters.js');
          case 'titles': return require('./roles/pm/titles.js');
        }
    }
  }
  return _cache[key];
}

// 실제로는 정적 import 사용 (Vite 호환)
import * as pmChapters from './roles/pm/chapters/index.js';
import * as pmProblems from './roles/pm/problems/index.js';
import * as pmCharacters from './roles/pm/characters.js';
import * as pmTitles from './roles/pm/titles.js';

const registry = {
  pm: {
    chapters: pmChapters,
    problems: pmProblems,
    characters: pmCharacters,
    titles: pmTitles,
  },
};

export function getChapter(chapterId, role) {
  const mod = registry[role]?.chapters;
  return mod?.chapters?.find(ch => ch.id === chapterId) || null;
}

export function getChapterMeta(role) {
  return registry[role]?.chapters?.CHAPTER_META || [];
}

export function getPartMeta(role) {
  return registry[role]?.chapters?.PART_META || [];
}

export function getMaxChapter(role) {
  return registry[role]?.chapters?.chapters?.length || 0;
}

export function getMentorCharacter(role) {
  return registry[role]?.characters?.mentorCharacter || null;
}

export function getColleagueCharacter(role, gender) {
  const chars = registry[role]?.characters;
  return gender === 'male' ? chars?.colleagueFemale : chars?.colleagueMale;
}

export function getRoleCharacters(role) {
  return registry[role]?.characters || {};
}

export function getProblemById(problemId, role) {
  const mod = registry[role]?.problems;
  return mod?.getAllProblems?.().find(p => p.id === problemId) || null;
}

export function getLevelTitles(role) {
  return registry[role]?.titles?.LEVEL_TITLES || [];
}

export function getRoleInfo(role) {
  const info = {
    pm: { name: 'PM', color: '#5b8df0', label: '프로덕트 매니저', description: '제품을 기획하고 팀을 이끌어요' },
    designer: { name: '디자이너', color: '#b07aa1', label: 'UX 디자이너', description: '사용자 경험을 디자인해요' },
    developer: { name: '개발자', color: '#59a14f', label: '소프트웨어 엔지니어', description: '서비스를 코드로 만들어요' },
  };
  return info[role] || null;
}

export function getAvailableRoles() {
  return [
    { id: 'pm', available: true },
    { id: 'designer', available: false },
    { id: 'developer', available: false },
  ];
}
```

> **Note:** 위는 구조 스케치. 실제 구현 시 `import()` 대신 정적 import 사용하고, require 제거. Task 5~7에서 실제 데이터 파일이 만들어지면 import 경로 확정.

**Step 2: 커밋**

```bash
git add src/data/roleRegistry.js
git commit -m "feat: roleRegistry.js 데이터 라우터 생성"
```

---

## Task 3: useGameState.jsx에 playerRole 추가 + 라벨 변경

**Files:**
- Modify: `src/hooks/useGameState.jsx`

**Step 1: initialState에 playerRole 추가**

`initialState` 객체에 `playerRole: null` 추가.

**Step 2: LEVEL_TITLES를 동적 함수로 변경**

기존 하드코딩된 `LEVEL_TITLES` 배열을 `getLevelTitles(role)` 호출로 교체.
`import { getLevelTitles, getMaxChapter } from '../data/roleRegistry'` 추가.

**Step 3: 호감도 → 신뢰도 라벨 변경**

`getAffectionLabel()` → `getTrustLabel()` 이름 변경.
라벨: `['관심', '신뢰', '존경', '멘토', '파트너']`

**Step 4: STORAGE_KEY 변경**

`'tableau-quest-save'` → `'job-quest-save'`

**Step 5: START_NEW_GAME 액션 수정**

payload에 `role` 추가: `{ name, gender, role }`
reducer에서 `playerRole: action.payload.role` 설정.

**Step 6: 챕터 최대값 동적화**

하드코딩된 20 → `getMaxChapter(state.playerRole)` 사용.

**Step 7: 린트 + 빌드 확인**

```bash
npm run lint
npm run build
```

→ 아직 빌드 에러 예상 (다른 파일에서 삭제된 import 참조). Task 4 이후 해결.

**Step 8: 커밋**

```bash
git add src/hooks/useGameState.jsx
git commit -m "feat: useGameState에 playerRole 추가 + 신뢰도 라벨 + 저장키 변경"
```

---

## Task 4: CharacterSetup.jsx에 직군 선택 추가

**Files:**
- Modify: `src/components/common/CharacterSetup.jsx`

**Step 1: 직군 선택 상태 추가**

`const [selectedRole, setSelectedRole] = useState(null)` 추가.

**Step 2: 직군 선택 카드 UI 추가**

성별 선택 아래에 3개 카드 렌더링:
- PM (#5b8df0): "제품을 기획하고 팀을 이끌어요" — 선택 가능
- 디자이너 (#b07aa1): "사용자 경험을 디자인해요" — 준비 중 (disabled)
- 개발자 (#59a14f): "서비스를 코드로 만들어요" — 준비 중 (disabled)

`getRoleInfo()`, `getAvailableRoles()` from roleRegistry 사용.

**Step 3: dispatch 수정**

`dispatch({ type: 'START_NEW_GAME', payload: { name, gender, role: selectedRole } })`

**Step 4: 정보 박스 동적화**

직군 선택 시 멘토/조직/직무 정보를 직군별로 표시.

**Step 5: 린트 + 빌드**

```bash
npm run lint
npm run build
```

**Step 6: 커밋**

```bash
git add src/components/common/CharacterSetup.jsx
git commit -m "feat: CharacterSetup에 직군 선택 카드 UI 추가"
```

---

## Task 5: PM 캐릭터 + 칭호 데이터 작성

**Files:**
- Create: `src/data/roles/pm/characters.js`
- Create: `src/data/roles/pm/titles.js`

**Step 1: PM 캐릭터 데이터 작성**

```js
// src/data/roles/pm/characters.js

export const mentorCharacter = {
  id: 'mentor_pm',
  name: '김도현',
  role: '시니어 PM',
  color: '#5b8df0',
  expressions: {
    default: '/images/characters/mentor_pm_default.png',
    smile: '/images/characters/mentor_pm_smile.png',
    serious: '/images/characters/mentor_pm_serious.png',
    impressed: '/images/characters/mentor_pm_impressed.png',
    frown: '/images/characters/mentor_pm_frown.png',
    surprise: '/images/characters/mentor_pm_surprise.png',
  },
};

export const colleagueFemale = {
  id: 'colleague_f',
  name: '이서아',
  role: '동기 (디자이너)',
  color: '#b07aa1',
  expressions: {
    default: '/images/characters/colleague_f_default.png',
    cheer: '/images/characters/colleague_f_cheer.png',
    shy: '/images/characters/colleague_f_shy.png',
    worried: '/images/characters/colleague_f_worried.png',
    excited: '/images/characters/colleague_f_excited.png',
  },
};

export const colleagueMale = {
  id: 'colleague_m',
  name: '박건우',
  role: '동기 (개발자)',
  color: '#59a14f',
  expressions: {
    default: '/images/characters/colleague_m_default.png',
    smirk: '/images/characters/colleague_m_smirk.png',
    serious: '/images/characters/colleague_m_serious.png',
    flustered: '/images/characters/colleague_m_flustered.png',
    excited: '/images/characters/colleague_m_excited.png',
  },
};

export const backgrounds = {
  office_day: '/images/backgrounds/office_day.png',
  office_night: '/images/backgrounds/office_night.png',
  meeting_room: '/images/backgrounds/meeting_room.png',
  cafe: '/images/backgrounds/cafe.png',
  standup: '/images/backgrounds/standup.png',
  presentation: '/images/backgrounds/presentation.png',
  launch_party: '/images/backgrounds/launch_party.png',
  rooftop: '/images/backgrounds/rooftop.png',
};
```

> 이미지는 플레이스홀더 경로. 실제 이미지는 나중에 교체.

**Step 2: PM 칭호 데이터 작성**

```js
// src/data/roles/pm/titles.js

export const LEVEL_TITLES = [
  '수습 PM',
  'PM 루키',
  '기획 전사',
  '스프린트 마스터',
  '로드맵 설계자',
  '이해관계자 달인',
  '제품 전략가',
  '시니어 PM',
  'PM 리더',
  'CPO',
];
```

**Step 3: 커밋**

```bash
git add src/data/roles/pm/characters.js src/data/roles/pm/titles.js
git commit -m "feat: PM 캐릭터(멘토+동료) + 칭호 데이터 작성"
```

---

## Task 6: PM 챕터 1 완전체 작성

**Files:**
- Create: `src/data/roles/pm/chapters/chapter1.js`
- Create: `src/data/roles/pm/chapters/index.js`

**Step 1: PM 챕터 1 완전체 작성 (chapter1.js)**

챕터 1 "첫 출근, 제품 파악" — 실제 대사, 실제 VN 씬 포함:
- opening: 회사 출근, 멘토(김도현) 만남
- briefing: 제품 현황 설명, DAU/MAU 개념
- problems: `['pm_quiz_01', 'pm_quiz_02', 'pm_text_01']`
- bossChallenge: `'pm_quiz_03'`
- clear: 첫 날 마무리 VN
- event: 동기와의 선택지 이벤트

데이터 구조는 기존 chapter1.js와 동일 스키마 유지. `partnerGreeting[genderKey]` → `colleagueGreeting` 단일 트랙으로 변경.

**Step 2: 챕터 2-8 스켈레톤 작성 (chapter2.js ~ chapter8.js)**

각 챕터는 최소 구조만:
```js
export const chapter2 = {
  id: 2,
  title: '유저 리서치',
  subtitle: '유저를 이해하는 첫 걸음',
  part: 1,
  opening: { background: 'office_day', characters: [], dialogues: [{ speaker: 'narrator', text: '(준비 중)' }] },
  briefing: { background: 'meeting_room', characters: [], dialogues: [{ speaker: 'narrator', text: '(준비 중)' }] },
  problems: ['pm_quiz_04'],
  bossChallenge: 'pm_quiz_05',
  bossIntro: { background: 'meeting_room', characters: [], dialogues: [{ speaker: 'narrator', text: '(준비 중)' }] },
  clear: { background: 'office_day', characters: [], dialogues: [{ speaker: 'narrator', text: '(준비 중)' }] },
  event: { intro: { dialogues: [] }, background: 'cafe', choices: [] },
};
```

**Step 3: index.js 작성**

```js
// src/data/roles/pm/chapters/index.js
import { chapter1 } from './chapter1.js';
import { chapter2 } from './chapter2.js';
// ... chapter3~8

export const chapters = [chapter1, chapter2, /* ... */];

export const CHAPTER_META = [
  { id: 1, title: '첫 출근, 제품 파악', part: 1 },
  { id: 2, title: '유저 리서치', part: 1 },
  { id: 3, title: '문제 정의', part: 2 },
  { id: 4, title: '우선순위 결정', part: 2 },
  { id: 5, title: 'PRD 작성', part: 2 },
  { id: 6, title: '스프린트 운영', part: 3 },
  { id: 7, title: '디자인·개발 협업', part: 3 },
  { id: 8, title: '런칭과 회고', part: 3 },
];

export const PART_META = [
  { id: 1, title: '온보딩', chapters: [1, 2] },
  { id: 2, title: '기획', chapters: [3, 4, 5] },
  { id: 3, title: '실행', chapters: [6, 7, 8] },
];
```

**Step 4: 커밋**

```bash
git add src/data/roles/pm/chapters/
git commit -m "feat: PM 챕터 1 완전체 + 챕터 2-8 스켈레톤 작성"
```

---

## Task 7: PM 문제 데이터 + 난독화 정답 작성

**Files:**
- Create: `src/data/roles/pm/problems/quizProblems.js`
- Create: `src/data/roles/pm/problems/roadmapProblems.js`
- Create: `src/data/roles/pm/problems/textInputProblems.js`
- Create: `src/data/roles/pm/problems/_key.js`
- Create: `src/data/roles/pm/problems/answerLoader.js`
- Create: `src/data/roles/pm/problems/index.js`

**Step 1: 퀴즈 문제 작성 (quizProblems.js)**

챕터 1용 퀴즈 3개 (pm_quiz_01 ~ pm_quiz_03):
- PM 직무 기초 지식 (DAU/MAU, 퍼널, 이해관계자 등)
- 기존 quiz 스키마와 동일 구조

**Step 2: 텍스트 입력 문제 작성 (textInputProblems.js)**

챕터 1용 1개 (pm_text_01):
- 새로운 `type: 'text_input'` 문제
- 스키마: `{ id, type, question, context, prompt, hints, correctPatterns, sampleAnswer, explanation }`

**Step 3: 로드맵 문제 작성 (roadmapProblems.js)**

챕터 4용 1개 (pm_roadmap_01) — 스켈레톤:
- 새로운 `type: 'roadmap'` 문제
- 스키마: `{ id, type, question, context, items[], zones[], correctPlacement }`

**Step 4: 정답 난독화 (_key.js)**

```js
// 정답을 base64 인코딩된 JSON으로 저장
// { q: { pm_quiz_01: ['b'], ... }, t: { pm_text_01: { cp: [...] } }, r: { pm_roadmap_01: {...} } }
export const _k = btoa(JSON.stringify({ q: {...}, t: {...}, r: {...} }));
```

**Step 5: answerLoader.js 작성**

```js
import { _k } from './_key.js';

function decode() { return JSON.parse(atob(_k)); }

export function getQuizAnswers(problemId) { return decode().q[problemId]; }
export function getTextAnswers(problemId) { return decode().t[problemId]; }
export function getRoadmapAnswers(problemId) { return decode().r[problemId]; }
```

**Step 6: index.js 작성**

```js
import { quizProblems } from './quizProblems.js';
import { textInputProblems } from './textInputProblems.js';
import { roadmapProblems } from './roadmapProblems.js';

export function getAllProblems() {
  return [...quizProblems, ...textInputProblems, ...roadmapProblems];
}

export { quizProblems, textInputProblems, roadmapProblems };
```

**Step 7: 커밋**

```bash
git add src/data/roles/pm/problems/
git commit -m "feat: PM 문제 데이터 + 난독화 정답 시스템 작성"
```

---

## Task 8: ChapterFlow + ChapterSelect 직군 분기 적용

**Files:**
- Modify: `src/components/chapter/ChapterFlow.jsx`
- Modify: `src/components/chapter/ChapterSelect.jsx`
- Modify: `src/pages/GamePlay.jsx`

**Step 1: GamePlay.jsx 수정**

- `getPartnerCharacter(gender)` → `getColleagueCharacter(role, gender)` from roleRegistry
- `getChapter(chapterId)` → `getChapter(chapterId, role)` from roleRegistry
- 호감도 → 신뢰도 라벨 변경

**Step 2: ChapterFlow.jsx 수정**

- `partnerGreeting[genderKey]` → `colleagueGreeting` 단일 트랙
- `bossIntro.partnerLine[genderKey]` → `bossIntro.colleagueLine`
- `clear.partnerLine[genderKey]` → `clear.colleagueLine`
- `event.choice.response[genderKey]` → `event.choice.response` (단일)
- 모든 `getPartnerCharacter` → `getColleagueCharacter` 교체

**Step 3: ChapterSelect.jsx 수정**

- `CHAPTER_META` → `getChapterMeta(state.playerRole)` 동적 로드
- `PART_META` → `getPartMeta(state.playerRole)` 동적 로드
- `PART_COLORS` 유지 (Part 1-3에 매핑)

**Step 4: 린트 + 빌드**

```bash
npm run lint
npm run build
```

**Step 5: 커밋**

```bash
git add src/components/chapter/ src/pages/GamePlay.jsx
git commit -m "feat: ChapterFlow/ChapterSelect 직군 분기 적용"
```

---

## Task 9: QuestionRouter 확장 + TextInputQuestion 신규

**Files:**
- Modify: `src/components/questions/QuestionRouter.jsx`
- Create: `src/components/questions/TextInputQuestion.jsx`
- Create: `src/utils/textInputChecker.js`

**Step 1: TextInputQuestion 컴포넌트 작성**

CalcFieldEditor를 참고하되 단순화:
- CodeMirror 텍스트 입력 영역
- 프롬프트 + 힌트 표시
- 제출 → 키워드 매칭 채점

**Step 2: textInputChecker.js 작성**

```js
import { getTextAnswers } from '../data/roles/pm/problems/answerLoader.js';

export function checkTextInput(problemId, userAnswer, role) {
  // roleRegistry를 통해 정답 로더 가져오기
  const answers = getTextAnswers(problemId);
  if (!answers) return { correct: false, feedback: '정답 데이터 없음' };

  const { correctPatterns, partialFeedback } = answers;
  const normalized = userAnswer.trim().toLowerCase();

  // 모든 필수 패턴이 매칭되는지 확인
  const allMatch = correctPatterns.every(pattern =>
    new RegExp(pattern, 'i').test(normalized)
  );

  if (allMatch) return { correct: true, feedback: '정답!' };

  // 부분 피드백
  if (partialFeedback) {
    for (const { pattern, message } of partialFeedback) {
      if (!new RegExp(pattern, 'i').test(normalized)) {
        return { correct: false, feedback: message };
      }
    }
  }

  return { correct: false, feedback: '다시 생각해보세요.' };
}
```

**Step 3: QuestionRouter.jsx 확장**

기존 switch에 `text_input` case 추가:
```jsx
case 'text_input':
  return <TextInputQuestion problem={problem} onComplete={onComplete} ... />;
```

`getProblemById` import를 roleRegistry로 교체.

**Step 4: 린트 + 빌드**

```bash
npm run lint
npm run build
```

**Step 5: 커밋**

```bash
git add src/components/questions/ src/utils/textInputChecker.js
git commit -m "feat: TextInputQuestion + textInputChecker 추가"
```

---

## Task 10: RoadmapQuestion 신규 (PM 전용 DnD)

**Files:**
- Create: `src/components/questions/pm/RoadmapQuestion.jsx`
- Create: `src/utils/roadmapChecker.js`
- Modify: `src/components/questions/QuestionRouter.jsx`

**Step 1: RoadmapQuestion 컴포넌트 작성**

기존 BlockDragQuestion을 참고한 2x2 매트릭스 DnD:
- `@dnd-kit/core` + `@dnd-kit/sortable` 사용
- 4개 사분면: High Impact+Low Effort / High Impact+High Effort / Low Impact+Low Effort / Low Impact+High Effort
- 아이템 카드를 사분면에 드래그
- 제출 버튼으로 배치 채점

**Step 2: roadmapChecker.js 작성**

```js
import { getRoadmapAnswers } from '../data/roles/pm/problems/answerLoader.js';

export function checkRoadmap(problemId, userPlacement, role) {
  const answers = getRoadmapAnswers(problemId);
  if (!answers) return { correct: false };

  const { correctPlacement } = answers;
  const allCorrect = Object.entries(correctPlacement).every(
    ([itemId, zone]) => userPlacement[itemId] === zone
  );

  return { correct: allCorrect };
}
```

**Step 3: QuestionRouter.jsx에 roadmap case 추가**

```jsx
case 'roadmap':
  return <RoadmapQuestion problem={problem} onComplete={onComplete} ... />;
```

**Step 4: 린트 + 빌드**

```bash
npm run lint
npm run build
```

**Step 5: 커밋**

```bash
git add src/components/questions/pm/ src/utils/roadmapChecker.js src/components/questions/QuestionRouter.jsx
git commit -m "feat: RoadmapQuestion (PM 우선순위 매트릭스 DnD) 추가"
```

---

## Task 11: 브랜딩 변경

**Files:**
- Modify: `src/components/auth/LoginPage.jsx`
- Modify: `src/components/common/GameStart.jsx`
- Modify: `src/components/common/GameOver.jsx`
- Modify: `src/components/common/GameComplete.jsx`
- Modify: `src/components/chapter/BuffSelect.jsx`
- Modify: `index.html`
- Modify: `package.json`
- Modify: `src/index.css`

**Step 1: 타이틀 변경**

모든 "TABLEAU QUEST" → "JOB QUEST"
모든 "Growlab Interactive" → 제거 또는 새 이름
모든 "태블로" 참조 → "직무" 또는 제거
모든 "데이터 분석가" → "PM / 디자이너 / 개발자"

**Step 2: 호감도 → 신뢰도**

UI에 표시되는 "호감도" 텍스트를 "신뢰도"로 변경.
"파트너" → "멘토" 또는 "동료"로 변경.

**Step 3: CSS 직군별 테마 변수 추가**

```css
/* src/index.css */
[data-role="pm"]        { --color-accent: #5b8df0; }
[data-role="designer"]  { --color-accent: #b07aa1; }
[data-role="developer"] { --color-accent: #59a14f; }
```

**Step 4: index.html 타이틀**

```html
<title>JOB QUEST: 직무 체험</title>
```

**Step 5: package.json name**

```json
"name": "job-quest"
```

**Step 6: 린트 + 빌드**

```bash
npm run lint
npm run build
```

**Step 7: 커밋**

```bash
git add -A
git commit -m "feat: 브랜딩 전환 - JOB QUEST: 직무 체험"
```

---

## Task 12: 태블로 전용 코드 정리

**Files:**
- Review & clean: `src/components/blocks/` (ChartPreview 이미 삭제, 나머지 DnD 공용화)
- Review & clean: `src/components/calcfield/` (FunctionReference 이미 삭제)
- Review & clean: 남은 태블로 참조 전체

**Step 1: 남은 태블로 참조 검색**

```bash
grep -ri "tableau" src/ --include="*.jsx" --include="*.js" --include="*.css"
grep -ri "태블로" src/ --include="*.jsx" --include="*.js"
```

**Step 2: 발견된 참조 제거/교체**

**Step 3: blocks/ 폴더 정리**

- ChartPreview는 이미 삭제됨
- DraggableBlock, DroppableSlot 등 DnD 컴포넌트는 RoadmapQuestion에서 재활용 가능하므로 유지
- 필요시 `src/components/dnd/`로 이동 (선택)

**Step 4: 린트 + 빌드**

```bash
npm run lint
npm run build
```

**Step 5: 커밋**

```bash
git add -A
git commit -m "chore: 태블로 전용 코드 잔여 참조 정리"
```

---

## Task 13: E2E 플레이테스트 + 버그 수정

**Step 1: dev 서버 실행**

```bash
npm run dev
```

**Step 2: 전체 플레이 흐름 검증**

1. http://localhost:5173 접속
2. 로그인 또는 게스트 모드 진입
3. 이름 입력 → 성별 선택 → PM 직군 선택
4. 챕터 선택 화면 → 챕터 1 진입
5. 오프닝 VN 씬 재생 확인
6. 퀴즈 문제 풀이 → 채점 → XP 부여
7. 텍스트 입력 문제 → 채점 동작
8. 보스 문제 → 채점
9. 클리어 VN → 이벤트 → 버프 선택
10. 챕터 클리어 → 다음 챕터 해금
11. 새로고침 → 이어하기 동작
12. 게스트 모드 동일 과정

**Step 3: 발견된 버그 수정**

**Step 4: 최종 빌드 확인**

```bash
npm run lint
npm run build
```

**Step 5: 커밋**

```bash
git add -A
git commit -m "fix: E2E 플레이테스트 버그 수정"
```

---

## 검증 체크리스트

- [ ] `npm run lint` 에러 0개
- [ ] `npm run build` 성공
- [ ] 로그인 → 성별+직군 선택 화면 동작
- [ ] PM 선택 → 챕터 1 오프닝 VN 재생
- [ ] 퀴즈 문제 채점 + XP 부여
- [ ] 텍스트 입력 문제 채점
- [ ] 챕터 클리어 → 다음 챕터 해금
- [ ] 세이브/로드 동작
- [ ] 게스트 모드 전 과정 동작
- [ ] "태블로" 텍스트 잔여 없음
