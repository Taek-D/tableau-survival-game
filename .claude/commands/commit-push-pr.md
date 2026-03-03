# 커밋 → 푸시 → PR 생성

변경 사항을 커밋하고 원격에 푸시한 뒤 PR을 생성합니다.

## 실행 순서

1. `git status`로 변경 파일 확인
2. `git diff`로 변경 내용 리뷰
3. 변경 내용 기반으로 커밋 메시지 작성 (한국어, 간결하게)
4. 관련 파일만 `git add` (민감 파일 제외: .env, credentials)
5. `git commit`
6. `git push -u origin {branch}`
7. `gh pr create` — Summary + Test plan 포함

## 커밋 메시지 규칙
- feat: 새 기능
- fix: 버그 수정
- refactor: 리팩토링
- style: 스타일/UI 변경
- docs: 문서 수정
- chore: 설정/의존성 변경

## 주의사항
- main 브랜치에 직접 push 금지
- PR 본문에 변경 사항 요약 필수
