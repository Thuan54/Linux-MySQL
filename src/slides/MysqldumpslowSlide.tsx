import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Table from '../components/Table'
import Flow from '../components/Flow'
import FlowLabel from '../components/FlowLabel'
import P from '../components/P'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import { SEC } from '../data/sections'

export default function MysqldumpslowSlide() {
  return (
    <SlideFrame title="Phân tích log bằng mysqldumpslow" sec={SEC.log}>
      <Cols>
        <Stack>
          <P>
            `mysqldumpslow` đi kèm MySQL, gom các query giống nhau (thay giá trị cụ thể bằng `N` và `'S'`)
            và sắp xếp để tìm query tốn nhất.
          </P>
          <Code>{`mysqldumpslow -s t -t 5 \\
      /var/log/mysql/mysql-slow.log`}</Code>
          <P>
            Trong thực tế production thường dùng `pt-query-digest` (Percona Toolkit).
          </P>
        </Stack>
        <Table
          head={['Tùy chọn', 'Ý nghĩa']}
          widths={['28%', '72%']}
          rows={[
            ['`-s t`', 'Sắp xếp theo query time (tổng)'],
            ['`-s at`', 'Theo query time trung bình'],
            ['`-s c`', 'Theo số lần chạy'],
            ['`-s l`', 'Theo lock time'],
            ['`-s r`', 'Theo số dòng gửi về (rows sent)'],
            ['`-t N`', 'Chỉ hiện N query đầu'],
          ]}
        />
      </Cols>
      <FlowLabel>Quy trình tối ưu điển hình</FlowLabel>
      <Flow
        steps={['Bật slow log', 'Thu thập', '`mysqldumpslow`', '`EXPLAIN`', 'Thêm index / viết lại query', 'Đo lại']}
      />
    </SlideFrame>
  )
}
