import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import { SEC } from '../data/sections'

export default function BinlogFormatSlide() {
  return (
    <SlideFrame title="Các định dạng của Binary Log" sec={SEC.log}>
      <Table
        head={['binlog_format', 'Ghi gì', 'Đặc điểm']}
        widths={['20%', '30%', '50%']}
        rows={[
          ['`STATEMENT`', 'Câu SQL gốc', 'Nhỏ gọn, nhưng không an toàn với hàm bất định như `uuid()`, `NOW()`, `RAND()`'],
          ['`ROW` (mặc định)', 'Thay đổi ở mức từng dòng', 'Chính xác, an toàn; dung lượng lớn hơn'],
          ['`MIXED`', 'Tự chọn giữa hai loại trên', 'Dùng statement, chuyển sang row khi gặp câu lệnh bất định'],
        ]}
      />
    </SlideFrame>
  )
}
