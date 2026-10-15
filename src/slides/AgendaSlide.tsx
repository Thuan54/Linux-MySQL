import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import Note from '../components/Note'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import { SEC } from '../data/sections'

export default function AgendaSlide() {
  return (
    <SlideFrame title="Nội dung trình bày" sec={SEC.intro}>
      <Cols>
        <div>
          <Sub>Phần lý thuyết</Sub>
          <Ul
            ordered
            items={[
              'Kiến trúc MySQL: Server Layer và Storage Engine (InnoDB so với MyISAM)',
              'Quản lý người dùng và phân quyền (`GRANT` / `REVOKE`)',
              'Cơ chế nhật ký: Binary Log và Slow Query Log',
              'Transaction và tính chất ACID trong InnoDB',
            ]}
          />
        </div>
        <div>
          <Sub>Phần demo</Sub>
          <Ul
            ordered
            items={[
              'Cài đặt và bảo mật (`mysql_secure_installation`, kết nối từ xa)',
              'Phân tích truy vấn chậm (`slow_query_log`, `mysqldumpslow`)',
              'Sao lưu và phục hồi (`mysqldump`)',
              'Troubleshooting: sai quyền sở hữu `/var/lib/mysql`',
            ]}
          />
        </div>
      </Cols>
      <Note>Hạ tầng: 1 máy ảo Ubuntu Server, 1 GB RAM.</Note>
    </SlideFrame>
  )
}
