export const chapter5 = {
  id: 5,
  title: 'PRD 작성',
  subtitle: '기획의 꽃, 제품 요구사항 문서',
  part: 2,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      { speaker: 'narrator', text: '5일차, 금요일 아침. 벌써 첫 주의 마지막 날이다.' },
      {
        speaker: 'narrator',
        text: '{playerName}은 이번 주 동안 배운 것들을 떠올렸다. 제품 지표, 유저 리서치, 문제 정의, 우선순위...',
      },
      {
        speaker: 'narrator',
        text: '이제 이 모든 것을 하나의 문서로 만들 차례다.',
      },
      {
        speaker: 'mentor_pm',
        characters: [{ id: 'mentor_pm', position: 'center' }],
        expression: 'smile',
        text: '드디어 금요일이에요! 첫 주 마무리를 멋지게 해봅시다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '오늘은 PM의 꽃이라고 할 수 있는 PRD, 제품 요구사항 문서를 작성해볼 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: 'PRD는 "우리가 왜, 무엇을 만드는가"를 정의하는 문서예요. 팀 전체가 같은 방향을 보게 만드는 나침반이죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '이번 주 동안 쌓은 모든 것 — 데이터, 유저 인사이트, 문제 정의, 우선순위 — 이 다 PRD에 들어가요.',
      },
      {
        speaker: 'player',
        text: '(드디어 기획 문서를 쓴다... 긴장되지만, 이번 주에 배운 게 있으니 해볼 만하다.)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '겁먹지 마세요. 하나씩 채워나가면 돼요. 회의실로 가죠!',
      },
    ],
  },

  colleagueGreeting: null,

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'PRD에 반드시 들어가야 할 항목들을 정리해볼게요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '첫째, 배경(Background). 왜 이 기능을 만드는지, 어떤 문제를 해결하려는지.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '둘째, 목표(Goals). 이 기능으로 달성하려는 구체적 목표와 성공 지표.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '셋째, 범위(Scope). 이번에 포함하는 것과 포함하지 않는 것을 명확히.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '넷째, 유저 스토리(User Stories). 여기서 중요한 형식이 있어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '"As a [사용자 유형], I want [원하는 것], So that [달성하려는 목적]"',
      },
      {
        speaker: 'player',
        text: 'As a ~ I want ~ So that ~ ... 사용자 관점에서 기능의 이유를 설명하는 거군요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '정확해요! 유저 스토리는 개발팀이 "왜 이걸 만드는지"를 바로 이해할 수 있게 해줘요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '다섯째, 인수조건(Acceptance Criteria). 이건 "완료"의 기준이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '"Given [조건], When [행동], Then [결과]" 형식으로 작성해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '예를 들면, "Given 신규 사용자가 가입했을 때, When 첫 로그인하면, Then 온보딩 튜토리얼이 자동으로 시작된다."',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '인수조건이 명확해야 개발팀이 정확히 뭘 만들어야 하는지 알고, QA팀이 테스트할 수 있어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '중요한 건, PRD는 "무엇을, 왜"에 집중해야 해요. "어떻게 구현할지"는 개발팀의 영역이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '자, 이론은 여기까지! 직접 유저 스토리와 인수조건을 작성해봅시다.',
      },
    ],
  },

  problems: ['pm_quiz_09', 'pm_text_03'],

  bossChallenge: 'pm_text_04',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '마지막 관문이에요. PRD의 핵심인 인수조건을 직접 작성해보세요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'Given-When-Then 형식으로, 테스트 가능한 구체적 조건을 작성하는 게 포인트예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '이번 주에 배운 모든 것을 담아보세요. {playerName}님이라면 할 수 있어요!',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'cheer', text: '첫 주 마지막 미션! 멋지게 마무리해요~!' },
      { speaker: 'colleague_m', expression: 'default', text: '인수조건이 명확하면 제가 바로 개발 들어갈 수 있어요. 기대할게요.' },
    ],
  },

  clear: {
    background: 'office_night',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '축하해요, {playerName}님! 첫 주를 성공적으로 마쳤어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '5일 만에 제품 지표, 유저 리서치, 문제 정의, 우선순위, PRD까지... 정말 빠르게 성장했어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '물론 아직 배울 게 많아요. 다음 주부터는 실전이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '스프린트 운영, 디자인-개발 협업, 그리고 실제 런칭까지... 진짜 PM의 세계가 시작돼요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '주말 푹 쉬고, 월요일에 만나요! 정말 수고했어요, {playerName}님.',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'excited', text: '첫 주 완료! 우리 스쿼드 진짜 잘 맞는 것 같아요. 다음 주도 기대된다~!' },
      { speaker: 'colleague_m', expression: 'smirk', text: '일주일 만에 PRD까지... 대단한데요. 다음 주 스프린트가 기대됩니다.' },
    ],
  },

  event: {
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '금요일 저녁. 첫 주를 무사히 마친 기념으로 팀원들이 카페에 모였다.' },
        { speaker: 'narrator', text: '한 주를 돌아보며, 어떻게 시간을 보낼지 고민된다.' },
      ],
    },
    background: 'cafe',
    choices: [
      {
        text: '팀 전체와 1주차 회고하기',
        response: [
          {
            speaker: 'colleague_f',
            expression: 'excited',
            text: '한 주 동안 정말 많이 배웠어요! 특히 유저 스토리 형식이 인상 깊었어요.',
          },
          {
            speaker: 'colleague_m',
            expression: 'default',
            text: '저도 PRD 기반으로 스펙 정리하니까 훨씬 수월하더라고요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'smile',
            text: '이렇게 회고하는 습관, 정말 좋아요. 다음 주에도 이어갑시다.',
          },
          { speaker: 'player', text: '(팀과 함께 돌아보니 한 주가 더 의미 있게 느껴진다. 좋은 팀이다.)' },
        ],
        affectionChange: 3,
        xpChange: 5,
        hintChange: 0,
      },
      {
        text: '혼자 1주차 배운 내용 정리하기',
        response: [
          { speaker: 'narrator', text: '카페 구석에서 노트를 열고, 이번 주에 배운 내용을 정리했다.' },
          { speaker: 'narrator', text: 'DAU/MAU → 유저 리서치 → 가설/5W1H/JTBD → RICE/MoSCoW → PRD/유저 스토리/AC...' },
          { speaker: 'narrator', text: '5일 치 내용이 하나의 흐름으로 연결되는 게 보인다.' },
          { speaker: 'player', text: '(전체 그림이 그려진다. 다음 주는 더 자신 있게 시작할 수 있을 것 같다.)' },
        ],
        affectionChange: -1,
        xpChange: 10,
        hintChange: 1,
      },
      {
        text: '서아와 다음 주 스프린트에 대해 이야기하기',
        response: [
          {
            speaker: 'colleague_f',
            expression: 'default',
            text: '다음 주부터 진짜 스프린트가 시작되죠? 저도 디자인 준비해야 하는데...',
          },
          {
            speaker: 'colleague_f',
            expression: 'worried',
            text: '솔직히 좀 긴장돼요. PRD 보고 디자인을 바로 시작해야 하잖아요.',
          },
          {
            speaker: 'colleague_f',
            expression: 'cheer',
            text: '그래도 이번 주에 작성한 유저 스토리가 잘 되어 있으면 방향을 잡기 쉬워요. 믿을게요!',
          },
          { speaker: 'player', text: '(PRD가 디자이너에게 얼마나 중요한지 실감했다. 더 꼼꼼하게 써야겠다.)' },
        ],
        affectionChange: 2,
        xpChange: 8,
        hintChange: 0,
      },
    ],
  },
}
