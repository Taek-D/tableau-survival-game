// Part 2 추가 퀴즈 문제 (Ch3-5)
export const part2QuizProblems = [
  {
    id: 'pm_quiz_06',
    type: 'quiz',
    chapter: 3,
    selectType: 'single',
    difficulty: 'beginner',
    question: '다음 중 올바른 "문제 정의"의 예시는?',
    context: '사용자 문제를 명확하게 정의하는 것이 기획의 첫 걸음입니다.',
    options: [
      { id: 'a', text: '"검색 기능을 추가해야 한다"' },
      { id: 'b', text: '"사용자가 원하는 콘텐츠를 3초 내에 찾지 못해 이탈한다"' },
      { id: 'c', text: '"경쟁사에 검색 기능이 있다"' },
      { id: 'd', text: '"CEO가 검색 기능을 요청했다"' },
    ],
    hint: '좋은 문제 정의는 "누가, 어떤 상황에서, 왜 어려움을 겪는지"를 포함합니다.',
    explanation:
      '올바른 문제 정의는 사용자 관점에서 구체적인 Pain Point를 서술합니다. "기능 추가"는 솔루션이지 문제가 아니며, 경쟁사나 CEO 요청은 문제의 근거일 뿐 문제 자체가 아닙니다.',
  },
  {
    id: 'pm_quiz_07',
    type: 'quiz',
    chapter: 3,
    selectType: 'single',
    difficulty: 'intermediate',
    isBoss: true,
    question: 'JTBD(Jobs To Be Done) 프레임워크에서 "Job"의 올바른 해석은?',
    context: '도현 팀장이 JTBD 개념 이해도를 확인합니다.',
    options: [
      { id: 'a', text: '사용자가 제품에서 수행하는 기능적 작업' },
      { id: 'b', text: '사용자가 특정 상황에서 달성하고자 하는 근본적 목적' },
      { id: 'c', text: '개발팀이 구현해야 할 기술적 요구사항' },
      { id: 'd', text: '사용자의 직업과 관련된 업무 프로세스' },
    ],
    hint: 'Clayton Christensen의 밀크셰이크 사례를 떠올려보세요. 사람들이 밀크셰이크를 "고용"한 이유는?',
    explanation:
      'JTBD에서 Job은 사용자가 특정 상황에서 달성하려는 근본적 목적(progress)입니다. 기능이 아닌 목적에 집중해야 혁신적 솔루션을 찾을 수 있습니다.',
  },
  {
    id: 'pm_quiz_08',
    type: 'quiz',
    chapter: 4,
    selectType: 'single',
    difficulty: 'intermediate',
    question: 'RICE 우선순위 점수에서 "Confidence"가 중요한 이유는?',
    context: '우선순위 프레임워크의 핵심 원리를 이해하고 있는지 확인합니다.',
    options: [
      { id: 'a', text: '팀의 자신감이 높을수록 빠르게 개발할 수 있으므로' },
      { id: 'b', text: '추정의 불확실성을 반영하여 과대평가를 방지하기 위해' },
      { id: 'c', text: '경영진에게 보고할 때 신뢰도를 보여주기 위해' },
      { id: 'd', text: '팀원들의 의견 일치도를 측정하기 위해' },
    ],
    hint: 'Confidence는 Reach, Impact, Effort 추정치의 확실성을 나타냅니다.',
    explanation:
      'RICE에서 Confidence(확신도)는 다른 요소들의 추정이 얼마나 정확한지를 반영합니다. 데이터 없이 감으로 추정한 항목은 Confidence를 낮춰서, 불확실한 아이디어가 과대평가되는 것을 방지합니다.',
  },
  {
    id: 'pm_quiz_09',
    type: 'quiz',
    chapter: 5,
    selectType: 'single',
    difficulty: 'intermediate',
    question: 'PRD(제품 요구사항 문서)에 반드시 포함해야 할 항목이 아닌 것은?',
    context: 'PRD의 핵심 구성요소를 이해하고 있는지 확인합니다.',
    options: [
      { id: 'a', text: '배경 및 목표 (Background & Goals)' },
      { id: 'b', text: '상세 기술 구현 방법 (Technical Implementation Details)' },
      { id: 'c', text: '유저 스토리 (User Stories)' },
      { id: 'd', text: '성공 지표 (Success Metrics)' },
    ],
    hint: 'PRD는 "무엇을, 왜" 만드는지에 집중합니다. "어떻게" 만드는지는 누구의 영역일까요?',
    explanation:
      'PRD는 제품의 배경, 목표, 유저 스토리, 성공 지표를 정의하는 문서입니다. 상세 기술 구현은 개발팀의 Technical Design Document 영역이며, PRD에는 포함하지 않습니다.',
  },
]
