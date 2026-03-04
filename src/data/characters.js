// 호환성 어댑터: 기존 import 경로를 roleRegistry로 위임
// 컴포넌트가 roleRegistry를 직접 사용하도록 점진적으로 마이그레이션할 것
import {
  getRoleCharacters,
  getRoleBackgrounds,
  getCharacterName as _getCharacterName,
  getCharacterImage as _getCharacterImage,
  getColleagueCharacter,
} from './roleRegistry'

// 기본 역할(pm)의 캐릭터 맵 — { mentor_pm: {...}, colleague_f: {...}, colleague_m: {...} }
export const CHARACTERS = getRoleCharacters('pm')

// 배경 이미지 맵
export const BACKGROUNDS = getRoleBackgrounds('pm')

// 캐릭터 ID로 이름 조회
export function getCharacterName(characterId) {
  return _getCharacterName(characterId, 'pm')
}

// 캐릭터 ID와 표정으로 이미지 경로 조회
export function getCharacterImage(characterId, expression = 'default') {
  return _getCharacterImage(characterId, expression, 'pm')
}

// 플레이어 성별에 따른 동료 캐릭터 ID 반환
export function getPartnerCharacter(gender) {
  const colleague = getColleagueCharacter('pm', gender)
  return colleague?.id || null
}
