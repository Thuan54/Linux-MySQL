import SlideFrame from '../components/SlideFrame'
import Cols from '../components/Cols'
import Card from '../components/Card'
import Code from '../components/Code'
import Ul from '../components/Ul'
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
          <div className="my-1.5">
            <Code>{`START TRANSACTION;
UPDATE account
  SET balance = balance - 100 WHERE id = 1;
UPDATE account
  SET balance = balance + 100 WHERE id = 2;
COMMIT; -- hoặc ROLLBACK nếu lỗi`}</Code>
          </div>
          <p className="mt-1 text-[0.82em] text-muted">
            Nếu mất điện giữa chừng, tài khoản 1 sẽ không bị trừ tiền oan.
          </p>
        </Card>

        <Card title="2. Cơ chế hiện thực của InnoDB">
          <Ul
            items={[
              'Vũ khí cốt lõi — Undo Log: Trước khi sửa dữ liệu, InnoDB luôn lưu bản sao giá trị cũ vào Undo Log',
              'Tự động hoàn tác: Khi xảy ra lỗi hoặc sự cố, InnoDB đọc Undo Log để rollback dữ liệu về trạng thái ban đầu',
            ]}
          />
        </Card>
      </Cols>
    </SlideFrame>
  )
}
