import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import { SEC } from '../data/sections'

export default function Demo3BackupSlide() {
  return (
    <SlideFrame title="Demo 3: Sao lưu và phục hồi" sec={SEC.demo}>
      <Cols layout="wide-right">
        <div>
          <Sub>Các bước</Sub>
          <Ul
            ordered
            items={[
              'Sao lưu logic `demo_db` ra file `.sql` bằng `mysqldump`',
              'Cố tình xóa database, tạo lại một database trống',
              'Đổ dữ liệu từ file backup vào database trống',
              'Kiểm tra dữ liệu đã được phục hồi',
            ]}
          />
          <Sub>Liên hệ lý thuyết</Sub>
          <Ul items={['`--single-transaction`: đọc từ snapshot MVCC, không cần khóa bảng']} />
        </div>
        <Code>{`sudo mysqldump -u root --single-transaction \\
      demo_db > ~/backup_demo_db.sql
    ls -l ~/backup_demo_db.sql

    sudo mysql -e "DROP DATABASE demo_db;"
    sudo mysql -e "CREATE DATABASE demo_db;"

    sudo mysql demo_db < ~/backup_demo_db.sql
    sudo mysql -e "SELECT * FROM demo_db.users;"`}</Code>
      </Cols>
    </SlideFrame>
  )
}
