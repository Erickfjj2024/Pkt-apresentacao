import { useEffect, useRef } from 'react'

/**
 * useNavigation
 * Navegação híbrida: setas do teclado + swipe touch.
 *
 * @param {{ goNext: () => void, goPrev: () => void }} handlers
 */
export function useNavigation({ goNext, goPrev }) {
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)
  const SWIPE_THRESHOLD = 50  // px mínimos para considerar swipe
  const DIRECTION_LOCK = 1.5  // ratio horizontal/vertical para ignorar scroll vertical

  useEffect(() => {
    // --- Teclado ---
    function handleKeyDown(e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    }

    // --- Touch ---
    function handleTouchStart(e) {
      const t = e.touches[0]
      touchStartX.current = t.clientX
      touchStartY.current = t.clientY
    }

    function handleTouchEnd(e) {
      if (touchStartX.current === null) return
      const t = e.changedTouches[0]
      const dx = t.clientX - touchStartX.current
      const dy = t.clientY - touchStartY.current
      const absDx = Math.abs(dx)
      const absDy = Math.abs(dy)

      // Ignora se for mais vertical que horizontal (scroll natural)
      if (absDx < SWIPE_THRESHOLD || absDy * DIRECTION_LOCK > absDx) {
        touchStartX.current = null
        touchStartY.current = null
        return
      }

      if (dx < 0) {
        goNext() // swipe left = próximo
      } else {
        goPrev() // swipe right = anterior
      }

      touchStartX.current = null
      touchStartY.current = null
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goNext, goPrev])
}
