import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Note from '../components/Note'
import Cols from '../components/Cols'
import { SEC } from '../data/sections'

export default function SlowLogEntrySlide() {
  return (
    <SlideFrame title="Nội dung một entry trong Slow Query Log" sec={SEC.log}>
      <Cols>
        <div>
          <Code>{`# Time: <thời điểm>
    # User@Host: <user>[<user>] @ <host> [<ip>]
    # Query_time: <giây>  Lock_time: <giây>
    #   Rows_sent: <n>  Rows_examined: <n>
    SET timestamp=<unix time>;
    <câu lệnh SQL>;`}</Code>
        </div>
        <div>
          <Ul
            items={[
              '`Query_time`: thời gian thực thi query',
              '`Lock_time`: thời gian chờ lock',
              '`Rows_sent`: số dòng trả về Client',
              '`Rows_examined`: số dòng MySQL phải kiểm tra',
            ]}
          />
        </div>
      </Cols>
      <Note>
        Chỉ số quan trọng nhất là tỉ lệ `Rows_examined` / `Rows_sent`: quét hàng trăm nghìn dòng để trả về
        vài dòng thường là dấu hiệu thiếu index.
      </Note>
    </SlideFrame>
  )
}
