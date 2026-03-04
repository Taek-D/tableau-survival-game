// Part 2 추가 텍스트 입력 문제 (Ch5: PRD 작성)
export const part2TextProblems = [
  {
    id: 'pm_text_03',
    type: 'text_input',
    chapter: 5,
    difficulty: 'intermediate',
    question:
      '온보딩 개선 기능에 대한 유저 스토리를 "As a ~ I want ~ So that ~" 형식으로 작성해보세요.',
    context: 'PRD에 들어갈 유저 스토리를 직접 작성해봅니다.',
    prompt:
      '"As a [사용자 유형], I want [원하는 것], So that [달성하려는 목적]" 형식으로 작성해주세요.',
    hints: [
      'As a 뒤에는 구체적인 사용자 유형을 적어보세요',
      'So that 뒤에는 사용자가 얻는 가치를 적어보세요',
    ],
    explanation:
      '유저 스토리는 사용자 관점에서 기능의 가치를 설명하는 핵심 도구입니다. 사용자 유형, 원하는 기능, 그리고 그 이유를 명확하게 구분해야 합니다.',
  },
  {
    id: 'pm_text_04',
    type: 'text_input',
    chapter: 5,
    difficulty: 'advanced',
    question:
      '온보딩 튜토리얼 기능의 인수조건(Acceptance Criteria)을 2-3개 작성해보세요. "Given-When-Then" 형식을 사용하세요.',
    context: '도현 팀장이 PRD의 마지막 관문인 인수조건 작성을 평가합니다.',
    prompt:
      '"Given [조건], When [행동], Then [결과]" 형식으로 인수조건을 작성해주세요.',
    hints: [
      'Given에는 사전 조건을, When에는 사용자 행동을 적으세요',
      '테스트 가능한 구체적인 조건으로 작성해보세요',
    ],
    explanation:
      '인수조건은 기능이 "완료"된 상태를 정의하는 테스트 가능한 조건입니다. Given-When-Then 형식은 조건, 행동, 예상 결과를 명확하게 분리하여 개발팀과 QA팀이 동일한 기준을 공유할 수 있게 합니다.',
  },
]
