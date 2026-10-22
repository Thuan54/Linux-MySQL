import SlideFrame from '../components/SlideFrame'
import Cols from '../components/Cols'
import { SEC } from '../data/sections'

export default function LogOverviewSlide() {
  return (
    <SlideFrame title="Cơ chế lưu trữ nhật ký" sec={SEC.log}>
      <div className="mb-8 border-l-4 border-fit bg-fit-soft/70 px-4 py-3 text-[1em]">
        Trong buổi thuyết trình hôm nay, nhóm sẽ giới thiệu <strong>2 loại log chính</strong>:
      </div>

      <Cols layout="even">
        <div className="flex flex-col items-center justify-center rounded border border-t-4 border-line border-t-fit bg-white py-12 px-6 text-center shadow-sm">
          <span className="text-4xl font-extrabold text-fit/30">01</span>
          <h3 className="mt-3 text-2xl font-bold text-fit">Binary Log</h3>
          <p className="mt-1 text-muted text-base">(Binlog)</p>
        </div>

        <div className="flex flex-col items-center justify-center rounded border border-t-4 border-line border-t-fit bg-white py-12 px-6 text-center shadow-sm">
          <span className="text-4xl font-extrabold text-fit/30">02</span>
          <h3 className="mt-3 text-2xl font-bold text-fit">Slow Query Log</h3>
          <p className="mt-1 text-muted text-base">(Nhật ký truy vấn chậm)</p>
        </div>
      </Cols>
    </SlideFrame>
  )
}
