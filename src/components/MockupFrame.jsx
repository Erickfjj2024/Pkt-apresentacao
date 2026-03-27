import React from 'react'

/**
 * MockupFrame — moldura de smartphone para injetar screenshots do app.
 * Props:
 *   src: URL da imagem
 *   alt: texto alternativo
 */
export default function MockupFrame({ src, alt = 'App screenshot' }) {
  return (
    <div className="relative mx-auto flex items-center justify-center" style={{ maxWidth: 280 }}>
      {/* Moldura do smartphone */}
      <div
        className="relative rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-800 shadow-2xl overflow-hidden"
        style={{ width: 240, aspectRatio: '9/19' }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-10" />

        {/* Tela */}
        <div className="w-full h-full bg-slate-100 overflow-hidden">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-200">
              <span className="text-slate-400 text-xs text-center px-4">Imagem em breve</span>
            </div>
          )}
        </div>
      </div>

      {/* Reflexo sutil */}
      <div
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}
