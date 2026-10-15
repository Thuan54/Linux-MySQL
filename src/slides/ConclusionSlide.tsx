import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import { SEC } from '../data/sections'

export default function ConclusionSlide() {
  return (
    <SlideFrame title="Tổng kết" sec={SEC.end}>
      <Ul
        items={[
          'MySQL tách Server Layer (xử lý SQL) và Storage Engine (lưu trữ); InnoDB là lựa chọn mặc định nhờ transaction, row lock, MVCC, crash recovery',
          "Tài khoản được xác định bởi `'user'@'host'`; cấp quyền theo nguyên tắc least privilege bằng `GRANT` / `REVOKE`",
          'Binary log phục vụ replication và PITR; Slow Query Log giúp tìm query cần tối ưu',
          'InnoDB hiện thực ACID bằng undo log, redo log, doublewrite buffer, MVCC và locking',
        ]}
      />
    </SlideFrame>
  )
}
