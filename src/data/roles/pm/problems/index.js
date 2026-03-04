import { quizProblems } from './quizProblems.js'
import { textInputProblems } from './textInputProblems.js'
import { roadmapProblems } from './roadmapProblems.js'

export function getAllProblems() {
  return [...quizProblems, ...textInputProblems, ...roadmapProblems]
}

export { quizProblems, textInputProblems, roadmapProblems }
