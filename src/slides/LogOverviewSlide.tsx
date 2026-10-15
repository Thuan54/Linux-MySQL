import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function LogOverviewSlide() {
  return (
    <SlideFrame title="Các loại log trong MySQL" sec={SEC.log}>
      <Table
        head={['Log', 'Mục đích', 'Mặc định', 'Ghi chú']}
        widths={['20%', '32%', '14%', '34%']}
        rows={[
          ['Error log', 'Lỗi khi khởi động, hoạt động, dừng server', 'Bật', 'Đọc đầu tiên khi MySQL không start (Demo 4)'],
          ['General query log', 'Mọi kết nối và câu lệnh client gửi', 'Tắt', 'Nặng, chỉ bật để debug'],
          ['Binary log', 'Các event làm thay đổi dữ liệu và cấu trúc', 'Bật (từ 8.0)', 'Replication, point-in-time recovery'],
          ['Slow query log', 'Query chạy lâu hơn `long_query_time`', 'Tắt', 'Phân tích và tối ưu hiệu năng'],
        ]}
      />
      <Note>
        Seminar tập trung vào Binary Log và Slow Query Log. Binary log thuộc Server Layer (mọi engine);
        redo log và undo log thuộc InnoDB.
      </Note>
    </SlideFrame>
  )
}
