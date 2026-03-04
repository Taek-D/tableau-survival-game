// 역할(직군) 데이터 중앙 라우터
// 모든 컴포넌트는 이 모듈을 통해 역할별 데이터에 접근

import {
  chapters as pmChapters,
  CHAPTER_META as pmChapterMeta,
  PART_META as pmPartMeta,
  getMaxChapter as pmGetMaxChapter,
} from './roles/pm/chapters/index.js'

import { getAllProblems as pmGetAllProblems } from './roles/pm/problems/index.js'

import {
  mentorCharacter as pmMentor,
  colleagueFemale as pmColleagueFemale,
  colleagueMale as pmColleagueMale,
  characterMap as pmCharacterMap,
  backgrounds as pmBackgrounds,
} from './roles/pm/characters.js'

import { LEVEL_TITLES as pmLevelTitles } from './roles/pm/titles.js'

// --- 역할별 데이터 맵 ---

const chapterDataMap = {
  pm: pmChapters,
}

const chapterMetaMap = {
  pm: pmChapterMeta,
}

const partMetaMap = {
  pm: pmPartMeta,
}

const maxChapterMap = {
  pm: pmGetMaxChapter,
}

const mentorMap = {
  pm: pmMentor,
}

const colleagueMap = {
  pm: {
    female: pmColleagueFemale,
    male: pmColleagueMale,
  },
}

const characterMapByRole = {
  pm: pmCharacterMap,
}

const backgroundMap = {
  pm: pmBackgrounds,
}

const problemsMap = {
  pm: pmGetAllProblems,
}

const levelTitlesMap = {
  pm: pmLevelTitles,
}

const roleInfoMap = {
  pm: {
    name: 'pm',
    color: '#5b8df0',
    label: '프로덕트 매니저',
    description: '사용자 문제를 정의하고, 제품 전략을 수립하는 PM의 여정',
  },
}

// --- 공개 API ---

/**
 * 챕터 데이터 조회
 * @param {number} chapterId
 * @param {string} role - 'pm' 등
 * @returns {object|null}
 */
export function getChapter(chapterId, role = 'pm') {
  const chapters = chapterDataMap[role]
  if (!chapters) return null
  return chapters[chapterId] || null
}

/**
 * 챕터 메타 목록 (ChapterSelect용)
 * @param {string} role
 * @returns {Array}
 */
export function getChapterMeta(role = 'pm') {
  return chapterMetaMap[role] || []
}

/**
 * 파트 메타 (파트 탭 라벨용)
 * @param {string} role
 * @returns {object}
 */
export function getPartMeta(role = 'pm') {
  return partMetaMap[role] || {}
}

/**
 * 최대 챕터 번호
 * @param {string} role
 * @returns {number}
 */
export function getMaxChapter(role = 'pm') {
  const fn = maxChapterMap[role]
  return fn ? fn() : 0
}

/**
 * 멘토 캐릭터 데이터
 * @param {string} role
 * @returns {object}
 */
export function getMentorCharacter(role = 'pm') {
  return mentorMap[role] || null
}

/**
 * 동료 캐릭터 (남성 플레이어 → 여성 동료, 여성 플레이어 → 남성 동료)
 * @param {string} role
 * @param {string} gender - 플레이어 성별 ('male' | 'female')
 * @returns {object}
 */
export function getColleagueCharacter(role = 'pm', gender = 'male') {
  const colleagues = colleagueMap[role]
  if (!colleagues) return null
  return gender === 'male' ? colleagues.female : colleagues.male
}

/**
 * 역할의 전체 캐릭터 맵 (VN 시스템에서 characterId로 조회용)
 * @param {string} role
 * @returns {object}
 */
export function getRoleCharacters(role = 'pm') {
  return characterMapByRole[role] || {}
}

/**
 * 역할의 배경 이미지 맵
 * @param {string} role
 * @returns {object}
 */
export function getRoleBackgrounds(role = 'pm') {
  return backgroundMap[role] || {}
}

/**
 * 문제 ID로 문제 데이터 조회
 * @param {string} problemId
 * @param {string} role
 * @returns {object|null}
 */
export function getProblemById(problemId, role = 'pm') {
  const getAllProblems = problemsMap[role]
  if (!getAllProblems) return null
  return getAllProblems().find((p) => p.id === problemId) || null
}

/**
 * 레벨별 칭호 목록
 * @param {string} role
 * @returns {Array<string>}
 */
export function getLevelTitles(role = 'pm') {
  return levelTitlesMap[role] || []
}

/**
 * 역할 정보 (이름, 색상, 라벨, 설명)
 * @param {string} role
 * @returns {object|null}
 */
export function getRoleInfo(role = 'pm') {
  return roleInfoMap[role] || null
}

/**
 * 사용 가능한 역할 목록
 * @returns {Array<{id: string, available: boolean}>}
 */
export function getAvailableRoles() {
  return [
    { id: 'pm', available: true },
    // 향후 추가될 역할
    // { id: 'data_analyst', available: false },
    // { id: 'designer', available: false },
  ]
}
