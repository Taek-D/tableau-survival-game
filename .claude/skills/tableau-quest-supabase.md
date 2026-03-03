---
name: tableau-quest-supabase
description: Supabase 인증 및 데이터 저장 가이드. Use when working with authentication, database, save/load, or Supabase configuration.
---

# Tableau Quest Supabase Guide

## Configuration
- **Client**: `src/lib/supabase.js`
- **환경변수**: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- Supabase 미설정 시 → `supabase` 변수가 `null` → 게스트 모드만 가능

## Authentication (`src/hooks/useAuth.jsx`)

### Methods
| Method | 설명 |
|--------|------|
| `signUp(email, password)` | 이메일 회원가입 |
| `signIn(email, password)` | 이메일 로그인 |
| `signOut()` | 로그아웃 |
| `startGuest()` | 게스트 모드 (Supabase 없이) |

### User Object
```js
// 일반 유저
{ id: 'uuid', email: 'user@example.com', ... }

// 게스트 유저
{ id: 'guest', email: '체험 모드', _isGuest: true }
```

### Auth Flow
```
App.jsx → AuthProvider → AppContent
  ├─ loading → "로딩 중..."
  ├─ !user → LoginPage
  └─ user → GameProvider → Routes
```

## Database

### game_saves 테이블
```sql
-- supabase/migrations/001_game_saves.sql
CREATE TABLE game_saves (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL UNIQUE,
  save_data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### Row Level Security
- 유저는 자신의 세이브만 CRUD 가능
- `auth.uid() = user_id` 조건으로 제한

## Save System (`useGameState.jsx`)

### 저장 전략
1. **localStorage** (즉시): 상태 변경마다 `tableau-quest-save` 키에 저장
2. **Supabase** (2초 디바운스): `saveToSupabase(userId, saveData)`

### 로드 전략
1. 앱 시작 시 localStorage와 Supabase 모두 확인
2. `updatedAt` 비교 → 최신 데이터 우선
3. 동기화 후 양쪽에 최신 데이터 반영

### 게스트 모드 저장
- localStorage만 사용
- Supabase 동기화 건너뜀 (`userId`가 `'guest'`이므로)
- 회원가입 후 마이그레이션 미지원 (현재)

## Migration 추가
1. `supabase/migrations/` 에 순번 파일 추가
2. Supabase Dashboard에서 SQL 실행 또는 CLI 사용
3. RLS 정책 설정 필수

## 주의사항
- 환경변수를 코드에 하드코딩하지 않기
- RLS 정책 없이 테이블 생성하지 않기
- 게스트 유저의 save 데이터는 Supabase에 보내지 않기
