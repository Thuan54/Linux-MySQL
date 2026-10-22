import SlideFrame from '../components/SlideFrame'
import Cols from '../components/Cols'
import Card from '../components/Card'
import Ul from '../components/Ul'
import Flow from '../components/Flow'
import FlowLabel from '../components/FlowLabel'
import { SEC } from '../data/sections'

export default function ConsistencySlide() {
  return (
    <SlideFrame title="Consistency: Tính nhất quán của dữ liệu" sec={SEC.txn}>
      <Cols layout="even">
        <Card title="1. Khái niệm & Quy tắc nghiệp vụ">
          <Ul
            items={[
              'Dữ liệu luôn chuyển từ một trạng thái hợp lệ sang một trạng thái hợp lệ khác',
              'Không transaction nào được phép phá vỡ các quy tắc và ràng buộc',
              'Bảo toàn quy tắc nghiệp vụ: Tổng số tiền hệ thống trước và sau khi chuyển phải không đổi (`Tổng A + B = hằng số`)',
              'Số dư tài khoản không bao giờ được phép âm (`balance >= 0`)',
            ]}
          />
        </Card>

        <Card title="2. Cơ chế bảo vệ của InnoDB">
          <Ul
            items={[
              'Ràng buộc schema: Dùng `PRIMARY KEY`, `UNIQUE`, `FOREIGN KEY`, `CHECK`, `NOT NULL` để ngăn dữ liệu sai ngay từ đầu',
              'Tự động hủy bỏ: Bất kỳ thao tác nào vi phạm ràng buộc đều bị MySQL từ chối và tự động rollback',
              'Doublewrite Buffer: Bảo vệ các trang dữ liệu (16KB) không bị ghi dở dang (torn page) khi mất điện đột ngột',
            ]}
          />
        </Card>
      </Cols>

      <FlowLabel>Quy trình kiểm soát tính nhất quán</FlowLabel>
      <Flow
        steps={[
          'Dữ liệu hợp lệ ban đầu',
          'Thực thi các câu lệnh',
          'Kiểm tra toàn bộ ràng buộc',
          'Vi phạm: Tự động Rollback',
          'Hợp lệ: COMMIT sang trạng thái mới',
        ]}
        alt={[1, 3]}
      />
    </SlideFrame>
  )
}
