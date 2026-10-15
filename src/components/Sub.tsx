import type { ReactNode } from 'react'
import { render } from '../lib/inline'

/** Tiêu đề nhỏ trong một slide */
export default function Sub({ children }: { children: ReactNode }) {
  return <p className="mt-0 mb-2 text-[0.95em] font-bold text-fit">{render(children)}</p>
}
