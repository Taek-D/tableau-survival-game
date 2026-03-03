# 빌드 및 배포 확인

빌드를 실행하고 배포 준비 상태를 확인합니다.

## 실행 순서

1. `npm run lint` — 린트 에러 확인
2. `npm run build` — Vite 프로덕션 빌드
3. 빌드 에러 발생 시 수정 후 재빌드
4. `npm run preview` — 프로덕션 빌드 로컬 미리보기 (선택)
5. dist/ 폴더 크기 및 번들 확인
6. 결과 요약 출력

## 배포 참고
- Vercel에 자동 배포 (vercel.json 설정됨)
- 빌드 출력: dist/
- SPA 라우팅 리다이렉트 설정 포함
