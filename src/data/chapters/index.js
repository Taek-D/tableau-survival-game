// 호환성 어댑터: 기존 import 경로를 roleRegistry로 위임
import {
  getChapter as _getChapter,
  getChapterMeta,
  getPartMeta,
  getMaxChapter,
} from '../roleRegistry'

export const CHAPTER_META = getChapterMeta('pm')
export const PART_META = getPartMeta('pm')

export function getChapter(chapterId) {
  return _getChapter(chapterId, 'pm')
}

export function getMaxChapterCount() {
  return getMaxChapter('pm')
}
