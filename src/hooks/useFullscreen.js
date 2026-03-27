import { useRef, useState, useCallback, useEffect } from 'react'

/**
 * useFullscreen
 * Gerencia a Fullscreen API do navegador no elemento referenciado.
 *
 * Retorna:
 *   containerRef  — ref para anexar ao elemento pai
 *   isFullscreen  — boolean do estado atual
 *   toggleFullscreen — função para alternar
 */
export function useFullscreen() {
  const containerRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = useCallback(async () => {
    const el = containerRef.current
    if (!el) return

    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen({ navigationUI: 'hide' })
      } else {
        await document.exitFullscreen()
      }
    } catch (err) {
      // Fullscreen bloqueado (iOS Safari, por ex.) — ignora silenciosamente
      console.warn('Fullscreen indisponível:', err.message)
    }
  }, [])

  useEffect(() => {
    function onFSChange() {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', onFSChange)
    return () => document.removeEventListener('fullscreenchange', onFSChange)
  }, [])

  return { containerRef, isFullscreen, toggleFullscreen }
}
