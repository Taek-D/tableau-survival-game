import { quizProblems } from './quizProblems.js'
import { textInputProblems } from './textInputProblems.js'
import { roadmapProblems } from './roadmapProblems.js'
import { part2QuizProblems } from './_part2_quiz.js'
import { part2TextProblems } from './_part2_text.js'
import { part2RoadmapProblems } from './_part2_roadmap.js'
import { part3QuizProblems } from './_part3_quiz.js'
import { part3TextProblems } from './_part3_text.js'
import { part3RoadmapProblems } from './_part3_roadmap.js'

export function getAllProblems() {
  return [
    ...quizProblems,
    ...part2QuizProblems,
    ...part3QuizProblems,
    ...textInputProblems,
    ...part2TextProblems,
    ...part3TextProblems,
    ...roadmapProblems,
    ...part2RoadmapProblems,
    ...part3RoadmapProblems,
  ]
}

export {
  quizProblems,
  textInputProblems,
  roadmapProblems,
  part2QuizProblems,
  part2TextProblems,
  part2RoadmapProblems,
  part3QuizProblems,
  part3TextProblems,
  part3RoadmapProblems,
}
