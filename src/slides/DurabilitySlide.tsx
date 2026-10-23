import SlideFrame from '../components/SlideFrame'
import Cols from '../components/Cols'
import Card from '../components/Card'
import Ul from '../components/Ul'
import { SEC } from '../data/sections'

export default function DurabilitySlide() {
  return (
    <SlideFrame title="Durability: Tính bền vững" sec={SEC.txn}>
      {/* 1. Khái niệm: 1 câu duy nhất */}
      <div className="mb-4 border-l-4 border-fit bg-fit-soft/70 px-4 py-2 text-[0.9em]">
        <strong>Khái niệm:</strong> Đã <code>COMMIT</code> thì dữ liệu không bao giờ bị mất, kể cả khi máy chủ mất điện hay crash.
      </div>

      <Cols layout="even">
        <Card title="Nguyên lý WAL (Write-Ahead Logging)">
          <Ul
            items={[
              'Ghi tuần tự thay đổi và trạng thái `COMMITTED` vào **Redo Log** trên đĩa trước khi báo thành công',
              'Tốc độ cực nhanh (Sequential I/O), không cần chờ ghi ngay vào file dữ liệu lớn',
            ]}
          />
        </Card>

        <Card title="Tự động phục hồi (Crash Recovery)">
          <Ul
            items={[
              'Khởi động lại sau sự cố, InnoDB đọc **Redo Log** để chạy lại (Replay) giao dịch đã commit',
              'Đồng thời dùng **Undo Log** để tự động hoàn tác các giao dịch đang chạy dở chưa commit',
            ]}
          />
        </Card>
      </Cols>
    </SlideFrame>
  )
}
