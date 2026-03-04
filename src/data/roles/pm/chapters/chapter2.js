export const chapter2 = {
  id: 2,
  title: '유저 리서치',
  subtitle: '유저를 이해하는 첫 걸음',
  part: 1,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'narrator',
        text: '출근 2일차. 어제보다 발걸음이 한결 가볍다.',
      },
      {
        speaker: 'narrator',
        text: '{playerName}은 어제 배운 DAU, MAU, 퍼널 같은 지표들을 떠올리며 사무실에 들어섰다.',
      },
      {
        speaker: 'narrator',
        background: 'office_day',
        text: '책상에 앉자마자 슬랙 알림이 울렸다. 도현 PM의 메시지였다.',
      },
      {
        speaker: 'mentor_pm',
        characters: [{ id: 'mentor_pm', position: 'center' }],
        expression: 'smile',
        text: '좋은 아침! {playerName}님, 어제 수고 많았어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '어제는 숫자로 제품을 봤죠? 오늘은 숫자 뒤에 숨은 "사람"을 만나볼 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: 'PM에게 가장 위험한 건 "내가 곧 유저다"라는 착각이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '우리가 아무리 좋은 아이디어를 내도, 유저가 원하지 않으면 소용없거든요.',
      },
      {
        speaker: 'player',
        text: '(숫자 다음은 사람... 유저 리서치라는 건가.)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '오늘의 주제는 "유저 리서치"예요. 유저를 제대로 이해하는 첫 걸음이죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '회의실에서 기다리고 있을게요. 준비되면 오세요!',
      },
    ],
  },

  colleagueGreeting: null,

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'narrator',
        text: '김도현 PM이 화이트보드에 "유저 리서치" 세 글자를 크게 적었다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '자, 유저 리서치의 핵심은 "유저의 진짜 문제"를 찾는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '그 중에서도 오늘은 세 가지를 다룰 거예요. 유저 인터뷰, 페르소나, 고객 여정맵.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '먼저 유저 인터뷰. 가장 중요한 원칙은 "열린 질문"을 하는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '"이 기능 좋아요?" 같은 질문은 유도 질문이에요. 유저의 진짜 생각을 막아버리죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '대신 "이 기능을 마지막으로 쓴 게 언제예요?"처럼 경험을 물어봐야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '그리고 "5 Whys"라는 기법이 있어요. "왜?"를 다섯 번 반복하면 표면 아래 진짜 원인을 찾을 수 있어요.',
      },
      {
        speaker: 'player',
        text: '(왜를 다섯 번이나... 꽤 깊이 파고드는 방법이구나.)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '두 번째는 페르소나예요. 실제 리서치 데이터를 기반으로 만드는 가상의 대표 사용자상이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '이름, 나이, 직업, 행동 패턴, 핵심 니즈를 구체적으로 정의해요. 팀 전체가 같은 유저를 상상하기 위해서죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '중요한 건, 상상으로 만드는 게 아니라 실제 데이터에서 나와야 한다는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '마지막은 고객 여정맵(Customer Journey Map)이에요. 유저가 서비스를 처음 알게 된 순간부터 이탈까지, 각 단계에서 무엇을 느끼는지를 그려보는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '여정맵을 그리면 유저의 불편 포인트(Pain Point)가 한눈에 보여요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '자, 이론은 여기까지. 직접 문제를 풀어보면서 감을 잡아봐요!',
      },
    ],
  },

  problems: ['pm_quiz_04', 'pm_text_02'],

  bossChallenge: 'pm_quiz_05',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '좋아요. 마지막 문제는 페르소나의 핵심 원칙에 대한 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '실무에서 페르소나를 잘못 만들면 팀 전체가 엉뚱한 방향으로 갈 수 있어요. 신중하게 풀어보세요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '오늘 배운 내용을 떠올리면 충분히 답할 수 있을 거예요.',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'cheer', text: '파이팅! 페르소나, 어렵지 않아요!' },
      { speaker: 'colleague_m', expression: 'smirk', text: '데이터 기반이라는 키워드, 기억나죠?' },
    ],
  },

  clear: {
    background: 'office_night',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '오늘 정말 잘했어요, {playerName}님. 유저 리서치의 기본을 확실히 잡았네요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '유저 인터뷰, 페르소나, 고객 여정맵... 이 세 가지가 PM의 눈과 귀가 되어줄 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '내일은 유저의 문제를 구체적으로 정의하는 법을 배울 거예요. "문제 정의"의 세계로.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '오늘도 수고 많았어요. 푹 쉬고 내일 봐요!',
      },
      {
        speaker: 'player',
        text: '(유저를 이해하는 것이 이렇게 깊은 일이었다니. 내일은 문제 정의라... 점점 재밌어진다.)',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'excited', text: '페르소나 만드는 거 너무 재밌었어요! 내일도 같이 힘내자!' },
      { speaker: 'colleague_m', expression: 'default', text: '개발자도 유저를 이해해야 하는 시대라... 오늘 배운 거 유용하네요.' },
    ],
  },

  event: {
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '업무가 끝나고, 잠시 여유가 생겼다.' },
        { speaker: 'narrator', text: '이 시간을 어떻게 보낼지 고민된다.' },
      ],
    },
    background: 'cafe',
    choices: [
      {
        text: '동료와 유저 인터뷰 롤플레이',
        response: [
          {
            speaker: 'colleague_f',
            expression: 'excited',
            text: '오, 좋아요! 제가 유저 역할 할게요. 질문해보세요!',
          },
          {
            speaker: 'colleague_m',
            expression: 'default',
            text: '나도 끼워줘. 개발자 관점에서 피드백 해줄게.',
          },
          {
            speaker: 'colleague_f',
            expression: 'cheer',
            text: '이렇게 연습하니까 실전에서도 잘할 수 있을 것 같아요! 우리 팀 최고!',
          },
          {
            speaker: 'player',
            text: '(동료들과 함께하니 인터뷰 스킬이 빠르게 느는 것 같다.)',
          },
        ],
        affectionChange: 3,
        xpChange: 5,
        hintChange: 0,
      },
      {
        text: '혼자 경쟁사 유저 리뷰 분석',
        response: [
          {
            speaker: 'narrator',
            text: '혼자 카페에 남아 경쟁사 앱스토어 리뷰를 하나씩 읽어 내려갔다.',
          },
          {
            speaker: 'narrator',
            text: '부정적 리뷰에서 반복되는 키워드를 정리하자, 유저들의 공통된 불만이 보이기 시작했다.',
          },
          {
            speaker: 'narrator',
            text: '우리 서비스에도 비슷한 문제가 있을 수 있겠다는 인사이트를 메모했다.',
          },
          {
            speaker: 'player',
            text: '(내일 회의에서 이 분석 결과를 공유하면 좋은 반응을 얻을 수 있을 것 같다.)',
          },
        ],
        affectionChange: -1,
        xpChange: 10,
        hintChange: 1,
      },
      {
        text: '멘토에게 인터뷰 팁 요청',
        response: [
          {
            speaker: 'mentor_pm',
            expression: 'smile',
            text: '인터뷰 팁이요? 좋아요. 하나만 알려줄게요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'impressed',
            text: '인터뷰에서 가장 강력한 질문은 "그때 어떤 기분이었어요?"예요. 감정을 물으면 진짜 이야기가 나오거든요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'default',
            text: '그리고 침묵을 두려워하지 마세요. 유저가 생각할 시간을 줘야 깊은 답이 나와요.',
          },
          {
            speaker: 'player',
            text: '(감정을 묻는 것, 침묵을 기다리는 것... 간단하지만 강력한 팁이다.)',
          },
        ],
        affectionChange: 2,
        xpChange: 8,
        hintChange: 0,
      },
    ],
  },
}
