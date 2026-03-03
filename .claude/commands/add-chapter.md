# 새 챕터 추가

새로운 게임 챕터를 추가합니다.

## 필요 정보
- 챕터 번호 및 제목
- 스토리 시나리오 (opening, briefing)
- 문제 목록 (quiz, blockDrag, calcField 중 선택)
- 보스 캐릭터 정보
- 이벤트/선택지 (선택사항)

## 실행 순서

1. `src/data/chapters/` 에서 기존 챕터 구조 확인
2. 새 챕터 데이터 작성 (기존 패턴 따르기)
3. `src/data/chapters/index.js` 에 export 추가
4. 필요한 문제를 `src/data/problems/` 에 추가
5. 정답은 난독화 시스템 사용 (`_key.js`)
6. 스토리 시나리오가 있으면 `src/data/stories/` 에 추가
7. `npm run lint` + `npm run build` 확인
