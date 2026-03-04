// PM 챕터 데이터 — Task 6에서 완전체 작성 예정
// 현재는 roleRegistry.js가 임포트할 수 있는 스켈레톤

export const chapters = {}

export const CHAPTER_META = []

export const PART_META = {
  1: { name: 'Part 1', label: '온보딩' },
  2: { name: 'Part 2', label: '성장' },
  3: { name: 'Part 3', label: '도전' },
  4: { name: 'Part 4', label: '리더십' },
}

export function getChapter(chapterId) {
  return chapters[chapterId] || null
}

export function getMaxChapter() {
  const keys = Object.keys(chapters).map(Number).filter(Boolean)
  return keys.length > 0 ? Math.max(...keys) : 0
}
