import { useState, useEffect, useCallback, useRef } from 'react'
import { getRoleCharacters } from '../../data/roleRegistry'
import { soundFx } from '../../utils/feedback'

export default function DialogueBox({ speaker, text, onAdvance, playerName }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const intervalRef = useRef(null)

  const fullText = text.replace(/{playerName}/g, playerName || '')

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(true)
    let i = 0
    intervalRef.current = setInterval(() => {
      i++
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i))
        if (i % 2 === 0) soundFx.type()
      } else {
        setIsTyping(false)
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }, 25)
    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [fullText])

  const handleClick = useCallback(() => {
    soundFx.click()
    if (isTyping) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setDisplayedText(fullText)
      setIsTyping(false)
      return
    }
    onAdvance()
  }, [isTyping, fullText, onAdvance])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleClick()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleClick])

  const isNarrator = speaker === 'narrator'
  const isPlayer = speaker === 'player'
  const CHARACTERS = getRoleCharacters()
  const character = CHARACTERS[speaker]
  const speakerName = isNarrator
    ? ''
    : isPlayer
      ? playerName
      : character?.name || speaker
  const nameColor = isPlayer ? '#a78bfa' : character?.nameColor || '#5b8df0'

  return (
    <div className="vn-dialogue-container" onClick={handleClick}>
      <div className="vn-dialogue-box">
        {speakerName && (
          <div className="vn-speaker-name" style={{ color: nameColor }}>
            {speakerName}
          </div>
        )}
        <div className={`vn-dialogue-text ${isNarrator ? 'narrator' : ''}`}>
          {displayedText}
          {isTyping && <span className="vn-cursor" />}
        </div>
        <div className="vn-dialogue-hint">
          {isTyping ? '' : '▸'}
        </div>
      </div>
    </div>
  )
}
