import type { ReactNode } from 'react'
import { Slide } from '@revealjs/react'

type Props = {
  title: string
  sec: string
  children: ReactNode
}

/** Khung chuẩn của một slide nội dung: tiêu đề, tên phần và chân trang */
export default function SlideFrame({ title, sec, children }: Props) {
  return (
    <Slide>
      <div className="flex h-[720px] flex-col px-14 text-left">
        <div className="mb-[22px] flex items-baseline justify-between gap-6 border-b-[3px] border-fit pt-[34px] pb-2.5">
          <h2 className="m-0 text-[38px] leading-tight font-bold tracking-normal text-fit normal-case">
            {title}
          </h2>
          <span className="shrink-0 text-[17px] text-muted">{sec}</span>
        </div>

        <div className="min-h-0 flex-1">{children}</div>

        <div className="border-t border-line py-2 text-[13px] text-muted">
          Khoa Công nghệ thông tin · Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM · MySQL Database Server
        </div>
      </div>
    </Slide>
  )
}
