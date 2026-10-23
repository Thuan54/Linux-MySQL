import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function IsolationLevelsSlide() {
  return (
    <SlideFrame title="Bốn mức cô lập và cơ chế MVCC" sec={SEC.txn}>
      <Table
        head={['Mức cô lập', 'Dirty Read', 'Non-Repeatable', 'Phantom Read', 'Hành vi trong InnoDB', 'Hiệu năng']}
        widths={['19%', '12%', '13%', '13%', '33%', '10%']}
        rows={[
          ['`READ UNCOMMITTED`', ' Có bị', ' Có bị', ' Có bị', 'Không lock, đọc thẳng dữ liệu chưa commit', 'Cực cao'],
          ['`READ COMMITTED`', ' Khắc phục', ' Có bị', ' Có bị', 'Mỗi SELECT tạo 1 snapshot mới qua MVCC', 'Cao'],
          [
            '`REPEATABLE READ` (Mặc định)',
            'Khắc phục',
            ' Khắc phục',
            ' Khắc phục',
            'Giữ 1 snapshot suốt transaction; chặn phantom bằng Next-Key Lock',
            'Cân bằng',
          ],
          ['`SERIALIZABLE`', 'Khắc phục', ' Khắc phục', ' Khắc phục', 'Khắt khe nhất, tự động biến SELECT thành khóa chia sẻ', 'Thấp nhất'],
        ]}
      />

      <div className="mt-4">
        <Note>
          <strong>MVCC (Multi-Version Concurrency Control):</strong> InnoDB dùng Undo Log để lưu các phiên bản cũ của dòng dữ liệu, giúp <em>&ldquo;Đọc không chặn Ghi, Ghi không chặn Đọc&rdquo;</em> mà vẫn đảm bảo tính cô lập!
        </Note>
      </div>
    </SlideFrame>
  )
}
