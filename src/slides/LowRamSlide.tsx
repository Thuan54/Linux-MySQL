import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function LowRamSlide() {
  return (
    <SlideFrame title="Lưu ý khi chạy trên VM 1 GB RAM" sec={SEC.txn}>
      <Table
        head={['Tham số', 'Mặc định', 'Vai trò']}
        widths={['34%', '14%', '52%']}
        rows={[
          ['`innodb_buffer_pool_size`', '128 MB', 'Cache dữ liệu và index của InnoDB, thường là vùng nhớ lớn nhất'],
          ['`innodb_log_buffer_size`', '16 MB', 'Đệm redo log trước khi ghi xuống đĩa'],
          ['`max_connections`', '151', 'Số kết nối tối đa; mỗi kết nối có thread và bộ nhớ riêng'],
          ['`sort_buffer_size`, `join_buffer_size`, `read_rnd_buffer_size`', '256 KB', 'Bộ nhớ cấp theo kết nối / truy vấn'],
          ['`read_buffer_size`', '128 KB', 'Bộ nhớ cấp theo kết nối'],
        ]}
      />
      <Note>
        Tổng bộ nhớ MySQL dùng = các buffer toàn cục + (bộ nhớ theo kết nối × số kết nối), và phải chừa RAM cho hệ điều hành.
        Kiểm tra giá trị thực tế bằng `SHOW VARIABLES LIKE '...'`.
      </Note>
    </SlideFrame>
  )
}
