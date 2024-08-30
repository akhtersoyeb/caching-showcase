import React from "react"

type Props = {
  page: number
  badge: string
  children: React.ReactNode
}

export default function ListPanelUI({ page, badge, children }: Props) {
  return (
    <div className="flex-1 max-w-sm  space-y-3 overflow-hidden">
      <div>
        <p className="bg-blue-100 max-w-fit text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded border border-blue-400">
          {badge}
        </p>
      </div>
      <div className="rounded-lg overflow-hidden min-h-[600px] bg-slate-50">
        <p className="bg-indigo-500 w-full px-10 py-2 text-white text-center">
          Page {page}
        </p>
        <div className="px-2 py-4 space-y-3">{children}</div>
      </div>
    </div>
  )
}
