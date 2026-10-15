import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function InnoDBVsMyISAMSlide() {
  return (
    <SlideFrame title="So sánh InnoDB và MyISAM" sec={SEC.arch}>
      <Table
        head={['Tiêu chí', 'InnoDB', 'MyISAM']}
        widths={['26%', '37%', '37%']}
        rows={[
          ['Engine mặc định', 'Có (từ MySQL 5.5)', 'Không'],
          ['Transaction (ACID)', 'Có (`COMMIT`, `ROLLBACK`)', 'Không'],
          ['Mức khóa', 'Row-level lock', 'Table-level lock'],
          ['Foreign key', 'Có', 'Không'],
          ['MVCC (đọc không bị ghi chặn)', 'Có', 'Không'],
          ['Crash recovery', 'Tự động (redo log)', 'Yếu, có thể phải `REPAIR TABLE`'],
          ['Tổ chức dữ liệu', 'Clustered index theo primary key', 'Data và index tách riêng'],
          ['File trên đĩa', '`.ibd` (tablespace)', '`.MYD` (data), `.MYI` (index), `.sdi` (metadata)'],
          ['Phù hợp', 'Hầu hết ứng dụng', 'Gần như chỉ còn ý nghĩa lịch sử, bảng chỉ đọc đơn giản'],
        ]}
      />
      <Note>Từ MySQL 8.0, data dictionary và các bảng phân quyền cũng dùng InnoDB.</Note>
    </SlideFrame>
  )
}
