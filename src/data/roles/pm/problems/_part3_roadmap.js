// Part 3 추가 로드맵 문제 (Ch8: 런칭과 회고)
export const part3RoadmapProblems = [
  {
    id: 'pm_roadmap_03',
    type: 'roadmap',
    chapter: 8,
    difficulty: 'advanced',
    question:
      '런칭 후 모니터링해야 할 KPI들을 중요도와 긴급도 매트릭스에 배치하세요.',
    context: '런칭 직후 PM이 집중해야 할 핵심 지표를 판단합니다.',
    items: [
      { id: 'crash_rate', label: '앱 크래시율' },
      { id: 'onboarding_completion', label: '온보딩 완료율' },
      { id: 'nps_score', label: 'NPS(순추천지수)' },
      { id: 'page_load_time', label: '페이지 로드 시간' },
      { id: 'feature_adoption', label: '신규 기능 사용률' },
    ],
    zones: [
      {
        id: 'high_impact_low_effort',
        label: '즉시 확인 (높은 중요도 / 높은 긴급도)',
      },
      {
        id: 'high_impact_high_effort',
        label: '주간 모니터링 (높은 중요도 / 낮은 긴급도)',
      },
      {
        id: 'low_impact_low_effort',
        label: '참고 지표 (낮은 중요도 / 높은 긴급도)',
      },
      {
        id: 'low_impact_high_effort',
        label: '월간 리뷰 (낮은 중요도 / 낮은 긴급도)',
      },
    ],
    hint: '런칭 직후에는 서비스 안정성 지표를 가장 먼저 확인해야 합니다.',
    explanation:
      '런칭 직후 크래시율, 로드 시간 등 안정성 지표를 즉시 확인하고, 온보딩 완료율과 기능 사용률은 주간 추적합니다.',
  },
]
