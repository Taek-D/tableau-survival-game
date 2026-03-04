// Part 3 추가 텍스트 입력 문제 (Ch7-8)
export const part3TextProblems = [
  {
    id: 'pm_text_05',
    type: 'text_input',
    chapter: 7,
    difficulty: 'intermediate',
    question:
      '디자이너(서아)가 전달한 온보딩 화면 디자인에 대해 개발자(건우)에게 전달할 스펙 리뷰 코멘트를 작성하세요.',
    context:
      '디자인-개발 핸드오프 과정에서 PM의 커뮤니케이션 역량을 평가합니다.',
    prompt:
      '개발자가 구현 시 알아야 할 핵심 기획 의도와 주의사항을 2-3문장으로 작성해주세요.',
    hints: [
      '기획 의도(왜 이렇게 디자인했는지)를 먼저 설명',
      '개발 시 주의할 엣지 케이스나 예외 상황을 언급',
    ],
    explanation:
      '좋은 스펙 리뷰 코멘트는 기획 의도, 핵심 인터랙션, 엣지 케이스를 포함합니다.',
  },
  {
    id: 'pm_text_06',
    type: 'text_input',
    chapter: 7,
    difficulty: 'advanced',
    question:
      'QA 과정에서 발견된 버그에 대한 버그 리포트를 작성하세요. 재현 단계, 예상 결과, 실제 결과를 포함하세요.',
    context: '도현 팀장이 QA 프로세스 이해도를 평가합니다.',
    prompt:
      '버그의 재현 단계(Steps to Reproduce), 예상 결과(Expected), 실제 결과(Actual)를 포함하여 작성하세요.',
    hints: [
      '재현 단계를 번호를 매겨 구체적으로',
      '예상 결과와 실제 결과를 명확하게 구분',
    ],
    explanation:
      '좋은 버그 리포트는 누구나 재현 가능하도록 구체적 단계를 포함하고, 예상/실제 결과를 명확히 구분합니다.',
  },
  {
    id: 'pm_text_07',
    type: 'text_input',
    chapter: 8,
    difficulty: 'advanced',
    question:
      '온보딩 개선 프로젝트의 스프린트 회고를 작성하세요. Keep, Problem, Try를 각각 1개씩 작성하세요.',
    context:
      '도현 팀장이 마지막 과제로 회고 작성을 맡겼습니다. 2주간의 PM 여정을 돌아보세요.',
    prompt: 'KPT(Keep-Problem-Try) 형식으로 각각 1개씩 작성해주세요.',
    hints: [
      'Keep: 이번 프로젝트에서 유지하고 싶은 좋은 점',
      'Try: Problem을 해결하기 위한 구체적 방법',
    ],
    explanation: 'KPT 회고는 팀의 지속적 개선을 위한 핵심 도구입니다.',
  },
]
