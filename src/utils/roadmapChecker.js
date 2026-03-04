import { getRoadmapAnswers } from '../data/problems/answerLoader'

export function checkRoadmap(problemId, userPlacement) {
  const answers = getRoadmapAnswers(problemId)
  if (!answers) return { correct: false, score: 0, total: 0 }

  const { correctPlacement } = answers
  let matched = 0
  const total = Object.keys(correctPlacement).length

  for (const [itemId, correctZone] of Object.entries(correctPlacement)) {
    if (userPlacement[itemId] === correctZone) matched++
  }

  return {
    correct: matched === total,
    score: matched,
    total,
  }
}
