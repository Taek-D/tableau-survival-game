import { useState } from 'react'
import { useGameState, useGameDispatch } from '../../hooks/useGameState'
import { getTextAnswers } from '../../data/problems/answerLoader'
import { EXPRESSION_EMOJI } from '../story/VisualNovel'
import { soundFx, haptics } from '../../utils/feedback'

const SELF_EVAL_OPTIONS = [
  { key: 'good', label: '잘 썼다', emoji: '😊', desc: '핵심 내용을 잘 담았어요', dispatch: 'ANSWER_CORRECT' },
  { key: 'okay', label: '보통이다', emoji: '🤔', desc: '일부 내용이 부족해요', dispatch: 'ANSWER_CORRECT' },
  { key: 'poor', label: '부족했다', emoji: '😅', desc: '다시 공부해볼게요', dispatch: 'ANSWER_INCORRECT' },
]

export default function TextInputQuestion({ problem, onComplete }) {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [answer, setAnswer] = useState('')
  const [phase, setPhase] = useState('write') // write → compare → done
  const [selfEval, setSelfEval] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [hintIndex, setHintIndex] = useState(0)

  const answerData = getTextAnswers(problem.id)
  const sampleAnswer = answerData?.sampleAnswer || problem.explanation

  const handleSubmit = () => {
    if (!answer.trim()) return
    setPhase('compare')
  }

  const handleSelfEval = (option) => {
    setSelfEval(option)
    setPhase('done')

    if (option.dispatch === 'ANSWER_CORRECT') {
      soundFx.success()
      haptics.success()
    } else {
      soundFx.error()
      haptics.error()
    }

    dispatch({ type: option.dispatch, payload: { problemId: problem.id } })
  }

  const handleContinue = () => {
    onComplete(selfEval?.dispatch === 'ANSWER_CORRECT')
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

  const mentorExpression = phase === 'write'
    ? 'default'
    : phase === 'compare'
      ? 'impressed'
      : selfEval?.key === 'poor' ? 'serious' : 'smile'

  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-up">
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a2e] via-[#111d33] to-[#0d1626]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,141,240,0.06),transparent_50%)]" />

        <div className="relative">
          {/* Top bar */}
          <div className="flex items-center justify-between px-7 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-xl border border-accent/20">
                {EXPRESSION_EMOJI.mentor[mentorExpression] || EXPRESSION_EMOJI.mentor.default}
              </div>
              <div>
                <p className="text-[15px] text-white/90 font-medium leading-snug">
                  {phase === 'write' && (problem.context || '문제를 풀어보세요.')}
                  {phase === 'compare' && '모범답안과 비교해보세요. 스스로 평가해주세요!'}
                  {phase === 'done' && (selfEval?.key === 'poor' ? '다음엔 더 잘할 수 있을 거예요!' : '좋은 자기 평가예요!')}
                </p>
              </div>
            </div>
            <span className="text-[11px] px-3 py-1.5 bg-white/[0.06] text-white/40 rounded-lg font-medium border border-white/[0.04] shrink-0 ml-4">
              서술형
            </span>
          </div>

          <div className="mx-7 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

          {/* Question */}
          <div className="px-7 pt-6 pb-2">
            <h3 className="text-[19px] font-bold text-white leading-relaxed tracking-[-0.01em]">
              {problem.question}
            </h3>
          </div>

          {/* Prompt */}
          {problem.prompt && phase === 'write' && (
            <div className="px-7 pb-4">
              <p className="text-[14px] text-white/50 leading-relaxed">
                {problem.prompt}
              </p>
            </div>
          )}

          {/* Phase: Write */}
          {phase === 'write' && (
            <div className="px-7 pb-4">
              <div className="relative">
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="여기에 답변을 작성하세요..."
                  className="w-full min-h-[120px] px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-[15px] text-white/90 placeholder-white/25 leading-relaxed resize-y focus:outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all duration-200"
                />
                <div className="flex justify-end mt-1.5 px-1">
                  <span className={`text-[12px] ${answer.length > 300 ? 'text-amber-400/70' : 'text-white/25'}`}>
                    {answer.length}자
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Phase: Compare - 내 답변 + 모범답안 */}
          {(phase === 'compare' || phase === 'done') && (
            <div className="px-7 pb-4 space-y-3">
              {/* 내 답변 */}
              <div className="p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                <p className="text-[12px] text-accent/70 font-semibold mb-2 uppercase tracking-wider">내 답변</p>
                <p className="text-[14px] text-white/80 leading-relaxed whitespace-pre-wrap">{answer}</p>
              </div>
              {/* 모범답안 */}
              <div className="p-4 bg-accent/[0.04] border border-accent/20 rounded-xl">
                <p className="text-[12px] text-accent font-semibold mb-2 uppercase tracking-wider">모범답안</p>
                <p className="text-[14px] text-white/80 leading-relaxed whitespace-pre-wrap">{sampleAnswer}</p>
              </div>
            </div>
          )}

          {/* Phase: Compare - 자기평가 선택 */}
          {phase === 'compare' && (
            <div className="px-7 pb-5">
              <p className="text-[13px] text-white/40 mb-3">내 답변을 스스로 평가해주세요</p>
              <div className="flex gap-2.5">
                {SELF_EVAL_OPTIONS.map(option => (
                  <button
                    key={option.key}
                    onClick={() => handleSelfEval(option)}
                    className="flex-1 p-3.5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.15] rounded-xl cursor-pointer transition-all duration-200 group"
                  >
                    <span className="text-xl block mb-1.5">{option.emoji}</span>
                    <span className="text-[14px] font-semibold text-white/80 group-hover:text-white block">{option.label}</span>
                    <span className="text-[12px] text-white/35 group-hover:text-white/50 block mt-0.5">{option.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Phase: Done - 결과 + 해설 */}
          {phase === 'done' && (
            <div className={`mx-7 mb-5 p-5 rounded-xl border ${selfEval?.key === 'poor'
                ? 'bg-amber-500/[0.06] border-amber-400/20'
                : 'bg-emerald-500/[0.06] border-emerald-400/20'
              }`}>
              <p className={`font-bold text-[15px] mb-2 ${selfEval?.key === 'poor' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                {selfEval?.emoji} {selfEval?.label}
              </p>
              <p className="text-[14px] text-white/60 leading-relaxed">{problem.explanation}</p>
            </div>
          )}

          {/* Hint */}
          {showHint && problem.hints && phase === 'write' && (
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

          {/* Bottom actions */}
          <div className="px-7 pb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {phase === 'write' && !showHint && problem.hints && problem.hints.length > 0 && (
                <button
                  onClick={handleUseHint}
                  disabled={state.hints <= 0}
                  className="text-[13px] text-white/30 hover:text-white/60 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-white/30"
                >
                  {state.hints <= 0 ? '힌트 없음' : '힌트 보기'}
                </button>
              )}
              {phase === 'write' && problem.hints && problem.hints.length > 0 && (
                <span className="text-[12px] text-white/25">💡 x{state.hints}</span>
              )}
            </div>
            <div className="flex gap-2.5">
              {phase === 'write' && (
                <button
                  onClick={handleSubmit}
                  disabled={!answer.trim()}
                  className="px-7 py-2.5 bg-accent hover:bg-accent-glow disabled:bg-white/[0.04] disabled:text-white/20 text-white rounded-xl text-[15px] font-semibold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed hover:shadow-[0_0_24px_rgba(91,141,240,0.25)]"
                >
                  제출
                </button>
              )}
              {phase === 'done' && (
                <button
                  onClick={handleContinue}
                  className="px-7 py-2.5 bg-accent hover:bg-accent-glow text-white rounded-xl text-[15px] font-semibold cursor-pointer transition-all duration-200 hover:shadow-[0_0_24px_rgba(91,141,240,0.25)]"
                >
                  다음으로
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
