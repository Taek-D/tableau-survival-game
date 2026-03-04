export const chapter8 = {
  id: 8,
  title: '런칭과 회고',
  subtitle: '세상에 내보내는 순간',
  part: 3,
  background: 'presentation',

  opening: {
    background: 'presentation',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      { speaker: 'narrator', text: '2주차 수요일. 마지막 날이 밝았다.' },
      {
        speaker: 'narrator',
        text: '사무실에 들어서자, 벽면 모니터에 "Launch Day"라는 글씨가 크게 떠 있다.',
      },
      {
        speaker: 'narrator',
        text: '심장이 빠르게 뛴다. 긴장과 설렘이 동시에 밀려온다.',
      },
      {
        speaker: 'mentor_pm',
        characters: [{ id: 'mentor_pm', position: 'center' }],
        expression: 'smile',
        text: '{playerName}님, 오늘이 우리 여정의 마지막 날이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '2주 동안 정말 많이 성장했어요. 오늘, 최선을 다해봅시다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '런칭이란 단순히 배포 버튼을 누르는 게 아니에요. 그 전후로 해야 할 일이 산더미예요.',
      },
      {
        speaker: 'colleague_f',
        characters: [
          { id: 'colleague_f', position: 'left' },
          { id: 'mentor_pm', position: 'center' },
          { id: 'colleague_m', position: 'right' },
        ],
        expression: 'excited',
        text: '드디어 런칭이다! 우리가 만든 제품이 세상에 나가요!',
      },
      {
        speaker: 'colleague_m',
        expression: 'serious',
        text: '배포 파이프라인 최종 확인 완료. 롤백도 준비돼 있어요.',
      },
      {
        speaker: 'player',
        text: '(2주 전 아무것도 몰랐던 내가, 지금은 런칭을 앞두고 있다니...)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '다들 든든하네요. 자, 회의실에서 마지막 브리핑 하고 런칭 준비합시다!',
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
        text: '회의실 화이트보드에 런칭 체크리스트가 빼곡히 적혀 있다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '런칭 전에 반드시 확인해야 할 것들을 정리해볼게요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '첫 번째, 런칭 체크리스트. 기능 QA, 성능 테스트, 보안 점검, 법적 검토까지 모두 통과해야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '두 번째, 롤백 플랜. 문제가 생기면 이전 버전으로 즉시 되돌릴 수 있어야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '"최악의 상황을 대비하는 것"이 프로의 자세예요. 롤백 없는 런칭은 안전벨트 없이 운전하는 것과 같아요.',
      },
      {
        speaker: 'player',
        text: '(롤백 플랜... 만약을 대비하는 게 PM의 책임이구나.)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '세 번째, A/B 테스트. 런칭 후에 어떤 버전이 더 효과적인지 데이터로 검증하는 방법이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: 'A/B 테스트의 핵심은 한 번에 하나의 변수만 바꾸는 거예요. 그래야 인과관계를 알 수 있거든요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '네 번째, KPI 모니터링 대시보드. 런칭 후 핵심 지표를 실시간으로 추적해야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '크래시율, 로드 시간, 온보딩 완료율, 기능 사용률... 이 지표들이 정상인지 바로 확인할 수 있어야 하죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '다섯 번째, 스프린트 회고. 런칭이 끝나면 2주간의 여정을 돌아봐야 해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: 'KPT 회고 기억하죠? Keep, Problem, Try. 이걸 통해 다음 스프린트가 더 나아지는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '자, 마지막 문제들을 풀어보고, 진짜 런칭을 합시다!',
      },
    ],
  },

  problems: ['pm_quiz_14', 'pm_roadmap_03'],

  bossChallenge: 'pm_text_07',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '마지막 과제예요. 2주간의 PM 여정을 돌아보는 회고를 작성해보세요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'KPT 형식으로, 잘한 점(Keep), 개선할 점(Problem), 시도할 점(Try)을 각각 하나씩.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '이 회고가 {playerName}님의 PM 여정에서 가장 값진 자산이 될 거예요.',
      },
    ],
    colleagueLine: [
      {
        speaker: 'colleague_f',
        expression: 'cheer',
        text: '마지막 과제! 같이한 2주가 눈 깜짝할 사이였어요. 멋지게 마무리해요!',
      },
      {
        speaker: 'colleague_m',
        expression: 'excited',
        text: '회고를 제대로 하는 PM... 진짜 프로예요. 기대할게요.',
      },
    ],
  },

  clear: {
    background: 'launch_party',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'narrator',
        text: '런칭 버튼이 눌렸다. 모니터에 실시간 트래픽 그래프가 올라가기 시작한다.',
      },
      {
        speaker: 'narrator',
        text: '사무실 곳곳에서 환호성이 터져 나온다. 2주간의 노력이 마침내 결실을 맺었다.',
      },
      {
        speaker: 'mentor_pm',
        characters: [
          { id: 'colleague_f', position: 'left' },
          { id: 'mentor_pm', position: 'center' },
          { id: 'colleague_m', position: 'right' },
        ],
        expression: 'impressed',
        text: '{playerName}님, 해냈어요. 정말 해냈어요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '2주 전 첫 출근하던 날이 생각나요? 그때는 DAU가 뭔지도 몰랐잖아요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '유저 리서치, 문제 정의, 우선순위, PRD, 스프린트, 협업, 그리고 런칭까지.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: 'PM의 모든 여정을 직접 경험했어요. 이건 정말 대단한 일이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '{playerName}님은 이미 훌륭한 PM의 자질을 갖고 있어요. 자신감을 가지세요.',
      },
      {
        speaker: 'colleague_f',
        expression: 'excited',
        text: '우리 같이 만든 제품이 세상에 나갔어요! 정말 감동이에요...!',
      },
      {
        speaker: 'colleague_m',
        expression: 'excited',
        text: '솔직히 처음엔 걱정했는데... {playerName}님 기획서 받고 마음이 바뀌었어요. 같이 일해서 즐거웠습니다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '이건 끝이 아니에요. {playerName}님의 PM 여정은 이제 시작이에요. 어디서든 잘 할 거라 믿어요.',
      },
      {
        speaker: 'player',
        text: '(2주라는 짧은 시간이었지만, 평생 잊지 못할 경험이었다.)',
      },
      {
        speaker: 'player',
        text: '(도현 팀장님, 서아, 건우... 이 팀과 함께해서 정말 행복했다.)',
      },
      {
        speaker: 'narrator',
        text: '{playerName}의 PM 여정이 막을 내렸다. 하지만 이것은 끝이 아닌, 새로운 시작이다.',
      },
    ],
    colleagueLine: [
      {
        speaker: 'colleague_f',
        expression: 'cheer',
        text: '다음에 또 같이 일해요! 약속! 진짜 최고의 PM이었어요!',
      },
      {
        speaker: 'colleague_m',
        expression: 'smirk',
        text: '...또 같이 하죠. 근데 기획서는 항상 이번처럼 깔끔하게 부탁드립니다.',
      },
    ],
  },

  event: {
    intro: {
      dialogues: [
        {
          speaker: 'narrator',
          text: '런칭 파티가 끝나고, 팀원들과 함께 옥상으로 올라왔다.',
        },
        {
          speaker: 'narrator',
          text: '서울의 야경이 한눈에 들어온다. 2주간의 여정을 돌아보는 마지막 순간.',
        },
      ],
    },
    background: 'rooftop',
    choices: [
      {
        text: '팀원들에게 감사 인사 전하기',
        response: [
          {
            speaker: 'player',
            text: '도현 팀장님, 서아, 건우. 2주 동안 정말 감사했어요.',
          },
          {
            speaker: 'player',
            text: '여러분 덕분에 PM이 어떤 일인지 진심으로 느낄 수 있었어요.',
          },
          {
            speaker: 'colleague_f',
            expression: 'shy',
            text: '저야말로... 덕분에 더 좋은 디자인을 만들 수 있었어요.',
          },
          {
            speaker: 'colleague_m',
            expression: 'flustered',
            text: '...감사는 무슨. 다음에도 같이 하면 되죠.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'smile',
            text: '이 팀의 PM으로 {playerName}님이 와줘서 정말 다행이에요. 앞으로도 응원할게요.',
          },
          {
            speaker: 'player',
            text: '(이 순간을, 이 사람들을 평생 기억할 것이다.)',
          },
        ],
        affectionChange: 5,
        xpChange: 5,
        hintChange: 0,
      },
      {
        text: '야경을 보며 나만의 회고 쓰기',
        response: [
          {
            speaker: 'narrator',
            text: '노트를 꺼내 조용히 2주간의 여정을 정리했다.',
          },
          {
            speaker: 'narrator',
            text: 'DAU를 배운 첫날부터, 유저 인터뷰, PRD, 스프린트, 그리고 오늘의 런칭까지.',
          },
          {
            speaker: 'narrator',
            text: '한 줄 한 줄 적어 내려갈 때마다 가슴이 뜨거워졌다.',
          },
          {
            speaker: 'player',
            text: '(이 회고는 나의 PM 커리어에서 가장 소중한 첫 페이지가 될 것이다.)',
          },
        ],
        affectionChange: 0,
        xpChange: 10,
        hintChange: 1,
      },
      {
        text: '멘토에게 앞으로의 진로 상담받기',
        response: [
          {
            speaker: 'player',
            text: '팀장님, 저 앞으로 어떤 PM이 되면 좋을까요?',
          },
          {
            speaker: 'mentor_pm',
            expression: 'default',
            text: '좋은 PM은 항상 "왜?"를 묻는 사람이에요. 기술이나 방법론은 바뀌어도, 본질은 변하지 않아요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'serious',
            text: '유저의 문제에 공감하고, 데이터로 검증하고, 팀과 함께 해결하는 것. 그게 PM의 본질이에요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'impressed',
            text: '{playerName}님은 이미 그 자질을 갖고 있어요. 어디서든 빛날 거예요.',
          },
          {
            speaker: 'player',
            text: '(도현 팀장님의 말씀을 가슴 깊이 새기겠다. 나의 PM 여정은 이제 시작이다.)',
          },
        ],
        affectionChange: 3,
        xpChange: 8,
        hintChange: 0,
      },
    ],
  },
}
