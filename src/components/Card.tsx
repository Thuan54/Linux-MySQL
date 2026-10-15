import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export default function Card({ title, children }: Props) {
  return (
    <div className="border border-t-4 border-line border-t-fit bg-white px-[18px] pt-3 pb-2 text-[0.92em]">
      <h3 className="m-0 mb-2 text-[1.05em] font-bold text-fit normal-case">{title}</h3>
      {children}
    </div>
  )
}
