# 새 문제 추가

게임에 새로운 문제를 추가합니다.

## 문제 유형

### 1. Quiz (객관식)
- 파일: `src/data/problems/quizProblems.js`
- 채점: `src/utils/quizChecker.js`
- 구조: 질문 + 4개 선택지 + 정답ID

### 2. Block Drag (차트 빌더)
- 파일: `src/data/problems/blockDragProblems.js`
- 채점: `src/utils/blockDragChecker.js`
- 구조: 데이터셋 + 슬롯 정의 + 정답 블록 배치

### 3. Calc Field (계산식)
- 파일: `src/data/problems/calcFieldProblems.js`
- 채점: `src/utils/calcFieldValidator.js`
- 구조: 시나리오 + 정규식 패턴 매칭

## 실행 순서

1. 문제 유형 결정
2. 해당 파일에 문제 데이터 추가
3. 정답은 난독화 처리 (`answerLoader.js` + `_key.js`)
4. 해당 챕터의 문제 목록에 연결
5. 채점 로직이 새 문제를 올바르게 처리하는지 확인
6. `npm run build` 로 빌드 확인
