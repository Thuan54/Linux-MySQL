import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Note from '../components/Note'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import { SEC } from '../data/sections'

export default function BinlogCommandsSlide() {
  return (
    <SlideFrame title="Thao tác với Binary Log" sec={SEC.log}>
      <Cols>
        <Stack>
          <Sub>Trong MySQL client</Sub>
          <Code>{`SHOW VARIABLES LIKE 'log_bin%';
    SHOW BINARY LOGS;
    SHOW BINLOG EVENTS IN 'binlog.000001' LIMIT 10;

    SHOW MASTER STATUS;
    -- deprecated từ 8.2, đã bỏ ở 8.4
    SHOW BINARY LOG STATUS;   -- từ 8.2`}</Code>
        </Stack>
        <Stack>
          <Sub>Trên shell</Sub>
          <Code>{`# Đọc file binlog
    sudo mysqlbinlog /var/lib/mysql/binlog.000001

    # Replay đến một thời điểm (PITR)
    sudo mysqlbinlog \\
      --stop-datetime="2026-10-01 10:00:00" \\
      /var/lib/mysql/binlog.000001 | mysql -u root -p`}</Code>
        </Stack>
      </Cols>
      <Note>
        Trên Ubuntu với MySQL 8.0, file binlog nằm trong datadir `/var/lib/mysql/`, tên `binlog.00000N`.
        Nên đặt thời gian hết hạn hợp lý vì binlog chiếm dung lượng đáng kể trên VM nhỏ.
      </Note>
    </SlideFrame>
  )
}
