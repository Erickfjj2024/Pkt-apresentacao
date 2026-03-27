import React from 'react'

/**
 * SlidePlaceholder — componente temporário usado em todos os slides
 * até o Passo 6 (renderização visual final).
 * Exibe as informações do slide atual passadas via props.
 */
export default function SlidePlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50 p-8">
      <p className="text-slate-400 text-sm text-center">
        Slide será renderizado no Passo 6.
      </p>
    </div>
  )
}
