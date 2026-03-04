export const chapter6 = {
  id: 6,
  title: '스프린트 운영',
  subtitle: '애자일의 심장',
  part: 3,
  background: 'standup',

  opening: {
    background: 'standup',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      { speaker: 'narrator', text: '2주차 월요일 아침. 사무실 분위기가 달라졌다.' },
      {
        speaker: 'narrator',
        text: '벽면의 스프린트 보드에 새로운 포스트잇들이 가득하고, 팀원들의 눈빛에 활기가 넘친다.',
      },
      {
        speaker: 'mentor_pm',
        characters: [{ id: 'mentor_pm', position: 'center' }],
        expression: 'smile',
        text: '좋은 아침이에요, {playerName}님! 드디어 2주차가 시작됐어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '지난주에 배운 걸 이제 실행에 옮길 때예요. 오늘부터 진짜 스프린트가 돌아갑니다.',
      },
      {
        speaker: 'player',
        text: '(스프린트... 지난주에 계획한 걸 실제로 실행하는 단계구나.)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '기획만 잘하면 끝일까요? 아니에요. 실행이 뒷받침되지 않으면 아무리 좋은 기획도 소용없어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '오늘은 애자일의 심장, 스크럼 프레임워크를 직접 체험해볼 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '데일리 스탠드업, 스프린트 계획, 번다운 차트, 회고... 하나씩 같이 해봐요.',
      },
      {
        speaker: 'narrator',
        text: '도현 팀장이 스탠드업 존으로 걸어간다. 이미 서아와 건우가 기다리고 있다.',
      },
      {
        speaker: 'colleague_f',
        characters: [
          { id: 'mentor_pm', position: 'left' },
          { id: 'colleague_f', position: 'center' },
          { id: 'colleague_m', position: 'right' },
        ],
        expression: 'cheer',
        text: '드디어 본격 스프린트! 저도 설레요!',
      },
      {
        speaker: 'colleague_m',
        expression: 'default',
        text: '스프린트 백로그 정리는 돼 있죠? 그래야 바로 들어갈 수 있는데.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '건우 말이 맞아요. 자, 그럼 회의실로 이동해서 오늘 브리핑을 시작하죠.',
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
        text: '회의실 화이트보드에 "스크럼 프레임워크"라고 크게 적혀 있다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '스크럼은 애자일 방법론 중 가장 많이 쓰이는 프레임워크예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '핵심 개념 세 가지. 스프린트, 백로그, 데일리 스탠드업.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '스프린트는 보통 1~4주 단위의 개발 주기예요. 우리 팀은 2주 스프린트를 씁니다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '스프린트 백로그는 이번 스프린트에서 완료할 작업 목록이에요. 유저 스토리 단위로 관리하죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '데일리 스탠드업은 매일 아침 15분, 서서 하는 미팅이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '스탠드업에서는 딱 세 가지만 공유해요. 어제 한 일, 오늘 할 일, 블로커.',
      },
      {
        speaker: 'player',
        text: '(블로커... 진행을 막는 장애물 같은 거겠지?)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '맞아요. 블로커는 혼자 해결하기 어려운 문제를 뜻해요. 빨리 공유해야 팀이 도와줄 수 있죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '그리고 스프린트 진행 상황을 한눈에 보여주는 게 번다운 차트예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '번다운 차트는 남은 작업량을 시간축으로 보여줘요. 이상적인 선보다 위에 있으면 지연 신호예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '마지막으로, 스프린트가 끝나면 반드시 회고(Retrospective)를 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '회고는 "잘한 점, 개선할 점, 시도할 점"을 돌아보는 시간이에요. KPT라고도 하죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '자, 개념을 잘 이해했는지 문제로 확인해볼까요?',
      },
    ],
  },

  problems: ['pm_quiz_10', 'pm_quiz_11'],

  bossChallenge: 'pm_quiz_12',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '좋아요, 마지막 문제예요. 이번엔 실전 상황이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '스프린트를 운영하다 보면 예상치 못한 긴급 요청이 들어올 때가 있어요. 그때 PM은 어떻게 해야 할까요?',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '정답은 하나가 아닐 수 있어요. 하지만 가장 적절한 판단이 뭔지 생각해보세요.',
      },
    ],
    colleagueLine: [
      {
        speaker: 'colleague_f',
        expression: 'worried',
        text: '이런 상황 실제로 자주 있더라고요... 저도 궁금해요!',
      },
      {
        speaker: 'colleague_m',
        expression: 'serious',
        text: '개발자 입장에선... 스프린트 중간에 추가되면 솔직히 힘들긴 하죠.',
      },
    ],
  },

  clear: {
    background: 'office_night',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '오늘 하루, 스프린트의 핵심을 제대로 익혔어요. 대단해요, {playerName}님.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '스크럼, 데일리, 번다운 차트, 회고... 이게 애자일의 심장이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '내일은 디자이너, 개발자와 직접 협업하는 법을 배울 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: 'PM은 혼자가 아니에요. 팀과 함께 만들어야 진짜 제품이 나오거든요.',
      },
      {
        speaker: 'player',
        text: '(스프린트를 직접 운영해보니 감이 온다. 내일 협업이 기대된다.)',
      },
    ],
    colleagueLine: [
      {
        speaker: 'colleague_f',
        expression: 'excited',
        text: '내일은 드디어 같이 디자인 리뷰해요! 기대돼요!',
      },
      {
        speaker: 'colleague_m',
        expression: 'smirk',
        text: '스펙 문서 잘 써오시면... 구현은 제가 책임지죠.',
      },
    ],
  },

  event: {
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '업무가 끝나고, 팀원들과 카페로 향했다.' },
        {
          speaker: 'narrator',
          text: '오늘 하루 스프린트를 돌리며 느낀 것들이 머릿속에 맴돈다.',
        },
      ],
    },
    background: 'cafe',
    choices: [
      {
        text: '스프린트 보드를 혼자 복기하기',
        response: [
          {
            speaker: 'narrator',
            text: '카페에서 노트북을 열고 오늘의 스프린트 보드를 다시 살펴봤다.',
          },
          {
            speaker: 'narrator',
            text: '각 유저 스토리의 진행 상태, 예상 vs 실제 소요 시간을 비교하며 메모했다.',
          },
          {
            speaker: 'narrator',
            text: '혼자 복기하니 놓쳤던 포인트가 보이기 시작했다.',
          },
          {
            speaker: 'player',
            text: '(내일 데일리 스탠드업에서 이 인사이트를 공유해야겠다.)',
          },
        ],
        affectionChange: -1,
        xpChange: 10,
        hintChange: 1,
      },
      {
        text: '서아, 건우와 스프린트 회고 이야기',
        response: [
          {
            speaker: 'colleague_f',
            expression: 'default',
            text: '오늘 처음 스프린트 돌려보니까 어땠어요?',
          },
          {
            speaker: 'colleague_m',
            expression: 'smirk',
            text: '생각보다 PM이 신경 쓸 게 많더라? 번다운 차트도 체크하고.',
          },
          {
            speaker: 'player',
            text: '솔직히 긴장했는데, 같이 하니까 든든했어요.',
          },
          {
            speaker: 'colleague_f',
            expression: 'cheer',
            text: '우리 팀 케미 최고! 내일도 화이팅!',
          },
        ],
        affectionChange: 3,
        xpChange: 5,
        hintChange: 0,
      },
      {
        text: '도현 팀장에게 스프린트 운영 팁 묻기',
        response: [
          {
            speaker: 'mentor_pm',
            expression: 'smile',
            text: '(슬랙 답장) 좋은 질문이에요. 스프린트에서 가장 중요한 건 "완료의 정의"를 명확히 하는 거예요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'default',
            text: '"Done"의 기준이 모호하면, 스프린트 끝날 때 혼란이 생겨요. 팀과 미리 합의하세요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'impressed',
            text: '이런 질문을 하는 건, 실전 감각이 생기고 있다는 뜻이에요. 잘하고 있어요.',
          },
          {
            speaker: 'player',
            text: '(완료의 정의... 내일 팀과 꼭 맞춰봐야겠다.)',
          },
        ],
        affectionChange: 2,
        xpChange: 8,
        hintChange: 0,
      },
    ],
  },
}
