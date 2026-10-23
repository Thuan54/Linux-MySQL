import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function SlowLogParamsSlide() {
  return (
    <SlideFrame title="Slow Query Log: khái niệm và các tham số" sec={SEC.log}>
      <div className="mb-3 border-l-4 border-fit bg-fit-soft/60 px-4 py-2 text-[0.88em]">
        <strong>Khái niệm & mục đích:</strong> Nhật ký ghi lại các câu SQL thực thi lâu hơn ngưỡng thời gian quy định hoặc không dùng index &mdash; công cụ hàng đầu giúp phát hiện điểm nghẽn hiệu năng (bottleneck) và tối ưu truy vấn.
      </div>
      <Table
        head={['Tham số', 'Ý nghĩa', 'Mặc định']}
        widths={['34%', '44%', '22%']}
        rows={[
          ['`slow_query_log`', 'Bật (1/ON) hoặc tắt (0/OFF) ghi log', 'OFF'],
          ['`slow_query_log_file`', 'Đường dẫn file lưu log', 'host_name-slow.log (trong datadir)'],
          ['`long_query_time`', 'Ngưỡng thời gian (giây): chạy lâu hơn sẽ bị ghi lại', '10 (khuyến nghị 1-2s)'],
          ['`log_queries_not_using_indexes`', 'Ghi nhận cả query không dùng index dù chạy nhanh', 'OFF'],
          ['`log_output`', 'Định dạng đích xuất log: ghi ra `FILE` hoặc `TABLE`', 'FILE'],
        ]}
      />
      <Note>
        Cấu hình bằng `SET GLOBAL` chỉ áp dụng cho kết nối mới và mất khi restart; muốn bền vững, ghi vào file cấu hình (`mysqld.cnf`).
      </Note>
    </SlideFrame>
  )
}
