import { Slide } from '@revealjs/react'
import { COURSE, GROUP_NAME, LECTURER, LOGO_SRC, SEMESTER, TOPIC } from '../data/info'

export default function TitleSlide() {
  return (
    <Slide>
      <div className="box-border h-[720px] px-14 text-left">
      <div className="-mx-14 mb-9 h-3.5 bg-fit" />
      {LOGO_SRC && <img className="mb-2.5 h-[84px]" src={LOGO_SRC} alt="Logo" />}
      <div className="text-[21px] leading-[1.55] text-muted">
        <strong className="text-fit">ĐẠI HỌC QUỐC GIA TP. HỒ CHÍ MINH</strong>
        <br />
        TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN
        <br />
        KHOA CÔNG NGHỆ THÔNG TIN
      </div>
      <h1 className="mt-[46px] mb-2 text-[74px] leading-tight font-bold tracking-normal text-fit normal-case">
        MySQL Database Server
      </h1>
      <div className="text-[30px] leading-[1.3]">
        Kiến trúc, phân quyền, nhật ký và giao dịch trong InnoDB
      </div>
      <div className="mt-12 text-[22px] leading-[1.7] text-muted">
        Môn học: {COURSE}
        {TOPIC && (
          <>
            <br />
            {TOPIC}: MySQL Database Server
          </>
        )}
        {GROUP_NAME && (
          <>
            <br />
            {GROUP_NAME}
          </>
        )}
        {LECTURER && (
          <>
            <br />
            Giảng viên: {LECTURER}
          </>
        )}
        {SEMESTER && (
          <>
            <br />
            {SEMESTER}
          </>
        )}
      </div>
      </div>
    </Slide>
  )
}
