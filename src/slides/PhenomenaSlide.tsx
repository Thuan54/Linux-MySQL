import SlideFrame from '../components/SlideFrame'
import Note from '../components/Note'
import P from '../components/P'
import Cols from '../components/Cols'
import Card from '../components/Card'
import { SEC } from '../data/sections'

export default function PhenomenaSlide() {
  return (
    <SlideFrame title="Ba hiện tượng khi các transaction chạy đồng thời" sec={SEC.txn}>
      <Cols layout="three">
        <Card title="Dirty read">
          <P>A đọc dữ liệu mà B vừa sửa nhưng chưa `COMMIT`. Nếu B `ROLLBACK`, dữ liệu A đã đọc thực chất không tồn tại.</P>
        </Card>
        <Card title="Non-repeatable read">
          <P>A đọc một dòng. B sửa dòng đó và `COMMIT`. A đọc lại cùng dòng thì thấy giá trị khác.</P>
        </Card>
        <Card title="Phantom read">
          <P>A truy vấn theo điều kiện (ví dụ `WHERE age &gt; 20`). B chèn thêm dòng thỏa điều kiện và `COMMIT`. A chạy lại thì thấy thêm dòng mới.</P>
        </Card>
      </Cols>
      <Note>
        Isolation level càng cao thì càng ít hiện tượng bất thường, nhưng càng tốn chi phí về khóa và khả năng chạy đồng thời.
      </Note>
    </SlideFrame>
  )
}
