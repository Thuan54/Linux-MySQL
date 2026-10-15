import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import Table from '../components/Table'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import { SEC } from '../data/sections'

export default function DurabilitySlide() {
  return (
    <SlideFrame title="Durability: redo log và crash recovery" sec={SEC.txn}>
      <Cols>
        <div>
          <Ul
            ordered
            items={[
              'Thay đổi được thực hiện trên data page trong Buffer Pool',
              'Khi `COMMIT`, InnoDB ghi redo log xuống đĩa trước (ghi tuần tự, nhanh)',
              'Data page được ghi xuống file `.ibd` sau đó (checkpoint)',
              'Nếu server crash, khi khởi động lại InnoDB đọc redo log để áp dụng lại các thay đổi chưa kịp ghi vào data file (crash recovery)',
            ]}
          />
        </div>
        <Stack>
          <Sub>`innodb_flush_log_at_trx_commit`</Sub>
          <Table
            head={['Giá trị', 'Hành vi', 'Rủi ro']}
            widths={['16%', '46%', '38%']}
            rows={[
              ['1 (mặc định)', 'Ghi và flush xuống đĩa mỗi lần commit', 'An toàn, đúng ACID'],
              ['2', 'Ghi vào OS cache mỗi commit, flush mỗi giây', 'Mất khoảng 1 giây dữ liệu nếu OS/máy crash'],
              ['0', 'Ghi và flush mỗi giây', 'Mất dữ liệu gần nhất nếu `mysqld` crash'],
            ]}
          />
        </Stack>
      </Cols>
    </SlideFrame>
  )
}
