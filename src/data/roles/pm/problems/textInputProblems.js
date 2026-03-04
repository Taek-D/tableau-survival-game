// PM Chapter 1 텍스트 입력 문제
export const textInputProblems = [
  {
    id: 'pm_text_01',
    type: 'text_input',
    chapter: 1,
    difficulty: 'beginner',
    question: '오늘 파악한 제품의 핵심 지표를 정리해보세요. DAU, MAU, 리텐션 중 하나를 선택하여 그 의미와 우리 제품에서 왜 중요한지 2-3문장으로 설명하세요.',
    context: '도현 팀장에게 보여줄 첫 번째 보고서입니다. 핵심 지표에 대한 이해를 보여주세요.',
    prompt: '선택한 지표의 정의, 그리고 우리 제품에서 그 지표가 중요한 이유를 작성해주세요.',
    hints: [
      '핵심 지표의 정의를 먼저 설명해보세요',
      '우리 제품과의 관련성을 언급해보세요',
    ],
    explanation: '핵심 지표를 명확히 정의하고, 제품 맥락에서의 중요성을 설명할 수 있는 것은 PM의 기본 역량입니다.',
  },
]
