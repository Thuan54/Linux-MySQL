import SlideFrame from '../components/SlideFrame'
import Cols from '../components/Cols'
import Card from '../components/Card'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Flow from '../components/Flow'
import FlowLabel from '../components/FlowLabel'
import { SEC } from '../data/sections'

export default function AtomicitySlide() {
  return (
    <SlideFrame title="Atomicity: Tính nguyên tử " sec={SEC.txn}>
      <Cols layout="even">
        <Card title="1. Khái niệm & Ví dụ">
          <Ul
            items={[
              'Nguyên lý "Được ăn cả, ngã về không": Tất cả thao tác phải thành công, hoặc không có gì thay đổi',
              'Không bao giờ để dữ liệu ở trạng thái dở dang nếu xảy ra lỗi',
            ]}
          />
            <Code>{`START TRANSACTION;

UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;

COMMIT; -- Hoặc ROLLBACK nếu có lỗi`}</Code>
          <p className="mt-2 text-[0.84em] text-muted">
            Nếu mất điện giữa chừng, tài khoản 1 sẽ không bị trừ tiền oan.
          </p>
        </Card>

        <Card title="2. Cơ chế hiện thực của InnoDB">
          <Ul
            items={[
              'Lệnh `COMMIT`: Xác nhận ghi nhận toàn bộ thay đổi thành chính thức',
              'Lệnh `ROLLBACK`: Hủy bỏ toàn bộ thao tác, khôi phục trạng thái cũ',
              'Vũ khí cốt lõi — Undo Log: Trước khi sửa dữ liệu, InnoDB luôn lưu bản sao giá trị cũ vào Undo Log',
              'Khi rollback hoặc crash, InnoDB đọc Undo Log để hoàn tác dữ liệu',
            ]}
          />
        </Card>
      </Cols>
    </SlideFrame>
  )
}
