import SlideFrame from '../components/SlideFrame'
import Cols from '../components/Cols'
import Card from '../components/Card'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Flow from '../components/Flow'
import FlowLabel from '../components/FlowLabel'
import { SEC } from '../data/sections'

export default function SlowLogCaseStudySlide() {
  return (
    <SlideFrame title="Ví dụ thực tế: Tối ưu hiệu năng bằng Slow Query Log" sec={SEC.log}>
      <Cols layout="even">
        <Card title="1. Tình huống & Bắt câu lệnh chậm">
          <Ul
            items={[
              'Hệ thống phản hồi chậm, CPU máy chủ tăng cao bất thường',
              'Tra cứu Slow Query Log, phát hiện ngay câu lệnh gây nghẽn:',
            ]}
          />
          <div className="mt-3.5">
            <Code>{`SELECT * FROM orders 
WHERE user_id = 1002 
ORDER BY created_at DESC;`}</Code>
          </div>
        </Card>

        <Card title="2. Phân tích & Hướng xử lý">
          <Ul
            items={[
              'Phân tích & Nguyên nhân: Dùng `EXPLAIN` phát hiện bảng lớn chưa có index, lệnh phải quét toàn bộ bảng',
              'Hướng xử lý: Tạo thêm index cho cột tìm kiếm (`user_id`, `created_at`)',
              'Kết quả: Truy vấn chạy tức thì, CPU máy chủ hạ nhiệt, hệ thống mượt mà trở lại',
            ]}
          />
        </Card>
      </Cols>

      <FlowLabel>Quy trình xử lý sự cố</FlowLabel>
      <Flow
        steps={[
          '1. Hệ thống chậm, CPU cao',
          '2. Tra cứu Slow Log',
          '3. Phân tích nguyên nhân',
          '4. Tối ưu Index',
          '5. Hệ thống mượt mà',
        ]}
        alt={[1, 3]}
      />
    </SlideFrame>
  )
}
