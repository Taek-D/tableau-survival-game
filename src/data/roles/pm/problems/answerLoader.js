import { _k } from './_key.js'

let _cache = null

function decode() {
  if (_cache) return _cache
  const raw = atob(_k)
  // UTF-8 디코딩: base64 → binary string → Uint8Array → UTF-8 text
  const bytes = new Uint8Array(raw.length)
  for (let i = 0; i < raw.length; i++) {
    bytes[i] = raw.charCodeAt(i)
  }
  _cache = JSON.parse(new TextDecoder().decode(bytes))
  return _cache
}

export function getQuizAnswers(problemId) {
  return decode().q[problemId] || null
}

export function getTextAnswers(problemId) {
  return decode().t[problemId] || null
}

export function getRoadmapAnswers(problemId) {
  return decode().r[problemId] || null
}
