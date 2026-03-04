import { useState } from 'react'
import { useGameState, useGameDispatch } from '../../hooks/useGameState'
import { checkTextInput } from '../../utils/textInputChecker'
import { EXPRESSION_EMOJI } from '../story/VisualNovel'

export default function TextInputQuestion({ problem, onComplete }) {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [hintIndex, setHintIndex] = useState(0)

  const handleSubmit = () => {
    if (!answer.trim()) return

    const result = checkTextInput(problem.id, answer)
    setIsCorrect(result.correct)
    setFeedback(result.feedback)
    setSubmitted(true)

    if (result.correct) {
      dispatch({ type: 'ANSWER_CORRECT', payload: { problemId: problem.id } })
    } else {
      dispatch({ type: 'ANSWER_INCORRECT', payload: { problemId: problem.id } })
    }
  }

  const handleContinue = () => {
    onComplete(isCorrect)
  }

  const handleRetry = () => {
    setAnswer('')
    setSubmitted(false)
    setIsCorrect(false)
    setFeedback('')
    setShowHint(true)
  }

  const handleUseHint = () => {
    dispatch({ type: 'USE_HINT' })
    setShowHint(true)
  }

  const handleNextHint = () => {
    if (problem.hints && hintIndex < problem.hints.length - 1) {
      dispatch({ type: 'USE_HINT' })
      setHintIndex(prev => prev + 1)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-up">
      {/* Main card */}
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/30">
        {/* Card background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a2e] via-[#111d33] to-[#0d1626]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,141,240,0.06),transparent_50%)]" />

        <div className="relative">
          {/* Top bar - mentor + category */}
          <div className="flex items-center justify-between px-7 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-xl border border-accent/20">
                {EXPRESSION_EMOJI.seoyeon[submitted ? (isCorrect ? 'smile' : 'serious') : 'default']}
              </div>
              <div>
                <p className="text-[15px] text-white/90 font-medium leading-snug">
                  {submitted
                    ? isCorrect
                      ? '잘 작성했어요!'
                      : feedback
                    : problem.context || '문제를 풀어보세요.'}
                </p>
              </div>
            </div>
            <span className="text-[11px] px-3 py-1.5 bg-white/[0.06] text-white/40 rounded-lg font-medium border border-white/[0.04] shrink-0 ml-4">
              서술형
            </span>
          </div>

          {/* Divider */}
          <div className="mx-7 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

          {/* Question */}
          <div className="px-7 pt-6 pb-2">
            <h3 className="text-[19px] font-bold text-white leading-relaxed tracking-[-0.01em]">
              {problem.question}
            </h3>
          </div>

          {/* Prompt */}
          {problem.prompt && (
            <div className="px-7 pb-4">
              <p className="text-[14px] text-white/50 leading-relaxed">
                {problem.prompt}
              </p>
            </div>
          )}

          {/* Textarea */}
          <div className="px-7 pb-4">
            <div className="relative">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={submitted}
                placeholder="여기에 답변을 작성하세요..."
                className="w-full min-h-[120px] px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-[15px] text-white/90 placeholder-white/25 leading-relaxed resize-y focus:outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div className="flex justify-end mt-1.5 px-1">
                <span className={`text-[12px] ${answer.length > 300 ? 'text-amber-400/70' : 'text-white/25'}`}>
                  {answer.length}자
                </span>
              </div>
            </div>
          </div>

          {/* Hint */}
          {showHint && problem.hints && !submitted && (
            <div className="mx-7 mb-5 p-4 bg-amber-500/[0.06] border border-amber-400/20 rounded-xl">
              <p className="text-[13px] text-amber-300/90 leading-relaxed">
                <span className="font-semibold text-amber-300 mr-1.5">힌트</span>
                {problem.hints[hintIndex]}
              </p>
              {problem.hints.length > 1 && hintIndex < problem.hints.length - 1 && (
                <button
                  onClick={handleNextHint}
                  disabled={state.hints <= 0}
                  className="mt-2 text-[12px] text-amber-400/60 hover:text-amber-400/90 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  다음 힌트 보기
                </button>
              )}
            </div>
          )}

          {/* Explanation after submit */}
          {submitted && (
            <div className={`mx-7 mb-5 p-5 rounded-xl border ${
              isCorrect
                ? 'bg-emerald-500/[0.06] border-emerald-400/20'
                : 'bg-red-500/[0.06] border-red-400/20'
            }`}>
              <p className={`font-bold text-[15px] mb-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                {isCorrect ? '정답!' : '오답'}
              </p>
              <p className="text-[14px] text-white/60 leading-relaxed">{problem.explanation}</p>
            </div>
          )}

          {/* Bottom actions */}
          <div className="px-7 pb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {!submitted && !showHint && problem.hints && problem.hints.length > 0 && (
                <button
                  onClick={handleUseHint}
                  disabled={state.hints <= 0}
                  className="text-[13px] text-white/30 hover:text-white/60 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-white/30"
                >
                  {state.hints <= 0 ? '힌트 없음' : '힌트 보기'}
                </button>
              )}
              {!submitted && problem.hints && problem.hints.length > 0 && (
                <span className="text-[12px] text-white/25">💡 x{state.hints}</span>
              )}
            </div>
            <div className="flex gap-2.5">
              {!submitted && (
                <button
                  onClick={handleSubmit}
                  disabled={!answer.trim()}
                  className="px-7 py-2.5 bg-accent hover:bg-accent-glow disabled:bg-white/[0.04] disabled:text-white/20 text-white rounded-xl text-[15px] font-semibold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed hover:shadow-[0_0_24px_rgba(91,141,240,0.25)]"
                >
                  제출
                </button>
              )}

              {submitted && !isCorrect && (
                <button
                  onClick={handleRetry}
                  className="px-6 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white/80 rounded-xl text-[15px] font-medium cursor-pointer transition-all"
                >
                  다시 풀기
                </button>
              )}

              {submitted && (
                <button
                  onClick={handleContinue}
                  className="px-7 py-2.5 bg-accent hover:bg-accent-glow text-white rounded-xl text-[15px] font-semibold cursor-pointer transition-all duration-200 hover:shadow-[0_0_24px_rgba(91,141,240,0.25)]"
                >
                  {isCorrect ? '다음으로' : '넘어가기'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
