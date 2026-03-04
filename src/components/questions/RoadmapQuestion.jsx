import { useState, useCallback } from 'react'
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  useDroppable,
  useDraggable,
} from '@dnd-kit/core'
import { useGameState, useGameDispatch } from '../../hooks/useGameState'
import { checkRoadmap } from '../../utils/roadmapChecker'
import { EXPRESSION_EMOJI } from '../story/VisualNovel'

function DraggableItem({ id, label, disabled }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    disabled,
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-150 select-none
        ${isDragging
          ? 'opacity-30 scale-95'
          : disabled
            ? 'bg-white/[0.02] border-white/[0.04] text-white/30 cursor-default'
            : 'bg-[#0f1a2e] border-white/[0.1] text-white/80 cursor-grab hover:border-white/[0.2] hover:bg-white/[0.06] active:cursor-grabbing'
        }`}
    >
      {label}
    </div>
  )
}

function DroppableZone({ id, label, children, isHighlight }) {
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col gap-2 p-3 rounded-xl border min-h-[100px] transition-all duration-200
        ${isHighlight
          ? isOver
            ? 'bg-accent/[0.12] border-accent/40'
            : 'bg-accent/[0.04] border-accent/20'
          : isOver
            ? 'bg-white/[0.08] border-white/[0.15]'
            : 'bg-white/[0.03] border-white/[0.06]'
        }`}
    >
      <span className={`text-[11px] font-semibold tracking-wide uppercase leading-tight mb-1
        ${isHighlight ? 'text-accent/70' : 'text-white/30'}`}
      >
        {label}
      </span>
      {children}
    </div>
  )
}

export default function RoadmapQuestion({ problem, onComplete }) {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [placement, setPlacement] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [activeId, setActiveId] = useState(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  )

  const placedCount = Object.keys(placement).length
  const totalItems = problem.items.length
  const allPlaced = placedCount === totalItems

  const unplacedItems = problem.items.filter((item) => !placement[item.id])

  const getItemsInZone = useCallback(
    (zoneId) => {
      return problem.items.filter((item) => placement[item.id] === zoneId)
    },
    [placement, problem.items]
  )

  const handleDragStart = (event) => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    setActiveId(null)

    if (!over) return

    const itemId = active.id
    const zoneId = over.id

    const isValidZone = problem.zones.some((z) => z.id === zoneId)
    if (!isValidZone) return

    setPlacement((prev) => ({
      ...prev,
      [itemId]: zoneId,
    }))
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  const handleSubmit = () => {
    if (!allPlaced) return

    const checkResult = checkRoadmap(problem.id, placement)
    setResult(checkResult)
    setSubmitted(true)

    if (checkResult.correct) {
      dispatch({ type: 'ANSWER_CORRECT', payload: { problemId: problem.id } })
    } else {
      dispatch({ type: 'ANSWER_INCORRECT', payload: { problemId: problem.id } })
    }
  }

  const handleContinue = () => {
    onComplete(result?.correct ?? false)
  }

  const handleRetry = () => {
    setPlacement({})
    setSubmitted(false)
    setResult(null)
    setShowHint(true)
  }

  const activeItem = activeId ? problem.items.find((item) => item.id === activeId) : null

  const isCorrect = result?.correct ?? false

  // Order zones for 2x2 grid: top-left, top-right, bottom-left, bottom-right
  const zoneOrder = [
    'high_impact_low_effort',
    'high_impact_high_effort',
    'low_impact_low_effort',
    'low_impact_high_effort',
  ]
  const orderedZones = zoneOrder
    .map((id) => problem.zones.find((z) => z.id === id))
    .filter(Boolean)

  return (
    <div className="w-full max-w-3xl mx-auto animate-slide-up">
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/30">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a2e] via-[#111d33] to-[#0d1626]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,141,240,0.06),transparent_50%)]" />

        <div className="relative">
          {/* Top bar - mentor + badge */}
          <div className="flex items-center justify-between px-7 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-xl border border-accent/20">
                {EXPRESSION_EMOJI.seoyeon[submitted ? (isCorrect ? 'smile' : 'serious') : 'default']}
              </div>
              <div>
                <p className="text-[15px] text-white/90 font-medium leading-snug">
                  {submitted
                    ? isCorrect
                      ? '정답입니다! 잘했어요.'
                      : '틀렸습니다. 다시 생각해보세요.'
                    : problem.context || '기능들을 매트릭스에 배치해보세요.'}
                </p>
              </div>
            </div>
            <span className="text-[11px] px-3 py-1.5 bg-white/[0.06] text-white/40 rounded-lg font-medium border border-white/[0.04] shrink-0 ml-4">
              우선순위 매트릭스
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

          {/* Progress indicator */}
          <div className="px-7 pt-2 pb-4">
            <span className="text-[13px] text-white/40">
              배치됨: <span className={allPlaced ? 'text-emerald-400' : 'text-white/60'}>{placedCount}/{totalItems}</span>
            </span>
          </div>

          <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            {/* Unplaced items */}
            {unplacedItems.length > 0 && (
              <div className="px-7 pb-4">
                <p className="text-[12px] text-white/30 mb-2 font-medium">미배치 항목</p>
                <div className="flex flex-wrap gap-2">
                  {unplacedItems.map((item) => (
                    <DraggableItem
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      disabled={submitted}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 2x2 Matrix */}
            <div className="px-7 pb-5">
              <div className="flex gap-0">
                {/* Y-axis label */}
                <div className="flex items-center mr-2 shrink-0">
                  <span className="text-[11px] text-white/30 font-medium tracking-wider writing-mode-vertical whitespace-nowrap"
                    style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
                  >
                    Impact &uarr;
                  </span>
                </div>

                {/* Grid */}
                <div className="flex-1 flex flex-col gap-0">
                  <div className="grid grid-cols-2 gap-2">
                    {orderedZones.map((zone) => (
                      <DroppableZone
                        key={zone.id}
                        id={zone.id}
                        label={zone.label}
                        isHighlight={zone.id === 'high_impact_low_effort'}
                      >
                        {getItemsInZone(zone.id).map((item) => (
                          <DraggableItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            disabled={submitted}
                          />
                        ))}
                      </DroppableZone>
                    ))}
                  </div>

                  {/* X-axis label */}
                  <div className="flex justify-end mt-1.5 pr-1">
                    <span className="text-[11px] text-white/30 font-medium tracking-wider">
                      Effort &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Drag overlay */}
            <DragOverlay>
              {activeItem ? (
                <div className="px-4 py-3 rounded-xl border border-accent/40 bg-[#0f1a2e] text-sm font-medium text-white/90 shadow-xl shadow-black/40 scale-105">
                  {activeItem.label}
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>

          {/* Hint */}
          {showHint && problem.hint && !submitted && (
            <div className="mx-7 mb-5 p-4 bg-amber-500/[0.06] border border-amber-400/20 rounded-xl">
              <p className="text-[13px] text-amber-300/90 leading-relaxed">
                <span className="font-semibold text-amber-300 mr-1.5">힌트</span>
                {problem.hint}
              </p>
            </div>
          )}

          {/* Result feedback */}
          {submitted && result && (
            <div className={`mx-7 mb-5 p-5 rounded-xl border ${
              isCorrect
                ? 'bg-emerald-500/[0.06] border-emerald-400/20'
                : 'bg-red-500/[0.06] border-red-400/20'
            }`}>
              <p className={`font-bold text-[15px] mb-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                {isCorrect ? '정답!' : `${result.score}/${result.total} 정답`}
              </p>
              <p className="text-[14px] text-white/60 leading-relaxed">{problem.explanation}</p>
            </div>
          )}

          {/* Bottom actions */}
          <div className="px-7 pb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {!submitted && !showHint && problem.hint && (
                <button
                  onClick={() => {
                    dispatch({ type: 'USE_HINT' })
                    setShowHint(true)
                  }}
                  disabled={state.hints <= 0}
                  className="text-[13px] text-white/30 hover:text-white/60 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-white/30"
                >
                  {state.hints <= 0 ? '힌트 없음' : '힌트 보기'}
                </button>
              )}
              {!submitted && problem.hint && (
                <span className="text-[12px] text-white/25">💡 ×{state.hints}</span>
              )}
            </div>
            <div className="flex gap-2.5">
              {!submitted && (
                <button
                  onClick={handleSubmit}
                  disabled={!allPlaced}
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
