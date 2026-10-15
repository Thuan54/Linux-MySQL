import Flow from '../components/Flow'
import FlowLabel from '../components/FlowLabel'
import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import { SEC } from '../data/sections'
import { inline } from '../lib/inline'

export default function AccessControlSlide() {
  return (
    <SlideFrame title="Hai giai đoạn kiểm soát truy cập và xác thực" sec={SEC.priv}>
      <Flow
        alt={[0]}
        steps={[
          <>
            Client kết nối
            <br />
            (user, host, mật khẩu)
          </>,
          <>
            <b>Giai đoạn 1: Connection verification</b>
            <br />
            {inline('Tìm tài khoản `user@host` khớp, kiểm tra mật khẩu (và SSL nếu `REQUIRE SSL`)')}
          </>,
          <>
            <b>Giai đoạn 2: Request verification</b>
            <br />
            Với mỗi câu lệnh, kiểm tra user có quyền trên đối tượng đó không
          </>,
        ]}
      />
      <FlowLabel>Authentication plugin</FlowLabel>
      <Table
        head={['Plugin', 'Ghi chú']}
        widths={['32%', '68%']}
        rows={[
          ['`caching_sha2_password`', 'Mặc định từ MySQL 8.0'],
          ['`mysql_native_password`', 'Dành cho ứng dụng cũ; bị tắt mặc định từ MySQL 8.4'],
          ['`auth_socket`', 'Dùng cho `root@localhost` trên Ubuntu: đăng nhập bằng user hệ điều hành, không cần mật khẩu MySQL'],
        ]}
      />
    </SlideFrame>
  )
}
