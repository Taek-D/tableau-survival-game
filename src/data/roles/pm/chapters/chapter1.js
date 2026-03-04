export const chapter1 = {
  id: 1,
  title: '첫 출근, 제품 파악',
  subtitle: '온보딩과 첫 미션',
  part: 1,
  background: 'office_day',

  opening: {
    background: 'office_day',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      { speaker: 'narrator', text: '프로덕트랩. 데이터 기반으로 제품을 성장시키는 IT 스타트업.' },
      { speaker: 'narrator', text: '오늘은 {playerName}의 첫 출근날이다.' },
      {
        speaker: 'narrator',
        background: 'office_day',
        text: '엘리베이터 문이 열리자, 탁 트인 오픈 오피스가 눈에 들어온다.',
      },
      { speaker: 'narrator', text: '화이트보드에 빼곡한 스프린트 보드, 벽면의 대시보드 모니터들.' },
      {
        speaker: 'mentor_pm',
        characters: [{ id: 'mentor_pm', position: 'center' }],
        expression: 'smile',
        text: '안녕! {playerName}님이죠? 반가워요. 김도현이라고 합니다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '저는 여기서 시니어 PM을 맡고 있어요. 오늘부터 제가 온보딩을 도와드릴게요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '우리 팀은 B2C SaaS 제품을 만들고 있어요. 사용자가 약 50만 명 정도 되는 서비스예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'PM이 하는 일은 한마디로, "왜 만드는지"를 정의하고 "무엇을 만들지"를 결정하는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '개발자, 디자이너, 데이터 분석가... 다양한 직군과 협업해서 제품을 전진시키는 역할이죠.',
      },
      {
        speaker: 'player',
        text: '(생각보다 범위가 넓다... 긴장되지만 설레는 첫 출근이다.)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '너무 걱정 마세요. 처음부터 다 잘하는 사람은 없어요. 하나씩 배워가면 돼요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '자, 그럼 먼저 동료들부터 소개해드릴게요. 같이 일할 분들이에요.',
      },
    ],
  },

  colleagueGreeting: {
    background: 'office_day',
    characters: [
      { id: 'colleague_f', position: 'right' },
      { id: 'colleague_m', position: 'left' },
    ],
    dialogues: [
      {
        speaker: 'colleague_f',
        expression: 'cheer',
        text: '안녕하세요! 이서아예요, 프로덕트 디자이너! 같이 일하게 돼서 반가워요!',
      },
      {
        speaker: 'colleague_m',
        expression: 'default',
        text: '박건우입니다. 프론트엔드 개발 담당이에요. 잘 부탁드립니다.',
      },
      {
        speaker: 'colleague_f',
        expression: 'excited',
        text: '우리 셋이 한 스쿼드로 붙을 거예요. 궁금한 거 있으면 언제든 물어봐요!',
      },
      {
        speaker: 'colleague_m',
        expression: 'smirk',
        text: '기획 문서만 깔끔하게 내려주시면... 전 묵묵히 구현합니다.',
      },
      {
        speaker: 'colleague_f',
        expression: 'default',
        text: '건우 오빠 저러면서 사실 되게 꼼꼼해요. 스펙 빠지면 바로 슬랙 옵니다.',
      },
      {
        speaker: 'player',
        text: '(든든한 동료들이다. 이 팀이라면 잘 해낼 수 있을 것 같다.)',
      },
    ],
  },

  briefing: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'narrator',
        text: '김도현 PM이 회의실 화이트보드 앞으로 다가갔다.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '자, 그럼 본격적으로 우리 제품 현황을 살펴볼까요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: 'PM이 가장 먼저 봐야 할 건 핵심 지표예요. DAU, MAU부터 시작하죠.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: 'DAU는 일간 활성 사용자, MAU는 월간 활성 사용자를 뜻해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '우리 서비스의 DAU/MAU 비율은 약 25%예요. 이게 뭘 의미할까요?',
      },
      {
        speaker: 'player',
        text: '(매일 접속하는 사용자가 전체의 4분의 1... 괜찮은 건가?)',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: 'SaaS 평균이 15~20%니까, 우리는 나쁘지 않은 편이에요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '다음은 퍼널이에요. 가입부터 결제까지, 각 단계에서 얼마나 이탈하는지를 보는 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '지금 우리의 가장 큰 이슈는 "온보딩 완료율"이에요. 가입자의 40%가 첫 주에 이탈해요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '이 문제를 해결하는 게 이번 분기 우리 팀의 핵심 목표예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '자, 그럼 기본 개념을 얼마나 이해했는지 간단히 확인해볼까요?',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '긴장하지 마세요. 틀려도 괜찮아요. 배우는 과정이니까.',
      },
    ],
  },

  problems: ['pm_quiz_01', 'pm_quiz_02', 'pm_text_01'],

  bossChallenge: 'pm_quiz_03',

  bossIntro: {
    background: 'meeting_room',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'serious',
        text: '좋아요, 마지막 문제예요. 조금 더 생각이 필요할 거예요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '이건 실무에서 실제로 판단해야 하는 상황이에요. 집중해서 풀어보세요.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '지금까지 배운 걸 떠올리면 충분히 풀 수 있어요.',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'cheer', text: '파이팅! 할 수 있어요!' },
      { speaker: 'colleague_m', expression: 'smirk', text: '마지막이라니까, 해보시죠.' },
    ],
  },

  clear: {
    background: 'office_night',
    characters: [{ id: 'mentor_pm', position: 'center' }],
    dialogues: [
      {
        speaker: 'mentor_pm',
        expression: 'impressed',
        text: '첫날치고 정말 잘했어요, {playerName}님.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: 'DAU, MAU, 퍼널, 리텐션... 이 지표들이 왜 중요한지 감 잡았죠?',
      },
      {
        speaker: 'mentor_pm',
        expression: 'default',
        text: '내일부터는 진짜 유저를 만나볼 거예요. 유저 리서치의 세계로.',
      },
      {
        speaker: 'mentor_pm',
        expression: 'smile',
        text: '오늘 수고 많았어요. 푹 쉬고 내일 봐요!',
      },
      {
        speaker: 'player',
        text: '(첫 날이 무사히 끝났다. 내일은 어떤 도전이 기다리고 있을까.)',
      },
    ],
    colleagueLine: [
      { speaker: 'colleague_f', expression: 'excited', text: '첫날 완전 잘했어요! 내일도 같이 힘내자!' },
      { speaker: 'colleague_m', expression: 'smirk', text: '...나쁘지 않은데요. 내일도 기대할게요.' },
    ],
  },

  event: {
    intro: {
      dialogues: [
        { speaker: 'narrator', text: '업무가 끝나고, 퇴근 시간이 다가왔다.' },
        { speaker: 'narrator', text: '첫 날을 어떻게 마무리할지 고민이 된다.' },
      ],
    },
    background: 'cafe',
    choices: [
      {
        text: '동료들과 저녁 식사',
        response: [
          { speaker: 'colleague_f', expression: 'excited', text: '같이 밥 먹으러 가요! 근처에 맛집 알아요!' },
          { speaker: 'colleague_m', expression: 'default', text: '오, 좋죠. 첫날이니까 제가 쏠게요.' },
          { speaker: 'colleague_f', expression: 'cheer', text: '건우 오빠가 쏜다! 얼른 가요!' },
          { speaker: 'player', text: '(동료들과 한층 가까워진 느낌이다. 좋은 팀이다.)' },
        ],
        affectionChange: 3,
        xpChange: 5,
        hintChange: 0,
      },
      {
        text: '혼자 제품 분석 더 하기',
        response: [
          { speaker: 'narrator', text: '혼자 사무실에 남아 제품을 꼼꼼히 살펴봤다.' },
          { speaker: 'narrator', text: '경쟁 서비스와 비교하며, 우리 제품의 강점과 약점을 메모했다.' },
          { speaker: 'narrator', text: '밤늦게 퇴근했지만, 제품에 대한 이해도가 한층 깊어졌다.' },
          { speaker: 'player', text: '(내일 미팅에서 더 좋은 의견을 낼 수 있을 것 같다.)' },
        ],
        affectionChange: -1,
        xpChange: 10,
        hintChange: 1,
      },
      {
        text: '멘토에게 질문 리스트 보내기',
        response: [
          { speaker: 'narrator', text: '퇴근 후, 오늘 궁금했던 점들을 정리해 슬랙으로 보냈다.' },
          {
            speaker: 'mentor_pm',
            expression: 'impressed',
            text: '(슬랙 답장) 와, 첫날부터 질문을 이렇게 정리하다니. 센스 있네요.',
          },
          {
            speaker: 'mentor_pm',
            expression: 'smile',
            text: '내일 아침에 하나씩 같이 살펴봐요. 좋은 질문들이에요.',
          },
          { speaker: 'player', text: '(멘토에게 좋은 인상을 남긴 것 같다. 뿌듯하다.)' },
        ],
        affectionChange: 2,
        xpChange: 8,
        hintChange: 0,
      },
    ],
  },
}
