import { Fragment } from 'react'
import type { ReactNode } from 'react'
import { render } from '../lib/inline'

type Props = {
  steps: ReactNode[]
  /** Chỉ số các bước được tô nền nhạt */
  alt?: number[]
}

/** Dãy các bước nối bằng mũi tên */
export default function Flow({ steps, alt }: Props) {
  return (
    <div className="flex items-stretch">
      {steps.map((s, i) => (
        <Fragment key={i}>
          {i > 0 && <div className="flex items-center px-[7px] font-bold text-fit">→</div>}
          <div
            className={`flex-1 border-[1.5px] border-fit px-2 py-2.5 text-center text-[0.78em] leading-[1.3] ${alt?.includes(i) ? 'bg-fit-soft' : 'bg-white'}`}
          >
            {render(s)}
          </div>
        </Fragment>
      ))}
    </div>
  )
}
