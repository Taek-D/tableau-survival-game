// PM 로드맵 문제 (Chapter 4용 스켈레톤)
// 우선순위 매트릭스: 기능 카드를 Impact/Effort 사분면에 배치
export const roadmapProblems = [
  {
    id: 'pm_roadmap_01',
    type: 'roadmap',
    chapter: 4,
    difficulty: 'intermediate',
    question: '다음 기능들을 Impact/Effort 매트릭스에 배치해보세요.',
    context: '스프린트 계획 회의에서 도현 팀장이 우선순위를 정해보라고 합니다. 각 기능의 영향력(Impact)과 투입 노력(Effort)을 고려해 적절한 사분면에 배치하세요.',
    items: [
      { id: 'social_login', label: '소셜 로그인' },
      { id: 'dark_mode', label: '다크모드' },
      { id: 'payment_refactor', label: '결제 시스템 리팩토링' },
      { id: 'onboarding_tutorial', label: '온보딩 튜토리얼' },
    ],
    zones: [
      { id: 'high_impact_low_effort', label: 'Quick Wins (높은 영향 / 낮은 노력)' },
      { id: 'high_impact_high_effort', label: 'Major Projects (높은 영향 / 높은 노력)' },
      { id: 'low_impact_low_effort', label: 'Fill-Ins (낮은 영향 / 낮은 노력)' },
      { id: 'low_impact_high_effort', label: 'Thankless Tasks (낮은 영향 / 높은 노력)' },
    ],
    hint: 'Quick Wins(높은 영향 / 낮은 노력)부터 먼저 실행하는 것이 일반적인 우선순위 전략입니다.',
    explanation: '우선순위 매트릭스(Impact/Effort Matrix)는 PM이 한정된 리소스로 최대 효과를 내기 위해 사용하는 핵심 프레임워크입니다. Quick Wins를 먼저 실행하고, Major Projects는 로드맵에 배치합니다.',
  },
]
