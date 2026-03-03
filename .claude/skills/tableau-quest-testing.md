---
name: tableau-quest-testing
description: 테스트 패턴 및 QA 가이드. Use when writing tests, debugging, or verifying game behavior.
---

# Tableau Quest Testing Guide

## Current Status
- 테스트 프레임워크 미설정
- 수동 테스트 위주 (브라우저에서 `npm run dev`)

## Manual Test Checklist

### 인증
- [ ] 이메일 회원가입 → 로그인
- [ ] 게스트 모드 (로그인 없이 체험)
- [ ] 로그아웃 후 재로그인 시 세이브 복원

### 게임 흐름
- [ ] 새 게임 시작 → 캐릭터 설정
- [ ] 챕터 선택 화면 진입
- [ ] 오프닝 → 브리핑 → 문제 풀이 순서
- [ ] 보스 등장 → 클리어 화면
- [ ] 이벤트/선택지 동작

### 문제 유형별
- [ ] Quiz: 정답/오답 판정, XP 부여
- [ ] Block Drag: 블록 드래그앤드롭, 차트 프리뷰
- [ ] Calc Field: 계산식 입력, 정규식 채점, 부분 피드백

### 세이브 시스템
- [ ] localStorage 저장 확인 (DevTools > Application)
- [ ] 새로고침 후 이어하기 동작
- [ ] 새 게임 시작 시 이전 세이브 초기화

### 반응형/UI
- [ ] 모바일 화면 대응
- [ ] Tailwind 스타일 깨짐 없음
- [ ] 전환 애니메이션 정상 동작

## Future: Vitest 도입 시

### 추천 테스트 대상
1. **채점 엔진** (순수 함수, 테스트 용이)
   - `quizChecker.js` — 정답 ID 매칭
   - `blockDragChecker.js` — 슬롯 비교 + 대안 정답
   - `calcFieldValidator.js` — 정규식 패턴 매칭
2. **게임 상태 리듀서** — 액션별 상태 전이 검증
3. **XP/레벨 계산** — getLevelFromXP, getXPForLevel 등

### 설치
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### 설정 (vite.config.js)
```js
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
```
