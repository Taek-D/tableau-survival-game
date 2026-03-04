// 호환성 어댑터: 기존 import 경로를 PM 역할의 answerLoader로 위임
export {
  getQuizAnswers,
  getTextAnswers,
  getRoadmapAnswers,
} from '../roles/pm/problems/answerLoader.js'

// blockDrag, calcField 문제는 PM 역할에 없으므로 빈 결과 반환
export function getBlockAnswers() {
  return { correctAnswer: {}, alternativeAnswers: [] }
}

export function getCalcAnswers() {
  return { correctPatterns: [], sampleAnswer: '', partialFeedback: [] }
}
