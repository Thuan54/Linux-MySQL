import SlideFrame from '../components/SlideFrame'
import Cols from '../components/Cols'
import Card from '../components/Card'
import Ul from '../components/Ul'
import Flow from '../components/Flow'
import FlowLabel from '../components/FlowLabel'
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
              'Ghi tuần tự thay đổi vào **Redo Log** trên đĩa trước khi báo COMMIT thành công',
              'Đảm bảo tốc độ ghi cực nhanh mà không cần chờ đồng bộ toàn bộ file dữ liệu',
            ]}
          />
        </Card>

        <Card title="Tự động phục hồi (Crash Recovery)">
          <Ul
            items={[
              'Khi server khởi động lại sau sự cố, InnoDB tự động đọc **Redo Log**',
              'Phục hồi (Replay) lại toàn bộ giao dịch đã COMMIT trước lúc sập nguồn',
            ]}
          />
        </Card>
      </Cols>

      {/* Sơ đồ 4 bước súc tích */}
      <FlowLabel>Quy trình bảo toàn dữ liệu khi có sự cố</FlowLabel>
      <Flow
        steps={[
          '1. Giao dịch COMMIT',
          '2. Ghi Redo Log xuống đĩa',
          '3. Bất ngờ sập nguồn',
          '4. Replay Redo Log phục hồi',
        ]}
        alt={[1, 3]}
      />
    </SlideFrame>
  )
}
