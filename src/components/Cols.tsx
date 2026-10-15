import type { ReactNode } from 'react'

const layouts = {
  even: 'grid-cols-2',
  three: 'grid-cols-3',
  'wide-left': 'grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]',
  'wide-right': 'grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]',
} as const

type Props = {
  layout?: keyof typeof layouts
  children: ReactNode
}

/** Chia nội dung thành nhiều cột */
export default function Cols({ layout = 'even', children }: Props) {
  return <div className={`grid items-start gap-7 ${layouts[layout]}`}>{children}</div>
}
