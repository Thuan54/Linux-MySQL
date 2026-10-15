import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Table from '../components/Table'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function SlowLogParamsSlide() {
  return (
    <SlideFrame title="Slow Query Log: các tham số" sec={SEC.log}>
      <Table
        head={['Tham số', 'Ý nghĩa', 'Mặc định']}
        widths={['34%', '44%', '22%']}
        rows={[
          ['`slow_query_log`', 'Bật/tắt Slow Query Log', 'OFF'],
          ['`slow_query_log_file`', 'Đường dẫn file log', 'host_name-slow.log (trong datadir)'],
          ['`long_query_time`', 'Ngưỡng thời gian (giây): query chạy lâu hơn sẽ được ghi', '10'],
          ['`log_queries_not_using_indexes`', 'Ghi cả query không dùng index dù chạy nhanh', 'OFF'],
          ['`min_examined_row_limit`', 'Chỉ ghi nếu quét ít nhất N dòng', '0'],
          ['`log_output`', 'Ghi ra FILE hoặc TABLE', 'FILE'],
        ]}
      />
      <div className="mt-[16px]">
        <Code>{`SHOW VARIABLES LIKE 'slow_query_log%';
    SHOW VARIABLES LIKE 'long_query_time';`}</Code>
      </div>
      <Note>
        `SET GLOBAL long_query_time` chỉ áp dụng cho kết nối mới và mất khi restart; muốn cấu hình bền vững,
        ghi vào file cấu hình (`mysqld.cnf`).
      </Note>
    </SlideFrame>
  )
}
