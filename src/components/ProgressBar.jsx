import React from 'react'

export default function ProgressBar({ current, total }) {
  const pct = ((current + 1) / total) * 100

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-32 sm:w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-[10px] text-slate-400 font-medium tabular-nums">
        {current + 1} de {total}
      </span>
    </div>
  )
}
