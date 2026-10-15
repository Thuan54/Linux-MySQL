import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Table from '../components/Table'
import { SEC } from '../data/sections'

export default function IsolationLevelsSlide() {
  return (
    <SlideFrame title="Isolation levels trong InnoDB" sec={SEC.txn}>
      <Table
        head={['Mức', 'Dirty read', 'Non-repeatable', 'Phantom', 'Cơ chế trong InnoDB']}
        widths={['19%', '10%', '13%', '19%', '39%']}
        rows={[
          ['READ UNCOMMITTED', 'Có thể', 'Có thể', 'Có thể', 'SELECT thường không khóa, có thể đọc dữ liệu chưa commit'],
          ['READ COMMITTED', 'Không', 'Có thể', 'Có thể', 'Mỗi lần đọc nhất quán tạo snapshot mới'],
          ['REPEATABLE READ (mặc định)', 'Không', 'Không', 'Hạn chế (snapshot + next-key lock)', 'Một snapshot từ lần đọc đầu tiên của transaction'],
          ['SERIALIZABLE', 'Không', 'Không', 'Không', 'Như REPEATABLE READ; khi autocommit tắt, `SELECT` thường thành `SELECT ... FOR SHARE`'],
        ]}
      />
      <div className="mt-[16px]">
        <Code>{`SELECT @@transaction_isolation;
    SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;`}</Code>
      </div>
    </SlideFrame>
  )
}
