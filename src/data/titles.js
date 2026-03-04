// 칭호 시스템 — 간소화 버전 (PM 역할 기준)
// PM 직군 칭호

export const TITLES = [
  // 레벨 칭호 (star 카테고리)
  { id: 'title_lv1', name: '수습 PM', icon: '📋', category: 'star', rarity: 'common', desc: '첫 발걸음을 내딛다', secret: false },
  { id: 'title_lv2', name: 'PM 루키', icon: '📊', category: 'star', rarity: 'common', desc: '레벨 2 달성', secret: false },
  { id: 'title_lv3', name: '기획 전사', icon: '⚔️', category: 'star', rarity: 'uncommon', desc: '레벨 3 달성', secret: false },
  { id: 'title_lv4', name: '스프린트 마스터', icon: '🏃', category: 'star', rarity: 'uncommon', desc: '레벨 4 달성', secret: false },
  { id: 'title_lv5', name: '로드맵 설계자', icon: '🗺️', category: 'star', rarity: 'rare', desc: '레벨 5 달성', secret: false },
  { id: 'title_lv6', name: '이해관계자 달인', icon: '🤝', category: 'star', rarity: 'rare', desc: '레벨 6 달성', secret: false },
  { id: 'title_lv7', name: '제품 전략가', icon: '🎯', category: 'star', rarity: 'epic', desc: '레벨 7 달성', secret: false },
  { id: 'title_lv8', name: '시니어 PM', icon: '💎', category: 'star', rarity: 'epic', desc: '레벨 8 달성', secret: false },
  { id: 'title_lv9', name: 'PM 리더', icon: '👑', category: 'star', rarity: 'legendary', desc: '레벨 9 달성', secret: false },
  { id: 'title_lv10', name: 'CPO', icon: '🏆', category: 'star', rarity: 'legendary', desc: '레벨 10 달성', secret: false },

  // 실력 칭호 (skill 카테고리)
  { id: 'title_perfect', name: '퍼펙트 스프린트', icon: '✨', category: 'skill', rarity: 'rare', desc: '챕터 퍼펙트 클리어', secret: false },
  { id: 'title_streak3', name: '연속 정답왕', icon: '🔥', category: 'skill', rarity: 'uncommon', desc: '3연속 정답', secret: false },
  { id: 'title_streak5', name: '무결점 PM', icon: '💪', category: 'skill', rarity: 'rare', desc: '5연속 정답', secret: false },
  { id: 'title_nohint', name: '독립적 사고', icon: '🧠', category: 'skill', rarity: 'uncommon', desc: '힌트 없이 챕터 클리어', secret: false },

  // 파트 칭호 (part 카테고리)
  { id: 'title_part1', name: '온보딩 완료', icon: '🎓', category: 'part', rarity: 'uncommon', desc: 'Part 1 클리어', secret: false },
  { id: 'title_part2', name: '기획의 기초', icon: '📝', category: 'part', rarity: 'rare', desc: 'Part 2 클리어', secret: false },
  { id: 'title_part3', name: '실행의 달인', icon: '🚀', category: 'part', rarity: 'epic', desc: 'Part 3 클리어', secret: false },

  // 신뢰 칭호 (affection 카테고리)
  { id: 'title_trust1', name: '팀의 일원', icon: '👋', category: 'affection', rarity: 'common', desc: '신뢰도 30 달성', secret: false },
  { id: 'title_trust2', name: '든든한 동료', icon: '🤗', category: 'affection', rarity: 'uncommon', desc: '신뢰도 60 달성', secret: false },
  { id: 'title_trust3', name: '핵심 파트너', icon: '💫', category: 'affection', rarity: 'rare', desc: '신뢰도 80 달성', secret: false },

  // 히든 칭호 (hidden 카테고리)
  { id: 'title_hidden_all_stars', name: '올스타 PM', icon: '⭐', category: 'hidden', rarity: 'legendary', desc: '전 챕터 별 3개', secret: true },
]

export const CATEGORY_META = {
  star: { label: '레벨', color: '#ffd261' },
  skill: { label: '실력', color: '#48A868' },
  part: { label: '파트', color: '#5b8df0' },
  affection: { label: '신뢰', color: '#f05b8d' },
  hidden: { label: '히든', color: '#b07aa1' },
}

export const RARITY_META = {
  common: { label: '일반', color: '#8899b0' },
  uncommon: { label: '고급', color: '#48A868' },
  rare: { label: '희귀', color: '#5b8df0' },
  epic: { label: '영웅', color: '#b07aa1' },
  legendary: { label: '전설', color: '#ffd261' },
}

export function getTitleById(titleId) {
  return TITLES.find((t) => t.id === titleId) || null
}

export function checkTitleUnlocks(state) {
  const unlocked = state.unlockedTitles || []
  const newTitles = []

  // 퍼펙트 챕터
  if (!unlocked.includes('title_perfect') && state.hadPerfectChapter) {
    newTitles.push('title_perfect')
  }

  // 연속 정답
  if (!unlocked.includes('title_streak3') && (state.maxConsecutiveCorrect || 0) >= 3) {
    newTitles.push('title_streak3')
  }
  if (!unlocked.includes('title_streak5') && (state.maxConsecutiveCorrect || 0) >= 5) {
    newTitles.push('title_streak5')
  }

  // 힌트 프리
  if (!unlocked.includes('title_nohint') && (state.hintFreeChapters || 0) >= 1) {
    newTitles.push('title_nohint')
  }

  // 신뢰도
  if (!unlocked.includes('title_trust1') && state.affection >= 30) {
    newTitles.push('title_trust1')
  }
  if (!unlocked.includes('title_trust2') && state.affection >= 60) {
    newTitles.push('title_trust2')
  }
  if (!unlocked.includes('title_trust3') && state.affection >= 80) {
    newTitles.push('title_trust3')
  }

  // 파트 클리어 (PM 기준: Part1 = ch1-2, Part2 = ch3-5, Part3 = ch6-8)
  const stars = state.chapterStars || {}
  const part1Done = [1, 2].every((id) => (stars[id] || 0) >= 1)
  const part2Done = [3, 4, 5].every((id) => (stars[id] || 0) >= 1)
  const part3Done = [6, 7, 8].every((id) => (stars[id] || 0) >= 1)
  if (!unlocked.includes('title_part1') && part1Done) newTitles.push('title_part1')
  if (!unlocked.includes('title_part2') && part2Done) newTitles.push('title_part2')
  if (!unlocked.includes('title_part3') && part3Done) newTitles.push('title_part3')

  // 올스타: 모든 챕터 별 3개
  const allThreeStars = [1, 2, 3, 4, 5, 6, 7, 8].every((id) => (stars[id] || 0) >= 3)
  if (!unlocked.includes('title_hidden_all_stars') && allThreeStars) {
    newTitles.push('title_hidden_all_stars')
  }

  return newTitles
}
