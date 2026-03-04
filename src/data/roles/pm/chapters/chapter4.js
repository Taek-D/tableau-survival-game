export const chapter4 = {
  id: 4,
  title: '우선순위 결정',
  subtitle: 'Impact와 Effort 사이에서',
  part: 2,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      { speaker: 'narrator', text: '4일차 아침. 자리에 앉자마자 슬랙 알림이 쏟아진다.' },
      {
        speaker: 'narrator',
        text: '"다국어 지원 언제 되나요?" "AI 추천 기능 요청합니다" "PDF 내보내기 필요해요"...',
      },
      {
        speaker: 'player',
        text: '(기능 요청이 이렇게 많다고...? 다 하려면 1년은 걸리겠는데.)',
      },
      {
        speaker: 'mentor_pm',
        characters: [{ id: 'mentor_pm', position: 'center' }],
        expression: 'default',
        text: '좋은 아침! 슬랙 봤죠? 기능 요청이 한가득이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '현실적으로 우리 팀이 이번 분기에 할 수 있는 건 2~3개뿐이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '그래서 오늘은 "선택의 기술"을 배울 거예요. 모든 걸 다 할 수 없을 때, 뭘 먼저 하느냐.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '이게 PM의 가장 중요한 역량 중 하나예요. 회의실로 갈까요?',
      },
      {
        speaker: 'player',
        text: '(모든 걸 다 할 수 없다... 그럼 뭘 기준으로 고르는 걸까?)',
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
        text: '우선순위를 정하는 프레임워크는 여러 가지가 있어요. 오늘 세 가지를 다룰 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '첫 번째, Impact/Effort 매트릭스. 이건 가장 직관적인 방법이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '가로축에 Effort(투입 노력), 세로축에 Impact(영향력)를 놓고 4사분면으로 나눠요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'Quick Wins: 높은 영향, 낮은 노력 — 이걸 먼저 하는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'Major Projects: 높은 영향, 높은 노력 — 로드맵에 넣고 계획적으로 진행해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'Fill-Ins: 낮은 영향, 낮은 노력 — 여유 있을 때 해도 돼요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: 'Thankless Tasks: 낮은 영향, 높은 노력 — 이건 되도록 안 하는 게 맞아요.',
      },
      {
        speaker: 'player',
        text: '직관적이네요. 근데 Impact나 Effort를 어떻게 객관적으로 측정하죠?',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '좋은 질문이에요! 그래서 두 번째 프레임워크, RICE가 있어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'RICE는 Reach(도달 사용자 수) × Impact(영향력) × Confidence(확신도) / Effort(투입 공수)로 점수를 계산해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '특히 Confidence가 중요해요. 데이터 없이 감으로 추정한 건 Confidence를 낮춰야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '이렇게 하면 불확실한 아이디어가 과대평가되는 걸 방지할 수 있어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '마지막으로 MoSCoW 방법. Must have, Should have, Could have, Won\'t have로 나누는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '실무에서는 이 세 가지를 상황에 맞게 섞어서 써요. 정답은 없지만 기준은 있는 거죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '자, 이제 직접 우선순위를 매겨볼까요? 실전이 최고의 연습이에요.',
      },
    ],
  },

  problems: ['pm_quiz_08', 'pm_roadmap_01'],

  bossChallenge: 'pm_roadmap_02',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '마지막 과제예요. 이번엔 실제 백로그를 가지고 RICE 관점으로 우선순위를 매겨보세요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '5개 기능을 4개 사분면에 배치해야 해요. Reach, Impact, Confidence, Effort를 종합적으로 고려하세요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '정답이 하나만 있는 건 아니지만, 논리적으로 설명할 수 있어야 해요. 파이팅!',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'cheer', text: '우선순위 정하는 거 저도 항상 고민이에요. 같이 힘내요!' },
      { speaker: 'colleague_m', expression: 'serious', text: '로딩 최적화는... 개발자로서 한 표 던지고 싶네요. 화이팅.' },
    ],
  },

  clear: {
    background: 'office_night',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '훌륭해요! 우선순위 감각이 빠르게 잡히고 있네요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'Impact/Effort 매트릭스, RICE, MoSCoW... 이 프레임워크들은 도구일 뿐이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '중요한 건, 왜 이걸 먼저 하는지를 팀과 이해관계자에게 설명할 수 있는 능력이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '내일은 드디어 기획의 꽃, PRD 작성이에요. 오늘까지 정의한 문제와 우선순위를 문서로 만들어볼 거예요!',
      },
      {
        speaker: 'player',
        text: '(우선순위를 정하는 것도 기술이구나. 내일은 PRD... 드디어 기획 문서를 쓴다.)',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'excited', text: '내일 PRD 작성이라니! 디자이너로서 기대돼요. 좋은 PRD가 좋은 디자인을 만들거든요~' },
      { speaker: 'colleague_m', expression: 'smirk', text: 'PRD가 명확하면 개발이 편해져요. 기대하겠습니다.' },
    ],
  },

  event: {
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '퇴근 시간이 다가왔다. 오늘 배운 우선순위 프레임워크가 머릿속에서 맴돈다.' },
        { speaker: 'narrator', text: '카페에서 잠시 쉬며 하루를 정리할 시간이다.' },
      ],
    },
    background: 'cafe',
    choices: [
      {
        text: '서아, 건우와 함께 기능 우선순위 토론하기',
        response: [
          {
            speaker: 'colleague_f',
            expression: 'excited',
            text: '오, 좋아요! 저도 디자인 관점에서 우선순위 의견이 있었어요.',
          },
          {
            speaker: 'colleague_m',
            expression: 'default',
            text: '개발 공수 입장에서 말씀드리면, 로딩 최적화가 생각보다 빨리 끝날 수 있어요.',
          },
          {
            speaker: 'colleague_f',
            expression: 'cheer',
            text: '역시 여러 관점에서 보면 다르네요! 이래서 스쿼드가 중요한 거구나~',
          },
          { speaker: 'player', text: '(디자이너, 개발자, PM 세 관점이 합쳐지니 판단이 더 정확해진다.)' },
        ],
        affectionChange: 3,
        xpChange: 5,
        hintChange: 0,
      },
      {
        text: '혼자 RICE 점수 계산 연습하기',
        response: [
          { speaker: 'narrator', text: '노트북을 열고, 오늘 배운 기능 목록으로 RICE 점수를 직접 계산해봤다.' },
          { speaker: 'narrator', text: 'Reach × Impact × Confidence / Effort... 숫자로 놓으니 비교가 명확해진다.' },
          { speaker: 'narrator', text: '연습할수록 어떤 항목에 높은 점수를 줘야 할지 감이 잡힌다.' },
          { speaker: 'player', text: '(프레임워크는 연습할수록 자연스러워진다. 내일 PRD에서 써먹어야지.)' },
        ],
        affectionChange: -1,
        xpChange: 10,
        hintChange: 1,
      },
      {
        text: '도현 팀장에게 실무 우선순위 사례 질문하기',
        response: [
          {
            speaker: 'mentor_pm',
            expression: 'default',
            text: '실무 사례요? 작년에 비슷한 상황이 있었어요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'serious',
            text: '모두가 AI 기능을 원했는데, 데이터를 보니 기본 성능 개선이 먼저였어요. RICE 점수가 압도적이었거든요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'smile',
            text: '화려한 기능보다 사용자가 진짜 필요로 하는 걸 먼저 하는 게 PM의 용기예요.',
          },
          { speaker: 'player', text: '(데이터 기반 의사결정의 힘... 감이 아니라 근거로 설득하는 거구나.)' },
        ],
        affectionChange: 2,
        xpChange: 8,
        hintChange: 0,
      },
    ],
  },
}
