import { Slide } from '@revealjs/react'
export default function ThanksSlide() {
  return (
    <Slide>
      <div className="box-border h-[720px] px-14 text-left">
      <div className="-mx-14 mb-9 h-3.5 bg-fit" />
      <div className="flex h-[560px] flex-col items-center justify-center text-center">
        <h1 className="m-0 text-[54px] leading-tight font-bold tracking-normal text-fit normal-case">
          Cảm ơn thầy và các bạn đã lắng nghe!
        </h1>
        <div className="mt-7 text-[30px] text-muted">{'Q&A'}</div>
      </div>
      </div>
    </Slide>
  )
}
