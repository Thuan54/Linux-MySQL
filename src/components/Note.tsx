import type { ReactNode } from 'react'
import { render } from '../lib/inline'

/** Khung ghi chú nền xanh nhạt */
export default function Note({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 border-l-[5px] border-fit bg-fit-soft px-4 py-2.5 text-[0.9em] leading-[1.4]">
      {render(children)}
    </div>
  )
}
