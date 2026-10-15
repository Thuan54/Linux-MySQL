import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import Flow from '../components/Flow'
import FlowLabel from '../components/FlowLabel'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function ServerLayerSlide() {
  return (
    <SlideFrame title="Server Layer: xử lý một câu lệnh SQL" sec={SEC.arch}>
      <Table
        head={['Thành phần', 'Vai trò']}
        widths={['22%', '78%']}
        rows={[
          ['Connection Manager', 'Nhận kết nối, cấp một thread cho mỗi kết nối (có thread cache), giới hạn bởi `max_connections`'],
          ['Authentication', 'Xác thực tài khoản `\'user\'@\'host\'` và mật khẩu'],
          ['Parser', 'Phân tích cú pháp câu lệnh SQL thành parse tree'],
          ['Preprocessor', 'Kiểm tra bảng, cột có tồn tại không và user có đủ quyền không'],
          ['Optimizer', 'Ước lượng chi phí các phương án (dùng index nào, thứ tự join) và chọn execution plan'],
          ['Executor', 'Thực thi plan, gọi xuống Storage Engine để đọc/ghi dữ liệu'],
        ]}
      />
      <FlowLabel>Khi kết nối (một lần)</FlowLabel>
      <Flow steps={['Client', 'Connection Manager', 'Authentication']} />
      <FlowLabel>Với mỗi câu lệnh</FlowLabel>
      <Flow
        steps={['Parser', 'Preprocessor', 'Optimizer', 'Executor', 'Storage Engine', 'Kết quả về Client']}
        alt={[4]}
      />
      <Note>Query cache đã bị loại bỏ hoàn toàn từ MySQL 8.0.</Note>
    </SlideFrame>
  )
}
