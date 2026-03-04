// Part 2 추가 로드맵 문제 (Ch4: 우선순위 결정)
export const part2RoadmapProblems = [
  {
    id: 'pm_roadmap_02',
    type: 'roadmap',
    chapter: 4,
    difficulty: 'intermediate',
    isBoss: true,
    question:
      '다음 분기 기능 백로그를 RICE 프레임워크 기반으로 우선순위를 매겨보세요.',
    context:
      '도현 팀장이 실제 스프린트 계획 회의에서 우선순위 판단을 맡겼습니다. 각 기능의 Reach, Impact, Confidence, Effort를 종합적으로 고려하세요.',
    items: [
      { id: 'push_notification', label: '푸시 알림 개인화' },
      { id: 'export_pdf', label: 'PDF 내보내기' },
      { id: 'ai_recommendation', label: 'AI 콘텐츠 추천' },
      { id: 'loading_optimization', label: '로딩 속도 최적화' },
      { id: 'multi_language', label: '다국어 지원' },
    ],
    zones: [
      { id: 'high_impact_low_effort', label: 'Quick Wins (높은 영향 / 낮은 노력)' },
      {
        id: 'high_impact_high_effort',
        label: 'Major Projects (높은 영향 / 높은 노력)',
      },
      { id: 'low_impact_low_effort', label: 'Fill-Ins (낮은 영향 / 낮은 노력)' },
      {
        id: 'low_impact_high_effort',
        label: 'Thankless Tasks (낮은 영향 / 높은 노력)',
      },
    ],
    hint: 'Reach(영향 범위)와 Impact(영향력)가 모두 높으면서 Effort가 낮은 항목이 Quick Wins입니다.',
    explanation:
      'RICE 기반 우선순위에서는 Reach(도달 사용자 수) × Impact(영향력) × Confidence(확신도) / Effort(투입 공수)로 점수를 산출합니다. 로딩 최적화처럼 모든 사용자에게 영향을 주면서 상대적으로 적은 노력이 드는 항목이 Quick Win에 해당합니다.',
  },
]
