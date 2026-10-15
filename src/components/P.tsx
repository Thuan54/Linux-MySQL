import type { ReactNode } from 'react'
import { render } from '../lib/inline'

export default function P({ children }: { children: ReactNode }) {
  return <p className="mt-0 mb-2.5 leading-[1.4]">{render(children)}</p>
}
