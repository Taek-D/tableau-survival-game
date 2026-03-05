import { useState, useEffect } from 'react'
import { useGameState, useGameDispatch } from '../../hooks/useGameState'
import { getChapter, getColleagueCharacter } from '../../data/roleRegistry'
import VNScene from '../novel/VNScene'
import QuestionRouter from '../questions/QuestionRouter'
import TransitionScene from '../common/TransitionScene'
import CGViewer from '../common/CGViewer'
import BuffSelect from './BuffSelect'

export default function ChapterFlow() {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [showTransition, setShowTransition] = useState(true)
  const [showColleagueGreeting, setShowColleagueGreeting] = useState(false)
  const [pendingCG, setPendingCG] = useState(null)
  const [eventPhase, setEventPhase] = useState('intro') // intro → select → response
  const [selectedChoice, setSelectedChoice] = useState(null)

  const role = state.playerRole || 'pm'
  const chapter = getChapter(state.currentChapter, role)
  const colleague = getColleagueCharacter(role, state.playerGender)
  const colleagueId = colleague?.id || null

  // Show transition on chapter change
  useEffect(() => {
    setShowTransition(true)
    setShowColleagueGreeting(false)
    setEventPhase('intro')
    setSelectedChoice(null)
  }, [state.currentChapter])

  // Guard: skip empty problems phase via effect
  useEffect(() => {
    if (state.chapterPhase === 'problems') {
      const problems = chapter?.problems || []
      if (!problems[state.currentProblemIndex]) {
        dispatch({ type: 'ADVANCE_CHAPTER_PHASE' })
      }
    }
  }, [state.chapterPhase, state.currentProblemIndex, chapter, dispatch])

  // Guard: skip empty boss/event phase via effect
  useEffect(() => {
    if (state.chapterPhase === 'boss' && !chapter?.bossChallenge && state.bossIntroShown) {
      dispatch({ type: 'ADVANCE_CHAPTER_PHASE' })
    }
    if (state.chapterPhase === 'event' && !chapter?.event) {
      dispatch({ type: 'CHAPTER_COMPLETE' })
    }
  }, [state.chapterPhase, state.bossIntroShown, chapter, dispatch])

  // CG viewer intercepts chapter completion
  if (pendingCG) {
    return (
      <CGViewer
        cgKey={pendingCG.cg}
        partnerId={colleagueId}
        onDismiss={() => {
          dispatch({ type: 'ADD_CG_SEEN', payload: pendingCG.cg })
          dispatch({
            type: 'CHOICE_MADE',
            payload: {
              affectionChange: pendingCG.affectionChange,
              xpChange: pendingCG.xpChange,
              hintChange: pendingCG.hintChange || 0,
            },
          })
          dispatch({ type: 'CHAPTER_COMPLETE' })
          setPendingCG(null)
        }}
      />
    )
  }

  if (!chapter) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-text-secondary text-lg mb-2">Chapter {state.currentChapter}</p>
          <p className="text-text-dim">준비 중입니다...</p>
          <button
            onClick={() => dispatch({ type: 'CHAPTER_COMPLETE' })}
            className="mt-4 px-6 py-2 bg-accent rounded-lg text-white cursor-pointer"
          >
            챕터 완료
          </button>
        </div>
      </div>
    )
  }

  // Day transition
  if (showTransition && state.chapterPhase === 'opening') {
    return (
      <TransitionScene
        day={state.currentChapter}
        title={chapter.title}
        subtitle={chapter.subtitle}
        onComplete={() => setShowTransition(false)}
        isChapter
      />
    )
  }

  // ===== OPENING =====
  if (state.chapterPhase === 'opening') {
    if (!showColleagueGreeting) {
      return (
        <VNScene
          key={`ch${state.currentChapter}-opening`}
          background={chapter.opening.background}
          characters={chapter.opening.characters}
          dialogues={chapter.opening.dialogues}
          playerName={state.playerName}
          onComplete={() => {
            if (chapter.colleagueGreeting) {
              setShowColleagueGreeting(true)
            } else {
              dispatch({ type: 'ADVANCE_CHAPTER_PHASE' })
            }
          }}
        />
      )
    }
    // colleagueGreeting is now a flat object (no gender key)
    const greetingData = chapter.colleagueGreeting
    return (
      <VNScene
        key={`ch${state.currentChapter}-colleague-greeting`}
        background={greetingData.background}
        characters={greetingData.characters}
        dialogues={greetingData.dialogues}
        playerName={state.playerName}
        onComplete={() => dispatch({ type: 'ADVANCE_CHAPTER_PHASE' })}
      />
    )
  }

  // ===== BRIEFING =====
  if (state.chapterPhase === 'briefing') {
    return (
      <VNScene
        key={`ch${state.currentChapter}-briefing`}
        background={chapter.briefing.background}
        characters={chapter.briefing.characters}
        dialogues={chapter.briefing.dialogues}
        playerName={state.playerName}
        onComplete={() => dispatch({ type: 'ADVANCE_CHAPTER_PHASE' })}
      />
    )
  }

  // ===== PROBLEMS =====
  if (state.chapterPhase === 'problems') {
    const problems = chapter.problems || []
    const problemId = problems[state.currentProblemIndex]

    if (!problemId) {
      return null
    }

    return (
      <div className="w-full">
        <div className="text-center mb-3">
          <span className="text-[11px] px-2.5 py-1 bg-accent/15 text-accent rounded-full font-medium">
            문제 {state.currentProblemIndex + 1}/{problems.length}
          </span>
        </div>
        <QuestionRouter
          key={problemId}
          problemId={problemId}
          onComplete={() => {
            if (state.currentProblemIndex < problems.length - 1) {
              dispatch({ type: 'NEXT_PROBLEM' })
            } else {
              dispatch({ type: 'ADVANCE_CHAPTER_PHASE' })
            }
          }}
        />
      </div>
    )
  }

  // ===== BOSS =====
  if (state.chapterPhase === 'boss') {
    if (!state.bossIntroShown && chapter.bossIntro) {
      const bossDialogues = [...chapter.bossIntro.dialogues]
      // colleagueLine is now a flat array (no gender key)
      if (chapter.bossIntro.colleagueLine) {
        bossDialogues.push(...chapter.bossIntro.colleagueLine)
      }
      return (
        <VNScene
          key={`ch${state.currentChapter}-boss-intro`}
          background={chapter.bossIntro.background}
          characters={chapter.bossIntro.characters}
          dialogues={bossDialogues}
          playerName={state.playerName}
          onComplete={() => dispatch({ type: 'MARK_BOSS_INTRO_SHOWN' })}
        />
      )
    }

    const bossId = chapter.bossChallenge
    if (!bossId) {
      return null
    }

    return (
      <div className="w-full">
        <QuestionRouter
          key={bossId}
          problemId={bossId}
          onComplete={() => dispatch({ type: 'ADVANCE_CHAPTER_PHASE' })}
        />
      </div>
    )
  }

  // ===== CLEAR =====
  if (state.chapterPhase === 'clear') {
    const clearDialogues = [...chapter.clear.dialogues]
    // colleagueLine is now a flat array (no gender key)
    if (chapter.clear.colleagueLine) {
      clearDialogues.push(...chapter.clear.colleagueLine)
    }
    return (
      <VNScene
        key={`ch${state.currentChapter}-clear`}
        background={chapter.clear.background}
        characters={chapter.clear.characters}
        dialogues={clearDialogues}
        playerName={state.playerName}
        onComplete={() => dispatch({ type: 'ADVANCE_CHAPTER_PHASE' })}
      />
    )
  }

  // ===== EVENT =====
  if (state.chapterPhase === 'event') {
    const event = chapter.event
    if (!event) {
      return null
    }

    // event.choices[].response is now a flat array (no gender key)
    const eventChoices = event.choices.map((c) => ({
      text: c.text,
      response: c.response,
      affectionChange: c.affectionChange,
      xpChange: c.xpChange,
      hintChange: c.hintChange || 0,
      cg: c.cg || null,
    }))

    // Phase 1: Intro dialogue
    if (eventPhase === 'intro') {
      return (
        <VNScene
          key={`ch${state.currentChapter}-event-intro`}
          background={event.background}
          characters={[]}
          dialogues={event.intro.dialogues}
          playerName={state.playerName}
          onComplete={() => setEventPhase('select')}
        />
      )
    }

    // Phase 2: Roguelike card selection
    if (eventPhase === 'select') {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <BuffSelect
            choices={eventChoices}
            contextBackground={event.background || null}
            onSelect={(index, choice) => {
              setSelectedChoice(choice)
              const affectionChange = choice.affectionChange || 0
              const xpChange = choice.xpChange || 0
              const hintChange = choice.hintChange || 0
              if (choice.cg) {
                setPendingCG({ cg: choice.cg, affectionChange, xpChange, hintChange })
              } else {
                dispatch({ type: 'CHOICE_MADE', payload: { affectionChange, xpChange, hintChange } })
                setEventPhase('response')
              }
            }}
          />
        </div>
      )
    }

    // Phase 3: Response dialogue after selection
    if (eventPhase === 'response' && selectedChoice) {
      return (
        <VNScene
          key={`ch${state.currentChapter}-event-response`}
          background={event.background}
          characters={[]}
          dialogues={selectedChoice.response}
          playerName={state.playerName}
          onComplete={() => dispatch({ type: 'CHAPTER_COMPLETE' })}
        />
      )
    }
  }

  return null
}
