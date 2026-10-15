import type { ReactNode } from 'react'
import { render } from '../lib/inline'

export default function FlowLabel({ children }: { children: ReactNode }) {
  return <p className="mt-3.5 mb-1.5 text-[0.8em] font-bold text-muted">{render(children)}</p>
}
