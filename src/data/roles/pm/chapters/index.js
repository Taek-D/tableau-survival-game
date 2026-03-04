// PM 챕터 데이터 — 챕터 1 완전체 + 챕터 2-8 스켈레톤

import { chapter1 } from './chapter1.js'
import { chapter2 } from './chapter2.js'
import { chapter3 } from './chapter3.js'
import { chapter4 } from './chapter4.js'
import { chapter5 } from './chapter5.js'
import { chapter6 } from './chapter6.js'
import { chapter7 } from './chapter7.js'
import { chapter8 } from './chapter8.js'

export const chapters = {
  1: chapter1,
  2: chapter2,
  3: chapter3,
  4: chapter4,
  5: chapter5,
  6: chapter6,
  7: chapter7,
  8: chapter8,
}

export const CHAPTER_META = [
  { id: 1, part: 1, title: '첫 출근, 제품 파악', subtitle: '온보딩과 첫 미션' },
  { id: 2, part: 1, title: '유저 리서치', subtitle: '유저를 이해하는 첫 걸음' },
  { id: 3, part: 2, title: '문제 정의', subtitle: '가설을 세우고 검증하기' },
  { id: 4, part: 2, title: '우선순위 결정', subtitle: 'Impact와 Effort 사이에서' },
  { id: 5, part: 2, title: 'PRD 작성', subtitle: '기획의 꽃, 제품 요구사항 문서' },
  { id: 6, part: 3, title: '스프린트 운영', subtitle: '애자일의 심장' },
  { id: 7, part: 3, title: '디자인 개발 협업', subtitle: '함께 만드는 제품' },
  { id: 8, part: 3, title: '런칭과 회고', subtitle: '세상에 내보내는 순간' },
]

export const PART_META = {
  1: { name: 'Part 1', label: '온보딩' },
  2: { name: 'Part 2', label: '기획' },
  3: { name: 'Part 3', label: '실행' },
}

export function getChapter(chapterId) {
  return chapters[chapterId] || null
}

export function getMaxChapter() {
  return CHAPTER_META.length
}
