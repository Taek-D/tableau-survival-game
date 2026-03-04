export const chapter3 = {
  id: 3,
  title: '문제 정의',
  subtitle: '가설을 세우고 검증하기',
  part: 2,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      { speaker: 'narrator', text: '3일차 아침. 출근길이 조금씩 익숙해지고 있다.' },
      {
        speaker: 'narrator',
        text: '{playerName}은 엘리베이터에서 어제 유저 리서치에서 들었던 사용자들의 목소리를 떠올렸다.',
      },
      {
        speaker: 'narrator',
        text: '"기능이 너무 많아서 뭘 먼저 해야 할지 모르겠어요." "튜토리얼이 있으면 좋겠는데..."',
      },
      {
        speaker: 'narrator',
        background: 'office_day',
        text: '자리에 앉자마자, 도현 팀장이 커피 한 잔을 들고 다가왔다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '좋은 아침! 어제 유저 인터뷰 정리는 해봤어요?',
      },
      {
        speaker: 'player',
        text: '네, 정리하면서 몇 가지 패턴이 보이는 것 같아요. 온보딩 관련 불만이 많더라고요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '오, 벌써 패턴을 찾았어요? 좋은 감각이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '하지만 "불만이 많다"는 건 아직 관찰이에요. 이걸 명확한 문제로 바꿔야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '오늘은 데이터에서 진짜 문제를 찾는 법을 배울 거예요. 회의실로 가죠.',
      },
      {
        speaker: 'player',
        text: '(관찰에서 문제로... 어떻게 다른 걸까? 기대된다.)',
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
        text: '자, 화이트보드에 어제 유저 리서치 결과를 정리해봤어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '먼저, 가설이란 뭘까요? "~일 것이다"라는 형태의 검증 가능한 추측이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '예를 들면, "온보딩을 완료하지 못한 사용자의 7일 리텐션이 낮을 것이다" 이런 식이죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '핵심은, 가설은 데이터로 검증할 수 있어야 한다는 거예요. "사용자가 불편해한다"는 가설이 아니라 감상이에요.',
      },
      {
        speaker: 'player',
        text: '검증 가능한 추측... 그러니까 데이터로 맞다/틀리다를 확인할 수 있어야 하는 거군요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '정확해요! 그리고 문제를 정의할 때는 5W1H 프레임워크를 써요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'Who(누가), What(무엇을), When(언제), Where(어디서), Why(왜), How(어떻게).',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '이 여섯 가지 질문에 답할 수 있으면, 문제가 구체적으로 정의된 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '그리고 하나 더. JTBD, Jobs To Be Done이라는 프레임워크도 알아야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'Clayton Christensen 교수가 만든 개념인데, 사용자가 제품을 "고용"한다고 생각하는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '유명한 예가 있어요. 패스트푸드점에서 밀크셰이크가 아침에 잘 팔린 이유를 아세요?',
      },
      {
        speaker: 'player',
        text: '음... 아침에 달콤한 걸 찾는 사람이 많아서요?',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '비슷하지만 더 깊어요. 출근길 운전자들이 "지루한 통근 시간을 달래줄 무언가"를 원했던 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '밀크셰이크는 한 손으로 마실 수 있고, 오래 걸리고, 포만감도 줘요. 바나나나 베이글보다 그 "일"을 잘 해낸 거죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '핵심은 기능이 아니라 사용자가 달성하려는 근본적 목적, 즉 Job을 찾는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '자, 이제 직접 해봅시다. 문제 정의가 잘 되어 있는지 구분하는 연습부터!',
      },
    ],
  },

  problems: ['pm_quiz_06'],

  bossChallenge: 'pm_quiz_07',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '좋아요, 마지막 문제예요. 오늘 배운 JTBD 개념을 제대로 이해했는지 확인해볼게요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '이건 실무에서도 자주 헷갈리는 부분이에요. 신중하게 생각해보세요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '밀크셰이크 사례를 떠올려보면 힌트가 될 거예요.',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'cheer', text: '파이팅! JTBD, 밀크셰이크 이야기 기억하죠?' },
      { speaker: 'colleague_m', expression: 'default', text: '기능이 아니라 목적... 그 관점으로 보면 될 겁니다.' },
    ],
  },

  clear: {
    background: 'office_night',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '잘했어요, {playerName}님. 문제 정의 감각이 빠르게 잡히고 있네요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '가설 수립, 5W1H, JTBD... 이 세 가지는 PM의 무기예요. 익숙해질수록 강력해져요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '오늘 정의한 문제를 내일은 우선순위로 정리할 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '내일은 "모든 걸 다 할 수 없을 때, 뭘 먼저 할 것인가"를 배울 거예요. 기대하세요!',
      },
      {
        speaker: 'player',
        text: '(문제를 정의하는 것만으로도 방향이 훨씬 명확해진다. 내일이 기대된다.)',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'excited', text: '오늘 JTBD 이야기 재밌었어요! 밀크셰이크 사례 저도 인상 깊었어요~' },
      { speaker: 'colleague_m', expression: 'smirk', text: '문제 정의가 명확하면 개발할 때도 편해요. 잘하고 계시네요.' },
    ],
  },

  event: {
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '업무가 끝나고, 카페에서 잠시 쉬는 시간.' },
        { speaker: 'narrator', text: '오늘 배운 문제 정의를 더 연습해볼 수도 있고, 동료들과 이야기할 수도 있다.' },
      ],
    },
    background: 'cafe',
    choices: [
      {
        text: '서아와 함께 유저 페르소나 토론하기',
        response: [
          {
            speaker: 'colleague_f',
            expression: 'excited',
            text: '오, 저도 JTBD 이야기 더 해보고 싶었어요! 디자이너 관점에서도 되게 중요하거든요.',
          },
          {
            speaker: 'colleague_f',
            expression: 'default',
            text: '저는 페르소나를 만들 때 항상 "이 사람이 진짜 원하는 게 뭘까"를 먼저 생각해요.',
          },
          {
            speaker: 'colleague_f',
            expression: 'cheer',
            text: '우리 팀이 문제 정의를 잘하면, 디자인도 훨씬 방향이 명확해져요. 같이 잘해봐요!',
          },
          {
            speaker: 'player',
            text: '(디자이너의 시각으로 본 문제 정의... 새로운 관점이 생겼다.)',
          },
        ],
        affectionChange: 3,
        xpChange: 5,
        hintChange: 0,
      },
      {
        text: '혼자 5W1H 프레임워크로 문제 정리하기',
        response: [
          { speaker: 'narrator', text: '카페 한 켠에서 노트를 펼치고, 오늘의 문제를 5W1H로 정리해봤다.' },
          {
            speaker: 'narrator',
            text: 'Who: 신규 가입자 / What: 핵심 기능을 찾지 못함 / When: 가입 후 첫 3일...',
          },
          { speaker: 'narrator', text: '프레임워크에 맞춰 쓰니 문제가 한결 선명해졌다.' },
          { speaker: 'player', text: '(혼자 정리하니 머릿속이 깔끔해진다. 내일 발표할 때 써먹어야지.)' },
        ],
        affectionChange: -1,
        xpChange: 8,
        hintChange: 1,
      },
      {
        text: '건우에게 개발자 관점의 문제 정의 물어보기',
        response: [
          {
            speaker: 'colleague_m',
            expression: 'default',
            text: '문제 정의요? 개발자 입장에서는 "재현 가능한 조건"이 중요해요.',
          },
          {
            speaker: 'colleague_m',
            expression: 'serious',
            text: '"온보딩이 안 좋다"보다 "가입 후 3일 내 핵심 기능 미사용 시 이탈률 60%"가 훨씬 도움돼요.',
          },
          {
            speaker: 'colleague_m',
            expression: 'smirk',
            text: '구체적인 문제 정의가 오면, 저는 바로 솔루션을 떠올릴 수 있거든요. 그게 좋은 기획이에요.',
          },
          { speaker: 'player', text: '(개발자가 원하는 문제 정의의 수준을 알게 됐다. 실무에서 바로 써먹을 수 있겠다.)' },
        ],
        affectionChange: 2,
        xpChange: 8,
        hintChange: 0,
      },
    ],
  },
}
