import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import Flow from '../components/Flow'
import FlowLabel from '../components/FlowLabel'
import P from '../components/P'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import Card from '../components/Card'
import { SEC } from '../data/sections'

export default function BinlogIntroSlide() {
  return (
    <SlideFrame title="Binary Log (binlog): khái niệm và mục đích" sec={SEC.log}>
      <Cols>
        <Card title="Binary log là gì">
          <Ul
            items={[
              'Các file nhị phân ghi lại event thay đổi dữ liệu và cấu trúc: `INSERT`, `UPDATE`, `DELETE`, DDL',
              'Không ghi `SELECT`, `SHOW`',
              'Đọc bằng công cụ `mysqlbinlog`',
              'Từ 8.0 bật mặc định; `binlog_expire_logs_seconds` mặc định 30 ngày',
            ]}
          />
        </Card>
        <Stack>
          <Card title="Replication">
            <P>Source ghi event vào binlog, Replica đọc và thực hiện lại để đồng bộ dữ liệu.</P>
          </Card>
          <Card title="Point-in-time recovery (PITR)">
            <P>Restore bản full backup, rồi replay binlog đến đúng thời điểm mong muốn (ví dụ ngay trước khi lỡ `DROP TABLE`).</P>
          </Card>
        </Stack>
      </Cols>
      <FlowLabel>Quy trình PITR</FlowLabel>
      <Flow
        steps={['Full backup (`mysqldump`)', 'Restore', 'Replay binlog bằng `mysqlbinlog`', 'Dừng ở thời điểm mong muốn']}
      />
    </SlideFrame>
  )
}
