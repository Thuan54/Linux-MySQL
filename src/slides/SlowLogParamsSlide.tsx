import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import { SEC } from '../data/sections'

export default function SlowLogParamsSlide() {
  return (
    <SlideFrame title="Slow Query Log: khái niệm và các tham số" sec={SEC.log}>
      <div className="mb-3 border-l-4 border-fit bg-fit-soft/60 px-4 py-2 text-[0.88em]">
        <strong>Khái niệm & mục đích:</strong> Nhật ký ghi lại các câu SQL thực thi lâu hơn ngưỡng thời gian quy định hoặc không dùng index &mdash; công cụ hàng đầu giúp phát hiện điểm nghẽn hiệu năng (bottleneck) và tối ưu truy vấn.
      </div>
      <div className="mb-3 text-[0.84em] text-muted">
        <strong>Vị trí file cấu hình:</strong> <code className="rounded-[3px] border border-line bg-code px-1.5 font-mono text-[0.92em] text-ink">/etc/mysql/mysql.conf.d/mysqld.cnf</code> (hoặc <code className="rounded-[3px] border border-line bg-code px-1.5 font-mono text-[0.92em] text-ink">/etc/mysql/my.cnf</code>)
      </div>
      <Table
        head={['Tham số', 'Ý nghĩa', 'Mặc định']}
        widths={['34%', '44%', '22%']}
        rows={[
          ['`slow_query_log`', 'Bật (1) hoặc tắt (0) ghi log', '0 (OFF)'],
          ['`slow_query_log_file`', 'Đường dẫn file lưu log', 'host_name-slow.log'],
          ['`long_query_time`', 'Ngưỡng thời gian ghi log (giây)', '10 (khuyến nghị 1-2s)'],
          ['`log_queries_not_using_indexes`', 'Ghi query không dùng index (0/1)', '0 (OFF)'],
        ]}
      />
    </SlideFrame>
  )
}
