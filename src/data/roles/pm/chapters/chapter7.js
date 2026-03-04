export const chapter7 = {
  id: 7,
  title: '디자인 개발 협업',
  subtitle: '함께 만드는 제품',
  part: 3,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'narrator',
        text: '2주차 화요일. 오늘은 팀 전체가 함께 움직이는 날이다.',
      },
      {
        speaker: 'narrator',
        text: '서아의 디자인 시안이 완성됐고, 건우가 개발 준비를 마쳤다. 이제 PM이 다리를 놓을 차례.',
      },
      {
        speaker: 'mentor_pm',
        characters: [{ id: 'mentor_pm', position: 'center' }],
        expression: 'default',
        text: '오늘은 정말 중요한 날이에요, {playerName}님.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: 'PM은 혼자 일하는 게 아니에요. 팀과 함께 만들어야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '디자이너의 의도를 개발자에게 정확히 전달하고, 개발의 제약을 디자이너에게 설명하는 것. 그게 PM의 핵심 역할이에요.',
      },
      {
        speaker: 'player',
        text: '(디자인과 개발 사이의 다리... 생각보다 섬세한 역할이겠구나.)',
      },
      {
        speaker: 'colleague_f',
        characters: [
          { id: 'colleague_f', position: 'left' },
          { id: 'mentor_pm', position: 'center' },
          { id: 'colleague_m', position: 'right' },
        ],
        expression: 'excited',
        text: '온보딩 화면 디자인 완성했어요! 오늘 같이 리뷰해주실 거죠?',
      },
      {
        speaker: 'colleague_m',
        expression: 'default',
        text: '디자인 시안 보고 개발 스펙 잡아야 하는데, 핸드오프 문서 준비됐어요?',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '다들 준비가 잘 돼 있네요. 자, 회의실에서 자세히 이야기해봐요.',
      },
      {
        speaker: 'narrator',
        text: '세 사람이 회의실로 향한다. 오늘의 목표는 디자인 핸드오프와 개발 스펙 리뷰.',
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
        text: '회의실 모니터에 서아의 Figma 디자인 시안이 띄워져 있다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '오늘의 첫 번째 주제, 디자인 핸드오프예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '핸드오프란, 디자이너가 완성한 디자인을 개발자에게 전달하는 과정이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '단순히 파일을 던지는 게 아니에요. Figma에서 간격, 폰트, 컬러, 인터랙션 스펙을 모두 명시해야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: 'PM의 역할은? PRD에 적은 유저 스토리와 인수조건이 디자인에 제대로 반영됐는지 확인하는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '두 번째 주제, 개발 스펙 리뷰. 디자인을 받은 개발자가 구현 계획을 세우는 단계예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'PM은 여기서 기획 의도를 설명하고, 엣지 케이스나 예외 상황을 함께 논의해야 해요.',
      },
      {
        speaker: 'player',
        text: '(엣지 케이스... 예를 들면 인터넷이 끊겼을 때, 입력값이 비었을 때 같은 거겠지.)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '바로 그거예요. 예외 상황을 미리 정의하면 개발 중 혼란을 줄일 수 있어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '세 번째, QA 프로세스. 개발이 끝나면 품질 검증을 해야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'QA 체크리스트를 PM이 미리 만들어두면, 테스트할 때 빠뜨리는 항목이 없어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '마지막으로, 협업의 핵심 원칙. "배경(Context)을 공유하라".',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '"이렇게 해주세요"보다 "이런 이유로 이렇게 하면 좋겠어요"가 훨씬 좋은 커뮤니케이션이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '자, 그럼 오늘 배운 내용을 확인해볼까요?',
      },
    ],
  },

  problems: ['pm_quiz_13', 'pm_text_05'],

  bossChallenge: 'pm_text_06',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '마지막 과제예요. 이건 실무에서 매일 하는 일이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'QA 중에 버그를 발견했다고 가정해보세요. 제대로 된 버그 리포트를 작성해보세요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '개발자가 바로 이해하고 수정할 수 있도록 명확하게 작성하는 게 포인트예요.',
      },
    ],
    colleagueLine: [
      {
        speaker: 'colleague_f',
        expression: 'worried',
        text: '버그 리포트... 저도 처음엔 어떻게 쓰는지 몰랐어요. 파이팅!',
      },
      {
        speaker: 'colleague_m',
        expression: 'serious',
        text: '재현 단계만 명확하면 솔직히 금방 고칠 수 있어요. 기대할게요.',
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
        text: '{playerName}님, 오늘 정말 잘했어요. 디자인-개발 협업의 핵심을 제대로 경험했어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '핸드오프, 스펙 리뷰, QA... PM이 팀의 허브라는 걸 느꼈죠?',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '좋은 PM은 혼자 빛나는 게 아니라, 팀 전체가 빛나게 만드는 사람이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '내일은 드디어 런칭이에요! 우리가 만든 제품을 세상에 내보내는 날.',
      },
      {
        speaker: 'player',
        text: '(내일이면 런칭... 2주가 이렇게 빨리 지나가다니. 떨리면서도 기대된다.)',
      },
    ],
    colleagueLine: [
      {
        speaker: 'colleague_f',
        expression: 'excited',
        text: '내일 런칭이라니! 저 오늘 밤에 잠 못 잘 것 같아요!',
      },
      {
        speaker: 'colleague_m',
        expression: 'excited',
        text: '배포 준비 다 끝냈어요. 내일은 버튼만 누르면 됩니다.',
      },
    ],
  },

  event: {
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '업무가 끝나고, 팀원들과 카페에 모였다.' },
        { speaker: 'narrator', text: '내일이면 런칭. 마지막 밤, 무엇을 할까.' },
      ],
    },
    background: 'cafe',
    choices: [
      {
        text: '서아와 디자인 디테일 다듬기',
        response: [
          {
            speaker: 'colleague_f',
            expression: 'default',
            text: '여기 온보딩 3단계 트랜지션이 좀 아쉬운데... 같이 봐줄래요?',
          },
          {
            speaker: 'player',
            text: '이 부분 페이드인으로 바꾸면 자연스러울 것 같아요.',
          },
          {
            speaker: 'colleague_f',
            expression: 'excited',
            text: '오, 맞아요! 역시 {playerName}님 감각 있어요!',
          },
          {
            speaker: 'player',
            text: '(디자이너와 직접 이야기하니 훨씬 좋은 결과물이 나온다.)',
          },
        ],
        affectionChange: 3,
        xpChange: 5,
        hintChange: 0,
      },
      {
        text: '건우와 런칭 전 QA 최종 점검',
        response: [
          {
            speaker: 'colleague_m',
            expression: 'default',
            text: '런칭 전에 한 번 더 돌려볼까요? 제가 체크리스트 있어요.',
          },
          {
            speaker: 'player',
            text: '좋아요! 특히 모바일 반응형 쪽 한 번 더 보고 싶었어요.',
          },
          {
            speaker: 'colleague_m',
            expression: 'smirk',
            text: '꼼꼼하네요. PM이 이 정도면 개발자는 편합니다.',
          },
          {
            speaker: 'player',
            text: '(빈틈없이 준비하면 런칭 때 마음이 놓이겠지.)',
          },
        ],
        affectionChange: 2,
        xpChange: 8,
        hintChange: 1,
      },
      {
        text: '혼자 런칭 체크리스트 정리',
        response: [
          {
            speaker: 'narrator',
            text: '카페 한켠에서 런칭 체크리스트를 하나씩 점검했다.',
          },
          {
            speaker: 'narrator',
            text: '기능 테스트, 성능 확인, 롤백 플랜, 모니터링 대시보드 세팅...',
          },
          {
            speaker: 'narrator',
            text: '하나하나 체크할 때마다 자신감이 생겼다.',
          },
          {
            speaker: 'player',
            text: '(내일 런칭, 준비는 완벽하다. 이제 실행만 남았다.)',
          },
        ],
        affectionChange: -1,
        xpChange: 10,
        hintChange: 1,
      },
    ],
  },
}
