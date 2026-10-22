import SlideFrame from '../components/SlideFrame'
import Cols from '../components/Cols'
import Card from '../components/Card'
import P from '../components/P'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function IsolationPhenomenaSlide() {
  return (
    <SlideFrame title="Isolation: Tính cô lập" sec={SEC.txn}>
      <div className="mb-4 border-l-4 border-fit bg-fit-soft/70 px-4 py-2.5 text-[0.88em]">
        <strong>Tính cô lập (Isolation):</strong> Đảm bảo các transaction chạy đồng thời không dẫm chân lên nhau hay nhìn thấy trạng thái dở dang của nhau. Nếu không có cơ chế cô lập tốt, 3 hiện tượng sau sẽ phát sinh:
      </div>

      <Cols layout="three">
        <Card title="1. Dirty Read (Đọc rác)">
          <P>
            Giao dịch A đọc dữ liệu mà B vừa sửa nhưng <strong>chưa COMMIT</strong>. Nếu B gọi <code>ROLLBACK</code>, dữ liệu A vừa đọc thực chất không hề tồn tại.
          </P>
        </Card>

        <Card title="2. Non-repeatable Read">
          <P>
            Giao dịch A đọc 1 dòng. Giao dịch B sửa dòng đó và <strong>COMMIT</strong>. Giao dịch A đọc lại cùng dòng đó trong phiên của mình thì thấy giá trị đã bị đổi khác.
          </P>
        </Card>

        <Card title="3. Phantom Read (Bóng ma)">
          <P>
            Giao dịch A đọc danh sách dòng theo điều kiện (ví dụ <code>WHERE age &gt; 18</code>). B chèn thêm dòng mới và <strong>COMMIT</strong>. A truy vấn lại thấy tự nhiên lòi ra thêm dòng mới.
          </P>
        </Card>
      </Cols>

      <div className="mt-4">
        <Note>
          Để ngăn chặn 3 hiện tượng bất thường này tùy theo nhu cầu bài toán, SQL tiêu chuẩn định nghĩa 4 mức cô lập (Isolation Levels).
        </Note>
      </div>
    </SlideFrame>
  )
}
