// Part 3 추가 퀴즈 문제 (Ch6-8)
export const part3QuizProblems = [
  {
    id: 'pm_quiz_10',
    type: 'quiz',
    chapter: 6,
    selectType: 'single',
    difficulty: 'intermediate',
    question: '스크럼에서 스프린트의 일반적인 기간은?',
    context: '애자일 스크럼의 기본 개념을 확인합니다.',
    options: [
      { id: 'a', text: '1일' },
      { id: 'b', text: '1-4주 (보통 2주)' },
      { id: 'c', text: '1-3개월' },
      { id: 'd', text: '정해진 기간 없이 기능 완료 시까지' },
    ],
    hint: '스프린트는 짧은 주기의 반복 개발입니다.',
    explanation:
      '스프린트는 보통 1-4주(일반적으로 2주) 단위로 진행됩니다.',
  },
  {
    id: 'pm_quiz_11',
    type: 'quiz',
    chapter: 6,
    selectType: 'single',
    difficulty: 'intermediate',
    question: '데일리 스탠드업 미팅에서 다루지 않는 것은?',
    context: '효과적인 데일리 스탠드업 운영법을 이해합니다.',
    options: [
      { id: 'a', text: '어제 한 일' },
      { id: 'b', text: '오늘 할 일' },
      { id: 'c', text: '상세한 기술적 논의와 문제 해결' },
      { id: 'd', text: '진행을 막는 블로커(Blocker)' },
    ],
    hint: '데일리 스탠드업은 15분 이내로 끝내야 합니다.',
    explanation:
      '데일리 스탠드업은 어제/오늘/블로커 3가지에 집중합니다. 기술 논의는 별도 미팅에서.',
  },
  {
    id: 'pm_quiz_12',
    type: 'quiz',
    chapter: 6,
    selectType: 'single',
    difficulty: 'advanced',
    isBoss: true,
    question:
      '스프린트 중간에 긴급 요청이 들어왔을 때 PM이 취해야 할 행동은?',
    context: '실제 스프린트 운영 중 상황 대처 능력을 평가합니다.',
    options: [
      { id: 'a', text: '긴급하므로 즉시 스프린트에 추가' },
      {
        id: 'b',
        text: '영향도를 평가하고 기존 백로그와 트레이드오프를 논의 후 결정',
      },
      { id: 'c', text: '다음 스프린트까지 무조건 대기' },
      { id: 'd', text: 'CEO 요청이면 무조건 수용' },
    ],
    hint: '스프린트 범위 변경은 팀과 영향도 평가가 먼저입니다.',
    explanation:
      '긴급 요청이 들어오면 영향도를 평가하고 기존 항목과 트레이드오프를 팀과 논의해야 합니다.',
  },
  {
    id: 'pm_quiz_13',
    type: 'quiz',
    chapter: 7,
    selectType: 'single',
    difficulty: 'intermediate',
    question: '디자인 핸드오프 시 PM이 반드시 확인해야 할 것은?',
    context: '디자이너와 개발자 사이에서 PM의 역할을 이해합니다.',
    options: [
      { id: 'a', text: '디자인이 예쁜지 심미적으로 평가' },
      {
        id: 'b',
        text: 'PRD의 유저 스토리와 인수조건이 디자인에 반영되었는지 확인',
      },
      { id: 'c', text: '개발자에게 디자인 파일을 전달만 한다' },
      { id: 'd', text: '디자이너에게 개발 일정을 알려준다' },
    ],
    hint: 'PM은 기획 의도가 디자인에 반영되었는지 확인하는 다리 역할입니다.',
    explanation:
      'PM은 PRD의 유저 스토리와 인수조건이 디자인에 반영되었는지 확인해야 합니다.',
  },
  {
    id: 'pm_quiz_14',
    type: 'quiz',
    chapter: 8,
    selectType: 'single',
    difficulty: 'advanced',
    question: 'A/B 테스트를 설계할 때 가장 중요한 원칙은?',
    context: '데이터 기반 의사결정의 핵심 도구입니다.',
    options: [
      { id: 'a', text: '많은 변수를 동시에 테스트' },
      {
        id: 'b',
        text: '한 번에 하나의 변수만 변경하고 충분한 샘플 확보',
      },
      { id: 'c', text: '테스트 기간을 최소화' },
      { id: 'd', text: '디자이너가 선호하는 안을 기본 설정' },
    ],
    hint: '과학적 실험의 통제 변인 개념을 떠올려보세요.',
    explanation:
      'A/B 테스트 핵심은 하나의 변수만 변경하여 인과관계를 명확히 하고 충분한 샘플을 확보하는 것입니다.',
  },
]
