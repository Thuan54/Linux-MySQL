import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Note from '../components/Note'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import { SEC } from '../data/sections'

export default function Demo4TroubleshootSlide() {
  return (
    <SlideFrame title="Demo 4: Troubleshooting sai quyền thư mục dữ liệu" sec={SEC.demo}>
      <Cols layout="wide-right">
        <div>
          <Sub>Các bước</Sub>
          <Ul
            ordered
            items={[
              'Tạo snapshot VM, rồi đổi chủ sở hữu `/var/lib/mysql` sang `root`',
              'Restart dịch vụ và xem `systemctl status`: dịch vụ không khởi động được',
              'Đọc `error.log`, tìm thông báo `Permission denied` liên quan `/var/lib/mysql`',
              'Trả quyền sở hữu về `mysql:mysql`, restart và kiểm tra lại',
            ]}
          />
          <Note>
            `mysqld` chạy dưới user `mysql`: khi thư mục thuộc `root`, tiến trình không truy cập được dữ liệu
            và bị dừng.
          </Note>
        </div>
        <Code>{`sudo chown root:root /var/lib/mysql
    sudo systemctl restart mysql
    sudo systemctl status mysql --no-pager -l

    sudo tail -n 30 /var/log/mysql/error.log

    sudo chown mysql:mysql /var/lib/mysql
    sudo systemctl restart mysql
    sudo systemctl status mysql --no-pager`}</Code>
      </Cols>
    </SlideFrame>
  )
}
