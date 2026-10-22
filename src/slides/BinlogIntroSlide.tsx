import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import P from '../components/P'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import Card from '../components/Card'
import Flow from '../components/Flow'
import FlowLabel from '../components/FlowLabel'
import { SEC } from '../data/sections'

export default function BinlogIntroSlide() {
  return (
    <SlideFrame title="Binary Log (binlog): khái niệm và mục đích" sec={SEC.log}>
      <Cols>
        <Card title="Binary log là gì">
          <Ul
            items={[
              'Ghi lại các thay đổi dữ liệu (`INSERT`, `UPDATE`, `DELETE`) và thay đổi cấu trúc bảng (`CREATE`, `ALTER`, `DROP`)',
              'Không ghi các câu truy vấn chỉ đọc như `SELECT`, `SHOW`',
            ]}
          />
        </Card>
        <Stack>
          <Card title="Replication">
            <P>Source ghi event vào binlog, Replica đọc và thực hiện lại để đồng bộ dữ liệu.</P>
          </Card>
          <Card title="Point-in-time recovery (PITR)">
            <P>
              Khôi phục database về đúng thời điểm mong muốn khi gặp sự cố.
            </P>
          </Card>
        </Stack>
      </Cols>

      <FlowLabel>Quy trình PITR phục hồi sự cố</FlowLabel>
      <Flow
        steps={[
          '00:00 sáng: Full backup (`mysqldump`)',
          'Thời điểm trong ngày: Lệnh SQL làm sai / mất dữ liệu',
          'Restore lại bản full backup lúc 00:00',
          'Replay binlog từ 00:00 đến ngay trước thời điểm lỗi',
          'Khôi phục DB toàn vẹn tại thời điểm mong muốn',
        ]}
        alt={[1, 3]}
      />
    </SlideFrame>
  )
}
