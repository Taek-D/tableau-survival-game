// PM 역할 캐릭터 데이터
// VN 시스템에서 characterId로 캐릭터를 찾을 때 characterMap 사용

export const mentorCharacter = {
  id: 'mentor_pm',
  name: '김도현',
  role: '시니어 PM',
  color: '#5b8df0',
  nameColor: '#5b8df0',
  expressions: {
    default: '/images/characters/pm/mentor_default.png',
    smile: '/images/characters/pm/mentor_smile.png',
    serious: '/images/characters/pm/mentor_serious.png',
    impressed: '/images/characters/pm/mentor_impressed.png',
    frown: '/images/characters/pm/mentor_frown.png',
    surprise: '/images/characters/pm/mentor_surprise.png',
  },
}

export const colleagueFemale = {
  id: 'colleague_f',
  name: '이서아',
  role: '동기 (디자이너)',
  color: '#b07aa1',
  nameColor: '#b07aa1',
  expressions: {
    default: '/images/characters/pm/colleague_f_default.png',
    cheer: '/images/characters/pm/colleague_f_cheer.png',
    shy: '/images/characters/pm/colleague_f_shy.png',
    worried: '/images/characters/pm/colleague_f_worried.png',
    excited: '/images/characters/pm/colleague_f_excited.png',
  },
}

export const colleagueMale = {
  id: 'colleague_m',
  name: '박건우',
  role: '동기 (개발자)',
  color: '#59a14f',
  nameColor: '#59a14f',
  expressions: {
    default: '/images/characters/pm/colleague_m_default.png',
    smirk: '/images/characters/pm/colleague_m_smirk.png',
    serious: '/images/characters/pm/colleague_m_serious.png',
    flustered: '/images/characters/pm/colleague_m_flustered.png',
    excited: '/images/characters/pm/colleague_m_excited.png',
  },
}

export const backgrounds = {
  office_day: '/images/backgrounds/office_day.png',
  office_night: '/images/backgrounds/office_night.png',
  meeting_room: '/images/backgrounds/meeting_room.png',
  cafe: '/images/backgrounds/cafe.png',
  standup: '/images/backgrounds/standup.png',
  presentation: '/images/backgrounds/presentation.png',
  launch_party: '/images/backgrounds/launch_party.png',
  rooftop: '/images/backgrounds/rooftop.png',
}

// VN 시스템에서 characterId로 캐릭터 데이터를 찾기 위한 맵
export const characterMap = {
  mentor_pm: mentorCharacter,
  colleague_f: colleagueFemale,
  colleague_m: colleagueMale,
}
