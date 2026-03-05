import { getTextAnswers } from '../data/problems/answerLoader'

function toRegExp(pattern) {
  return pattern instanceof RegExp ? pattern : new RegExp(pattern, 'i')
}

export function checkTextInput(problemId, userAnswer) {
  const answers = getTextAnswers(problemId)
  if (!answers) return { correct: false, feedback: '정답 데이터를 찾을 수 없습니다.' }

  const { correctPatterns, partialFeedback } = answers
  const normalized = userAnswer.trim()

  if (!normalized) return { correct: false, feedback: '답변을 입력해주세요.' }

  const allMatch = correctPatterns.every(p => toRegExp(p).test(normalized))

  if (allMatch) return { correct: true, feedback: '정답입니다!' }

  if (partialFeedback) {
    for (const { pattern, message } of partialFeedback) {
      if (!toRegExp(pattern).test(normalized)) {
        return { correct: false, feedback: message }
      }
    }
  }

  return { correct: false, feedback: '다시 생각해보세요.' }
}
