import React from 'react'

export default function NavButtons({ onPrev, onNext, canPrev, canNext, current, total }) {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-t border-slate-100 shrink-0">
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm
          disabled:opacity-30 disabled:cursor-not-allowed
          enabled:bg-slate-100 enabled:text-slate-700
          enabled:active:bg-slate-200 enabled:hover:bg-slate-200
          transition-all duration-150 min-w-[80px] justify-center"
        aria-label="Slide anterior"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span>Anterior</span>
      </button>

      <span className="text-slate-400 text-xs font-medium tabular-nums">
        {current + 1} / {total}
      </span>

      <button
        onClick={onNext}
        disabled={!canNext}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm
          disabled:opacity-30 disabled:cursor-not-allowed
          enabled:bg-blue-600 enabled:text-white
          enabled:active:bg-blue-700 enabled:hover:bg-blue-700
          transition-all duration-150 min-w-[80px] justify-center"
        aria-label="Próximo slide"
      >
        <span>Próximo</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    </nav>
  )
}
