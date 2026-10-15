import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function LogComparisonSlide() {
  return (
    <SlideFrame title="Phân biệt redo log, undo log và binlog" sec={SEC.txn}>
      <Table
        head={['', 'Redo log', 'Undo log', 'Binary log']}
        widths={['16%', '28%', '28%', '28%']}
        rows={[
          ['Thuộc tầng', 'InnoDB', 'InnoDB', 'Server Layer'],
          ['Mục đích', 'Crash recovery (Durability)', 'Rollback, MVCC (Atomicity, Isolation)', 'Replication, PITR'],
          ['Nội dung', 'Thay đổi ở mức page', 'Thông tin để hoàn tác thay đổi (giá trị cũ)', 'Event thay đổi dữ liệu (theo binlog_format)'],
          ['Dùng khi', 'Khởi động lại sau crash', '`ROLLBACK`, đọc nhất quán', 'Replica đọc; restore rồi replay'],
        ]}
      />
      <Note>
        Redo log và binlog được ghi phối hợp (two-phase commit) để hai log luôn nhất quán với nhau.
      </Note>
    </SlideFrame>
  )
}
