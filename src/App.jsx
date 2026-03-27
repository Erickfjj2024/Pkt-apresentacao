import React, { useState, useCallback } from 'react'
import { useNavigation } from './hooks/useNavigation.js'
import { useFullscreen } from './hooks/useFullscreen.js'
import NavButtons from './components/NavButtons.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import slides from './data/slides.js'

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('forward')
  const total = slides.length

  const goNext = useCallback(() => {
    if (current < total - 1) {
      setDirection('forward')
      setCurrent((c) => c + 1)
    }
  }, [current, total])

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection('back')
      setCurrent((c) => c - 1)
    }
  }, [current])

  const { containerRef, isFullscreen, toggleFullscreen } = useFullscreen()
  useNavigation({ goNext, goPrev })

  const slide = slides[current]

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col bg-white select-none overflow-hidden"
      style={{ minHeight: '100dvh' }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-100 z-10 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-black text-lg tracking-tight">PKT</span>
          <span className="hidden sm:inline text-slate-400 text-sm font-medium">Almoxarifado Digital</span>
        </div>
        <ProgressBar current={current} total={total} />
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          aria-label={isFullscreen ? 'Sair do fullscreen' : 'Entrar em fullscreen'}
        >
          {isFullscreen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/>
              <path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
              <path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
            </svg>
          )}
        </button>
      </header>

      {/* Slide Area */}
      <main className="flex-1 overflow-hidden relative">
        <SlideView slide={slide} direction={direction} slideKey={current} />
      </main>

      {/* Nav Buttons */}
      <NavButtons
        onPrev={goPrev}
        onNext={goNext}
        canPrev={current > 0}
        canNext={current < total - 1}
        current={current}
        total={total}
      />
    </div>
  )
}

function SlideView({ slide, slideKey }) {
  const Component = slide.component
  return (
    <div
      key={slideKey}
      className="w-full h-full animate-fadeIn"
      style={{ animation: 'fadeSlide 0.35s ease forwards' }}
    >
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeSlide 0.35s ease forwards; }
      `}</style>
      <Component />
    </div>
  )
}
