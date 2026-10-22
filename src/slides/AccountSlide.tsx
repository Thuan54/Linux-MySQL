import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import Table from '../components/Table'
import { SEC } from '../data/sections'

export default function AccountSlide() {
  return (
    <SlideFrame title={"Tài khoản MySQL = 'user'@'host'"} sec={SEC.priv}>
      <Table
        head={['Cách viết', 'Ý nghĩa']}
        widths={['38%', '62%']}
        rows={[
          ["`'app'@'localhost'`", 'Chỉ kết nối từ chính máy chủ MySQL'],
          ["`'app'@'192.168.56.1'`", 'Đúng một địa chỉ IP'],
          ["`'app'@'192.168.56.%'`", 'Cả một dải IP'],
          ["`'app'@'%'`", 'Từ bất kỳ đâu (rủi ro cao)'],
        ]}
      />
      <Ul
        items={[
          'Cùng tên user nhưng khác host là hai tài khoản khác nhau, có mật khẩu và quyền riêng',
          "Ví dụ: `'demo'@'localhost'` và `'demo'@'192.168.1.10'`",
        ]}
      />
    </SlideFrame>
  )
}
