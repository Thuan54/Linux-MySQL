import SlideFrame from '../components/SlideFrame'
import Cols from '../components/Cols'
import Card from '../components/Card'
import Ul from '../components/Ul'
import { SEC } from '../data/sections'

export default function ConsistencySlide() {
  return (
    <SlideFrame title="Consistency: Tính nhất quán của dữ liệu" sec={SEC.txn}>
      <Cols layout="even">
        <Card title="1. Khái niệm & Quy tắc nghiệp vụ">
          <Ul
            items={[
              'Chuyển trạng thái hợp lệ: Dữ liệu luôn chuyển từ một trạng thái hợp lệ sang trạng thái hợp lệ khác',
              'Bảo toàn quy tắc: Đảm bảo không vi phạm logic nghiệp vụ (ví dụ: `balance >= 0`)',
            ]}
          />
        </Card>

        <Card title="2. Cơ chế bảo vệ của InnoDB">
          <Ul
            items={[
              'Ràng buộc Schema: Khai báo `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `CHECK`, `NOT NULL` để ngăn sai lệch',
              'Tự động Rollback: Mọi thao tác vi phạm ràng buộc đều bị MySQL từ chối và tự động hoàn tác ngay lập tức',
            ]}
          />
        </Card>
      </Cols>

    </SlideFrame>
  )
}
