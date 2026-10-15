import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import { SEC } from '../data/sections'

export default function AcidSlide() {
  return (
    <SlideFrame title="Tính chất ACID và cơ chế của InnoDB" sec={SEC.txn}>
      <Table
        head={['Tính chất', 'Ý nghĩa', 'InnoDB hiện thực bằng']}
        widths={['16%', '30%', '54%']}
        rows={[
          ['Atomicity', 'Tất cả hoặc không gì cả', '`COMMIT` / `ROLLBACK`; undo log lưu giá trị cũ để hoàn tác'],
          ['Consistency', 'Dữ liệu luôn hợp lệ theo ràng buộc', 'PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL; doublewrite buffer và crash recovery bảo vệ dữ liệu trên đĩa'],
          ['Isolation', 'Các transaction đồng thời không ảnh hưởng nhau', 'Isolation level, MVCC, locking (row lock, gap lock, next-key lock)'],
          ['Durability', 'Đã `COMMIT` thì không mất, kể cả khi crash', 'Redo log (write-ahead logging), doublewrite buffer, `innodb_flush_log_at_trx_commit`, `sync_binlog`'],
        ]}
      />
    </SlideFrame>
  )
}
