import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import Table from '../components/Table'
import Note from '../components/Note'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import { SEC } from '../data/sections'

export default function PrivilegeSecuritySlide() {
  return (
    <SlideFrame title="Hiệu lực của thay đổi quyền và nguyên tắc bảo mật" sec={SEC.priv}>
      <Cols>
        <Stack>
          <Sub>Khi nào thay đổi quyền có hiệu lực</Sub>
          <Table
            head={['Cấp quyền', 'Có hiệu lực']}
            widths={['36%', '64%']}
            rows={[
              ['Table / Column', 'Ở câu lệnh tiếp theo'],
              ['Database', 'Ở lần `USE <database>` tiếp theo'],
              ['Global (và mật khẩu)', 'Ở lần kết nối tiếp theo'],
            ]}
          />
          <Note>
            `GRANT`, `REVOKE`, `CREATE USER`... tự cập nhật bộ nhớ. `FLUSH PRIVILEGES` chỉ cần khi
            sửa trực tiếp các bảng trong schema `mysql` bằng `INSERT` / `UPDATE`.
          </Note>
        </Stack>
        <div>
          <Sub>Nguyên tắc bảo mật</Sub>
          <Ul
            items={[
              'Least privilege: chỉ cấp quyền tối thiểu cần thiết (ví dụ ứng dụng chỉ cần `SELECT`, `INSERT`, `UPDATE`, `DELETE` trên đúng một database)',
              'Giới hạn host: gán user theo IP cụ thể thay vì `%`, kết hợp firewall chỉ mở cổng 3306 cho IP đó',
              '`REQUIRE SSL`: mã hóa đường truyền, tránh lộ mật khẩu và dữ liệu',
              'Không dùng `root` cho ứng dụng',
            ]}
          />
        </div>
      </Cols>
    </SlideFrame>
  )
}
