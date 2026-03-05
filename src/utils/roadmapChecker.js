import { getRoadmapAnswers } from '../data/problems/answerLoader'

export function checkRoadmap(problemId, userPlacement) {
  const answers = getRoadmapAnswers(problemId)
  if (!answers) return { correct: false, score: 0, total: 0, itemResults: {}, correctPlacement: {} }

  const { correctPlacement } = answers
  let matched = 0
  const total = Object.keys(correctPlacement).length
  const itemResults = {}

  for (const [itemId, correctZone] of Object.entries(correctPlacement)) {
    const isRight = userPlacement[itemId] === correctZone
    if (isRight) matched++
    itemResults[itemId] = { correct: isRight, correctZone }
  }

  return {
    correct: matched === total,
    score: matched,
    total,
    itemResults,
    correctPlacement,
  }
}
